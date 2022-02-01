import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

//import icons from fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faGithub,
  faInstagram,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Landing = () => {
  return (
    <Fragment>
      <p
        className='summary'
        style={{ textAlign: 'left', color: 'rgb(103, 197, 103)' }}
      >
        Hi there, my name is
      </p>

      <h1 style={{ color: 'white' }}>
        Brendan Cheng<text className='pronouns'>(he/him/his)</text>
      </h1>

      <div className='summary'>
        <h2>I build web applications.</h2>

        <p>I am a Software Engineer based in Los Angeles.</p>
        <p>
          <span style={{ color: 'rgb(103, 197, 103)' }}>
            I've finally found where I belong.
          </span>
          Looking back, I've felt like a journeyman, figuring out what drives me
          as a developer. Previously working on avionic software, I've been
          learning Javascript, React, and Node.js, as well as Python,
          SQLAlchemy, and AWS. Working with web technologies has allowed me to
          write applications that can reach the entire world.
        </p>
        <p style={{ color: 'rgb(103, 197, 103)' }}>This is home.</p>
      </div>

      <div className='socialGroup'>
        <a
          href='https://linkedin.com/in/brendancheng'
          target='_blank'
          rel='noopener noreferrer'
          className='social'
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>

        <a
          href='https://github.com/boxcarcoder'
          target='_blank'
          rel='noopener noreferrer'
          className='social'
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a
          href='https://stackoverflow.com/users/10426919/brendan'
          target='_blank'
          rel='noopener noreferrer'
          className='social'
        >
          <FontAwesomeIcon icon={faStackOverflow} />
        </a>

        <a
          href='mailto:brendancheng333@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className='social'
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>

        <a
          href='https://www.instagram.com/brendancheng_/'
          target='_blank'
          rel='noopener noreferrer'
          className='social'
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>

      <div className='links'>
        <Link to='/about' className='link'>
          About Me
        </Link>
        <Link to='/projects' className='link'>
          Projects
        </Link>
      </div>
    </Fragment>
  );
};

export default Landing;
