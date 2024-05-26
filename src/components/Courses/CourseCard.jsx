import React, { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import axios from 'axios';

const CourseCard = ({ coursesCard }) => {

    const [courses, setCourses] = useState([]);
    const [heartStates, setHeartStates] = useState([]);
    const fetchUrl = 'https://marine-dragonfly-e-learning-00af8488.koyeb.app/api/feed';
    const storagerUrl = 'https://marine-dragonfly-e-learning-00af8488.koyeb.app/storage/';

    useEffect(() => {
        async function getCourses() {
            try {
                const request = await axios.get(fetchUrl);
                const responseData = request.data[0];
                const coursesData = responseData.data;
                setCourses(coursesData);
                setHeartStates(coursesData.map(() => false));
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        }
        getCourses();
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 9;

    const handleHeart = (index) => {
        const updatedHeartStates = [...heartStates];
        updatedHeartStates[index] = !updatedHeartStates[index];
        setHeartStates(updatedHeartStates);
    };

    const totalPages = Math.ceil(coursesCard.length / cardsPerPage);
    const startIndex = (currentPage - 1) * cardsPerPage;
    //const endIndex = startIndex + cardsPerPage;
    //const currentCards = coursesCard.slice(startIndex, endIndex);

    return (
        <div className='p-8 mt-20'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {courses.map((val, index) => (
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
                            <button className='bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300'>See more</button>
                            <p className='flex items-center'>
                                {val.like_count} <span onClick={() => handleHeart(index)} className='ml-2 cursor-pointer'>
                                    {heartStates[startIndex + index] ? <FaHeart className='text-red-500' /> : <FaRegHeart />}
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
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
