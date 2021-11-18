import "./MessagesList.css";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../store/messages/actions";
import { useParams } from "react-router-dom";

function MessagesList({ messages}) {

// function MessagesList() {
  // const dispatch = useDispatch();
//   const messages = useSelector( state => state.messages );
// const chatId = useParams()
//   console.log(chatId);
//   console.log(messages[ chatId ]);
  // const handleSendMessage = () => {
  //   dispatch( addMessage( , chatId ) );
  // };
  return (
    <>
      {messages.map( mes => (
        <div key={mes.id} className="mb-2">
          <span>{mes.author}</span>: <span>{mes.text}</span>
        </div>
      ))}
    </>
  );
}

export default MessagesList;