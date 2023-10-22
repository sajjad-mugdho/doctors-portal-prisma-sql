import { Request, Response } from 'express'
import { doctorService } from './doctor.service'

const createDoctor = async (req: Request, res: Response) => {
  try {
    const result = await doctorService.createDoctor(req.body)
    res.status(200).json({
      status: 'success',
      code: 200,
      message: 'Doctor created Succsessfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({ status: 'error', code: 400, message: error })
  }
}

const getDoctors = async (req: Request, res: Response) => {
  try {
    const {
      limit = 10,
      page = 1,
      sortby = 'createdAt',
      sortOrder = 'asc',
      searchTerm = '',
      ...filterData
    } = req.query
    const result = await doctorService.getDoctors(
      String(sortby),
      sortOrder as 'asc' | 'desc',
      Number(limit),
      Number(page),
      String(searchTerm),
      filterData,
    )
    res.status(200).json({
      status: 'success',
      code: 200,
      message: 'Doctors fetched Succsess',
      meta: result.meta,
      data: result.data,
    })
  } catch (error) {
    res.status(400).json({ status: 'error', code: 400, message: error })
  }
}

const getDoctorById = async (req: Request, res: Response) => {
  try {
    const result = await doctorService.getDoctorById(req.params.id)
    res.status(200).json({
      status: 'success',
      code: 200,
      message: 'Doctor fetched Succsessfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({ status: 'error', code: 400, message: error })
  }
}

const updateDoctor = async (req: Request, res: Response) => {
  try {
    const result = await doctorService.updateDoctor(req.params.id, req.body)
    res.status(200).json({
      status: 'success',
      code: 200,
      message: 'Doctor Updated Succsessfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({ status: 'error', code: 400, message: error })
  }
}

const deleteDoctor = async (req: Request, res: Response) => {
  try {
    const result = await doctorService.deleteDoctor(req.params.id)
    res.status(200).json({
      status: 'success',
      code: 200,
      message: 'Doctor deleted Succsessfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({ status: 'error', code: 400, message: error })
  }
}

export const doctorController = {
  createDoctor,
  getDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
}
