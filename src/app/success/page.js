'use client'
import Link from 'next/link'
import React from 'react'
import Confetti from 'react-confetti'

export default function page() {
  return (
    <div className='w-full  text-center min-h-screen mt-[100px]'>
         <Confetti width={1920} height={1920}></Confetti>
        <h1 className='text-3xl font-bold '>Successfully send your mail</h1>
        <Link href='/' className=' pointer'>Go back</Link>
    </div>
  )
}
