// components/PricingPage/PricingCards.tsx
import { useState } from "react";

export default function PricingCards({ currency }: { currency: string }) {
  const [pricing, setPricing] = useState({
    Basic: 600000,
    Standard: 850000,
    Pro: 1700000,
  });

  const convertPrices = (basePrice: number) => {
    // Replace this placeholder logic with actual currency conversion logic
    return basePrice; // Placeholder: No conversion applied
  };

  const plans = [
    {
      name: "Basic",
      price: convertPrices(pricing.Basic),
      features: [
        "Single-page website",
        "Mobile-friendly design",
        "Basic SEO setup",
        "1 round of revisions",
      ],
    },
    {
      name: "Standard",
      price: convertPrices(pricing.Standard),
      features: [
        "Up to 5 pages",
        "Mobile-friendly design",
        "Social media integration",
        "Basic analytics setup",
      ],
    },
    {
      name: "Pro",
      price: convertPrices(pricing.Pro),
      features: [
        "Up to 10 pages",
        "E-commerce functionality",
        "Advanced SEO",
        "Unlimited revisions",
      ],
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-1 p-6">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className="bg-white shadow-md rounded-lg p-6 border hover:scale-105 transition-transform"
        >
          <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
          <p className="text-xl font-semibold text-gray-600 mb-4">
            {currency} {plan.price.toLocaleString()}
          </p>
          <ul className="list-disc ml-5 mb-4">
            {plan.features.map((feature) => (
              <li key={feature} className="text-gray-700">
                {feature}
              </li>
            ))}
          </ul>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-500">
            Select Plan
          </button>
        </div>
      ))}
    </div>
  );
}
