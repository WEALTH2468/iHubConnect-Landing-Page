import React from "react";
import { testimonialsRow1, testimonialsRow2 } from "../utils/TestimonialsData";

export default function Testimonials() {
  return (
    <section className="py-[70px] px-6 overflow-hidden relative">
      {/* Section Heading */}
      <h2 className="text-center text-5xl font-semibold text-orange-600 mb-4">
        Testimonial
      </h2>
      <p className="text-center max-w-3xl mx-auto text-[25px] text-gray-600 mb-12">
        Everything you need to modernize your business operations and stay
        competitive in today's digital landscape tech.
      </p>

      <div className=" ">
        {/* First Row: Right → Left */}
        <div className=" w-[1200px] flex justify-center overflow-hidden mx-auto py-2">
          <div className="animate-scroll-left gap-10 flex w-max">
            {testimonialsRow1.map((t) => (
              <div
                key={t.id}
                className="min-w-[320px] max-w-[350px] bg-white border border-gray-200 rounded-lg shadow-lg p-6"
              >
                <p className="text-gray-600 italic mb-6">{t.text}</p>
                <div
                  className={`flex items-center gap-4 ${
                    t.align === "right"
                      ? "justify-end text-right"
                      : "justify-start"
                  }`}
                >
                  {t.align === "left" && (
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  )}
                  <div className="flex flex-col leading-tight">
                    <p className="font-medium text-gray-800">{t.name}</p>
                    <span className="text-sm text-gray-500">{t.username}</span>
                  </div>
                  {t.align === "right" && (
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row: Left → Right */}
        <div className=" w-[1200px] flex justify-center overflow-hidden mt-10 mx-auto py-2">
          <div className="animate-scroll-right gap-10 flex w-max">
            {testimonialsRow2.map((t) => (
              <div
                key={t.id}
                className="min-w-[320px] max-w-[320px] bg-[#fffcf9] border border-gray-200 rounded-lg shadow-lg p-6"
              >
                <p className="text-gray-600 italic mb-6">{t.text}</p>
                <div
                  className={`flex items-center gap-4 ${
                    t.align === "right"
                      ? "justify-end text-right"
                      : "justify-start"
                  }`}
                >
                  {t.align === "left" && (
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  )}
                  <div className="flex flex-col leading-tight">
                    <p className="font-medium text-gray-800">{t.name}</p>
                    <span className="text-sm text-gray-500">{t.username}</span>
                  </div>
                  {t.align === "right" && (
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
