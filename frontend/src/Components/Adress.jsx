import React from 'react'

const Adress = () => {
  return (
     <div className="bg-black min-h-screen flex justify-center items-start p-4 md:p-10">
      <form className="border border-gray-400 p-6 rounded-lg w-full max-w-3xl space-y-6 h-auto md:h-[689px] pt-[80px]">
        {/* Radio Button */}
        <div>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="addressType"
              className="form-radio text-red-600 w-5 h-5"
            />
            <span className="ml-2">Home</span>
          </label>
        </div>

        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="bg-transparent border border-white rounded px-4 py-2 placeholder-white"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="bg-transparent border border-white rounded px-4 py-2 placeholder-white"
          />
        </div>

        {/* Second Row - Full width */}
        <div>
          <input
            type="text"
            placeholder="Street Address"
            className="bg-transparent border border-white rounded px-4 py-2 w-full placeholder-white"
          />
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="City"
            className="bg-transparent border border-white rounded px-4 py-2 placeholder-white"
          />
          <input
            type="text"
            placeholder="State"
            className="bg-transparent border border-white rounded px-4 py-2 placeholder-white"
          />
          <input
            type="text"
            placeholder="ZIP"
            className="bg-transparent border border-white rounded px-4 py-2 placeholder-white"
          />
        </div>

        {/* Last Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <input
            type="text"
            placeholder="Phone Number"
            className="bg-transparent border border-white rounded px-4 py-2 placeholder-white"
          />
          <button
            type="submit"
            className="text-white bg-transparent border border-white rounded px-6 py-2 hover:bg-white hover:text-black transition"
          >
            Save This Address
          </button>
        </div>
      </form>
    </div>
  )
}

export default Adress
