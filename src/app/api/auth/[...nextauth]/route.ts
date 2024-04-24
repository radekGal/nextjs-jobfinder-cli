import { signin } from "@/services/auth";
import { useSignIn } from "@/services/useSignIn";
import { fetcher } from "@/utils/fetch";
import axios from "axios";
import NextAuth, { getServerSession } from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  pages: {
    signIn: "/(auth)/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {label: "Email", type: "text"},
        password: {label: "Password", type: "password"}
      },
      async authorize(credentials : any, req: any) {

        try {
          const res = await fetcher.post('/auth/signin', {
            email: credentials.email,
            password: credentials.password
          });

          // console.log(user);

          const user = await res.data;

          if(user) {
            return user;
          }

          return null;

        } catch(err: any) {
          console.log(err);
        }
        
    }
  })
  ],
  callbacks: {
    async signIn({ user, credentials }: { user: any, credentials: any}) {
      console.log(user, 'signin callbacks')
      console.log(credentials)

      return true;
    },
    async session({ session, token, user }: { session: any, token: any, user: any}) {
      console.log(token, 'TOKEN')
      console.log(session, 'session')
    }
  }
}


const handler = NextAuth(authOptions as any);
export { handler as GET, handler as POST}


// export const getAuthSession = () => getServerSession(authOptions);