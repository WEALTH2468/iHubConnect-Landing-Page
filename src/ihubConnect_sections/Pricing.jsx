import React from "react";

const plans = [
  {
    id: 1,
    title: "Basic Plan",
    price: "$0",
    subtitle: "per editor/month billed monthly",
    features: [
      "30h Fast generations",
      "Unlimited Relaxed generations",
      "General commercial terms",
      "Access to member gallery",
      "Optional credit top ups",
      "3 concurrent fast jobs",
      "12 concurrent fast jobs",
    ],
    buttonText: "Current Plan",
    buttonType: "current",
  },
  {
    id: 2,
    title: "Standard Plan",
    price: "$30",
    subtitle: "per editor/month billed monthly",
    features: [
      "15h Fast generations",
      "Unlimited Relaxed generations",
      "General commercial terms",
      "Access to member gallery",
      "Optional credit top ups",
      "3 concurrent fast jobs",
      "12 concurrent fast jobs",
    ],
    buttonText: "Choose Plan",
    buttonType: "choose",
    popular: true,
  },
  {
    id: 3,
    title: "Pro Plan",
    price: "$60",
    subtitle: "per editor/month billed monthly",
    features: [
      "30h Fast generations",
      "Unlimited Relaxed generations",
      "General commercial terms",
      "Access to member gallery",
      "Optional credit top ups",
      "3 concurrent fast jobs",
      "12 concurrent fast jobs",
    ],
    buttonText: "Choose Plan",
    buttonType: "choose",
  },
  {
    id: 4,
    title: "Unlimited Plan",
    price: "$120",
    subtitle: "per editor/month billed monthly",
    features: [
      "60h Fast generations",
      "Unlimited Relaxed generations",
      "General commercial terms",
      "Access to member gallery",
      "Optional credit top ups",
      "3 concurrent fast jobs",
      "12 concurrent fast jobs",
    ],
    buttonText: "Choose Plan",
    buttonType: "choose",
  },
];

function Pricing() {
  return (
    <section className="py-16 px-6">
      <div className="flex justify-center gap-6 border border-gray-300/50 hover:border-orange-500 p-10 rounded-3xl max-w-7xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative rounded-2xl w-full md:w-72 p-6  transition-transform duration-300 min-h-[420px] 
              hover:scale-105 hover:-translate-y-15 hover:shadow-lg hover:border-5 hover:border-orange-500 hover:bg-gray-50
              ${plan.popular ? "z-10" : ""}`}
          >
            {plan.popular && (
              <div className="absolute top-3 right-4 text-xs text-gray-500 font-bold">
                Most Popular
              </div>
            )}
            <h3
              className={`text-xl font-semibold mb-2 ${
                plan.popular ? "text-orange-500" : "text-gray-800"
              }`}
            >
              {plan.title}
            </h3>
            <p className="text-3xl font-bold text-gray-800 flex flex-row  gap-3 my-4">
              {plan.price}
              <span className="text-sm text-gray-500 font-normal justify-start">
                {plan.subtitle}
              </span>
            </p>
            <ul className="text-left mb-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className={`relative pl-6 text-[15px] text-gray-700 leading-7 before:content-['✔'] before:absolute before:left-0 ${
                    plan.popular
                      ? "before:text-orange-500"
                      : "before:text-gray-400"
                  }`}
                >
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2 mt-7 rounded-lg text-sm transition-colors ${
                plan.buttonType === "choose"
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "text-gray-500 cursor-not-allowed border border-gray-300"
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
