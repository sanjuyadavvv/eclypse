import React from 'react'
import Adress from './Adress'
import OrderSummary from './OrderSummary'

const CheckOut = () => {
  return (
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 p-4 md:p-10 bg-black min-h-screen">
      {/* Address form */}
      <div className="w-full md:w-[731px]">
        <Adress />
      </div>

      {/* Order summary */}
      <div className="w-full md:w-[572px] pt-[40px] md:pt-[40px]">
        <OrderSummary />
      </div>
    </div>
  )
}

export default CheckOut
