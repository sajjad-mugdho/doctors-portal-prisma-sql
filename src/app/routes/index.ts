/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express'

import { SpecializationRouter } from '../modules/specialization/specialization.routes'

const router = express.Router()

const moduleRoutes: any[] = [
  {
    path: '/specialization',
    route: SpecializationRouter,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router
