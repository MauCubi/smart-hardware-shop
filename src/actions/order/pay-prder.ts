'use server'

import { prisma } from '@/lib/prisma'

export const fastPayOrder = async (id: string) => {

  try {
    const paidOrder = await prisma.order.update({
      where: {
        id: id
      },
      data: {
        isPaid: true,
        paidAt: new Date()
      }
    })    

    console.log(paidOrder)

    return {
      ok: true
    }
  } catch (error) {
    return {
      ok: false,
      message: 'Problem processing payment ' + error 
    }
  }


}