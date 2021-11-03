import React from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const headerText = "This is a my Header";
  const footerText = "This is a footer";

  return (
    <div className="app">
      <Header header={ headerText }/>
      <Main/>
      <Footer footer={ footerText }/>
    </div>
  );
}

export default App;
