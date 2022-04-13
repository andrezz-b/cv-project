import React from "react";
import Header from "./components/Header";
import "./App.scss";
import Footer from "./components/Footer";
import GeneralInfo from "./components/GeneralInfo";

function App() {
  return (
    <div className="App">
      <Header />
      <main><GeneralInfo /></main>
      <Footer />
    </div>
  );
}

export default App;
