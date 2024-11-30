/* eslint-disable no-unused-vars */
import React from "react";
import banner from "../../assets/bannerr.png";  
import HunchIs from "../../Components/HunchIs";
import Covered from "../../Components/Covered";
import HowItWorks from "../../Components/HowItWorks";
import WhyChooseHunch from "../../Components/WhyChooseHunch";

const Home = () => {
  return (
    <div className="relative bg-custom-300 text-white">
       
      <div className="container mx-auto px-6 py-16">
         
        <div className="flex flex-col md:flex-row items-center">
           
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Delivering Tailored, <br />
              Healthy Meals to <br />
              Your Door Daily.
            </h1>
            <ul className="mt-6 space-y-4 text-base md:text-lg">
              <li>• Personalized meal plans for individual needs.</li>
              <li>• Daily, ready-to-eat meals for busy lifestyles.</li>
              <li>• Dietary restrictions and allergies, managed with ease.</li>
              <li>
                • Simplified meal planning and delivery for balanced nutrition.
              </li>
            </ul>
            <button
              className="mt-6 px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow 
              hover:bg-red-600 transition duration-300 ease-in-out"
            >
              Join the Waitlist
            </button>
          </div>

           
          <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
            <div className="relative">
              <img
                src={banner}
                alt="Healthy meal delivery banner"
                className="rounded-lg shadow-lg border-none w-full max-h-[60vh] md:max-h-[90vh] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

     
      <HunchIs />
      <Covered />
      <HowItWorks />
      <WhyChooseHunch />
    </div>
  );
};

export default Home;
