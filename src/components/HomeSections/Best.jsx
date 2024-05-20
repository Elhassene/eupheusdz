import React from 'react'
import img1 from '../../images/best1.jpg'
import img2 from '../../images/best2.jpg'
import img3 from '../../images/best3.jpg'
import img4 from '../../images/best4.jpg'

const Best = () => {
  return (
    <div className="py-7">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-12">
          The <span className="text-green-600">Best</span> Platform
        </h2>

        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-12">
          To Learn And Seek Knowledge
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <img src={img1} alt="Expert Instructors" className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h3 className="text-lg font-semibold">Expert Instructors</h3>
            <p className="text-gray-700 mt-2">Learn from industry experts with years of experience. Our instructors provide top-notch knowledge and practical skills to help you excel in your field.</p>
          </div>
          <div className="text-center">
            <img src={img2} alt="Enroll and Learn On-site" className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h3 className="text-lg font-semibold">Enroll and Learn On-site</h3>
            <p className="text-gray-700 mt-2">Join our in-person courses and gain practical experience at our dedicated learning centers. Benefit from face-to-face instruction and hands-on practice.</p>
          </div>
          <div className="text-center">
            <img src={img3} alt="Book Online Sessions" className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h3 className="text-lg font-semibold">Book Online Sessions</h3>
            <p className="text-gray-700 mt-2">Prefer learning online? Book live sessions with our expert instructors via Zoom. Enjoy the flexibility of learning from home with personalized guidance.</p>
          </div>
          <div className="text-center">
            <img src={img4} alt="Flexible Learning Options" className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h3 className="text-lg font-semibold">Flexible Learning Options</h3>
            <p className="text-gray-700 mt-2">Choose the learning method that suits you best. Whether on-site classes or online sessions, our platform offers the flexibility to fit your schedule and preferences.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Best
