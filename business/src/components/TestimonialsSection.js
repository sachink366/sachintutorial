// src/components/TestimonialsSection.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Testimonial.css';

const testimonials = [
  { name: 'Ritesh Tiwari', text: 'The tutorials are said to provide a nurturing and supportive educational environment that prioritizes individual attention, qualified teaching staff, and consistent support throughout the academic journey.' },
  { name: 'Anshul Yadav', text: 'I do not have words to thank this man, I am really grateful to have this channel and website in my daily routine. If you are a mere beginner, then you can trust this guy and can put your time into his content. I can assure you that it will be worth it.' },
  { name: 'Pranjul Patel', text: 'This is the only platform where i found the easy way to learn languages and i just wants to thanks for providing all study material on latest programming languages .' }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-5">
      <Container>
        <h2 className="text-center mb-4">What Our Students Say</h2>
        <Row>
          {testimonials.map((testimonial, index) => (
            <Col md={4} key={index} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Text>"{testimonial.text}"</Card.Text>
                  <Card.Footer className="text-end">- {testimonial.name}</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
