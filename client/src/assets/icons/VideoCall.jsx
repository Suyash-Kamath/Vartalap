import React from "react";
import Container from "../Container";

export default function VideoCall() {
  return (
    <Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-camera-video-fill position-absolute w-100 h-100 top-0 start-0"
        viewBox="0 0 16 16"
      >
        <path d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z" />
      </svg>
    </Container>
  );
}