import Link from 'next/link'
import React from 'react'
import {useSession} from 'next-auth/react'
import SessionComponent from '@/components/SessionComponent'

const NavBar = () => {
  

  return (
    <div className=' flex bg-slate-200 p-5 space-x-3'>
        <Link href='/' className='mr-5'>Next.js</Link>
        <Link href='/users'>Users</Link>
        <SessionComponent/>
    </div>
  )
}

export default NavBar