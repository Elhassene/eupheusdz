import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';  
  const CourseCard = ({ coursesCard }) => {
    const [heartStates, setHeartStates] = useState(coursesCard.map(() => false));
  
    const handleHeart = (index) => {
      const updatedHeartStates = [...heartStates];
      updatedHeartStates[index] = !updatedHeartStates[index];
      setHeartStates(updatedHeartStates);
    };
  
    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 mt-20'>
        {coursesCard.map((val, index) => (
          <div key={val.id} className='bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2'>
            <div className='bg-green-500 text-blue-800 text-center py-6 rounded-t-lg h-40'>
              <h3 className='text-2xl font-bold pt-8'>EUPHEUS</h3>
            </div>
            <div className='flex items-center bg-gray-200 p-4'>
              <img className='w-16 h-16 rounded-full' src='https://img.freepik.com/photos-gratuite/homme-affaires-costume-noir-tenant-sa-liste-taches-souriant_114579-18998.jpg?t=st=1714486980~exp=1714490580~hmac=196e978728ca4acf2d7374bb5bb6e65b5eae0727bc14323e06774c998762d3d4&w=826' alt='Teacher' />
              <div className='ml-4'>
                <h4 className='text-lg font-semibold'>Ouazir Elhassene</h4>
                <h5 className='text-sm text-gray-600'>Teacher</h5>
              </div>
              <div className='flex ml-auto'>
                {Array.from({ length: val.stars }, (_, i) => (
                  <FaStar key={i} className='text-yellow-500 text-lg' />
                ))}
              </div>
            </div>
            <div className='p-4'>
              <h2 className='text-xl font-semibold'>{val.title}</h2>
              <h3 className='text-lg text-gray-700'>{val.type}</h3>
              <p className='text-green-600 text-lg font-bold'>{val.price}<b> DZD</b></p>
              <p className={`text-lg font-semibold ${val.status === 'close' ? 'text-red-600' : 'text-green-600'}`}>{val.status}</p>
            </div>
            <div className='flex justify-between items-center p-4 border-t'>
              <button className='bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300'>See more</button>
              <p className='flex items-center'>
                {val.likes} <span onClick={() => handleHeart(index)} className='ml-2 cursor-pointer'>
                  {heartStates[index] ? <FaHeart className='text-red-500' /> : <FaRegHeart />}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default CourseCard;
  