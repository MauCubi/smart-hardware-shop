import { AddressForm } from '@/components/ui/address/AddressForm';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';





export default async function CheckoutPage() {  
  
  const session = await auth()
  
  if (!session) {
    redirect('/auth')
  } 

  return (
    <div className='flex flex-col justify-center align-middle items-center'>
      <AddressForm />
    </div>
  );
}