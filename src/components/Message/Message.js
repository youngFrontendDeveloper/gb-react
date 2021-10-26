import "./Message.css";

function Message({ text }) {
  return (
    <>
      <p className="text">{ text }</p>
    </>
  );
}

export default Message;