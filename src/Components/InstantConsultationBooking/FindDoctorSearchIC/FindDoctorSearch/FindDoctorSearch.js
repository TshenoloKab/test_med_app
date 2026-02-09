import React, { useState, useRef } from 'react';
import './FindDoctorSearch.css';

const doctorSpecialities = [
    "Cardiologist",
    "Dermatologist",
    "ENT",
    "Neurologist",
    "Pediatrician",
    "Psychiatrist",
    "General Physician"
];

const FindDoctorSearch = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');
    const [showList, setShowList] = useState(false);
    const searchRef = useRef(null);

    const handleFocus = () => setShowList(true);
    const handleBlur = (e) => {
        // Delay hiding to allow click
        setTimeout(() => setShowList(false), 150);
    };

    const handleSelect = (speciality) => {
        setSearchText(speciality);
        setShowList(false);
        if (onSearch) onSearch(speciality); // call parent callback
    };

    return (
        <div className="doctor-search-box" ref={searchRef}>
            <input
                type="text"
                placeholder="Search doctors by specialty..."
                className="search-doctor-input-box"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />

            {showList && (
                <div className="search-doctor-input-results">
                    {doctorSpecialities
                        .filter(s => s.toLowerCase().includes(searchText.toLowerCase()))
                        .map((s, index) => (
                            <div
                                key={index}
                                className="search-doctor-result-item"
                                onClick={() => handleSelect(s)}
                            >
                                <span>{s}</span>
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};

export default FindDoctorSearch;
