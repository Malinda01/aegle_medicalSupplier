import React from "react";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100 w-100"
      style={{
        backgroundImage: 'url("https://via.placeholder.com/1920x1080")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Explicitly set height
        margin: 0, // Remove default margins
      }}
    >
      <div
        className="container text-center p-5 shadow rounded bg-white"
        style={{ maxWidth: "800px" }}
      >
        <h4
          className="mb-1"
          style={{ fontSize: "1rem", fontWeight: "", color: "#000000" }}
        >
          Doctor Platform
        </h4>

        <h1
          className="mb-4"
          style={{ fontSize: "3rem", fontWeight: "bold", color: "#007bff" }}
        >
          Welcome to Aegle
        </h1>
        <p className="mb-4" style={{ fontSize: "1.5rem", color: "#6c757d" }}>
          Your universal healthcare solution. Access healthcare services at your
          fingertips.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <button onClick={handleRegister} className="btn btn-primary btn-lg">
            Register
          </button>
          <button onClick={handleLogin} className="btn btn-secondary btn-lg">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
