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
      title: "Interactive Dashboard",
      description:
        "Get a real-time overview of tasks, sprints, and team performance with our comprehensive dashboard.",
    },
    {
      icon: <BoltIcon className="h-8 w-8 text-white" />,
      title: "Work Progress Tracking",
      description:
        "Monitor sprint goals, active tasks, and completion status instantly to stay on schedule.",
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-white" />,
      title: "Secure Archives",
      description:
        "Store contracts, records, and corporate assets in a secure, folder-based Document Library.",
    },
    {
      icon: <GlobeAltIcon className="h-8 w-8 text-white" />,
      title: "Customer CRM",
      description:
        "Manage customer databases, invoices, and relationships in one unified platform.",
    },
    {
      icon: <UsersIcon className="h-8 w-8 text-white" />,
      title: "iTeams Management",
      description:
        "Define roles, assign team leads, and structure your workforce for maximum efficiency.",
    },
    {
      icon: <PresentationChartLineIcon className="h-8 w-8 text-white" />,
      title: "Performance Reports",
      description:
        "Generate detailed reports on team productivity, project timelines, and business growth.",
    },
    {
      icon: <Cog6ToothIcon className="h-8 w-8 text-white" />,
      title: "Role-Based Access",
      description:
        "Control data visibility and security with customizable permission levels for every user.",
    },
    {
      icon: <LightBulbIcon className="h-8 w-8 text-white" />,
      title: "Smart Notifications",
      description:
        "Stay updated with automated alerts for deadlines, task assignments, and system updates.",
    },
  ];

  return (
    <section className="py-16 text-center font-sans">
      {/* Title */}
      <h2 className="text-2xl md:text-5xl font-[400] mb-4">
        Why <span className="text-orange-600">Businesses Love</span> Us?
      </h2>
      <p className="text-sm md:text-[25px] text-gray-600 mb-12 max-w-3xl mx-auto">
        Everything you need to modernize your business operations and stay
        competitive in today's digital landscape.
      </p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-[#fffcf9] rounded-xl shadow-md p-6 text-left border border-transparent hover:border-orange-600 hover:shadow-lg transition-transform transform hover:-translate-y-1"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-600 text-white text-2xl mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg md:text-[22px] font-semibold mb-2 text-gray-600">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-xs md:text-[14px] leading-relaxed">
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
          <source src="/videos/ihub-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-[#270f0499] "></div>

        <div className="px-6 z-30">
          <h1 className="text-xl md:text-[2.5rem] font-semibold max-w-4xl mx-auto mb-5 -mt-20">
            EMPOWER YOUR WORKFORCE WITH INTELLIGENT TOOLS.
          </h1>
          <p className="text-sm md:text-[1.4rem] font-light max-w-2xl mx-auto mb-5">
            Streamline operations, enhance team collaboration, and drive growth
            with a platform built for modern business needs.
          </p>

          {/* Services */}
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-12 mt-8">
            <div className="max-w-xs text-center z-30">
              <FaLaptopCode className="text-3xl mx-auto mb-3" />
              <h3 className="text-sm md:text-[1.2rem] font-semibold mb-2">
                Cloud-Based Setup
              </h3>
              <p className="text-xs md:text-[16px]">
                Get started instantly with no complex installation. Access your
                workspace from any browser.
              </p>
            </div>
            <div className="max-w-xs text-center">
              <FaPlug className="text-3xl mx-auto mb-3" />
              <h3 className="text-sm md:text-[1.2rem] font-semibold mb-2">
                Seamless Integration
              </h3>
              <p className="text-xs md:text-[16px]">
                Connect your existing tools and workflows effortlessly with our
                flexible API support.
              </p>
            </div>
            <div className="max-w-xs text-center">
              <FaShieldAlt className="text-3xl mx-auto mb-3" />
              <h3 className="text-sm md:text-[1.2rem] font-semibold mb-2">
                Secure Collaboration
              </h3>
              <p className="text-xs md:text-[16px]">
                Work together safely with enterprise-grade security and
                role-based access controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING IMAGE */}
      <section className="relative -mt-28 flex justify-center">
        <div className="relative w-4/5 max-w-5xl">
          {/* Image */}
          <img
            src="/images/Screenshot 2025-09-25 144957.png"
            alt="Table"
            className="w-full rounded-xl shadow-lg"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-orange-200/20 rounded-xl"></div>
        </div>
      </section>

      {/* GET STARTED SECTION */}
      <section className="py-16 text-center text-gray-800 max-w-5xl mx-auto px-4">
        <div className="p-[2px] rounded bg-gradient-to-r from-orange-500 to-transparent inline-block mb-6">
          <button className="rounded bg-white py-1 px-6 ">Features</button>
                    
        </div>
        <h1 className="text-3xl md:text-5xl font-[400] text-orange-600 mb-6">
          Get Started
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-[22px] text-gray-600 mb-12">
          We've made it easy for you to set up, so you can focus on growing your
          business — not figuring out the process.
        </p>

        {/* Steps */}
        <div className="relative flex flex-col md:flex-row justify-between items-center max-w-[100%] mx-auto px-6 gap-8 md:gap-0">
          {/* Center line */}
          <div className="hidden md:block absolute left-0 right-0 top-11 -translate-y-1/2 h-[3px] bg-gradient-to-r from-[#FE626233] via-[#FE6262] to-[#FE626233] max-w-[800px] justify-center mx-auto"></div>

          {[
            "Setup your Organization",
            "Invite Team mates/customers",
            "Start Interacting, Get organised",
          ].map((title, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-around z-10"
            >
              <div className="size-20 flex items-center justify-center bg-[#20242A] text-white font-bold rounded-full border-2 border-[#F7C8B3] mb-2 gap-[40px]">
                {i + 1}
              </div>
              <p className="text-sm md:text-base font-medium text-center max-w-[150px]">
                {title}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex flex-col md:flex-row justify-around bg-gradient-to-r from-[#E44C09] to-[#451703] text-white rounded-lg max-w-[700px] mx-auto mt-12 py-8 gap-6 md:gap-0">
          <div className="text-center">
            <h6 className="text-lg md:text-xl font-bold">50+</h6>
            <p>Companies onboarded</p>
          </div>
          <div className="text-center">
            <h6 className="text-lg md:text-xl font-bold">4.8/5</h6>
            <p>Average Rating</p>
          </div>
          <div className="text-center">
            <h6 className="text-lg md:text-xl font-bold">100+</h6>
            <p>Success Stories</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Features;
