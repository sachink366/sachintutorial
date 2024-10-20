import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../assets/logo-f.jpg';
import './NavbarComponent.css';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import CourseSection from './CourseSection'; // Import CourseSection component

const NavbarComponent = () => {
  const [visibleSection, setVisibleSection] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    // Ensure we're on the Courses section when searching
    setVisibleSection('courses');
  };

  // Function to scroll to the specific section
  const scrollToSection = (section) => {
    setVisibleSection(section);
  };

  return (
    <>
      <Navbar bg="white" variant="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home" onClick={() => scrollToSection('home')}>
            <img src={logo} width="180" height="50" alt="Sachin Tutorials logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => scrollToSection('home')}>Home</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('about')}>About</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('courses')}>Courses</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('contact')}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          {/* Search Bar */}
          <Form className="d-flex ms-3 me-auto" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Search Courses"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
            />
            <Button variant="outline-primary" type="submit">Search</Button>
          </Form>
        </Container>
      </Navbar>

      {/* Rendering sections based on the state */}
      {visibleSection === 'about' && <AboutSection />}
      {visibleSection === 'courses' && <CourseSection searchQuery={searchQuery} />} {/* Pass searchQuery here */}
      {visibleSection === 'contact' && <ContactSection />}
    </>
  );
};

export default NavbarComponent;
