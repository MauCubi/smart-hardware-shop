'use client'

import Link from 'next/link'
import { BsDeviceSsd, BsKeyboard, BsMotherboard } from 'react-icons/bs'
import { CategoryCard } from './CategoryCard';
import { useCallback, useEffect, useRef, useState } from 'react';
import { PiComputerTowerDuotone, PiCpuDuotone, PiGraphicsCardDuotone, PiHeadphonesDuotone, PiMemoryDuotone, PiMonitorDuotone, PiOfficeChairDuotone, PiPrinterDuotone } from 'react-icons/pi';
import { ImPower } from 'react-icons/im';
import { MdOutlineSevereCold } from 'react-icons/md';
import { BiWifi } from 'react-icons/bi';

export const SubNavBar = () => {

  const categoryMenu = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const [isOpen, setisOpen] = useState<boolean>(false)

  const handleCategoryMenu = useCallback(() => {
    setisOpen(!isOpen)
  },[isOpen])



  useEffect(() => {

    const handleCloseOutside = (event: MouseEvent) => {
      if (categoryMenu.current && !categoryMenu.current.contains(event.target as Node) && !buttonRef.current?.contains(event.target as Node)) {
        handleCategoryMenu()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleCloseOutside)      
    }    
  
    return () => {
      document.removeEventListener("mousedown", handleCloseOutside);
    }
  }, [isOpen, handleCategoryMenu])
  

  return (

    <div className='relative'>
      <div className='flex h-16 justify-center px-20 align-middle items-center gap-8 bg-[#1e1e1e]'>

        
        <button 
          ref={buttonRef}          
          className={`subbar-button navbar-text flex flex-row align-middle items-center gap-2 ${isOpen?'text-[#0A84FF]': ''} `} 
          onClick={ handleCategoryMenu }
        >
            Products
        </button>      
        

        <Link href='/buildpc'>
          <button className='subbar-button navbar-text flex flex-row align-middle items-center gap-2'>Build your PC</button>
        </Link>
        
        <Link href='/contact'>
          <button className='subbar-button navbar-text flex flex-row align-middle items-center gap-2'>Contact us</button>
        </Link>
        
        <Link href='/help'>
          <button className='subbar-button navbar-text flex flex-row align-middle items-center gap-2'>F.A.Q</button>      
        </Link>     
        
      </div>


      {
        isOpen 
        ?
          <div ref={categoryMenu} className='absolute bg-[#131313] w-full h-150 px-60 py-10 transform transition-all duration-300 ease-in-out overflow-y-scroll scroll-smooth'>

            <div className='flex gap-7 flex-wrap'>

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
