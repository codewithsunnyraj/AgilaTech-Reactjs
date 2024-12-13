import React from "react";
import Header from "../components/Header";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { assets } from "../constent/constent";
const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="container  mx-auto md:pt-40 relative">
        <div className="grid md:grid-cols-2 grid-cols-1 ">
          <div className="flex items-center relative">
            <div>
              <img src={assets.about1} className="absolute top-0 animate-animate-y" alt="" />
            </div>
            <div >
              <img src={assets.about2} className="w-5/6" alt="" />
            </div>
          </div>
          <div>
            <div>
              <h4 className="text-text-website  md:text-xl my-4">
                ABOUT COMPANY
              </h4>
              <h1 className="md:text-6xl font-lora-font font-bold text-2xl">
                Experience intelligence like never before
              </h1>
              <div>
                <p className="py-8 font-inter text-xl text-slate-700 text-justify">
                  You can access SaaS applications through a web browser or
                  mobile app, as long as you have an internet connection.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <div className="flex items-center">
                  <RiCheckboxCircleFill className="text-text-website mr-2 md:mr-5 text-xl md:text-3xl" />
                  <span className="text-xl font-inter">
                    Mistakes To Avoid to the
                  </span>
                </div>
                <div className="flex items-center my-2 md:my-4">
                  <RiCheckboxCircleFill className="text-text-website mr-2 md:mr-5 text-xl md:text-3xl" />
                  <span className="text-xl font-inter">
                    Your Startup industry stan
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <RiCheckboxCircleFill className="text-text-website mr-2 md:mr-5 text-xl md:text-3xl" />
                  <span className="text-xl font-inter">
                    Mistakes To Avoid to the
                  </span>
                </div>
                <div className="flex items-center my-2 md:my-4">
                  <RiCheckboxCircleFill className="text-text-website mr-2 md:mr-5 text-xl md:text-3xl" />
                  <span className="text-xl font-inter">
                    Your Startup industry stan
                  </span>
                </div>
              </div>
            </div>
            <div className="my-4 md:my-8">
              <button className="bg-text-website rounded-md px-2 md:px-8 py-2 md:py-4 text-white text-xl ">Discover More + </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
