// import { Button, Col, Form, Row } from "react-bootstrap";
// import React, { useEffect, useRef, useState } from "react";
//
//
// function AddChat({ chatList, addNewCatInChatsList }) {
//   const [ chatName, setChatName ] = useState( "" );
//   const [ chatId, setChatId ] = useState( "" );
//   const chatRef = useRef();  // Для фокуса на инпуте
//   const chatIdRef = useRef();  // Для фокуса на инпуте
//
//   //Устанавливаю фокус после первого рендера
//   useEffect( () => {
//     chatRef.current?.focus();
//   }, [] );
//
//   // Убираю класс warning у поля, если на нем поставлен фокус
//   const handleFocus = (e) => {
//     e.target.classList.remove( "warning" );
//   };
//
//   const changeChatName = (e) => {
//     e.target.classList.remove( "warning" ); // убираю класс warning
//     e.target.placeholder = "Chat name";
//     setChatName( e.target.value );
//   };
//
//   const changeChatId = (e) => {
//     e.target.classList.remove( "warning" ); // убираю класс warning
//     e.target.placeholder = "Chat id";
//     setChatId( e.target.value );
//   };
//
//   // Вывожу данные при отправке формы
//   const addNewChat = (e) => {
//     e.preventDefault();
//
//     if( chatName && chatId ) {  // проверка заполнения полей
//       addNewCatInChatsList(
//         {
//           name: chatName,
//           id: chatId
//         } );
//
//       setChatName( "" );
//
//       setChatId( "" );
//       chatRef.current?.focus();
//
//     } else if( !chatName && !chatId ) {
//       chatRef.current?.focus();
//       chatRef.current.classList.add( "warning" );
//       chatRef.current.placeholder = "Заполните это поле!";
//       chatIdRef.current.classList.add( "warning" );
//       chatIdRef.current.placeholder = "Заполните это поле!";
//     } else if( !chatName ) {
//       chatRef.current?.focus();
//       chatRef.current.classList.add( "warning" );
//       chatRef.current.placeholder = "Заполните это поле!";
//     } else if( !chatId ) {
//       chatIdRef.current?.focus();
//       chatIdRef.current.classList.add( "warning" );
//       chatIdRef.current.placeholder = "Заполните это поле!";
//     }
//
//   };
//
//
//   return (
//     <Row>
//       <Col className="mx-auto " xs={ 9 } sm={ 5 }>
//         <h4 className="mb-2">Add new chat:</h4>
//         <Form className="form-chat-list" onSubmit={ addNewChat }>
//           <Form.Control
//             onFocus={ handleFocus }
//             className="mb-2"
//             ref={ chatRef }
//             onChange={ changeChatName }
//             value={ chatName }
//             placeholder="Chat name"/>
//           <Form.Control
//             className="mb-2"
//             ref={chatIdRef}
//             onChange={ changeChatId }
//             value={ chatId }
//             placeholder="Chat id in English letters"/>
//           <Button>Add chat</Button>
//         </Form>
//       </Col>
//     </Row>
//   );
// }
//
// export default AddChat;