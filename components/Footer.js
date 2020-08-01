import React from 'react';
import './Footer.scss';

const Footer = () => {
    return <footer className="Footer">&copy; {new Date().getFullYear()}, netlabelguide.com</footer>;
};

export default Footer;