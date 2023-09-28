import Image from "next/image";

export default function Card() {
  return (
    <div className="grid grid-cols-11 w-[1088px]">
      {/* Card design */}
      <div className="col-span-5 bg-[#F9FAFB] py-[18px] px-[12px] w-[480px] h-[104px] rounded-lg  shadow-3xl relative">
        <div className=" before:absolute before:inset-0 before:content-[''] before:w-full before:h-[4px] before:bg-[#CDCDCD] before:rounded-t-lg">
          <div className="flex gap-2 ">
            <Image src="/Marker.svg" alt="Marker" width={16} height={16} />
            <h1 className="text-[#111D5E] text-lg font-medium">
              Freezing Edge 2023
            </h1>
          </div>
          <p className="ml-6 text-[#617187] text-sm font-normal">
            The edge isnt bleeding, its freezing!
          </p>
        </div>
      </div>

      <div className="grid justify-center">
      <Image
      className="col-span-1"
        src="/confarenceIcon.svg"
        alt="confarenceIcon"
        width={48}
        height={48}
      />
      </div>
      <p className="col-span-5 text-[#617187] font-normal text-sm mt-3">
        02 September, 2023
      </p>
    </div>
  );
}
