import React, { /*useContext*/ } from 'react'
import BreakNews from '../assets/images/download.jpg'
import { BiSolidCollection, BiExport } from 'react-icons/bi'
import { FaRegHeart } from 'react-icons/fa'
import { useFetchNews } from '../utils/useFetchNews';


const Hero = () => {
  const { data, isLoading, error } = useFetchNews();
  const randNo = Math.floor(Math.random() * (data?.length ?? 0));
  const Trending = data?.[randNo];
  console.log(Trending);

  return (
      <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-4 mt-8 mx-auto items-center w-4/5 content-center'>
          <img src={Trending?.urlToImage || BreakNews} alt="/" className='mx-auto w-4/5 transition-colors' />
          <div className='px-2 h-full my-auto'>
              <div className='flex w-full justify-between px-4'>
                  <span>Trending</span>
                  <div className='flex justify-around w-[100px]'>
                      <FaRegHeart />
                      <BiExport />
                      <BiSolidCollection />
                  </div>
              </div>
              <h1 className='text-2xl text-black pl-4'>{Trending?.title || 'Loading'}</h1>
              <article className='text-black pl-4 line-clamp-3'>{Trending?.description || 'Loading'}</article>
              <div className='flex text-sm text-zinc-600 m-3 w-3/5 justify-between'>
                  <span>{Trending?.source?.name}</span>
                  <span>{Trending?.author}</span>
                  <span>{Trending?.source?.name}</span>
              </div>
          </div>
      </div>
  );
};

export default Hero;
