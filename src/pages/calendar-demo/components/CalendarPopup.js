import React, { useState, useEffect, useRef } from "react";
import { FaLock, FaLockOpen } from "react-icons/fa";
import "../styles/CalendarPopup.css";
import moment from "moment";

const CalendarPopup = ({
  customerName,
  setterName,
  apptDate,
  apptTime,
  address,
  notes,
  locked,
  closer,
  closers,
  onClose,
  onCloserChange,
  onLockStateChange,
  category,
}) => {
  const [editedCloser, setEditedCloser] = useState(closer);
  const [isLocked, setIsLocked] = useState(locked);

  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + 2 + "px";
    }
  }, [notes]);

  const isPast = moment().isAfter(moment(apptDate, "MMMM Do YYYY"), "day");

  const handleCloserChange = (newCloser) => {
    setEditedCloser(newCloser);
    onCloserChange(newCloser);
  };

  const handleLockUnlock = () => {
    if (isPast) {
      // Don't allow modifications to old appointments
      return;
    }
    const newLockStatus = !isLocked;
    setIsLocked(newLockStatus);
    onLockStateChange(newLockStatus);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        {!isPast ? (
          <button className="lock-unlock-button" onClick={handleLockUnlock}>
            {isLocked ? <FaLock /> : <FaLockOpen />}
          </button>
        ) : (
          <FaLock />
        )}

        {category === "ProposalAppointment" ? (
          <>
            <h2>Proposal Appointment</h2>
            <div className="popup-field">
              <strong>Customer:</strong> {customerName}
            </div>
            <div className="popup-field">
              <strong>Setter:</strong> {setterName}
            </div>
            <div className="popup-field">
              <strong>Appointment Date:</strong> {apptDate}
            </div>
            <div className="popup-field">
              <strong>Appointment Time:</strong> {apptTime}
            </div>
            <div className="popup-field">
              <strong>Address:</strong> {address}
            </div>
            <div className="popup-field">
              <strong>Closer:</strong>
              {!isPast ? (
                <select
                  value={editedCloser}
                  onChange={(e) => handleCloserChange(e.target.value)}
                >
                  {closers.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              ) : (
                <span> {closer}</span>
              )}
            </div>
            <div className="popup-field">
              <strong>Notes:</strong>
              <textarea value={notes} readOnly ref={textareaRef} />
            </div>
            <div className="popup-map">
              <p>
                Production would display a map here showing the appointment
                location.
              </p>
            </div>
          </>
        ) : (
          <>
            <h2>Personal Appointment</h2>
            <div className="popup-field">
              <strong>Customer:</strong> {customerName}
            </div>
            <div className="popup-field">
              <strong>Setter:</strong> {setterName}
            </div>
            <div className="popup-field">
              <strong>Appointment Date:</strong> {apptDate}
            </div>
            <div className="popup-field">
              <strong>Appointment Time:</strong> {apptTime}
            </div>
            <div className="popup-field">
              <strong>Address:</strong> {address}
            </div>
            <div className="popup-field">
              <strong>Closer:</strong> {closer}
            </div>
            <div className="popup-field">
              <strong>Notes:</strong> {notes || "No notes provided"}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CalendarPopup;
