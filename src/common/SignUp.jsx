import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';

const SignUp = () => {
    const [hidden, setHidden] = useState(true);
    const [isChecked, setIsChecked] = useState(false);

    const handleHidden = () => {
        setHidden(!hidden);
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="flex flex-col items-center">
            <img src={Logo} alt='logo' className="max-w-full h-auto mb-4" />
            <h1 className="text-xl font-bold text-gray-700 text-center mb-4">JOIN US NOW!</h1>
            <div className="mb-4 relative w-full">
                <label className="block text-gray-700 mb-1">Full Name:</label>
                <div className="flex items-center border rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                    <FaUser className="text-gray-400 mr-2" />
                    <input
                        className="flex-1 outline-none"
                        type="text"
                        placeholder="Enter your Full name"
                        required
                    />
                </div>
            </div>
            <div className="mb-4 relative w-full">
                <label className="block text-gray-700 mb-1">Email:</label>
                <div className="flex items-center border rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                    <FaEnvelope className="text-gray-400 mr-2" />
                    <input
                        className="flex-1 outline-none"
                        type="email"
                        placeholder="Enter your email"
                        required
                    />
                </div>
            </div>
            <div className="mb-4 relative w-full">
                <label className="block text-gray-700 mb-1">Password:</label>
                <div className="flex items-center border rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                    <FaLock className="text-gray-400 mr-2" />
                    <input
                        className="flex-1 outline-none"
                        type="password"
                        placeholder="Enter your password"
                        required
                    />
                </div>
            </div>
            <div className="mb-4 relative w-full">
                <label className="block text-gray-700 mb-1">Confirm Password:</label>
                <div className="flex items-center border rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                    <FaLock className="text-gray-400 mr-2" />
                    <input
                        className="flex-1 outline-none"
                        type={hidden ? 'password' : 'text'}
                        placeholder="Confirm your password"
                        required
                    />
                    <div onClick={handleHidden} className="cursor-pointer">
                        {hidden ? <FaEyeSlash className="text-gray-400" /> : <FaEye className="text-gray-400" />}
                    </div>
                </div>
            </div>
            <div className="mb-4 w-full">
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-blue-600 rounded-full"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <span className="ml-2 text-gray-700">I agree to the Privacy and Policy</span>
                </label>
            </div>
            <button
                className={`w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-600 ${!isChecked && 'opacity-50 cursor-not-allowed'}`}
                disabled={!isChecked}
            >
                Sign Up
            </button>
            <div className="flex items-center justify-center my-4 w-full">
                <div className="border-t border-gray-300 flex-grow"></div>
                <h3 className="mx-2 text-gray-500 cursor-pointer"><Link to="/login">OR LOG IN</Link></h3>
                <div className="border-t border-gray-300 flex-grow"></div>
            </div>
    </div>
    );
};

export default SignUp;
