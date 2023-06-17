'use client';
import { Button } from '@/components/button/Button';

import { signIn, signOut } from 'next-auth/react';

export default function Login() {
  return (
    <div className="w-[100%] flex flex-col items-center">
      <div className="max-w-[1440px] w-[100%] min-h-[calc(100vh-60px)] my-8">
        {/* <Button label="Login" onClick={() => signIn()} />
        <Button label="Register" /> */}
      </div>
    </div>
  );
}
