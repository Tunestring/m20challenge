import React from 'react';
import AboutMe from './navbar-components/AboutMe';
import Contact from './Contact';
import Portfolio from './navbar-components/Portfolio';

function Project({ currentPage }) {
  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutMe />;
      case 'contact':
        return <Contact />;
      case 'portfolio':
        return <Portfolio />;
      default:
        return null;
    }
  };

  return <div>{renderPage()}</div>;
}

export default Project;