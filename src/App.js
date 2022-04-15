import React from "react";
import Header from "./components/Header";
import "./App.scss";
import Footer from "./components/Footer";
import GeneralInfo from "./components/GeneralInfo";
import ItemList from "./components/ItemList";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <GeneralInfo />
        <ItemList title="Education" />
        <ItemList title="Work Experience" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
