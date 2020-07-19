import React from "react";
import { AppContextProvider } from "./context/AppContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import Trivia from "./pages/Trivia.jsx";
import Footer from "./components/Footer.jsx";
import Winning from "./components/Winning.jsx";

function App() {
  return (
    <Router>
      <AppContextProvider>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/trivia" component={Trivia} />
          <Route exact path="/winning" component={Winning} />
        </Switch>
        <Footer />
      </AppContextProvider>
    </Router>
  );
}

export default App;
