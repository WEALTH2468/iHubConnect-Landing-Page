import React from "react";
import WhyDigitalize from "./ihubConnect_sections/WhyDigitalze";
import { useEffect, useState } from "react";
import Features from "./ihubConnect_sections/Features";
import Testimonials from "./ihubConnect_sections/Testimonials";
import Pricing from "./ihubConnect_sections/Pricing";
import AboutUs from "./ihubConnect_sections/AboutUs";
import { Link } from "react-scroll";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { slides } from "./utils/SlidersData";

function App() {
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

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
    <div className="font-sans">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/70 text-white shadow-lg">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2 font-bold text-xl">
            <img
              src="images/ihubconnect logo.png"
              alt="iHubConnect"
              className="h-8"
            />
            <span className="text-orange-600">iHUBCONNECT</span>
          </a>

          <ul className="hidden md:flex gap-9">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={700}
                spy={true}
                activeClass="text-orange-600"
                className="cursor-pointer hover:text-orange-500 text-[20px]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="whyDigitalize"
                smooth={true}
                duration={700}
                spy={true}
                activeClass="text-orange-600"
                className="cursor-pointer hover:text-orange-500 text-[20px]"
              >
                Why digitalize
              </Link>
            </li>
            <li>
              <Link
                to="features"
                smooth={true}
                duration={700}
                spy={true}
                activeClass="text-orange-600"
                className="cursor-pointer hover:text-orange-500 text-[20px]"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="testimonials"
                smooth={true}
                duration={700}
                spy={true}
                activeClass="text-orange-600"
                className="cursor-pointer hover:text-orange-500 text-[20px]"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="aboutUs"
                smooth={true}
                duration={700}
                spy={true}
                activeClass="text-orange-600"
                className="cursor-pointer hover:text-orange-500 text-[20px]"
              >
                About iHub
              </Link>
            </li>
          </ul>

          <Link
            to="pricing"
            smooth={true}
            duration={700}
            spy={true}
            activeClass="bg-orange-700"
            className="hidden md:inline-block bg-orange-600 px-12 py-3 rounded-full text-white font-semibold hover:bg-orange-700 cursor-pointer"
          >
            Get Organized
          </Link>
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
              <div className="absolute inset-0 bg-[#270f0499]"></div>
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

      <section
        id="whyDigitalize"
        className="bg-gradient-to-r from-white via-[#fff7f3] to-[#fde6d9]"
      >
        <WhyDigitalize />
      </section>

      <section
        id="features"
        className="bg-gradient-to-r from-white via-[#fff7f3] to-[#fde6d9]"
      >
        <Features />
      </section>

      <section
        id="testimonials"
        className="bg-gradient-to-r from-white via-[#fff7f3] to-[#fde6d9]"
      >
        <Testimonials />
      </section>

      <section
        id="aboutUs"
        className="bg-gradient-to-r from-white via-[#fff7f3] to-[#fde6d9]"
      >
        <AboutUs />
      </section>

      <section
        id="pricing"
        className="bg-gradient-to-r from-white via-[#fff7f3] to-[#fde6d9]"
      >
        <Pricing />
      </section>

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
            <p className="text-[16px]">
              iHubConnect helps businesses stay organized and connected with
              modern digital tools.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-orange-500 text-xl"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-orange-500 text-xl"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-orange-500 text-xl"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-orange-500 text-xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-orange-500 text-xl"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-white font-bold mb-4">Menu</h3>
            <ul className="space-y-2 text-[16px]">
              <li>
                <a href="#home" className="hover:text-orange-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-orange-500">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-orange-500">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#aboutUs" className="hover:text-orange-500">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Info</h3>
            <ul className="space-y-2 text-[16px]">
              <li>
                <a href="#" className="hover:text-orange-600">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-4">Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-l bg-neutral-800 text-white outline-none"
              />
              <button
                type="submit"
                className="bg-orange-600 px-4 py-2 rounded-r text-white hover:bg-orange-600"
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
