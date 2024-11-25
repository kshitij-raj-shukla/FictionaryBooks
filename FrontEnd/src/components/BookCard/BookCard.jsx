import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ data }) => {
  // console.log("d:", data);
  return (
    <>
      <Link to={`/view-book-details/${data._id}`}>
        <div className='bg-zinc-800 rouded p-4 flex-col'>
          <div className='bg-zinc-900 rounded flex itmes-center justify-center'>
            <img src={data.url} alt="/" className='h-[25vh]'></img>
          </div>
          <h2 className='mt-4 text-xl text-zinc-200 font-semibold'>{data.title}</h2>
          <p className='mt-2 text-zinc-400 font-semibold'>by {data.author}</p>
          <p className='mt-2 text-zinc-200 font-semibold text-xl'>Rs. {data.price}</p>
        </div>
      </Link>
    </>
  );
}

export default BookCard
