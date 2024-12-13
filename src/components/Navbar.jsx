import React, { useState } from "react";
import { assets } from "../constent/constent";
import { Link } from "react-router-dom";
import { navLinks } from "../constent/constent";
import { FaArrowRight } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const [close, setClose] = useState(false);
  const HandleIcon = () => {
    setClose(!close);
  };
  return (
    <div className="w-full lg:py-16  lg:px-28">
      <div className="hidden lg:flex justify-between items-center">
        <div>
          <img src={assets.logoNav} alt="" />
        </div>
        <div className="flex gap-8">
          {navLinks.map((items, index) => (
            <ul key={index}>
              <li>
                <Link
                  className="text-white font-semibold text-[20px] hover:text-blue-400 hover:duration-200 "
                  to={items.path}
                >
                  {items.title}
                </Link>
              </li>
            </ul>
          ))}
        </div>
        <div>
          <button className="bg-btn-nav flex justify-center items-center  text-white py-4 px-8 text-xl rounded-md">
            Get a Quotes <FaArrowRight className="ms-2 text-[16px]" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden bg-black py-4 px-10">
        <div className="lg:hidden flex  justify-between items-center">
          <div>
            <img src={assets.logoNav} alt="" />
          </div>
          <div
         
            className={close?"bg-black absolute ease-out duration-500 delay-500 top-[81px] w-full left-0 ps-14":"absolute left-[-100%]"}
          >
            <div className="">
              {navLinks.map((items, index) => (
                <ul key={index}>
                  <li className="my-3">
                    <Link
                      className="text-white font-semibold text-[20px] hover:text-blue-400 hover:duration-200 "
                      to={items.path}
                    >
                      {items.title}
                    </Link>
                  </li>
                </ul>
              ))}
            </div>
            <div className="mb-4">
              <button className="bg-btn-nav flex justify-center items-center   text-white py-2 px-3 text-[14px] rounded-md">
                Get a Quotes <FaArrowRight className="ms-2 text-[12px]" />
              </button>
            </div>
          </div>
          <div onClick={HandleIcon}>
            {close ? (
               <IoClose className="text-white text-2xl font-extrabold" />
            
            ) : (
              <CiMenuFries className="text-white text-2xl font-extrabold" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
