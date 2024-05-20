import React from 'react'
import CourseCard from '../components/Courses/CourseCard'
import coursesCard from '../coursesCard'
const Courses = () => {
  return (
    <>
      <CourseCard coursesCard={coursesCard}/>
    </>
  )
}

export default Courses
