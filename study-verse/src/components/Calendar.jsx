// src/components/CalendarCard.jsx
import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css"; // ✅ with dot-slash

function CalendarCard() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="card">
      <Calendar onChange={setDate} value={date} />
      {/* <p style={{ marginTop: "10px" }}>Selected: {date.toDateString()}</p> */}
    </div>
  );
}

export default CalendarCard;
