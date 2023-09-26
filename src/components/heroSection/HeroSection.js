

import Image from "next/image";
import Link from "next/link";


export default function HeroSection() {
  return (
    <div className="pt-4 mx-[200px] flex">
      <Image className="absolute right-[190px]" src='/DotLine.svg' alt="Line" width={940} height={832}></Image>
      
      <div className="basis-4/5 relative">
        <div className="relative text-end text-[#111D5E] text-[140px] font-bold leading-none">
          <Image className="absolute  right-[330px] top-[-30px]" src='/reactStar.svg' alt="react star" width={85} height={85}></Image>
          <h1>React <br/>Conference</h1>
        </div>
        <div className="flex mt-9">
        <div className="relative z-0 basis-2/5">
          <Image className="absolute -z-[10] left-[220px] bottom-[-100px]" src='/Ornament.svg' alt="Ornament" width={196} height={189}/>
          <Image  src='/HeroImage2.png' alt="Hero Image 2" width={330} height={420}></Image>
        </div>
        <div className="basis-3/5 ml-16">
          <div>
            <p className="font-normal text-lg text-black h-[118px] ">
            Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum..id fermentum.In quis diam turpis quam id fermentum.
            </p>
            <div className=" w-[293px] mt-6  bg-[#FFC93E] rounded-[30px] flex justify-center text-[#0A142F] text-lg font-medium">
            <p className="py-[16px] px-2">Buy Tickets</p>
            <Image src='/arrow-up-right.svg' alt="icon" width={20} height={20}/>
            </div>
            </div>
          <div className="relative min-h-full">
            <div className="absolute right-0 bottom-[250px] flex gap-2 flex-row-reverse origin-center -rotate-90">
            <p className="text-[#0A142F] text-sm font-normal">
            Scroll Down
            </p>
            <Image className="animate-pulse origin-center rotate-90 " src='/downArrow.svg' alt="icon" width={16} height={16}/>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="basis-1/5 ml-9 relative">
      <Image className="rounded-[50px] max-w-[550px] pt-[145px]" src='/HeroImage.png' alt="Hero Image" width={550} height={550}></Image>
      <Image className="absolute bottom-[-10px] left-[-40px] " src='/Star.svg' alt="star" width={100} height={100}></Image>
      </div>
        
    </div>
  )
}
