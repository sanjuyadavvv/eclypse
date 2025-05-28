import React from 'react'
import Logo from '../images/Logo.jpg'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate()
  const handleclick = () => {
    navigate('/checkout')
  }

  return (
    <div className="fixed top-0 left-0 w-full backdrop-blur bg-black/30 flex items-center h-[77px] px-6 md:px-[60px] justify-between z-50">
      {/* Logo */}
      <img
        src={Logo}
        className="h-[50px] cursor-pointer"
        onClick={() => {
          navigate('/')
        }}
        alt="Logo"
      />

      {/* Nav Links */}
      <ul className="flex flex-row gap-6 md:gap-[100px] text-white font-bold text-lg">
        <li className="h-[50px] rounded-[10px] p-2 hover:bg-white hover:text-black ">
          About Us
        </li>
        <li className="h-[50px] rounded-[10px] p-2 hover:bg-white hover:text-black cursor-pointer">
          WaitList
        </li>
        <li className="h-[50px] rounded-[10px] p-2 hover:bg-white hover:text-black cursor-pointer">
          Cart
        </li>
        <li
          className="h-[50px] rounded-[10px] p-2 hover:bg-red-600 hover:text-white cursor-pointer"
          onClick={handleclick}
        >
          Buy
        </li>
      </ul>
    </div>
  )
}

export default NavBar
