import React from 'react';
import './CarouselComponent.css'; // Make sure to adjust the path

import { Carousel } from 'react-bootstrap';
import image1 from '../assets/lap2.jpg'; // Replace with your image paths
import image2 from '../assets/lap1.jpg'; // Replace with your image paths
import image3 from '../assets/lap3.jpg'; // Replace with your image paths

const CarouselComponent = () => {
  return (
    <Carousel interval={3000} pause="hover"> {/* Moves every 3 seconds */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome To Sachin Tutorials</h3>
          <p>Technology is best when it brings people together.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Welcome To Sachin Tutorials</h3>
          <p>Digital design is like painting, except the paint never dries.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Welcome To Sachin Tutorials</h3>
          <p>Innovation is the outcome of a habit, not a random act.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
