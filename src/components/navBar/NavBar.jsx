import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

import logoimg from '../../images/logo.png';

const NavBar = () => {
    const [show, setShow] = useState(false);
    const [search, setSearch] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState(search);
    const [searchCourse, setSearchCourse] = useState([]);

    const fetchUrl = 'https://marine-dragonfly-e-learning-00af8488.koyeb.app/api/feed';
    const storagerUrl = 'https://marine-dragonfly-e-learning-00af8488.koyeb.app/storage/';

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(search);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [search]);

    useEffect(() => {
        async function getSearchCourse() {
            if (debouncedSearch) {
                try {
                    const request = await axios.get(fetchUrl, {
                        params: {
                            search: debouncedSearch
                        }
                    });
                    setSearchCourse(request.data[0].data); // Assuming the data structure is similar to the initial fetch
                } catch (error) {
                    console.error('Error fetching courses:', error);
                }
            }
        }
        getSearchCourse();
    }, [debouncedSearch]);

    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    const isSignupPage = location.pathname === '/signup';

    const handleShow = () => {
        setShow(!show);
    };

    const getLinkClassName = (path) => {
        return location.pathname === path ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700 hover:text-blue-500';
    };

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
                        {searchCourse.length > 0 && (
                            <div className="absolute mt-2 w-96 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                                <ul>
                                    {searchCourse.map((course) => (
                                        <li key={course.id} className="p-2 hover:bg-gray-100 cursor-pointer">
                                            <div className="flex items-center">
                                                <img className="w-10 h-10 rounded-full" src={`${storagerUrl}${course.user.profile.avatar_url}`} alt="Teacher" />
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
                        <li className={`${getLinkClassName('/')} cursor-pointer`}><Link to="/">Home</Link></li>
                        <li className={`${getLinkClassName('/courses')} cursor-pointer`}><Link to="/courses">Courses</Link></li>
                        <li className={`${getLinkClassName('/about')} cursor-pointer`}><Link to="/about">About Us</Link></li>
                        <li className={`${getLinkClassName('/contact')} cursor-pointer`}><Link to="/contact">Contact Us</Link></li>
                    </ul>
                    <div className="px-4 py-2 bg-green-700 text-white border border-green-700 rounded hover:bg-white hover:text-green-700 cursor-pointer">
                        <Link to='/login'>Log in</Link>
                    </div>
                    <div className="px-4 py-2 bg-blue-700 text-white border border-blue-700 rounded hover:bg-white hover:text-blue-700 cursor-pointer">
                        <Link to='/signup'>Sign up</Link>
                    </div>
        
                    {/* <Login />
                    <SignUp /> */}
                    <button className="md:hidden flex items-center text-gray-700" onClick={handleShow}>
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
            {show && (
                <div className="md:hidden">
                    <div className="relative">
                        <input
                            type="text"
                            className="w-96 mr-24 p-2 pl-10 pr-8 text-sm border-2 border-black rounded-3xl focus:ring-2"
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
                    {searchCourse.length > 0 && (
                        <div className="absolute mt-2 w-96 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                            <ul>
                                {searchCourse.map((course) => (
                                    <li key={course.id} className="p-2 hover:bg-gray-100 cursor-pointer">
                                        <div className="flex items-center">
                                            <img className="w-10 h-10 rounded-full" src={`${storagerUrl}${course.user.profile.avatar_url}`} alt="Teacher" />
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
                        <li className={`${getLinkClassName('/')} cursor-pointer`}><Link to="/">Home</Link></li>
                        <li className={`${getLinkClassName('/courses')} cursor-pointer`}><Link to="/courses">Courses</Link></li>
                        <li className={`${getLinkClassName('/about')} cursor-pointer`}><Link to="/about">About Us</Link></li>
                        <li className={`${getLinkClassName('/contact')} cursor-pointer`}><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
