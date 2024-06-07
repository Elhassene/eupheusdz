import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { FaChalkboardTeacher, FaUser, FaSignOutAlt, FaHome, FaBook, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import axios from 'axios';
import { TokenContext } from '../../TokenContext';
import logoimg from '../../images/logo.png';
import guestPic from '../../images/geust.jpg';

const NavBar = () => {
    const { token, setToken } = useContext(TokenContext);
    const history = useHistory();
    const location = useLocation();

    const [show, setShow] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [search, setSearch] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState(search);
    const [searchCourse, setSearchCourse] = useState([]);

    const fetchUrl = 'https://marine-dragonfly-e-learning-00af8488.koyeb.app/api/feed';
    const profileUrl = 'https://marine-dragonfly-e-learning-00af8488.koyeb.app/api/user';
    const storageUrl = 'https://marine-dragonfly-e-learning-00af8488.koyeb.app/storage/';

    const [info, setInfo] = useState('')
    useEffect(() => {
        if (token) {
            async function getUserInfo() {
                try {
                    const response = await axios.get(profileUrl, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    setInfo(response.data)
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
            getUserInfo();
        }
    }, [token]);

    const logOut = () => {
        localStorage.removeItem('localToken');
        setToken(null);
        setTimeout(() => {
            history.push('/');
        }, 50);
    };

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(search);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [search]);

    useEffect(() => {
        const getSearchCourse = async () => {
            if (debouncedSearch) {
                try {
                    const request = await axios.get(fetchUrl, {
                        params: { search: debouncedSearch }
                    });
                    setSearchCourse(request.data[0].data);
                } catch (error) {
                    console.error('Error fetching courses:', error);
                }
            } else {
                setSearchCourse([]);
            }
        };
        getSearchCourse();
    }, [debouncedSearch]);

    const handleShow = () => {
        setShow(!show);
    };

    const getLinkClassName = (path) => {
        return location.pathname === path ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700 hover:text-blue-500';
    };

    const isLoginPage = location.pathname === '/login';
    const isSignupPage = location.pathname === '/signup';

    if (isLoginPage || isSignupPage) {
        return null;
    }

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
                            placeholder="What Do You Want To Learn Today?"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
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
                        {search && searchCourse.length > 0 && (
                            <div className="absolute mt-2 w-96 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                                <ul>
                                    {searchCourse.map((course) => (
                                        <li key={course.id} className="p-2 hover:bg-gray-100 cursor-pointer">
                                            <div className="flex items-center">
                                                <img className="w-10 h-10 rounded-full" src={`${storageUrl}${course.user.profile.avatar_url}`} alt="Teacher" />
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-semibold">{course.user.name}</h4>
                                                    <h5 className="text-sm text-gray-600">{course.title}</h5>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <ul className="hidden md:flex space-x-4 font-bold">
                        <li className={`${getLinkClassName('/')} cursor-pointer`}><Link to="/"><FaHome className="inline-block mr-2" />Home</Link></li>
                        <li className={`${getLinkClassName('/courses')} cursor-pointer`}><Link to="/courses"><FaBook className="inline-block mr-2" />Courses</Link></li>
                        <li className={`${getLinkClassName('/about')} cursor-pointer`}><Link to="/about"><FaInfoCircle className="inline-block mr-2" />About Us</Link></li>
                        <li className={`${getLinkClassName('/contact')} cursor-pointer`}><Link to="/contact"><FaEnvelope className="inline-block mr-2" />Contact Us</Link></li>
                    </ul>
                    {token ? (
                        <div className="relative">
                            <img
                                src={guestPic}
                                alt="Guest"
                                className="h-14 w-14 rounded-full cursor-pointer"
                                onClick={() => setShowDropdown(!showDropdown)}
                            />
                            {showDropdown && (
                                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                                    <div className="px-4 py-3">
                                        <span className="block text-sm text-gray-900">{info.name}</span>
                                        <span className="block text-sm text-gray-500 truncate">{info.email}</span>
                                        <span className="block text-sm text-gray-500 truncate">{info.category}</span>
                                    </div>
                                    <ul className="py-2">
                                        <li className="px-4 py-2 text-sm bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold hover:from-green-600 hover:to-blue-600 cursor-pointer flex items-center">
                                            <FaChalkboardTeacher className="mr-2" />
                                            Upgrade to Teacher
                                        </li>
                                        <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center">
                                            <FaUser className="mr-2" />
                                            Profile
                                        </li>
                                        <li onClick={logOut} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center">
                                            <FaSignOutAlt className="mr-2" />
                                            Sign out
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="flex space-x-4">
                            <div className="px-4 py-2 bg-green-700 text-white border border-green-700 rounded hover:bg-white hover:text-green-700 cursor-pointer text-sm md:text-base">
                                <Link to='/login'>Log in</Link>
                            </div>
                            <div className="px-4 py-2 bg-blue-700 text-white border border-blue-700 rounded hover:bg-white hover:text-blue-700 cursor-pointer text-sm md:text-base">
                                <Link to='/signup'>Sign up</Link>
                            </div>
                        </div>
                    )}
                    <button className="md:hidden flex items-center text-gray-700" onClick={handleShow}>
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`md:hidden transition-all-transform duration-700 ease-in-out ${show ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
                <div className="relative">
                    <input
                        type="text"
                        className="w-full p-2 pl-10 text-sm border-2 border-black rounded-3xl focus:ring-2"
                        placeholder="What Do You Want To Learn Today?"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
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
                {search && searchCourse.length > 0 && (
                    <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                        <ul>
                            {searchCourse.map((course) => (
                                <li key={course.id} className="p-2 hover:bg-gray-100 cursor-pointer">
                                    <div className="flex items-center">
                                        <img className="w-10 h-10 rounded-full" src={`${storageUrl}${course.user.profile.avatar_url}`} alt="Teacher" />
                                        <div className="ml-4">
                                            <h4 className="text-lg font-semibold">{course.user.name}</h4>
                                            <h5 className="text-sm text-gray-600">{course.title}</h5>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <ul className="space-y-2 p-4">
                    <li className={`${getLinkClassName('/')} cursor-pointer`}><Link to="/"><FaHome className="inline-block mr-2" />Home</Link></li>
                    <li className={`${getLinkClassName('/courses')} cursor-pointer`}><Link to="/courses"><FaBook className="inline-block mr-2" />Courses</Link></li>
                    <li className={`${getLinkClassName('/about')} cursor-pointer`}><Link to="/about"><FaInfoCircle className="inline-block mr-2" />About Us</Link></li>
                    <li className={`${getLinkClassName('/contact')} cursor-pointer`}><Link to="/contact"><FaEnvelope className="inline-block mr-2" />Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
