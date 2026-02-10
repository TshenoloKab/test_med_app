// src/Components/ReviewForm/ReviewForm.js
import React, { useState } from "react";
import "./ReviewForm.css";

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    review: "",
    rating: 0,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRating = (star) => {
    setFormData({ ...formData, rating: star });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.review || !formData.rating) {
      alert("Please fill all fields and select a rating!");
      return;
    }
    console.log("Review submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", review: "", rating: 0 });
  };

  return (
    <div className="review-form-container">
      <h2>Give Your Review</h2>
      {submitted && <p className="success-msg">Thank you for your review!</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
          />
        </div>

        <div className="form-row">
          <label htmlFor="review">Review:</label>
          <input
            type="text"
            id="review"
            name="review"
            value={formData.review}
            onChange={handleChange}
            placeholder="Your review"
          />
        </div>

        <div className="form-row rating-row">
          <label>Rating:</label>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${formData.rating >= star ? "filled" : ""}`}
                onClick={() => handleRating(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
