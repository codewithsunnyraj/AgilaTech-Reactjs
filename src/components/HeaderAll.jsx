import React from "react";
import { useNavigate } from "react-router-dom";
const HeaderAll = ({pages}) => {
  const navigate = useNavigate();
  return (
    <div className="bg-bg-common-all text-white h-72 md:h-[500px] bg-no-repeat md:p-20 flex justify-between items-end">
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
