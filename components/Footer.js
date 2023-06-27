import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import IconLink from './IconLink';

const Footer = () => {
  return (
    <footer className="Footer">
      &copy; {new Date().getFullYear()}, netlabelguide.com
      <br />
      Created by <a href="https://blocsonic.com">blocGLOBAL / blocSonic.com</a>
      <p>
        <a
          href="https://github.com/blocglobal/netlabelguide.com"
          aria-label="Official GitHub repository"
          className="github"
        >
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
