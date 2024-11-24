import React, { useState } from "react";
import "../styles/RoutesPopup.css";

const RoutesPopup = ({
  appointments,
  selectedDate,
  closer,
  onClose,
  openCalendarPopup,
}) => {
  const [selectedPin, setSelectedPin] = useState(null);
  const [travelTime, setTravelTime] = useState("");

  const handlePinClick = (appointment, index) => {
    if (index === appointments.length - 1) {
      // If the last pin is clicked, open the edit popup directly
      openCalendarPopup(appointment);
    } else {
      setTravelTime("Estimated travel time: 15 mins");
      setSelectedPin({ ...appointment, index });
    }
  };

  const handleEditClick = () => {
    if (selectedPin) {
      const eventToEdit = appointments[selectedPin.index];
      openCalendarPopup(eventToEdit);
    }
  };

  return (
    <div className="popup-overlay-routes">
      <div className="popup-content-routes">
        <button className="close-button-routes" onClick={onClose}>
          ×
        </button>
        <h2>
          {closer} - {selectedDate}
        </h2>
        <div className="popup-map-routes">
          <div className="map-placeholder">
            <p>Production would show a map here with pins for appointments.</p>
            <ul className="mock-pins">
              {appointments
                .filter(
                  (appointment) =>
                    appointment.category !== "PersonalAppointment"
                )
                .map((appointment, index) => (
                  <li
                    key={index}
                    className="mock-pin"
                    onClick={() => handlePinClick(appointment, index)}
                  >
                    Pin {index + 1}: {appointment.address || "Home Location"}
                  </li>
                ))}
            </ul>
          </div>
          {selectedPin && (
            <div className="info-window-placeholder">
              <h4>Next Stop:</h4>
              <p>From: {selectedPin.address}</p>
              <p>
                To:{" "}
                {appointments[selectedPin.index + 1]?.address || "End of route"}
              </p>
              <p>{travelTime}</p>
              {selectedPin.index !== 0 && (
                <button onClick={handleEditClick}>Edit</button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoutesPopup;
