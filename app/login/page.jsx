"use client";
import {authOptions} from "../api/auth/[...nextauth]/route" ;
import { signIn, signOut, useSession } from 'next-auth/react'
import { getProviders ,getServerSession } from 'next-auth/react';
import React from 'react'



export default async function SignIn() {
  
  const providers = authOptions.providers;
  const { data: session } = useSession(authOptions);
  
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}

     <h1>{JSON.stringify(session)}</h1>
    </>
  )
}

export async function getServerSideProps(context) {
  return {
    props: { providers },
  }
}