// import React from 'react'
// import Layout from '../components/Layout/Layout'

// const HomePage = () => {
//   return (
  
//         <Layout>
//       <h1>Page not found!!</h1>
//       </Layout>
  
//   )
// }

// export default HomePage

import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom';
// import './PageNotFound.css'; // Import the CSS file

const PageNotFound = () => {
  return (
    <Layout title={'Page Not Found'}>
      <div className="pagenotfound-container">
        <h1 className="pagenotfound-heading">404</h1>
        <p className="pagenotfound-subheading">Oops! Page not found.</p>
        <p className="pagenotfound-text">
          The page you are looking for might have been removed, had its name changed or is temporarily unavailable.
        </p>
        <Link to="/" className="pagenotfound-link">Go to Homepage</Link>
      </div>
    </Layout>
  );
};

export default PageNotFound;
