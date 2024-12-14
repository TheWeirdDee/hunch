/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Mobileone from "../assets/Mobileone.png";
import mobiletwo from "../assets/mobiletwo.png";
import mobilethree from "../assets/mobilethree.png";
import mobilefour from "../assets/mobilefour.png";
import star from "../assets/Star.png";
import Ellipse from "../assets/Ellipse.png";
import Polygon from "../assets/Polygon.png";
import startwo from "../assets/startwo.png";

const Covered = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  
      easing: "ease-in-out",  
      delay: 200,  
      once: true,  
    });
  }, []);

  return (
    <div className="bg-green-50 min-h-screen p-8">
      <div className="flex flex-col items-center md:flex-row md:items-start justify-center text-center md:text-left mb-8 gap-8 lg:gap-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 lg:mr-16">
          Hunch got you <br /> covered
          <span className="ml-2 mt-4 inline-block">🌮</span>
        </h1>
        <p className="text-lg lg:ml-20 text-gray-600 max-w-xl px-4 md:px-0">
          A platform that empowers individuals to effortlessly maintain a
          healthier lifestyle by delivering personalized, nutritious meals
          tailored to their specific health needs, goals, and dietary
          restrictions.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mb-2 px-4 md:px-0">
        {[
          { text: "Personalised Meal Planning", icon: star },
          { text: "Custom Meal Options", icon: Ellipse },
          { text: "Dietary Restriction Management", icon: Polygon },
          { text: "Daily Meal Delivery", icon: startwo },
        ].map((feature, index) => (
          <button
            key={index}
            className="bg-white border-gray-300 shadow-sm text-black px-6 py-2 text-sm flex items-center gap-3"
          >
            <img src={feature.icon} alt={feature.text} className="h-5 w-5" />
            {feature.text}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center">
        <div
          className="flex justify-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img
            src={Mobileone}
            alt="First Image"
            className="w-48 sm:w-56 md:w-64 rounded-lg shadow-lg"
          />
        </div>
        <div
          className="flex justify-center lg:mt-28 mt-28"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img
            src={mobiletwo}
            alt="Second Image"
            className="w-48 sm:w-56 md:w-64 rounded-lg shadow-lg"
          />
        </div>
        <div
          className="flex justify-center"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <img
            src={mobilethree}
            alt="Third Image"
            className="w-48 sm:w-56 md:w-64 rounded-lg shadow-lg"
          />
        </div>
        <div
          className="flex justify-center mt-28 lg:mt-28"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <img
            src={mobilefour}
            alt="Fourth Image"
            className="w-48 sm:w-56 md:w-64 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Covered;

 
