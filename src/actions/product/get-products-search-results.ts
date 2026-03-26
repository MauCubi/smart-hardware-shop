'use server'
import { prisma } from '@/lib/prisma';

export const getSearchProducts = async (searchWord: string) => {

  try {  
      const products = await prisma.product.findMany({
        where: {
          name: {
            contains: searchWord,
            mode: "insensitive",
          }
        },
        take: 3
        
      })    
        
      return products
      
    } catch (error) {
      throw new Error('No se pudo cargar los productos');
      console.log(error)
    }


}