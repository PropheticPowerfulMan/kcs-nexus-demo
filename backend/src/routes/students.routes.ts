import { Router } from 'express'
import { prisma } from '../config/prisma.js'
import { authenticate, requireRoles } from '../middleware/auth.js'
import { ApiError, asyncHandler, success } from '../utils/api.js'
import { getRouteParam } from '../utils/request.js'

export const studentsRouter = Router()

studentsRouter.get('/', authenticate, requireRoles('admin', 'teacher', 'parent'), asyncHandler(async (_req, res) => {
  const students = await prisma.studentProfile.findMany({
    include: {
      user: true,
      parentLinks: { include: { parent: true } },
    },
    orderBy: { enrollmentDate: 'desc' },
  })
  return success(res, students)
}))

studentsRouter.get('/:id', authenticate, asyncHandler(async (req, res) => {
  const studentId = getRouteParam(req.params.id)
  const student = await prisma.studentProfile.findUnique({
    where: { id: studentId },
    include: {
      user: true,
      parentLinks: { include: { parent: true } },
      enrollments: { include: { course: true } },
    },
  })
  if (!student) throw new ApiError(404, 'Student not found')
  return success(res, student)
}))

studentsRouter.get('/:id/grades', authenticate, asyncHandler(async (req, res) => {
  const studentId = getRouteParam(req.params.id)
  const grades = await prisma.grade.findMany({
    where: { studentId },
    include: { course: true },
    orderBy: { createdAt: 'desc' },
  })
  return success(res, grades)
}))

studentsRouter.get('/:id/assignments', authenticate, asyncHandler(async (req, res) => {
  const studentId = getRouteParam(req.params.id)
  const submissions = await prisma.assignmentSubmission.findMany({
    where: { studentId },
    include: { assignment: { include: { course: true } } },
    orderBy: { assignment: { dueDate: 'asc' } },
  })
  return success(res, submissions)
}))

studentsRouter.get('/:id/timetable', authenticate, asyncHandler(async (req, res) => {
  const studentId = getRouteParam(req.params.id)
  const student = await prisma.studentProfile.findUnique({
    where: { id: studentId },
    include: {
      enrollments: {
        include: {
          course: {
            include: { schedules: true },
          },
        },
      },
    },
  })
  if (!student) throw new ApiError(404, 'Student not found')
  const timetable = student.enrollments.flatMap((enrollment) => enrollment.course.schedules)
  return success(res, timetable)
}))

studentsRouter.get('/:id/analytics', authenticate, asyncHandler(async (req, res) => {
  const studentId = getRouteParam(req.params.id)
  const student = await prisma.studentProfile.findUnique({
    where: { id: studentId },
    include: { aiRecommendations: true, grades: true },
  })
  if (!student) throw new ApiError(404, 'Student not found')

  const overallPercentage = student.grades.length
    ? student.grades.reduce((sum, grade) => sum + grade.percentage, 0) / student.grades.length
    : 0

  return success(res, {
    studentId: student.id,
    overallGPA: student.gpa ?? Number((overallPercentage / 25).toFixed(2)),
    attendanceRate: student.attendanceRate ?? 0,
    assignmentCompletion: 91,
    riskLevel: overallPercentage < 70 ? 'high' : overallPercentage < 82 ? 'medium' : 'low',
    recommendations: student.aiRecommendations,
    performanceTrend: overallPercentage > 85 ? 'improving' : 'stable',
  })
}))

studentsRouter.put('/:id', authenticate, requireRoles('admin', 'teacher'), asyncHandler(async (req, res) => {
  const studentId = getRouteParam(req.params.id)
  const student = await prisma.studentProfile.update({
    where: { id: studentId },
    data: req.body,
    include: { user: true },
  })
  return success(res, student, 'Student updated')
}))
