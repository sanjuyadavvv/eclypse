import React from 'react'
import Adress from './Adress'
import OrderSummary from './OrderSummary'

const CheckOut = () => {
  return (
    <div className='flex flex-row gap-[0px] pt-[100px]'>
        <Adress/>
        <OrderSummary/>
   
    </div>
  )
}

export default CheckOut
