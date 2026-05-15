'use server'
import { prisma } from '@/lib/prisma';


interface Props {
  id: string,
  page: number,
  take: number
}


export const getUserOrders = async({id, page = 1, take = 8}: Props) => {
  
    try {
  
      const orders = await prisma.order.findMany({
        where: {
          userId: id
        },
        skip: take * (page - 1),
        take: take,
        include: {
          user: {
            select: {
              name: true,
              lastName: true
            }
          }
        }      
      }
    )    
  
      const maxPages = Math.ceil(await prisma.order.count() / take)
  
      return { 
        orders: orders,
        maxPages: maxPages,
        
       }
      
    } catch (error) {
      throw new Error('No se pudo cargar los productos' + error);
    }

}