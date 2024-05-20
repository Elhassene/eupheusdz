import React from 'react';
import img1 from '../../images/app1.png';
import img2 from '../../images/app2.png';

const GetApp = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-400 p-8 md:p-16">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 lg:pr-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Unlock Learning Anytime, Anywhere!</h2>
          <p className="text-white mb-6 md:mb-8">Experience learning on the go with our mobile app. Access all your favorite courses, and enjoy seamless learning anytime, anywhere. Join our community and take your education with you!</p>
          <button className="bg-white text-green-500 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition duration-300">
            Get the App
          </button>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center space-x-4">
          <img src={img2} alt="App screenshot 1" className="w-2/3 md:w-1/2 lg:w-1/3 ml-4" />
          <img src={img1} alt="App screenshot 2" className="w-2/3 md:w-1/2 lg:w-1/3 " />
        </div>
      </div>
    </div>
  );
};

export default GetApp;
