import React from "react";
import { assets } from "../constent/constent";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const TestimonialSlider = ({images}) => {
  return (
    <div className="w-72 lg:w-[350px] my-4 md:my-0 group bg-white rounded-md relative min-h-[400px]">
    <div className="relative">
      <img src={images} className="w-full rounded-t-md" alt="Team Member" />
      <div className="py-8">
        <h3 className="text-center text-2xl font-bold font-inter">
          Christine Pearson
        </h3>
        <p className="text-center font-semibold font-inter">SEO Department</p>
      </div>
      {/* Social Icons */}
      <div className="social-icons justify-center absolute lg:bottom-32 opacity-0 group-hover:opacity-100 left-1/2 transform -translate-x-1/2 transition-opacity">
        <div className="bg-text-website p-4 flex gap-3 rounded-md">
          <FaFacebookF className="text-2xl text-white " />
          <FaInstagram className="text-2xl text-white " />
          <FaTwitter className="text-2xl text-white  " />
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default TestimonialSlider;
