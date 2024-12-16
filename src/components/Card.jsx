import React from "react";
import { assets } from "../constent/constent";

const Card = ({ images, heading, paragraph }) => {
  return (
    <div>
      <div className="hover:bg-white hover:shadow-lg  my-8 md:my-12 group hover:rounded-md hover:duration-300 shadow-black p-4 md:p-8">
        <div className="flex justify-center">
          <div className="text-center flex flex-col items-center">
            <img
              src={images}
              className="w-28 py-4 group-hover:animation-roatee"
              alt=""
            />
            <div>
              <h3 className="md:text-xl font-bold py-2 font-inter">{heading}</h3>
              <p className="text-center md:text-base text-slate-700">{paragraph}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
