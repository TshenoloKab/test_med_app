import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css';

const Notification = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    let storedDoctorData = null;
    let storedAppointmentData = null;

    try {
      storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
      if (storedDoctorData?.name) {
        storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData.name));
      }
    } catch (error) {
      console.log("No doctor or appointment stored yet");
    }

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (storedDoctorData) setDoctorData(storedDoctorData);
    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
      setShowNotification(true);
    }
  }, []);

  // Hide notification when appointment is cancelled
  const handleCancel = () => {
    setShowNotification(false);
  };

  return (
    <div>
      <Navbar />
      {children}

      {isLoggedIn && appointmentData && showNotification && (
        <div className="appointment-card">
          <h3>Appointment Booked</h3>
          <p><strong>User:</strong> {username}</p>
          <p><strong>Doctor:</strong> {doctorData?.name || 'Unknown'}</p>
          <p><strong>Date:</strong> {appointmentData?.date || 'N/A'}</p>
          <p><strong>Time:</strong> {appointmentData?.time || 'N/A'}</p>
          <button onClick={handleCancel}>Dismiss</button>
        </div>
      )}
    </div>
  );
};

export default Notification;
