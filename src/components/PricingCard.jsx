import React from "react";
import { cardContent } from "../constent/constent";
import { RiCheckboxCircleFill } from "react-icons/ri";
const PricingCard = ({ price, title }) => {
  return (
    <div className="border-[1px] p-8 group hover:bg-blue-600 transition-all duration-300">
      <div className="flex items-end gap-2">
        <h3 className="font-lora-font font-bold text-3xl group-hover:text-white">{price}</h3>
        <span className="font-semibold font-inter group-hover:text-white">/mon</span>
      </div>
      <div>
        <div className="my-12">
          <h3 className="text-xl bg-sky-100 inline py-3 px-12 ">{title}</h3>
        </div>
        <div>
          {cardContent.map((items, index) => (
            <div key={index}>
              <div className="flex items-center my-5 gap-2 ">
                <RiCheckboxCircleFill className="text-xl group-hover:text-white" />
                <p className="text-xl group-hover:text-white font-lora-font">{items}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
            <button className="bg-black text-white  w-full py-2 rounded-smtransition-all duration-300 transform hover:scale-110">Started</button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
