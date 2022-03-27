import React, { useCallback, useEffect, useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addMessageWithReply } from "../../store/messages/actions";
import { useParams } from "react-router-dom";
import "./Form.css";

function FormMess() {
  const [userName, setUserName] = useState("");
  const [userText, setUserText] = useState("");
  const nameRef = useRef(); // Для фокуса на инпуте
  const messageRef = useRef();
  const dispatch = useDispatch();
  const { chatId } = useParams();

  const userMessage = {
    id: `mes-${Date.now()}`,
    author: userName,
    text: userText,
  };

  //Устанавливаю фокус после первого рендера
  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  // Получаю и сохраняю введенные значения имени и сообщения
  const changeAuthor = (e) => {
    e.target.classList.remove("warning"); // убираю класс warning
    e.target.placeholder = "Your name";
    setUserName(e.target.value);
  };

  const changeMessage = (e) => {
    e.target.classList.remove("warning"); // убираю класс warning
    e.target.placeholder = "Your message";
    setUserText(e.target.value);
  };

  // Убираю класс warning у поля, если на нем поставлен фокус
  const handleFocus = (e) => {
    e.target.classList.remove("warning");
  };

  const onAddMessage = useCallback(
    (newMessage) => {
      dispatch(addMessageWithReply( chatId, newMessage ));
    },
    [chatId, dispatch]
  );

  // Вывожу данные при отправке формы
  const handleSubmit = (e) => {
    e.preventDefault();

    if (userName && userText) {
      // проверка заполнения полей
      onAddMessage(userMessage);

      setUserName("");
      setUserText("");
      nameRef.current?.focus();
    } else if (!userName && !userText) {
      nameRef.current?.focus();
      nameRef.current.classList.add("warning");
      nameRef.current.placeholder = "Заполните это поле!";
      messageRef.current.classList.add("warning");
      messageRef.current.placeholder = "Заполните это поле!";
    } else if (!userName) {
      nameRef.current?.focus();
      nameRef.current.classList.add("warning");
      nameRef.current.placeholder = "Заполните это поле!";
    } else if (!userText) {
      messageRef.current?.focus();
      messageRef.current.classList.add("warning");
      messageRef.current.placeholder = "Заполните это поле!";
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-5 mt-5">
      <Form.Control
        ref={nameRef}
        onChange={changeAuthor}
        onFocus={handleFocus}
        value={userName}
        placeholder="Your name"
        className="mb-2 p-2 w-100  form__name"
      />

      <Form.Control
        ref={messageRef}
        onChange={changeMessage}
        onFocus={handleFocus}
        value={userText}
        placeholder="Your message"
        className="mb-2 p-2 w-100 form__message"
        as="textarea"
      />
      <Button className="button" type="submit">
        Add
      </Button>
    </Form>
  );
}

export default FormMess;
