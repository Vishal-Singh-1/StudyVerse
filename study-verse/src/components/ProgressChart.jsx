import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "DSA", progress: 80 },
  { name: "Web", progress: 60 },
  { name: "AI", progress: 30 },
  { name: "CN", progress: 50 },
  { name: "DBMS", progress: 70 },
];

function ProgressChart() {
  return (
    <div style={{ width: "100%", height: "250px" }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip
            contentStyle={{ backgroundColor: "#1e1e1e", border: "1px solid #444", color: "#fff" }}
            itemStyle={{ color: "#fff" }}
            labelStyle={{ color: "#ccc" }}
          />
          <Bar dataKey="progress" fill="#ffffff" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProgressChart;
