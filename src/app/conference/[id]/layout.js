"use client";
import { dataQueries } from "@/graphQL/queries";
import { useQuery } from "@apollo/client";
import client from "../../../graphQL/apollo";
import Button from "@/components/Button";
import { usePathname } from 'next/navigation'
import Loading from "@/components/loading/Loading";



export default function ConferanceLayout({ children, params }) {
  {/* Get the current route */}
  const pathname = usePathname()
  
  
  const id = params.id;
  const { loading, error, data } = useQuery(dataQueries.GET_CONFERENCE_BY_ID, {
    client,
    variables: { id },
  });
  if (loading) return (<Loading></Loading>);
  if (error) return `Error: ${error.message}`;

  const menu = ["organizer", "schedule", "speakers", "sponsors"];
  
  return (
    <div className="flex w-full justify-center">
      <div className="w-full lg:w-[1320px]">
        <div className="pb-[52px]">
          <h1 className="text-5xl font-bold text-[#0A142F] pb-2">
            {data.conference.name}
          </h1>
          <p className="text-[#0A142F] text-xl font-normal opacity-80">
            {data.conference.slogan}c
          </p>
        </div>
        <div className="flex gap-x-8">
          <aside className="border shadow-3xl p-4 h-fit">
            {menu.map((item, i) => (
              <Button id={id} name={item} key={i} path={pathname}></Button>
            ))}
          </aside>
          <div className="overflow-y-scroll scroll-m-1 border w-full h-[670px] rounded-lg mb-[100px] bg-[#F9FAFB]">{children}</div>
        </div>
      </div>
    </div>
  );
}
