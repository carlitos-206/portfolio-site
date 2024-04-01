import React, { useState, useEffect, useRef } from 'react';
import './index.css'; // Ensure this CSS file exists and is updated
import rocketShipImg from '../../images/projectsPage/spaceship.png'; // Update the path as needed

const generatePosition = () => ({
    x: Math.random() * (window.innerWidth - 100), // Assuming the rocket width is less than 100px
    y: Math.random() * (window.innerHeight - 100), // Assuming the rocket height is less than 100px
    rotation: Math.random() * 360,
  });
  
  const RocketShip = () => {
    const [position, setPosition] = useState(generatePosition());
    const rocketRef = useRef();
  
    useEffect(() => {
      const handleAnimationEnd = () => {
        const newPosition = generatePosition();
        setPosition(newPosition);
        rocketRef.current.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px) rotate(${newPosition.rotation}deg)`;
      };
  
      const rocketShip = rocketRef.current;
      rocketShip.addEventListener('transitionend', handleAnimationEnd);
  
      return () => rocketShip.removeEventListener('transitionend', handleAnimationEnd);
    }, []);
  
    useEffect(() => {
      const newPosition = generatePosition();
      setPosition(newPosition);
    }, []);
  
    return (
      <div className="space">
        <img ref={rocketRef} src={rocketShipImg} className="rocket-ship" alt="Rocket Ship" style={{
          transform: `translate(${position.x}px, ${position.y}px) rotate(${position.rotation}deg)`
        }} />
      </div>
    );
  };
  
  export default RocketShip;