import React, { useState, useEffect } from 'react';
import './index.css';

const ImageSlider = ({ images }) => {
  const [offsets, setOffsets] = useState(Array(images.length).fill(100)); // Start offscreen

  useEffect(() => {
    const interval = setInterval(() => {
      setOffsets((currentOffsets) => {
        const newOffsets = [...currentOffsets];
        const firstHiddenImageIndex = newOffsets.findIndex(offset => offset === 100);
        if (firstHiddenImageIndex !== -1) {
          newOffsets[firstHiddenImageIndex] = 5 + 10 * firstHiddenImageIndex;
        }
        return newOffsets;
      });
    }, 1000); // Slide an image every 1 second

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="image-slider">
      {images.map((image, index) => {
        return (
         <div className='photo-contianer'>
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            style={{ left: `${offsets[index]}%`, transition: 'left 1s ease' }}
            className="slide-image"
            id={`slide-image_${index+1}`}
          />
         </div>
        );
      }
      
      )}
    </div>
  );
};

export default ImageSlider;
