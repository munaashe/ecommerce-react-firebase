import * as Route from 'constants/routes';
import React from 'react';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-col-1">
        <strong>
          <span>
            All rights reserved.
            {' '}
            <a href="https://github.com/munaashe">Denis SiD</a>
          </span>
        </strong>
      </div>
      <div className="footer-col-2">
        <h5>
          &copy;&nbsp;
          {new Date().getFullYear()}
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
