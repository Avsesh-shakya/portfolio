import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Project from './components/Project';

function App() {
  return (
    <Router future={{ v7_startTransition: true }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<div><Home/></div>} />
        <Route path="/about" element={<div><About/></div>} />
        <Route path="/skills" element={<div><Skills/></div>} />
        <Route path="/projects" element={<div><Project/></div>} />
        <Route path="/contact" element={<div><Contact/></div>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App
