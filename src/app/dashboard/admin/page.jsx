'use client'
import { useSession } from 'next-auth/react';
import { useRouter } from "next/navigation";
import React from 'react'

const Page = () => {
  const session = useSession();

  const router = useRouter();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }
  return (
    <div className='h-screen flex items-center justify-center text-4xl font-bold font-serif'>
      <h1 >Welcome to User Profile Page</h1>
    </div>
  )
}

export default Page
