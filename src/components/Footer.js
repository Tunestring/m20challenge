import { useState } from 'react';

const styles = {
  iconSize: {
    fontSize: '40px',
  },
  black: {
    fontSize: '40px',
    color: 'black',
  },
};

function Footer() {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseExit = () => {
    setIsHover(false);
  };

  const iconStyle = isHover ? { ...styles.black, color: '#305F87' } : styles.black;

  return (
    <div className="d-flex justify-content-center mt-5">
      <a href="https://www.linkedin.com/in/nate-long-94987a269/" target="_blank" rel="noreferrer">
        <i className="fa fa-linkedin-square mx-2" style={styles.iconSize}></i>
      </a>
      <a
        href="https://github.com/Tunestring" target="_blank" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} rel="noreferrer">
        <i className="fa fa-github mx-2" style={iconStyle}></i>
      </a>
    </div>
  );
}

export default Footer;