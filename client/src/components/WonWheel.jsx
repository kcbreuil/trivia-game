import React from "react";

function WonWheel() {
  return (
    <div className="winning-background">
      <div>
        <h1 style={{ textAlign: "center", fontSize: "42px" }}>
          <span style={{ fontWeight: "lighter" }}>Next</span>&nbsp;Tech Trivia
          <br></br>
          <span style={{ fontSize: "27px", fontWeight: "lighter" }}>with</span>
          &nbsp;
          <span style={{ color: "#0072bc", font: "bold", fontSize: "42px" }}>
            NetApp
          </span>
        </h1>
      </div>
      <div style={{ textAlign: "center" }}>
        <h1>CONGRATULATIONS!!!</h1>
        <h2>
          You have won a ${"amount"} gift card to buy a coveted Google item of
          your choice.
        </h2>
        <p>Check your inbox for an email with your gift card information.</p>
        <h3>Thanks for playing!</h3>
        <h3>Now, let’s get back to Google Next OnAir.</h3>
        <button
          style={{
            border: "none",
            cursor: "pointer",
            color: "white",
            backgroundColor: "#f1bd42",
            padding: "10px",
            borderRadius: "20px",
            display: "inline-block",
            marginRight: "15px",
            marginTop: "5vh",
            marginBottom: "5vh",
            width: "100px",
            fontWeight: "bold",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default WonWheel;
