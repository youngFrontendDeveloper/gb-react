import "./MessagesList.css";
import React from "react";

function MessagesList({ messages }) {
  return (
   <>
     { messages.map( (item, index) => {
       return (
         <div className="messages__item" key={ index }>
           <p className="messages__author">Автор: <span className="messages__author-name">{ item.name }</span></p>
           <p className="messages__text">{ item.message }</p>
         </div>
       );
     } ) }

   </>
  );
}

export default MessagesList;