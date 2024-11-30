/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import HunchLogo from "../assets/Hunch-Logo.png";
import { RiMenu4Fill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleOutsideClick = (e) => {
    if (!e.target.closest('.nav__menu') && !e.target.closest('.nav__toggle-btn')) {
      setMobileMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className="flex items-center justify-between bg-white px-4 py-2 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={HunchLogo}
          alt="Hunch Logo"
          className="h-10 w-24 ml-12"
        />
      </div>

      {/* Links and Button */}
      <div className="flex items-center justify-center space-x-6 mr-20 ">
        <div className="hidden md:flex space-x-6">
          <ul className="flex space-x-6 mt-3">
            <li>
              <NavLink exact to='/' className="text-black  font-semibold hover:text-gray-600" activeClassName='active'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/about' className="text-black font-semibold hover:text-gray-600" activeClassName='active'>
                About
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/contact' className="text-black font-semibold hover:text-gray-600" activeClassName='active'>
                Contact
              </NavLink>
            </li>
          </ul>

          <button className="bg-red-500 mt-1 text-white px-4 py-2 rounded-lg hover:bg-red-600">
            Join the Waitlist
          </button>
        </div>

        
        <button className='nav__toggle-btn md:hidden' onClick={toggleMenu}>
          <RiMenu4Fill />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="absolute top-0 right-0 h-80 w-64 z-10 opacity-90 rounded-bl-lg bg-red-500 shadow-lg lg:hidden nav__menu">
          <div className="flex flex-col items-center justify-start py-4 space-y-4">
            <NavLink to='/' className="text-black font-semibold hover:text-gray-900 w-full h-12 flex items-center justify-center">
              Home
            </NavLink>
            <NavLink to='/about' className="text-black font-semibold hover:text-gray-900 w-full h-12 flex items-center justify-center">
              About
            </NavLink>
            <NavLink to='/contact' className="text-black font-semibold hover:text-gray-900 w-full h-12 flex items-center justify-center">
              Contact
            </NavLink>
            <div className="w-full flex justify-center mt-auto">
              <button className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-600 hover:text-white">
                Join the Waitlist
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
