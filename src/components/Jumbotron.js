import React from 'react'
import { FaStar } from 'react-icons/fa'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Featured from '../layouts/Featured';

const Jumbotron = () => {
  return (
    <div className='w-4/5 mx-auto'>
        <h1 className='text-xl flex items-center'>Editors Pick 
        <FaStar className='pl-2'/>
        </h1>
        <div>
            <Carousel infiniteLoop={true} interval={3000} showThumbs={false}>
                <Featured />
                <Featured />
                <Featured />
            </Carousel>

        </div>
    </div>
  )
}

export default Jumbotron