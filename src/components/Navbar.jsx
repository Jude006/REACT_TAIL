import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
  
    <nav className="bg-[#080808] flex items-center justify-between font-montserrat px-8 py-3 w-full fixed left-0 top-0 z-50">
    <div>
      <h2 className="text-4xl text-white font-bold">BUR<span className="text-primary animate-pulse">GRY</span></h2>
    </div>
    <div className="block">
      <ul className={`justify-between items-center gap-[50px] md:flex ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <Link to="/" className="text-white block md:inline-block px-3 py-2 hover:text-primary duration-300 ease-linear focus:text-primary">Home</Link>
        <Link to="/about" className="text-white block md:inline-block px-3 py-2 hover:text-primary duration-300 ease-linear focus:text-primary">About</Link>
        <Link to="/menu" className="text-white block md:inline-block px-3 py-2 hover:text-primary duration-300 ease-linear focus:text-primary">Menu</Link>
        
        <div className="relative group">
          <span className="text-white block md:inline-block px-3 py-2 cursor-pointer hover:text-primary duration-300 ease-linear focus:text-primary">Pages</span>
          <div className="absolute hidden group-hover:block bg-black text-white shadow-lg rounded-md  group-hover:flex flex-col">
            <Link to="/reservation" className="block px-4 py-2 hover:bg-gray-700 hover:text-primary ">Reservation</Link>
            <Link to="/team" className="block px-4 py-2 hover:bg-gray-700 hover:text-primary">Team</Link>
            <Link to="/news" className="block px-4 py-2 hover:bg-gray-700 hover:text-primary">News</Link>
            <Link to="/faq" className="block px-4 py-2 hover:bg-gray-700 hover:text-primary">FAQ</Link>
          </div>
        </div>
        
        <Link to="/contact" className="text-white block md:inline-block px-3 py-2 hover:text-primary duration-300 ease-linear focus:text-primary">Contact Us</Link>
       
        <Link to="/order" className="  bg-primary text-black px-8 py-2 rounded-md block md:inline-block">Order Now</Link>
        
      </ul>
      <div className="md:hidden flex">
        <button onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-2xl text-white" />
        </button>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
