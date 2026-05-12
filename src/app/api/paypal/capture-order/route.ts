

export async function POST(
  req: Request,
  context: { params: Promise<{ orderId: string }> }
) {
  const { orderId } = await context.params  

  console.log(orderId)

  return Response.json({
    success: true,
  })
}