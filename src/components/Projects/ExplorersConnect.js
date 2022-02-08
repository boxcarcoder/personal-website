import React, { Fragment, useState } from 'react';

const ExplorersConnect = () => {
  const [displayTech, toggleDisplayTech] = useState(false);

  const [displayDeployment, toggleDisplayDeployment] = useState(false);

  const displayTechList = () => {
    if (!displayTech) {
      return null;
    } else {
      return (
        <Fragment>
          <ul>
            <li>Javascript ES6</li>
            <li>SCSS</li>
            <ul>
              <li>Style mixins</li>
              <li>Style variables</li>
            </ul>
            <li>Font Awesome Fonts and Icons</li>
            <li>React</li>
            <ul>
              <li>React Hooks</li>
              <li>React Redux</li>
            </ul>
            <li>Node.js</li>
            <ul>
              <li>npm</li>
              <li>Express</li>
              <li>Mongoose</li>
            </ul>
            <li>MongoDB</li>
          </ul>
        </Fragment>
      );
    }
  };

  const displayDeploymentList = () => {
    if (!displayDeployment) {
      return null;
    } else {
      return (
        <Fragment>
          <ul>
            <li>Domain is hosted by Heroku.</li>
            <li>Application is deployed by Heroku.</li>
            <li>Database is managed by MongoDB Atlas.</li>
          </ul>
        </Fragment>
      );
    }
  };

  return (
    <Fragment>
      <div className='projectContainer'>
        <h2 style={{ color: ' rgb(103, 197, 103)' }}>ExplorersConnect</h2>

        <h3>
          An application for outdoor enthusiasists to share their favorite gear,
          outdoor locations, and interact with a community.
        </h3>

        <div className='explorers-slider'>
          <div className='slide'>
            <img
              src={require('../../images/explorers1.png')}
              alt='landingPage'
              className='explorersPhoto'
            ></img>
          </div>
          <div className='slide'>
            <img
              src={require('../../images/explorers2.png')}
              alt='signin'
              className='explorersPhoto'
            ></img>
          </div>
          <div className='slide'>
            <img
              src={require('../../images/explorers3.png')}
              alt='createProfile1'
              className='explorersPhoto'
            ></img>
          </div>
          <div className='slide'>
            <img
              src={require('../../images/explorers4.png')}
              alt='createProfile2'
              className='explorersPhoto'
            ></img>
          </div>
          <div className='slide'>
            <img
              src={require('../../images/explorers5.png')}
              alt='addDestinations'
              className='explorersPhoto'
            ></img>
          </div>
          <div className='slide'>
            <img
              src={require('../../images/explorers6.png')}
              alt='dashboard'
              className='explorersPhoto'
            ></img>
          </div>
          <div className='slide'>
            <img
              src={require('../../images/explorers7.png')}
              alt='explorers'
              className='explorersPhoto'
            ></img>
          </div>
          <div className='slide'>
            <img
              src={require('../../images/explorers8.png')}
              alt='explorersProfile1'
              className='explorersPhoto'
            ></img>
          </div>
          <div className='slide'>
            <img
              src={require('../../images/explorers9.png')}
              alt='explorersProfile2'
              className='explorersPhoto'
            ></img>
          </div>
          <div className='slide'>
            <img
              src={require('../../images/explorers10.png')}
              alt='posts'
              className='explorersPhoto'
            ></img>
          </div>
          <div className='slide'>
            <img
              src={require('../../images/explorers11.png')}
              alt='comments'
              className='explorersPhoto'
            ></img>
          </div>
        </div>

        <div className='linkToProjectGroup'>
          <a
            href='https://thawing-ridge-40357.herokuapp.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <text className='linkToProject'>Get the Full Experience</text>
          </a>
        </div>

        <div className='overview'>
          <h3>Overview:</h3>
          <ul>
            <li>
              Users can sign up to create a personalized profile, including
              options to select their favorite outdoor recreations, their
              favorite gear, and their favorite spots.
            </li>
            <li>
              Users can browse through other members of the community, viewing
              their profiles for gear and spot recommendations.
            </li>
            <li>
              Users can create posts in the community to create discussions,
              including commenting, liking, and unliking posts.
            </li>
          </ul>

          <div className='technologyList'>
            <button
              type='input'
              onClick={() => toggleDisplayTech(!displayTech)}
              style={{ margin: '15px' }}
            >
              Developed With
            </button>

            {displayTechList()}

            <button
              type='input'
              onClick={() => toggleDisplayDeployment(!displayDeployment)}
            >
              Deployed With
            </button>

            {displayDeploymentList()}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ExplorersConnect;
