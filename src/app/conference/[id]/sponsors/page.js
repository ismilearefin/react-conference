"use client";
import { dataQueries } from "@/graphQL/queries";
import { useQuery } from "@apollo/client";
import client from "../../../../graphQL/apollo";
import React from "react";
import DetailCard from "@/components/detailCard/DetailCard";
import CardLoading from "@/components/loading/CardLoading";

export default function Sponsors({ params }) {
  const id = params.id;
  const { loading, error, data } = useQuery(dataQueries.GET_SPONSOR_BY_ID, {
    client,
    variables: { id },
  });
  // Handle loading state
  if (loading) return <CardLoading></CardLoading>;
  // Handle error state with a user-friendly message
  if (error) return <div>Error loading data. Please try again later.</div>;

  const sponsors = data.conference.sponsors;
  return (
    <div className="grid gap-y-3 lg:gap-y-6 lg:mx-[52px] py-[24px]">
      {sponsors.map((detailsData, i) => (
        <DetailCard key={i} detailsData={detailsData}></DetailCard>
      ))}
    </div>
  );
}
