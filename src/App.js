import React, { useState, useEffect } from "react";
import LandingPage from "./components/_landing-page";
import Stars from "./global/components/stars/index.jsx";
import NavBar from "./global/components/nav-bar/index.jsx";
import AboutPage from "./components/_about-page/index.jsx";
import ProjectsPage from "./components/_projects-page/index.jsx";
import ContactPage from "./components/_contact-page/index.jsx";
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [screenInfo, setScreenInfo] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const Home = () =>{ 
  
    useEffect(() => {
      // Handle resize
      const handleResize = () => {
        setScreenInfo({ width: window.innerWidth, height: window.innerHeight });
      };
  
      // Set up event listener for resize
      window.addEventListener('resize', handleResize);
  
      // Set up timer to stop loading
  
      // Cleanup function
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []); 
    
    return(

    <div className="home">
      <Stars screenInfo={screenInfo} />
      <LandingPage />
      <NavBar />
    </div>
  );}
  
  const About = () => (
    <div className="about">
      <Stars screenInfo={screenInfo} />
      <AboutPage />
      <NavBar />
    </div>
  );

  const Projects = () => (
    <div className="projects">
      <Stars screenInfo={screenInfo} />
      <ProjectsPage />
      <NavBar />
    </div>
  );
  const Contact = () => (
    <div className="contact">
      <Stars screenInfo={screenInfo} />
      <ContactPage />
      <NavBar />
    </div>
  );
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;