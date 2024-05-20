import React from 'react';
import Hero from '../components/HomeSections/Hero';
import Best from '../components/HomeSections/Best';
import CourseSlider from '../components/Courses/CourseSlider';
import coursesCard from '../coursesCard';
import News from '../components/newsletter/News';
import GetApp from '../components/HomeSections/GetApp';

const Home = () => {
  return (
    <>
      <Hero />
      <Best />
      <CourseSlider coursesCard={coursesCard} />
      <News/>
      <GetApp/>

    </>
  );
};

export default Home;
