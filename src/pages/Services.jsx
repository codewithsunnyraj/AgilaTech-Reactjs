import React from "react";
import { Helmet } from "react-helmet";
import HeaderAll from "../components/HeaderAll";
import PartnerCard from "../components/PartnerCard";
import { aboutAssets } from "../constent/constent";
import PricingCard from "../components/PricingCard";

const Services = () => {
  return (
    <div className="w-full md:-mt-[210px]">
      <Helmet>
        <title>Services - Your Website</title>
      </Helmet>
      <HeaderAll pages="Services" />
      {/* CREATIVE SERVICES start */}
      <div className="py-10 md:py-12 container mx-auto ">
        <div className=" lg:mx-32 md:mx-16 mx-10">
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
            <PartnerCard
              images={aboutAssets.mobileapp}
              title="Mobile App Development"
              paragraph="  Lorem is Ipsum is simply is design iomyi is text Lorem Ipsum is simply is our busi Lorem is Ipsum is"
              buttonText="Touch More"
            />
            <div>
              <img
                src={aboutAssets.bulb}
                className="absolute  w-14 bottom-40 animate-animate-y -left-24"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* CREATIVE SERVICES end */}
      {/* pricing card start */}
      <div className="container mx-auto ">
        <div className="md:mx-32 mx-10">
          <div>
            <p className="text-center text-blue-700">CREATIVE SERVICES</p>
            <h3 className="text-4xl font-semibold font-lora-font py-3 text-center">
              Your Partner In <span className="text-blue-700">Digital</span>{" "}
              Success
            </h3>
          </div>
          <div className="grid  gap-8 lg:grid-cols-3 my-3 md:my-8">
              <div>
                <PricingCard title="Started" price="$19" />
              </div>
              <div>
                <PricingCard title="Started"  price="$19" />
              </div>
              <div>
                <PricingCard title="Started" price="$19" />
              </div>
             
          </div>
        </div>
      </div>
      {/* pricing card end */}
    </div>
  );
};

export default Services;
