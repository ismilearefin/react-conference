import Image from "next/image";



export default function DetailCard({organizer}) {
const {name, about, image}= organizer;
    return (
        
    <div className="flex bg-white  rounded-lg">
       <Image className="m-4 rounded-lg" src={image?.url} alt={name} width={140} height={140}></Image>
        <div className="items-center text-[#0A142F] py-11 px-5 ">
            <h1 className="text-xl font-bold pb-5">{name}</h1>
            <h1 className="opacity-80 font-normal text-base">{
                about?.length < 100 ? about : about.slice(0,100)+'...' 
            }</h1>
        </div>
    </div>
    
  )
}
