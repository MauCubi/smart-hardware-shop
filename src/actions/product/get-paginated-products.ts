'use server'

import { prisma } from '@/lib/prisma'



interface Props {
  page: number,
  take?: number
  discountPage?: number
}


export const getPaginatedProducts = async ({page = 1, take = 8, discountPage}: Props) => {

  try {

    const products = await prisma.product.findMany({
      skip: take * (page - 1),
      take: take      
    })    

    const maxPages = Math.ceil(await prisma.product.count() / take)

    return { 
      products: products,
      maxPages: maxPages,
      
     }
    
  } catch (error) {
    throw new Error('No se pudo cargar los productos');
    console.log(error)
  }

}