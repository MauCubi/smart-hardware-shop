import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from '@/lib/prisma'
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcrypt from "bcryptjs";
import { SessionUser } from '@/types/user';




export const { handlers, signIn, signOut, auth } = NextAuth({
  // adapter: PrismaAdapter(prisma),  
  pages: {
    signIn: '/auth',
    newUser: '/auth',
  },
  providers: [
    Google,
    Credentials({
      async authorize(credentials) {
        const parsedUserData = z.object({ email: z.email(), password: z.string().min(6) }).safeParse(credentials)

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

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password: _, ...rest } = user;
        return rest;
      }
    })

  ],
  
  callbacks: {
    authorized: async({ auth, request: { nextUrl } }) => {
      console.log({auth})     

      return true;
    },

    jwt({ token, user }) {
      if (user) {
        token.data = user;
      }
      return token;
    },
    session({ session, token, user }) {
      session.user = token.data as SessionUser
      return session;
    },
  }
})

