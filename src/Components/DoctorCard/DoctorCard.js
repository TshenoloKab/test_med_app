import React from "react";
import "./DoctorCard.css";

const DoctorCard = ({ name, speciality, experience, ratings }) => {
  return (
    <div className="doctor-card">
      {/* Doctor emoji */}
      <div className="doctor-img-emoji">🩺</div>

      <h3>{name}</h3>
      <p>{speciality}</p>
      <p>Experience: {experience} yrs</p>
      <p>Rating: {ratings} ⭐</p>
      <button className="btn-book">Book</button>
    </div>
  );
};

export default DoctorCard;
