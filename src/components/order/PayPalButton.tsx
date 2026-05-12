'use client'

import { OnApproveDataOneTimePayments, PayPalOneTimePaymentButton } from '@paypal/react-paypal-js/sdk-v6'

interface Props {
  price: number
}

export const PayPalButton = ({price}: Props) => {

  const createOrder = async() => {

    const response = await fetch('/api/paypal/create-order', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        price,
      }),
    }) 

    const { orderId } = await response.json()
    console.log(orderId)

    return { orderId }
  }
  
  const approveOrder = async ({orderId}: OnApproveDataOneTimePayments) => {
    await fetch(`/api/capture-order/${orderId}`, { method: "POST", }); 
    console.log("Payment captured!");
  }
  

  return (
    <div className='flex w-full'>
      <PayPalOneTimePaymentButton 
        presentationMode='auto'
        createOrder={ createOrder }
        onApprove={approveOrder}
        />
    </div>
  )
}
