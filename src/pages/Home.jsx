import React from "react";
import Banner from "../Components/Banner";

const Home = () => {
  return (
    <div>
      <Banner />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Welcome to Our Website
        </h2>

        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          This is the homepage of our React application built with
          React Router, Tailwind CSS, and DaisyUI. You can add more
          sections here like services, features, testimonials, or
          products.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 shadow-md rounded-lg bg-white">
            <h3 className="text-xl font-semibold mb-2">Fast Development</h3>
            <p className="text-gray-500">
              Build modern websites quickly using React and Tailwind CSS.
            </p>
          </div>

          <div className="p-6 shadow-md rounded-lg bg-white">
            <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
            <p className="text-gray-500">
              Your website will work perfectly on mobile, tablet, and desktop.
            </p>
          </div>

          <div className="p-6 shadow-md rounded-lg bg-white">
            <h3 className="text-xl font-semibold mb-2">Modern UI</h3>
            <p className="text-gray-500">
              Create beautiful user interfaces with Tailwind and DaisyUI.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;