import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import logo from '../../images/logo2.png';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white">
      <div className="container mx-auto py-10 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-6 md:mb-0 pl-4 md:pl-0">
          <img src={logo} alt="Eupheus Logo" className="h-20 mb-4" />
          <p className="text-lg font-semibold">Empowering Your Journey to Knowledge and Discovery.</p>
          <p className="text-sm mt-2">Eupheus, 2024.</p>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-10 pl-4 md:pl-0">
          <div className="mb-6 md:mb-0">
            <h6 className="font-bold mb-2">Quick Links</h6>
            <ul>
              <li className="text-sm cursor-pointer">Home</li>
              <li className="text-sm cursor-pointer">Courses</li>
              <li className="text-sm cursor-pointer">About us</li>
              <li className="text-sm cursor-pointer">Contact us</li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h6 className="font-bold mb-2">Resources</h6>
            <ul>
              <li className="text-sm cursor-pointer">Teach on Eupheus</li>
              <li className="text-sm cursor-pointer">Get the app</li>
              <li className="text-sm cursor-pointer">Help and support</li>
              <li className="text-sm cursor-pointer">Invest in us</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold mb-2">Legal</h6>
            <ul>
              <li className="text-sm cursor-pointer">Terms of service</li>
              <li className="text-sm cursor-pointer">Privacy policy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-green-400 py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2024 EUPHEUS. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <div className="text-white"><FaLinkedin size={24} /></div>
            <div className="text-white"><FaFacebook size={24} /></div>
            <div className="text-white"><FaInstagram size={24} /></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
