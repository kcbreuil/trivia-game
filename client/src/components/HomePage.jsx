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
        <h1 style={{ textAlign: "center" }}>
          Next Tech Trivia <br></br>
          <span style={{ fontSize: "16px", fontWeight: "lighter" }}>with</span>
          &nbsp;
          <span style={{ color: "#0072bc", font: "bold" }}>NetApp</span>
        </h1>
      </div>

      <h2>Hi!</h2>
      <h2>Welcome to Next Tech Trivia with NetApp.</h2>
      <p>
        Answer 5 fun questions, and if you get 4 out of 5 correct, you’ll “spin
        for a chance to win” Google gift cards. All players will also be entered
        into a drawing for the chance to win the grand prize: 1 of 10 tickets to
        the NetApp summer concert and 1 backstage pass.
        <br></br>
        <br></br>
        <i style={{ fontSize: "12px" }}>
          Business email required to play NEXT Tech Trivia with NetApp
        </i>
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
          />
        </div>
        <div className="button-flex">
          <button type="submit" className="btn-primary">
            Lets Play!
          </button>
        </div>
      </form>
      <br></br>
      <div className="privacy">
        Please read and understand the&nbsp;
        <a href="https://www.netapp.com/us/legal/privacypolicy/index.aspx">
          NetApp privacy policy
        </a>
        &nbsp;and understand that you can unsubscribe from NetApp communications
        at any time or manage my&nbsp;
        <a href="https://www.netapp.com/us/subscriptions/index.aspx">
          preferences
        </a>
        .&nbsp;
        <a href="https://cloud.netapp.com/google-next-onair-2020-tc">
          Trivia Terms and Conditions.
        </a>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default HomePage;
