import React, { useState, useEffect } from 'react';
import { FaUser, FaLock, FaEye, FaEyeSlash, FaTimes } from 'react-icons/fa';
import axios from 'axios';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const fetchUrl = 'https://marine-dragonfly-e-learning-00af8488.koyeb.app/api/user'

    // useEffect(() => {
    //     async function getCourses() {
    //         try {
    //             const response = await axios.get(fetchUrl, {
    //                 headers:{
    //                     "Authorization": "Bearer 5|hV58FT8svysopWxa3IVNqLTQ6ynFT6WryqdGl7yC49ddf1e5"
    //                 }
    //             });
    //             console.log('Data:', response.data);
    //             console.log(response.status)
    //         } catch (error) {
    //             if (error.response) {
    //                 // Server responded with a status other than 200 range
    //                 console.error('Response error:', error.response.status);
    //                 console.error('Response data:', error.response.data);
    //             } else if (error.request) {
    //                 // Request was made but no response received
    //                 console.error('Request error:', error.request);
    //             } else {
    //                 // Something else happened in setting up the request
    //                 console.error('Error:', error.message);
    //             }
    //         }
    //     }
    //     getCourses();
    // }, []);
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
                className="px-4 py-2 bg-green-700 text-white border border-green-700 rounded hover:bg-white hover:text-green-700 cursor-pointer"
            >
                Log in
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
                        <h1 className="text-xl font-bold text-gray-700 text-center mb-4">WELCOME BACK!</h1>
                        <div className="mb-4 relative">
                            <label className="block text-gray-700 mb-1">Email:</label>
                            <div className="flex items-center border rounded px-3 py-2 focus-within:ring-2 focus-within:ring-green-500">
                                <FaUser className="text-gray-400 mr-2" />
                                <input
                                    className="flex-1 outline-none"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-4 relative">
                            <label className="block text-gray-700 mb-1">Password:</label>
                            <div className="flex items-center border rounded px-3 py-2 focus-within:ring-2 focus-within:ring-green-500">
                                <FaLock className="text-gray-400 mr-2" />
                                <input
                                    className="flex-1 outline-none"
                                    type={hidden ? 'password' : 'text'}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
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
                            className={`w-full bg-green-700 text-white py-2 rounded hover:bg-green-600 ${!isChecked && 'opacity-50 cursor-not-allowed'}`}
                            disabled={!isChecked}
                        
                        >
                            Login
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Login;
