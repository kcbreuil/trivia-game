import React from "react";

function WonWheel() {
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}>
          Next Tech Trivia <br></br>
          <span style={{ fontSize: "16px", fontWeight: "lighter" }}>with</span>
          &nbsp;
          <span style={{ color: "#0072bc", font: "bold" }}>NetApp</span>
        </h1>
      </div>
      <div>
        <h1>CONGRATULATIONS!!!</h1>
        <h2>
          You have won a ${"insert amount won"} gift card to buy a coveted
          Google item of your choice.
        </h2>
        <p>Check your inbox for an email with your gift card information.</p>
        <h3>Thanks for playing!</h3>
        <h3>Now, let’s get back to Google Next OnAir.</h3>
        <button>Close</button>
      </div>
    </div>
  );
}

export default WonWheel;
