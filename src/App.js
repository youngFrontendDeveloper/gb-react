import React from "react";

import "./App.css";
import Message from "./components/Message/Message";

function App() {
  const paragraph = "This is a little paragraph";
  return (
    <div className="app">
      <h1>Hi</h1>
      <Message text={paragraph}/>
    </div>
  );
}

export default App;
