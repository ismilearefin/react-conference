"use client";
import { dataQueries } from "@/graphQL/queries";
import { useQuery } from "@apollo/client";
import client from "../../../../graphQL/apollo";
import React from "react";
import ScheduleCard from "@/components/detailCard/ScheduleCard";
import CardLoading from "@/components/loading/CardLoading";

export default function Schedule({ params }) {
  const id = params.id;
  const { loading, error, data } = useQuery(dataQueries.GET_SCHEDULE_BY_ID, {
    client,
    variables: { id },
  });
  // Handle loading state
  if (loading) return <CardLoading></CardLoading>;
  // Handle error state with a user-friendly message
  if (error) return <div>Error loading data. Please try again later.</div>;

  const schedules = data.conference.schedules;

  return (
    <div className="grid gap-y-3 lg:gap-y-6 lg:mx-[52px] py-[24px]">
      {schedules.map((detailsData, i) => (
        <ScheduleCard detailsData={detailsData} key={i}></ScheduleCard>
      ))}
    </div>
  );
}
