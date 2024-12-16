import React from "react";
import Header from "../components/Header";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { assets } from "../constent/constent";
import Heading from "../components/Heading";
import TestimonialSlider from "../components/TestimonialSlider";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

import Card from "../components/Card";
import AiBox from "../components/AiBox";
import SmallCard from "../components/SmallCard";
const Home = () => {
  return (
    <div className="w-full ">
      <Header />
      <div className="container  mx-auto py-14 md:py-28 px-4 lg:px-40 relative">
        <div className="grid lg:grid-cols-2 grid-cols-1 ">
          <div className="flex items-center md:justify-center relative my-10 md:my-0 order-2 md:order-none">
            <div>
              <img
                src={assets.about1}
                className="absolute top-0 animate-animate-y"
                alt=""
              />
            </div>
            <div>
              <img src={assets.about2} className="md:w-5/6 " alt="" />
            </div>
          </div>
          <div className="order-1 md:my-16 my-0 md:order-none">
            <div>
              <h4 className="text-text-website  md:text-xl my-4">
                ABOUT COMPANY
              </h4>
              <h1 className=" md:text-5xl font-lora-font font-semibold text-2xl">
                Experience intelligence like never before
              </h1>
              <div>
                <p className="lg:py-8 md:py-6 py-3 font-inter text-base text-slate-700 text-justify">
                  You can access SaaS applications through a web browser or
                  mobile app, as long as you have an internet connection.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <div className="flex items-center">
                  <RiCheckboxCircleFill className="text-text-website mr-2 md:mr-5 text-xl md:text-3xl" />
                  <span className="md:text-base font-inter">
                    Mistakes To Avoid to the
                  </span>
                </div>
                <div className="flex items-center my-2 md:my-4">
                  <RiCheckboxCircleFill className="text-text-website mr-2 md:mr-5 text-xl md:text-3xl" />
                  <span className="md:text-base font-inter">
                    Your Startup industry stan
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <RiCheckboxCircleFill className="text-text-website mr-2 md:mr-5 text-xl md:text-3xl" />
                  <span className="md:text-base font-inter">
                    Mistakes To Avoid to the
                  </span>
                </div>
                <div className="flex items-center my-2 md:my-4">
                  <RiCheckboxCircleFill className="text-text-website mr-2 md:mr-5 text-xl md:text-3xl" />
                  <span className="md:text-base font-inter">
                    Your Startup industry stan
                  </span>
                </div>
              </div>
            </div>
            <div className="my-4 md:my-8">
              <button className="bg-text-website font-inter rounded-md px-2 md:px-8 py-2 md:py-4 text-white md:text-base ">
                Discover More +{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Our Best Service start */}
      <div className="bg-[#F3F6FC]  py-8  px-4 lg:px-40 relative">
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
              <AiBox />
              <AiBox />
              <AiBox />
            </div>
            <div className="hidden lg:block">
              <div className="bg-[#E2EFF2] flex justify-center lg:px-[52px] xl:pt-12  lg:pt-[380px]">
                <img src={assets.ai} alt="" />
              </div>
            </div>
            <div className="">
              <AiBox />
              <AiBox  />
              <AiBox />
            </div>
          </div>
        </div>
      </div>
      {/* Our Best Service end */}

      {/* WORK GALLERY start */}

      <div className="w-full py-10 px-4 lg:px-40">
        <div className="container mx-auto ">
          <div className="w-full flex justify-center">
            <div className="lg:w-1/2 py-6 md:py-14 lg:py-20">
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
                  className="rounded-md w-full  lg:-mt-40  transition-transform duration-500 ease-in-out hover:scale-105"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WORK GALLERY end */}

      {/* ABOUT COMPANY start */}
      <div className="w-full  px-4 lg:px-40 my-5 md:my-10 lg:my-16">
        <div className="container shadow-xl bg-white p-4 md:p-8 lg:p-12 rounded-md mx-auto">
          <div className="grid gap-4 lg:gap-7 lg:grid-cols-2 ">
            <div className="relative">
              <div>
                <img src={assets.boat2} className="" alt="" />
              </div>
              <div className="absolute bottom-28 md:-right-5 animate-animate-y">
                <img src={assets.boat1} alt="" />
              </div>
            </div>
            <div>
              <div>
                <h3 className="uppercase text-text-website font-inter text-xl">
                  About Company
                </h3>
                <h1 className=" md:text-3xl font-lora-font lg:text-5xl font-bold text-xl py-3 md:py-6">
                  Innovation Through Is Intelligence
                </h1>
                <p className="my-3 md:my-4 text-base text-slate-600 font-inter">
                  Aliquam eros justo, posuere in lobortis non, viverra laoreet
                  augue. Sed des mattisi fermentum ullamcorper risus
                  sollicitudin vel. Fusce nec egestas leo mattis oui fermentum
                  dui.
                </p>
                <p className="my-3 md:my-4 text-base text-slate-600 font-inter">
                  Aliquam eros justo, posuere in lobortis non, viverra laoreet
                  augue. Sed des mattisi fermentum ullamcorper risus
                  sollicitudin vel. Fusce nec egestas leo mattis oui fermentum
                  dui.
                </p>
                <div className="my-4 md:my-6 lg:my-10">
                  <div className="md:flex justify-between">
                    <div className="flex justify-center  border px-8 py-5 md:px-14 md:py-5">
                      <div>
                        <div className="flex justify-center">
                          <div>
                            <img src={assets.cyber} alt="" />
                          </div>
                        </div>
                        <p className="text-center text-base text-slate-600 font-semibold font-inter my-2 md:my-4">
                          Cyber Synapse
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center  border px-8 py-5 md:px-14 md:py-5">
                      <div>
                        <div className="flex  justify-center">
                          <div>
                            <img src={assets.synapse} alt="" />
                          </div>
                        </div>
                        <p className="text-center  text-base text-slate-600 font-semibold font-inter my-2 md:my-4">
                          Cyber Synapse
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center  border px-8 py-5 md:px-14 md:py-5">
                      <div>
                        <div className="flex justify-center">
                          <div>
                            <img src={assets.boat} alt="" />
                          </div>
                        </div>
                        <p className="text-center text-base text-slate-600 font-semibold font-inter my-2 md:my-4">
                          Cyber Synapse
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ABOUT COMPANY end */}

      {/* MEET OUR EXPERTS start */}
      <div className="w-full bg-testimonial p-6 relative -z-10 -mt-96 md:-mt-64 md:p-10  ">
        <div className="lg:pt-72 pt-64 flex flex-col justify-center lg:block ">
          <div className=" pl-0 lg:pl-32">
            <h3 className="uppercase text-text-website font-inter text-xl">
              MEET OUR EXPERTS
            </h3>
            <h1 className=" md:text-4xl font-lora-font  text-xl text-white py-3">
              Innovation Through Is Intelligence
            </h1>
          </div>
          <div className="px-4 lg:px-40 container md:pt-5 mx-auto sm:flex lg:block justify-center">
           

            <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3">
              <TestimonialSlider images={assets.team1} />
              <TestimonialSlider images={assets.team2} />
              <TestimonialSlider images={assets.team3} />
            </div>
          </div>
        </div>
      </div>
      {/* MEET OUR EXPERTS end */}

      {/* WORK PROCESS start */}
      <div className="w-full py-6  px-4 lg:px-40 md:py-32 bg-bg-tech bg-no-repeat bg-right">
        <div className="container mx-auto">
          <div className="flex justify-center ">
            <div className="lg:w-1/2">
              <Heading
                subTitle="WORK PROCESS"
                heading="Empowering Your Business With Artificial"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            <Card
              images={assets.assement}
              heading="Assessment"
              paragraph="Research ipsum dolor sit consec tetur sed diam in the aliquam tempor"
            />
            <Card
              images={assets.assement}
              heading="Implementationplanning"
              paragraph="Create ipsum dolor sit consec tetur sed diam in the aliquam tempor"
            />
            <Card
              images={assets.capability}
              heading="Capabilities"
              paragraph="Develope ipsum dolor sit consec tetur sed diam in the aliquam tempor"
            />
            <Card
              images={assets.Innovation}
              heading="Innovation"
              paragraph="Shop ipsum dolor sit consec tetur Malesuada sed diam in the"
            />
          </div>
        </div>
      </div>
      {/* WORK PROCESS end */}

      {/* TESTIMONIAL start */}
      {/* TESTIMONIAL end */}

      {/* RECENT BLOG start */}
      <div className="w-full px-4 lg:px-40 py-4 ">
        <div className="container mx-auto ">
          <div className="flex justify-center mb-3 md:mb-10 ">
            <div className="lg:w-1/2">
              <Heading
                subTitle="RECENT BLOG"
                heading="Discover a World of Sustainable Alternatives"
              />
            </div>
          </div>
          <div className="grid xl:grid-cols-3 gap-10 md:grid-col-2 lg:grid-cols-2">
            <div className="w-full relative">
              <div className="overflow-hidden">
                <img
                  src={assets.news1}
                  className="w-full transition-transform hover:scale-105 hover:duration-300 rounded-md"
                  alt=""
                />
              </div>
              <SmallCard/>
              <div className="text-center shadow p-4 md:p-6">
                <h3 className="text-left md:text-xl mt-10 font-semibold font-inter">
                  Transforming businesses, one pixel at a time
                </h3>
                <p className="text-left my-4 md:text-base text-slate-700 font-inter">
                  Lorem ipsum dolor sit consectetur Malesuada sed diam in the
                  aliquam
                </p>
                <div className="flex gap-2 group items-center">
                  <div className="md:w-[60%] w-[50%] h-[1px] group-hover:bg-text-website hover:duration-300 bg-slate-300"></div>
                  <div>
                    <p className="md:text-base cursor-pointer font-semibold group-hover:text-text-website hover:duration-300">
                      Read More +
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full relative">
              <div className="overflow-hidden">
                <img
                  src={assets.news2}
                  className="w-full transition-transform hover:scale-105 hover:duration-300 rounded-md"
                  alt=""
                />
              </div>
              <SmallCard/>
              <div className="text-center shadow p-4 md:p-6">
                <h3 className="text-left mt-10 md:text-xl font-semibold font-inter">
                  The Importance of a Strong Digital for Strategy
                </h3>
                <p className="text-left my-4 md:text-base text-slate-700 font-inter">
                  Lorem ipsum dolor sit consectetur Malesuada sed diam in the
                  aliquam
                </p>
                <div className="flex gap-2 group items-center">
                  <div className="md:w-[60%] w-[50%] h-[1px] group-hover:bg-text-website hover:duration-300 bg-slate-300"></div>
                  <div>
                    <p className="md:text-base cursor-pointer font-semibold group-hover:text-text-website hover:duration-300">
                      Read More +
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full group relative">
              <div className="overflow-hidden">
                <img
                  src={assets.news1}
                  className="w-full transition-transform group-hover:scale-105 hover:duration-300 rounded-md"
                  alt=""
                />
              </div>
              <SmallCard/>
              <div className="text-center shadow p-4 md:p-6">
                <h3 className="text-left mt-10 md:text-xl font-semibold font-inter">
                  Creating Engaging Content: A Guide for Digital
                </h3>
                <p className="text-left my-4 md:text-base text-slate-700 font-inter">
                  Lorem ipsum dolor sit consectetur Malesuada sed diam in the
                  aliquam
                </p>
                <div className="flex gap-2 group items-center">
                  <div className="md:w-[60%] w-[50%] h-[1px] group-hover:bg-text-website hover:duration-300 bg-slate-300"></div>
                  <div>
                    <p className="md:text-base cursor-pointer font-semibold group-hover:text-text-website hover:duration-300">
                      Read More +
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* RECENT BLOG end */}
    </div>
  );
};

export default Home;
