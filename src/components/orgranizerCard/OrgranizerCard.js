import Image from "next/image";


export default function OrgranizerCard({organizer}) {
const {name, about, image}= organizer;
    return (
    <div className="flex bg-white mx-[52px] mt-[52px] rounded-lg">
       <Image className="m-4 rounded-lg" src={image.url} alt={name} width={140} height={140}></Image>
        <div className="items-center text-[#0A142F] py-11 px-5 ">
            <h1 className="text-xl font-bold pb-5">{name}</h1>
            <h1 className="opacity-80 font-normal text-base">{about}</h1>
        </div>
    </div>
  )
}
