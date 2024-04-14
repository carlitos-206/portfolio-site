import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import texture from '../../images/textures/8k_earth_clouds_texture.jpg';
// Importing moon textures
import moon_text_1 from '../../images/textures/moon_text_1.jpg';
import moon_text_2 from '../../images/textures/moon_text_2.jpg';
import moon_text_3 from '../../images/textures/moon_text_3.jpg';
import moon_text_4 from '../../images/textures/moon_text_4.jpg';
import moon_text_5 from '../../images/textures/moon_text_5.jpg';
import moon_text_6 from '../../images/textures/moon_text_6.jpg';
import moon_text_7 from '../../images/textures/moon_text_7.jpg';
import moon_text_8 from '../../images/textures/moon_text_8.jpg';
import moon_text_9 from '../../images/textures/moon_text_9.jpg';
import moon_text_10 from '../../images/textures/moon_text_10.jpg';
import moon_text_11 from '../../images/textures/moon_text_11.jpg';
import moon_text_12 from '../../images/textures/moon_text_12.jpg';
import moon_text_13 from '../../images/textures/moon_text_13.jpg';
import './person.css';

const Person3D = () => {
  const windowWidth = window.innerWidth;

  if(windowWidth > 768){
    // eslint-disable-next-line
    const mountRef = useRef(null);
    // eslint-disable-next-line
    useEffect(() => {
    const scene = new THREE.Scene();
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);

    // Load the planet texture
    const textureLoader = new THREE.TextureLoader();
    const planetTexture = textureLoader.load(texture); // Adjust the path as needed

    // Planet setup with texture
    const planetGeometry = new THREE.SphereGeometry(1, 32, 32);
    const planetMaterial = new THREE.MeshPhongMaterial({ map: planetTexture });
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    scene.add(planet);

    // Moons with textures
    const moonTextures = [
      moon_text_1, moon_text_2, moon_text_3, moon_text_4, moon_text_5,
      moon_text_6, moon_text_7, moon_text_8, moon_text_9, moon_text_10,
      moon_text_11, moon_text_12, moon_text_13,
    ].map(texture => textureLoader.load(texture));

    const moons = [];
    const maxOrbitRadius = 2.5; // Max orbit radius to keep moons within canvas
    for (let i = 0; i < 13; i++) {
      const moonGeometry = new THREE.SphereGeometry(0.05 + Math.random() * 0.1, 16, 16);
      const moonMaterial = new THREE.MeshPhongMaterial({ map: moonTextures[i] });
      const moon = new THREE.Mesh(moonGeometry, moonMaterial);
      // Constrain the moon's orbit to ensure it stays within the canvas
      const distance = 2.5 + Math.random() * maxOrbitRadius;
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
      moons.forEach(moon => {
        const radius = Math.sqrt(Math.pow(moon.position.x, 2) + Math.pow(moon.position.z, 2));
        const currentAngle = Math.atan2(moon.position.z, moon.position.x);
        const newAngle = currentAngle + (0.005 + Math.random() * 0.005); // Varied speed
        moon.position.x = radius * Math.cos(newAngle);
        moon.position.z = radius * Math.sin(newAngle);
      });
      planet.rotation.y += 0.001;

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
      if (mountRef.current) {
        // eslint-disable-next-line
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);
  return <div className="person" ref={mountRef} />;
  }
  else{
    // eslint-disable-next-line
    const mountRef = useRef(null);
    // eslint-disable-next-line
    useEffect(() => {
      const scene = new THREE.Scene();
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 5;
  
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio); // Adjusts for high DPI devices like mobile
      mountRef.current.appendChild(renderer.domElement);
  
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true; // Optional: to have a smoother orbit
  
      // Load the planet texture
      const textureLoader = new THREE.TextureLoader();
      const planetTexture = textureLoader.load(texture);
  
      // Planet setup with texture
      const planetGeometry = new THREE.SphereGeometry(1, 32, 32);
      const planetMaterial = new THREE.MeshPhongMaterial({ map: planetTexture });
      const planet = new THREE.Mesh(planetGeometry, planetMaterial);
      scene.add(planet);
  
      // Moon setup: creating exactly 7 moons with random distances
      const moonTextures = [
        moon_text_1, moon_text_2, moon_text_3
      ].map(texture => textureLoader.load(texture));
      const moons = [];
      const maxOrbitRadius = 2.5; // Max orbit radius to keep moons within canvas

      for (let i = 0; i < 3; i++) {
        const moonGeometry = new THREE.SphereGeometry(0.05 + Math.random() * 0.1, 16, 16);
      const moonMaterial = new THREE.MeshPhongMaterial({ map: moonTextures[i] });
      const moon = new THREE.Mesh(moonGeometry, moonMaterial);
      // Constrain the moon's orbit to ensure it stays within the canvas
      const distance = 2.5 + Math.random() * maxOrbitRadius;
      const angle = Math.random() * Math.PI * 2;
      moon.position.x = distance * Math.cos(angle);
      moon.position.z = distance * Math.sin(angle);
      scene.add(moon);
      moons.push(moon);
      }
  
      // Lighting
      const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
      scene.add(ambientLight);
  
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 3, 5);
      scene.add(directionalLight);
  
      const animate = () => {
        requestAnimationFrame(animate);
        planet.rotation.y += 0.005; // Rotate the planet for some dynamic effect
  
        moons.forEach((moon) => {
          moon.angle += 0.01; // Increase the angle to move the moon
          moon.mesh.position.x = moon.distance * Math.cos(moon.angle); // Update the x position based on the new angle
          moon.mesh.position.z = moon.distance * Math.sin(moon.angle); // Update the z position based on the new angle
        });
  
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
        if (mountRef.current) {
          // eslint-disable-next-line
          mountRef.current.removeChild(renderer.domElement);
        }
      };
    }, []);
  
    return <div className="person" ref={mountRef} />;
  };

};

export default Person3D;
