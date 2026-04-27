import { Router } from 'express'
import { z } from 'zod'
import { prisma } from '../config/prisma.js'
import { authenticate, requireRoles } from '../middleware/auth.js'
import { ApiError, asyncHandler, success } from '../utils/api.js'
import { getRouteParam } from '../utils/request.js'

const eventSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  location: z.string().min(2),
  type: z.enum(['ACADEMIC', 'SPIRITUAL', 'SPORTS', 'CULTURAL', 'ADMINISTRATIVE']),
  coverImage: z.string().url().optional(),
  registrationRequired: z.boolean().default(false),
  maxAttendees: z.number().optional(),
})

export const eventsRouter = Router()

eventsRouter.get('/', asyncHandler(async (_req, res) => {
  const events = await prisma.event.findMany({ orderBy: { startDate: 'asc' } })
  return success(res, events)
}))

eventsRouter.get('/:id', asyncHandler(async (req, res) => {
  const eventId = getRouteParam(req.params.id)
  const event = await prisma.event.findUnique({ where: { id: eventId } })
  if (!event) throw new ApiError(404, 'Event not found')
  return success(res, event)
}))

eventsRouter.post('/', authenticate, requireRoles('admin'), asyncHandler(async (req, res) => {
  const payload = eventSchema.parse(req.body)
  const event = await prisma.event.create({ data: payload })
  return success(res, event, 'Event created', 201)
}))

eventsRouter.put('/:id', authenticate, requireRoles('admin'), asyncHandler(async (req, res) => {
  const payload = eventSchema.partial().parse(req.body)
  const eventId = getRouteParam(req.params.id)
  const event = await prisma.event.update({ where: { id: eventId }, data: payload })
  return success(res, event, 'Event updated')
}))

eventsRouter.delete('/:id', authenticate, requireRoles('admin'), asyncHandler(async (req, res) => {
  const eventId = getRouteParam(req.params.id)
  await prisma.event.delete({ where: { id: eventId } })
  return success(res, null, 'Event deleted')
}))
