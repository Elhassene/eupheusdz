import React from 'react'
import sideImg from '../images/best2.jpg'
import UploadCourse from '../components/Courses/UploadCourse';

const AnnoncementPage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row-reverse w-full max-w-4xl">
            <div className="hidden md:block md:w-1/2">
              <img src={sideImg} alt="Side" className="object-cover w-full h-full" />
            </div>
            <div className="md:w-1/2 p-6 flex items-center justify-center w-full">
              <UploadCourse />
            </div>
          </div>
        </div>
      );
}

export default AnnoncementPage
