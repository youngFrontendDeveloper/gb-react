import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const footerText = "This is a footer";

  return (
    <Provider store={ store }>
      <BrowserRouter>
        <div className="app">
          <Header/>
          <Main/>
          <Footer footer={ footerText }/>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
