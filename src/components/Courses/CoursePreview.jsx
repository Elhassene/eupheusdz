import {React, useContext, useEffect, useState} from 'react';
import { TokenContext } from '../../TokenContext';
import { useLocation } from 'react-router-dom';
import { FaReply, FaUserGraduate, FaPaperPlane, FaFileAlt, FaHeart, FaTags, FaMapMarkerAlt, FaCalendarAlt, FaCommentAlt, FaUserFriends, FaAward } from 'react-icons/fa';
import axios from 'axios';
import { UserContext } from '../../UserContext';

const CoursePreview = () => {

  const location = useLocation();
  const courseData = location.state.course;


  
  const {info} = useContext(UserContext)

  const [existingComments, setExistingComments] = useState([]);
  const [comment, setComment] = useState('');
  const [reply, setReply] = useState('');
  const [trigger, setTrigger] = useState(false);
  const [replyTrigger, setReplyTrigger] = useState(false);
  const {token} = useContext(TokenContext);
  const handleComment = ()=>{
    setTrigger(true);
  }

  const commentUrl = `https://marine-dragonfly-e-learning-00af8488.koyeb.app/api/announcements/${courseData.id}/comments`;
  const replyCommentUrl = `https://marine-dragonfly-e-learning-00af8488.koyeb.app/api/announcements/${courseData.id}/${comment.id}/replies`;
  const viewcommentUrl = `https://marine-dragonfly-e-learning-00af8488.koyeb.app/api/announcements/${courseData.id}`;

  useEffect(()=>{
    if(trigger && token){
      async function getComment () {
        try{
          const response = await axios.post(commentUrl, {
            comment: comment
          }, {
            headers: {
              Authorization: `Bearer ${token}`
          }
          });
          console.log('comment successful', response.data)
        } catch(error){
          console.log('comment failed', error)
        } finally{
          setTrigger(false);
          setComment('');
        }
      }
      getComment()
    }
  }, [comment, trigger, token, info, courseData, commentUrl])

  useEffect(()=>{
    if(replyTrigger && token){
      async function postReply () {
        try{
          const response = await axios.post(replyCommentUrl, {
            reply : reply
          }, {
            headers: {
              Authorization: `Bearer ${token}`
          }
          });
          console.log('reply successful', response.data)
        } catch(error){
          console.log('reply failed', error)
        } finally{
          setReplyTrigger(false);
          setReply('');
        }
      }
      postReply()
    }
  }, [reply, token, replyCommentUrl, replyTrigger])

  useEffect(()=>{
      async function getCommentView () {
        try{
          const response = await axios.get(viewcommentUrl, {
            headers: {
              Authorization: `Bearer ${token}`
          }
          });
          setExistingComments(response.data.comment);
          console.log('all comments', response.data.comment);
        } catch(error){
          console.log('getting all comments failed', error)
        } finally{
          setTrigger(false)
        }
      }
      getCommentView()
  }, [trigger, token, viewcommentUrl])

  

  const storagerUrl = 'https://marine-dragonfly-e-learning-00af8488.koyeb.app/storage/';

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };


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
              value={comment}
              onChange={((e)=>setComment(e.target.value))}
            />
            <FaPaperPlane className="absolute top-2 right-2 cursor-pointer text-gray-500" onClick={handleComment}/>
          </div>
        </div>
        <div>
        {existingComments && existingComments.map((comment) => (
        <div key={comment.id} className="mb-4 p-4 border rounded-lg">
          <div className="flex items-center mb-2">
            <div className="ml-2">
              <h4 className="font-semibold">User ID: {comment.user_id}</h4>
              <p className="text-sm text-gray-600">{new Date(comment.created_at).toLocaleString()}</p>
            </div>
          </div>
          <p className="text-gray-800 mb-2">{comment.comment}</p>
          <div className="flex items-center">
          </div>
          <div className="mt-2">
            <div className="relative">
              <input
                type="text"
                className="border rounded-lg p-2 w-full"
                placeholder="Write a reply..."
                value={reply}
                onChange={((e)=>setReply(e.target.value))}
              />
              <FaReply className="absolute top-2 right-2 cursor-pointer text-gray-500" />
            </div>
          </div>
          {comment.reply && comment.reply.length > 0 && (
            <div className="ml-6 mt-4">
              {comment.reply.map((reply) => (
                <div key={reply.id} className="mb-2 p-2 border rounded-lg bg-gray-100">
                  <div className="flex items-center mb-1">
                    <div className="ml-2">
                      <h5 className="font-semibold">User ID: {reply.user_id}</h5>
                      <p className="text-sm text-gray-600">{new Date(reply.created_at).toLocaleString()}</p>
                    </div>
                  </div>
                  <p className="text-gray-800">{reply.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
        </div>
      </div>
    </div>
  );
};

export default CoursePreview;
