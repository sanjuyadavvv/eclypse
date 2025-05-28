import React from 'react';
import arrow from '../images/uparrow.png'

const Section6 = () => {


const handleClick=()=>{
     window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
}
  return (
    <div className="px-4 md:px-[50px] py-10">
      {/* Title */}

     
<div className="flex items-center justify-between w-full">
  <p className="text-white text-[50px] sm:text-[80px] md:text-[87px] lg:text-[117px] font-semibold">
    Eclypse
  </p>
  <img src={arrow} alt="Arrow" className="w-8 h-8 md:w-12 md:h-12 hover:bg-white rounded-[50%]"  onClick={()=>handleClick()}/>
</div>

    
      

      {/* Footer Sections */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-10 gap-10">
        
        {/* Links */}
        <ul className="text-white flex flex-wrap gap-3 md:gap-[30px] items-center text-lg">
          <li>Home</li>
          <p className="text-gray-400">/</p>
          <li>About</li>
          <p className="text-gray-400">/</p>
          <li>Buy</li>
          <p className="text-gray-400">/</p>
          <li>Customers</li>
        </ul>

        {/* Contact Info */}
        <div className="flex flex-col text-left md:text-center">
          <p className="text-gray-400">Contact</p>
          <p className="text-white">+91 123-456-7890</p>
          <p className="text-gray-400 pt-2">Email</p>
          <p className="text-white">Eclypse@gmail.com</p>
        </div>

        {/* All Rights Reserved */}
        <div className="text-gray-400 text-sm md:text-right">
          <p>© {new Date().getFullYear()} Eclypse. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Section6;
