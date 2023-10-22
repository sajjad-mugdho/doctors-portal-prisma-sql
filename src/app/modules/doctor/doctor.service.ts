/* eslint-disable @typescript-eslint/no-explicit-any */
import { Doctor } from '@prisma/client'
import prisma from '../../shared/prisma'

const createDoctor = async (data: Doctor): Promise<Doctor> => {
  const result = await prisma.doctor.create({
    data,
  })

  return result
}

const getDoctors = async (
  sortby: string,
  sortOrder: 'asc' | 'desc',
  limit: number,
  page: number,
  searchTerm?: string,
  filterData,
): Promise<Doctor[] | any> => {
  const result = await prisma.doctor.findMany({
    include: {
      specialization: true,
    },
    where: {
      OR: [
        {
          fullName: {
            contains: searchTerm,
            mode: 'insensitive',
          },
        },
        {
          specialization: {
            name: {
              contains: searchTerm,
              mode: 'insensitive',
            },
          },
        },
        {
          qualification: {
            contains: searchTerm,
            mode: 'insensitive',
          },
        },
      ],
    },
    take: limit,
    skip: (page - 1) * limit,
    orderBy: {
      [sortby]: sortOrder,
    },
  })
  const total = await prisma.doctor.count()
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  }
}
const getDoctorById = async (id: string): Promise<Doctor | null> => {
  const result = await prisma.doctor.findUnique({
    where: {
      id,
    },
    include: {
      specialization: true,
    },
  })
  return result
}

const updateDoctor = async (
  id: string,
  payload: Partial<Doctor>,
): Promise<Partial<Doctor>> => {
  const result = await prisma.doctor.update({
    where: {
      id,
    },
    data: payload,
  })
  return result
}

const deleteDoctor = async (id: string): Promise<Doctor> => {
  const result = await prisma.doctor.delete({
    where: {
      id,
    },
  })
  return result
}

export const doctorService = {
  createDoctor,
  getDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
}
