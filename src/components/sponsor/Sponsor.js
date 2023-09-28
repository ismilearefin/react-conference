import Image from "next/image";


export default function Sponsor() {
  return (
    <div className="py-[100px] px-[300px] bg-[#F9FAFB] flex justify-center items-center">
        <div>
            <h1 className="text-[#0A142F] text-5xl font-bold text-center" >Our Sponsor</h1>
            <div>
              <p className="text-center">🥇 Gold Sponsor</p>
              <div className="flex justify-center">
                <Image src='/sponsor/layers.svg' alt="layers" width={218} height={65} />
                <Image src='/sponsor/sisyphus.svg' alt="sisyphus" width={218} height={65} />
              </div>
            </div>
            <div>
              <p className="text-center">🥈Silver Sponsors</p>
              <div className="flex justify-center">
                <Image src='/sponsor/circooles.svg' alt="circooles" width={218} height={65} />
                <Image src='/sponsor/catalog.svg' alt="catalog" width={218} height={65} />
                <Image src='/sponsor/gofore.png' alt="gofore" width={218} height={65} />
              </div>
            </div>
        </div>
    </div>
  )
}
