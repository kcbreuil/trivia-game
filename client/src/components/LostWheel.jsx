import React from "react";

const LostWheel = () => {
  return (
    <div style={{ textAlign: "center" }}>
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
      <h2 style={{ fontWeight: "800", marginTop: "7vh", fontSize: "30px" }}>Awe Snap!</h2>
      {/* <img
        src="https://res.cloudinary.com/farmersmarket/image/upload/v1595185391/Asset_77_usmr2y.png"
        alt=""
        style={{ height: "100px" }}
      /> */}
      <div style={{ marginBottom: "100px" }}>
        <p style={{ lineHeight: "4rem", fontSize: "25px", margin: "auto 17vw 7vh 17vw" }}>
          Sorry you didn’t win today, but your name will still be entered into
          our grand prize drawing.
        </p>
        <h2 style={{ fontWeight: "800", fontSize: "30px" }}>
          Thanks for playing!
        </h2>
        </div>
          {/* <div className="privacy">
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
          </div> */}
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
          marginTop: "2vh",
          marginBottom: "5vh",
          width: "120px",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        CLOSE {"X"}
      </button>
    </div>
  );
};

export default LostWheel;
