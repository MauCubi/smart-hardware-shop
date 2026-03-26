'use server'
import { prisma } from '@/lib/prisma'
import { User } from '@/types/user'
import bcrypt from 'bcryptjs'


interface Props {
  user: User
}



export const registerUser = async ( name: string, lastName: string, password: string, email: string ) => {  
  
  try {
    

    const userExist = await prisma.user.findUnique({where: { email: email }})

    if (userExist) {
      return {
        ok: false,
        type: 'email',
        message: 'An user with this email already exists'
      }
    }   


    const hashedPassword = await bcrypt.hash(password, 10)

    const createdUser = await prisma.user.create({
      data: {
        name: name,
        lastName: lastName,
        email: email,
        password: hashedPassword
      }
    })

    return {
      ok: true,
      user: createdUser,
      message:'User created'
    }
    
  } catch (error) {
    throw new Error("Error creating user")
    console.log(error)
  }


}