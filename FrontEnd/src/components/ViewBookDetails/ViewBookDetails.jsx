// import React from 'react'
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../Loder/Loader';

const ViewBookDetails = () => {
  const {id}=useParams();
  // console.log(id);
  const [Data, setData] = useState({});
  useEffect(() => {
      const fetch = async () => {
          const response = await axios.get(
              `http://localhost:1000/api/v1/get-book-id/${id}`
          );
          setData(response.data.data)
      };  
      fetch();
    }, []);
  return (
    <>
      {Data&&(
        <div className='px-4 md:px-12 py-8 bg-zinc-900 flex flex-col md:flex-row gap-8'>
        <div className='bg-zinc-800 rounded p-4 h-[70vh] lg:h-[88vh] w-full lg:w-3/6 flex  items-center justify-center'>
        {" "}
        <img src={Data?.url} className='h-[50vh] lg:h-[70vh]'></img>
        </div>
        <div className='p-4 w-full lg:w-3/6'>
        <h1 className='text-4xl text-zinc-300 font-semibold'>{Data?.title}</h1>
        <p className='text-zinc-400 mt-1'>by {Data?.author}</p>
        <p className='text-zinc-500 mt-4 text-xl'>{Data?.desc}</p>
        <p className='text-zinc-400 mt-4 flex items-center justify-start'>Language: {Data?.language}</p>
        <p className='text-zinc-100 mt-4 text-3xl font-semibold'>Rs. {Data?.price}</p>
        </div>
      </div>
      )}
      {!Data&&<div className='h-screen bg-zinc-900 flex item-center justify-center'><Loader /></div>}
    </>
  )
}

export default ViewBookDetails
