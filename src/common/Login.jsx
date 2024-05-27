import React, { useState } from 'react';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png'

const Login = () => {

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const fetchUrl = 'https://marine-dragonfly-e-learning-00af8488.koyeb.app/api/user'

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
    // const [toggle, setToggle] = useState(false);
    const [hidden, setHidden] = useState(true);
    const [isChecked, setIsChecked] = useState(false);

    // const handleToggle = () => {
    //     setToggle(!toggle);
    // };

    const handleHidden = () => {
        setHidden(!hidden);
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="flex flex-col items-center w-full">
            <img src={Logo} alt='logo' className="max-w-full h-auto mb-4" />
            <h1 className="text-xl font-bold text-gray-700 text-center mb-4">WELCOME BACK!</h1>
            <div className="mb-4 relative w-full">
                <label className="block text-gray-700 mb-1">Email:</label>
                <div className="flex items-center border rounded px-3 py-2 focus-within:ring-2 focus-within:ring-green-500">
                    <FaUser className="text-gray-400 mr-2" />
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
                <div className="flex items-center border rounded px-3 py-2 focus-within:ring-2 focus-within:ring-green-500">
                    <FaLock className="text-gray-400 mr-2" />
                    <input
                        className="flex-1 outline-none"
                        type={hidden ? 'password' : 'text'}
                        placeholder="Enter your password"
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
                        className="form-checkbox h-4 w-4 text-green-600 rounded-full"
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
            <div className="flex items-center justify-center my-4 w-full">
                <div className="border-t border-gray-300 flex-grow"></div>
                <h3 className="mx-2 text-gray-500 cursor-pointer"><Link to="/signup">OR SIGN UP</Link></h3>
                <div className="border-t border-gray-300 flex-grow"></div>
            </div>

        </div>
    );
};

export default Login;
