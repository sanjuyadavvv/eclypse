import React from 'react';
import image from '../images/image12.jpg';
import image13 from '../images/image13.jpg';
import image14 from '../images/image14.jpg';

const Section5 = () => {
  return (
    <div className='px-4 md:px-[50px] lg:px-[100px]' id='section5'>
      <p className='pt-24 md:pt-56 text-white text-3xl md:text-4xl lg:text-[46px] font-semibold'>
        Our Customers
      </p>

      {/* Main Quote Section */}
      <div className='flex flex-col md:flex-row items-center justify-between gap-8 md:gap-[15%] lg:gap-[25%] pt-12'>
        <p className='text-white text-xl md:text-2xl lg:text-[40px] md:w-[500px] lg:w-[800px] text-center md:text-left px-4 md:px-0'>
          "Understated, but unforgettable. It feels like it was made for me"
        </p>
        <img src={image} className='w-24 h-24 md:w-[126px] md:h-[126px] rounded-full' alt="Customer" />
      </div>

      {/* User Info Section */}
      <div className='flex flex-col md:flex-row items-center justify-between gap-6 md:gap-[10%] pt-12'>
        <div className='flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-0'>
          <p className='text-white text-base md:text-lg lg:text-xl font-medium'>Random Woman</p>
          <p className='text-white text-sm md:text-base'>NY, USA</p>
        </div>
        <img src={image13} className='w-[69px] h-[69px] rounded-full' alt="Customer 2" />
      </div>

      {/* Third Image aligned right */}
      <div className='pt-6 md:pt-10 flex justify-center md:justify-end pr-4 md:pr-[50px] lg:pr-[0.5%]'>
        <img src={image14} className='w-[69px] h-[69px] rounded-full' alt="Customer 3" />
      </div>
    </div>
  );
};

export default Section5;
