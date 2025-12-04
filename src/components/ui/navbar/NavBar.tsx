import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import { FaComputer, FaRegUser } from 'react-icons/fa6';
import { IoCartOutline } from 'react-icons/io5';

export const NavBar = () => {
  return (
    <nav className='flex bg-[#121212] h-30 justify-between px-20 align-middle items-center z-10'>

      <Link href='/'>
        <div className='flex gap-3'>
          <FaComputer size={70} color='#0A84FF' />
          <div className='flex flex-col'>
            <h1 className='navbar-text font-bold text-3xl italic'>
              CubiHardware
            </h1>
            <h1 className='flex navbar-text justify-center'>
              Next-Level Hardware
            </h1>
          </div>
        </div>
      </Link>

      <div className='flex'>
        <input placeholder='Search Product' className='flex p-2 text-lg bg-zinc-100 w-150 h-12 rounded-l-md align-middle focus:outline-solid' />
        <button className='flex items-center cursor-pointer bg-[#0A84FF] h-12 p-4 rounded-r-md'><FaSearch size={20}/></button>
      </div>

      <div>
        <div className='flex gap-25'>
          <div className='relative'>
            <Link href={'/cart'}>
              <button className='navbar-button navbar-text'><IoCartOutline size={35} color='#0A84FF'/></button>
            </Link>
            <div className='flex absolute justify-center rounded-full top-1 right-1 h-auto w-5 text-sm bg-gray-300'>2</div>
          </div>
          <button className='navbar-button navbar-text flex flex-row align-middle items-center gap-2'><FaRegUser size={30} color='#0A84FF' />Login</button>
        </div>
      </div>
    </nav>
  );
};
