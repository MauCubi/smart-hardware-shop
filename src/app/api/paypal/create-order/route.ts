import { getPayPalBearerToken } from '@/actions/order/paypal-check-payment'
import { setTransactionId } from '@/actions/order/set-transaction-id'



export async function POST(req: Request) {
  // ejemplo simple


  const token = await getPayPalBearerToken()
  const body = await req.json()

  const { price, orderNumber } = body

  const response = await fetch(
    'https://api-m.sandbox.paypal.com/v2/checkout/orders',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: price.toString(),
            },
          },
        ],
      }),
    }
  )

  const data = await response.json()

  const resp = await setTransactionId(data.id, orderNumber)

  if (!resp.ok) {
    console.log('errorete!!!')
    return
  }

  console.log(resp.order)

  console.log(data)

  return Response.json({
    orderId: data.id,
  })
}