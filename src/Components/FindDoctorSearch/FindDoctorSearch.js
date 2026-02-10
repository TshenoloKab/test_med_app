import React from "react";
import "./FindDoctorSearch.css";

const FindDoctorSearch = () => {
  return (
    <div className="find-doctor-search">
      <input
        type="text"
        placeholder="Search doctor by name or specialty..."
      />
      <button>Search</button>
    </div>
  );
};

export default FindDoctorSearch;
