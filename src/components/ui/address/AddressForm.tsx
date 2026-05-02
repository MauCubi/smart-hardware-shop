'use client'
import { countries, Country } from '@/seed/seed-countries';
import { useForm } from 'react-hook-form'
import { FaInfoCircle } from 'react-icons/fa';
import { FaExclamation } from 'react-icons/fa6';

type FormInputs = {
  street: string,
  streetNumber: string,
  apartment?: string,
  country: string,
  city: string,
  state: string,
  zipCode: string,
  observation: string,
  name: string,
  phone: string,
  idNumber: string,
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
    <form onSubmit={ handleSubmit(onSubmit)} className='rounded-2xl px-4 md:w-[50%] py-14 md:py-10'>

      <div className='flex md:mb-6 mb-3 justify-between align-middle items-center'>
        <h1 className='titles text-md md:text-3xl font-mono'>Delivery Address</h1>
        <span className='text-xs text-gray-400 italic font-mono'>* Required field</span>
      </div>

      <div className='flex flex-col md:flex-row justify-between mb-4 gap-4'>
        <div className='flex flex-col md:w-[60%]'>
          <label htmlFor='street' className='titles block mb-2.5 text-sm '>Street*</label>
          <input id='street' type='text' { ...register('street', {required: "Street is required", minLength: { value: 3, message: "Street name too short" }}) }             
            className='bg-zinc-100 rounded-md text-heading text-sm md:text-base focus:outline-[#0A84FF] block w-full px-3 py-2 placeholder:text-body border-2 focus:border-blue-400 focus:ring-0 outline-none '            
          />
        </div>

        <div className='flex md:justify-between gap-6 md:gap-4 '>
          <div className='flex flex-col'>
            <label htmlFor='streetNumber' className='block mb-2.5 text-sm titles'>Number*</label>
            <input id='streetNumber' type='text' { ...register('streetNumber', {required: "Street number is required", pattern: { value: /^\d+$/, message: "Only numbers allowed" }}) } 
            inputMode="numeric"
            className='bg-zinc-100 rounded-md text-heading text-sm md:text-base focus:outline-[#0A84FF] block w-full px-3 py-2 placeholder:text-body border-2 focus:border-blue-400 focus:ring-0 outline-none '
            onChange={(e) => {
                e.target.value = e.target.value.replace(/\D/g, "");
              }}
            />
          </div>
          <div className='flex flex-col' >
            <label htmlFor='apartment' className='block mb-2.5 text-sm titles'>Appartment</label>
            <input id='apartment' type='text' { ...register('apartment', {required: false}) } 
            className='bg-zinc-100 rounded-md text-heading text-sm md:text-base focus:outline-[#0A84FF] block w-full px-3 py-2 placeholder:text-body border-2 focus:border-blue-400 focus:ring-0 outline-none '
            />
          </div>
        </div>

      </div>

      <div className='flex flex-col md:flex-row justify-between mb-4 gap-4'>

        <div className='flex md:justify-between gap-6 md:gap-4 w-full'>

          <div className='flex flex-col w-full'>
            <label htmlFor='country' className='block mb-2.5 text-sm titles'>Country*</label>
            <select id='country' { ...register('country', {required: "Country is required"}) } 
              className='bg-zinc-100 rounded-md text-heading text-sm md:text-base focus:outline-[#0A84FF] block w-full px-3 py-2 placeholder:text-body '
            >
              <option value=''>[ Select ]</option>
              {
                countries.map( country => (
                  <option key={country.id} value={country.id}>{country.name}</option>
                ))
              }
            </select>
          </div>

          <div className='flex flex-col w-full' >
            <label htmlFor='state' className='block mb-2.5 text-sm titles'>State/Province*</label>
            <input id='state' type='text' { ...register('state', {required: "State/Province is required"}) } 
              className='bg-zinc-100 rounded-md text-heading text-sm md:text-base focus:outline-[#0A84FF] block w-full px-3 py-2 placeholder:text-body '
            />
          </div>

        </div>
        
      </div>

      <div className='flex flex-col md:flex-row justify-between mb-4 gap-4'>

        <div className='flex md:justify-between gap-6 md:gap-4 w-full'>

          <div className='flex flex-col w-full' >
            <label htmlFor='city' className='block mb-2.5 text-sm titles'>City*</label>
            <input id='city' type='text' { ...register('city', {required: "City is required", minLength: { value: 2, message: "City name too short" }}) } 
              className='bg-zinc-100 rounded-md text-heading text-sm md:text-base focus:outline-[#0A84FF] block w-full px-3 py-2 placeholder:text-body '
            />
          </div>

          <div className='flex flex-col w-full' >
            <label htmlFor='zipCode' className='block mb-2.5 text-sm titles'>Postal Code*</label>
            <input id='zipCode' type='text' { ...register('zipCode', {required: true}) } 
              className='bg-zinc-100 rounded-md text-heading text-sm md:text-base focus:outline-[#0A84FF] block w-full px-3 py-2 placeholder:text-body '
              inputMode="numeric"
              onChange={(e) => {
                e.target.value = e.target.value.replace(/\D/g, "");
              }}
              />
          </div>

        </div>

      </div>

      <div className='flex justify-between'>
        <div className='flex flex-col w-full'>
          <label htmlFor='observation' className='titles block mb-2.5 text-sm '>Observations</label>
          <input id='observation' maxLength={100} type='text' { ...register('observation', {required: false, maxLength: { value: 100, message: "Max 100 characters"}}) } 
            className='bg-zinc-100 rounded-md text-heading text-sm md:text-base focus:outline-[#0A84FF] block w-full px-3 py-2 placeholder:text-body '
          />
        </div>        
      </div>

      <div className='flex my-6 justify-between align-middle items-center gap-2'>
        <h1 className='titles text-md md:text-3xl font-mono'>Delivery Recipient</h1>
        <span className='text-xs text-gray-400 italic font-mono'>* Required field</span>
      </div>

      <div className='flex justify-between mb-4'>
        <div className='flex flex-col w-full'>
          <label htmlFor='name' className='titles block mb-2.5 text-sm '>Full Name*</label>
          <input id='name' maxLength={100} type='text' { ...register('name', {required: "Name is required", minLength: { value: 3, message: "Name too short"}}) } 
            className='bg-zinc-100 rounded-md text-heading text-sm md:text-base focus:outline-[#0A84FF] block w-full px-3 py-2 placeholder:text-body '
          />
        </div>        
      </div>

      <div className='flex md:justify-between gap-6 md:gap-4 w-full'>

          <div className='flex flex-col w-full' >
            <label htmlFor='city' className='block mb-2.5 text-sm titles'>Phone*</label>
            <input id='phone' type='text' { ...register('phone', {required: "Phone is required", pattern: {  value: /^\d+$/, message: "Invalid phone number"   } }) } 
              className='bg-zinc-100 rounded-md text-heading text-sm md:text-base focus:outline-[#0A84FF] block w-full px-3 py-2 placeholder:text-body '
              onChange={(e) => {
                e.target.value = e.target.value.replace(/\D/g, "");
              }}
            />
          </div>

          <div className='flex flex-col w-full' >
            <label htmlFor='idNumber' className='block mb-2.5 text-sm titles'>ID Number*</label>
            <input id='idNumber' type='text' { ...register('idNumber', {required: "ID Required", pattern: {  value: /^\d+$/, message: "Invalid ID number"   } }) } 
              className='bg-zinc-100 rounded-md text-heading text-sm md:text-base focus:outline-[#0A84FF] block w-full px-3 py-2 placeholder:text-body '
              inputMode="numeric"
              onChange={(e) => {
                e.target.value = e.target.value.replace(/\D/g, "");
              }}
              />
          </div>

      </div>

      <div className='border gap-2 border-blue-700 bg-blue-200 rounded-lg flex my-4 items-center w-full p-2 font-bold'>
        <FaInfoCircle  size={20} className='text-blue-700'/>
        <span>We will ask for ID</span>
      </div>

      <div className='flex justify-between my-6 gap-6 md:gap-4 w-full'>

          <button className='titles py-2 px-4 bg-[#0A84FF] rounded-lg cursor-pointer hover:bg-[#016edb]'>
            Back
          </button>

          <button className='titles py-2 px-4 bg-[#0A84FF] rounded-lg cursor-pointer hover:bg-[#016edb]'>
            Continue
          </button>

      </div>


    </form>
  )
}
