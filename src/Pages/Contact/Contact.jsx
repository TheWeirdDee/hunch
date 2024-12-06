/* eslint-disable no-unused-vars */
import React from 'react';
import contactbg from "../../assets/contactbg.png";

const ContactUs = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${contactbg})` }}
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center w-full max-w-6xl px-4">
         
        <div className="lg:w-1/2 w-full lg:text-left mb-8 lg:mb-0">
          <h1 className="text-green-500 text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-white">
            Got questions or concerns about our service? Send us a message and
            we will get back to you soonest.
          </p>
        </div>

         
        <div className="bg-black bg-opacity-50 p-8 rounded-lg w-full lg:w-1/3 mx-auto">
          <form>
            <div className="mb-4">
              <label className="text-white block mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mb-4">
              <label className="text-white block mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Drop your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition"
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
