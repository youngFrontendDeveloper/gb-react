import "./Message.css";
import React from "react";

function Message({ text, addMessage }) {
  return (
    <>
      <p>{text}</p>
      <ul>
        {addMessage}
        {/*{ data.map( (item, index) => {*/}
        {/*  return (*/}
        {/*    <li key={ index }>*/}
        {/*      <p>Автор: { item.name }</p>*/}
        {/*      <p>{ item.message }</p>*/}
        {/*    </li> );*/}
        {/*  } )*/}
        {/*}*/}
      </ul>


    </>
  );
}

export default Message;