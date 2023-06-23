import React from 'react';
import Card from './Card';
import WorkDayPlanner from '../../assets/images/WorkDayPlanner.png';
import Hot10 from '../../assets/images/Hot10.png';
import InNeed from '../../assets/images/InNeed.png';
import NoteTaker from '../../assets/images/NoteTaker.png';
import PWA from '../../assets/images/PWA.png';
import SocialNetworkAPI from '../../assets/images/SocialNetworkAPI.png';
import '../../styles.css';

function Portfolio() {
  const projects = [
    {
      name: 'Work Day Planner',
      imageSrc: WorkDayPlanner,
      languages: ['JavaScript', 'HTML', 'CSS', 'Node.js'],
      githubLink: 'https://github.com/Tunestring/m11challenge'
    },
    {
      name: 'Hot 10',
      imageSrc: Hot10,
      languages: ['HTML', 'CSS','Node.js'],
      githubLink: 'https://github.com/bcebel/Hot10'
    },
    {
      name: 'In Need',
      imageSrc: InNeed,
      languages: ['JavaScript', 'MongoDB', 'Express', 'Node.js'],
      githubLink: 'https://github.com/Cmeesh11/InNeed'
    },
    {
      name: 'Note Taker',
      imageSrc: NoteTaker,
      languages: ['JavaScript', 'Node.js', 'Express', 'HTML', 'CSS'],
      githubLink: 'https://github.com/Tunestring/m11challenge'
    },
    {
      name: 'PWA',
      imageSrc: PWA,
      languages: ['JavaScript', 'HTML', 'CSS'],
      githubLink: 'https://github.com/Tunestring/m19challenge'
    },
    {
      name: 'Social Network API',
      imageSrc: SocialNetworkAPI,
      languages: ['JavaScript', 'MongoDB', 'Express', 'Mongoose']
    }
  ];

  return (
    <div className="container">
      <div className="row justify-content-center">
        {projects.map((project, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <a href={project.githubLink} className="card-link">
              <div className="card-wrapper">
                <h2 className="project-name">{project.name}</h2>
                <Card imageSrc={project.imageSrc} />
                <div className="overlay">
                  <div className="languages">
                    {project.languages.map((language, index) => (
                      <span key={index}>{language}</span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
