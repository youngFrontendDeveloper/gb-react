import "./MessagesList.css";
import React, { useCallback, useEffect, useRef, useState } from "react";
import MessagesListItem from "./MessagesListItem";
import { ListGroup } from "react-bootstrap";
import { ChatListData } from "../../constants/ChatListData";
import { useParams } from "react-router-dom";
import uuid from "react-uuid";


function MessagesList({ index, messages, addMessageInArr, setMessages }) {

  // const [ messages, setMessages ] = useState( [ ChatListData ] );
  // const isFirstRender = useRef( true );

  // const chatId = useParams();

  // const addMessageInArr = useCallback(
  //   (newMessage) => {
  //     setMessages( (prevMessages) => ( [
  //       ...prevMessages, newMessage]))
  //
  //   }, [  ] );

  useEffect( () => {
    if(
      messages.length &&
      messages[messages.length - 1].author !== "Bot" ) {
      const timeout = setTimeout( () => {
        addMessageInArr( {
          id: uuid(),
          path: ChatListData[index].path,
          author: "Bot",
          text: ChatListData[index].text
        } );
      }, 1000 );
      return () => clearTimeout( timeout );
    }
    // } );
  }, [ addMessageInArr, messages ] );
  return (
    <>
      <h3 className="mb-3">{ChatListData[index].name}</h3>
      <ListGroup >
        { messages.map( (item) => {
          return (
            <MessagesListItem item={item} key={ item.id }/>
          );
        } ) }

      </ListGroup>
    </>
  );
}

export default MessagesList;