// import React, { useCallback, useEffect, useRef, useState } from "react";
// import { Container } from "react-bootstrap";
// import FormMess from "../Form/Form";
// import MessagesList from "../MessagesList/MessagesList";
// import { Route, Routes } from "react-router-dom";
//
// function ChatItem({data, }) {
//
//   const [ messages, setMessages ] = useState( []);
//   const isFirstRender = useRef( true );
//
//   const addMessageInArr = useCallback(
//     (newMessage) => {
//       setMessages( (prevMessages) => ( [
//         ...prevMessages, newMessage]))
//
//     }, [ ] );
//
//   useEffect( () => {
//     isFirstRender.current = false;
//   }, [] );
//   return (
//   <Container>
//     <Routes>
//       {data.map( (item, index) =>(
//       <Route exact
//     key={index}
//         path={item.path}
//           element={ <MessagesList index={index} messages={messages}  addMessageInArr={addMessageInArr}/> } />
//        ))}
//     </Routes>
//     <FormMess sendMessage={ addMessageInArr } />
//
//   </Container>
//   );
// }
//
// export default ChatItem;