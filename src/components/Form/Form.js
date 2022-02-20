import "./Form.css";

function Form({ changeAuthor, changeMessage, addMessageInArr, nameRef, messageRef }) {

  return (
    <form action="#" className="form">
      <input type="text" ref={ nameRef } onChange={ changeAuthor } placeholder="Your name"
             className="form__item form__name"/>
      <textarea ref={ messageRef } onChange={ changeMessage } placeholder="Your message"
                className="form__item form__message"/>
      <button onClick={ addMessageInArr } className="form__btn">Add</button>

    </form>
  );
}

export default Form;
