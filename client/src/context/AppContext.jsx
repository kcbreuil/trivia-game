import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userSelection, setUserSelection] = useState(false);

  //
  //   const token = localStorage.getItem("token");

  //   useEffect(() => {
  //     if (token) {
  //       axios
  //         .get("/users/me", { headers: { Authorization: `Bearer ${token}` } })
  //         .then(({ data }) => {
  //           setUser(data);
  //         })
  //         .catch((e) => console.log(e.message.toString()));
  //     }
  //   }, [token]);

  return (
    <AppContext.Provider
      value={{
        email,
        setEmail,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        user,
        setUser,
        userSelection,
        setUserSelection,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
