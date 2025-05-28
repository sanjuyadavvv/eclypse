import React from 'react'
import frame from '../images/mainvid.mp4';
import Line from './Line';

const Section1 = () => {
  return (
     <div className="pt-[50px] bg-black text-white ">
          {/* Video Section */}
          <video
            src={frame}
            autoPlay
            loop
            muted
            playsInline
            className="w-[1326px] h-[551px] sm:w-full pl-[50px] object-cover pt-[50px] "
          >
            Your browser does not support the video tag.
          </video>
    
          {/* Description Text */}
          <div className="max-w-[800px] pt-[40px] pb-[80px] px-[60px]">
            <p className="font-normal text-[48px] leading-[100%] tracking-[-0.02em]">
              Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut, in movement, in presence.
            </p>
          </div>
    
          {/* Call to Action */}
          <div className="pl-[60px]">
            <p className=" text-white  text-[24px] p-[7px]  hover:bg-white hover:text-black  w-[311px]">
              learn from eclypse
            </p>
            <div className="w-[301px] h-[1px] bg-white group-hover:bg-black transition-all duration-300" />
          </div>
        </div>
  )
}

export default Section1


