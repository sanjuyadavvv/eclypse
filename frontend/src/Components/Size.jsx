import React from 'react'

const Size = () => {
  return (
    <div className='pl-[32px] pt-[70px] pb-[40px]'>
        <div className='flex flex-row gap-[10px] pb-[30px]'>
          <p className='text-gray-500'> Please select a size</p>
        <p> size chart ? </p>
        </div>
       

        <div className='pt-70px flex flex-row gap-[5px]  '>
            <button className='rounded-[5px] bg-gray-200 w-[82px] h-[49px] hover:bg-black hover:text-white'>XS</button>
            <button className='rounded-[5px] bg-gray-200 w-[82px] h-[49px]  hover:bg-black hover:text-white'>S</button>
            <button className=' rounded-[5px] bg-gray-200 w-[82px] h-[49px]  hover:bg-black hover:text-white'>M</button>
            <button className=' rounded-[5px] bg-gray-200 w-[82px] h-[49px]  hover:bg-black hover:text-white'>L</button>
            <button className='rounded-[5px] bg-gray-200 w-[82px] h-[49px]  hover:bg-black hover:text-white'>XL</button>
        </div>



      
    </div>
  )
}

export default Size
