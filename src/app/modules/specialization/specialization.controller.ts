import { Request, Response } from 'express'
import { specializationService } from './specialization.servise'

const createSpecialization = async (req: Request, res: Response) => {
  try {
    const data = req.body
    const result = await specializationService.createSpecialization(data)
    res.status(201).json({
      status: 'success',
      code: 201,
      message: 'Specialization created successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({ status: 'error', code: 400, message: error })
  }
}

const getSpacializations = async (req: Request, res: Response) => {
  try {
    const result = await specializationService.getSpacializations()
    res.status(200).json({
      status: 'success',
      code: 200,
      message: 'Specializations fetched Succsess',
      data: result,
    })
  } catch (error) {
    res.status(400).json({ status: 'error', code: 400, message: error })
  }
}

const getSpecializationById = async (req: Request, res: Response) => {
  try {
    const result = await specializationService.getSpecializationById(
      req.params.id,
    )
    res.status(200).json({
      status: 'success',
      code: 200,
      message: 'Specializations fetched Succsessfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({ status: 'error', code: 400, message: error })
  }
}

const updateSpecialization = async (req: Request, res: Response) => {
  try {
    const result = await specializationService.updateSpecialization(
      req.params.id,
      req.body,
    )
    res.status(200).json({
      status: 'success',
      code: 200,
      message: 'Specializations Updated Succsessfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({ status: 'error', code: 400, message: error })
  }
}

const deleteSpecialization = async (req: Request, res: Response) => {
  try {
    const result = await specializationService.deleteSpecialization(
      req.params.id,
    )
    res.status(200).json({
      status: 'success',
      code: 200,
      message: 'Specializations Deleted Succsessfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({ status: 'error', code: 400, message: error })
  }
}

export const specializationController = {
  createSpecialization,
  getSpacializations,
  getSpecializationById,
  updateSpecialization,
  deleteSpecialization,
}
