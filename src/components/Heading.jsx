import React from "react";

const Heading = ({ subTitle, heading }) => {
  return (
    
      <div>
        <h3 className="text-center py-3 font-inter text-xl md:text-xl font-semibold">
         {subTitle}
        </h3>
        <h1 className="text-center font-semibold font-lora-font text-2xl md:text-4xl">
         {heading}
        </h1>
      </div>
   
  );
};

export default Heading;
