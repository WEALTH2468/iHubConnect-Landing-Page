// AboutUs.jsx
// import React from "react";
import { FaPlay } from "react-icons/fa";
import { HiCheck } from "react-icons/hi";

const AboutUs = () => {
  return (
    <section className="max-w-7xl mx-auto text-center text-gray-800 ">
      {/* Button */}
      <div className="p-[2px] rounded bg-gradient-to-r from-orange-600 to-transparent inline-block mb-10">
        <button className="rounded bg-white py-1 px-6 ">Our Vision</button>
      </div>

      {/* Heading */}
      <h1 className="text-5xl font-semibold text-orange-700 mb-10 capitalize">
        Our Vision
      </h1>

      {/* Paragraph */}
      <p className="text-[18px] leading-9 text-gray-600 mb-6 max-w-[1100px] justify-center mx-auto">
        At iHub, our vision is to shape Africa’s digital future by empowering
        businesses with smart, future-driven software solutions. We believe
        every business deserves the tools to stay organized, improve team
        collaboration, manage workflows seamlessly, and build stronger customer
        relationships. By simplifying processes like job follow-ups, invoicing,
        and communication,
      </p>

      {/* Features */}
      <div className="flex justify-center gap-6 mb-8">
        <div className="flex items-center gap-3 font-medium">
          <span className="bg-orange-100 text-gray-900 text-lg w-10 h-10 flex items-center justify-center rounded-full">
            <HiCheck />
          </span>
          <span>Coder</span>
        </div>

        <div className="flex items-center  gap-3 font-medium">
          <span className="bg-orange-100 text-gray-900 text-lg w-10 h-10 flex items-center justify-center rounded-full">
            <HiCheck />
          </span>
          <span>100% Secure</span>
        </div>
      </div>

      {/* YouTube */}
      <div className="flex items-center justify-center gap-4 mt-6 mb-12">
        <span className="bg-orange-400 text-gray-900 text-lg w-10 h-10 flex items-center justify-center rounded-full">
          <FaPlay className="text-white" />
        </span>

        <span className="font-medium">See How It Works</span>
      </div>
    </section>
  );
};

export default AboutUs;
