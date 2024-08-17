'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const NewUserPage = () => {

const router = useRouter();

  //Link 
  // 1. Only downloads content on the target page
  // 2. Pre-fetches view that are in teh view port
  //3. caches pages on the client
  //I guess in a click event you use the router.push to route to a different page
  //instead of the <Link> tag 
  return (
    <button
    className='btn btn-primary' 
    onClick={()=> router.push('/users')}>
      Create</button>
  )
}

export default NewUserPage