import React from "react";
import { Helmet } from "react-helmet";
import HeaderAll from "../components/HeaderAll";
import AboutComponent from "../components/AboutComponent";
import { aboutAssets, assets } from "../constent/constent";
import PartnerCard from "../components/PartnerCard";
import Faq from "../components/Faq";
import Card from "../components/Card";
import TestimonialSlider from "../components/TestimonialSlider";
import Counter from "../components/counter";
import Form from "../components/Form";
import SimpleCard from "../components/SimpleCard";
const About = () => {
  return (
    <div className="w-full md:-mt-[210px]">
      <Helmet>
        <title>About Us - Your Website</title>
      </Helmet>
      <HeaderAll pages="About us" />
      <div className="py-10 md:py-24  container mx-auto">
        <div className="lg:mx-32 md:mx-14 mx-4">
          <div className="grid lg:grid-cols-2">
            <div className="relative">
              <div>
                <img
                  src={aboutAssets.aboutus}
                  className="lg:w-[450px] w-full "
                  alt=""
                />
                <div>
                  <img
                    src={aboutAssets.triangleYellow}
                    className="absolute animate-animate-x right-16 top-48"
                    alt=""
                  />
                  <img
                    src={aboutAssets.triangleblue}
                    className="absolute animate-animate-y bottom-4 left-24 "
                    alt=""
                  />
                  <img
                    src={aboutAssets.circle}
                    className="absolute animate-animate-y top-0 left-12 -z-10 "
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="px-6 md:px-10">
              <div className="py-10 md:py-16">
                <p className="text-blue-700 ">About Us</p>
                <h2 className="text-xl lg:text-4xl font-lora-font font-semibold">
                  It Is A Critical Component Of{" "}
                  <span className="text-blue-700">Modern </span> Businesses
                </h2>
                <p className="text-justify py-6 text-gray-600">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Loreaim Ipsum has been the industry's
                  standard dummy
                </p>
                <div className="grid md:grid-cols-2 gap-8 md:gap-10 pt-8 md:pt-14">
                  <div>
                    <div>
                      <img src={aboutAssets.ambition} alt="" />
                      <div>
                        <h4 className="font-semibold pt-4 text-xl">
                          Our Ambition
                        </h4>
                        <p className="text-justify pt-1">
                          Lorem is Ipsum is simply is design iomyi is text Lorem
                          Ipsum is simply is our busi designer is our country.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="group">
                    <div className="">
                      <div className="">
                        <img src={aboutAssets.ambition2} className="" alt="" />
                      </div>
                      <div className="">
                        <h4 className="font-semibold pt-4 text-xl ">
                          Our Ambition
                        </h4>
                        <p className="text-justify pt-1">
                          Lorem is Ipsum is simply is design iomyi is text Lorem
                          Ipsum is simply is our busi designer is our country.
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
      {/* CREATIVE SERVICES start */}
      <div className="container mx-auto">
        <div className="lg:mx-32 md:mx-20 mx-10">
          <div>
            <p className="text-center text-blue-700">CREATIVE SERVICES</p>
            <h3 className="text-4xl font-semibold font-lora-font py-3 text-center">
              Your Partner In <span className="text-blue-700">Digital</span>{" "}
              Success
            </h3>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 md:gap-10 my-6 md:my-10 relative">
            <PartnerCard
              images={aboutAssets.mobileapp}
              title="Mobile App Development"
              paragraph="  Lorem is Ipsum is simply is design iomyi is text Lorem Ipsum is simply is our busi Lorem is Ipsum is"
              buttonText="Touch More"
            />
            <PartnerCard
              images={aboutAssets.content}
              title="Content Marketing"
              paragraph="  Lorem is Ipsum is simply is design iomyi is text Lorem Ipsum is simply is our busi Lorem is Ipsum is"
              buttonText="Touch More"
            />
            <PartnerCard
              images={aboutAssets.ecommerce}
              title="E-commerce Solutions"
              paragraph="  Lorem is Ipsum is simply is design iomyi is text Lorem Ipsum is simply is our busi Lorem is Ipsum is"
              buttonText="Touch More"
            />
            <div>
              <img
                src={aboutAssets.bulb}
                className="absolute top-52 w-14 animate-animate-y -left-24"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* CREATIVE SERVICES end */}

      {/* Faq section start */}
      <div className="container mx-auto bg-bg-faq bg-cover bg-center w-full">
        <div className="lg:mx-32 mx-10 ">
          <div className="grid lg:grid-cols-2 py-24">
            <div className="flex items-center">
              <div className="md:px-14 ">
                <div>
                  <p className="text-blue-700">SOME FAQ'S</p>
                  <div>
                    <h4 className="text-4xl font-semibold py-3 font-lora-font">
                      Creating <span className="text-text-common">Digital</span>{" "}
                      Masterpieces
                    </h4>
                    <p className="py-4">
                      It is a long established fact that a reader will be distr
                      acted bioiiy the end gail designa readable content of a
                      page when looking.
                    </p>
                  </div>
                </div>
                <Faq />
              </div>
            </div>
            <div className="flex md:justify-end my-5 lg:my-0 relative">
              <img src={aboutAssets.digital} className=" md:w-[500px]" alt="" />
              <div>
                <img
                  src={assets.client}
                  className="absolute z-10 animate-animate-y bottom-14 -right-6 md:-right-14"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Faq section end */}

      {/* our partner start */}
      <div className="container mx-auto">
        <div className="lg:mx-32 md:mx-20 mx-10">
          <div>
            <p className="text-center text-blue-700">MEET OUR EXPERTS</p>
            <h3 className="text-4xl font-semibold font-lora-font py-3 text-center">
              Your Partner In <span className="text-blue-700">Digital</span>{" "}
              Success
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3">
            <div className="">
              <TestimonialSlider className="" images={assets.team1} />
            </div>
            <TestimonialSlider images={assets.team2} />
            <TestimonialSlider images={assets.team3} />
          </div>
        </div>
      </div>
      {/* our partner end */}

      {/* counter section start */}
      <Counter />
      {/* counter section end */}

      {/* Form section start */}
      <div className="container mx-auto mb-20 md:mb-14">
        <div className="lg:mx-32  mx-4">
          <div className="md:flex relative">
            <div className="md:-mt-20">
              <img
                src={aboutAssets.contactus}
                className="md:w-[800px]"
                alt=""
              />
              <img
                src={aboutAssets.squaredot}
                className="absolute -bottom-6 animate-animate-y -z-10 -left-6"
                alt=""
              />
            </div>
            <div className="md:-mt-6 relative">
              <Form
                subTitle="GET IN TOUCH"
                heading="Bringing Your  To Life"
                colourful="Vision"
                description="For your car we will do everything advice design in us repairs and maintenance. We are the some preferred."
                className="p-8 bg-white md:w-[550px] rounded-md shadow-md md:-ml-44"
              />
              <img
                src={aboutAssets.dot}
                className="absolute animate-animate-y sm:-bottom-6 md:-bottom-24 md:right-0 -z-10 lg:z-10 right-0   lg:bottom-8"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* Form section end */}
      {/* OUR SIMPLE PROCESS start */}
      <div className="container mx-auto my-4 md:my-24">
        <div className="lg:mx-32 md:mx-20 mx-10">
          <div>
            <p className="text-center text-blue-700">OUR SIMPLE PROCESS</p>
            <h3 className="text-4xl font-semibold font-lora-font py-3 text-center">
              World <span className="text-blue-700">Best Step</span> Our It
              Process
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-3 md:mt-8 lg:grid-cols-4">
            <SimpleCard
              images={aboutAssets.software}
              subTitle="work 1"
              heading="Software Research"
              description="Research ipsum dolor sit consec tetur sed diam in the aliquam tempor"
            />
            <SimpleCard
              images={aboutAssets.program}
              subTitle="work 2"
              heading="Develope Software"
              description="Research ipsum dolor sit consec tetur sed diam in the aliquam tempor"
            />
            <SimpleCard
              images={aboutAssets.work}
              subTitle="work 3"
              heading="Create Programs"
              description="Research ipsum dolor sit consec tetur sed diam in the aliquam tempor"
            />
            <SimpleCard
              images={aboutAssets.develope}
              subTitle="work 4"
              heading="Shop software"
              description="Research ipsum dolor sit consec tetur sed diam in the aliquam tempor"
            />
          </div>
        </div>
      </div>
      {/* OUR SIMPLE PROCESS end */}
    </div>
  );
};

export default About;
