import { Link } from "react-router-dom";
import React, { useState } from "react";

function Home() {
  return (
    <div
      className="container text-center mt-5 mb-5"
      style={{ paddingTop: "20px" }}
    >
      {" "}
      {/* Added mb-5 for bottom margin */}
      <div className="container text-center mt-4 mb-5 ">
        <h1>Welcome to Aegle</h1>
        <p>Universal Healthcare at Your Fingertips</p>
      </div>
      {/* Main row */}
      <div className="row mt-4">
        {/* Column 1 */}
        <div className="col-md-6">
          <div className="card">
            <img
              src="https://i.pinimg.com/736x/de/20/37/de20372a7a222a686f9c57da676eeec3.jpg"
              alt="Find Doctors"
              className="card-img-top"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <Link
                className="btn btn-primary"
                to="/ViewAppointments"
                style={{
                  fontSize: "15px",
                  padding: "10px 20px",
                  width: "200px", // Set desired width
                  height: "50px", // Set desired height
                  display: "block", // Ensure content aligns properly
                  margin: "0 auto",
                  alignItems: "center", // Center vertically
                  justifyContent: "center", // Center horizontally
                }}
              >
                View Appointments
              </Link>
            </div>
          </div>
        </div>
        {/* Column 2 */}
        <div className="col-md-6">
          <div className="card">
            <img
              src="https://i.pinimg.com/236x/5e/94/d4/5e94d4738c3ad8b52a1b60fb6f136ada.jpg"
              alt="Emergency Info"
              className="card-img-top"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <Link
                className="btn btn-primary"
                to="/ViewCommision"
                style={{
                  fontSize: "15px",
                  padding: "10px 20px",
                  width: "200px", // Set desired width
                  height: "50px", // Set desired height
                  display: "block", // Ensure content aligns properly
                  margin: "0 auto",
                  alignItems: "center", // Center vertically
                  justifyContent: "center", // Center horizontally
                }}
              >
                View Commisions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
