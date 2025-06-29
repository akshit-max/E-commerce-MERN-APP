import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="text-center">All Rights Reserved &copy; Techinfoyt</h1>
      <p className="text-center mt-3">
        <Link to="/about" className="text-light m-2">About</Link>
        <Link to="/contact" className="text-light m-2">Contact</Link>
        <Link to="/policy" className="text-light m-2">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
