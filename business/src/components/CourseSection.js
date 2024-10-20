import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './CoursesSection.css';

// Import images from assets folder
import pythonImage from '../assets/python.jpg';
import cppImage from '../assets/Cpp.jpg';
import javaImage from '../assets/java.png';
import AIImage from '../assets/Artificial.png';
import MLImage from '../assets/ML.jpg';
import DSImage from '../assets/DataScience.webp';

// Courses data with images and URLs
const courses = [
  {
    title: 'Python Programming',
    description: 'Master Python from basics to advanced levels. It is one of the most demanded programming languages.',
    imageUrl: pythonImage,
    url: 'https://www.learnpython.org/'
  },
  {
    title: 'C++ Programming',
    description: 'Learn C++ with hands-on projects and examples.',
    imageUrl: cppImage,
    url: 'https://www.learncpp.com/'
  },
  {
    title: 'Java Programming',
    description: 'Java is a programming language and computing platform that is used to create a variety of applications and services.',
    imageUrl: javaImage,
    url: 'https://www.codecademy.com/learn/learn-java'
  },
  {
    title: 'Artificial Intelligence',
    description: 'Artificial intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems.',
    imageUrl: AIImage,
    url: 'https://www.coursera.org/learn/introduction-to-ai'
  },
  {
    title: 'Machine Learning',
    description: 'Machine learning (ML) is a branch of computer science that focuses on using data and algorithms to enable AI.',
    imageUrl: MLImage,
    url: 'https://developers.google.com/machine-learning/crash-course'
  },
  {
    title: 'Data Science',
    description: 'Data science is a multidisciplinary field that uses data to create insights and strategies for businesses and industries.',
    imageUrl: DSImage,
    url: 'https://sites.google.com/student.onlinedegree.iitm.ac.in/datasciencenotes/home'
  }
];

const CoursesSection = ({ searchQuery }) => {
  // Filter the courses based on the search query
  const filteredCourses = courses.filter(course => {
    const titleMatch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    const descriptionMatch = course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return titleMatch || descriptionMatch;
  });

  return (
    <section id="courses" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Our Courses</h2>
        <Row>
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <Col md={4} key={index} className="mb-3">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={course.imageUrl} alt={`${course.title} Image`} />
                  <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Text>{course.description}</Card.Text>
                    {/* Link to course URL */}
                    <Button variant="primary" href={course.url} target="_blank">
                      View More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Col>
              <p>No courses match your search query.</p>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default CoursesSection;
