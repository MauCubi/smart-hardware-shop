import StoreProvider from '@/components/providers/StoreProvider';
import { Footer } from '@/components/ui/footer/Footer';
import { NavBar } from '@/components/ui/navbar/NavBar';
import SearchBox from '@/components/ui/navbar/SearchBox';
import { SubNavBar } from '@/components/ui/navbar/SubNavBar';
import ScrollToTop from '@/components/ui/scroll/ScrollToTop';
import ScrollToTopContainer from '@/components/ui/scroll/ScrollToTopContainer';
import { Toaster } from 'react-hot-toast';


export default function ShopLayout({ children }: {children: React.ReactNode;}) { 

  return (
  <div className='bg-[#1e1e1e] min-h-screen relative'>
    <StoreProvider>
      
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
    </StoreProvider>

    
  </div>
  );
}