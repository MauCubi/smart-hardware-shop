import { onSetAuthStatus, onSetLoggedUser } from '@/store/auth/authSlice';
import { useAppDispatch } from '@/store/hooks';
import { User } from '@/types/user';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from "react-hook-form"
import { v4 as uuidv4 } from 'uuid';


type RegisterInput = {
  name: string,
  lastname: string,
  email: string,
  password: string
}

export const RegisterForm = () => {

  const dispatch = useAppDispatch()
  const router = useRouter()


  const {
      register,
      handleSubmit,
      formState: { errors },
      setError
  } = useForm<RegisterInput>()

  const onSubmit: SubmitHandler<RegisterInput> = (data) => {

    dispatch(onSetAuthStatus('authenticating'))

    const registeredUsers = localStorage.getItem('users')

    const userData = { id: uuidv4(), ...data }

    if (!registeredUsers) {
      localStorage.setItem('users', JSON.stringify([userData]))      
    } else {
      const parsedUsers: User[] = JSON.parse(registeredUsers)
      if (parsedUsers.find(e => e.email === userData.email)) {
        setError('email', { message:'An user with this email already exists'})
        return
      } else {
        localStorage.setItem('users', JSON.stringify([...parsedUsers, userData]) )            
      }      
    }
    dispatch(onSetLoggedUser(userData))
    dispatch(onSetAuthStatus('authenticated'))
    router.push('/')    
  }

  return (
    <form className='w-full my-5' onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-5 flex flex-row w-full gap-3'>

        <div className='flex flex-col w-full'>
          <label
            htmlFor='name'
            className='block mb-2.5 text-sm md:text-base titles'
          >
            Name
          </label>
          <input
            type='text'
            id='name'
            className={`bg-zinc-100 rounded-md text-heading text-sm md:text-base focus:outline-[#0A84FF] block w-full px-3 py-2.5 placeholder:text-body ${errors.name ? 'border border-red-500 focus:outline-red-500' : '' }`}
            placeholder='Enter your name'
            { ...register('name',  { required: 'Name required', minLength: { value: 2, message: 'Name has to be at least 2 characters long' } }) }
          />
          { errors.name && <span className={`text-red-800 w-full ${errors.name.type === 'minLength' ? 'text-sm' : ''}`}>{errors.name.message}</span> }
        </div>

        <div className='flex flex-col w-full'>
          <label
            htmlFor='lastname'
            className='block mb-2.5 text-sm md:text-base titles'
          >
            Last Name
          </label>
          <input
            type='text'
            id='lastname'
            className='bg-zinc-100 rounded-md text-heading text-sm md:text-base min-w-full focus:outline-[#0A84FF] block w-full px-3 py-2.5 placeholder:text-body'
            placeholder='Enter your last name'       
            { ...register('lastname',  { required: 'Last name required', minLength: { value: 2, message: 'Last Name has to be at least 2 characters long' } }) }     
          />
          { errors.lastname && <span className={`text-red-800 w-full ${errors.lastname.type === 'minLength' ? 'text-sm' : ''}`}>{errors.lastname.message}</span> }
        </div>
      </div>

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
          className='bg-zinc-100 rounded-md text-heading text-sm md:text-base focus:outline-[#0A84FF] block w-full px-3 py-2.5 placeholder:text-body'
          placeholder='yourmail@mail.com'
          { ...register('email',  { required: 'Email required' }) }
        />
        { errors.email && <span className='text-red-800'>{errors.email.message}</span> }
      </div>

      <div className='mb-5'>
        <label
          htmlFor='password'
          className='block mb-2.5 text-sm md:text-base titles'
        >
          Password
        </label>
        <input
          type='password'
          id='password-alternative'
          className='bg-zinc-100 rounded-md text-heading text-sm md:text-base focus:outline-[#0A84FF] block w-full px-3 py-2.5 placeholder:text-body'
          placeholder='••••••••'
          { ...register('password',  { required: 'Password required', minLength: { value: 6, message: 'Password must have at least 6 characters' } })}
        />
        { errors.password && <span className='text-red-800'>{errors.password?.message}</span> }
      </div>

      <button
        type='submit'
        className='titles w-full cursor-pointer bg-[#0A84FF] hover:bg-[#0a84ffad] rounded box-border border border-transparent shadow-xs font-medium leading-5 rounded-base text-sm md:text-base px-4 py-2.5 focus:outline-none'
      >
        Register
      </button>
    </form>
  );
};
