'use server'
import { signIn } from '@/lib/auth'
import { AuthError } from 'next-auth';



export const authenticate = async (prevState: string | undefined, formData: FormData) => {

  console.log('authenti!!', Object.fromEntries(formData))

  try {
    await signIn('credentials', {
      ...Object.fromEntries(formData),
      redirect: false,
    });
    return 'Success';    
  } catch (error) {
    if (error instanceof AuthError) {
      console.log(error);
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }

}

export const login = async (email: string, password: string) => {
  try {
    
    await signIn('credentials', { email, password });

    return {
      ok: true
    }

  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: 'No se pudo iniciar sesion'
    }
  }
};
