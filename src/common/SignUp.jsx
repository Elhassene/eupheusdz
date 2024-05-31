import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { TokenContext } from '../TokenContext';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../images/logo.png';

const SignUp = () => {
    const { setToken } = useContext(TokenContext);
    const history = useHistory();

    const toHomePage = () => {
        setTimeout(() => {
            history.push('/courses');
        }, 50);
    };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [registerListener, setRegisterListener] = useState(false);

    const fetchUrl = 'https://marine-dragonfly-e-learning-00af8488.koyeb.app/api/auth/register';

    useEffect(() => {
        if (registerListener) {
            async function registerUser() {
                try {
                    const response = await axios.post(fetchUrl, {
                        name: name,
                        email: email,
                        password: password,
                        password_confirmation: confirmPassword
                    });
                    const receivedToken = response.data.access_token;
                    setToken(receivedToken);
                    console.log(receivedToken);
                    console.log('mchat');
                    toHomePage();
                } catch (error) {
                    if (error.response) {
                        console.error('Response error:', error.response.status);
                        console.error('Response data:', error.response.data);
                    } else if (error.request) {
                        console.error('Request error:', error.request);
                    } else {
                        console.error('Error:', error.message);
                    }
                }
            }
            registerUser();
        }
    }, [registerListener, name, email, password, confirmPassword, fetchUrl, setToken, toHomePage]);

    const handleRegister = () => {
        setRegisterListener(true);
    };

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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
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
                onClick={handleRegister}
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
