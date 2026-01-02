import { IoFilterSharp } from 'react-icons/io5';

type SearchParams = Record<string, string | string[] | undefined>;

interface Props {
  searchParams: Promise<SearchParams>;
}

export default async function SearchPage({ searchParams }: Props) {
  const filters = await searchParams;

  console.log(filters);

  return (
    <div className='h-200 pt-20'>

      <div className='flex flex-col justify-center px-8'>
        <label htmlFor="sort" className="block mb-2.5 text-sm font-bold text-heading titles">Order By</label>
        <select
          id='sort'
          className='block w-full px-3 py-2.5  border border-default-medium border-[#0A84FF] rounded titles text-heading text-sm rounded-base shadow-xs'          
        >          
          <option className='text-gray-900 rounded' value='US'>All</option>
          <option className='text-gray-900 rounded' value='CA'>Highest Price</option>
          <option className='text-gray-900 rounded' value='FR'>Lowest Price</option>          
        </select>
      </div>

      <div className='flex justify-center mt-4 items-center w-full'>
        <button className='flex gap-1 border border-white rounded-lg py-2 px-3'>
          <IoFilterSharp className='titles text-2xl'/>
          <h1 className='titles text-lg'>Filters</h1>
        </button>
      </div>

      <h1 className='text-5xl titles'>{JSON.stringify(filters, null, 2)}</h1>
    </div>
  );
}
