function Dashboard() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <iframe
        src="/Dashboard/index.html"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        title="Dashboard"
      />
    </div>
  );
}

export default Dashboard;