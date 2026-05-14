import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name: string;
      lastName: string;
      email: string;
      emailVerified: Date | null
      rol: 'admin' | 'user';
    } & DefaultSession['user'];
  }
}
