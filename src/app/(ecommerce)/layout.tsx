import StoreProvider from '@/components/providers/StoreProvider';
import { Footer } from '@/components/ui/footer/Footer';
import { NavBar } from '@/components/ui/navbar/NavBar';
import SearchBox from '@/components/ui/navbar/SearchBox';
import { SubNavBar } from '@/components/ui/navbar/SubNavBar';
import ScrollToTop from '@/components/ui/scroll/ScrollToTop';
import ScrollToTopContainer from '@/components/ui/scroll/ScrollToTopContainer';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';

import {
  PayPalProvider,
} from "@paypal/react-paypal-js/sdk-v6";

export default function ShopLayout({ children }: {children: React.ReactNode;}) { 

  return (
  <div className='bg-[#1e1e1e] min-h-screen relative'>
    <StoreProvider>
      <SessionProvider>           
        <PayPalProvider clientId={ process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID } locale='en-US' components={["paypal-payments"]} pageType="checkout">
        
        <div className='flex flex-col fixed w-full top-0 z-10'>
          <NavBar />        
          <SearchBox />
          <SubNavBar />
        </div>

        {/* <ScrollToTop /> */}
        <div id="scroll-container" className='flex flex-col grow px-0 xl:pt-[185px]'>    
          {/* <ScrollToTopContainer />     */}
          {children}
          <Footer />
        </div>
        
        <Toaster position="top-right" reverseOrder={false} />
        </PayPalProvider>
      </SessionProvider>
    </StoreProvider>

    
  </div>
  );
}