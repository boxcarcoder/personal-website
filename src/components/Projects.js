import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <Fragment>
      <h2>Projects</h2>
      <div className='projectsDisplay'>
        <h3>
          <span style={{ color: 'rgb(103, 197, 103)' }}>ReddAlerts</span>: Text
          Message Alerts from Reddit
        </h3>
        <Link to='/reddalerts'>
          <img
            src={require('../images/reddalerts1.png')}
            alt='reddalerts'
            className='reddalertsPhoto'
          ></img>
        </Link>

        <h3>
          <span style={{ color: 'rgb(103, 197, 103)' }}>ExplorersConnect</span>:
          Social Media for Outdoor Enthusiasts
        </h3>
        <Link to='/explorersconnect'>
          <img
            src={require('../images/explorers1.png')}
            alt='explorers'
            className='explorersPhoto'
          ></img>
        </Link>
      </div>
    </Fragment>
  );
};

export default Projects;
