import React from 'react'
import { useNavigate } from "react-router-dom";



const Cart = () => {

  const navigate=useNavigate();



  const handleClick=()=>{
  navigate('/checkout')
}
  return (
    <div className='flex flex-row gap-[30px] pl-[32px] pt-[80px]'  >
        <button className='w-[196px] h-[66px] border  rounded-[5px] hover:bg-black  hover:text-white' >Add To Cart </button>
      <button className='w-[428px] h-[66px] bg-black text-white  rounded-[5px] hover:bg-white hover:text-black hover:border' onClick={()=>handleClick()}  >Buy </button>
  
    </div>
  )
}

export default Cart
