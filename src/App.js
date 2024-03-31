import React from "react";
import LandingPage from "./components/_landing-page";
import Stars from "./global/components/stars/index.jsx";
import NavBar from "./global/components/nav-bar/index.jsx";
import './App.css';
function App() {
  let screenInfo = {width: window.innerWidth, height: window.innerHeight}

  return (
    <div className="App">
      <Stars screenInfo={screenInfo}/>
      <LandingPage />
      <NavBar />
    </div>
  );
}

export default App;
