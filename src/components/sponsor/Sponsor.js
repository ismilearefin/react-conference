import Image from "next/image";


export default function Sponsor() {
  return (
    <div className="w-full py-14 lg:py-[100px] lg:px-[300px] bg-[#F9FAFB] flex justify-center items-center">
      
        <div className="w-full lg:w-[1320px]">
            <h1 className="text-[#0A142F] text-xl lg:text-5xl font-bold text-center pb-[32px]" >Our Sponsor</h1>
            <div className="pb-[32px]">
              <p className="text-center pb-[32px]">🥇 Gold Sponsor</p>
              <div className="flex justify-center items-center  gap-x-14">
                <Image className="w-[106px] lg:w-[218px]" src='/sponsor/layers.svg' alt="layers" width={218} height={65} />
                <Image className="w-[106px] lg:w-[218px]" src='/sponsor/sisyphus.svg' alt="sisyphus" width={218} height={65} />
              </div>
            </div>
            <div className="pb-[32px]">
              <p className="text-center pb-[32px]">🥈Silver Sponsors</p>
              <div className="grid grid-cols-2 lg:flex justify-center justify-items-center gap-x-14">
                <Image className="w-[106px] lg:w-[218px]" src='/sponsor/circooles.svg' alt="circooles" width={218} height={65} />
                <Image className="w-[106px] lg:w-[218px]" src='/sponsor/catalog.svg' alt="catalog" width={218} height={65} />
                <div className="row-span-1 lg:row-auto col-span-2 lg:col-auto grid justify-center pt-4">
                <Image className="w-[106px] lg:w-[218px]" src='/sponsor/gofore.png' alt="gofore" width={218} height={65} />
                </div>
              </div>
            </div>
            <div>
              <p className="text-center pb-[32px]">🥉Bronze Sponsors</p>
              <div className="grid grid-cols-2 lg:grid-cols-4 justify-center justify-items-center gap-14">
                <Image className="w-[106px] lg:w-[218px]" src='/sponsor/sisyphus2.svg' alt="sisyphus2" width={218} height={65} />
                <Image className="w-[106px] lg:w-[218px]" src='/sponsor/quotient.svg' alt="quotient" width={218} height={65} />
                <Image className="w-[106px] lg:w-[218px]" src='/sponsor/layers.svg' alt="layers" width={218} height={65} />
                <Image className="w-[106px] lg:w-[218px]" src='/sponsor/circooles.svg' alt="circooles" width={218} height={65} />
              </div>
            </div>
        </div>
    </div>
  )
}
