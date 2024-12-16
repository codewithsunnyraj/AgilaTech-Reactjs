import React from "react";
import { assets } from "../constent/constent";
import { IoMdPlay } from "react-icons/io";
const Header = () => {
  return (
    <div className="w-full bg-home-header bg-cover  md:-mt-[190px] ">
      <div className="container mx-auto">
        <div className=" ">
          <img src={assets.arrowMove} className="animate-animate-x absolute top-32 md:bottom-72 right-24 lg:top-44 max-w-[120px] md:right-1/3" alt="" />
        </div>
        <div className=" ">
          <img
            src={assets.square}
            className="animate-animate-y absolute bottom-10 md:bottom-12 right-52 md:right-[600px]"
            alt=""
          />
        </div>
        <div className="px-5 md:px-8 lg:px-28">
          <div className="lg:flex  items-center pt-28 md:pt-64 ">
            <div className="lg:w-3/5">
              <div className=" my-5 md:mb-3">
                <span className="py-2 px-4  text-white text-sm  rounded-full bg-light-green ">
                  Designing for the future
                </span>
              </div>
              <div>
                <h1 className="lg:text-[60px] text-[40px] leading-tight text-white font-bold font-lora-font">
                  Empowering Your Business With Artificial
                </h1>
                <p className="my-4 md:my-2 text-slate-400 md:text-base font-inter">
                  And In Order To Make A Business, Brand Advertising And
                  Marketing Plays An Important Role. Similarly,
                </p>
                <div className="flex gap-2 md:gap-4 md:pt-10 md:pb-32 flex-wrap   items-center">
                  <div>
                    <button className="md:py-3 py-2 font-inter border-text-website px-3 md:px-5  md:text-base  border-2 rounded-full border-c text-text-website ">
                      Discover More +
                    </button>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <IoMdPlay className="text-3xl text-blue-700" />
                    </div>
                  </div>
                  <div className="text-white text-base font-inter">
                    how we work
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end md:justify-center lg:justify-end lg:w-3/5 sm:pt-32 md:pt-10 lg:pt-20 xl:pt-0">
              <div>
                <img
                  src={assets.robotLeft}
                  className=" w-52 sm:w-72 md:w-80 lg:w-[451px]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
