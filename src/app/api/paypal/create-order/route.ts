


export async function POST(req: Request) {
  // ejemplo simple


  const body = await req.json()

  const { price } = body

  console.log(price)

  return Response.json({
    orderId: 'TEST_ORDER_ID',
  })
}