import React from "react";
import { Helmet } from "react-helmet";
import CommingSoon from "../components/CommingSoon";
import HeaderAll from "../components/HeaderAll";
import { contactAsset } from "../constent/constent";

const ContactUs = () => {
  return (
    <div className="w-full md:-mt-[210px]">
      <Helmet>
        <title>Contact Us - Your Website</title>
      </Helmet>
      <HeaderAll pages="Contact Us" />
      <div className="container py-10 md:py-12 mx-auto">
        <div className="md:mx-32 mx-4">
          <div className="grid lg:grid-cols-2">
            <div className="order-2 sm:order-2 lg:order-none">
              <img src={contactAsset.contact} alt="" />
            </div>
            <div className="">
              <div className="">
                <div className="md:my-6">
                  <div>
                    <h3 className="text-2xl font-semibold font-lora-font ">
                      Send Message
                    </h3>
                    <p className="py-4 text-slate-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Amet, vero. sit amet consectetur adipisicing elit. Amet,
                      vero. sit amet consectetur adipisicing elit. Amet, vero.
                    </p>
                  </div>
                  <div className="w-full md:flex gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="border-[1px] w-full md:w-1/2 focus:outline-none p-3 rounded-md"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="border-[1px] w-full my-4 md:my-0 md:w-1/2 focus:outline-none p-3 rounded-md"
                    />
                  </div>
                  <div className="w-full md:my-4 md:flex gap-4">
                    <input
                      type="text"
                      placeholder="Your Number"
                      maxLength={10}
                      required
                      className="border-[1px] w-full md:w-1/2 focus:outline-none p-3 rounded-md"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Your Subject"
                      className="border-[1px] w-full my-4 md:my-0 md:w-1/2 focus:outline-none p-3 rounded-md"
                    />
                  </div>
                  <div className="">
                    <textarea
                      name=""
                      placeholder="Enter Message"
                      className="border-[1px] w-full  focus:outline-none p-3 rounded-md"
                      id=""
                    ></textarea>
                  </div>
                  <div>
                    <button className="py-2 bg-black text-white w-full my-4 rounded-md">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
