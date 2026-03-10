import React from "react";

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-28 text-center">
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Build Modern Websites with React
        </h1>

        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Create fast, scalable, and beautiful web applications using
          React and Tailwind CSS.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get Started
          </button>

          <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
};

export default Banner;