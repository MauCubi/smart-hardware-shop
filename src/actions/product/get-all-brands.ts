import { prisma } from '@/lib/prisma'


export const getAllBrands = async() => {


  try {
     
    const brands = await prisma.brand.findMany()

    
  } catch (error) {
    throw new Error("Error getting attributes" + error)
    console.log(error)
  }
}