import React from "react";
import { AppContextProvider } from "./context/AppContext";
import Footer from "./components/Footer.jsx";
import Page from "./pages/Page";

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
