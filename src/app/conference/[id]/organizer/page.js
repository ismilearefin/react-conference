"use client"
import { dataQueries } from '@/graphQL/queries';
import { useQuery } from '@apollo/client';
import client from '../../../../graphQL/apollo';
import OrgranizerCard from '@/components/orgranizerCard/OrgranizerCard';

export default function Orgranizer({params}) {
    const id = params.id;
    const { loading, error, data } = useQuery(dataQueries.GET_ORGRANIZER_BY_ID, {
      client,
      variables: { id },
    });
    if (loading) return "Loading...";
    if (error) return `Error: ${error.message}`;
    console.log(data.conference.organizers)
    const organizers = data.conference.organizers
  return (
    <div>
      {
        organizers.map((organizer,i) =><OrgranizerCard key={i} organizer={organizer}></OrgranizerCard>)
      }
    {/* <OrgranizerCard></OrgranizerCard> */}
    </div>
  )
}
