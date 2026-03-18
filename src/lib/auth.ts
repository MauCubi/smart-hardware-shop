import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from '@/lib/prisma'
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcrypt from "bcryptjs";




export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google,
    Credentials({
      async authorize(credentials) {
        const parsedUserData = z.object({ email: z.string().email(), password: z.string().min(6) }).safeParse(credentials)

        if (!parsedUserData.success) {
          return null;
        }

        const { email, password } = parsedUserData.data;

        const user = await prisma.user.findUnique({
          where: { email: email.toLowerCase() },
        });

        if (!user) {
          return null;
        }

        if (!bcrypt.compareSync(password, user.password)) {
          return null;
        }

        const { password: _, ...rest } = user;
        return rest;
      }
    })

  ],
  
  callbacks: {
    async signIn({ user, account, profile }) {
      
      return true
    },
    async session({ session, token }) {
      
      return session
    }
  }
})

