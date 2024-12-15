/* eslint-disable no-unused-vars */
import React from 'react';
import plate from "../../assets/plate.png";
import contactbg from "../../assets/contactbg.png";
import { NavLink } from 'react-router-dom';

const Waitlist = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${contactbg})` }}
    >
      <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row max-w-3xl overflow-hidden w-full mx-4">
         
        <div className="md:w-1/2">
          <img
            src={plate}
            alt="Plate setup"
            className="h-40 md:h-full w-full object-cover"
          />
        </div>

        
        <div className="md:w-1/2 p-6">
          <h1 className="text-green-500 text-2xl font-bold text-center mb-4">
            Join The Waitlist
          </h1>
          <form>
            <div className="lg:mt-8">
              <label
                className="block text-gray-700 text-sm mb-1"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                placeholder="Enter your name"
              />
            </div>
            <div className="lg:mt-8 mt-8">
              <label
                className="block text-gray-700 text-sm mb-1"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                placeholder="Enter your email address"
              />
            </div>
            <NavLink to='/waitlist' activeClassName="active">
   
    <button className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-600 hover:text-white">
      Join the Waitlist
    </button>
</NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
