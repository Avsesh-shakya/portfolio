import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div style={{ background: 'linear-gradient(90deg, #e0e7ff 60%, #f8fafc 100%)', minHeight: '70vh', padding: '40px 0' }}>
      <Container>
        <h2 style={{ fontWeight: 700, fontSize: '2rem', marginBottom: '30px', fontFamily: 'Poppins, Inter, sans-serif', textAlign: 'center' }}>Contact</h2>
        <Row className="align-items-center">
          {/* Left Side: Contact Info */}
          <Col md={5}>
            <Card style={{ borderRadius: '16px', boxShadow: '0 4px 24px rgba(99,102,241,0.08)', padding: '24px', marginBottom: '24px' }}>
              <Card.Body>
                <Card.Title style={{ fontWeight: 700, fontSize: '1.3rem', marginBottom: '12px', fontFamily: 'Poppins, Inter, sans-serif' }}>Contact Information</Card.Title>
                <div style={{ fontSize: '1.05rem', color: '#444', fontFamily: 'Inter, Poppins, sans-serif' }}>
                  <div style={{ marginBottom: '12px' }}>
                    <FontAwesomeIcon icon={faEnvelope} style={{ color: '#6366f1', marginRight: '10px' }} />
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=avseshshakya73@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: '#6366f1', textDecoration: 'underline' }}>avseshshakya73@gmail.com</a>
                  </div>
                  <div style={{ marginBottom: '12px' }}>
                    <FontAwesomeIcon icon={faPhone} style={{ color: '#6366f1', marginRight: '10px' }} />
                    +91 7351309529
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#6366f1', marginRight: '10px' }} />
                    Noida uttar pradesh, India
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* Right Side: Contact Form */}
          <Col md={7}>
            <Card style={{ borderRadius: '16px', boxShadow: '0 4px 24px rgba(99,102,241,0.08)', padding: '24px' }}>
              <Card.Body>
                <Card.Title style={{ fontWeight: 700, fontSize: '1.3rem', marginBottom: '12px', fontFamily: 'Poppins, Inter, sans-serif' }}>Send a Message</Card.Title>
                <Form>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Type your message..." />
                  </Form.Group>
                  <Button variant="primary" type="submit" style={{ fontWeight: 500, borderRadius: '6px' }}>
                    Send
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
