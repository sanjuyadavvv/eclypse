import React from 'react'

import model from '../images/modelvid.mp4'
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import image4 from '../images/image4.png'

const Bottom = () => {
  return (
    <div className="pt-[60px]">
      {/* Video and Image Row */}
      <div className="flex flex-col lg:flex-row gap-[20px] px-[20px] lg:pl-[60px]">
        <video
          src={model}
          autoPlay
          loop
          muted
          playsInline
          className="w-full lg:w-[883px] h-[250px] sm:h-[350px] lg:h-[490px] object-cover rounded-[5px]"
        ></video>

        <div className="relative group h-[250px] sm:h-[350px] lg:h-[490px] w-full">
          <img
            src={image1}
            className="w-full h-full object-cover rounded-[5px] transition-opacity duration-300 group-hover:opacity-50"
          />
          <p className="absolute bottom-4 left-4 text-white text-[18px] sm:text-[24px] lg:text-[35px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Premium wool blend in signature vermilion
          </p>
        </div>
      </div>

      {/* Three Image Grid */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-[20px] px-[20px] lg:pl-[60px] pt-[25px]">
        <div className="relative group w-full sm:w-[48%] lg:w-[424px] h-[250px] sm:h-[350px] lg:h-[397px]">
          <img
            src={image2}
            className="w-full h-full object-cover rounded-[5px] transition-opacity duration-300 group-hover:opacity-50"
          />
          <p className="absolute bottom-4 left-4 text-white text-[18px] sm:text-[24px] lg:text-[35px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
            Discrete side pockets with clean finish
          </p>
        </div>

        <div className="relative group w-full sm:w-[48%] lg:w-[424px] h-[250px] sm:h-[350px] lg:h-[397px]">
          <img
            src={image3}
            className="w-full h-full object-cover rounded-[5px] transition-opacity duration-300 group-hover:opacity-50"
          />
          <p className="absolute bottom-4 left-4 text-white text-[18px] sm:text-[24px] lg:text-[35px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Hand-cut assembled in small batches
          </p>
        </div>

        <div className="relative group w-full lg:w-[424px] h-[250px] sm:h-[350px] lg:h-[397px]">
          <img
            src={image4}
            className="w-full h-full object-cover rounded-[5px] transition-opacity duration-300 group-hover:opacity-0"
          />
          <p
            className="absolute inset-0 flex items-center justify-center text-white text-[48px] sm:text-[64px] lg:text-[100px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            id="eclypse"
          >
            Eclypse
          </p>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="pt-[40px] px-[20px]">
        <p className="text-[28px] sm:text-[36px] lg:text-[48px] font-semibold">
          Silhouette No.1 Million
        </p>
      </div>
    </div>
  );
};

export default Bottom;
