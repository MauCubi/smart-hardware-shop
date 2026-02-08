import { Product, products } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export const SearchBar = () => {

  const [searchWord, setSearchWord] = useState<string>('')
  const [results, setResults] = useState<Product[]>([])
  const [isFocused, setIsFocused] = useState(false);

  const onChangeSearchWord = (e: string) => {
    setSearchWord(e)
    console.log(searchWord)
  }

  const pathName = usePathname()

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setResults([])
    setSearchWord('')
  }, [pathName])

  useEffect(() => {
    if (!isFocused) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setResults([])
    }
  }, [isFocused])
  

  useEffect(() => {

    const timeoutId = setTimeout(() => {

      if (searchWord.length < 3) {        
        setResults([]);
        return
      }

      const filtered = products.filter(item =>
        item.name.toLowerCase().includes(searchWord.toLowerCase())
      );
      
      setResults(filtered);     
       
    }, 1500);

    return () => {
      clearTimeout(timeoutId);
    }
  }, [searchWord])




  return (
    <div className='flex flex-col w-full justify-center align-middle items-center'>
      <div className='flex flex-row w-full justify-center relative items-center'>
        <input
          placeholder='Search Product (3 character min)'
          className='flex p-2 text-md bg-zinc-100 w-[70%] h-8 rounded-l-md align-middle focus:outline-solid xl:text-lg xl:w-full xl:h-12'          
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={searchWord}
          onChange={(e) => onChangeSearchWord(e.currentTarget.value)}
        />
        <button className='flex items-center cursor-pointer bg-[#0A84FF] h-8 p-1 rounded-r-md  xl:h-12 xl:p-4'>
          <FaSearch className='xl:text-[20px] text-[15px]'/>
        </button>
      </div>

        <div className='absolute flex flex-col bg-white top-15 xl:top-25 h-fit w-[77%] md:w-[73%] xl:w-[34%]  rounded-lg overflow-hidden'>
          {
            results.map( result => 
              <Link key={result.id} href={`/product/${result.slug}`} onMouseDown={e => e.preventDefault()} onClick={ () => setIsFocused(false)}>
                <div  className='flex flex-row align-middle items-center px-7 py-2 gap-5 cursor-pointer hover:bg-gray-600'>
                  <div className='flex justify-center align-middle  w-[20%] h-[100] self-center xl:self-start p-1 bg-white'>
                    <Image src={result.image[0]} style={{ width: '100%', height: 'auto' }} width={120} height={120} className='object-contain' alt={result.name}/>
                  </div>
                  <div className='mx-auto text-wrap w-[80%]'>
                    <h1 className='titles text-black font-bold'>{ result.name }</h1>
                  </div>
                </div>
              </Link>
            )
          }
        </div>

    </div>
  );
};
