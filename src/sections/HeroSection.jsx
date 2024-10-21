import React from "react";
import { newPiggy } from '../assets/index';

const HeroSection = () => {
  return (
    <section className="h-screen bg-[#212121] flex flex-col lg:flex-row items-center justify-center">
      {/* Text Column */}
      <div className="px-8 lg:px-16 text-center lg:text-left lg:w-1/2 flex flex-col items-center lg:items-start justify-center gap-8">
        <h1 className="text-4xl lg:text-5xl font-bold text-white">
          Welcome back!<br />
          <span className="text-slate-400 text-3xl lg:text-4xl font-semibold">
            Ready to save some coins?
          </span>
        </h1>
        <button className="mt-4 px-8 py-4 rounded-full text-base font-bold text-white bg-yellow-500 hover:bg-yellow-600 transition-all duration-300">
          New Entry
        </button>
      </div>

      {/* Image Column */}
      <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center items-center relative">
        <img
          src={newPiggy}
          alt="Piggy Bank"
          className="w-3/4 max-w-lg h-auto object-contain transform transition-transform duration-300 ease-in-out"
        />
      </div>
    </section>
  );
};

export default HeroSection;
