import React, { useState } from "react";
import { faq } from "../constent/constent";
import { FaAngleDown } from "react-icons/fa6";
const Faq = ({ subTitle, heading }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleFaq = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div>
      {faq.map((item, index) => (
        <div key={index} className="border-b-2">
          <div
            className="title cursor-pointer py-3 flex items-center justify-between"
            onClick={() => handleFaq(index)}
          >
            <p className="text-text-common font-bold text-xl">{item.title}</p>
            <FaAngleDown />
          </div>
          <div
            className={`${
              activeIndex === index ? "paragraph pb-4 " : "paragraph hidden"
            }`}
          >
            {item.paragraph}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
