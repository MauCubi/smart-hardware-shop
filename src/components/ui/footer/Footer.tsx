import { BsTelephone } from 'react-icons/bs';
import { FaComputer, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaLocationPin, FaMapLocation, FaTiktok, FaTwitch, FaTwitter, FaX, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

export const Footer = () => {
  return (
    <footer className='bg-[#121212] rounded-base shadow-xs border mt-8'>
      <div className='mx-auto w-full p-4 py-6 lg:py-8'>        
        
        <div className='flex justify-between'>

          <div className='flex gap-3 align-middle justify-center items-center w-1/3'>
            <FaComputer size={50} color='#0A84FF' />
            <div className='flex flex-col'>
              <h1 className='navbar-text font-bold text-3xl italic'>
                CubiHardware
              </h1>
            </div>
          </div>

          <div className='flex flex-col border-l-2 text-sm justify-center items-center gap-6 w-1/3 titles'>

            <div className='flex flex-col text-lg'>
              <h2 className='flex flex-row mb-5 font-semibold text-heading uppercase place-self-center items-center'>
                Follow us
              </h2>
              <div className='flex flex-row gap-4'>
                <FaFacebook size={30} className='cursor-pointer'/> 
                <FaInstagram size={30} className='cursor-pointer'/> 
                <FaXTwitter size={30} className='cursor-pointer'/> 
                <FaYoutube size={30} className='cursor-pointer'/> 
                <FaTwitch size={30} className='cursor-pointer'/> 
                <FaLinkedin size={30} className='cursor-pointer'/> 
                <FaTiktok size={30} className='cursor-pointer'/>
              </div>
            </div>
            

          </div>

          <div className='flex flex-col border-l-2 text-sm justify-center items-center gap-6 w-1/3 titles'>

            <div className='text-sm'>
              <h2 className='flex flex-row mb-2 font-semibold text-heading uppercase place-self-center items-center'>
                <FaMapLocation size={20} className='mr-2'/> Shop Location
              </h2>
              <p>Fictional Address XXXX</p>
              <p>Monday to Saturday 8:00 - 12:00 / 16:00 - 20:00</p>
            </div>

            <div className='flex flex-row gap-10'> 

              <div className='flex flex-col justify-center items-center'>
                <h2 className='flex flex-row mb-2 font-semibold text-heading uppercase place-self-center items-center'>
                  <MdEmail size={20} className='mr-2'/> Emails
                </h2>
                <p><span className='font-bold'>Customer Service:</span> ********@email.com</p>
                <p><span className='font-bold'>Sales/Budgets:</span> ********@email.com</p>
              </div>

              <div className='flex flex-col justify-center items-center'>
                <h2 className='flex flex-row mb-2 text-sm font-semibold text-heading uppercase items-center'>
                  <BsTelephone size={20} className='mr-2' /> Telephones
                </h2>
                <p>(+##) ####-####</p>
                <p><span className='font-bold'>Whatsapp:</span> (+##) ####-####</p>
              </div>

            </div>

          </div>

        </div>
      </div>

      <hr className='mt-6 border-default border-gray-700 sm:mx-auto' />

      <div className='w-full mx-auto p-4 flex flex-col justify-center'>
        <span className='flex flex-row justify-center text-lg text-body sm:text-center text-[#e7e7e7]'>
          © 2025 Mauro Cubilla
        </span>

        <div className='flex justify-center gap-5 mt-2'>
          <FaGithub color='#0A84FF' size={25} />{' '}
          <FaLinkedin color='#0A84FF' size={25} />
        </div>
      </div>
    </footer>
  );
};
