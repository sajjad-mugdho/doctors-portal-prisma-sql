import express from 'express'
import { doctorController } from './doctor.controller'

const router = express.Router()
router.get('/', doctorController.getDoctors)

router.get('/:id', doctorController.getDoctorById)
router.post('/create', doctorController.createDoctor)
router.patch('/:id', doctorController.updateDoctor)
router.delete('/:id', doctorController.deleteDoctor)
export const DoctorRouter = router
