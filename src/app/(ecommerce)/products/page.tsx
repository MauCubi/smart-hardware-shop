import { IoFilterSharp } from 'react-icons/io5';

type SearchParams = Record<string, string | string[] | undefined>;

interface Props {
  searchParams: Promise<SearchParams>;
}

export default async function SearchPage({ searchParams }: Props) {
  const filters = await searchParams;

  

  return (
    <div className='h-200 pt-20'>
      
      <h1 className='text-3xl titles px-8 mb-2'>{ filters['subcategory'] ? JSON.stringify(filters['subcategory'], null, 2).replace(/"/g, "") : JSON.stringify(filters['category'], null, 2).replace(/"/g, "") }</h1>

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

      <div className='w-full h-fit pb-8 bg-[#181818] absolute'>
        <h1 className='titles text-3xl p-8'>Filters</h1>

        <div className='flex flex-col px-8 mb-4'>
          <h1 className='titles text-2xl font-bold text-[#7eb7ef]'>Filter Title One</h1>
          <div className='flex justify-between'>
            <p className='titles'>Filter one</p>
            <span className='titles'>(2)</span>
          </div>
          <div className='flex justify-between'>
            <p className='titles'>Filter two</p>
            <span className='titles'>(4)</span>
          </div>
          <div className='flex justify-between'>
            <p className='titles'>Filter one</p>
            <span className='titles'>(1)</span>
          </div>
        </div>

        <div className='flex flex-col px-8'>
          <h1 className='titles text-2xl font-bold text-[#7eb7ef]'>Filter Title Two</h1>
          <div className='flex justify-between'>
            <p className='titles'>Filter one</p>
            <span className='titles'>(2)</span>
          </div>
          <div className='flex justify-between'>
            <p className='titles'>Filter two</p>
            <span className='titles'>(4)</span>
          </div>
          <div className='flex justify-between'>
            <p className='titles'>Filter one</p>
            <span className='titles'>(1)</span>
          </div>
        </div>


      </div>

      

      <div className='w-full h-20 '>

      </div>

    </div>
  );
}
