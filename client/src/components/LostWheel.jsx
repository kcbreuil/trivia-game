import React from "react";

const LostWheel = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Awe Snap!</h1>
      <img
        src="https://res.cloudinary.com/farmersmarket/image/upload/v1595185391/Asset_77_usmr2y.png"
        alt=""
        style={{ height: "100px" }}
      />
      <h4>
        {" "}
        Sorry you didn’t win today, but your name will still be entered into our
        grand prize drawing. Thanks for playing!
      </h4>
    </div>
  );
};

export default LostWheel;
