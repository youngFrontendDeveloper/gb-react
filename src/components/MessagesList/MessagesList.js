import "./MessagesList.css";

function MessagesList({ messages}) {

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