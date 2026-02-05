import { Product, products } from '@/data/products';
import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export const SearchBar = () => {

  const [searchWord, setSearchWord] = useState<string>('')
  const [results, setResults] = useState<Product[]>([])

  const onChangeSearchWord = (e: string) => {
    setSearchWord(e)
    console.log(searchWord)
  }

  useEffect(() => {
    
    if (searchWord.length < 3) return

    const timeoutId = setTimeout(() => {
      const filtered = products.filter(item =>
        item.name.toLowerCase().includes(searchWord.toLowerCase())
      );

      
      setResults(filtered);     
      console.log('filtered') 
    }, 1500);

    return () => {
      clearTimeout(timeoutId);
    }
  }, [searchWord])




  return (
    <>
      <input
        placeholder='Search Product'
        className='flex p-2 text-md bg-zinc-100 w-[70%] h-8 rounded-l-md align-middle focus:outline-solid xl:text-lg  xl:w-150 xl:h-12'
        autoFocus
        value={searchWord}
        onChange={(e) => onChangeSearchWord(e.currentTarget.value)}
      />
      <button className='flex items-center cursor-pointer bg-[#0A84FF] h-8 p-1 rounded-r-md  xl:h-12 xl:p-4 '>
        <FaSearch className='xl:text-[20px] text-[15px]'/>
      </button>
    </>
  );
};
