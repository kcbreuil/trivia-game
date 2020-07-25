import React from "react";
import { AppContextProvider } from "./context/AppContext";
import Footer from "./components/Footer.jsx";
import Page from "./pages/Page";

function App() {
  return (
    <AppContextProvider>
      <Page />
      <Footer />
    </AppContextProvider>
  );
}

export default App;
