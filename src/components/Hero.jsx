import React, { /*useContext*/ } from 'react'
import BreakNews from '../assets/images/download.jpg'
import { BiSolidCollection, BiExport } from 'react-icons/bi'
import { FaRegHeart } from 'react-icons/fa'
import { useFetchNews } from '../utils/useFetchNews';
import { ApiContext } from '../utils/ApiContext'

const Hero = () => {
    // const data = useContext(ApiContext)
    const url ='https://newsapi.org/v2/top-headlines?country=us&apiKey=6fbacd5c457045bdbc49e7938c417f4e'
    const { data } = useFetchNews(url);
  let randNo = Math.floor((Math.random() * data?.length))
  const Trending = data[randNo]
  console.log(Trending)
 
  return (
    <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-4 mt-8 mx-auto items-center w-4/5 content-center'>
        {Trending?.urlToImage !== null || undefined ? <img src={Trending?.urlToImage} alt="/" className='mx-auto w-4/5 transition-colors' />: <img src={BreakNews} alt="/" className='mx-auto w-4/5 transition-colors' />}
        <div className='px-2 h-full my-auto'>
            <div className='flex w-full justify-between px-4'>
            <span>Trending</span>
            <div className='flex justify-around w-[100px]'>
                <FaRegHeart />
                <BiExport />
                <BiSolidCollection />
            </div>
            </div>
            {Trending !== undefined ? <h1 className='text-2xl text-black pl-4'>{Trending?.title}</h1> : <h1 className='text-2xl text-black pl-4'>Loading</h1>}
            {Trending !== undefined ? <article className='text-black pl-4 line-clamp-3'>{Trending?.description}</article> : <article className=' text-black pl-4'>Loading</article>}
            
            <div className='flex text-sm text-zinc-600 m-3 w-3/5 justify-between'>
            { Trending !== undefined ? <span>{Trending?.source?.name}</span>:<></>}
            { Trending !== undefined ? <span>{Trending?.author}</span>:<></>}
            { Trending !== undefined ? <span>{Trending?.source?.name}</span>:<></>}
                
            </div>
        </div>
    </div>
  )
}

export default Hero