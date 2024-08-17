'use client'
import React from 'react'

interface Props {
    error: Error;
    reset: () => void; //functino that takes not parameters and doesn't return anything 
}

//nextjs automatically passes the error property when error occurs
const ErrorPage = ({error,reset}: Props) => {
    console.log('Error: ',error);
  return (
    <>
    <div>An unexpected error has occured</div>
    <button className='btn' onClick={()=>reset()}>Retry</button>
    </>
    
  )
}

export default ErrorPage