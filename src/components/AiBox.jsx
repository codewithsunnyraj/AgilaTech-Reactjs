import React from "react";
import { assets } from "../constent/constent";
const AiBox = () => {
  return (
    <div>
      <div className="box-1 mr-10 mb-4 md:mb-8  lg:mr-0 bg-white p-6 md:p-6 group hover:bg-text-website hover:text-white hover:duration-300 relative ">
        <div>
          <h3 className="md:text-2xl font-bold md:font-semibold font-lora-font">
            AI Consult
          </h3>
          <p className="my-4 md:text-base text-slate-500 md:pr-4 lg:pr-0 group-hover:text-white group-hover:duration-300 font-inter">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
            saepe soluta reprehenderit
          </p>
        </div>
        <div className="absolute lg:-right-16 -right-12 md:top-8 top-12 lg:top-14">
          <div
            className="outer p-2 w-20 h-20 md:w-28 md:h-28 bg-transparent border border-text-website rounded-full transition-all duration-300 group-hover:border-white
                          "
          >
            <div className="inner w-16 h-16 md:w-24 md:h-24  flex justify-center items-center shadow-md bg-white rounded-full">
              <img src={assets.ai1} className="shadow-md" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiBox;
