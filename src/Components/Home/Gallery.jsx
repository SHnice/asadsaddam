import React, { useEffect, useState } from 'react';

const Gallery = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const galleryStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '20px',
  };

  const imageStyles = {
    width: '600px',
    height: '400px',
    objectFit: 'cover',
    margin: '10px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  // Update the styles based on screen width
  if (screenWidth <= 600) {
    imageStyles.width = '300px';
    imageStyles.height = '200px';
  }

  useEffect(() => {
    // Update screen width on resize
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Replace these image URLs with your actual image URLs
  const images = [
    'p1.jpg',
    'p2.jpg',
    'p3.jpg',
    'p4.jpg',
    'p5.jpg',
  ];

  return (
    <div>
      <h1 style={{ paddingTop: '100px' }}>Photo Gallery</h1>
      <div style={galleryStyles}>
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Photo ${index + 1}`}
            style={imageStyles}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
