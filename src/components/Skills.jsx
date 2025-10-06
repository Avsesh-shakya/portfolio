import React from 'react';
import { Container, Row, Col, ProgressBar, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faBootstrap,
  faGithub,
  faNodeJs,
  faJava,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import './Skills.css';

const skills = [
  { name: 'HTML', level: 95, color: 'success', icon: faHtml5, iconColor: '#e34c26' },
  { name: 'CSS', level: 90, color: 'info', icon: faCss3Alt, iconColor: '#2965f1' },
  { name: 'JavaScript', level: 92, color: 'warning', icon: faJs, iconColor: '#f7df1e' },
  { name: 'React JS', level: 90, color: 'primary', icon: faReact, iconColor: '#61dafb' },
  { name: 'React-Bootstrap', level: 85, color: 'info', icon: faBootstrap, iconColor: '#563d7c' },
  { name: 'Bootstrap', level: 88, color: 'secondary', icon: faBootstrap, iconColor: '#563d7c' },
  { name: 'Git & GitHub', level: 80, color: 'dark', icon: faGithub, iconColor: '#333' },
  { name: 'Context API', level: 80, color: 'primary', icon: faReact, iconColor: '#61dafb' },
  { name: 'Node JS', level: 75, color: 'success', icon: faNodeJs, iconColor: '#3c873a' },
  { name: 'MongoDB', level: 70, color: 'success', icon: faDatabase, iconColor: '#47A248' },
  { name: 'Express JS', level: 70, color: 'secondary', icon: faNodeJs, iconColor: '#222' },
  { name: 'Java', level: 65, color: 'warning', icon: faJava, iconColor: '#f89820' },
  { name: 'Netlify', level: 80, color: 'info', icon: faReact, iconColor: '#00C7B7' },
];

const Skills = () => {
  return (
    <div style={{ background: 'linear-gradient(90deg, #f8fafc 60%, #e0e7ff 100%)', minHeight: '70vh', padding: '40px 0' }}>
      <Container>
        <h2 style={{ fontWeight: 700, fontSize: '2rem', marginBottom: '30px', fontFamily: 'Poppins, Inter, sans-serif', textAlign: 'center' }}>Skills</h2>
        {Array.from({ length: Math.ceil(skills.length / 2) }).map((_, rowIdx) => (
          <Row key={rowIdx} className="mb-4 justify-content-center">
            {skills.slice(rowIdx * 2, rowIdx * 2 + 2).map((skill, idx) => (
              <Col md={5} xs={12} key={skill.name} className="mb-3">
                <Card className="skill-card" style={{ borderRadius: '12px', boxShadow: '0 2px 12px rgba(99,102,241,0.07)', padding: '18px', transition: 'transform 0.2s, box-shadow 0.2s' }}>
                  <Card.Body>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', fontWeight: 600, fontSize: '1.1rem', fontFamily: 'Poppins, Inter, sans-serif' }}>
                        <FontAwesomeIcon icon={skill.icon} style={{ color: skill.iconColor, marginRight: '10px', fontSize: '1.5rem' }} />
                        {skill.name}
                      </span>
                      <span style={{ fontWeight: 500, color: '#6366f1' }}>{skill.level}%</span>
                    </div>
                    <ProgressBar now={skill.level} label={`${skill.level}%`} variant={skill.color} style={{ height: '18px', fontWeight: 500, fontSize: '1rem' }} />
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

export default Skills;
