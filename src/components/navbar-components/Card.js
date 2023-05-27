import React, { useState } from 'react';

function Card({ imageSrc, title }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardStyle = {
    width: '18.6rem',
    borderRadius: '0.5rem',
    overflow: 'hidden',
    boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
    transition: 'transform 0.3s ease-in-out',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
  };

  const imageStyle = {
    height: '200px',
  };

  const titleStyle = {
    padding: '0.5rem',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: '#fff',
    textAlign: 'center',
    fontSize: '1rem',
  };

  return (
    <div
      className="card m-3"
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imageSrc} alt="project" style={imageStyle} />
      <div className="card-title" style={titleStyle}>
        {title}
      </div>
    </div>
  );
}

export default Card;