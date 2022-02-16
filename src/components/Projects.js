import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <Fragment>
      <h2>My Projects</h2>
      <div className='projectsGroup'>
        <h3>
          <Link to='/reddalerts'>
            <span style={{ color: 'rgb(103, 197, 103)' }}>ReddAlerts</span>:
            Text Message Alerts from Reddit
          </Link>
        </h3>
        <Link to='/reddalerts'>
          <img
            src={require('../images/reddalerts1.png')}
            alt='reddalerts'
            className='reddalertsPhoto reddalertsLearnMore'
          ></img>
        </Link>

        <hr />

        <h3>
          <Link to='/explorersconnect'>
            <span style={{ color: 'rgb(103, 197, 103)' }}>
              ExplorersConnect
            </span>
            : Social Media for Outdoor Enthusiasts
          </Link>
        </h3>
        <Link to='/explorersconnect'>
          <img
            src={require('../images/explorers1.png')}
            alt='explorers'
            className='explorersPhoto'
          ></img>
        </Link>
      </div>

      <div className='linkGroup'>
        <Link to='/' className='link'>
          Back
        </Link>
        <Link to='/about' className='link'>
          About Me
        </Link>
      </div>
    </Fragment>
  );
};

export default Projects;
