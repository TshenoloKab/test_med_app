// src/Components/Login/Login.js
import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({email:"", password:""});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if(!formData.email) validationErrors.email = "Email is required";
    if(!formData.password) validationErrors.password = "Password is required";

    if(Object.keys(validationErrors).length === 0) {
      alert("Login Successful!");
      console.log(formData);
      setFormData({email:"", password:""});
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container">
      <div className="login-grid">
        <div className="login-text">
          <h2>Login</h2>
        </div>
        <div className="login-text">
          Are you a new member? <a href="/signup" style={{color:"#2190FF"}}>Sign Up Here</a>
        </div>
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your email"
              />
              {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your password"
              />
              {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
            </div>
            <div className="btn-group">
              <button type="submit" className="btn btn-primary">Login</button>
              <button type="reset" className="btn btn-danger">Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
