// import React from 'react'
// import Layout from '../components/Layout/Layout'

// const HomePage = () => {
//   return (
  
//         <Layout>
//       <h1>About Page</h1>
//       </Layout>
  
//   )
// }

// export default HomePage



import React from 'react';
import Layout from '../components/Layout/Layout';

const AboutPage = () => {
  return (
    <Layout title={"About Us - Ecommerce App"} description="Learn more about our ecommerce platform.">
      <div className="container mt-5 mb-5">
        <h1 className="text-center mb-4">About Us</h1>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <p className="lead">
              Welcome to <strong>🛒</strong>, your number one source for all things shopping. We're dedicated to providing you the best online shopping experience with a focus on dependability, customer service, and uniqueness.
            </p>
            <p>
              Founded in 2025, our platform has come a long way from its beginnings. When we first started, our passion for quality and innovation drove us to start this platform so that we can offer you a seamless, responsive, and delightful ecommerce journey.
            </p>
            <p>
              We hope you enjoy our products and services as much as we enjoy offering them to you. If you have any questions or comments, please don’t hesitate to contact us.
            </p>
            <p className="text-muted">— The 🛒 Team</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;

