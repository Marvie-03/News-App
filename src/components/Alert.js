import React from 'react'
import { useFetchNews } from '../utils/useFetchNews';

const Alert = () => {
  const { data, isLoading, error } = useFetchNews();
  const randNo = Math.floor(Math.random() * (data?.length ?? 0));
  const Trending = data?.[randNo];
  console.log(Trending);
  return (
    <div className='w-4/5 mx-auto content-center items-center bg-red-800 h-12 mt-8 flex space-x-4 justify-center font-medium'>
        <p className='bg-white text-red-800 m-2 p-2'>Breaking News</p>
        <p className='text-white'>{Trending?.title}</p>
    </div>
  )
}

export default Alert