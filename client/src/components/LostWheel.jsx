import React from "react";

const LostWheel = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ marginBottom: "25px" }}>
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
      <h1>Awe Snap!</h1>
      <img
        src="https://res.cloudinary.com/farmersmarket/image/upload/v1595185391/Asset_77_usmr2y.png"
        alt=""
        style={{ height: "100px" }}
      />
      <div style={{ marginBottom: "100px" }}>
        <p>
          Sorry you didn’t win today, but your name will still be entered into
          our grand prize drawing.
          <p>
            <b>Thanks for playing!</b>
          </p>
          <br></br>
          <p>
            <b>Now, let’s get back to Google Cloud Next ’20: On Air.</b>
          </p>
          <div className="privacy">
            <p>
              Please read and understand the &nbsp;
              <a href="https://www.netapp.com/us/legal/privacypolicy/index.aspx">
                NetApp Privacy Policy
              </a>
              &nbsp;and{" "}
              <a href="https://cloud.netapp.com/google-next-onair-2020-tc">
                Trivia Terms and Conditions
              </a>
              , and understand that you can unsubscribe from NetApp&nbsp;
              <a href="https://www.netapp.com/us/subscriptions/index.aspx">
                communications &nbsp;
              </a>
              at any time or manage your preferences.
            </p>
          </div>
        </p>
      </div>
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
        CLOSE {"X"}
      </button>
    </div>
  );
};

export default LostWheel;
