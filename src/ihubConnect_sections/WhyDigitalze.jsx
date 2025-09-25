import React from "react";
import { featureCard, featureScroll } from "../utils/Feature";

function WhyDigitalze() {
  return (
    <div className="mx-15 py-30 bg[#f7f6fe]">
      <div className="flex flex-col gap-6 pb-[100px]">
        <p className="text-center text-[13px]">
          Trusted by teams at over 1,000 of the worlds leading organizations
        </p>
        <div className="overflow-hidden w-full max-w-[1400px] mx-auto ">
          <div className="flex animate-scroll">
            {featureScroll.map((item) => (
              <div
                key={item.id}
                className="border h-[40px] w-[300px] bg-gray-900 mx-2 "
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center flex flex-col items-center gap-10">
        <div className="">
          <div className="p-[2px] rounded bg-gradient-to-r from-orange-500 to-transparent inline-block">
            <button className="rounded bg-white py-1 px-6 ">Features</button>
          </div>

          <h2 className="text-5xl font-[400] text-orange-500 py-5">
            Why <span className=" text-orange-400">Digitalize?</span>
          </h2>

          <div>
            <p className="text-[15px]">
              From Organization to Growth — Here’s Why
            </p>
            <p className="text-[15px]">Your Business Must Digitalize.</p>
          </div>
        </div>
        {/* card */}
        <div>
          <div className="flex justify-center gap-10 relative">
            {featureCard.map((item, index) => (
              <div
                key={item.id}
                className={`p-4 border-2 border-gray-300 rounded-xl transform duration-300 transition-transform ${item.rotate} ${item.color} 
        hover:z-[999] hover:scale-105 p-10 h-[212px] -ml-10 first:ml-0 flex flex-col items-start text-left z-0 max-w-[312px]`}
                style={{ backgroundColor: item.backgroundColor }}
              >
                <div className="icon text-3xl mb-2">{item.image}</div>
                <p
                  className={`font-medium ${
                    index === 0 ? "text-white" : "text-black"
                  }`}
                >
                  {item.description}
                </p>
                <p
                  className={`text-sm mt-2 ${
                    index === 0 ? "text-gray-200" : "text-gray-600"
                  }`}
                >
                  {item.subDescription}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyDigitalze;
