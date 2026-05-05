import { getCountries } from '@/actions/country/get-countries';
import { AddressForm } from '@/components/ui/address/AddressForm';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { countries } from '../../../seed/seed-countries';





export default async function CheckoutPage() {  
  
  const session = await auth()

  const countries = await getCountries()
  
  if (!session) {
    redirect('/auth')
  } 

  return (
    <div className='flex flex-col justify-center align-middle items-center'>
      <AddressForm countries={countries} />
    </div>
  );
}