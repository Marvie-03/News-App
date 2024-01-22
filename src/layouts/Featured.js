import React from 'react'
import feature from '../assets/images/featured.jpg'


const Featured = () => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 h-[200px] mt-8'>
        <img src={ feature } alt="/" className='col-span-1'/>
        <div className='sm:col-span-1 lg:col-span-2 flex flex-col items-center'>
            <h1 className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, dolores.</h1>
            <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, totam quod iste minus doloremque excepturi provident corrupti a unde repellendus sapiente eaque fugit quis illo!</p>
        </div>
    </div>
  )
}

export default Featured