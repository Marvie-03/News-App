import React, { /*useContext*/ } from 'react'
import BreakNews from '../assets/images/download.jpg'
import { BiSolidCollection, BiExport } from 'react-icons/bi'
import { FaRegHeart } from 'react-icons/fa'
import { ApiContext } from '../utils/ApiContext'

const Hero = (data) => {
    // const data = useContext(ApiContext)
  let randNo = Math.floor((Math.random() * data?.length))
  const Breakingnews = data[randNo]
  console.log(Breakingnews)
 
  return (
    <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-4 mt-8 mx-auto items-center w-4/5 content-center'>
        <img src={BreakNews} alt="/" className='mx-auto w-4/5' />
        <div className='px-2 h-full my-auto'>
            <div className='flex w-full justify-between px-4'>
            <span>Trending</span>
            <div className='flex justify-around w-[100px]'>
                <FaRegHeart />
                <BiExport />
                <BiSolidCollection />
            </div>
            </div>
            {Breakingnews !== undefined ? <h1 className='text-2xl text-black pl-4'>{Breakingnews?.title}</h1> : <h1 className='text-2xl text-black pl-4'>Loading</h1>}
            <article>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </article>
            <div className='flex text-sm text-zinc-600 m-3 w-3/5 justify-around'>
                <span>2 hours ago</span>
                <span>2 hours ago</span>
                <span>2 hours ago</span>
            </div>
        </div>
    </div>
  )
}

export default Hero