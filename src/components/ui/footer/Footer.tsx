import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export const Footer = () => {
  return (
    <footer className='bg-[#121212] rounded-base shadow-xs border border-default mt-8'>


      <div className="mx-auto w-full p-4 py-6 lg:py-8">


        <div className='md:flex md:justify-between'>
          <div className='mb-6 md:mb-0'>
            <a href='https://flowbite.com/' className='flex items-center'>
              <span className='text-heading self-center text-2xl font-semibold whitespace-nowrap'>
                Flowbite
              </span>
            </a>
          </div>
          <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-heading uppercase'>
                Resources
              </h2>
              <ul className='text-body font-medium'>
                <li className='mb-4'>
                  <a href='https://flowbite.com/' className='hover:underline'>
                    Flowbite
                  </a>
                </li>
                <li>
                  <a href='https://tailwindcss.com/' className='hover:underline'>
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-heading uppercase'>
                Follow us
              </h2>
              <ul className='text-body font-medium'>
                <li className='mb-4'>
                  <a
                    href='https://github.com/themesberg/flowbite'
                    className='hover:underline '
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a href='https://discord.gg/4eeurUVvTy' className='hover:underline'>
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-heading uppercase'>
                Legal
              </h2>
              <ul className='text-body font-medium'>
                <li className='mb-4'>
                  <a href='#' className='hover:underline'>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>




      <hr className='mt-6 border-default border-gray-700 sm:mx-auto' />

      

      <div className='w-full mx-auto p-4 flex flex-col justify-center'>
        <span className='flex flex-row justify-center text-lg text-body sm:text-center text-[#e7e7e7]'>
          © 2025{' '} Mauro Cubilla          
        </span>

        <div className='flex justify-center gap-5 mt-2'>
          <FaGithub color='#0A84FF' size={25} /> <FaLinkedin color='#0A84FF' size={25} />
        </div>
      </div>
    </footer>
  );
};
