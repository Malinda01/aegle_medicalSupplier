import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ViewCommision = () => {
  return (
    <div
      className="d-flex justify-content-top align-items-center"
      style={{ height: "100vh", flexDirection: "column", paddingTop: "150px" }}
    >
      <div className="text-center mb-4">
        <h1>View Commision</h1>
        <p>Here you can view all your Commision.</p>
      </div>
      <div className="table-responsive">
        <table className="table table-hover table-sm table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Appointment Number</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>$100</td>
            </tr>
            <tr>
              <td>002</td>
              <td>$150</td>
            </tr>
            <tr>
              <td>003</td>
              <td>$200</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewCommision;
