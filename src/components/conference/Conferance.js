'use client'

import { GET_DATA } from '@/graphQL/queries';
import Card from './Card';
import { useQuery } from '@apollo/client';
import client from '../../graphQL/apollo';


export default function Conferance() {

  const { loading, error, data } = useQuery(GET_DATA, {
    client,
    nextFetchPolicy:'cache-first'
   });
  
  if (loading) return 'Loading...';
  if (error) return `Error: ${error.message}`;

  const conferences = data?.conferences.slice(0,5)


  return (
    <div className='Pt-[45px] pb-[100px] lg:py-[100px] w-full'>
        <p className='text-center text-2xl lg:text-5xl font-bold py-10'>Conferences</p>
    <div className='flex justify-center items-center '>
    <div>
      {
        conferences && conferences.map((conferance,i) => <Card key={conferance.id} conferance={conferance} index={i}></Card>  )
      }
    </div>
    </div>
    </div>
  )
}
