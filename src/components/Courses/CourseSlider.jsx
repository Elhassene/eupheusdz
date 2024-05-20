import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';  
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import './custom-swiper.css'; // Import custom CSS for pagination

const CourseSlider = ({ coursesCard }) => {
  const [heartStates, setHeartStates] = useState(coursesCard.slice(0, 8).map(() => false));

  const handleHeart = (index) => {
    const updatedHeartStates = [...heartStates];
    updatedHeartStates[index] = !updatedHeartStates[index];
    setHeartStates(updatedHeartStates);
  };

  return (
    <div className="p-8 bg-gradient-to-r from-green-100 to-blue-100 h-screen">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-2">Most Popular Courses</h2>
        <p className="text-lg text-gray-700">
          Explore our top-rated courses, celebrated for their engaging content and real-world applications.
        </p>
        <p className="text-lg text-gray-700">
          Join thousands of learners on their journey to success.
        </p>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 3, spaceBetween: 50 },
        }}
        navigation={false} // Hide arrows
      >
        {coursesCard.slice(0, 5).map((val, index) => (
          <SwiperSlide key={val.id}>
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2">
              <div className="bg-green-500 text-blue-800 text-center py-6 rounded-t-lg h-40">
                <h3 className="text-2xl font-bold pt-8">EUPHEUS</h3>
              </div>
              <div className="flex items-center bg-gray-200 p-4">
                <img className="w-16 h-16 rounded-full" src="https://img.freepik.com/photos-gratuite/homme-affaires-costume-noir-tenant-sa-liste-taches-souriant_114579-18998.jpg?t=st=1714486980~exp=1714490580~hmac=196e978728ca4acf2d7374bb5bb6e65b5eae0727bc14323e06774c998762d3d4&w=826" alt="Teacher" />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Ouazir Elhassene</h4>
                  <h5 className="text-sm text-gray-600">Teacher</h5>
                </div>
                <div className="flex ml-auto">
                  {Array.from({ length: val.stars }, (_, i) => (
                    <FaStar key={i} className="text-yellow-500 text-lg" />
                  ))}
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold">{val.title}</h2>
                <h3 className="text-lg text-gray-700">{val.type}</h3>
                <p className="text-green-600 text-lg font-bold">{val.price}<b> DZD</b></p>
                <p className={`text-lg font-semibold ${val.status === 'close' ? 'text-red-600' : 'text-green-600'}`}>{val.status}</p>
              </div>
              <div className="flex justify-between items-center p-4 border-t">
                <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">See more</button>
                <p className="flex items-center">
                  {val.likes} <span onClick={() => handleHeart(index)} className="ml-2 cursor-pointer">
                    {heartStates[index] ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination-custom mt-8"></div>
    </div>
  );
};

export default CourseSlider;
