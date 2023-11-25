import React, { useState } from "react";

const LeavePageForm = ({ showPopup, onClose, onSubmit }) => {
  const [reason, setReason] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(reason);
  };

  return (
    <div className={`popup ${showPopup ? "active" : ""}`}>
      <div className="popup-content">
        <h2>Why are you leaving this page?</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Please provide your reason here..."
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default LeavePageForm;
