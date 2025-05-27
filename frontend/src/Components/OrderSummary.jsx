import React from 'react'

const OrderSummary = () => {
  return (

         <div className=" h-[689px]  pt-[90px] border rounded-lg shadow-md p-6 bg-gray-50 text-gray-800 m-10 w-[572px]">
      <p className="text-sm mb-4">
        By placing your order, you agree to our company{" "}
        <span className="underline cursor-pointer">Privacy policy</span> and{" "}
        <span className="underline cursor-pointer">Conditions of use.</span>
      </p>

      <hr className="my-4" />

      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Items - Silhouette No. 1 – Vermilion</span>
          <span>7,999</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping and handling:</span>
          <span>200</span>
        </div>
        <div className="flex justify-between">
          <span>Before tax:</span>
          <span>6,599</span>
        </div>
        <div className="flex justify-between">
          <span>Tax Collected:</span>
          <span>1,400</span>
        </div>
      </div>

      <hr className="my-4" />

      <div className="flex justify-between text-lg font-semibold">
        <span>Order Total:</span>
        <span>8,199</span>
      </div>

      <button className="w-full mt-6 bg-black text-white py-2 rounded hover:opacity-90">
        Place Order
      </button>
    </div>
    
  )
}

export default OrderSummary
