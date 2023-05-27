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
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 mb-4">
          <a href="https://github.com/Tunestring/m11challenge" className="card-link">
            <Card imageSrc={WorkDayPlanner} />
          </a>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <a href="https://github.com/bcebel/Hot10" className="card-link">
            <Card imageSrc={Hot10}/>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <a href="https://github.com/Cmeesh11/InNeed" className="card-link">
            <Card imageSrc={InNeed} />
          </a>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <a href="https://github.com/Tunestring/m11challenge" className="card-link">
            <Card imageSrc={NoteTaker} />
          </a>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <a href="https://github.com/Tunestring/m19challenge" className="card-link">
            <Card imageSrc={PWA} />
          </a>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <a href="https://github.com/Tunestring/m18challenge" className="card-link">
            <Card imageSrc={SocialNetworkAPI} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;