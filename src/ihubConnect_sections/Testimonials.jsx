import React from "react";

const testimonialsRow1 = [
  {
    id: 1,
    text: `"With this app, we can easily assign tasks, track progress, and manage documents all in one place."`,
    name: "Sam Dawson",
    username: "@dawsontechtips",
    image: "/images/profile.png",
    align: "left",
  },
  {
    id: 2,
    text: `"Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks."`,
    name: "Taylor Kim",
    username: "@taylorkimm",
    image: "/images/profile.png",
    align: "left",
  },
  {
    id: 3,
    text: `"The customization and integration capabilities of this app are top-notch."`,
    name: "Riley Smith",
    username: "@rileysmith",
    image: "/images/profile.png",
    align: "left",
  },
];

const testimonialsRow2 = [
  {
    id: 1,
    text: `"It's user-friendly! Integrates the best product features & gives a robust features approach out of the box."`,
    name: "Casey Harper",
    username: "@caseyharper95",
    image: "/images/profile.png",
    align: "right",
  },
  {
    id: 2,
    text: `"This app has completely transformed how I manage my projects and deadlines."`,
    name: "Morgan Lee",
    username: "@morganleeworks",
    image: "/images/profile.png",
    align: "right",
  },
  {
    id: 3,
    text: `"Customer support is amazing! They respond quickly and always provide solutions."`,
    name: "Jamie Brooks",
    username: "@jamiebrooks",
    image: "/images/profile.png",
    align: "right",
  },
];

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
