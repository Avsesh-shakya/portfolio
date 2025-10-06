import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
  <footer style={{ background: '#f8f9fa', padding: '30px 0 10px 0', marginTop: '40px', boxShadow: '0 -2px 8px rgba(0,0,0,0.04)' }}>
      <Container>
        <Row className="justify-content-center mb-3">
          <Col xs="auto">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 12px', color: '#E1306C', fontSize: '1.7rem' }}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://github.com/Avsesh-shakya?tab=repositories" target="_blank" rel="noopener noreferrer" style={{ margin: '0 12px', color: '#222', fontSize: '1.7rem' }}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/avsesh-shakya-183517242/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 12px', color: '#0A66C2', fontSize: '1.7rem' }}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" style={{ margin: '0 12px', color: '#25D366', fontSize: '1.7rem' }}>
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            {/* <a href="https://app.netlify.com/teams/avsesh-shakya/projects" target="_blank" rel="noopener noreferrer" style={{ margin: '0 12px', color: '#00C7B7', fontSize: '1.7rem' }}>
              <FontAwesomeIcon icon={faNetlify} />
            </a> */}
            <a href="mailto:avseshshakya73@gmail.com" style={{ margin: '0 12px', color: '#EA4335', fontSize: '1.7rem' }}>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="auto" style={{ fontFamily: 'Poppins, Inter, sans-serif', fontSize: '1rem', color: '#555' }}>
            © 2025 Avsesh Shakya. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
