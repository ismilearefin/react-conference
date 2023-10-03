"use client";
import { dataQueries } from "@/graphQL/queries";
import { useQuery } from "@apollo/client";
import client from "../../../../graphQL/apollo";
import DetailCard from "@/components/detailCard/DetailCard";
import CardLoading from "@/components/loading/CardLoading";

export default function Orgranizer({ params }) {
  const id = params.id;
  const { loading, error, data } = useQuery(dataQueries.GET_ORGRANIZER_BY_ID, {
    client,
    variables: { id },
  });
  // Handle loading state
  if (loading) return <CardLoading></CardLoading>;
  // Handle error state with a user-friendly message
  if (error) return <div>Error loading data. Please try again later.</div>;

  const organizers = data.conference.organizers;
  return (
    <div className="grid gap-y-3 lg:gap-y-6 lg:mx-[52px] py-[24px]">
      {organizers.map((detailsData, i) => (
        <DetailCard key={i} detailsData={detailsData}></DetailCard>
      ))}
    </div>
  );
}
