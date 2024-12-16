import React from "react";
import { FaLocationDot, FaRegCalendarDays } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdMail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-bg-footer p-8 px-4 lg:px-40 md:pt-16 mt-0 md:mt-8 ">
      <div className="container mx-auto">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-white">
            <h4 className="mb-3 md:mb-12 text-xl md:text-xl font-bold font-inter">
              Contact Us
            </h4>
            <div className="flex my-3  gap-5 md:text-base font-semibold cursor-pointer hover:text-text-website hover:duration-200 ">
              <FaLocationDot className="text-text-website" />
              <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
            </div>
            <div className="flex items-center my-5 cursor-pointer hover:text-text-website hover:duration-200  gap-5 md:text-base font-semibold">
              <IoMdCall className="text-text-website" />
              <p> (+888) 123 456 765</p>
            </div>
            <div className="flex my-5 items-center cursor-pointer hover:text-text-website hover:duration-200 gap-5 md:text-base font-semibold">
              <MdMail className="text-text-website" />
              <p>infoname@mail.com</p>
            </div>
          </div>
          <div className="text-white">
            <h4 className="mb-3 md:mb-8 text-xl md:text-xl font-bold font-inter">
              Our Service
            </h4>
            <div className="my-3 flex before:content-['>']   cursor-pointer before:text-white before:font-bold before:mr-2 md:text-base text-slate-400">
              <p
                onClick={() => navigate("/about")}
                className="  text-base hover:text-text-website transition-all hover:duration-200 hover:tracking-wide"
              >
                Ui Design
              </p>
            </div>
            <div className="my-3 flex before:content-['>']   md:text-base text-slate-400 cursor-pointer before:text-white before:font-bold before:mr-2 ">
              <p
                onClick={() => navigate("/about")}
                className=" hover:text-text-website transition-all hover:duration-200 hover:tracking-wide"
              >
                Web design
              </p>
            </div>
            <div className="my-3 flex before:content-['>']   cursor-pointer before:text-white before:font-bold before:mr-2  md:text-base text-slate-400">
              <p
                onClick={() => navigate("/about")}
                className=" hover:text-text-website transition-all hover:duration-200 hover:tracking-wide"
              >
                Digital marketing
              </p>
            </div>
            <div className="my-3 flex before:content-['>']  cursor-pointer before:text-white before:font-bold before:mr-2 md:text-base text-slate-400">
              <p
                onClick={() => navigate("/about")}
                className=" hover:text-text-website transition-all hover:duration-200 hover:tracking-wide"
              >
                Video Editing
              </p>
            </div>
            <div className="my-3 flex before:content-['>']   cursor-pointer before:text-white before:font-bold before:mr-2 md:text-base text-slate-400">
              <p
                onClick={() => navigate("/about")}
                className=" hover:text-text-website transition-all hover:duration-200 hover:tracking-wide"
              >
                Pc Repairs
              </p>
            </div>
            <div className="my-3 flex before:content-['>']   cursor-pointer before:text-white before:font-bold before:mr-2 md:text-base text-slate-400">
              <p
                onClick={() => navigate("/about")}
                className=" hover:text-text-website transition-all hover:duration-200 hover:tracking-wide"
              >
                Web Development
              </p>
            </div>
          </div>

          <div className="text-white">
            <h4 className="mb-3 md:mb-8 text-xl md:text-xl font-bold font-inter">
              Pay links
            </h4>
            <div className="my-3 flex before:content-['>']   cursor-pointer before:text-white before:font-bold before:mr-2 md:text-base text-slate-400">
              <p
                onClick={() => navigate("/about")}
                className=" hover:text-text-website transition-all hover:duration-200 hover:tracking-wide "
              >
                Credit industrys
              </p>
            </div>
            <div className="my-3 flex before:content-['>']   cursor-pointer before:text-white before:font-bold before:mr-2 md:text-base text-slate-400">
              <p
                onClick={() => navigate("/about")}
                className=" hover:text-text-website transition-all hover:duration-200 hover:tracking-wide"
              >
                Reasearch sector
              </p>
            </div>
            <div className="my-3 flex before:content-['>']   cursor-pointer before:text-white before:font-bold before:mr-2 md:text-base text-slate-400">
              <p
                onClick={() => navigate("/about")}
                className=" hover:text-text-website transition-all hover:duration-200 hover:tracking-wide"
              >
                Finance Sector
              </p>
            </div>
            <div className="my-3 flex before:content-['>']   cursor-pointer before:text-white before:font-bold before:mr-2 md:text-base text-slate-400">
              <p
                onClick={() => navigate("/about")}
                className=" hover:text-text-website transition-all hover:duration-200 hover:tracking-wide"
              >
                Credit industrys
              </p>
            </div>
            <div className="my-3 flex before:content-['>']   cursor-pointer before:text-white before:font-bold before:mr-2 md:text-base text-slate-400">
              <p
                onClick={() => navigate("/about")}
                className=" hover:text-text-website transition-all hover:duration-200 hover:tracking-wide"
              >
                Reasearch sector
              </p>
            </div>
            <div className="my-3 flex before:content-['>']   cursor-pointer before:text-white before:font-bold before:mr-2 md:text-base text-slate-400">
              <p
                onClick={() => navigate("/about")}
                className=" hover:text-text-website transition-all hover:duration-200 hover:tracking-wide"
              >
                Finance Sector
              </p>
            </div>
          </div>

          <div className="text-white">
            <h4 className="mb-3 md:mb-12 text-xl md:text-xl font-bold font-inter">
              Recent Blog
            </h4>
            <div className="flex my-3  items-center gap-5 text-xl font-semibold">
              <FaRegCalendarDays className="text-text-website " />
              <p className="text-sm">january 11, 2023</p>
            </div>
            <h3 className="md:text-base text-white hover:text-text-website hover:duration-200 cursor-pointer">
              Social Media For Promote Business.
            </h3>
            <div className="flex my-5  items-center gap-5 text-xl font-semibold">
              <FaRegCalendarDays className="text-text-website " />
              <p className="text-sm">january 11, 2023</p>
            </div>
            <h3 className="md:text-base text-white hover:text-text-website hover:duration-200 cursor-pointer">
              Marketing For Base marketing watch
            </h3>
          </div>
        </div>

        <div className="md:flex justify-between text-white border-t mt-4 py-2 md:py-8">
          <div>&copy; AglieTech 2024 | All Rights Reserved</div>
          <div className="md:flex gap-5">
            <p className="md:text-base hover:text-text-website hover:duration-200 transition-all hover:underline cursor-pointer">Terms & Condition</p>
            <p className="md:text-base hover:text-text-website hover:duration-200 transition-all hover:underline cursor-pointer">Privacy Policy</p>
            <p className="md:text-base hover:text-text-website hover:duration-200 transition-all hover:underline cursor-pointer">Contact Us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
