import React from "react";
import { aboutAssets } from "../constent/constent";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <div className="bg-counter-bg py-32 bg-cover px-14">
      <div className="grid md:grid-cols-2 lg:grid-cols-4">
        <div className="flex justify-center group">
          <div>
            <div className="group-hover:scale-125 hover:duration-300 transition-all">
              <img src={aboutAssets.count1} alt="" />
            </div>
            <div>
              <h3 className="md:text-4xl text-2xl py-4 font-semibold text-white">
                <CountUp start={0} end={200} duration={2.75}></CountUp>+
              </h3>
            </div>
            <p className="text-white text-xl">Team Member</p>
          </div>
        </div>
        <div>
          <div className="flex justify-center group">
            <div>
              <div>
                <img
                  src={aboutAssets.count2}
                  className="group-hover:scale-125 hover:duration-300 transition-all"
                  alt=""
                />
              </div>
              <div>
                <h3 className="md:text-4xl text-2xl py-4 font-semibold text-white">
                  <CountUp start={0} end={20} duration={2.75}></CountUp>K+
                </h3>
              </div>
              <p className="text-white text-xl">Team Member</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center group">
            <div>
              <div>
                <img
                  src={aboutAssets.count3}
                  className="group-hover:scale-125 hover:duration-300 transition-all"
                  alt=""
                />
              </div>
              <div>
                <h3 className="md:text-4xl text-2xl py-4 font-semibold text-white">
                  <CountUp start={0} end={200} duration={2.75}></CountUp>+
                </h3>
              </div>
              <p className="text-white text-xl">Team Member</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center group">
            <div>
              <div>
                <img
                  src={aboutAssets.count4}
                  className="group-hover:scale-125 hover:duration-300 transition-all"
                  alt=""
                />
              </div>
              <div>
                {" "}
                <h3 className="md:text-4xl text-2xl py-4 font-semibold text-white">
                  <CountUp start={0} end={230} duration={2.75}></CountUp>+
                </h3>
              </div>
              <p className="text-white text-xl">Team Member</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
