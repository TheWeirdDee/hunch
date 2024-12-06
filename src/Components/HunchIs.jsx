/* eslint-disable no-unused-vars */
import React from "react";
import Hunchlunch from "../assets/Hunchlunch.png";  
import Union from "../assets/Union.png";           

const HunchIs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
       
      <div className="flex items-center justify-center space-x-4 mb-4">
        <h1 className="text-3xl font-bold text-gray-800">What Hunch Is</h1>
        <div>
          <img
            src={Hunchlunch}
            alt="Hunch Logo"
            className="h-24 w-28"  
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row shadow-sm rounded-lg overflow-hidden max-w-6xl">
        <div className="relative lg:w-1/2 p-6 flex items-center">
          <div className="grid grid-cols-1">
            <img
              src={Union}
              alt="Food Item"
              className="w-full h-auto rounded-lg"  
            />
          </div>
        </div>

        <div className="lg:w-1/2 p-6 flex items-center">
          <div>
            <p className="text-gray-700 leading-relaxed">
              Personalized meal planning is crucial for maintaining a healthy lifestyle, yet many struggle with finding solutions that meet their unique health needs and dietary restrictions. Traditional meal planning can be time-consuming and complex, leaving a gap for a more streamlined solution.
            </p> 
            <p className="mt-6 text-gray-700 leading-relaxed">
              Hunch addresses this need by offering a platform that delivers tailored, nutritious meals directly to user doors, using advanced AI to ensure meals align with individual health goals and preferences. As demand for customized health solutions grows, Hunch simplifies healthy eating, making it accessible and manageable for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HunchIs;
