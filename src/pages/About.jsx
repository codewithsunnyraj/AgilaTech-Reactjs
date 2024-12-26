import React from "react";
import { Helmet } from "react-helmet";
import HeaderAll from "../components/HeaderAll";
import AboutComponent from "../components/AboutComponent";
import { aboutAssets } from "../constent/constent";
import PartnerCard from "../components/PartnerCard";
const About = () => {
  return (
    <div className="w-full md:-mt-[210px]">
      <Helmet>
        <title>About Us - Your Website</title>
      </Helmet>
      <HeaderAll pages="About us" />
      <div className="py-10 md:py-24  container mx-auto">
        <div className="md:mx-32 mx-10">
          <div className="grid lg:grid-cols-2">
            <div className="relative">
              <div>
                <img
                  src={aboutAssets.aboutus}
                  className="lg:w-[450px] w-full"
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
                <div className="grid grid-cols-2 gap-4 md:gap-10 pt-8 md:pt-14">
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
        <div className="md:mx-32 mx-10">
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
        <div className="container mx-auto">
          <div className="md:mx-32 mx-10">

          </div>
        </div>
      {/* Faq section end */}
    </div>
  );
};

export default About;
