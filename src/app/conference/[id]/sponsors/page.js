"use client"
import { dataQueries } from '@/graphQL/queries';
import { useQuery } from '@apollo/client';
import client from '../../../../graphQL/apollo';
import React from 'react'
import DetailCard from '@/components/detailCard/DetailCard';

export default function Sponsors({params}) {
  const id = params.id;
    const { loading, error, data } = useQuery(dataQueries.GET_SPONSOR_BY_ID, {
      client,
      variables: { id },
    });
    if (loading) return "Loading...";
    if (error) return `Error: ${error.message}`;
    console.log(data)
    const sponsors = data.conference.sponsors
  return (
    <div>
      {
        sponsors.map((organizer,i) => <DetailCard key={i} organizer={organizer}></DetailCard>)
      }
    </div>
  )
}