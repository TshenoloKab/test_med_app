import React, { useState } from "react";
import "./ReviewForm.css";

const ReviewForm = ({ doctorName, appointmentDate, appointmentTime }) => {
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const reviewData = {
      doctorName,
      appointmentDate,
      appointmentTime,
      rating,
      review,
    };

    console.log("Review submitted:", reviewData);

    // Reset form
    setRating("");
    setReview("");
    setShowForm(false);
  };

  return (
    <div className="review-form-container">
      <h3>Consultation Summary</h3>

      <p><strong>Doctor:</strong> {doctorName}</p>
      <p><strong>Date:</strong> {appointmentDate}</p>
      <p><strong>Time:</strong> {appointmentTime}</p>

      {!showForm && (
        <button
          className="review-btn"
          onClick={() => setShowForm(true)}
        >
          Write a Review
        </button>
      )}

      {showForm && (
        <form className="review-form" onSubmit={handleSubmit}>
          <label>
            Rating:
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="1">1 - Poor</option>
              <option value="2">2</option>
              <option value="3">3 - Average</option>
              <option value="4">4</option>
              <option value="5">5 - Excellent</option>
            </select>
          </label>

          <label>
            Review:
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Write your feedback..."
              required
            />
          </label>

          <button type="submit" className="submit-review-btn">
            Submit Review
          </button>
        </form>
      )}
    </div>
  );
};

export default ReviewForm;
