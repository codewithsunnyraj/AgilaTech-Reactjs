import React from "react";
import Header from "../components/Header";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { assets } from "../constent/constent";
import Heading from "../components/Heading";
const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="container  mx-auto py-14 md:py-34 relative">
        <div className="grid md:grid-cols-2 grid-cols-1 ">
          <div className="flex items-center relative">
            <div>
              <img
                src={assets.about1}
                className="absolute top-0 animate-animate-y"
                alt=""
              />
            </div>
            <div>
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
              <button className="bg-text-website rounded-md px-2 md:px-8 py-2 md:py-4 text-white text-xl ">
                Discover More +{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Our Best Service start */}
      <div className="bg-[#F3F6FC]  py-14 md:py-24  relative">
        <div className="container mx-auto">
          <div className="w-full flex justify-center">
            <div className="lg:w-1/2">
              <Heading
                subTitle=" Our Best Service"
                heading=" Unlocking The Potential Of Data With Ai"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-4 my-12 md:my-20 md:grid-cols-2 grid-cols-1">
            <div className="">
              <div className="box-1  bg-white p-6 md:p-10 group hover:bg-text-website hover:text-white hover:duration-300 relative ">
                <div>
                  <h3 className="text-2xl font-lora-font">AI Consult</h3>
                  <p className="my-4 text-xl font-inter">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nobis saepe soluta reprehenderit pariatur cumque voluptates?
                  </p>
                </div>
                <div className="absolute lg:-right-16  md:top-5 lg:top-14">
                  <div
                    className="outer p-2 w-28 h-28 bg-transparent border border-text-website rounded-full transition-all duration-300 group-hover:border-white
                    "
                  >
                    <div className="inner w-24 h-24  flex justify-center items-center shadow-md bg-white rounded-full">
                      <img src={assets.ai1} className="shadow-md" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="box-1 my-2 md:my-6  bg-white p-6 md:p-10 group hover:bg-text-website hover:text-white hover:duration-300 relative ">
                <div>
                  <h3 className="text-2xl font-lora-font">AI Consult</h3>
                  <p className="my-4 text-xl font-inter">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nobis saepe soluta reprehenderit pariatur cumque voluptates?
                  </p>
                </div>
                <div className="absolute lg:-right-16  md:top-5 lg:top-14">
                  <div
                    className="outer p-2 w-28 h-28 bg-transparent border border-text-website rounded-full transition-all duration-300 group-hover:border-white
                    "
                  >
                    <div className="inner w-24 h-24  flex justify-center items-center shadow-md bg-white rounded-full">
                      <img src={assets.ai1} className="shadow-md" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="box-1  bg-white p-6 md:p-10 group hover:bg-text-website hover:text-white hover:duration-300 relative ">
                <div>
                  <h3 className="text-2xl font-lora-font">AI Consult</h3>
                  <p className="my-4 text-xl font-inter">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nobis saepe soluta reprehenderit pariatur cumque voluptates?
                  </p>
                </div>
                <div className="absolute lg:-right-16  md:top-5 lg:top-14">
                  <div
                    className="outer p-2 w-28 h-28 bg-transparent border border-text-website rounded-full transition-all duration-300 group-hover:border-white
                    "
                  >
                    <div className="inner w-24 h-24   flex justify-center items-center shadow-md bg-white rounded-full">
                      <img src={assets.ai1} className="shadow-md" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-[#E2EFF2] flex justify-center lg:px-8 lg:pt-24">
                <img src={assets.ai} alt="" />
              </div>
            </div>
            <div className="">
              <div className="box-1  bg-white p-6 lg:ps-16 lg:pb-10 lg:pt-10 group hover:bg-text-website hover:text-white hover:duration-300 relative ">
                <div>
                  <h3 className="text-2xl font-lora-font">AI Consult</h3>
                  <p className="my-4 text-xl font-inter">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nobis saepe soluta reprehenderit pariatur cumque voluptates?
                  </p>
                </div>
                <div className="absolute lg:-left-16  md:top-5 lg:top-14">
                  <div
                    className="outer p-2 w-28 h-28 bg-transparent border border-text-website rounded-full transition-all duration-300 group-hover:border-white
                    "
                  >
                    <div className="inner w-24 h-24  flex justify-center items-center shadow-md bg-white rounded-full">
                      <img src={assets.ai1} className="shadow-md" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-1 my-2 md:my-6  bg-white p-6 lg:ps-16 lg:pb-10 lg:pt-10 group hover:bg-text-website hover:text-white hover:duration-300 relative ">
                <div>
                  <h3 className="text-2xl font-lora-font">AI Consult</h3>
                  <p className="my-4 text-xl font-inter">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nobis saepe soluta reprehenderit pariatur cumque voluptates?
                  </p>
                </div>
                <div className="absolute lg:-left-16  md:top-5 lg:top-14">
                  <div
                    className="outer p-2 w-28 h-28 bg-transparent border border-text-website rounded-full transition-all duration-300 group-hover:border-white
                    "
                  >
                    <div className="inner w-24 h-24  flex justify-center items-center shadow-md bg-white rounded-full">
                      <img src={assets.ai1} className="shadow-md" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-1  md:my-6  bg-white p-6 lg:ps-16 lg:pb-10 lg:pt-10 group hover:bg-text-website hover:text-white hover:duration-300 relative ">
                <div>
                  <h3 className="text-2xl font-lora-font">AI Consult</h3>
                  <p className="my-4 text-xl font-inter">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nobis saepe soluta reprehenderit pariatur cumque voluptates?
                  </p>
                </div>
                <div className="absolute lg:-left-16  md:top-5 lg:top-14">
                  <div
                    className="outer p-2 w-28 h-28 bg-transparent border border-text-website rounded-full transition-all duration-300 group-hover:border-white
                    "
                  >
                    <div className="inner w-24 h-24  flex justify-center items-center shadow-md bg-white rounded-full">
                      <img src={assets.ai1} className="shadow-md" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Best Service end */}

      {/* WORK GALLERY start */}

      <div className="w-full py-10 md:py-24">
        <div className="container mx-auto">
          <div className="w-full flex justify-center">
            <div className="lg:w-1/2">
              <Heading
                subTitle="WORK GALLERY"
                heading="Artificial Intelligence Real Results"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3">
            <div className="md:col-span-2 ">
              <div className="overflow-hidden">
                <img
                  src={assets.result1}
                  className="rounded-md w-full transition-transform duration-500 ease-in-out hover:scale-105"
                  alt=""
                />
              </div>
            </div>
            <div className="">
              <div className="">
                <div className="overflow-hidden">
                  <img
                    src={assets.result2}
                    className="rounded-md w-full transition-transform duration-500 ease-in-out hover:scale-105"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="">
              <div className="overflow-hidden">
                <img
                  src={assets.result2}
                  className="rounded-md w-full transition-transform duration-500 ease-in-out hover:scale-105"
                  alt=""
                />
              </div>
            </div>
            <div className="">
              <div className="overflow-hidden">
                <img
                  src={assets.result4}
                  className="rounded-md w-full transition-transform duration-500 ease-in-out hover:scale-105"
                  alt=""
                />
              </div>
            </div>
            <div className="">
              <div className="">
                <img
                  src={assets.result3}
                  className="rounded-md w-full  -mt-48  transition-transform duration-500 ease-in-out hover:scale-105"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WORK GALLERY end */}

      {/* ABOUT COMPANY start */}
      {/* ABOUT COMPANY end */}

      {/* MEET OUR EXPERTS start */}
      {/* MEET OUR EXPERTS end */}

      {/* WORK PROCESS start */}

      {/* WORK PROCESS end */}

      {/* TESTIMONIAL start */}
      {/* TESTIMONIAL end */}

      {/* RECENT BLOG start */}
      {/* RECENT BLOG end */}
    </div>
  );
};

export default Home;
