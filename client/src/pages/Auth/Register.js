import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// import "../../styles/AuthStyles.css";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // const res = await axios.post("/api/v1/auth/register", {
      //   name,
      //   email,
      //   password,
      //   phone,
      //   address,
      //   answer,
      // });
      const res = await axios.post(`${process.env.REACT_APP_API}/auth/register`, {
  name, email, password, phone, address, answer,
});

      if (res && res.data.success) {
        // toast.success("registered successfully");
        // console.log("hello")
        toast.success(res.data && res.data.message);
        navigate("/login");
      }
      
      else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } 
  };

  return (
    <Layout title="Register - Ecommer App">
      <div className="form-container " style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit}>
          <h4 className="title">REGISTER FORM</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Address"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="What is Your Favorite sports"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            REGISTER
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;




// import React, { useState } from "react";
// import Layout from "./../../components/Layout/Layout";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [answer, setAnswer] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         `${process.env.REACT_APP_API}/api/v1/auth/register`,
//         { name, email, password, phone, address, answer }
//       );

//       if (res.data?.success) {
//         toast.success(res.data.message || "Registered successfully!");
//         navigate("/login");
//       } else {
//         toast.error(res.data.message || "Registration failed.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       if (error.response?.data?.message) {
//         toast.error(error.response.data.message); // Handle backend message (e.g., duplicate email)
//       } else {
//         toast.error("Something went wrong. Please try again.");
//       }
//     }
//   };

//   return (
//     <Layout title="Register - Ecommerce App">
//       <div className="form-container" style={{ minHeight: "90vh" }}>
//         <form onSubmit={handleSubmit}>
//           <h4 className="title">REGISTER FORM</h4>
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control mb-3" placeholder="Enter Your Name" required autoFocus />
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control mb-3" placeholder="Enter Your Email" required />
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control mb-3" placeholder="Enter Your Password" required />
//           <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control mb-3" placeholder="Enter Your Phone" required />
//           <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control mb-3" placeholder="Enter Your Address" required />
//           <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} className="form-control mb-3" placeholder="What is Your Favorite Sport?" required />
//           <button type="submit" className="btn btn-primary">REGISTER</button>
//         </form>
//       </div>
//     </Layout>
//   );
// };

// export default Register;
