import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaRegHeart, FaReply, FaUserGraduate, FaPaperPlane, FaFileAlt, FaHeart, FaTags, FaMapMarkerAlt, FaCalendarAlt, FaCommentAlt, FaUserFriends, FaAward } from 'react-icons/fa';

const CoursePreview = () => {
  const storagerUrl = 'https://marine-dragonfly-e-learning-00af8488.koyeb.app/storage/';

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 to month because it starts from 0
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const location = useLocation();
  const courseData = location.state.course;

  return (
    <div className="p-8 mt-20 bg-gray-200">
      <div className="mb-10 bg-white rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-3">{courseData.title}</h2>
        <div className="grid grid-cols-2 gap-4"></div>
        <div className="flex items-center mt-4">
          <img
            className="w-16 h-16 rounded-full"
            src={`${storagerUrl}${courseData.user.profile.avatar_url}`}
            alt="Teacher"
          />
          <div className="ml-4">
            <h4 className="text-lg font-semibold">{courseData.user.name}</h4>
            <h5 className="text-sm text-gray-600">Teacher</h5>
          </div>
        </div>
      </div>

      <div className="mb-8 bg-white rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">Description</h3>
        <div className="flex items-start">
          <FaFileAlt className="text-green-500 mr-2 flex-shrink-0 text-lg mt-4 md:mt-1" />
          <p className="text-lg text-gray-600">{courseData.description}</p>
        </div>
      </div>

      <div className="mb-8 bg-white rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">Course Information</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <FaUserGraduate className="text-blue-500 mr-2 text-lg" />
            <p className="text-lg text-gray-600">{courseData.field}</p>
          </div>
          <div className="flex items-center">
            <FaCalendarAlt className="text-blue-500 mr-2 text-lg" />
            <p className="text-lg text-gray-600">{formatDate(courseData.created_at)}</p>
          </div>
          <div className="flex items-center">
            <FaAward className="text-blue-500 mr-2 text-lg" />
            <p className="text-lg text-gray-600">{courseData.module}</p>
          </div>
          <div className="flex items-center">
            <FaTags className="text-blue-500 mr-2 text-lg" />
            <p className="text-lg text-gray-600">{courseData.price} DZD</p>
          </div>
          <div className="flex items-center">
            <FaTags className="text-blue-500 mr-2 text-lg" />
            <p className="text-lg text-gray-600">{courseData.type}</p>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-blue-500 mr-2 text-lg" />
            <p className="text-lg text-gray-600">{courseData.location}</p>
          </div>
        </div>
      </div>

      <div className="mb-8 bg-white rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">Engagement</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <FaUserFriends className="text-green-500 mr-2 text-lg" />
            <p className="text-lg text-gray-600">Enroll Count: {courseData.enroll_count}</p>
          </div>
          <div className="flex items-center">
            <FaUserGraduate className="text-green-500 mr-2 text-lg" />
            <p className="text-lg text-gray-600">Student Count: {courseData.student_count}</p>
          </div>
          <div className="flex items-center">
            <FaCommentAlt className="text-green-500 mr-2 text-lg" />
            <p className="text-lg text-gray-600">Comment Count: {courseData.comment_count}</p>
          </div>
          <div className="flex items-center">
            <FaHeart className="text-red-600 mr-2 text-lg" />
            <p className="text-lg text-gray-600">Like Count: {courseData.like_count}</p>
          </div>
        </div>
      </div>

      <button className="bg-green-500 text-white py-3 px-6 rounded-lg mx-auto block">
        Enroll Now
      </button>

      <div className="mt-8 bg-white rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Comments</h3>
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              className="border rounded-lg p-2 w-full pr-10"
              placeholder="Write a comment..."
            />
            <FaPaperPlane className="absolute top-2 right-2 cursor-pointer text-gray-500" />
          </div>
        </div>
        <div>
          {courseData.comments && courseData.comments.map((comment) => (
            <div key={comment.id} className="mb-4 p-4 border rounded-lg">
              <div className="flex items-center mb-2">
                <div className="ml-2">
                  <h4 className="font-semibold">{comment.user.name}</h4>
                  <p className="text-sm text-gray-600">{new Date(comment.created_at).toLocaleString()}</p>
                </div>
              </div>
              <p className="text-gray-800 mb-2">{comment.text}</p>
              <div className="flex items-center">
                <FaRegHeart className="cursor-pointer" />
                <span className="ml-2">{comment.like_count}</span>
                <FaReply className="cursor-pointer ml-4" />
              </div>
              <div className="mt-2">
                <div className="relative">
                  <input
                    type="text"
                    className="border rounded-lg p-2 w-full"
                    placeholder="Write a reply..."
                  />
                  <FaPaperPlane className="absolute top-2 right-2 cursor-pointer text-gray-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursePreview;
