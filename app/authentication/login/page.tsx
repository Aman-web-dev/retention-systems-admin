"use client";

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from 'next/navigation'
import Providers from './providers'

export default async function Login() {
  const session = await getServerSession(authOptions);

  // if (session) {
  //   redirect("/"); 
  // }

  return (
    <div>
      <h2>Login</h2>
      <Providers />
    </div>
  );
}
