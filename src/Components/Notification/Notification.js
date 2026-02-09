import React, { useEffect, useState } from "react";
import "./Notification.css";

const Notification = ({ appointmentCancelled }) => {
  const [showNotification, setShowNotification] = useState(true);
  const [username, setUsername] = useState("");
  const [doctor, setDoctor] = useState(null);
  const [appointment, setAppointment] = useState(null);

  // Load stored data
  useEffect(() => {
    const storedUser = sessionStorage.getItem("email");
    const storedDoctor = JSON.parse(localStorage.getItem("doctorData"));

    if (storedDoctor) {
      const storedAppointment = JSON.parse(
        localStorage.getItem(storedDoctor.name)
      );

      setDoctor(storedDoctor);
      setAppointment(storedAppointment);
    }

    if (storedUser) setUsername(storedUser);
  }, []);

  // Hide notification when appointment is cancelled
  useEffect(() => {
    if (appointmentCancelled) {
      setShowNotification(false);
    }
  }, [appointmentCancelled]);

  if (!showNotification || !appointment) return null;

  return (
    <div className="notification-container">
      <h3>Appointment Confirmed ✅</h3>
      <p><strong>Patient:</strong> {username}</p>
      <p><strong>Doctor:</strong> {doctor?.name}</p>
      <p><strong>Date:</strong> {appointment?.date}</p>
      <p><strong>Time:</strong> {appointment?.time}</p>
    </div>
  );
};

export default Notification;
