import React from "react";
import { assets } from "../constent/constent";
import { IoMdPlay } from "react-icons/io";
const Home = () => {
  return (
    <div className="w-full bg-home-header bg-cover  md:-mt-[190px] ">
      <div className="absolute bottom-72  lg:top-64  md:right-1/3 ">
        <img src={assets.arrowMove} className="animate-animate-x" alt="" />
      </div>
      <div className="absolute bottom-20 md:right-[750px] ">
        <img src={assets.square} className="animate-animate-y md:w-48" alt="" />
      </div>
      <div className="px-5 lg:px-40">
        <div className="lg:flex  items-center pt-28 md:pt-72 ">
          <div className="lg:w-2/5">
            <div className=" my-5 md:mb-3">
              <span className="py-2 px-4  text-white text-xl rounded-full bg-light-green ">
                Designing for the future
              </span>
            </div>
            <div>
              <h1 className="lg:text-[65px] text-[40px] leading-snug text-white font-bold font-lora-font">
                Empowering Your Business With Artificial
              </h1>
              <p className="my-2 text-slate-400 text-xl font-inter">
                And In Order To Make A Business, Brand Advertising And Marketing
                Plays An Important Role. Similarly,
              </p>
              <div className="flex gap-10 md:my-10   items-center">
                <div>
                  <button className="md:py-3 py-2 font-inter border-text-website px-3 md:px-5  md:text-2xl  border-2 rounded-full border-c text-white ">
                    Discover More +
                  </button>
                </div>
                <div>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <IoMdPlay className="text-3xl text-blue-700" />
                  </div>
                </div>
                <div className="text-white text-xl md:text-2xl font-inter">
                  how we work
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end lg:w-3/5 pt-32 md:pt-20 lg:pt-0">
            <div>
              <img
                src={assets.robotLeft}
                className=" w-52 md:w-72 lg:w-[550px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
