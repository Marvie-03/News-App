import React from 'react'
import Randnews from '../assets/images/random.jpg'
import { FaDotCircle } from 'react-icons/fa'

const Random = () => {
  return (
    <div className='w-full flex flex-col justify-center p-4 '>
    <section className='flex items-center'>
    <FaDotCircle />
    <h2 className='text-xl text-red-800 pl-2'>
        Live
    </h2>
    </section>
    <section className='w-full flex flex-col justify-center'>
        <img src={Randnews} alt="/" />
        <h3 className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
    </section>
        
    </div>
  )
}

export default Random