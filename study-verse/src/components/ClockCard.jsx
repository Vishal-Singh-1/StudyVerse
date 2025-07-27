import React, { useEffect, useState } from "react";
import "./ClockCard.css";

function ClockCard() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true, // Optional: use 12-hour format (AM/PM)
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString(undefined, {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="clock-card">
      <div className="time">{formatTime(time)}</div>
      <div className="date">{formatDate(time)}</div>
    </div>
  );
}

export default ClockCard;
