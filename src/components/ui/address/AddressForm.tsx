'use client'
import { Country } from '@/seed/seed-countries';
import { useForm } from 'react-hook-form'

type FormInputs = {
  street: string,
  streetNumber: string,
  apartment?: string,
  country: string,
  city: string,
  state: string,
  zipCode: string,
  additionalInfo: string,
  phone: string,
  rememberAddress: boolean
}

interface Props {
  countries: Country[];
}


export const AddressForm = () => {
  
  const { reset, handleSubmit, formState, register } = useForm<FormInputs>()

  const onSubmit = ( data: FormInputs) => {

    
    
  }

  return (
    <form onSubmit={ handleSubmit(onSubmit)} className='border rounded-2xl border-amber-200 w-[50%] py-10'>
      <div className='flex justify-between'>
        <div className='flex flex-col w-[60%]'>
          <label htmlFor='street' className='block mb-2.5 text-sm md:text-base titles'>Street</label>
          <input id='street' type='text' { ...register('street', {required: true, minLength: 6}) } className='bg-zinc-100 rounded-md text-heading text-sm md:text-base focus:outline-[#0A84FF] block w-full px-3 py-2 placeholder:text-body '/>
        </div>
        <div className='flex flex-col w-[15%]'>
          <label htmlFor='streetNumber' className='block mb-2.5 text-sm md:text-base titles'>Number</label>
          <input id='streetNumber' type='text' { ...register('streetNumber', {required: true}) } className='bg-zinc-100 rounded-md text-heading text-sm md:text-base focus:outline-[#0A84FF] block w-full px-3 py-2 placeholder:text-body '/>
        </div>
        <div className='flex flex-col w-[15%]' >
          <label htmlFor='apartment' className='block mb-2.5 text-sm md:text-base titles'>Appartment</label>
          <input id='apartment' type='text' { ...register('apartment', {required: false}) } className='bg-zinc-100 rounded-md text-heading text-sm md:text-base focus:outline-[#0A84FF] block w-full px-3 py-2 placeholder:text-body '/>
        </div>
      </div>
    </form>
  )
}
