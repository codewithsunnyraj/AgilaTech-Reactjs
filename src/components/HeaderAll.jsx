import React from "react";
import { useNavigate } from "react-router-dom";
const HeaderAll = ({ pages }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-bg-common-all text-white h-40  lg:h-[500px] bg-no-repeat lg:p-20 flex lg:justify-between lg:flex-row flex-col justify-center items-center lg:items-end">
      <div className="">
        <h2 className="md:text-3xl font-bold font-lora-font">{pages}</h2>
      </div>
      <div className="flex gap-2">
        <p className="cursor-pointer" onClick={() => navigate("/")}>
          Home /
        </p>
        <span>{pages}</span>
      </div>
    </div>
  );
};

export default HeaderAll;
