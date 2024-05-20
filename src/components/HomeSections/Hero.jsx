import React from 'react'
import heroimg from '../../images/Hero.png'

const Hero = () => {
  return (
    <>
      <div className="h-full  py-12 mt-20">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-blue-900">
              Up Your <span className="text-green-600">Skills</span> To <span className="text-green-600">Advance</span> Your <span className="text-green-600">Career</span> Path
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 mb-8">
              Welcome To Our Innovative E-Learning Website! Explore Engaging University Courses, Expert Instructors. Empower Yourself With Knowledge And Skills Anytime, Anywhere, And Unleash Your Full Potential Today!
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="bg-green-500 text-white py-3 px-6 rounded-lg mr-4 hover:bg-green-600 transition duration-300">Explore Courses</button>
              <button className="bg-white border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300">Get Started</button>
            </div>
          </div>
          <div className="relative mt-12 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
            <img src={heroimg} alt="Hero" className="rounded-lg w-full h-auto max-h-[500px] " />
          </div>
        </div>
        <div className="mt-12 text-center py-8">
          <div className="flex justify-center space-x-8 text-xl">
            <div>
              <span className="font-bold text-blue-900 text-3xl">2000+</span> <span className="text-gradient text-2xl font-bold">Student Active</span>
            </div>
            <div>
              <span className="font-bold text-blue-900 text-3xl">500+</span> <span className="text-gradient text-2xl font-bold">Courses</span>
            </div>
            <div>
              <span className="font-bold text-blue-900 text-3xl">100+</span> <span className="text-gradient text-2xl font-bold">Teachers</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
