import React from 'react'
import { BsPersonCircle } from "react-icons/bs"
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='w-full bg-white h-12 shadow-sm items-center flex justify-center space-x-8 content-evenly'>
        <h3>Logo</h3>
        <div className='flex space-x-4'>
            <p>Politics</p>
            <p>Politics</p>
            <p>Politics</p>
            <p>Politics</p>
            <p>Politics</p>
            <p>Politics</p>
            <p>Politics</p>
        </div>
        <div className='flex space-x-4 items-center'>
        <BsPersonCircle />
        <AiOutlineSearch />
        <AiOutlineMenu />
        </div>
    </div>
  )
}

export default Navbar