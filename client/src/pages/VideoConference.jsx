import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faMicrophoneSlash,
  faVideo,
  faVideoSlash,
} from "@fortawesome/free-solid-svg-icons";

const VideoConference = () => {
  const { patientId } = useParams();
  const navigate = useNavigate();
  const [cameraEnabled, setCameraEnabled] = useState(false);
  const [micMuted, setMicMuted] = useState(false);
  const [videoOff, setVideoOff] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    setCameraEnabled(true);
    setIsConnected(true);
  };

  const handleCancel = () => {
    navigate("/ViewAppointments");
  };

  const toggleMic = () => {
    setMicMuted((prev) => !prev);
  };

  const toggleVideo = () => {
    setVideoOff((prev) => !prev);
  };

  return (
    <div className="container mt-5" style={{ paddingTop: "20px" }}>
      <h1 className="text-center mb-4">
        Video Conference with Patient ID: {patientId}
      </h1>
      <div className="d-flex">
        {/* Left Section: Camera Views */}
        <div className="flex-grow-1 me-3">
          <div className="card">
            <div className="card-body text-center">
              {cameraEnabled ? (
                <div className="d-flex justify-content-center mb-3">
                  <div className="me-4">
                    <h5>Doctor's Camera</h5>
                    {!videoOff && (
                      <Webcam
                        audio={!micMuted}
                        height={240}
                        width={320}
                        screenshotFormat="image/jpeg"
                        videoConstraints={{
                          facingMode: "user",
                        }}
                      />
                    )}
                  </div>
                  <div>
                    <h5>Patient's Camera</h5>
                    <Webcam
                      audio={!micMuted}
                      height={240}
                      width={320}
                      screenshotFormat="image/jpeg"
                      videoConstraints={{
                        facingMode: "user",
                        width: videoOff ? 0 : 320,
                        height: videoOff ? 0 : 240,
                      }}
                    />
                  </div>
                </div>
              ) : (
                <p className="text-muted">
                  Camera is disabled. Click "Connect" to start the video call.
                </p>
              )}
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-primary me-3"
                  onClick={handleConnect}
                  disabled={cameraEnabled}
                >
                  {isConnected
                    ? "Connected to the patient"
                    : "Connect to the patient"}
                </button>
                <button
                  className="btn btn-secondary me-3"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                {cameraEnabled && (
                  <>
                    <button
                      className="btn btn-outline-danger me-3"
                      onClick={toggleMic}
                    >
                      <FontAwesomeIcon
                        icon={micMuted ? faMicrophoneSlash : faMicrophone}
                      />
                    </button>
                    <button
                      className="btn btn-outline-danger"
                      onClick={toggleVideo}
                    >
                      <FontAwesomeIcon
                        icon={videoOff ? faVideoSlash : faVideo}
                      />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Customer Documents */}
        <div className="flex-grow-1">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Customer Documents</h5>
              <p className="text-muted">
                Here you can display the customer's documents or any relevant
                information.
              </p>
              {/* Replace the content below with actual document display logic */}
              <ul>
                <li>Document 1</li>
                <li>Document 2</li>
                <li>Document 3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoConference;
