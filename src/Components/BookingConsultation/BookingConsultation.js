import React from "react";
import DoctorCard from "../DoctorCard/DoctorCard";
import FindDoctorSearch from "../FindDoctorSearch/FindDoctorSearch";
import "./BookingConsultation.css";

const BookingConsultation = () => {
  const doctors = [
    {
      name: "Dr. John Doe",
      speciality: "Cardiologist",
      experience: "15",
      ratings: "4.5",
      profilePic: "https://via.placeholder.com/100?text=🩺",
    },
    {
      name: "Dr. Jane Smith",
      speciality: "Dermatologist",
      experience: "10",
      ratings: "4.8",
      profilePic: "https://via.placeholder.com/100?text=🩺",
    },
    {
      name: "Dr. Alice Johnson",
      speciality: "Neurologist",
      experience: "12",
      ratings: "4.7",
      profilePic: "https://via.placeholder.com/100?text=🩺",
    },
  ];

  return (
    <div className="booking-consultation-container">
      <h1>Book an Appointment</h1>
      <FindDoctorSearch />
      <div className="doctor-cards-container">
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} {...doctor} />
        ))}
      </div>
    </div>
  );
};

export default BookingConsultation;
