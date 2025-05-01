import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Account from "./pages/Account";
import WelcomePage from "./components/WelcomePage";
import Home from "./pages/Home";
// import "bootstrap/dist/css/bootstrap.min.css";
import ViewAppointments from "./pages/ViewAppointments";
import ViewCommision from "./pages/ViewCommision";
import VideoConference from "./pages/VideoConference";

function App() {
  const [patientName, setPatientName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (name) => {
    setPatientName(name);
    setLoggedIn(true);
  };

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            </div>
          </div>
        </nav>
        <div className="content">
          <Header patientName={patientName} loggedIn={loggedIn} />
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/account" element={<Account />} />
            <Route path="/ViewAppointments" element={<ViewAppointments />} />
            <Route path="/ViewCommision" element={<ViewCommision />} />
            <Route
              path="/VideoConference/:patientId"
              element={<VideoConference />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
