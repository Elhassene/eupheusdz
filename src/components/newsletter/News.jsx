import React from 'react';

const News = () => {
  return (
    <div className="relative p-8 md:p-16 mt-64 md:mt-0 z-0">
      <div className="relative max-w-lg mx-auto bg-blue-800 p-6 rounded-lg shadow-lg z-10">
        <div className="absolute top-0 left-0 w-16 h-16 bg-green-500 transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-green-500 transform translate-x-1/2 translate-y-1/2 rounded-full"></div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Subscribe To Get Updated About New Courses</h2>
        <p className="text-white mb-6">Stay updated with the latest insights and exclusive offers. Subscribe to our newsletter and never miss out on new learning opportunities!</p>
        <div className="flex flex-col md:flex-row">
          <input 
            type="email" 
            placeholder="Enter Your Email" 
            className="flex-grow p-3 border border-gray-300 rounded-t-lg md:rounded-l-lg md:rounded-t-none focus:outline-none"
          />
          <button className="bg-green-500 text-white px-6 py-3 rounded-b-lg md:rounded-r-lg md:rounded-b-none font-semibold shadow-lg hover:bg-green-600 transition duration-300 mt-4 md:mt-0">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
