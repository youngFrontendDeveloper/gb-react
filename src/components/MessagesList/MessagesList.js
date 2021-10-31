import "./MessagesList.css";

function MessagesList({ createComponent, messageBot }) {
  return (
   <>
     { createComponent }
     {messageBot}
   </>
  );
}

export default MessagesList;