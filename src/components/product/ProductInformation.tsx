
const ProductInformation = () => {
  return (
    <div className='flex flex-col items-center align-middle'>
      <h1 className='titles text-3xl mb-4'>Product Information</h1>

      <div className='grid grid-cols-2 w-full justify-center'>
        <div className='flex flex-col p-8'>
          <div className='border-b border-b-[#0A84FF] w-full p-1'>
            <h1 className='titles text-xl'>General</h1>
          </div>
          <div className='grid grid-cols-2 p-2 w-full'>
            <p className='titles font-bold text-md'>Type</p>
            <p className='titles text-md'>Pci</p>

            <p className='titles font-bold text-md'>Chipset gpu</p>
            <p className='titles text-md'>RTX 3060</p>

            <p className='titles font-bold text-md'>Video input</p>
            <p className='titles text-md'>No</p>

            <p className='titles font-bold text-md'>Double bridge</p>
            <p className='titles text-md'>No</p>

            <p className='titles font-bold text-md'>Special features</p>
            <p className='titles text-md'>Ray Tracing + DLSS</p>
          </div>
        </div>

        <div className='flex flex-col p-8'>
          <div className='border-b border-b-[#0A84FF] w-full p-1'>
            <h1 className='titles text-xl'>Connectivity</h1>
          </div>

          <div className='grid grid-cols-2 p-2 w-full'>
            <p className='titles font-bold text-md'>Vga</p>
            <p className='titles text-md'>0</p>

            <p className='titles font-bold text-md'>Dvi digital</p>
            <p className='titles text-md'>0</p>

            <p className='titles font-bold text-md'>Hdmi</p>
            <p className='titles text-md'>1</p>

            <p className='titles font-bold text-md'>Displayports</p>
            <p className='titles text-md'>2</p>

            <p className='titles font-bold text-md'>Usb type-c</p>
            <p className='titles text-md'>3</p>
          </div>
        </div>

        <div className='flex flex-col p-8'>
          <div className='border-b border-b-[#0A84FF] w-full p-1'>
            <h1 className='titles text-xl'>Dimensions</h1>
          </div>

          <div className='grid grid-cols-2 p-2 w-full'>
            <p className='titles font-bold text-md'>Width</p>
            <p className='titles text-md'>116 mm</p>

            <p className='titles font-bold text-md'>Height</p>
            <p className='titles text-md'>2.0 slots</p>

            <p className='titles font-bold text-md'>Length</p>
            <p className='titles text-md'>224 mm</p>
          </div>
        </div>

        <div className='flex flex-col p-8'>
          <div className='border-b border-b-[#0A84FF] w-full p-1'>
            <h1 className='titles text-xl'>Energy</h1>
          </div>

          <div className='grid grid-cols-2 p-2 w-full'>
            <p className='titles font-bold text-md'>Approximate consumption</p>
            <p className='titles text-md'>170 w</p>

            <p className='titles font-bold text-md'>
              Minimum recommended Watts
            </p>
            <p className='titles text-md'>600 w</p>

            <p className='titles font-bold text-md'>Amount of 6 pins Pcie</p>
            <p className='titles text-md'>0</p>

            <p className='titles font-bold text-md'>Amount of 8 pins Pcie</p>
            <p className='titles text-md'>1</p>

            <p className='titles font-bold text-md'>
              Amount of 16 pins adapters
            </p>
            <p className='titles text-md'>0</p>

            <p className='titles font-bold text-md'>Amount of 16 pins Pcie</p>
            <p className='titles text-md'>0</p>

            <p className='titles font-bold text-md'>
              16 pins adapters connections
            </p>
            <p className='titles text-md'>0</p>

            <p className='titles font-bold text-md'>High potency Pcie btf</p>
            <p className='titles text-md'>0</p>
          </div>
        </div>

        <div className='flex flex-col p-8'>
          <div className='border-b border-b-[#0A84FF] w-full p-1'>
            <h1 className='titles text-xl'>Coolers/Refrigeration</h1>
          </div>

          <div className='grid grid-cols-2 p-2 w-full'>
            <p className='titles font-bold text-md'>Vga</p>
            <p className='titles text-md'>0</p>

            <p className='titles font-bold text-md'>Dvi digital</p>
            <p className='titles text-md'>0</p>

            <p className='titles font-bold text-md'>Hdmi</p>
            <p className='titles text-md'>1</p>

            <p className='titles font-bold text-md'>Displayports</p>
            <p className='titles text-md'>2</p>

            <p className='titles font-bold text-md'>Usb type-c</p>
            <p className='titles text-md'>3</p>
          </div>
        </div>

        <div className='flex flex-col p-8'>
          <div className='border-b border-b-[#0A84FF] w-full p-1'>
            <h1 className='titles text-xl'>Extras</h1>
          </div>

          <div className='grid grid-cols-2 p-2 w-full'>
            <p className='titles font-bold text-md'>Vga</p>
            <p className='titles text-md'>0</p>

            <p className='titles font-bold text-md'>Dvi digital</p>
            <p className='titles text-md'>0</p>

            <p className='titles font-bold text-md'>Hdmi</p>
            <p className='titles text-md'>1</p>

            <p className='titles font-bold text-md'>Displayports</p>
            <p className='titles text-md'>2</p>

            <p className='titles font-bold text-md'>Usb type-c</p>
            <p className='titles text-md'>3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
