'use client'

import Link from 'next/link'
import { BsCpu, BsDeviceSsd, BsKeyboard, BsMotherboard } from 'react-icons/bs'
import { CategoryCard } from './CategoryCard';
import { useCallback, useEffect, useRef, useState } from 'react';
import { PiComputerTowerDuotone, PiCpuDuotone, PiGraphicsCard, PiGraphicsCardDuotone, PiMemoryDuotone } from 'react-icons/pi';
import { ImPower } from 'react-icons/im';

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
          <button className='subbar-button navbar-text flex flex-row align-middle items-center gap-2'>Help</button>      
        </Link>     
        
      </div>


      {
        isOpen 
        ?
          <div ref={categoryMenu} className='absolute bg-[#131313] w-full h-150 px-60 py-10 transform transition-all duration-300 ease-in-out'>

            <div className='flex gap-7 flex-wrap'>

              <CategoryCard title='Motherboard' subCategories={['AMD Motherboards', 'Intel Motherboards', 'AMD Motherboards2', 'Intel Motherboards2', 'Menu extra']} Icon={BsMotherboard} />

              <CategoryCard title='CPUs' subCategories={['AMD Motherboards', 'Intel Motherboards']} Icon={PiCpuDuotone} />

              <CategoryCard title='Graphic Cards' subCategories={['AMD Motherboards', 'Intel Motherboards']} Icon={PiGraphicsCardDuotone} />

              <CategoryCard title='Storage' subCategories={['AMD Motherboards', 'Intel Motherboards']} Icon={BsDeviceSsd} />

              <CategoryCard title='Memory RAM' subCategories={['AMD Motherboards', 'Intel Motherboards']} Icon={PiMemoryDuotone} />

              <CategoryCard title='PSUs' subCategories={['AMD Motherboards', 'Intel Motherboards']} Icon={ImPower} />

              <CategoryCard title='Periferics' subCategories={['AMD Motherboards', 'Intel Motherboards']} Icon={BsKeyboard} />

              <CategoryCard title='Cases' subCategories={['AMD Motherboards', 'Intel Motherboards']} Icon={PiComputerTowerDuotone} />
            </div>

          </div>
          :    
          ''

      }
    </div>
  )
}
