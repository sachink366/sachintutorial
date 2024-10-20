import React, { useState } from 'react';
import NavbarComponent from './components/NavbarComponent'; // Ensure this import is correct
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import CourseSection from './components/CourseSection'; // Make sure the path is correct
import FooterComponent from './components/FooterComponent';
import CarouselComponent from './components/CarouselComponent';

const App = () => {
  // State to manage search query
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <NavbarComponent setSearchQuery={setSearchQuery} />
      <CarouselComponent/>
      <CourseSection searchQuery={searchQuery} />
      <AboutSection />
      <TestimonialsSection />
      <FooterComponent />
    </>
  );
};

export default App;
