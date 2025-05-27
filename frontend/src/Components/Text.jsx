import React from 'react'
// import arrow from '../images/arrow.png'
import arrow from  '../images/ar2.png'

const Text = ({text1,text2}) => {
  return (
    <div className='flex flex-row gap-[900px]'>
      
      <p className='pt-[30px]  text-white text-[32px]'>
        {text1} & {text2}  
        </p>
        {/* <img src={arrow} className='w-[10px]'/> */}
    </div>

  )
}

export default Text
