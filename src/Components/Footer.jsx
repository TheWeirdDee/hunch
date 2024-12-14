/* eslint-disable no-unused-vars */
import React from "react";
import HunchLogo from "../assets/Hunch-Logo.png";
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";  
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-50 text-green-900 py-8 px-4">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
       
        <div className="col-span-1 lg:col-span-2 flex lg:ml-16 flex-col items-center lg:items-start">
          <img src={HunchLogo} alt="Hunch Logo" className="h-10 w-28" />
          <p className="text-sm mt-2 text-center lg:text-left">
            Healthy Meals made for you.
          </p>
          <div className="flex mt-4 space-x-4 justify-center lg:justify-start">
            <a
              href="#"
              className="text-green-700 hover:text-green-500"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl sm:text-xl" />
            </a>
            <a
              href="#"
              className="text-green-700 hover:text-green-500"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl sm:text-xl" />
            </a>
            <a
              href="#"
              className="text-green-700 hover:text-green-500"
              aria-label="Twitter"
            >
              <FaTwitter className="text-2xl sm:text-xl" />
            </a>
            <a
              href="#"
              className="text-green-700 hover:text-green-500"
              aria-label="Facebook"
            >
              <FaFacebook className="text-2xl sm:text-xl" />
            </a>
          </div>
        </div>

        <div className="col-span-1 flex flex-col items-center lg:items-start">
          <h2 className="text-md font-semibold mb-2 text-center mt-2 lg:text-left">Quick Links</h2>
          <ul className="space-y-2 text-sm text-center lg:text-left">
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                News
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-1 flex flex-col items-center lg:items-start">
          <h2 className="text-md font-semibold mb-2 text-center lg:text-left">Contact</h2>
          <ul className="text-sm space-y-1 text-center lg:text-left">
            <li>61, Westey str, Lagos, Nigeria</li>
            <li>
              <a href="mailto:info.hunch@gmail.com" className="hover:underline">
                info.hunch@gmail.com
              </a>
            </li>
            <li>01-234-8976</li>
          </ul>
        </div>

        
        <div className="col-span-1 flex flex-col items-center lg:items-start">
          <h2 className="text-md font-semibold mb-2 text-center lg:text-left">Waitlist</h2>
          <NavLink to='/waitlist' activeClassName="active">
   
   <button className="bg-red-500 mt-1 text-white px-4 py-2 rounded-lg hover:bg-red-600 hover:text-black">
   Join the Waitlist
 </button>
</NavLink>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-green-600 border-t border-green-200 pt-4">
        © All rights reserved, Hunch 2024
      </div>
    </footer>
  );
};

export default Footer;
