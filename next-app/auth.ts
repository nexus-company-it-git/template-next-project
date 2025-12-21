import { Provider } from "next-auth/providers";
import Credentials from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { SESSION_SECRET } from "./libs/constants";

export const providers: Provider[] = [
  Credentials({
    id: 'credentials',
    name: 'Credentials',
    credentials: {
      login: {
        label: 'Email',
        type: 'email',
        placeholder: 'Email',
      },
      password: {
        label: 'Password',
        type: 'password',
        placeholder: 'Password',
      }
    },
    async authorize(credentials) {

      // TODO Authorization request
      
      return {
        id: '1',
        name: 'John Doe',
        email: 'john.doe@gmail.com',
      }
    }
  })
]

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers,
  secret: SESSION_SECRET,
  pages: {
    signIn: '/sign-in',
  },
  callbacks: {
    authorized({ auth: session }) {
      const isLoggedIn = Boolean(session);

      return isLoggedIn
    }
  }
})