import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const initialAppointments = [
  { id: 1, patientName: "John Doe", time: "10:00 AM", status: "pending" },
  { id: 2, patientName: "Jane Smith", time: "11:30 AM", status: "pending" },
  { id: 3, patientName: "Alice Johnson", time: "2:00 PM", status: "pending" },
  {
    id: 4,
    patientName: "Malinda Amarakoon",
    time: "5:00 PM",
    status: "pending",
  },
];

const ViewAppointments = () => {
  const [appointments, setAppointments] = useState(initialAppointments);
  const navigate = useNavigate();

  const handleAccept = (id) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === id
          ? { ...appointment, status: "accepted" }
          : appointment
      )
    );
  };

  const handleDecline = (id) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === id
          ? { ...appointment, status: "declined" }
          : appointment
      )
    );
  };

  const handleVideoCall = (id) => {
    navigate(`/VideoConference/${id}`);
  };

  return (
    <div className="container mt-5" style={{ paddingTop: "20px" }}>
      <h1 className="text-center mb-4">View Appointments</h1>
      <div className="row">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{appointment.patientName}</h5>
                <p className="card-text">Time: {appointment.time}</p>
                <p className="card-text">
                  Status: <strong>{appointment.status}</strong>
                </p>
                {appointment.status === "pending" && (
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-success"
                      onClick={() => handleAccept(appointment.id)}
                    >
                      Accept
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDecline(appointment.id)}
                    >
                      Decline
                    </button>
                  </div>
                )}
                {appointment.status === "accepted" && (
                  <div className="mt-3">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleVideoCall(appointment.id)}
                    >
                      Video Call
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAppointments;
