import Image from "next/image";
import Logo from "./svgs/Logo";


export default function Footer() {
  const style = {
    width:'175',
    height:'48',
    color:'white'
}
  return (
    <div className="w-full bg-[#111D5E] grid justify-center py-[40px] lg:py-[70px] text-center">
        <div className="grid justify-center">
        <Logo style={style}></Logo>
        </div>
        <div className="flex justify-center gap-x-8 mt-[48px] lg:mt-[78px] mb-[24px] lg:mb-[52px] ">
          <Image src='/footer/twitter.svg' alt="twitter" width={24} height={24}/>
          <Image src='/footer/linkden.svg' alt="linkden" width={24} height={24}/>
          <Image src='/footer/facebook.svg' alt="facebook" width={24} height={24}/>
          <Image src='/footer/dribble.svg' alt="dribble" width={24} height={24}/>
        </div>
        <p className="text-base font-normal text-white">
        © 2023 Lemonhive. All rights reserved.
        </p>
    </div> 
  )
}
