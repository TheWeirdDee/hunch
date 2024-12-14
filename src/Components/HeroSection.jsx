/* eslint-disable no-unused-vars */
import React from 'react';
import Hunchlunch from "../assets/Hunchlunch.png";
import aboutbg from "../assets/aboutbg.jpg"; 

const HeroSection = () => {
  return (
    <div className="relative h-[400px] flex items-center justify-center">
  
    <div
      className="absolute inset-0"
      style={{ backgroundColor: 'rgba(91, 11, 11, 1)' }}
    ></div>
  
  
    <div
      className="absolute inset-0 bg-cover bg-center opacity-30"
      style={{ backgroundImage: `url(${aboutbg})` }}
    ></div>
  
    
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
