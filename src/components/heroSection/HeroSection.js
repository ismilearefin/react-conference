

import Image from "next/image";


export default function HeroSection() {
  return (
    <div className="pt-4 mx-[200px] flex">
        <Image className="absolute right-[280px]" src='/DotLine.svg' alt="Line" width={940} height={832}></Image>
      <div className="basis-4/5 relative">
        <div className="relative text-end text-[#111D5E] text-[140px] font-bold leading-none">
          <Image className="absolute right-[330px] top-[-30px]" src='/reactStar.svg' alt="react star" width={85} height={85}></Image>
          <h1 className="">React <br/>Conference</h1>
        </div>

      </div>
      <div className="basis-1/5 ml-9 relative">
        <Image className="rounded-[50px] max-w-[550px] pt-[145px]" src='/HeroImage.png' alt="Hero Image" width={550} height={550}></Image>
      <Image className="absolute bottom-[-40px] left-[-40px] " src='/Star.svg' alt="star" width={100} height={100}></Image>
      </div>
        
    </div>
  )
}
