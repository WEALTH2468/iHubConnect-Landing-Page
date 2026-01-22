import React from "react";
import { featureCard, featureScroll } from "../utils/FeatureData";

function WhyDigitalze() {
  return (
    <div className="px-6 md:px-16 pt-[70px] bg-[#f7f6fe]">
      <div className="flex flex-col gap-6 pb-[70px]">
        <p className="text-center text-sm md:text-[25px] text-gray-600">
          Trusted by teams at over 1,000 of the worlds leading organizations
        </p>
        <div className="overflow-hidden w-full max-w-[1400px] mx-auto ">
          <div className="flex animate-scroll">
            {featureScroll.map((item) => (
              <div
                key={item.id}
                className="border h-[40px] w-[200px] md:w-[300px] bg-gray-900 mx-2 "
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center flex flex-col items-center gap-10">
        <div className="">
          <div className="p-[2px] rounded bg-gradient-to-r from-orange-600 to-transparent inline-block">
            <button className="rounded bg-white py-1 px-6 ">Features</button>
          </div>

          <h2 className="text-2xl md:text-5xl font-[400] text-orange-600 py-5">
            Why <span className=" text-orange-500">Digitalize?</span>
          </h2>

          <div>
            <p className="text-sm md:text-[25px] text-gray-600">
              From Organization to Growth — Here’s Why
            </p>
            <p className="text-sm md:text-[25px] text-gray-600">
              Your Business Must Digitalize.
            </p>
          </div>
        </div>
        {/* card */}
        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 relative py-[50px]">
            {featureCard.map((item, index) => {
              const Icon = item.icon; // 👈 assign the icon component
              return (
                <div
                  key={item.id}
                  className={`p-4 border-2 border-gray-300 rounded-xl transform duration-300 transition-transform ${item.rotate} ${item.color} 
        hover:z-[999] hover:scale-105 h-auto md:h-[212px] w-full max-w-[300px] md:-ml-10 flex flex-col items-start text-left z-0`}
                  style={{ backgroundColor: item.backgroundColor }}
                >
                  {/* ✅ Use as component */}
                  <Icon className="h-8 w-8 mb-2" />

                  <p
                    className={`text-[14px] ${
                      index === 0 ? "text-white" : "text-black"
                    }`}
                  >
                    {item.description}
                  </p>
                  <p
                    className={`text-xs md:text-sm mt-2 ${
                      index === 0 ? "text-gray-200" : "text-gray-600"
                    }`}
                  >
                    {item.subDescription}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyDigitalze;
