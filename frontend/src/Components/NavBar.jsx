import React from 'react'
import Logo from '../images/Logo.jpg'
import {useNavigate}  from 'react-router-dom'

const NavBar = () => {

    const navigate =useNavigate()
     const handleclick=()=>{
        navigate('/checkout')
    }
  return (


   
    <div className='flex flex-row  h-[77px] w-full gap-[700px] pt-[20px] pl-[60px] position: fixed backdrop-blur  bg-black/30'  >
        <img src={Logo} className='justify-start' onClick={()=>{navigate('/')}}/>

        <ul className='flex flex-row justify-right  gap-[100px]' id='Navbar' >
            <li className= 'h-[50px]  rounded-[10px]  text-white font-bold  hover:bg-white hover:text-black p-2'  >About Us</li>
            <li className= 'h-[50px]  rounded-[10px] text-white font-bold  hover:bg-white hover:text-black p-2'>WaitList</li>
            <li className= 'h-[50px]  rounded-[10px] text-white font-bold  hover:bg-white hover:text-black p-2'>cart</li>
            <li className= 'h-[50px] rounded-[10px]  text-white font-bold  hover:bg-red-600  hover:text-white p-2' onClick={handleclick}>Buy</li>
        </ul>
      
    </div>
  )
}

export default NavBar
