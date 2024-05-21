import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoimg from '../../images/logo.png';

const NavBar = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();

  const handleShow = () => {
    setShow(!show);
  };

  const getLinkClassName = (path) => {
    return location.pathname === path ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700 hover:text-blue-500';
  };

  return (
    <nav className="bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <img src={logoimg} alt="Logo" className="h-8" />
          <span className="text-2xl font-bold text-blue-800">EUPHEUS</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              className="w-96 mr-24 p-2 pl-10 text-sm border-2 border-black rounded-3xl focus:ring-2"
              placeholder="What Do You Want To Learn Today ?"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-800"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 1 0-14 0 7 7 0 0 0 14 0z" />
            </svg>
          </div>
          <ul className="hidden md:flex space-x-4 font-bold">
            <li className={`${getLinkClassName('/')} cursor-pointer`}><Link to="/">Home</Link></li>
            <li className={`${getLinkClassName('/courses')} cursor-pointer`}><Link to="/courses">Courses</Link></li>
            <li className={`${getLinkClassName('/about')} cursor-pointer`}><Link to="/about">About Us</Link></li>
            <li className={`${getLinkClassName('/contact')} cursor-pointer`}><Link to="/contact">Contact Us</Link></li>
          </ul>
          <div className="px-4 py-2 bg-green-700 text-white border border-green-700 rounded hover:bg-white hover:text-green-700 cursor-pointer">Log in</div>
          <div className="px-4 py-2 text-green-700 border border-green-700 rounded hover:bg-green-700 hover:text-white cursor-pointer">Sign up</div>
          <button className="md:hidden flex items-center text-gray-700" onClick={handleShow}>
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {show && (
        <div className="md:hidden px-4 pb-4">
          <div className="relative">
            <input
              type="text"
              className="w-full p-2 pl-10 text-sm border rounded-lg focus:ring-2"
              placeholder="What Do You Want To Learn Today ?"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-800"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 1 0-14 0 7 7 0 0 0 14 0z" />
            </svg>
          </div>
          <ul className="mt-4 space-y-2">
            <li className={`${getLinkClassName('/')} block cursor-pointer`}><Link to="/">Home</Link></li>
            <li className={`${getLinkClassName('/courses')} block cursor-pointer`}><Link to="/courses">Courses</Link></li>
            <li className={`${getLinkClassName('/about')} block cursor-pointer`}><Link to="/about">About Us</Link></li>
            <li className={`${getLinkClassName('/contact')} block cursor-pointer`}><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
