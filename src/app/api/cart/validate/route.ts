import { validateCart } from '@/lib/validateCart';


export async function POST(req: Request) {
  const { items } = await req.json();

  const result = await validateCart(items);

  return Response.json(result);
}