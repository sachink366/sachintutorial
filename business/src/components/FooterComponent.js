import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import sachinImage from '../assets/sachinprofile.jpeg'; // Importing the image from assets

const Footer = () => {
  return (
    <footer className="py-4 bg-dark text-light">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <img
              src={sachinImage} // Using the imported image
              alt="Sachin"
              className="rounded-circle me-2"
              style={{ width: '80px', height: '80px' }} // Adjust size if needed
            />
            <span className="h3">Sachin Tutorial</span>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="https://facebook.com" className="text-light me-3">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="https://twitter.com" className="text-light me-3">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://instagram.com" className="text-light me-3">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://linkedin.com" className="text-light">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </Col>
        </Row>
        <Row className="mt- 0">
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Sachin Tutorial. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
