import Image from 'next/image'
import React from 'react'

export default function NotFound() {
  return (
    <div className='h-screen flex justify-center items-center'>
        <div>
        <Image src='/pageNotFound.svg' alt='not found' width={500} height={500}></Image>
        <p className='text-center mt-4 text-2xl'>OPPS! PAGE NOT FOUND</p>
        </div>
    
    </div>
  )
}
