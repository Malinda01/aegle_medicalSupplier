import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
  };

  // Check if the current page is Login, Register, or WelcomePage
  const isSimplifiedHeader =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow d-flex justify-content-center align-items-center"
      style={{
        padding: "0.25rem 1rem",
        height: "130px",
        backgroundColor: "#31afd4",
      }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <div
          className="navbar-brand d-flex align-items-center"
          onClick={() => handleNavigation("/")}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/6512/6512351.png"
            alt="Logo"
            className="me-3 rounded-circle align-items-start"
            style={{ height: "100%" }} // Ensure the logo fits the header height
          />
          <span
            style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#fff" }}
          >
            Aegle
          </span>
        </div>
        {!isSimplifiedHeader && (
          <div
            className="collapse navbar-collapse d-flex justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {/* View Appointment */}
              <li className="nav-item">
                <button
                  onClick={() => handleNavigation("/ViewAppointments")}
                  className="btn btn-link text-white nav-link"
                >
                  View Appointment
                </button>
              </li>
              {/* View Commisions */}
              <li className="nav-item">
                <button
                  onClick={() => handleNavigation("/ViewCommision")}
                  className="btn btn-link text-white nav-link"
                >
                  View Commisions
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
