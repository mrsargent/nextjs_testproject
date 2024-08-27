'use client';
import { useSession } from 'next-auth/react';
import Link from 'next/link'

export default function SessionComponent() {
  const { status, data: session} = useSession();

  if (status === 'loading') return null;

  return (
    <>
      {status === 'authenticated' && 
        <div>
            {session.user!.name}
            <Link className='ml-3' href="api/auth/signout">Sign Out </Link>
        </div>}
        
      {status === 'unauthenticated' && <Link className='l' href="/api/auth/signin">Login</Link>}
    </>
  );
};