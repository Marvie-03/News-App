import React from 'react'
import Newscard from '../layouts/Newscard'
import Random from '../layouts/Random'

const Newsgrid = () => {
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-3 w-4/5 mx-auto my-4'>
        <div className='col-span-2'>
            <div className='h-8 shadow-md flex items-center font-medium bg-white'>
                <p className='mx-2'>Latest News</p>
                <p className='mx-2'>Think</p>
                <p className='mx-2'>Health</p>
            </div>
            <div className='mt-4 grid sm:grid-cols-1 lg:grid-cols-2'>
              <Newscard />
              <Newscard />
              <Newscard />
              <Newscard />
            </div>
            <div className='w-full flex'>
            <button className='border border-red-600 text-red-800 bg-red-50 sm:w-2/4 lg:w-[150px] rounded p-4 mx-auto'>VIEW MORE</button>
            </div>
            
        </div>
        <div className='sm:w-full lg:col-span-1'>
          <Random />
        </div>

    </div>
  )
}

export default Newsgrid