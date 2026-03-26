'use server'

import { prisma } from '@/lib/prisma'



interface Props {
  discountPage: number,
  take?: number
}


export const getPaginatedDiscounts = async ({discountPage = 1, take = 8}: Props) => {

  try {

    const discounts = await prisma.product.findMany(
      {
        where: {
          discountPrice: { not: null }
        },
        skip: take * (discountPage - 1),
        take: take
    })    

    const discountPages = Math.ceil(await prisma.product.count({ where: { discountPrice: { not: null } } }) / take)

    return { 
      discounts: discounts,
      discountPages: discountPages,
      
     }
    
  } catch (error) {
    throw new Error('No se pudo cargar los productos');
    console.log(error)
  }

}