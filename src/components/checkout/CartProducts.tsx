'use client';

import { useAppSelector } from '@/store/hooks';
import { formatPriceUSD } from '@/utils/formatPrice';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const CartProducts = () => {
  
  
  const productsInCart = useAppSelector( state => state.cart.products)

  // const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   setLoaded(true);
  // }, []);

  // if (!loaded) {
  //   return <p>Loading...</p>;
  // }

  return (
    <>
      {productsInCart.map((prod) => (
        <div key={`${prod.slug}`} className='flex mb-5'>

          <Image
            src={`${prod.image}`}
            width={100}
            height={100}
            style={{
              width: '100px',
              height: '100px',
            }}
            alt={prod.name}
            className='object-fit mr-5'
          />
          {/* <div className='flex w-[100] h-[100] p-1 bg-white mr-5'>
            <Image src={prod.image} style={{ width: '100%', height: 'auto' }} width={120} height={120} className='object-contain' alt={prod.name}/>
          </div> */}

          <div>
            <span>
              {prod.name} ({prod.quantity})
            </span>

            <p className='font-bold'> { formatPriceUSD(prod.price * prod.quantity)}</p>
            
          </div>
        </div>
      ))}
    </>
  );
};
