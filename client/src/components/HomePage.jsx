import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";

const HomePage = () => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    setUser,
  } = useContext(AppContext);

  const registerUser = async (e) => {
    e.preventDefault();
    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_SERVER_URL}/users`,
      data: {
        firstName,
        lastName,
        email,
      },
    })
      .then(({ data }) => {
        console.log(data);
        setUser(data.user);
        setFirstName("");
        setLastName("");
        setEmail("");
        localStorage.setItem("token", data.token);
        // history.push("/account");
      })
      .catch((e) => console.log(e.message.toString()));
  };
  return (
    <div>
      Hi! Welcome to NEXT Tech Trivia with NetApp. Answer 5 fun questions, and
      if you get 4 out of 5 correct, you’ll “spin for a chance to win” Google
      gift cards. All players will also be entered into a drawing for the chance
      to win the grand prize: 1 of 10 tickets to the NetApp summer concert and 1
      backstage pass. Business email required to play NEXT Tech Trivia with
      NetApp
      <form onSubmit={(e) => registerUser(firstName, lastName, email, e)}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </form>
      <button
        type="submit"
        onClick={(e) => registerUser(firstName, lastName, email, e)}
      >
        Let's Play!
      </button>
      <div>
        Please read and understand the NetApp privacy policy and understand that
        you can unsubscribe from NetApp communications at any time or manage my
        preferences. Trivia Terms and Conditions.
      </div>
    </div>
  );
};

export default HomePage;
