/* eslint-disable no-unused-vars */
import React from "react";
import FruitOne from "../assets/FruitOne.png";
import FruitTwo from "../assets/FruitTwo.png";
import FruitThree from "../assets/FruitThree.png";
import FruitFour from "../assets/FruitFour.png";
import Salad from "../assets/Salad.png";

const WhyChooseHunch = () => {
  return (
<div className="bg-white py-12 px-4">
  {/* Title Section */}
  <div className="max-w-screen-lg mx-auto">
    <div className="flex flex-col sm:flex-row items-center sm:space-x-4 text-center sm:text-left">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
        Why choose Hunch?
      </h2>
      <div className="w-16 h-16 sm:w-20 sm:h-20 mt-4 sm:mt-0">
        <img
          src={Salad}
          alt="Salad Icon"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
    <p className="mt-4 text-lg sm:text-2xl text-gray-600 text-center">
      What sets us apart from others
    </p>
  </div>

  {/* Feature Boxes */}
  <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-lg mx-auto">
    {[ 
      { title: "First-Mover in Personalised Nutrition in Nigeria", image: FruitOne, alt: "Banana" },
      { title: "AI-Powered Personalization", image: FruitTwo, alt: "Apple" },
      { title: "Seamless User Experience", image: FruitThree, alt: "Pear" },
      { title: "Customizable Meal Plan and Delivery Frequency", image: FruitFour, alt: "Grape" }
    ].map((feature, index) => (
      <div
        key={index}
        className="bg-red-50 p-6 rounded-lg flex flex-col items-center text-center w-full h-full"
      >
        <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-4">
          {feature.title}
        </h3>
        <div className="w-24 h-24 sm:w-32 sm:h-32">
          <img src={feature.image} alt={feature.alt} className="w-full h-full object-contain" />
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default WhyChooseHunch;
