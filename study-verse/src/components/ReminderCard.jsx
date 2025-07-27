import React, { useState } from "react";
import "./ReminderCard.css";

function ReminderCard() {
  const [reminders, setReminders] = useState([
    { id: 1, text: "Submit DSA assignment", time: "9:00 AM", done: false },
    { id: 2, text: "Team meeting", time: "12:30 PM", done: false },
    { id: 3, text: "Finish React To-Do", time: "6:00 PM", done: false },
  ]);

  const toggleDone = (id) => {
    setReminders((prev) =>
      prev.map((reminder) =>
        reminder.id === id ? { ...reminder, done: !reminder.done } : reminder
      )
    );
  };

  return (
    <div className="reminder-card">
      <h3>🔔Reminders</h3>
      <ul>
        {reminders.map((reminder) => (
          <li
            key={reminder.id}
            className={reminder.done ? "done" : ""}
            onClick={() => toggleDone(reminder.id)}
          >
            <input type="checkbox" checked={reminder.done} readOnly />
            <span className="reminder-text">{reminder.text}</span>
            <span className="reminder-time">{reminder.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReminderCard;
