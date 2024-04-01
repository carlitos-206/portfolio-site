import React, { useState, useEffect } from "react";
import LandingPage from "./components/_landing-page";
import Stars from "./global/components/stars/index.jsx";
import NavBar from "./global/components/nav-bar/index.jsx";
import AboutPage from "./components/_about-page/index.jsx";
import ProjectsPage from "./components/_projects-page/index.jsx";
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [screenInfo, setScreenInfo] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => setScreenInfo({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const Home = () => (
    <div className="home">
      {isLoading && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 6,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }}>
          Loading...
        </div>
      )}
      <Stars screenInfo={screenInfo} />
      <LandingPage />
      <NavBar />
    </div>
  );
  
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
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;