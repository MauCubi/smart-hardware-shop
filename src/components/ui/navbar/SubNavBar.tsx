'use client'
import Link from 'next/link'
import { BsDeviceSsd, BsKeyboard, BsMotherboard } from 'react-icons/bs'
import { CategoryCard } from './CategoryCard';
import { useCallback, useEffect, useRef, useState } from 'react';
import { PiComputerTowerDuotone, PiCpuDuotone, PiGraphicsCardDuotone, PiHeadphonesDuotone, PiMemoryDuotone, PiMonitorDuotone, PiOfficeChairDuotone, PiPrinterDuotone } from 'react-icons/pi';
import { ImPower } from 'react-icons/im';
import { MdOutlineSevereCold } from 'react-icons/md';
import { BiWifi } from 'react-icons/bi';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { onToggleProductsMenu, onToggleSideMenu } from '@/store/ui/uiSlice';
import { CiUser } from 'react-icons/ci';
import { onSetAuthStatus, onSetLoggedUser } from '@/store/auth/authSlice';


export const SubNavBar = () => {


  const { isSideMenuOpen, isProductsMenuOpen } = useAppSelector( state => state.ui )
  const { authenticatedUser, authStatus } = useAppSelector( state => state.auth )

  const dispatch = useAppDispatch()
  
  
  const categoryMenu = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  

  const handleSideMenu = () => {
    dispatch(onToggleSideMenu(false))
  }
 

  const handleCategoryMenu = useCallback(() => {
    dispatch(onToggleProductsMenu(!isProductsMenuOpen))
  },[isProductsMenuOpen ,dispatch])

    const handleLogout = () => {
      localStorage.removeItem('auth-user')
      dispatch(onSetLoggedUser(null))
      dispatch(onSetAuthStatus('not-authenticated'))
      handleSideMenu()
    }



  useEffect(() => {
    const handleCloseOutside = (event: MouseEvent) => {
      if (categoryMenu.current && !categoryMenu.current.contains(event.target as Node) && !buttonRef.current?.contains(event.target as Node)) {
        handleCategoryMenu()
      }
    }

    if (isProductsMenuOpen) {
      document.addEventListener('mousedown', handleCloseOutside)      
    }    
  
    return () => {
      document.removeEventListener("mousedown", handleCloseOutside);
    }
  }, [isProductsMenuOpen, handleCategoryMenu])


  return (    
    
      <div className={`z-11 xl:z-1 relative h-full xl:w-full ${ !isSideMenuOpen ? 'hidden' : 'block'} xl:block `}>    
        
        <div className='flex xl:flex-row flex-col xl:h-16 xl:justify-center xl:py-0 xl:px-20 xl:align-middle xl:items-center xl:gap-8 bg-[#181818] xl:bg-[#1e1e1e] '>

          <div className='flex flex-col xl:flex-row xl:justify-center xl:py-0 xl:px-20 p-3 xl:align-middle xl:items-center xl:gap-8'>
            <button 
              ref={buttonRef}          
              className={`subbar-button navbar-text flex flex-row align-middle items-center gap-2 ${isProductsMenuOpen?'text-[#0A84FF]': ''} `} 
              onClick={ handleCategoryMenu }
            >
                Products
            </button>      
            

            <Link href='/builder' className='subbar-button navbar-text flex flex-row align-middle items-center gap-2' onClick={ handleSideMenu } scroll>
              Build your PC
            </Link>
            
            <Link href='/contact' className='subbar-button navbar-text flex flex-row align-middle items-center gap-2' onClick={ handleSideMenu } scroll>
              Contact us
            </Link>
            
            <Link href='/help' className='subbar-button navbar-text flex flex-row align-middle items-center gap-2' onClick={ handleSideMenu } scroll>
              F.A.Q      
            </Link>     
          </div>




          <hr className='text-[#0A84FF] xl:hidden'/>
          <div className='xl:hidden'>
            {
              authStatus === 'authenticating'
              ? <span className='text-white'>Loading</span>
              : authStatus === 'authenticated' 
              ?
              <div className='flex flex-col'>
                <div className='flex flex-row bg-gray-900 navbar-text p-3 rounded-b-2xl align-middle items-center gap-2'>
                  <CiUser className='text-[25px] xl:text-[30px]' color='#0A84FF' />
                  <span className={`text-sm`}>{ authenticatedUser?.name }</span>  
                </div>
                <div className='flex flex-col p-1'>
                  <button className='navbar-button navbar-text text-sm flex flex-row align-middle items-center gap-2' >
                    My purchases
                  </button>
                  <button className='navbar-button navbar-text text-sm flex flex-row align-middle items-center gap-2' >
                    My favorites
                  </button>
                  <button className='navbar-button navbar-text text-sm flex flex-row align-middle items-center gap-2'>
                    My address
                  </button>
                  <button className='navbar-button navbar-text text-sm flex flex-row align-middle items-center gap-2' onClick={ handleLogout }>
                    Logout
                  </button>
                </div> 
              </div>
              : authStatus === 'not-authenticated' &&
              <Link href={'/auth'}>
                <button className='navbar-button navbar-text flex flex-row align-middle items-center gap-2' onClick={ handleSideMenu }>
                  <CiUser className='text-[25px] xl:text-[30px]' color='#0A84FF' />
                  <span className='xl:block'>Login</span>            
                </button>
              </Link>
            }
          </div>
          
        </div>


        {
          isProductsMenuOpen 
          ?
            <div ref={categoryMenu} className='absolute bg-[#131313] w-full h-150 xl:h-150 xl:px-60 pb-45 pt-15 xl:py-10 overflow-y-auto scroll-smooth'>

              <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 justify-around xl:justify-start xl:gap-7 flex-wrap'>

                <CategoryCard title='Motherboard' subCategories={['AMD Motherboards', 'Intel Motherboards']} Icon={BsMotherboard} />

                <CategoryCard title='CPUs' subCategories={['AMD Processors', 'Intel Processors']} Icon={PiCpuDuotone} />

                <CategoryCard title='Storage' subCategories={['HDD', 'SDD', 'SDD M.2', 'External Disks', 'Pendrives']} Icon={BsDeviceSsd} />

                <CategoryCard title='Graphic Cards' subCategories={['AMD Radeon', 'NVIDIA Geforce']} Icon={PiGraphicsCardDuotone} />

                <CategoryCard title='Memory RAM' subCategories={['DDR5', 'DDR4', 'DDR3']} Icon={PiMemoryDuotone} />

                <CategoryCard title='PSUs' subCategories={['Power source units', 'PSUs accesories']} Icon={ImPower} />

                <CategoryCard title='Periferics' subCategories={['Keyboards', 'Mouse', 'Mouse Pad', 'WebCam', 'Gamepads', 'Bundles']} Icon={BsKeyboard} />

                <CategoryCard title='Cases' subCategories={['Mini Tower', 'Mid Tower', 'Full Tower', 'Ultra Tower', 'Cases with PSU']} Icon={PiComputerTowerDuotone} />

                <CategoryCard title='Audio' subCategories={['Headphones', 'Speakers', 'Microphones', 'Audio Cards', 'Bluetooth Speakers', 'Accesories']} Icon={PiHeadphonesDuotone} />

                <CategoryCard title='Monitors' subCategories={['Up to 75 Hz', '100 - 144 Hz', '165 - 180 Hz', '200 - 240 Hz', '280 Hz', 'Video Cables']} Icon={PiMonitorDuotone} />

                <CategoryCard title='Printers' subCategories={['Printers', 'Ink/Toners']} Icon={PiPrinterDuotone} />

                <CategoryCard title='Chairs/Desks' subCategories={['Gaming Chairs', 'Desktops']} Icon={PiOfficeChairDuotone} />

                <CategoryCard title='Refrigeration' subCategories={['Fan Coolers', 'Water Coolers', 'Cpu Coolers', 'Thermal Paste']} Icon={MdOutlineSevereCold} />
  
                <CategoryCard title='Network/Connections' subCategories={['Routers', 'Network Cards', 'WiFi Adapters', '']} Icon={BiWifi} />  
                
              </div>

            </div>
            :    
            ''

        }
      </div>
      
    

  )
}
