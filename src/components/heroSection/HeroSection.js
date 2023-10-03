'use client'

import Image from "next/image";
import Link from "next/link";




export default function HeroSection({conferenceSectionRef}) {

  

  const scrollToConferenceSection = () => {
    // Scroll to the ConferenceSection using the ref
    conferenceSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  

  return (
    <div className=' flex justify-center'>
    <div className="w-full relative lg:w-[1552px] lg:pt-4 mx-[20px] lg:mx-[200px] lg:flex">
      <div className="lg:basis-3/5 relative">
        {/* Heading */}
        <div className="relative mr-14 lg:mr-0 text-end text-[#111D5E] text-[48px] lg:text-[140px] font-bold leading-none">
          <Image className="absolute right-[120px] top-[-30px] w-[40px] lg:w-[85px] lg:right-[330px] lg:top-[-40px]" src='/reactStar.svg' alt="react star" width={85} height={85}></Image>
          <h1>React <br/>Conference</h1>
        </div>
        <div className="flex mt-9">
        {/* hero image 2 */}
        <div className="hidden lg:block relative z-0 basis-2/5">
          <Image className="absolute -z-[10] left-[220px] bottom-[-100px]" src='/Ornament.svg' alt="Ornament" width={196} height={189}/>
          <Image  src='/HeroImage2.png' alt="Hero Image 2" width={330} height={420}></Image>
        </div>
        
        <div className="w-full lg:basis-3/5 lg:ml-16">
          
            <p className="font-normal text-base lg:text-lg text-black pb-7 lg:h-[118px] ">
            Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum..id fermentum.In quis diam turpis quam id fermentum.
            </p>
            <button className="w-full lg:w-[293px] mt-2 lg:mt-6  bg-[#FFC93E] rounded-[30px] flex justify-center items-center text-[#0A142F] text-lg font-medium">
            <p className="py-[16px] px-2">Buy Tickets</p>
            <Image src='/arrow-up-right.svg' alt="icon" width={20} height={20}/>
            </button>
            
            {/* Scroll down button */}
          <div onClick={scrollToConferenceSection} className="relative min-h-full cursor-pointer">
            <div  className="hidden absolute z-10 right-[100px] bottom-[300px] lg:flex gap-2 flex-row-reverse origin-center -rotate-90">
            <p className="text-[#0A142F] text-sm font-normal">
            Scroll Down
            </p>
            <Image className="animate-pulse origin-center rotate-90 " src='/downArrow.svg' alt="icon" width={16} height={16}/>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Image className="absolute  top-0 right-[-5px]" src='/DotLine.svg' alt="Line" width={940} height={832}></Image>

      <div className="lg:basis-2/5 ml-2 lg:ml-9 relative">
      <Image className="rounded-[50px] lg:w-[550px] pt-8 lg:pt-[145px]" src='/HeroImage.png' alt="Hero Image" width={550} height={550}></Image>
      <Image className="absolute bottom-[-40px] right-[-20px] lg:bottom-[-10px] lg:left-[-40px] " src='/Star.svg' alt="star" width={100} height={100}></Image>
      </div>
{/* Mobile device Only */}
      <div className="lg:hidden w-full flex flex-row-reverse justify-between mt-[64px]">
          <Image className="mt-[100px]" src='/Ornament.svg' alt="Ornament" width={100} height={100}/>
          <Image  src='/HeroImage2.png' alt="Hero Image 2" width={157} height={200}></Image>
        </div>
        
    </div>
    </div>
  )
}