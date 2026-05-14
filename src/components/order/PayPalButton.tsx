'use client'

import { OnApproveDataOneTimePayments, PayPalOneTimePaymentButton } from '@paypal/react-paypal-js/sdk-v6'
import { useRouter } from 'next/navigation'

interface Props {
  price: number,
  orderNumber: string
}

export const PayPalButton = ({price, orderNumber}: Props) => {


  const router = useRouter()

  const createOrder = async() => {

    const response = await fetch('/api/paypal/create-order', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        price, orderNumber
      }),
    }) 

    const { orderId } = await response.json()
    console.log(orderId)

    

    return { orderId }
  }
  
  const approveOrder = async ({orderId}: OnApproveDataOneTimePayments) => {
    console.log('started capturing!!!')
    await fetch(`/api/paypal/capture-order/${orderId}`, { method: "POST", }); 
    console.log("Payment captured!");
    router.refresh()
  }
  

  return (
    <div className='flex w-full'>
      <PayPalOneTimePaymentButton 
        presentationMode='auto'
        createOrder={ createOrder }
        onApprove={ approveOrder }
        />
    </div>
  )
}
