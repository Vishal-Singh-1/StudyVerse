import { useState } from "react";
import axios from "axios";
import "./login.css"; // ⬅️ import the CSS file

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("Login button clicked"); // ✅ Debug: check if this runs

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      console.log("Login success:", res.data); // ✅ Debug: log server response

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      window.location.href = "/dashboard";
    } catch (err) {
      console.log("Login error:", err.response?.data || err.message); // ✅ Show backend error
      setError(err.response?.data?.msg || "Login failed");
    }
  };


  return (
    <div className="Container">
    <div className="login-container">
      <h2>Welcome Back</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="login-options">
          <label>
            <input type="checkbox" /> Remember Me
          </label>
          <a href="#">Forgot Password?</a>
        </div>

        <button type="submit">Log In</button>
      </form>

      <div className="login-footer">
        Don’t have an account? <a href="#">Register</a>
      </div>
    </div>
    </div>
  );
}

export default Login;
