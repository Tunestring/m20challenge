import React from 'react';
import '../../styles.css';
import profilePic from '../../assets/images/me.jpg';

function AboutMe() {
  return (
    <div className="container d-flex flex-column align-items-center text-center">
      <img
        src={profilePic}
        alt="Profile"
        className="profile-image rounded-circle"
      />
      <div className="d-flex flex-row justify-content-between w-100">
        <div className="flex-grow-1 pe-4 pt-5">
          <h2 className="text-color my-4 mt-5 text-center text-nowrap">My Story</h2>
        </div>
        <div className="flex-grow-1 text-start ps-3 custom-border">
          <p className="fs-4 text-color mb-4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Since 2012, I have worked as a Licensed Practical Nurse (LPN) in various correctional facilities within local county jails in New Hampshire. Before pursuing my career as an LPN, I spent three years as a surgical technologist, gaining valuable experience in the operating room setting. I work well under pressure, I love to think critically, and most importantly I value learning and the search for knowledge. I love developing new skills and mastering new techniques regardless of what I set my mind to.
          </p>
          <p className="fs-4 text-color">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm a gaming enthusiast, and my love of computers is what has launched me into a career where I am able to create instead of just consuming. I love beekeeping - one of the most therapeutic things I have done in my life. I set my life to music, there's no situation where a song or a playlist can't be used. I love teamwork; my years in healthcare have taught me the importance of working well as a teammate, that a well-functioning team is priceless.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;