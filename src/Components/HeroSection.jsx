/* eslint-disable no-unused-vars */
import React from 'react';
import Hunchlunch from "../assets/Hunchlunch.png";

const HeroSection = () => {
  return (
    <div className="relative bg-red-900 h-[400px] flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(/path/to/your/spicy-background.jpg)' }}></div>
      <div className="relative text-center">
        <img
          src={Hunchlunch}
          alt="Meal Box"
          className="mx-auto w-64"
        />
        <h1 className="text-white text-3xl font-bold mt-5">
          Delivering Tailored, Healthy Meals to <br /> Your Door Daily.
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;