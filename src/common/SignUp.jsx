import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaTimes } from 'react-icons/fa';

const SignUp = () => {
    const [toggle, setToggle] = useState(false);
    const [hidden, setHidden] = useState(true);
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    const handleHidden = () => {
        setHidden(!hidden);
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <>
            <div
                onClick={handleToggle}
                className="px-4 py-2 bg-blue-700 text-white border border-blue-700 rounded hover:bg-white hover:text-blue-700 cursor-pointer"
            >
                Sign Up
            </div>
            {toggle && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
                        <button
                            onClick={handleToggle}
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                        >
                            <FaTimes />
                        </button>
                        <h1 className="text-xl font-bold text-gray-700 text-center mb-4">JOIN US NOW!</h1>
                        <div className="mb-4 relative">
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
                        <div className="mb-4 relative">
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
                        <div className="mb-4 relative">
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
                        <div className="mb-4 relative">
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
                        <div className="mb-4">
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
                    </div>
                </div>
            )}
        </>
    );
};

export default SignUp;
