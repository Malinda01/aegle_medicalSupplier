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
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">No of Products</h5>
              <p className="card-text" style={{ fontSize: "24px" }}>
                120
              </p>
            </div>
          </div>
        </div>
        {/* Column 2 */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Active Orders</h5>
              <p className="card-text" style={{ fontSize: "24px" }}>
                45
              </p>
            </div>
          </div>
        </div>
        {/* Column 3 */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Completed Orders</h5>
              <p className="card-text" style={{ fontSize: "24px" }}>
                75
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
