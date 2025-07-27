import React from "react";
import "./PD.css";
import Calendar from "./components/Calendar";
import TodoList from "./components/TodoList";
import ClockCard from "./components/ClockCard";
import ReminderCard from "./components/ReminderCard";
import ProgressChart from "./components/ProgressChart";

function Dashboard() {
  return (
    <div className="dashboard-Container"  > 
      <div className="dashboard-heading">
        <h2>Personal Dashboard</h2>
      </div>
      <div className="dashboard-row1">
        <div className="TL">
          <div id="clockCard" className="dashboard-card "><ClockCard /></div>
          <div id="ReminderCard" className="dashboard-card"><ReminderCard /></div>
        </div>
        <div id="progressCard" className="dashboard-card"><ProgressChart /></div>
      </div>
      <div className="dashboard-row2">
        <div className="dashboard-card" id="todoCard"><TodoList /></div>
        <div id="calendarCard" className="dashboard-card"><Calendar /></div>
      </div>

    </div>
  );
}

export default Dashboard;
