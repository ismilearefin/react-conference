"use client"
import { dataQueries } from '@/graphQL/queries';
import { useQuery } from '@apollo/client';
import client from '../../../../graphQL/apollo';
import DetailCard from '@/components/detailCard/DetailCard';

export default function Orgranizer({params}) {
    const id = params.id;
    const { loading, error, data } = useQuery(dataQueries.GET_ORGRANIZER_BY_ID, {
      client,
      variables: { id },
    });
    if (loading) return "Loading...";
    if (error) return `Error: ${error.message}`;
    
    const organizers = data.conference.organizers
  return (
    <div className='grid gap-y-6 mx-[52px] py-[24px]'>
      {
        organizers.map((organizer,i) =><DetailCard key={i} organizer={organizer}></DetailCard>)
      }
    </div>
  )
}
