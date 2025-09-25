import React from "react";
import WhyDigitalize from "./ihubConnect_sections/WhyDigitalze";
import { useEffect, useState } from "react";
import Features from "./ihubConnect_sections/Features";

function App() {
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const slides = [
    {
      id: 1,
      image: "images/ihub-slider1.jpg",
      title: "Because Every Business Deserves",
      highlight: "Clarity, Control, and Connection.",
      text: "Stay organized, improve teamwork, and manage customers and invoices in one simple digital space.",
      buttons: ["Register", "Try Demo"],
    },
    {
      id: 2,
      image: "images/ihub-slider2.jpg",
      title: "Boost Your Productivity With",
      highlight: "Smart Tools.",
      text: "Manage workflows, tasks, and invoices with ease using iHubConnect.",
      buttons: ["Get Started", "Learn More"],
    },
    {
      id: 3,
      image: "images/ihub-slider1.jpg",
      title: "Stay Ahead With",
      highlight: "Digital Transformation.",
      text: "Embrace technology and give your business the competitive edge.",
      buttons: ["Join Us", "Watch Video"],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev + 1) % 10); // goes 0 → 9 then loops
    }, 2000); // 1 second interval

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="font-sans bg-[#fafafa]">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/70 text-white shadow-lg">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2 font-bold text-xl">
            <img
              src="images/ihubconnect logo.png"
              alt="iHubConnect"
              className="h-8"
            />
            <span className="text-orange-500">iHUBCONNECT</span>
          </a>
          <ul className="hidden md:flex gap-9">
            <li>
              <a href="#home" className="hover:text-orange-500 text-[20px]">
                Home
              </a>
            </li>
            <li>
              <a
                href="#why-organize-section"
                className="hover:text-orange-500 text-[20px]"
              >
                Why digitalize
              </a>
            </li>
            <li>
              <a
                href="#features-section"
                className="hover:text-orange-500 text-[20px]"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-orange-500 text-[20px]"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a href="#about-us" className="hover:text-orange-500 text-[20px]">
                About iHub
              </a>
            </li>
          </ul>
          <a
            href="#pricing"
            className="hidden md:inline-block bg-orange-600 px-12 py-3 rounded-full text-white font-semibold hover:bg-orange-600"
          >
            Get Organized
          </a>
        </nav>
      </header>

      {/* Hero Slider */}
      <section id="home" className="relative h-screen w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              className="min-w-full h-screen bg-cover bg-center relative flex items-center pl-[10%] pt-5"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/70"></div>
              <div className="relative z-10 max-w-4xl px-6 text-left text-white">
                <h1 className="text-4xl md:text-5xl font-bold leading-snug">
                  {slide.title}{" "}
                  <span className="text-orange-600">{slide.highlight}</span>
                </h1>
                <p className="mt-2 text-lg md:text-xl">{slide.text}</p>
                <div className="mt-6 flex gap-4">
                  <a
                    href="#"
                    className="bg-orange-600 px-15 py-3 rounded-full text-white font-semibold hover:bg-orange-600"
                  >
                    {slide.buttons[0]}
                  </a>
                  <a
                    href="#"
                    className=" px-5 py-3 rounded text-orange-600 font-semibold hover:text-white"
                  >
                    {slide.buttons[1]}
                  </a>
                </div>
                {/* Experience Counter */}
                <div className="mt-8 bg-black/70 p-6 rounded flex items-center">
                  {/* Years number + label */}
                  <div className="flex items-center text-white">
                    <span className="text-8xl font-semibold text-orange-600">
                      {count}
                    </span>
                    <span className="ml-2 text-3xl font-semibold relative">
                      Years
                    </span>
                  </div>

                  {/* Divider line */}
                  <div className="mx-6 h-25 border-l-2 border-orange-600"></div>

                  {/* Description */}
                  <p className="text-[18px] text-gray-200 max-w-lg leading-relaxed">
                    For 10 Years, We've Been Committed To Helping Businesses
                    Stay Organized, Connected, And Ready For The Future — And
                    We're Just Getting Started
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={() =>
            setCurrent((current - 1 + slides.length) % slides.length)
          }
          className="absolute top-1/2 left-4 -translate-y-1/2 text-3xl text-white hover:text-orange-500"
        >
          ❮
        </button>
        <button
          onClick={() => setCurrent((current + 1) % slides.length)}
          className="absolute top-1/2 right-4 -translate-y-1/2 text-3xl text-white hover:text-orange-500"
        >
          ❯
        </button>

        {/* Slide Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
          {/* Fraction text */}
          <div className="text-white font-semibold text-lg mb-2">
            {current + 1}/{slides.length}
          </div>

          {/* Progress lines */}
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <div
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-[3px] w-12 rounded-full cursor-pointer transition-all duration-300 ${
                  current === idx ? "bg-white" : "bg-gray-500"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <Features />

      {/* Footer */}
      <footer className="bg-neutral-900 text-gray-400 px-10 py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <img
              src="images/ihubconnect logo.png"
              alt="Logo"
              className="h-12 mb-4"
            />
            <p className="text-sm">
              iHubConnect helps businesses stay organized and connected with
              modern digital tools.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="p-2 bg-neutral-800 rounded-full hover:bg-orange-600"
              >
                Fb
              </a>
              <a
                href="#"
                className="p-2 bg-neutral-800 rounded-full hover:bg-orange-600"
              >
                Tw
              </a>
              <a
                href="#"
                className="p-2 bg-neutral-800 rounded-full hover:bg-orange-600"
              >
                In
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-white font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-orange-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#features-section" className="hover:text-orange-500">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-orange-500">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#about-us" className="hover:text-orange-500">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Info</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-orange-500">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-l bg-neutral-800 text-white outline-none"
              />
              <button
                type="submit"
                className="bg-orange-600 px-4 py-2 rounded-r text-white hover:bg-orange-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <hr className="border-gray-700 my-8" />
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} iHubConnect. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
