import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Header from './commponets/Header';
import Skills from './commponets/Skills'; // Corrected import
import Projects from './commponets/Projects'; // Corrected import
import Resume from './commponets/Resume'; // Corrected import
import Footer from './pages/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes> {/* Replace Switch with Routes */}
        <Route path="/" element={<Home />} /> {/* Use element instead of component */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
