import { getPayPalBearerToken } from '@/actions/order/paypal-check-payment'
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'


export async function POST(req: Request, context: { params: Promise<{ orderId: string }> }
) {
  const { orderId } = await context.params

  console.log('enter captuiring!!')

  console.log(orderId)

  const token = await getPayPalBearerToken()

  if (!token) {
    return Response.json({
      ok: false,
      message: 'Error obtaining token'
    })
  }

  const resp = await fetch(
    `${process.env.PAYPAL_ORDERS_URL}/${orderId}/capture`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  )

  const data = await resp.json()

  console.log(data)

  if (data.status !== 'COMPLETED') {
    return Response.json({
      ok: false,
      msg: 'Payment not completed',
    })
  }


  try {
    const updatedOrder = await prisma.order.update({
      where: {
        transactionId: orderId
      },
      data: {
        isPaid: true,
        paidAt: new Date()
      }
    })

    revalidatePath(`/orders/${updatedOrder.id}`)
  } catch (error) {
    return Response.json({
      ok:false,
      message: error
    })
  }

  

  return Response.json({
    success: true,
  })
}