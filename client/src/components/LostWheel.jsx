import React from "react";
import "../styling/lostwheel.css"
import "../styling/app.css"

const LostWheel = () => {
  return (
    <div style={{ textAlign: "center" }}>
       <div>
        <h1 className="tech-trivia-name" >
          <span className="next-name">Next</span>&nbsp;Tech Trivia
          <br></br>
          <span className="with-name" >with</span>
          &nbsp;
          <span className="netapp-name">NetApp
          </span>
        </h1>
      </div>
      <img className="sad-face-img"
        src="https://res.cloudinary.com/farmersmarket/image/upload/v1595185391/Asset_77_usmr2y.png"
        alt=""
      />
      <h2 id="aw-snap" className="h2-lostwheel">
        Aw, Snap!
      </h2 >
      
      <div >
        <p className="lost-wheel-text">
          Sorry you didn’t win today, but your name will still be entered into
          our grand prize drawing.
        </p>
        <h2 className="h2-lostwheel">
          Thanks for playing!
        </h2>
      </div>
      <div className="privacy" id="privacy-lost-wheel">
            {/* <p>
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
            </p> */}
          </div>
      <button className="btn-lost-wheel">
        CLOSE {"X"}
      </button>
    </div>
  );
};

export default LostWheel;
