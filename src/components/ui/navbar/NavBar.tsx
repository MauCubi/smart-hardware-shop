'use client'
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { onToggleSearchMenu, onToggleSideMenu } from '@/store/ui/uiSlice';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import { FaComputer, FaRegUser } from 'react-icons/fa6';
import { IoCartOutline, IoMenu } from 'react-icons/io5';

export const NavBar = () => {
  
  const dispatch = useAppDispatch()
  const { isSearchMenuOpen, isSideMenuOpen} = useAppSelector( state => state.ui )
  

  const onToggleMenu = () => {
    if (isSearchMenuOpen) dispatch(onToggleSearchMenu())      
    dispatch(onToggleSideMenu()) 
    }
  

  const onToggleSearch = () => {
    if (isSideMenuOpen) dispatch(onToggleSideMenu())  
    dispatch(onToggleSearchMenu())
  }

  return (
    <nav className='flex bg-[#121212] md:h-30 md:justify-between px-2 md:px-20 align-middle items-center z-10'>

      <div className='md:hidden mr-3'>
        <button className='flex items-center' onClick={ onToggleMenu }>
          <IoMenu className='text-[26px]' color='gray'/>
        </button>
      </div>      

      
        <Link href='/'>
          <div className='flex gap-1 md:gap-3 items-center'>
            <FaComputer className='text-[30px] md:text-[70px]'  color='#0A84FF' />

            <div className='flex flex-col'>
              <h1 className='navbar-text font-bold text-sm md:text-3xl italic'>
                CubiHardware
              </h1>
              <h1 className='mdflex navbar-text hidden  md:text-md justify-center'>
                Next-Level Hardware
              </h1>
            </div>
          </div>
        </Link>
      

      <div className='md:flex hidden'>
        <input placeholder='Search Product' className='flex p-2 text-lg bg-zinc-100 w-150 h-12 rounded-l-md align-middle focus:outline-solid' />
        <button className='flex items-center cursor-pointer bg-[#0A84FF] h-12 p-4 rounded-r-md'><FaSearch size={20}/></button>
      </div>

      <div className='flex justify-end md:w-auto w-full align-middle'>
        <div className='flex md:gap-25'>
          <button className='md:hidden navbar-button navbar-text flex flex-row align-middle items-center md:gap-2' onClick={ onToggleSearch }>
            <FaSearch className='text-[25px] md:text-[35px]' color='#0A84FF' />                    
          </button>
          <div className='relative'>
            <Link href={'/cart'}>
              <button className='navbar-button navbar-text'>
                <IoCartOutline className='text-[30px] md:text-[35px]' color='#0A84FF'/>
              </button>
            </Link>
            <div className='flex absolute justify-center rounded-full top-1 right-1 h-auto w-5 text-sm bg-gray-300'>2</div>
          </div>
          <button className='navbar-button navbar-text flex flex-row align-middle items-center md:gap-2'>
            <FaRegUser className='text-[25px] md:text-[35px]' color='#0A84FF' />
            <span className='hidden md:block'>Login</span>            
          </button>
        </div>
      </div>

    </nav>
  );
};
