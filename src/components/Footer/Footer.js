import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

const Footer = () => (
  <div className="Footer">
    <a href="https://github.com/Ssnnaaiill/million-blog">
      <FontAwesomeIcon icon={faGithub} />&nbsp;Github
    </a>
  </div>
)

export default Footer;