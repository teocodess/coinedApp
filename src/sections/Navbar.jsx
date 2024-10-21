// import React, { useState } from "react";
// import {closeIcon} from '../assets/index'

// const Navbar = ({ toggleGoals }) => {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

import React from 'react';

const Navbar = () => {

  return (
    <nav className="w-full fixed top-0 z-10 bg-white shadow-md">
      <div className="container mx-auto px-10 py-5 flex items-center justify-start">
       {/* <div className="flex items-center gap-2 cursor-pointer">
          <div id="hamburger" className="space-y-1 cursor-pointer z-20" onClick={toggleMenu}>
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </div> */}
          <span className="text-gray-900 text-lg font-semibold uppercase">Coined</span>
        </div>

       {/*  {isMenuOpen && (
          <ul className="bg-white absolute left-0 top-0 p-10 space-y-10 text-center w-1/3 h-screen">
            <li onClick={toggleMenu} className="cursor-pointer text-lg font-bold"><img src={closeIcon} width={15} height={15}/></li>
            <li onClick={toggleGoals} className="cursor-pointer text-lg font-bold">Goals</li>
          </ul>
        )}
      </div> */}
    </nav>
  );
};

export default Navbar;
