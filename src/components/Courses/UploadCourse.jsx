import React, { useContext, useState, useEffect } from 'react';
import { TokenContext } from '../../TokenContext';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { FaBook, FaMapMarkerAlt, FaClipboardList, FaDollarSign, FaCheckCircle, FaChevronDown, FaChevronUp, FaTimesCircle, FaLaptop, FaChalkboardTeacher } from 'react-icons/fa';
import Logo from '../../images/logo.png';

const UploadCourse = () => {

    const [title, setTitle] = useState('');
    const [field, setField] = useState("english");
    const [location, setLocation] = useState('');
    const [module, setModule] = useState('');
    const [price, setPrice] = useState('');
    const [status, setStatus] = useState("opened");
    const [studentCount, setStudentCount] = useState('');
    const [type, setType] = useState("online");
    const [description, setDescription] = useState('');



    const [showStatusDropdown, setShowStatusDropdown] = useState(false);
    const [showTypeDropdown, setShowTypeDropdown] = useState(false);
    const [showFieldDropdown, setShowFieldDropdown] = useState(false);

    const {token} = useContext(TokenContext);
    const [trigger, setTrigger] = useState(false);

    const handleAnnouncement = () =>{
        setTrigger(true)
    }

    const announcementUrl = `https://marine-dragonfly-e-learning-00af8488.koyeb.app/api/announcements`;

    const history = useHistory();
  

    useEffect(()=>{
        if(trigger && token){
          async function announceCourse () {
            try{
              const response = await axios.post(announcementUrl, {
                title: title,
                description: description,
                field: field,
                module: module,
                type: type,
                location: location,
                price: price,
                status: status,
                student_count: studentCount
              }, {
                headers: {
                  Authorization: `Bearer ${token}`
              }
              });
              console.log('announce successful', response.data)
              setTimeout(() => {
                history.push('/courses');
            }, 50);
            } catch(error){
              console.log('announcement failed', error)
            } finally{
              setTrigger(false);
              
            }
          }
          announceCourse()
        }
      }, [trigger, token, description, title, history, announcementUrl, price, location, module, status, studentCount, type, field])

      


  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    setShowStatusDropdown(false);
  }

  const handleTypeChange = (e) => {
    setType(e.target.value);
    setShowTypeDropdown(false);
  }

  const handleFieldChange = (e) => {
    setField(e.target.value);
    setShowFieldDropdown(false);
  }

  return (
    <div className="flex flex-col items-center w-full p-4">
      <img src={Logo} alt='logo' className="max-w-full h-auto mb-4" />
      <h1 className="text-xl font-bold text-gray-700 text-center mb-4">ANNOUNCE A NEW COURSE</h1>

      <div className="mb-4 relative w-full">
        <label className="block text-gray-700 mb-1">Course Title:</label>
        <div className="flex items-center border rounded px-3 py-2 focus-within:ring-2 focus-within:ring-green-500">
          <FaBook className="text-green-500 mr-2" />
          <input
            className="flex-1 outline-none"
            type="text"
            placeholder="Enter course title"
            value={title}
            onChange={((e)=>setTitle(e.target.value))}
          />
        </div>
      </div>

      <div className="mb-4 relative w-full">
        <label className="block text-gray-700 mb-1">Field:</label>
        <div className="flex items-center border rounded px-3 py-2 focus-within:ring-2 focus-within:ring-green-500">
          <FaClipboardList className="text-green-500 mr-2" />
          <div className="relative inline-block w-full">
            <button
              id="statusDropdown"
              className="flex-1 custom-select outline-none focus:ring-0 flex justify-between"
              onClick={() => setShowFieldDropdown(!showFieldDropdown)}
            >
              {field === "english" ? "english" : field === "Closed" ? "Closed" : field === "computer science" ? "computer science" : field === "mathematics" ? "mathematics" : "other"}
              {showFieldDropdown ? (
                <FaChevronUp className="ml-auto text-green-500" style={{ position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)' }} />
              ) : (
                <FaChevronDown className="ml-auto text-green-500" style={{ position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)' }} />
              )}
            </button>
            {showFieldDropdown && (
              <div className="z-10 absolute left-0 mt-3 w-full origin-top-right bg-white divide-y divide-gray-100 rounded-lg shadow-md">
                <button value="english" onClick={handleFieldChange} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  english
                </button>
                <button value="computer science" onClick={handleFieldChange} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  computer science
                </button>
                <button value="mathematics" onClick={handleFieldChange} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  mathematics
                </button>
                <button value="other" onClick={handleFieldChange} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  other
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mb-4 relative w-full">
        <label className="block text-gray-700 mb-1">Location:</label>
        <div className="flex items-center border rounded px-3 py-2 focus-within:ring-2 focus-within:ring-green-500">
          <FaMapMarkerAlt className="text-green-500 mr-2" />
          <input
            className="flex-1 outline-none"
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={((e)=>setLocation(e.target.value))}
          />
        </div>
      </div>

      <div className="mb-4 relative w-full">
        <label className="block text-gray-700 mb-1">Module:</label>
        <div className="flex items-center border rounded px-3 py-2 focus-within:ring-2 focus-within:ring-green-500">
          <FaClipboardList className="text-green-500 mr-2" />
          <input
            className="flex-1 outline-none"
            type="text"
            placeholder="Enter module"
            value={module}
            onChange={((e)=>setModule(e.target.value))}
          />
        </div>
      </div>

      <div className="mb-4 relative w-full">
        <label className="block text-gray-700 mb-1">Price (DZD):</label>
        <div className="flex items-center border rounded px-3 py-2 focus-within:ring-2 focus-within:ring-green-500">
          <FaDollarSign className="text-green-500 mr-2" />
          <input
            className="flex-1 outline-none"
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={((e)=>setPrice(e.target.value))}
          />
        </div>
      </div>

      <div className="mb-4 relative w-full">
        <label className="block text-gray-700 mb-1">Status:</label>
        <div className="flex items-center border rounded px-3 py-2 focus-within:ring-2 focus-within:ring-green-500">
          {status === "opened"? <FaCheckCircle className="text-green-500 mr-2" /> : <FaTimesCircle className="text-red-500 mr-2" />}
          <div className="relative inline-block w-full">
            <button
              id="statusDropdown"
              className="flex-1 custom-select outline-none focus:ring-0 flex justify-between"
              onClick={() => setShowStatusDropdown(!showStatusDropdown)}
            >
              {status === "opened" ? "Opened" : "Closed"}
              {showStatusDropdown ? (
                <FaChevronUp className="ml-auto text-green-500" style={{ position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)' }} />
              ) : (
                <FaChevronDown className="ml-auto text-green-500" style={{ position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)' }} />
              )}
            </button>
            {showStatusDropdown && (
              <div className="z-10 absolute left-0 mt-3 w-full origin-top-right bg-white divide-y divide-gray-100 rounded-lg shadow-md">
                <button value="opened" onClick={handleStatusChange} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  Opened
                </button>
                <button value="closed" onClick={handleStatusChange} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  Closed
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mb-4 relative w-full">
        <label className="block text-gray-700 mb-1">Student Count:</label>
        <div className="flex items-center border rounded px-3 py-2 focus-within:ring-2 focus-within:ring-green-500">
          <FaClipboardList className="text-green-500 mr-2" />
          <input
            className="flex-1 outline-none"
            type="number"
            placeholder="Enter student count"
            value={studentCount}
            onChange={((e)=>setStudentCount(e.target.value))}
          />
        </div>
      </div>

      <div className="mb-4 relative w-full">
        <label className="block text-gray-700 mb-1">Type:</label>
        <div className="flex items-center border rounded px-3 py-2 focus-within:ring-2 focus-within:ring-green-500">
          {type === 'online'? <FaLaptop className="text-green-500 mr-2" /> : <FaChalkboardTeacher className="text-green-500 mr-2" />}
          <div className="relative inline-block w-full">
            <button
              id="typeDropdown"
              className="flex-1 custom-select outline-none focus:ring-0 flex justify-between"
              onClick={() => setShowTypeDropdown(!showTypeDropdown)}
            >
              {type === "online" ? "Online" : "offline"}
              {showTypeDropdown ? (
                <FaChevronUp className="ml-auto text-green-500" style={{ position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)' }} />
              ) : (
                <FaChevronDown className="ml-auto text-green-500" style={{ position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)' }} />
              )}
            </button>
            {showTypeDropdown && (
              <div className="z-10 absolute left-0 mt-3 w-full origin-top-right bg-white divide-y divide-gray-100 rounded-lg shadow-md">
                <button value="online" onClick={handleTypeChange} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  Online
                </button>
                <button value="offline" onClick={handleTypeChange} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  Offline
                </button>
              </div>
            )}
          </div>
        </div>
      </div>


      <div className="mb-4 relative w-full">
        <label className="block text-gray-700 mb-1">Description:</label>
        <div className="flex flex-col border rounded px-3 py-2 focus-within:ring-2 focus-within:ring-green-500">
          <textarea
            className="flex-1 outline-none"
            placeholder="Enter course description"
            rows="4"
            value={description}
            onChange={((e)=>setDescription(e.target.value))}
          />
        </div>
      </div>

      <button
        className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-600"
        onClick={handleAnnouncement}
      >
        Submit
      </button>
    </div>
  );
}

export default UploadCourse;