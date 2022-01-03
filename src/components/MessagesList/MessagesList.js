import "./MessagesList.css";
import Message from "./Message";

function MessagesList( {messages} ) {

  return (
    <>
      {messages ? messages.map((mes) => (
        <Message key={mes.id} message={mes} />
      )) : null}
    </>
  );
}

export default MessagesList;
