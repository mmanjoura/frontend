import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
 import { getSession } from 'next-auth/client';


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],

})

export { handler as GET, handler as POST }
