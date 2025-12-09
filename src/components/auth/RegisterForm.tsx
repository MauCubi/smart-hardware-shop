import React from 'react';

export const RegisterForm = () => {
  return (
    <form className='w-full my-5'>
      <div className='mb-5 flex flex-row w-full gap-3'>

        <div className='flex flex-col'>
          <label
            htmlFor='email-alternative'
            className='block mb-2.5 text-sm titles'
          >
            Name
          </label>
          <input
            type='text'
            id='name'
            className='bg-zinc-100 rounded-md text-heading text-sm focus:outline-[#0A84FF] block w-full px-3 py-2.5 placeholder:text-body'
            placeholder='Enter your name'
            required
          />
        </div>

        <div className='flex flex-col'>
          <label
            htmlFor='email-alternative'
            className='block mb-2.5 text-sm titles'
          >
            Last Name
          </label>
          <input
            type='text'
            id='lastname'
            className='bg-zinc-100 rounded-md text-heading text-sm focus:outline-[#0A84FF] block w-full px-3 py-2.5 placeholder:text-body'
            placeholder='Enter your last name'
            required
          />
        </div>
      </div>

      <div className='mb-5'>
        <label
          htmlFor='email-alternative'
          className='block mb-2.5 text-sm titles'
        >
          Email
        </label>
        <input
          type='email'
          id='email'
          className='bg-zinc-100 rounded-md text-heading text-sm focus:outline-[#0A84FF] block w-full px-3 py-2.5 placeholder:text-body'
          placeholder='yourmail@mail.com'
          required
        />
      </div>

      <div className='mb-5'>
        <label
          htmlFor='password-alternative'
          className='block mb-2.5 text-sm titles'
        >
          Password
        </label>
        <input
          type='password'
          id='password-alternative'
          className='bg-zinc-100 rounded-md text-heading text-sm focus:outline-[#0A84FF] block w-full px-3 py-2.5 placeholder:text-body'
          placeholder='••••••••'
          required
        />
      </div>

      <button
        type='submit'
        className='titles w-full cursor-pointer bg-[#0A84FF] hover:bg-[#0a84ffad] rounded box-border border border-transparent shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none'
      >
        Submit
      </button>
    </form>
  );
};
