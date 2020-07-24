import React from "react";
import { AppContextProvider } from "./context/AppContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import Trivia from "./pages/Trivia.jsx";
import Footer from "./components/Footer.jsx";
import Wheel from "./components/Wheel";
import Page from "./pages/Page";

import LostTrivia from "./components/LostTrivia.jsx";
import WonWheel from "./components/WonWheel";
import LostWheel from "./components/LostWheel.jsx";

function App() {
  return (
    // <Router>
    <AppContextProvider>
      <Page />
      {/* <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/trivia" component={Trivia} />
          <Route exact path="/wheel" component={Wheel} />
          <Route exact path="/winning" component={WonWheel} />
          <Route exact path="/losing" component={LostTrivia} />
          <Route exact path="/lostwheel" component={LostWheel} />
      </Switch> */}
      <Footer />
    </AppContextProvider>
    // </Router>
  );
}

export default App;
