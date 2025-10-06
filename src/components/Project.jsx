import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Project.css';
import rtfinsurence from '../assets/rtf-insurence.PNG';
import geminiClone from '../assets/Gemini-clone.PNG';
import ecommerce from '../assets/e-commerce.PNG'
import foodpage from '../assets/food-page.PNG'
import quiz from '../assets/quiz.PNG'


const projects = [
  {
    title: 'RTF Insurance Landing Page',
    info: 'A modern insurance landing page built with React and Bootstrap. Features responsive design, animated hero section, and call-to-action buttons. Live at rtf-insurence.netlify.app.',
    github: 'https://github.com/avsesh/portfolio',
    live: 'https://rtf-insurence.netlify.app/',
    img: rtfinsurence,
  },
  {
    title: 'Google Gemini Clone',
    info: 'A Gemini AI clone built with React. Includes chat UI, prompt suggestions, and Google-style design. Live at gemini-clone-avsesh.netlify.app.',
    github: 'https://github.com/Avsesh-shakya/gemini-clone',
    live: 'https://gemini-clone-avsesh.netlify.app',
    img: geminiClone,
  },
  
  {
    title: 'E-commerce Store',
    info: 'A complete e-commerce store built with React, Context API, and Stripe. Includes product catalog, cart, and checkout. Live at e-commerce-website-avsesh.netlify.app.',
    github: 'https://github.com/Avsesh-shakya/E-Commerce',
    live: 'https://e-commerce-website-avsesh.netlify.app/',
    img: ecommerce,
  },
  {
    title: 'Online Food Service Landing Page',
    info: 'A landing page for online food delivery service. Built with React and Bootstrap, featuring menu, order form, and testimonials. Live at landingpageonline.netlify.app.',
    github: 'https://github.com/Avsesh-shakya/Online_Food_Delivery_Webside',
    live: 'https://landingpageonline.netlify.app/',
    img: foodpage,
  },
  {
    title: 'Online Quiz Test',
    info: "Online quiz tests, particularly those using Multiple Choice Questions (MCQs), They function by presenting a question and a list of options, requiring test-takers to select the correct answer.",
    github: 'https://github.com/Avsesh-shakya/Quiz-app',
    live: 'https://latestquizapp.netlify.app/',
    img: quiz
  }
];


const Project = () => {
  return (
    <div style={{ background: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 50%, #fbc2eb 100%)', minHeight: '70vh', padding: '40px 0' }}>
      <Container>
        <h2 style={{ fontWeight: 700, fontSize: '2rem', marginBottom: '30px', fontFamily: 'Poppins, Inter, sans-serif', textAlign: 'center' }}>Projects</h2>
        {Array.from({ length: Math.ceil(projects.length / 3) }).map((_, rowIdx) => (
          <Row key={rowIdx} className="mb-4 justify-content-center">
            {projects.slice(rowIdx * 3, rowIdx * 3 + 3).map((project, idx) => (
              <Col md={4} xs={12} key={project.title} className="mb-3">
                <Card className="project-card move-left" style={{ borderRadius: '14px', boxShadow: '0 2px 12px rgba(99,102,241,0.07)', transition: 'transform 0.3s, box-shadow 0.3s', overflow: 'hidden' }}>
                  <Card.Img variant="top" src={project.img} alt={project.title} style={{ height: '180px', objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title style={{ fontWeight: 700, fontSize: '1.2rem', fontFamily: 'Poppins, Inter, sans-serif' }}>{project.title}</Card.Title>
                    <Card.Text className="project-info" style={{ fontSize: '1rem', color: '#444', fontFamily: 'Inter, Poppins, sans-serif', minHeight: '48px', maxHeight: '48px', overflow: 'hidden', transition: 'max-height 0.3s' }}>
                      {project.info}
                    </Card.Text>
                    <div className="d-flex justify-content-between mt-3">
                      <Button variant="outline-dark" href={project.github} target="_blank" style={{ fontWeight: 500, borderRadius: '6px' }}>GitHub</Button>
                      <Button variant="primary" href={project.live} target="_blank" style={{ fontWeight: 500, borderRadius: '6px' }}>Live Demo</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default Project;
