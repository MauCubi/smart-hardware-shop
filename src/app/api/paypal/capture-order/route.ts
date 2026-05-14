

// export async function POST( req: Request, context: { params: Promise<{ orderId: string }> }
// export async function POST( req: Request) {
//   // const { orderId } = await context.params  

//   // console.log(orderId)

//   return Response.json({
//     success: true,
//   })
// }

export async function POST(req: Request, context: { params: Promise<{ orderId: string }> }
) {
  const { orderId } = await context.params

  console.log(orderId)

  return Response.json({
    success: true,
  })
}