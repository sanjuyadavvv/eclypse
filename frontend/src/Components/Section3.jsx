import React from 'react';
import model3 from '../images/model3vid.mp4';
import image9 from '../images/image9.jpg';
import image10 from '../images/image10.jpg';
import image11 from '../images/image11.jpg';
import Size from './Size';
import Line from './Line';
import Cart from './Cart';

const Section3 = () => {
  return (
    <div className="w-full bg-white">
      <div className="flex flex-col md:flex-row md:px-[50px]">
        {/* Video */}
        <video
          src={model3}
          className="w-full h-auto md:w-[704px] md:h-[913px] object-cover"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Right Side Content */}
        <div className="flex flex-col p-4 md:pl-[32px] md:pt-[54px]">
          {/* Description */}
          <p className="text-black text-sm md:text-base mb-6">
            A tailored composition in motion. Cut from structured wool with a sculpted shoulder and softened hem, this piece captures presence without force. Worn here in the stillness of a city in motion.
          </p>

          {/* Image Grid */}
          <div className="flex flex-col sm:flex-row gap-2 mb-6">
            <img src={image9} alt="Model Look 1" className="w-full sm:w-[32%] object-cover rounded" />
            <img src={image10} alt="Model Look 2" className="w-full sm:w-[32%] object-cover rounded" />
            <img src={image11} alt="Model Look 3" className="w-full sm:w-[32%] object-cover rounded" />
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-gray-200 mb-4"></div>

          {/* Price Section */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 mb-6">
            <p className="text-2xl md:text-[36px] font-bold">₹7,999</p>
            <p className="text-sm md:text-[15px] text-gray-600">MRP. incl. of all taxes</p>
          </div>

          {/* Other Components */}
          <Size />
          <Line />
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Section3;
