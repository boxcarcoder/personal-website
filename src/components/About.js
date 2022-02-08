import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <h2>About Me</h2>
      <img
        src={require('../images/me.png')}
        alt='me'
        className='profilePic'
      ></img>

      <div className='summary'>
        <p>Don't mind the messy hair in my photo, it was a 7am hike.</p>
        <p>
          Outside of software development, I love enjoying the outdoors with
          some hiking, car camping, and backpacking. Nothing can replace some
          fresh air and exercise.
        </p>
        <p>
          I'm an avid music fan, listening from Indie Rock, Hip Hop, and EDM, to
          Folk, Dream Pop, and Funk. I love a good music discussion, and
          especially new recommendations. With practice, I'm aspiring to be a
          blues and jazz improv guitar player.
        </p>
        <p>
          I love hanging out with family and friends- from board game nights,
          grabbing a quick drink, attending shows, and everything in between. A
          good time's to be had with company for sure.
        </p>
      </div>
    </Fragment>
  );
};

export default About;
