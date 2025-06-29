// import React from "react";
// import Layout from "./../components/Layout/Layout";
// import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
// const Contact = () => {
//   return (
//     <Layout title={"Contact us"}>
//       <div className="row contactus ">
//         <div className="col-md-6 ">
//           <img
//             src="/images/contactus.jpeg"
//             alt="contactus"
//             style={{ width: "100%" }}
//           />
//         </div>
//         <div className="col-md-4">
//           <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
//           <p className="text-justify mt-2">
//             any query and info about prodduct feel free to call anytime we 24X7
//             vaialible
//           </p>
//           <p className="mt-3">
//             <BiMailSend /> : www.help@ecommerceapp.com
//           </p>
//           <p className="mt-3">
//             <BiPhoneCall /> : 012-3456789
//           </p>
//           <p className="mt-3">
//             <BiSupport /> : 1800-0000-0000 (toll free)
//           </p>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Contact;

// import React from 'react'
// import Layout from '../components/Layout/Layout'

// const HomePage = () => {
//   return (
  
//         <Layout>
//       <h1>Contact Page</h1>
//       </Layout>
  
//   )
// }

// export default HomePage


import React from 'react';
import Layout from '../components/Layout/Layout';

const Contact = () => {
  return (
    <Layout title={'Contact Us'}>
      <div className="container mt-5 mb-5">
        <h1 className="text-center mb-4">Contact Us</h1>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Write your message here"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
