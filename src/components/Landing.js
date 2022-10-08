import React, { Fragment } from "react";
import { Link } from "react-router-dom";

//import icons from fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faInstagram,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Landing = () => {
  return (
    <Fragment>
      <p
        className="summary"
        style={{ textAlign: "left", color: "rgb(103, 197, 103)" }}
      >
        Hi there, my name is
      </p>

      <h1 style={{ color: "white" }}>
        Brendan Cheng<text className="pronouns">(he/him/his)</text>
      </h1>

      <div className="summary">
        <h2>I build web applications.</h2>

        <p>I am a Software Engineer based in Los Angeles.</p>
        <p>
          <span style={{ color: "rgb(103, 197, 103)" }}>
            I strive to constantly evolve with the tech landscape.{" "}
          </span>
          As I carve my place as an eager learner and a reliable performer, I've
          enjoyed many challenges and the rewards of perseverance.
          <p>
            From developing avionics software to creating web applications, I'm
            always hungry to heighten my skills as an engineer. The cherry on
            top? Delivering empowering software solutions. Initially starting
            out with C++ and QML,{" "}
            <span style={{ color: "rgb(103, 197, 103)" }}>
              I've found my place{" "}
            </span>
            writing JavaScript, TypeScript, Node.js, React, GraphQL, and SQL.
            Craving deployment knowledge, I'm learning and using AWS,
            CloudFlare, and Github Actions for CI/CD.
          </p>
          <p>
            Working in dynamic teams have allowed me to wear many hats and
            remain flexible. I excel in collaborative and driven environments,
            from participating in to leading Agile scrums to develop software
            efficiently.
          </p>
        </p>
        <p style={{ color: "rgb(103, 197, 103)" }}>This is home.</p>
      </div>

      <div className="socialGroup">
        <a
          href="https://linkedin.com/in/brendancheng"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>

        <a
          href="https://github.com/boxcarcoder"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a
          href="https://stackoverflow.com/users/10426919/brendan"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          <FontAwesomeIcon icon={faStackOverflow} />
        </a>

        <a
          href="mailto:brendancheng333@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>

        <a
          href="https://www.instagram.com/brendancheng_/"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>

      <div className="linkGroup">
        <Link to="/about" className="link">
          About Me
        </Link>
        <Link to="/projects" className="link">
          Projects
        </Link>
      </div>
    </Fragment>
  );
};

export default Landing;
