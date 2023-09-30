"use client"
import { dataQueries } from '@/graphQL/queries';
import { useQuery } from '@apollo/client';
import client from '../../../../graphQL/apollo';
import React from 'react'
import DetailCard from '@/components/detailCard/DetailCard';

export default function Speakers({params}) {
  const id = params.id;
    const { loading, error, data } = useQuery(dataQueries.GET_SPEAKERS_BY_ID, {
      client,
      variables: { id },
    });
    if (loading) return "Loading...";
    if (error) return `Error: ${error.message}`;
    console.log(data)
    const speakers = data.conference.speakers
  return (
    <div>
      {
        speakers.map((organizer,i) => <DetailCard key={i} organizer={organizer}></DetailCard>)
      }
    </div>
  )
}
