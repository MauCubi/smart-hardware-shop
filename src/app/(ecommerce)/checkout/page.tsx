import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';





export default async function CheckoutPage() {  
  
  const session = await auth()
  
  if (!session) {
    redirect('/auth')
  } 

  return (
    <div>
      <p>hola</p>
    </div>
  );
}