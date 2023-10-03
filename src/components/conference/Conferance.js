'use client'

import {dataQueries} from '@/graphQL/queries';
import Card from './Card';
import { useQuery } from '@apollo/client';
import client from '../../graphQL/apollo';
import Loading from '../loading/Loading';




export default function Conferance({conferenceSectionRef}) {
  
  const { loading, error, data } = useQuery(dataQueries.GET_CONFERENCES_DATA, {
    client,
    nextFetchPolicy:'cache-first'
   });
  
  // Handle loading state
  if (loading) return (<Loading></Loading>);
  // Handle error state with a user-friendly message
  if (error) return <div>Error loading data. Please try again later.</div>;

  
  const conferences = data?.conferences.slice(0,5)


  return (
    <div  className='Pt-[45px] pb-[100px] lg:py-[100px] w-full'>
        <p ref={conferenceSectionRef} className='text-center text-2xl lg:text-5xl font-bold py-10'>Conferences</p>
    <div className='flex justify-center items-center'>
    <div>
      {
        conferences && conferences.map((conferance,i) => <Card key={conferance.id} conferance={conferance} index={i}></Card>  )
      }
    </div>
    </div>
    </div>
  )
}
