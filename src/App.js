import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Components/Landing_Page/LandingPage";
import SignUp from "./Components/Sign_Up/Sign_Up";
import Login from "./Components/Login/Login";
import InstantConsultation from "./Components/InstantConsultationBooking/InstantConsultation";
import BookingConsultation from "./Components/BookingConsultation/BookingConsultation";
import Notification from "./Components/Notification/Notification";
import Reviews from "./Components/Reviews/Reviews";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Navbar always visible */}
        <Navbar />

        {/* Notification wraps routes to appear on every page */}
        <Notification>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/instant-consultation" element={<InstantConsultation />} />
            <Route path="/book-consultation" element={<BookingConsultation />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </Notification>
      </BrowserRouter>
    </div>
  );
}

export default App;
