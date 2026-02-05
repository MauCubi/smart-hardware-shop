'use client'
import { onSetAuthStatus, onSetLoggedUser } from '@/store/auth/authSlice';
import { onLoadCart } from '@/store/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { onToggleSearchMenu, onToggleSideMenu, onToggleUserMenu } from '@/store/ui/uiSlice';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { CiUser } from 'react-icons/ci';
import { FaSearch } from 'react-icons/fa';
import { FaComputer } from 'react-icons/fa6';
import { IoCartOutline, IoMenu } from 'react-icons/io5';
import SearchBox from './SearchBox';
import { SearchBar } from './SearchBar';

export const NavBar = () => {
  
  const dispatch = useAppDispatch()
  const pathname = usePathname();
  const { isSearchMenuOpen, isSideMenuOpen, isUserMenuOpen} = useAppSelector( state => state.ui )
  const { productsInCart } = useAppSelector( state => state.cart )
  const { authenticatedUser, authStatus } = useAppSelector( state => state.auth )

  

  const onToggleMenu = () => {
    if (isSearchMenuOpen) dispatch(onToggleSearchMenu())      
    dispatch(onToggleSideMenu(!isSideMenuOpen)) 
  }  

  const onToggleSearch = () => {
    if (isSideMenuOpen) dispatch(onToggleSideMenu(!isSideMenuOpen))  
    dispatch(onToggleSearchMenu())
  }

  const handleUserMenu = () => {
    dispatch(onToggleUserMenu(!isUserMenuOpen))  
  }

  const handleLogout = ( ) => {
    localStorage.removeItem('auth-user')
    dispatch(onSetLoggedUser(null))
    dispatch(onToggleUserMenu(false))
    dispatch(onSetAuthStatus('not-authenticated'))
  }
  
  // Effect to get items from cart and add to redux
  useEffect(() => {
    const products = localStorage.getItem('cart')

    if (products) {
      const parsedProducts = JSON.parse(products)      
      dispatch(onLoadCart(parsedProducts))
    }
    
  }, [dispatch])

  // User check
  useEffect(() => {
    dispatch(onSetAuthStatus('authenticating'))
    const user = localStorage.getItem('auth-user')
    if (user) {
      const parsedUser = JSON.parse(user)  
      console.log(user)    
      dispatch(onSetLoggedUser(parsedUser))
      dispatch(onSetAuthStatus('authenticated'))
    } else {
      dispatch(onSetAuthStatus('not-authenticated'))
    }    
  }, [dispatch])

  // Close menu on change path
  useEffect(() => {
    dispatch(onToggleUserMenu(false));
  }, [pathname, dispatch]);


  return (
    <nav className='flex bg-[#121212] xl:h-30 md:h-15 xl:justify-between px-2 xl:px-10 align-middle items-center z-10'>

      <div className='xl:hidden mr-3'>
        <button className='flex items-center' onClick={ onToggleMenu }>
          <IoMenu className='text-[26px]' color='gray'/>
        </button>
      </div>      

      
        <Link href='/'>
          <div className='flex gap-1 xl:gap-3 items-center'>
            <FaComputer className='text-[30px] xl:text-[70px]'  color='#0A84FF' />

            <div className='flex flex-col'>
              <h1 className='navbar-text font-bold text-sm md:text-lg xl:text-3xl italic'>
                CubiHardware
              </h1>
              <h1 className='xl:flex navbar-text hidden  xl:text-md justify-center'>
                Next-Level Hardware
              </h1>
            </div>
          </div>
        </Link>
      

      <div className='xl:flex hidden'>
        <SearchBar />
      </div>

      <div className='flex justify-end xl:w-auto w-full align-middle'>
        <div className='flex xl:gap-25'>  
                  
          <div className='flex flex-row'>
            <button className='xl:hidden navbar-button navbar-text flex flex-row align-middle items-center xl:gap-2' onClick={ onToggleSearch }>
              <FaSearch className='text-[25px] xl:text-[35px]' color='#0A84FF' />                    
            </button>
            <div className='relative'>
              <Link href={'/cart'}>
                <button className='navbar-button navbar-text flex flex-row align-middle items-center'>
                  <IoCartOutline className='text-[30px] xl:text-[30px]' color='#0A84FF'/>                  
                </button>
              </Link>
              {
                productsInCart > 0 
                ?<div className='flex absolute justify-center rounded-full top-1 right-1 h-auto w-5 text-sm bg-gray-300'>{ productsInCart }</div>
                : ''
              }
            </div>
          </div>

          <div className='hidden xl:block xl:w-50'>
            {
              authStatus === 'authenticating'
              ? 
              <div className='navbar-text flex flex-col py-4 pl-3'>                
                  <div className="h-4 w-28 rounded bg-gray-700 animate-pulse" />                
              </div>
              : authStatus === 'authenticated' 
              ?
              <button className='navbar-button navbar-text flex flex-row align-middle items-center xl:gap-2' onClick={ handleUserMenu }>
                <CiUser className='text-[25px] xl:text-[30px]' color='#0A84FF' />
                <span className={`hidden xl:block text-sm`}>{ authenticatedUser?.name } ▼</span>            
              </button>
              : authStatus === 'not-authenticated' &&
              <Link href={'/auth'}>
                <button className='navbar-button navbar-text flex flex-row align-middle items-center xl:gap-2'>
                  <CiUser className='text-[25px] xl:text-[30px]' color='#0A84FF' />
                  <span className='hidden xl:block'>Login</span>            
                </button>
              </Link>
            }
            {
              isUserMenuOpen
              ?
              <div className='hidden xl:block xl:absolute  xl:w-50 rounded-2xl xl:h-fit xl:bg-gray-900'>
                  <div className='flex flex-col p-3'>
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
              :
              ''
            }
          </div>
        </div>
      </div>

    </nav>
  );
};
