import React from "react";
import { AppContextProvider } from "./context/AppContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import Trivia from "./pages/Trivia.jsx";
import Footer from "./components/Footer.jsx";
import Wheel from "./components/Wheel";

import LostTrivia from "./components/LostTrivia.jsx";
import WonWheel from "./components/WonWheel";

function App() {
  return (
    <Router>
      <AppContextProvider>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route  path="/trivia" component={Trivia} />
          <Route  path="/wheel" component={Wheel} />
          <Route  path="/winning" component={WonWheel} />
          <Route  path="/losing" component={LostTrivia} />
        </Switch>
        <Footer />
      </AppContextProvider>
    </Router>
  );
}

export default App;
