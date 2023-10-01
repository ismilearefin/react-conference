"use client"
import { dataQueries } from '@/graphQL/queries';
import { useQuery } from '@apollo/client';
import client from '../../../../graphQL/apollo';
import React from 'react'
import DetailCard from '@/components/detailCard/DetailCard';
import CardLoading from '@/components/loading/CardLoading';

export default function Sponsors({params}) {
  const id = params.id;
    const { loading, error, data } = useQuery(dataQueries.GET_SPONSOR_BY_ID, {
      client,
      variables: { id },
    });
    if (loading) return (<CardLoading></CardLoading>);
    if (error) return `Error: ${error.message}`;
    
    const sponsors = data.conference.sponsors
  return (
    <div className='grid gap-y-3 lg:gap-y-6 mx-[52px] py-[24px]'>
      {
        sponsors.map((organizer,i) => <DetailCard key={i} organizer={organizer}></DetailCard>)
      }
    </div>
  )
}