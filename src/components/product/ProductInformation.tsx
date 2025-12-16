
const ProductInformation = () => {
  return (
    <div className='flex flex-col items-center align-middle'>
      <h1 className='titles text-2xl xl:text-3xl mb-4'>Product Information</h1>

      <div className='grid grid-cols-1 xl:grid-cols-2 w-full justify-center'>

        <div className='flex flex-col py-5 xl:p-8'>

          <div className='border-b border-b-[#0A84FF] w-full p-1'>
            <h1 className='titles text-xl'>General</h1>
          </div>
          
          <div className='grid grid-cols-2 p-2 w-full titles text-sm xl:text-md'>
            <p className='font-bold'>Type</p>
            <p className='place-self-end'>Pci</p>

            <p className='font-bold'>Chipset gpu</p>
            <p className='place-self-end'>RTX 3060</p>

            <p className='font-bold'>Video input</p>
            <p className='place-self-end'>No</p>

            <p className='font-bold'>Double bridge</p>
            <p className='place-self-end'>No</p>

            <p className='font-bold'>Special features</p>
            <p className='place-self-end'>Ray Tracing + DLSS</p>
          </div>
        </div>

        <div className='flex flex-col py-5 xl:p-8'>
          <div className='border-b border-b-[#0A84FF] w-full p-1'>
            <h1 className='titles text-xl'>Connectivity</h1>
          </div>

          <div className='grid grid-cols-2 p-2 w-full titles text-sm xl:text-md'>
            <p className='font-bold'>Vga</p>
            <p className='place-self-end'>0</p>

            <p className='font-bold'>Dvi digital</p>
            <p className='place-self-end'>0</p>

            <p className='font-bold'>Hdmi</p>
            <p className='place-self-end'>1</p>

            <p className='font-bold'>Displayports</p>
            <p className='place-self-end'>2</p>

            <p className='font-bold'>Usb type-c</p>
            <p className='place-self-end'>3</p>
          </div>
        </div>

        <div className='flex flex-col py-5 xl:p-8 titles text-sm xl:text-md'>
          <div className='border-b border-b-[#0A84FF] w-full p-1'>
            <h1 className='titles text-xl'>Dimensions</h1>
          </div>

          <div className='grid grid-cols-2 p-2 w-full'>
            <p className='font-bold'>Width</p>
            <p className='place-self-end'>116 mm</p>

            <p className='font-bold'>Height</p>
            <p className='place-self-end'>2.0 slots</p>

            <p className='font-bold'>Length</p>
            <p className='place-self-end'>224 mm</p>
          </div>
        </div>

        <div className='flex flex-col py-5 xl:p-8 titles text-sm xl:text-md'>
          <div className='border-b border-b-[#0A84FF] w-full p-1'>
            <h1 className='titles text-xl'>Energy</h1>
          </div>

          <div className='flex flex-col justify-center p-2 w-full gap-1 xl:gap-0'>

            <div className='flex flex-row w-full justify-between'>
              <p className='font-bold'>Approximate consumption</p>
              <p className='place-self-end'>170 w</p>
            </div>

            <div className='flex flex-row w-full justify-between'>
              <p className='font-bold'>
                Minimum recommended Watts
              </p>
              <p className='place-self-end'>600 w</p>
            </div>


            <div className='flex flex-row w-full justify-between'>
              <p className='font-bold'>Amount of 6 pins Pcie</p>
              <p className='place-self-end'>0</p>
            </div>

            <div className='flex flex-row w-full justify-between'>
              <p className='font-bold'>Amount of 8 pins Pcie</p>
              <p className='place-self-end'>1</p>
            </div>


            <div className='flex flex-row w-full justify-between'>
              <p className='font-bold'>
                Amount of 16 pins adapters
              </p>
              <p className='place-self-end'>0</p>
            </div>

            <div className='flex flex-row w-full justify-between'>
              <p className='font-bold'>Amount of 16 pins Pcie</p>
              <p className='place-self-end'>0</p>
            </div>

            <div className='flex flex-row w-full justify-between'>
              <p className='font-bold'>
                16 pins adapters connections
              </p>
              <p className='place-self-end'>0</p>
            </div>

            <div className='flex flex-row w-full justify-between'>
              <p className='font-bold'>High potency Pcie btf</p>
              <p className='place-self-end'>0</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col py-5 xl:p-8 titles text-sm xl:text-md'>
          <div className='border-b border-b-[#0A84FF] w-full p-1'>
            <h1 className='titles text-xl'>Coolers/Refrigeration</h1>
          </div>

          <div className='grid grid-cols-2 p-2 w-full'>
            <p className='font-bold'>Vga</p>
            <p className='place-self-end'>0</p>

            <p className='font-bold'>Dvi digital</p>
            <p className='place-self-end'>0</p>

            <p className='font-bold'>Hdmi</p>
            <p className='place-self-end'>1</p>

            <p className='font-bold'>Displayports</p>
            <p className='place-self-end'>2</p>

            <p className='font-bold'>Usb type-c</p>
            <p className='place-self-end'>3</p>
          </div>
        </div>

        <div className='flex flex-col py-5 xl:p-8 titles text-sm xl:text-md'>
          <div className='border-b border-b-[#0A84FF] w-full p-1'>
            <h1 className='titles text-xl'>Extras</h1>
          </div>

          <div className='grid grid-cols-2 p-2 w-full'>
            <p className='font-bold'>Vga</p>
            <p className='place-self-end'>0</p>

            <p className='font-bold'>Dvi digital</p>
            <p className='place-self-end'>0</p>

            <p className='font-bold'>Hdmi</p>
            <p className='place-self-end'>1</p>

            <p className='font-bold'>Displayports</p>
            <p className='place-self-end'>2</p>

            <p className='font-bold'>Usb type-c</p>
            <p className='place-self-end'>3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
