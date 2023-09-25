import React from 'react'
import Logo from './svgs/Logo'



export default function Navbar() {
    
    const style = {
        width:'117',
        height:'32'
    }

  return (
    <div className='flex justify-center items-center border'>
        <div className='w-[82.5rem] flex justify-between py-10'>
        <Logo style={style}></Logo>
        <div className='flex w-[40rem] justify-between text-lg font-medium'>
            <p>About us</p>
            <p>What We do</p>
            <p>Our work</p>
            <p>Blog</p>
            <p>Say hi</p>
        </div>
        <p className='text-2xl'>+</p>
        </div>
    </div>
  )
}
