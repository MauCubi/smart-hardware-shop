'use client'

import { fastPayOrder } from '@/actions/order/pay-prder'
import { useRouter } from 'next/navigation'
import { useState } from 'react'


interface Props {
  id: string,
  isPaid: boolean
}


export default function FastPayButton({ id, isPaid }: Props) {

  const [payStatus, setPayStatus] = useState<'idle' | 'processing' | 'payed' | 'loading'>('idle')

  const router = useRouter()

  const fastPay = async () => {

    setPayStatus('processing')

    const resp = await fastPayOrder(id)

    if (!resp.ok) {
      setPayStatus('idle')
      return
    }

    router.refresh()   

  }


  return (
    <>
      {
        isPaid ?
        ''      
        :
        <button 
          className={`flex justify-center w-full titles p-3 bg-[#09a210] rounded cursor-pointer hover:bg-[#08670d] disabled:bg-gray-600 disabled:hover:bg-gray-600 disabled:cursor-auto`}
          disabled={payStatus === 'loading' || payStatus === 'processing' ? true : false}
          onClick={ fastPay }
        >
          Fast Pay
        </button>
      }
    
    </>

  )
}
