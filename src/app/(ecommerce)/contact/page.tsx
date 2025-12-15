import React from 'react';
import { FaComputer, FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitch, FaXTwitter, FaYoutube } from 'react-icons/fa6';

const ContactPage = () => {
  return (
    <div className='flex flex-row justify-center'>
      <div className='bg-[#121212] p-10 my-10 xl:rounded-3xl  '>
        <div className='flex align-middle items-center gap-2'>
          <FaComputer size={50} color='#0A84FF' />
          <div className='flex flex-col'>
            <h1 className='navbar-text font-bold text-3xl italic'>
              CubiHardware
            </h1>
          </div>
        </div>

        <div className='flex flex-col'>
          <div className='text-md titles mt-4 border-b-2 py-6'>
            <p className='font-bold'>Fictional Address XXXX</p>
            <p>Monday to Saturday 8:00 - 12:00 / 16:00 - 20:00</p>
          </div>

          <div className='text-md titles border-b-2 py-6'>
            <p>
              <span className='font-bold'>Customer Service:</span>{' '}
              ********@email.com
            </p>
            <p>
              <span className='font-bold'>Sales/Budgets:</span>{' '}
              ********@email.com
            </p>
          </div>

          <div className='text-md titles border-b-2 py-6'>
            <p>
              <span className='font-bold'>Phone:</span> (+##) ####-####
            </p>
            <p>
              <span className='font-bold'>Whatsapp:</span> (+##) ####-####
            </p>
          </div>

          <div className='flex flex-row justify-around text-md titles py-6'>
            <FaFacebook size={25} className='cursor-pointer' />
            <FaInstagram size={25} className='cursor-pointer' />
            <FaXTwitter size={25} className='cursor-pointer' />
            <FaYoutube size={25} className='cursor-pointer' />
            <FaTwitch size={25} className='cursor-pointer' />
            <FaLinkedin size={25} className='cursor-pointer' />
            <FaTiktok size={25} className='cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
