/* eslint-disable no-unused-vars */
import React from "react";
import cuate from "../assets/cuate.png";
import pana from "../assets/pana.png";
import amico from "../assets/amico.png";
import rafiki from "../assets/rafiki.png";
import amicocopy from "../assets/amicocopy.png";
import panacopy from "../assets/panacopy.png";
import sandwich from "../assets/sandwich.png";  

const HowItWorks = () => {
  const steps = [
    {
      title: "Sign Up",
      description: "Customers create a free account on the app.",
      icon: cuate,
    },
    {
      title: "Personal Information",
      description: "They detail health conditions, goals, and allergies.",
      icon: pana,
    },
    {
      title: "Meal Plan Selection",
      description: "Customers can choose an AI-generated plan or create their own.",
      icon: amico,
    },
    {
      title: "Nutritionist Support",
      description: "They are assigned a nutritionist for 24/7 chat support.",
      icon: rafiki,
    },
    {
      title: "Subscription Plan",
      description: "Customers select a subscription plan.",
      icon: amicocopy,
    },
    {
      title: "Delivery",
      description: "Meals are delivered at the designated times.",
      icon: panacopy,
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto text-center px-4">
         <div className="flex items-center justify-center gap-8">
         <h2 className="text-3xl font-bold text-black mb-12 mt-6">How it works?</h2>
        <img
            src={sandwich}
            alt="Hunch Logo"
            className="h-24 w-24"  
          />
         </div>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <img
                src={step.icon}
                alt={`${step.title} Icon`}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-black">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
