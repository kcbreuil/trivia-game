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
      url: `http://localhost:8080/users`,
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
      .catch((e) => console.log(e.message.toString()));
  };
  return (
    <div className="content">
      <h1>Hi!</h1> <br></br>
      <h1>Welcome to NEXT Tech Trivia with NetApp.</h1>
      <p>
        Answer 5 fun questions, and if you get 4 out of 5 correct, you’ll “spin
        for a chance to win” Google gift cards. All players will also be entered
        into a drawing for the chance to win the grand prize: 1 of 10 tickets to
        the NetApp summer concert and 1 backstage pass. Business email required
        to play NEXT Tech Trivia with NetApp
      </p>
      <form
        className="signUpForm"
        onSubmit={(e) => signUp(firstName, lastName, email, e)}
      >
        <label>First name</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <label>Last name</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <label>Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn-primary">
          Lets Play!
        </button>
      </form>
      <div className="privacy">
        Please read and understand the NetApp privacy policy and understand that
        you can unsubscribe from NetApp communications at any time or manage my
        preferences. Trivia Terms and Conditions.
      </div>
    </div>
  );
};

export default HomePage;
