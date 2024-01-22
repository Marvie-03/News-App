import React from 'react'
import { FaFacebook,FaTwitter, FaMailBulk } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-[#0E1E32] h-[250px] text-white pt-12'>
        <div className='grid grid-cols-3 items-center'>
            <div className='col-span-1 flex flex-col my-auto w-4/5 content-around pl-8'>
                <h1 className='text-2xl '>Logo</h1>
               <p>Copyright &copy; 2023</p> 
            </div>
            <div className='col-span-1'>
                <p>
                Privacy Policy <br />
                Do not sell my personal info <br />
                Terms of Service<br />
                nbcnews.com<br /> Site Map<br />
                </p>
            </div>
            <div className='col-span-1 flex flex-col'>
                <div className='flex list-none justify-between w-4/5 mb-4'>
                    <li>About</li>
                    <li>About</li>
                    <li>About</li>
                    <li>About</li>
                </div>
                <div className='flex justify-between w-4/5'>
                    <FaFacebook />
                    <FaTwitter />
                    <FaMailBulk />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer