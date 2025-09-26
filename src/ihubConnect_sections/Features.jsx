import React from "react";
import {
  ChartBarIcon,
  BoltIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  UsersIcon, // for Collaboration Tools
  PresentationChartLineIcon, // for Data Insights
  Cog6ToothIcon, // for Custom Integrations
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import { FaLaptopCode, FaPlug, FaShieldAlt } from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <ChartBarIcon className="h-8 w-8 text-white" />,
      title: "Analytics Dashboard",
      description:
        "Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data",
    },
    {
      icon: <BoltIcon className="h-8 w-8 text-white" />,
      title: "Fast Performance",
      description:
        "Experience blazing fast performance optimized for modern business workflows.",
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-white" />,
      title: "Secure & Reliable",
      description:
        "Your business data stays safe with enterprise-level security features.",
    },
    {
      icon: <GlobeAltIcon className="h-8 w-8 text-white" />,
      title: "Global Access",
      description:
        "Work seamlessly from anywhere with cloud-powered global accessibility.",
    },
    {
      icon: <UsersIcon className="h-8 w-8 text-white" />,
      title: "Collaboration Tools",
      description:
        "Enhance teamwork with easy-to-use collaboration and communication tools.",
    },
    {
      icon: <PresentationChartLineIcon className="h-8 w-8 text-white" />,
      title: "Data Insights",
      description:
        "Gain valuable insights with real-time reporting and data visualization.",
    },
    {
      icon: <Cog6ToothIcon className="h-8 w-8 text-white" />,
      title: "Custom Integrations",
      description:
        "Easily integrate with the tools and platforms your business already uses.",
    },
    {
      icon: <LightBulbIcon className="h-8 w-8 text-white" />,
      title: "Smart Solutions",
      description:
        "Leverage AI-driven smart solutions to modernize your operations.",
    },
  ];

  return (
    <section className="py-16 bg-[#fafafa] text-center font-sans">
      {/* Title */}
      <h2 className="text-5xl font-[400] mb-4">
        Why <span className="text-orange-600">Businesses Love</span> Us?
      </h2>
      <p className="text-[25px] text-gray-600 mb-12 max-w-3xl mx-auto">
        Everything you need to modernize your business operations and stay
        competitive in today's digital landscape.
      </p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 text-left border border-transparent hover:border-orange-600 hover:shadow-lg transition-transform transform hover:-translate-y-1"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-600 text-white text-2xl mb-4">
              {feature.icon}
            </div>
            <h3 className="text-[22px] font-semibold mb-2 text-gray-600">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-[14px] leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex justify-center items-center text-center text-white mt-12">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover "
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/videos/Smart-City-Digital-City-Video.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-black/80 "></div>

        <div className="px-6 z-30">
          <h1 className="text-[2.5rem] font-semibold max-w-4xl mx-auto mb-5 -mt-20">
            SMARTER SOFTWARE FOR SMARTER BUSINESSES.
          </h1>
          <p className="text-[1.4rem] font-light max-w-2xl mx-auto mb-5">
            We combine innovation, technology, and seamless integration to help
            you stay connected, organized, and efficient
          </p>

          {/* Services */}
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-12 mt-8">
            <div className="max-w-xs text-center z-30">
              <FaLaptopCode className="text-3xl mx-auto mb-3" />
              <h3 className="text-[1.2rem] font-semibold mb-2">
                Software Installation
              </h3>
              <p className="text-[16px]">
                Elevate your home with the best in audio and video solutions
              </p>
            </div>
            <div className="max-w-xs text-center">
              <FaPlug className="text-3xl mx-auto mb-3" />
              <h3 className="text-[1.2rem] font-semibold mb-2">API</h3>
              <p className="text-[16px]">
                Feel the transformative power of stories in a Dolby Atmos Cinema
                at the comfort of your home
              </p>
            </div>
            <div className="max-w-xs text-center">
              <FaShieldAlt className="text-3xl mx-auto mb-3" />
              <h3 className="text-[1.2rem] font-semibold mb-2">
                Cybersecurity Services
              </h3>
              <p className="text-[16px]">
                A meeting and collaboration solution for every space
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING IMAGE */}
      <section className="relative -mt-28 flex justify-center">
        <img
          src="/images/Screenshot 2025-09-25 144957.png"
          alt="Table"
          className="w-4/5 max-w-5xl rounded-xl shadow-lg"
        />
      </section>

      {/* GET STARTED SECTION */}
      <section className="py-16 text-center text-gray-800 max-w-5xl mx-auto">
        <div className="p-[2px] rounded bg-gradient-to-r from-orange-500 to-transparent inline-block mb-6">
          <button className="rounded bg-white py-1 px-6 ">Features</button>
                    
        </div>
        <h1 className="text-5xl font-[400] text-orange-600 mb-6">
          Get Started
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-12">
          We've made it easy for you to set up, so you can focus on growing your
          business — not figuring out the process.
        </p>

        {/* Steps */}
        <div className="relative flex justify-between items-center max-w-4xl mx-auto px-6">
          {/* Center line */}
          <div className="absolute left-0 right-0 top-11 -translate-y-1/2 h-[3px] bg-gradient-to-r from-[#FE626233] via-[#FE6262] to-[#FE626233]"></div>

          {[
            "Setup your Organization",
            "Invite Team mates/customers",
            "Start Interacting, Get organised",
          ].map((title, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-around z-10"
            >
              <div className="size-20 flex items-center justify-center bg-[#20242A] text-white font-bold rounded-full border-2 border-[#F7C8B3] mb-2">
                {i + 1}
              </div>
              <p className="text-base font-medium text-center">{title}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex justify-around bg-gradient-to-r from-[#E44C09] to-[#451703] text-white rounded-lg max-w-3xl mx-auto mt-12 py-8">
          <div className="text-center">
            <h6 className="text-xl font-bold">500+</h6>
            <p>Companies onboarded</p>
          </div>
          <div className="text-center">
            <h6 className="text-xl font-bold">4.8/5</h6>
            <p>Average Rating</p>
          </div>
          <div className="text-center">
            <h6 className="text-xl font-bold">400+</h6>
            <p>Success Stories</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Features;
