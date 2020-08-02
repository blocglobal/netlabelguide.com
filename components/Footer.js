import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="Footer">
      &copy; {new Date().getFullYear()}, netlabelguide.com
      <br />
      Created by <a href="https://blocsonic.com">blocGLOBAL / blocSonic.com</a>
    </footer>
  );
};

export default Footer;
