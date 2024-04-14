import React from "react";
import starImg from "../../images/landingPage/blackStar.png";

// This function holds the stars background of the site and adjusts for various screen sizes.
// Stars are randomly placed on the screen with random sizes, and the layout refreshes with each load.
export default function Stars({ screenInfo }) {
  console.log(`Screen Dimensions - Width: ${screenInfo.width}, Height: ${screenInfo.height}`);

  const starsArray = [];
  const numStars = 1000;  // Number of stars to generate
  const maxHeight = screenInfo.height;  // Dynamic height based on screen info

  // Function to generate a random number between min and max
  function random(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
  }

  // Generate star elements with random positions and sizes
  for (let i = 0; i < numStars; i++) {
    const starStyle = {
      width: `${random(1, 15)}px`,  // Star width between 1px and 15px
      position: 'absolute',
      top: `${random(0, maxHeight)}px`,  // Star top position within the dynamic height
      left: `${random(0, screenInfo.width)}px`,  // Star left position within the screen width
      zIndex: '-1'  // Ensure stars are in the background
    };

    const starElement = (
      <img src={starImg} key={i} alt="*" className="stars" style={starStyle} />
    );

    starsArray.push(starElement);
  }

  return (
    <div className="starContainer" style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', zIndex: '0' }}>
      {starsArray}
    </div>
  );
}
