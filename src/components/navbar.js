// import React from 'react'
import { React, useState } from 'react'
import { BsPersonCircle } from "react-icons/bs"
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className='w-full bg-white h-12 shadow-sm items-center flex justify-center space-x-8 content-evenly'>
        <h3>Logo</h3>
        <div className='flex space-x-4'>
            <p>World News</p>
            <p>Business</p>
            <p>Tech & Science</p>
            <p>Sports</p>
            <p>Entertainment</p>
            <p>Others</p>
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