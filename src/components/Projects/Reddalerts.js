import React, { Fragment } from 'react';

const Reddalerts = () => {
  return (
    <Fragment>
      <h1>Reddalerts</h1>

      <h2>
        An application for users to monitor their favorite Subreddits from the
        website, Reddit, based on specified keywords.
      </h2>

      <h3> Installation And Set Up </h3>

      <p>Make sure `node` and `npm` are installed on the current machine. </p>
      <ol>
        <li>
          1. Clone the repository:
          https://github.com/boxcarcoder/Reddalerts-client.git{' '}
        </li>
        <li>2. Install all dependencies: npm install</li>
        <li>3. Start the server: npm start`</li>
        <li>4. Visit the application: `http://localhost:3000/`</li>
      </ol>

      <h3>Visit the Deployed Application: </h3>

      <p>
        Link: https://reddalerts.com/ . This application is deployed with the
        following configurations:
        <ol>
          <li>Domain registered through Porkbun.</li>
          <li>
            SSL Certificate generated by Amazon AWS ACM for security and
            encryption.
          </li>
          <li>DNS configured through CloudFlare to direct requests: </li>
          <ol>
            <li>
              requests to my domains are redirected to distributions to respond
              with static assets.
            </li>
            <li>
              requests to API calls are redirected to the server-side, which is
              handled by the server-side AWS Elastic Beanstalk load-balancer
              that's configured with the SSL certificate.
            </li>
          </ol>
          <li>Static assets hosted on AWS S3 buckets.</li>
          <li>Distributions set up with AWS CloudFront.</li>
        </ol>
      </p>

      <h3>Thoughts and Overview</h3>

      <p>
        I wrote each React component using functional components, as opposed to
        class components, due to a cleaner code style as well as the reduced
        need for using the `this` keyword that is prevalent in class components.
        With functional components, I make use of destructuring props as well as
        React Redux states for each component to use for rendering. I utilize a
        React Redux store, actions, and reducers to place and change global app
        state. Using React Redux allowed me to separate the logic between
        components and state management. Redux action objects, containing a type
        and payload, are dispatched by action creators to the store, which then
        sends the action object and the application's current state to the
        reducers. The corresponding reducer will then produce a new state for
        the store, based on the action object received and the current state of
        the application. The action creators are triggered by user interactions
        with the React components, as well as by React hooks. Many of the React
        components utilize the useState() and useEffect() React hooks. The use
        of hooks allowed me to use local state and side effects without the need
        to write classes. For example, I would have needed to write a
        constructor to initialize a component's local state, and used
        `componentDidMount() or componentDidUpdate()` to change the state. With
        useState(), I can create the local state with a function call along with
        a state modifier handler. Any time I need to set or change the state, I
        can call the state modifier handler. With the use of the useEffect()
        hook, I was able to run side effects without the use of
        `componentDidMount() or componentDidUpdate()`. I found that this style
        of code was more clean and intuitive to read. I found the use of ES6+
        Javascript excellent for numerous reasons. The use of arrow functions
        made the React component code more readable with the use of functional
        components and how props and Redux states are destructured. Error
        handling through the try and catch pattern, as well as the async and
        await pattern to deal with promises were very useful for dealing with
        asynchronous operations, such as fetching or updating data in the
        server-side.
      </p>
    </Fragment>
  );
};

export default Reddalerts;
