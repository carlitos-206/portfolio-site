import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './person.css';
const Person3D = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 5;
    
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(width, height);
        renderer.setClearColor(0x000000, 0);
        mountRef.current.appendChild(renderer.domElement);
    
        const controls = new OrbitControls(camera, renderer.domElement);
  
      // Planet
      const planetGeometry = new THREE.SphereGeometry(1, 32, 32);
      const planetMaterial = new THREE.MeshPhongMaterial({ color: 0xcd5539 });
      const planet = new THREE.Mesh(planetGeometry, planetMaterial);
      scene.add(planet);
  
      // Rings with RGB effect
      const ringsGeometry = new THREE.TorusGeometry(1.4, 0.2, 2, 50);
      const ringsMaterial = new THREE.MeshPhongMaterial({
        color: new THREE.Color("rgb(255, 0, 0)"),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.5,
      });
      const rings = new THREE.Mesh(ringsGeometry, ringsMaterial);
      rings.rotation.x = Math.PI / 2;
      scene.add(rings);
  
      let hue = 0;
  
      // Moons
      const moons = [];

      const moonMaterial = new THREE.MeshPhongMaterial({ color: 0x888888 });
      const maxOrbitRadius = 2.5; // Max orbit radius to keep moons within canvas
      for (let i = 0; i < 13; i++) {
        const moonGeometry = new THREE.SphereGeometry(0.05 + Math.random() * 0.1, 16, 16);
        const moon = new THREE.Mesh(moonGeometry, moonMaterial);
        // Constrain the moon's orbit to ensure it stays within the canvas
        const distance = .65 + Math.random() * maxOrbitRadius;
        const angle = Math.random() * Math.PI * 2;
        moon.position.x = distance * Math.cos(angle);
        moon.position.z = distance * Math.sin(angle);
        scene.add(moon);
        moons.push(moon);
      }
  
  
      // Lighting
      const ambientLight = new THREE.AmbientLight(0x404040);
      scene.add(ambientLight);
  
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 3, 5);
      scene.add(directionalLight);
  
      camera.position.z = 5;
  
      const animate = () => {
        requestAnimationFrame(animate);
        planet.rotation.y += 0.001;
        rings.rotation.y += 0.001;
        moons.forEach(moon => {
          const radius = Math.sqrt(Math.pow(moon.position.x, 2) + Math.pow(moon.position.z, 2));
          const currentAngle = Math.atan2(moon.position.z, moon.position.x);
          const newAngle = currentAngle + (0.005 + Math.random() * 0.005); // Varied speed
          moon.position.x = radius * Math.cos(newAngle);
          moon.position.z = radius * Math.sin(newAngle);
        });
        planet.rotation.y += 0.001;
        rings.rotation.y += 0.001;
  
        // Update rings color
        hue = (hue + 1) % 360;
        const color = new THREE.Color(`hsl(${hue}, 100%, 50%)`);
        rings.material.color = color;
  
        controls.update();
        renderer.render(scene, camera);
      };
  
      animate();
   // Handle window resize

   const onWindowResize = () => {
    camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
  };

  window.addEventListener('resize', onWindowResize);

  return () => {
    window.removeEventListener('resize', onWindowResize);
    // eslint-disable-next-line 
    mountRef.current.removeChild(renderer.domElement);
  };
}, []);
  return <div className="person"ref={mountRef} />;
};

export default Person3D;
