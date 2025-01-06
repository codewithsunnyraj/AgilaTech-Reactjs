import React from "react";

const SimpleCard = ({ images, subTitle, heading, description }) => {
  return (
    <div className="p-4 shadow-sm group hover:shadow-md hover:duration-300 hover:rounded-md transition-all cursor-pointer">
      <div>
        <img src={images} className="group-hover:rotate-y-80" alt="" />
        <div>
          <p className="text-blue-500 py-2 font-lora-font">{subTitle}</p>
          <h4 className="text-2xl font-semibold font-lora-font">{heading}</h4>
          <p className="text-slate-500 py-3">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SimpleCard;
