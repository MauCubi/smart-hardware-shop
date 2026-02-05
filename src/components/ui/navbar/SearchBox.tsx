'use client'
import { Product, products } from '@/data/products';
import { useAppSelector } from '@/store/hooks';
import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { SearchBar } from './SearchBar';



const SearchBox = () => {

  const { isSearchMenuOpen } = useAppSelector( state => state.ui)
  

  return (
    <div className={`xl:hidden ${!isSearchMenuOpen ? 'hidden' : 'flex'} w-full justify-center relative z-1 h-15 bg-[#121212] items-center`}>
      <SearchBar />
      {/* <input
        placeholder='Search Product'
        className='flex p-2 text-md bg-zinc-100 w-[70%] h-8 rounded-l-md align-middle focus:outline-solid xl:text-lg  xl:w-150 xl:h-12'
        autoFocus
        value={searchWord}
        onChange={ e => onChangeSearchWord(e.target.value)}
      />
      <button className='flex items-center cursor-pointer bg-[#0A84FF] h-8 p-1 px-2 rounded-r-md'>
        <FaSearch size={15} />
      </button> */}
    </div>
  );
};

export default SearchBox;
