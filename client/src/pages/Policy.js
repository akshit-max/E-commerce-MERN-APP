// import React from 'react'
// import Layout from '../components/Layout/Layout'

// const HomePage = () => {
//   return (
  
//         <Layout>
//       <h1>Privacy Policy Page</h1>
//       </Layout>
  
//   )
// }

// export default HomePage

import React from 'react';
import Layout from '../components/Layout/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout title={'Privacy Poliicy'}>
      <div className="container mt-5 mb-5">
        <h1 className="text-center mb-4 text-primary">Privacy Policy</h1>
        
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="privacy-policy-content">
              <h2 className="mt-4">Introduction</h2>
              <p>
                At Techinfoyt, we respect your privacy and are committed to protecting the personal information you share with us. This privacy policy explains how we collect, use, and protect your information when you visit our website.
              </p>

              <h3 className="mt-4">1. Information We Collect</h3>
              <p>
                We collect both personal and non-personal information. Personal information may include your name, email address, phone number, and payment details, which you provide when registering, placing an order, or interacting with us. Non-personal data may include information such as your IP address, browser type, and activity on our website.
              </p>

              <h3 className="mt-4">2. How We Use Your Information</h3>
              <p>
                Your personal information is used to fulfill your orders, communicate with you about your account or transactions, and provide customer service. We may also use this data to send promotional emails or improve our website's performance.
              </p>

              <h3 className="mt-4">3. Data Security</h3>
              <p>
                We take the security of your personal data seriously. We use industry-standard encryption and secure connections to protect your information. However, no method of online data transmission is 100% secure, and we cannot guarantee the absolute security of your data.
              </p>

              <h3 className="mt-4">4. Cookies and Tracking Technologies</h3>
              <p>
                We use cookies and other tracking technologies to improve your experience on our website. Cookies help us remember your preferences, track usage patterns, and personalize your browsing experience. You can control cookies through your browser settings.
              </p>

              <h3 className="mt-4">5. Third-Party Services</h3>
              <p>
                We do not share your personal information with third parties unless required for the processing of your transactions (e.g., payment gateways) or as legally required. We may use third-party services to analyze website traffic or serve advertisements.
              </p>

              <h3 className="mt-4">6. Changes to This Privacy Policy</h3>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the "Last Updated" date at the bottom of this page will reflect the most recent revision. We encourage you to review this policy periodically.
              </p>

              <h3 className="mt-4">7. Contact Us</h3>
              <p>
                If you have any questions or concerns about our Privacy Policy or how we handle your data, please contact us at:
              </p>
              <p><strong>Email:</strong> support@techinfoyt.com</p>
              <p><strong>Phone:</strong> +1 (123) 456-7890</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
