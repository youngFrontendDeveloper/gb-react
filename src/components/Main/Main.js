import Message from "../Message/Message";
import React from "react";

import "./Main.css";

function Main() {
  const messageText = "This is a little paragraph";

  return (
    <main className="main_block">
      <h1>This is a Main</h1>
      <Message text={ messageText }/>
    </main>
  );
}

export default Main;