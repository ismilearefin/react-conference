"use client";
import { dataQueries } from "@/graphQL/queries";
import { useQuery } from "@apollo/client";
import client from "../../../graphQL/apollo";
import Button from "@/components/detailCard/Button";
import { usePathname } from "next/navigation";
import Loading from "@/components/loading/Loading";

export default function ConferanceLayout({ children, params }) {
  {
    /* Get the current route */
  }
  const pathname = usePathname();

  const id = params.id;
  const { loading, error, data } = useQuery(dataQueries.GET_CONFERENCE_BY_ID, {
    client,
    variables: { id },
  });
  // Handle loading state
  if (loading) return <Loading></Loading>;
  // Handle error state with a user-friendly message
  if (error) return <div>Error loading data. Please try again later.</div>;

  const menu = ["organizer", "schedule", "speakers", "sponsors"];
  return (
    <div className="flex w-full justify-center">
      <div className="w-full lg:w-[1320px]">
        <div className="pb-[24px] lg:pb-[52px] ml-4">
          <h1 className="text-2xl lg:text-5xl font-bold text-[#0A142F]  pb-2">
            {data.conference.name}
          </h1>
          <p className="text-[#0A142F] text-base lg:text-xl font-normal opacity-80">
            {data.conference.slogan}c
          </p>
        </div>
        <div className="lg:flex justify-center  lg:gap-x-8">
          <aside className="border shadow-3xl p-2 lg:p-4 h-fit">
            {menu.map((item, i) => (
              <>
                <Button key={i} id={id} name={item} path={pathname}></Button>
                {/* In mobile screen size */}
                {pathname === `/conference/${id}/${item}` && (
                  <div className="lg:hidden overflow-y-scroll scroll-m-1 border w-full h-[350px] lg:h-[670px] rounded-lg mb-4 lg:mb-[100px] bg-[#F9FAFB]">
                    {children}
                  </div>
                )}
              </>
            ))}
          </aside>
          {/* For desktop view  */}
          <div className="hidden lg:static lg:block overflow-y-scroll scroll-m-1 border w-full h-[250px] lg:h-[670px] rounded-lg mb-[100px] bg-[#F9FAFB]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
