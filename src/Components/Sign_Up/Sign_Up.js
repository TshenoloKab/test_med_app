// src/Components/Sign_Up/Sign_Up.js
import React, { useState } from "react";
import "./Sign_Up.css";

const Sign_Up = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const validate = () => {
    const newErrors = {};
    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert("Sign Up Successful!");
      console.log(formData);
      setFormData({name: "", phone: "", email: "", password: ""});
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container">
      <div className="signup-grid">
        <div className="signup-text">
          <h1>Sign Up</h1>
        </div>
        <div className="signup-text1">
          Already a member? <a href="/login" style={{color:"#2190FF"}}>Login</a>
        </div>
        <div className="signup-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your name"
              />
              {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your phone number"
              />
              {errors.phone && <p style={{color:"red"}}>{errors.phone}</p>}
            </div>
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
              <button type="submit" className="btn btn-primary">Submit</button>
              <button type="reset" className="btn btn-danger">Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sign_Up;
