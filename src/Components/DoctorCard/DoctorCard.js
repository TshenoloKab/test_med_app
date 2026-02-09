import React, { useState } from 'react';
import './DoctorCard.css';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const DoctorCard = ({ name, speciality, experience, ratings, profilePic }) => {
  const [showForm, setShowForm] = useState(false);
  const [appointments, setAppointments] = useState([]);

  const handleBooking = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (appointmentData) => {
    setAppointments([...appointments, appointmentData]);
    setShowForm(false);
  };

  const handleCancel = (appointmentId) => {
    // Remove appointment by its ID
    const updatedAppointments = appointments.filter((appointment) => appointment.id !== appointmentId);
    setAppointments(updatedAppointments);
  };

  return (
    <div className="doctor-card-container">
      <div className="doctor-card-details-container">
        <div className="doctor-card-profile-image-container">
          {profilePic ? (
            <img src={profilePic} alt={name} />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              fill="currentColor"
              className="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
          )}
        </div>

        <div className="doctor-card-details">
          <div className="doctor-card-detail-name">{name}</div>
          <div className="doctor-card-detail-speciality">{speciality}</div>
          <div className="doctor-card-detail-experience">{experience} years experience</div>
          <div className="doctor-card-detail-consultationfees">Ratings: {ratings}</div>
        </div>

        <div>
          <button className="book-appointment-btn" onClick={handleBooking}>
            <div>Book Appointment</div>
            <div>No Booking Fee</div>
          </button>
        </div>
      </div>

      {showForm && <AppointmentForm doctorName={name} onSubmit={handleFormSubmit} />}
      
      {/* Render appointments */}
      <div className="appointments-list">
        {appointments.length > 0 ? (
          appointments.map((appointment) => (
            <div key={appointment.id} className="appointment-item">
              <div>
                <p>Patient: {appointment.name}</p>
                <p>Appointment Date: {appointment.date}</p>
                <p>Appointment Time: {appointment.time}</p>
              </div>
              <button
                className="cancel-appointment-btn"
                onClick={() => handleCancel(appointment.id)}
              >
                Cancel Appointment
              </button>
            </div>
          ))
        ) : (
          <p>No appointments booked yet.</p>
        )}
      </div>
    </div>
  );
};

export default DoctorCard;
