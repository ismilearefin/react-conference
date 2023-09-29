import React from 'react'
import Logo from './svgs/Logo'
import Hamburger from './svgs/Hamburger'



export default function Navbar() {
    
    const style = {
        width:'117',
        height:'32',
        color:'#111D5E'
    }

  return (
    <div className='flex justify-center items-center'>
        <div className='min-w-[82.5rem] flex justify-between py-10'>
        <Logo style={style}></Logo>
        <div className='flex min-w-[40rem] justify-between text-lg font-medium'>
            <p>About us</p>
            <p>What We do</p>
            <p>Our work</p>
            <p>Blog</p>
            <p>Say hi</p>
        </div>
        <Hamburger></Hamburger>
        </div>
    </div>
  )
}
