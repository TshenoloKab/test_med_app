import React, { useState } from 'react';
import './AppointmentForm.css';

const AppointmentForm = ({ doctorName, onSubmit }) => {
  const [patientName, setPatientName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ patientName, appointmentDate, appointmentTime });
    // reset form
    setPatientName('');
    setAppointmentDate('');
    setAppointmentTime('');
  };

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <h3>Book Appointment with {doctorName}</h3>
      <div className="form-group">
        <label>Patient Name</label>
        <input
          type="text"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Appointment Date</label>
        <input
          type="date"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Appointment Time</label>
        <input
          type="time"
          value={appointmentTime}
          onChange={(e) => setAppointmentTime(e.target.value)}
          required
        />
      </div>

      <button type="submit">Confirm Appointment</button>
    </form>
  );
};

export default AppointmentForm;
