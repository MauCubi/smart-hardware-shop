interface BrandFilters {
  id: string,
  name: string,
  count: number
}

interface Props {
  brandFilters: BrandFilters[]
}

export const DesktopFilter = ({ brandFilters }: Props) => {
  return (
    <div className='h-full w-60 lg:w-100'>
      <h1 className='titles text-3xl p-8 font-bold'>Filters</h1>

      <div className='flex flex-col px-8 mb-4'>
        

        <h1 className='titles text-2xl font-bold text-[#7eb7ef]'>
          Sub Categories
        </h1>
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
        <h1 className='titles text-2xl font-bold text-[#7eb7ef]'>
          Brand
        </h1>
        {
          brandFilters.map( brand => 
          <div key={brand.id} className='flex justify-between'>
            <p className='titles'>{brand.name}</p>
            <span className='titles'>({brand.count})</span>
          </div>
          )
        }        
      </div>
    </div>
  );
};
