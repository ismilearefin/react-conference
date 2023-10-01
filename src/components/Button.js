
import Image from "next/image";
import Link from "next/link";


export default function Button({ id, name,path }) {
  
  return (
    <Link
      className={`${path === `/conference/${id}/${name}` ? 'bg-[#FFC93E]' : 'bg-white'}   hover:bg-[#FFC93E] transition-colors flex items-center border gap-x-11 w-[365px] rounded-lg p-2 my-4`}
      href={`/conference/${id}/${name}`}
    >
      <div className="border w-14 h-14 rounded-lg bg-[#FFFCF6] flex justify-center items-center">
        <Image
          src="/conferenceDetails/move.svg"
          alt="move icon"
          width={25}
          height={22}
        />
      </div>

      <p className="text-xl text-[#0A142F] font-bold">{name}</p>
    </Link>
  );
}
