'use client'

import { LoginForm } from '@/components/auth/LoginForm';
import { RegisterForm } from '@/components/auth/RegisterForm';
import { useState } from 'react';




export default function AuthPage() {

  const [selectedTab, setSelectedTab] = useState<'login' | 'register'>('login')

  const handleTabSelection = ( tab: 'login' | 'register') => {

    setSelectedTab(tab)

  }

  return (
    <div className='pt-25 pb-40'>

      <div className='flex flex-col self-center justify-center place-self-center w-[358]'>
        <div className='flex flex-row mt-5 md:mt-15 xl:mt-5 w-full justify-center'>
          <button 
            className={`titles w-full py-3 rounded-l ${selectedTab === 'login' ? 'bg-[#0A84FF]' : '' }  border-[#0A84FF] border cursor-pointer transform duration-300`}
            onClick={ () => handleTabSelection('login') }
          >
            Login
          </button>
          <button 
            className={`titles w-full py-3 rounded-r ${selectedTab === 'register' ? 'bg-[#0A84FF]' : '' } border-[#0A84FF] border cursor-pointer transform duration-300`}
            onClick={ () => handleTabSelection('register') }
          >
            Register
          </button>
        </div>

        {
          selectedTab === 'login'
          ? <LoginForm />
          : <RegisterForm />
          
        }

      </div>

    </div>

  );
}