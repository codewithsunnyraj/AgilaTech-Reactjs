import React from "react";
import { assets } from "../constent/constent";
import { FaCalendarDays } from "react-icons/fa6";
const SmallCard = () => {
  return (
    <div>
      <div className="absolute lg:bottom-[220px] bottom-[150px] sm:bottom-[150px] md:bottom-[168px] left-16 sm:left-44  lg:left-[45px] bg-text-website py-1  px-6  rounded-lg">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div>
              <img
                src={assets.newsSm}
                className="border w-16 rounded-full p-1"
                alt=""
              />
            </div>
            <p className="text-white ">Admin</p>
          </div>
          <div className="flex items-center gap-4">
            <FaCalendarDays className="text-white" />
            <p className="text-white ">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
