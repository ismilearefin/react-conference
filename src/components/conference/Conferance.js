'use client'



import { GET_DATA } from '@/graphQL/queries';
import Card from './Card';
import { useQuery } from '@apollo/client';
import client from '../../graphQL/apollo';


export default function Conferance() {


  const { loading, error, data } = useQuery(GET_DATA, { client });
  if (loading) return 'Loading...';
  if (error) return `Error: ${error.message}`;

  const conferences = data?.conferences.slice(0,5)

  console.log(conferences)

  return (
    <div className=' pt-[100px] w-full'>
        <p className='text-center text-5xl font-bold py-10'>Conferences</p>
    <div className='flex justify-center items-center '>
    <div className=''>
      {
        conferences && conferences.map((conferance,i) => <Card key={conferance.id} conferance={conferance} index={i}></Card>  )
      }
      
    
    </div>
    </div>
    </div>
  )
}
