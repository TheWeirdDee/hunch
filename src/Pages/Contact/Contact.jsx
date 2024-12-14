/* eslint-disable no-unused-vars */
import React from "react";
import chickenbg from "../../assets/chickenbg.jpg";

const ContactUs = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: `url(${chickenbg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 pointer-events-none"></div>

      <div className="relative flex flex-col lg:flex-row w-full max-w-6xl mt-5 px-4">
        <div className="absolute top-8 left-8 lg:static lg:top-auto mb-32 lg:left-auto lg:w-1/3">
          <h1 className="text-green-500 text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-white text-lg leading-relaxed">
            Got questions or concerns about our service? Send us a message and
            we will get back to you soonest.
          </p>
        </div>

        <div className="flex items-center justify-center mt-20 lg:mt-2">
          <form className="w-96 lg:w-96 bg-opacity-90 rounded-lg p-8 shadow-lg">
            <div className="mb-2">
              <label
                className="text-white font-bold block mb-2 mt-20 text-md"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg font-bold placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mb-2">
              <label
                className="text-white font-bold block mb-2 text-md"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-white text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Drop your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-all"
            >
              Join the Waitlist
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
