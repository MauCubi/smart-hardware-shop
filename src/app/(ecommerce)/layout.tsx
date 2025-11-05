import { NavBar } from '@/components/ui/navbar/NavBar';
import { SubNavBar } from '@/components/ui/navbar/SubNavBar';

export default function ShopLayout({ children }: {children: React.ReactNode;}) {



  return (
  <div className='bg-[#1e1e1e] min-h-screen relative'>

    <div className='flex flex-col fixed w-full top-0 z-10'>
      <NavBar />
      <SubNavBar />
    </div>

    <div className='px-0 pt-[185]'>
      {children}
    </div>
    
    
  </div>
  );
}