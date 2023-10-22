import { Specialization } from '@prisma/client'
import prisma from '../../shared/prisma'

const createSpecialization = async (
  data: Specialization,
): Promise<Specialization> => {
  const result = await prisma.specialization.create({
    data,
  })
  return result
}

const getSpacializations = async (): Promise<Specialization[]> => {
  const result = await prisma.specialization.findMany()
  return result
}

const getSpecializationById = async (
  id: string,
): Promise<Specialization | null> => {
  const result = await prisma.specialization.findUnique({
    where: {
      id,
    },
  })
  return result
}

const updateSpecialization = async (
  id: string,
  payload: Partial<Specialization>,
): Promise<Partial<Specialization>> => {
  const result = await prisma.specialization.update({
    where: {
      id,
    },
    data: payload,
  })
  return result
}

const deleteSpecialization = async (id: string): Promise<Specialization> => {
  const result = await prisma.specialization.delete({
    where: {
      id,
    },
  })
  return result
}
export const specializationService = {
  createSpecialization,
  getSpacializations,
  getSpecializationById,
  updateSpecialization,
  deleteSpecialization,
}
