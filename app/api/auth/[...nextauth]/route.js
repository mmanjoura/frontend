import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
// session
 import { getSession } from 'next-auth/client';


// import User from '@models/user';
// import { connectToDB } from '@utils/database';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  // callbacks: {
  //   async session({ session }) {

  //     session.user.id = "123";

  //     return session;
  //   },
  //   async signIn({ account, profile, user, credentials }) {
  //     try {


  //       return true
  //     } catch (error) {
  //       console.log("Error checking if user exists: ", error.message);
  //       return false
  //     }
  //   },
  // }
})

export { handler as GET, handler as POST }
