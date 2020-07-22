import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { AppContext } from "../context/AppContext";
import axios from "axios";

const HomePage = () => {
  const history = useHistory();
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    setUser,
  } = useContext(AppContext);

  const signUp = async (firstName, lastName, email, e) => {
    console.log(lastName, email);
    e.preventDefault();
    await axios({
      method: "POST",
      url: `/users`,
      data: {
        firstName,
        lastName,
        email,
      },
    })
      .then(({ data }) => {
        setUser(data.user);
        localStorage.setItem("token", data.token);
        setEmail("");
        setFirstName("");
        setLastName("");
        history.push(`/trivia`);
      })
      .catch((e) => alert(e.message.toString() + " Invalid email"));
  };
  return (
    <div className="container">
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

      <h2>Hi!</h2>
      <p style={{ lineHeight: "2rem", fontSize: "16px" }}>
        Welcome to Next Tech Trivia with NetApp. Answer 5 fun questions, and if
        you get 4 out of 5 correct, you’ll <b>“spin for a chance to win”</b>
        &nbsp; a gift card to buy a coveted Google item of your choice. All
        players will also be entered into a drawing for the chance to win access
        to an exclusive, invitation-only virtual concert in September with a
        world-renown artist!
        <br></br>
      </p>
      <form
        className="signUpForm"
        onSubmit={(e) => signUp(firstName, lastName, email, e)}
      >
        <div className="form-div">
          <label className="form">First name:</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="homepage-input"
          />
        </div>
        <div className="form-div">
          <label className="form">Last name:</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="homepage-input"
          />
        </div>
        <div className="form-div">
          <label className="form">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="homepage-input"
          />
        </div>
        <i style={{ fontSize: "10px" }}>
          Business email required to play Next Tech Trivia with NetApp
        </i>
        <div className="button-flex">
          <button type="submit" className="btn-primary">
            LET'S PLAY!
          </button>
        </div>
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
            , and understand that you can{" "}
            <a href="https://www.netapp.com/us/subscriptions/index.aspx">
              unsubscribe
            </a>{" "}
            from NetApp at any time or manage your preferences.
          </p>
          <p>
            Gift cards available for US based redemption only. Grand Prize
            drawing available for both US {"&"} Canada participants
          </p>
        </div>
      </form>
    </div>
  );
};

export default HomePage;
