import { onSetAuthStatus, onSetLoggedUser } from '@/store/auth/authSlice';
import { useAppDispatch } from '@/store/hooks';
import { User } from '@/types/user';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from "react-hook-form"

type LoginInput = {
  email: string,
  password: string
}

export const LoginForm = () => {

  const dispatch = useAppDispatch()

  const router = useRouter()

  const {
      register,
      handleSubmit,
      formState: { errors },
      setError
  } = useForm<LoginInput>()

  const onSubmit: SubmitHandler<LoginInput> = (data) => {

    dispatch(onSetAuthStatus('authenticating'))
    const userList = localStorage.getItem('users');

    if (userList) {
      const parsedUserList: User[] = JSON.parse(userList)
      const user = parsedUserList.find( e => e.email === data.email )

      if (user) {
        dispatch(onSetLoggedUser(user))
        dispatch(onSetAuthStatus('authenticated'))
        localStorage.setItem('auth-user', JSON.stringify(user))
        router.push('/')
        return              
      } else {
        setError('email', { message: 'Email not found' })
      }
    }  
    
    dispatch(onSetAuthStatus('not-authenticated'))

  }


  return (
    <form className='w-full my-5' onSubmit={handleSubmit(onSubmit)}> 

      <div className='mb-5'>
        <label
          htmlFor='email'
          className='block mb-2.5 text-sm md:text-base titles'
        >
          Email
        </label>
        <input
          type='email'
          id='email'
          className={`bg-zinc-100 rounded-md text-heading text-sm md:text-base focus:outline-[#0A84FF] block w-full px-3 py-2.5 placeholder:text-body  ${errors.email ? 'border border-red-500 focus:outline-red-500' : '' } `}
          placeholder='yourmail@mail.com'          
          { ...register('email',  { required: 'Email required' }) }
        />
        { errors.email && <span className='text-red-800'>{errors.email.message}</span> }
      </div>

      <div className='mb-5'>
        <label
          htmlFor='password-alternative'
          className='block mb-2.5 text-sm md:text-base titles'
        >
          Password
        </label>
        <input
          type='password'
          id='password'
          className={`bg-zinc-100 rounded-md text-heading text-sm md:text-base focus:outline-[#0A84FF] block w-full px-3 py-2.5 placeholder:text-body ${errors.password ? 'border border-red-500 focus:outline-red-500' : '' }`}
          placeholder='••••••••'
          { ...register('password',  { required: 'Password required', minLength: { value: 6, message: 'Password must have at least 6 characters' } })}
        />
        { errors.password && <span className='text-red-800'>{errors.password?.message}</span> }
      </div>

      <button
        type='submit'
        className='titles w-full cursor-pointer bg-[#0A84FF] hover:bg-[#0a84ffad] rounded box-border border border-transparent shadow-xs font-medium leading-5 rounded-base text-sm md:text-base px-4 py-2.5 focus:outline-none'
      >
        Login
      </button>
    </form>
  );
};
