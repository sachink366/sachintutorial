// src/components/AboutSection.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import './AboutSection.css';
import myImage from '../assets/about-img.jpg'; // Import image from assets

const introdata = {
  title: "Welcome to Sachin Tutorials",
  animated: {
    first: "Learn Python Programming",
    second: "Learn Java Programming",
    third: "Master JavaScript",
    fourth: "Build amazing projects",
    fifth: "Unlock your coding potential",
  },
  description: " At Sachin Tutorials, we believe in empowering students with quality education and personalized learning experiences. With a passion for teaching and years of expertise, our goal is to guide every student toward success in their academic journey.Join us today and unlock your true potential!",
};

const AboutSection = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <Row>
          <Col md={6}>
            <h2>{introdata.title}</h2>
            <h3 className="animated-text">
              <Typewriter
                options={{
                  strings: [
                    introdata.animated.first,
                    introdata.animated.second,
                    introdata.animated.third,
                    introdata.animated.fourth,
                    introdata.animated.fifth,
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                }}
              />
            </h3>
            <p>{introdata.description}</p>
          </Col>
          <Col md={6}>
            <div className="image-container">
              <img 
                src={myImage} 
                alt="Sachin Tutorials" 
                className="img-fluid zoom-image" 
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
