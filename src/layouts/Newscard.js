import React from 'react'
import NewsImage from '../assets/images/newsbanner.jpg'
import { BiSolidCollection, BiExport } from 'react-icons/bi'
import { FaRegHeart } from 'react-icons/fa'

const Newscard = () => {

  return (
    <div className=' p-2 col-span-1'>
        <img src={NewsImage} alt="/" />
        <div className='bg-white flex flex-col p-4'>
            <h2 className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p className='pt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae expedita porro minima libero vitae ratione eius eveniet, ut consequuntur quas quisquam, maxime velit. Voluptatum adipisci ullam, perspiciatis animi eaque laboriosam.</p>
            <div className='flex text-sm text-zinc-600 m-3 w-full justify-around'>
                <span>2 hours ago</span>
                <span>2 hours ago</span>
                <span>2 hours ago</span>
            </div>
            <hr />
            <div className='flex justify-around w-full p-4'>
                <FaRegHeart />
                <BiExport />
                <BiSolidCollection />
            </div>
        </div>
    </div>
  )
}

export default Newscard