import { Router } from 'express'
import multer from 'multer'
import { z } from 'zod'
import { prisma } from '../config/prisma.js'
import { authenticate, requireRoles } from '../middleware/auth.js'
import { ApiError, asyncHandler, success } from '../utils/api.js'
import { getRouteParam } from '../utils/request.js'

const upload = multer({ storage: multer.memoryStorage() })

const admissionSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  dateOfBirth: z.coerce.date(),
  gender: z.string().min(1),
  nationality: z.string().min(2),
  gradeApplying: z.string().min(1),
  previousSchool: z.string().optional(),
  parentName: z.string().min(2),
  parentEmail: z.string().email(),
  parentPhone: z.string().min(6),
  relationship: z.string().min(2),
  address: z.string().min(5),
  notes: z.string().optional(),
})

export const admissionsRouter = Router()

admissionsRouter.get('/', authenticate, requireRoles('admin'), asyncHandler(async (_req, res) => {
  const applications = await prisma.admissionApplication.findMany({
    include: { documents: true },
    orderBy: { submittedAt: 'desc' },
  })
  return success(res, applications)
}))

admissionsRouter.get('/track/:number', asyncHandler(async (req, res) => {
  const applicationNumber = getRouteParam(req.params.number)
  const application = await prisma.admissionApplication.findUnique({
    where: { applicationNumber },
    include: { documents: true },
  })
  if (!application) throw new ApiError(404, 'Application not found')
  return success(res, application)
}))

admissionsRouter.get('/:id', authenticate, requireRoles('admin'), asyncHandler(async (req, res) => {
  const applicationId = getRouteParam(req.params.id)
  const application = await prisma.admissionApplication.findUnique({
    where: { id: applicationId },
    include: { documents: true },
  })
  if (!application) throw new ApiError(404, 'Application not found')
  return success(res, application)
}))

admissionsRouter.post('/', asyncHandler(async (req, res) => {
  const payload = admissionSchema.parse(req.body)
  const application = await prisma.admissionApplication.create({
    data: {
      ...payload,
      applicationNumber: `KCS-${Date.now().toString().slice(-6)}`,
    },
  })
  return success(res, application, 'Application submitted', 201)
}))

admissionsRouter.patch('/:id/status', authenticate, requireRoles('admin'), asyncHandler(async (req, res) => {
  const applicationId = getRouteParam(req.params.id)
  const schema = z.object({ status: z.enum(['DRAFT', 'SUBMITTED', 'UNDER_REVIEW', 'INTERVIEW_SCHEDULED', 'ACCEPTED', 'WAITLISTED', 'REJECTED']), notes: z.string().optional() })
  const payload = schema.parse({
    status: String(req.body.status || '').toUpperCase(),
    notes: req.body.notes,
  })

  const application = await prisma.admissionApplication.update({
    where: { id: applicationId },
    data: { status: payload.status, notes: payload.notes },
  })
  return success(res, application, 'Application status updated')
}))

admissionsRouter.post('/:id/documents', authenticate, requireRoles('admin'), upload.single('file'), asyncHandler(async (req, res) => {
  if (!req.file) throw new ApiError(400, 'No file uploaded')
  const applicationId = getRouteParam(req.params.id)

  const document = await prisma.admissionDocument.create({
    data: {
      applicationId,
      name: req.file.originalname,
      type: req.file.mimetype,
      url: `uploads/admissions/${req.file.originalname}`,
    },
  })
  return success(res, document, 'Document uploaded', 201)
}))
