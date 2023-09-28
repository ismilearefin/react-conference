'use client'

import Image from "next/image";


export default function Card({conferance,index}) {
  
  const {name, slogan,startDate} = conferance;
  
  
  return (
    <div className="flex gap-4 lg:grid lg:grid-cols-11 w-full lg:w-[1088px]  group">
      {/* Card design */}
      <div  className={`order-2 w-full ${index%2 ? 'lg:order-3' : 'lg:order-1'} lg:col-span-5 bg-[#F9FAFB] py-[18px] px-[12px] lg:w-[480px] h-[104px] rounded-lg shadow-3xl relative`}>
        <div className=" before:absolute before:inset-0 before:content-[''] before:w-full before:h-[4px] before:bg-[#CDCDCD] before:rounded-t-lg">
          <div className="flex gap-2 ">
            <Image src="/Marker.svg" alt="Marker" width={16} height={16} />
            <h1 className="text-[#111D5E] text-lg font-medium">
              {name}
            </h1>
          </div>
          <p className="ml-6 pt-1 text-[#617187] text-sm font-normal">
            {slogan}
          </p>
        </div>
      </div>

      {/* Icon and Line */}
      <div className="order-1 lg:order-2 grid justify-center justify-items-center">
      <Image
      className="col-span-1 mb-4 transition duration-700 group-hover:border-[#FFC93E] group-hover:border-2  rounded-full"
        src="/confarenceIcon.svg"
        alt="confarenceIcon"
        width={48}
        height={48}
      />
      {
        index !== 4 && <div className="w-[2px] h-[100px] bg-[#CDCDCD] transition-transform transform -translate-y-2 group-hover:bg-[#FFC93E] " style={{ transition: "transform 0.3s" }}></div> 
      }
      
      </div>
      {/* Date */}
      <p className={ `hidden lg:block ${index%2 ? 'lg:order-1 lg:text-end' : 'lg:order-3'} col-span-5 text-[#617187] font-normal text-sm mt-3 `}>
        {startDate}
      </p>
    </div>
  );
}
