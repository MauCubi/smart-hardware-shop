import { prisma } from '@/lib/prisma'



export const getOrderById = async (id: string) => {


  try {
    const order = await prisma.order.findUnique({
      include:{
        OrderAddress: {
          include: {
            country: {
              select: { name: true }
            }
          }
        },
        OrderItem: {
          include: {
            product: {
              select: {
                slug: true,
                name: true,
                images: true
              }
            }
          }
        }
      },
      where: {
        id: id
      }
    }) 
    return {
      ok: true,
      order: order
    }  
  } catch (error) {
    return {
      ok: false,
      message: error
    }
  }

  

}