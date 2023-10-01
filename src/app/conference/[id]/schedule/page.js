"use client"
import { dataQueries } from '@/graphQL/queries';
import { useQuery } from '@apollo/client';
import client from '../../../../graphQL/apollo';
import React from 'react'
import ScheduleCard from '@/components/detailCard/ScheduleCard';

export default function Schedule({params}) {
  const id = params.id;
    const { loading, error, data } = useQuery(dataQueries.GET_SCHEDULE_BY_ID, {
      client,
      variables: { id },
    });
    if (loading) return "Loading...";
    if (error) return `Error: ${error.message}`;
    const schedules = data.conference.schedules
    // console.log(schedules, "page")
  return (
    <div className='grid gap-y-6 mx-[52px] py-[24px]'>
      {
        schedules.map((organizer,i) => <ScheduleCard organizer={organizer} key={i}></ScheduleCard>)
      }
    </div>
  )
}