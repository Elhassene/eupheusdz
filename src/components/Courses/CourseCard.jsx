import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import axios from 'axios';

const CourseCard = ({ coursesCard }) => {
    const [allCourses, setAllCourses] = useState([]);
    const [filteredCourses, setFilteredCourses] = useState([]);
    const history = useHistory();
    const [filter, setFilter] = useState('all');
    const [heartStates, setHeartStates] = useState([]);
    const fetchUrl = 'https://marine-dragonfly-e-learning-00af8488.koyeb.app/api/feed';
    const storagerUrl = 'https://marine-dragonfly-e-learning-00af8488.koyeb.app/storage/';

    useEffect(() => {
        const getAllCourses = async () => {
            try {
                const request = await axios.get(fetchUrl);
                const responseData = request.data[0].data;
                setAllCourses(responseData);
                setFilteredCourses(responseData);
                setHeartStates(responseData.map(() => false));
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };
        getAllCourses();
    }, []);

    useEffect(() => {
        const filterCourses = () => {
            if (filter && filter !== 'all') {
                const filtered = allCourses.filter(course => course.field.toLowerCase() === filter.toLowerCase());
                setFilteredCourses(filtered);
            } else {
                setFilteredCourses(allCourses);
            }
        };
        filterCourses();
    }, [filter, allCourses]);

    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 9;

    const handleHeart = (index) => {
        const updatedHeartStates = [...heartStates];
        updatedHeartStates[index] = !updatedHeartStates[index];
        setHeartStates(updatedHeartStates);
    };

    const handleSeeMore = (course) => {
        history.push({
          pathname: '/course-preview',
          state: { course },
        });
    };

    const totalPages = Math.ceil(filteredCourses.length / cardsPerPage);
    const currentCourses = filteredCourses.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage);

    return (
        <div className='p-8 mt-20'>
            <div className='mb-10 '>
                <h2 className='text-3xl font-bold mb-3'>Master Fundamental Skills</h2>
                <p className='text-xl mt-2'>Explore Affordable Courses For Career Growth Or Personal Enrichment, Covering Technical Skills And Personal Development, To Unlock Your Potential.</p>
            </div>
            <div className='flex flex-col lg:flex-row justify-between items-start mb-8'>
                <div className='flex flex-col mb-4 lg:mb-0 lg:w-1/4'>
                    <h3 className='text-xl font-bold mb-2'>Filter By</h3>
                    <div>
                        <label className='block mb-2'>
                            <input 
                                type='radio' 
                                name='course' 
                                className='mr-2' 
                                value='all'
                                checked={filter === 'all'}
                                onChange={(e) => setFilter(e.target.value)}
                            />
                            All
                        </label>
                        <label className='block mb-2'>
                            <input 
                                type='radio' 
                                name='course' 
                                className='mr-2' 
                                value='computer science'
                                checked={filter === 'computer science'}
                                onChange={(e) => setFilter(e.target.value)}
                            />
                            Computer Science
                        </label>
                        <label className='block mb-2'>
                            <input 
                                type='radio' 
                                name='course' 
                                className='mr-2' 
                                value='mathematics'
                                checked={filter === 'mathematics'}
                                onChange={(e) => setFilter(e.target.value)}
                            />
                            Mathematics
                        </label>
                        <label className='block mb-2'>
                            <input 
                                type='radio' 
                                name='course' 
                                className='mr-2' 
                                value='english'
                                checked={filter === 'english'}
                                onChange={(e) => setFilter(e.target.value)}
                            />
                            English
                        </label>
                    </div>
                    <div className='mt-4'>
                        <h3 className='text-xl font-bold mb-2'>Type Options</h3>
                        <label className='block mb-2'><input type='checkbox' className='mr-2' />Online</label>
                        <label className='block'><input type='checkbox' className='mr-2' />In-person</label>
                    </div>
                </div>
                <div className='flex-1'>
                    <h3 className='text-xl font-bold mb-4'>Choose The Course That Aligns Best With Your Educational Goals</h3>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {currentCourses.map((val, index) => (
                            <div key={val.id} className='bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2'>
                                <div className='bg-green-500 text-blue-800 text-center py-6 rounded-t-lg h-40'>
                                    <h3 className='text-2xl font-bold pt-8'>EUPHEUS</h3>
                                </div>
                                <div className='flex items-center bg-gray-200 p-4'>
                                    <img className='w-16 h-16 rounded-full' src={`${storagerUrl}${val.user.profile.avatar_url}`} alt='Teacher' />
                                    <div className='ml-4'>
                                        <h4 className='text-lg font-semibold'>{val.user.name}</h4>
                                        <h5 className='text-sm text-gray-600'>Teacher</h5>
                                    </div>
                                </div>
                                <div className='p-4'>
                                    <h2 className='text-xl font-bold'>{val.field}</h2>
                                    <h2 className='text-xl font-semibold'>{val.title}</h2>
                                    <h3 className='text-lg text-gray-700 font-semibold'>{val.type}</h3>
                                    <h4>{val.location}</h4>
                                    <p className='text-green-600 text-lg font-bold'>{val.price}<b> DZD</b></p>
                                    <p className={`text-lg font-semibold ${val.status === 'closed' ? 'text-red-600' : 'text-green-600'}`}>{val.status}</p>
                                </div>
                                <div className='flex justify-between items-center p-4 border-t'>
                                    <button className='bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300' onClick={() => handleSeeMore(val)}>See more</button>
                                    <p className='flex items-center'>
                                        {val.like_count} <span onClick={() => handleHeart(index)} className='ml-2 cursor-pointer'>
                                            {heartStates[index] ? <FaHeart className='text-red-500' /> : <FaRegHeart />}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-8'>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        className={`mx-1 px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                        onClick={() => setCurrentPage(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
           </div>
        </div>
    );
};

export default CourseCard;
