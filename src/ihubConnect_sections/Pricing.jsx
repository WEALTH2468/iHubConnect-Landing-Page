import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { plans } from "../utils/PlansData";

function Pricing() {
  return (
    <section className="py-16 px-4">
      <div className="flex flex-col md:flex-row justify-center gap-6 border border-gray-500/50 hover:border-orange-500 p-6 md:p-10 rounded-3xl max-w-7xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative rounded-2xl w-full md:w-72 p-6 min-h-[420px] 
              transition-transform duration-300 
              hover:scale-105 hover:-translate-y-4 hover:shadow-lg hover:border-3 hover:border-orange-500 hover:bg-[#fffcf9]
              ${plan.popular ? "z-10" : ""} group`} // <-- group added here
          >
            {plan.popular && (
              <div className="absolute top-3 right-4 text-xs text-gray-500 font-bold">
                Most Popular
              </div>
            )}
            <h3
              className={`text-lg md:text-xl font-semibold mb-2 ${
                plan.popular ? "text-orange-500" : "text-gray-800"
              }`}
            >
              {plan.title}
            </h3>
            <p className="text-2xl md:text-3xl font-bold text-gray-800 flex flex-row gap-3 my-4">
              {plan.price}
              <span className="text-xs md:text-sm text-gray-500 font-normal justify-start">
                {plan.subtitle}
              </span>
            </p>
            <ul className="text-left mb-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="relative flex items-center gap-3 text-sm md:text-[15px] text-gray-700 leading-7"
                >
                  {/* Icon with circle */}
                  <span
                    className={`flex items-center justify-center w-4 h-4 rounded-full border transition
                      ${plan.popular ? "border-orange-600" : "border-gray-400"}
                      group-hover:bg-orange-600 group-hover:border-orange-600
                    `}
                  >
                    <CheckIcon
                      className={`w-3 h-3 transition
                        ${plan.popular ? "text-orange-600" : "text-gray-400"}
                        group-hover:text-white
                      `}
                    />
                  </span>

                  {/* Text */}
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={
                plan.buttonType === "choose"
                  ? "https://docs.google.com/forms/d/e/1FAIpQLSfa8OrG01KGseXvhOk5m1qGdUfu3WyQxyVdam4UdALtLtdUmw/viewform?usp=publish-editor"
                  : "#"
              }
              target={plan.buttonType === "choose" ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className={`block w-full py-2 mt-7 rounded-lg text-sm transition-colors text-center ${
                plan.buttonType === "choose"
                  ? "bg-orange-600 text-white hover:bg-orange-600"
                  : "text-gray-500 cursor-not-allowed border border-gray-300"
              }`}
              onClick={(e) => {
                if (plan.buttonType !== "choose") e.preventDefault();
              }}
            >
              {plan.buttonText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
