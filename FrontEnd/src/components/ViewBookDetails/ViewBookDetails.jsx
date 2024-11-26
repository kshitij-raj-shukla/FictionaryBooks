// import React from 'react'
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../Loder/Loader';
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
const ViewBookDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const [Data, setData] = useState({});
  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn);
  const role = useSelector((state)=>state.auth.role);
  // console.log(isLoggedIn, role);
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
      {Data && (
        <div className='px-4 md:px-12 py-8 bg-zinc-900 flex flex-col md:flex-row gap-8'>
          <div className=' w-full lg:w-3/6  '>
            {" "}
            <div className=' flex justify-around bg-zinc-800 rounded py-12'>
              <img src={Data?.url} className='h-[50vh] lg:h-[70vh]'></img>
              {isLoggedIn==true && role==='user' &&(
                <div className='flex md:flex-col'>
                <button className='bg-white rounded-full text-3xl p-2 text-red-500'>
                  <FaHeart />
                </button >
                <button className='bg-white rounded-full text-3xl p-2 mt-4 text-blue-500'>
                  <FaShoppingCart />
                </button>
              </div>
              )}
            </div>
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
      {!Data && <div className='h-screen bg-zinc-900 flex item-center justify-center'><Loader /></div>}
    </>
  )
}

export default ViewBookDetails
