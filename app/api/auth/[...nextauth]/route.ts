import { NextAuthOptions } from "next-auth";
import type { SessionStrategy } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";

// Replace `any` with `NextAuthOptions` in the authOptions type
export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  
  ],

  // pages: {
  //   signIn: "/authentication/login", // Correct path to your login form component
  //   signOut: "/authentication", // Redirect to login form after logout
  //   error: "/authentication", // (Optional) Error page
  // },

  // pages: {
  //   signIn: "/authentication/login",
  //   signOut: "/authentication/login", // Redirect to login after signout
  //   //error: "/authentication/error",  // (Optional) Uncomment for custom error page
  // },



  session: {
    strategy: "jwt" as SessionStrategy, // Explicitly cast as SessionStrategy
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };