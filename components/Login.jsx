"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Login = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <p>You are sign in</p>
        <button
          onClick={async () => {
            await signOut();
          }}
        >
          Sign out
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <p>You are sign out</p>
        <Link href={"./login"}>Sign In</Link>
      </div>
    );
  }
};

export default Login;
