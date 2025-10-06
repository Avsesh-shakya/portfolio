import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutEduExp = () => {
    return (
        <Container style={{ padding: '40px 0' }}>
            <h2 style={{ fontWeight: 700, fontSize: '2rem', marginBottom: '30px', fontFamily: 'Poppins, Inter, sans-serif', textAlign: 'center' }}>
                Experience & Education
            </h2>
            <Row className="justify-content-center mb-4">
                <Col md={5} xs={12} className="mb-3">
                    <Card style={{ borderRadius: '14px', boxShadow: '0 2px 12px rgba(99,102,241,0.07)', padding: '18px' }}>
                        <Card.Body>
                            <Card.Title style={{ fontWeight: 700, fontSize: '1.3rem', fontFamily: 'Poppins, Inter, sans-serif' }}>Internship Experience</Card.Title>
                            <Card.Text style={{ fontSize: '1rem', color: '#444', fontFamily: 'Inter, Poppins, sans-serif' }}>
                                <strong>XyNerotech Solution</strong><br />
                                Duration: 1 month<br />
                                Role: Frontend developer Intern<br />
                                Description:
                                <li>
                                    Enthusiastic Frontend Developer with strong knowledge of HTML, CSS, JavaScript, React.js and state management using Context API.
                                </li>
                                <li>
                                    Learning MERN stack technologies including Node.js, Express.js, MongoDB for building full-stack applications.
                                </li>
                                <li>
                                    Skilled in designing responsive UIs using React-Bootstrap and CSS.
                                </li>
                                <li>

                                    Strong problem-solving mindset with focus on clean, reusable code.
                                </li>
                            </Card.Text>
                            <Card.Text style={{ fontSize: '1rem', color: '#444', fontFamily: 'Inter, Poppins, sans-serif' }}>
                                <strong>TechOctanet Services Pvt Ltd</strong><br />
                                Duration: 2 months<br />
                                Role: Web Development Intern<br />
                                Description: <li>
                                    Developed and maintained responsive web pages using HTML, CSS, JavaScript, and React.js.
                                </li>
                                <li>

                                    Built reusable UI components and applied Bootstrap for responsive design.
                                </li>
                                <li>

                                    Assixsted in API integration and improved data handling on frontend.
                                </li>
                                <li>

                                    Gained practical exposure to Git, version control.
                                </li>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={5} xs={12} className="mb-3">
                    <Card style={{ borderRadius: '14px', boxShadow: '0 2px 12px rgba(99,102,241,0.07)', padding: '18px' }}>
                        <Card.Body>
                            <Card.Title style={{ fontWeight: 700, fontSize: '1.2rem', fontFamily: 'Poppins, Inter, sans-serif' }}>Education</Card.Title>
                            <Card.Text style={{ fontSize: '1rem', color: '#444', fontFamily: 'Inter, Poppins, sans-serif' }}>

                                <strong>MCA (Master of Computer Applications)</strong><br />
                                University: Dr. A. P. J. Abdul Kalam Technical University, Lucknow<br />
                                Year: 2022 - 2024<br />
                                Specialization: Web Development
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            
                            <Card.Text style={{ fontSize: '1rem', color: '#444', fontFamily: 'Inter, Poppins, sans-serif' }}>

                               <strong>BCA (Bachelor of Computer Applications)</strong><br />
                                University: Dr Bhimrao Ambedkar University<br />
                                Year: 2018 - 2021<br />
                                Specialization: Web Development
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    
                </Col>
            </Row>
        </Container>
    );
};

export default AboutEduExp;
