import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';


const Home = () => {
  const roles = [
    {
      text: 'Frontend Developer ',
      color: 'rgb(52, 152, 219)'
    },
    {
      text: 'React Developer ',
      color: 'rgb(76, 175, 80)'
    },
    {
      text: 'MERN Stack Developer ',
      color: 'rgb(155, 89, 182)'
    }
  ];
  const nevigate = useNavigate()

  const showProject = () => {
    nevigate('/projects')
  }

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayedText.length < roles[roleIndex].text.length) {
        timeout = setTimeout(() => {
          setDisplayedText(roles[roleIndex].text.slice(0, displayedText.length + 1));
        }, 80);
      } else {
        setTyping(false);
        // Show each role for a few seconds before switching
        timeout = setTimeout(() => {
          setTyping(true);
          setDisplayedText('');
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }

  }, [displayedText, typing, roleIndex, roles]);

  

  return (
    <div>
    <div style={{
      background: 'linear-gradient(90deg, #f8fafc 60%, #e0e7ff 100%)',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 0'
    }}>

      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 style={{ fontWeight: 700, fontSize: '2.5rem', marginBottom: '18px', fontFamily: 'Poppins, Inter, sans-serif' }}>
              Hi, I’m Avsesh Shakya
            </h1>
            <h3 style={{ fontWeight: 500, color: roles[roleIndex].color, marginBottom: '16px', fontFamily: 'Poppins, Inter, sans-serif', minHeight: '2.2rem', transition: 'color 0.3s' }}>
              {displayedText}
              <span style={{ color: roles[roleIndex].color, fontWeight: 700 }}>|</span>
            </h3>
            <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: '28px', fontFamily: 'Inter, Poppins, sans-serif' }}>
              Passionate about building beautiful, responsive web interfaces. Experienced in React, JavaScript, and modern frontend technologies. I love turning ideas into reality and delivering seamless user experiences.
            </p>
            <Button variant="primary" style={{ marginRight: '18px', fontWeight: 500 }} onClick={showProject}>View Projects</Button>
            <Button variant="outline-dark" style={{ fontWeight: 500 }}>Download Resume</Button>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <img src="https://img.freepik.com/premium-photo/adorable-male-manager-character-cute-boy-supervisor-illustration-cartoon-office-manager-young-pro_980716-79642.jpg" alt="Developer" style={{ width: '350px', borderRadius: '20%', boxShadow: '0 8px 32px rgba(99,102,241,0.15)', justifyContent: 'right',marginTop:'30px' }} />
          </Col>
        </Row>

      </Container>
      </div>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  );
};

export default Home
