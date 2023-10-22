import express from 'express'
import { specializationController } from './specialization.controller'

const router = express.Router()

router.get('/', specializationController.getSpacializations)
router.get('/:id', specializationController.getSpecializationById)
router.post('/create', specializationController.createSpecialization)
router.patch('/:id', specializationController.updateSpecialization)
router.delete('/:id', specializationController.deleteSpecialization)

export const SpecializationRouter = router
