'use server'
import { prisma } from '@/lib/prisma';


interface Props {
  page: number,
  take: number
}


export const getAllOrders = async({page = 1, take = 8}: Props) => {
  
    try {
  
      const orders = await prisma.order.findMany({
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