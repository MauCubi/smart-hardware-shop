export const DesktopFilter = () => {
  return (
    <div className='h-full w-100'>
      <h1 className='titles text-3xl p-8'>Filters</h1>

      <div className='flex flex-col px-8 mb-4'>
        <h1 className='titles text-2xl font-bold text-[#7eb7ef]'>
          Filter Title One
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
          Filter Title Two
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
    </div>
  );
};
