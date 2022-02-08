import React, { Fragment, useState } from 'react';

const Reddalerts = () => {
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
            <li>CSS</li>
            <li>React</li>
            <ul>
              <li>React Hooks</li>
              <li>React Redux</li>
            </ul>
            <li>Node.js</li>
            <ul>
              <li>npm</li>
            </ul>
            <li>Python</li>
            <ul>
              <li>SQLAlchemy</li>
              <li>Flask</li>
            </ul>
            <li>MySQL</li>
            <li>3rd party APIs</li>
            <ul>
              <li>Twilio API</li>
              <li>PRAW Reddit API</li>
            </ul>
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
            <li>Domain and distributions:</li>
            <ul>
              <li>Domain registered through Porkbun.</li>
              <li>
                SSL Certificate generated by Amazon AWS ACM for security and
                encryption.
              </li>
              <li>DNS configured through CloudFlare to direct requests: </li>
              <ul>
                <li>
                  requests to my domains are redirected to distributions to
                  respond with static assets.
                </li>
                <li>
                  requests to API calls are redirected to the server-side, which
                  is handled by an AWS Elastic Beanstalk load-balancer that's
                  configured with the SSL certificate.
                </li>
              </ul>
              <li>Static assets hosted on AWS S3 buckets.</li>
              <li>Distributions set up with AWS CloudFront.</li>
            </ul>
            <li>Server, API routes, and Database</li>
            <ul>
              <li>
                Flask server is configured with CORS to allow requests from my
                client-side domains.
              </li>
              <li>
                Flask server with API routes are deployed to AWS Elastic
                Beanstalk.
              </li>
              <li>
                The Elastic Beanstalk environment is configured with a load
                balancer to listen for domains listed on my client-side SSL
                certificate.
              </li>
              <li>
                My CloudFlare DNS server uses CNAME records to redirect API
                requests to the Elastic Beanstalk environment to the domains
                listed on the SSL certificate.
              </li>
              <li>The MySQL database is hosted on AWS RDS.</li>
            </ul>
          </ul>
        </Fragment>
      );
    }
  };

  return (
    <Fragment>
      <div className='projectContainer'>
        <h2 style={{ color: ' rgb(103, 197, 103)' }}>ReddAlerts</h2>

        <h3>
          An application for users to monitor their favorite Subreddits from the
          website, Reddit, based on specified keywords.
        </h3>

        <div className='reddalerts-slider'>
          <div className='slide'>
            <img
              src={require('../../images/reddalerts1.png')}
              alt='landingPage'
              className='reddalertsPhoto'
            ></img>
          </div>
          <div className='slide'>
            <img
              src={require('../../images/reddalerts2.png')}
              alt='signUp'
              className='reddalertsPhoto'
            ></img>
          </div>
          <div className='slide'>
            <img
              src={require('../../images/reddalerts3.png')}
              alt='settings'
              className='reddalertsPhoto'
            ></img>
          </div>
          <div className='slide'>
            <img
              src={require('../../images/reddalerts4.png')}
              alt='dashboard'
              className='reddalertsPhoto'
            ></img>
          </div>
        </div>

        <div className='linkToProjectGroup'>
          <a
            href='https://reddalerts.com'
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
              Users can register for an account, that will be associated with
              their phone number.
            </li>
            <li>
              Users can specify different Subreddits, and corresponding
              Keywords, to monitor.
            </li>
            <li>
              When a monitored Subreddit has a rising post that contains a
              specified Keyword, the post's link is sent as a text message to
              the user.
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

export default Reddalerts;
