import React from "react";

const PartnerCard = ({ images, title, paragraph, buttonText }) => {
  return (
    <div className="shadow-sm hover:shadow-md hover:rounded-md hover:duration-300 p-6 lg:p-10">
      <div>
        <div className="flex justify-center">
          <img src={images} alt="" />
        </div>
        <div>
          <h4 className="text-center py-4 text-xl font-semibold font-lora-font">
            {title}
          </h4>
          <p className="text-center">{paragraph}</p>
          <div className="my-3 flex justify-center">
            <button className="text-base py-2 px-6 border-blue-700 rounded-full border-2">{buttonText} + </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;
