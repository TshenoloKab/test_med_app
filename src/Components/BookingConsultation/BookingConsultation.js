import React from "react";
import DoctorCard from "../DoctorCard/DoctorCard";
import FindDoctorSearch from "../FindDoctorSearch/FindDoctorSearch";

const BookingConsultation = () => {
  const doctors = [
    // Sample doctor data, you can fetch this data dynamically from an API
    {
      name: "Dr. John Doe",
      speciality: "Cardiologist",
      experience: "15",
      ratings: "4.5",
      profilePic: "https://via.placeholder.com/150",
    },
    {
      name: "Dr. Jane Smith",
      speciality: "Dermatologist",
      experience: "10",
      ratings: "4.8",
      profilePic: "https://via.placeholder.com/150",
    },
    // Add more doctors as needed
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
