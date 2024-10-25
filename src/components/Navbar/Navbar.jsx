import React, { useState } from 'react';
import './navbar.css';
import { image } from '../images';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#759CBA1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img src={image.logo} alt="Logo" className="logo" />
          </div>
          <div className="hidden md:flex space-x-4">
            <NavLink to="/" className="text-white hover:text-gray-300 nav-link">
              Home
            </NavLink>
            <NavLink to="/aboutus" className="text-white hover:text-gray-300 nav-link">
              About
            </NavLink>
            <NavLink to="/services" className="text-white hover:text-gray-300 nav-link">
              Services
            </NavLink>
            <NavLink to="/contact" className="text-white hover:text-gray-300 nav-link">
              Contact
            </NavLink>
            <NavLink to="/login">
              <button className='login_btn nav-link'>Log in</button>
            </NavLink>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden transform transition-transform duration-300 ease-in-out">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 mobile-menu">
            <NavLink to="/" className="block text-white hover:text-gray-300 nav-link">
              Home
            </NavLink>
            <NavLink to="/aboutus" className="block text-white hover:text-gray-300 nav-link">
              About
            </NavLink>
            <NavLink to="/services" className="block text-white hover:text-gray-300 nav-link">
              Services
            </NavLink>
            <NavLink to="/contact" className="block text-white hover:text-gray-300 nav-link">
              Contact
            </NavLink>
            <NavLink to="/login">
              <button className='login_btn'>Log in</button>
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
