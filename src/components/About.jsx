import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import image from '../assets/about-animation.png'
import AboutEduExp from './AboutEduExp';


const About = () => {
  return (
    <>
  <div style={{ background: 'transparent', minHeight: '70vh', display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center', padding: '40px 0' }}>
      <Container >

        <Row className="align-items-center ">
          {/* Left Side: Experience / Education Snapshot */}
           <Col md={5} style={{ marginTop: "auto" }}>
            <img src={image} alt="Developer" style={{ width: '200px', borderRadius: '20%', boxShadow: '0 8px 32px rgba(99,102,241,0.15)', marginLeft: '100px', background: 'transparent' }} />

            
            </Col> 
    
          {/* Right Side: Introduction / Identity & Professional Summary */}
          <Col md={7}>
            <h2 style={{ fontWeight: 700, fontSize: '2rem', marginBottom: '10px', fontFamily: 'Poppins, Inter, sans-serif' }}>Avsesh Shakya</h2>
            <h4 style={{ fontWeight: 500, color: '#6366f1', marginBottom: '16px', fontFamily: 'Poppins, Inter, sans-serif' }}>
              Frontend Web Developer | React.js Developer
            </h4>
            <div style={{ fontSize: '1.08rem', color: '#444', fontFamily: 'Inter, Poppins, sans-serif', lineHeight: '1.7', maxHeight: '480px', overflowY: 'auto', background: 'rgba(255,255,255,0.7)', borderRadius: '12px', padding: '18px', boxShadow: '0 2px 12px rgba(99,102,241,0.07)' }}>
              I’m a frontend developer passionate about building responsive, user-friendly web applications using React, Tailwind, and modern JavaScript.<br /><br />
              My expertise includes:
              <ul style={{ marginLeft: '18px', marginBottom: '0' }}>
                <li>Developing scalable React.js applications</li>
                <li>Implementing modern UI/UX with Tailwind CSS and React Bootstrap</li>
                <li>Integrating RESTful APIs and state management</li>
                <li>Optimizing performance and accessibility</li>
                <li>Collaborating in agile teams and code reviews</li>
                <li>Version control with Git & GitHub</li>
                <li>Deploying apps with Vercel/Netlify</li>
                <li>Continuous learning of new frontend technologies</li>
              </ul>
              <br />
              Looking for opportunities to collaborate on frontend projects — feel free to connect!
            </div>
          </Col>
         
          
        </Row>
      </Container>
    </div>
      <AboutEduExp/>

      
    </>
  );
};

export default About;
