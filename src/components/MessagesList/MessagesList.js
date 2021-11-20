import "./MessagesList.css";

function MessagesList({ messages }) {

  return (
    <>
      { messages.map( mes => (
        <div key={ mes.id } className="mb-2 messages__item">
          <p className="messages__author-name p-2">Автор: { mes.author }</p>
          <p className="messages__text p-2">Сообщение: { mes.text }</p>
        </div>
      ) ) }
    </>
  );
}

export default MessagesList;