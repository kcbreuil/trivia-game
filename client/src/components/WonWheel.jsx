import React from "react";

function WonWheel() {
  return (
    <div className="winning-background">
     <div>
        <h1 style={{ textAlign: "center", fontSize: "55px" }}>
          <span style={{ fontWeight: "lighter" }}>Next</span>&nbsp;Tech Trivia
          <br></br>
          <span style={{ fontSize: "33px", fontWeight: "lighter" }}>with</span>
          &nbsp;
          <span
            style={{
              color: "#0072bc",
              font: "bold",
              fontSize: "55px",
              lineHeight: "6rem",
            }}
          >
            NetApp
          </span>
        </h1>
      </div>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "48px", fontWeight: "800" }}>
          CONGRATULATIONS!!!
        </h1>
        <h2 style={{ fontSize: "30px" }}>
          You have won a <span style={{ color: "#0072bc" }}>${"X"}</span> gift
          card to buy a coveted Google item of your choice.
        </h2>
        <p style={{ fontSize: "25px" }}>
          Check your inbox for an email with your gift card information.
        </p>
        <p style={{ fontSize: "24px", fontWeight: "800" }}>
          Thanks for playing!
          <br></br>
          <br></br>
          Now, let’s get back to Google Cloud Next '20 OnAir.
        </p>
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
            width: "113px",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          CLOSE {"X"}
        </button>
      </div>
    </div>
  );
}

export default WonWheel;
