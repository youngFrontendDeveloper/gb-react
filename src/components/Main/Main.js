import React, { useCallback, useEffect, useState } from "react";
import MessagesList from "../MessagesList/MessagesList";
import FormMess from "../Form/Form";

import "./Main.css";
import uuid from "react-uuid";


function Main() {
  const [ messages, setMessages ] = useState( [] );
  // const parentRef = useRef();

  const addMessageInArr = useCallback( (newMessage) => {
    setMessages( (prevMessages) => [ ...prevMessages, newMessage ] );
  }, [] );


  useEffect( () => {
    if( messages.length && messages[ messages.length - 1 ].name !== "Bot" ) {
      const timeout = setTimeout( () => {
          addMessageInArr( {
            id: uuid(),
            name: "Bot",
            message: "Пожалуйста, соблюдайте правила при написании сообщений: относитесь к другим авторам с уважением, не употребляйте матерных и грубых выражений"
          } );
        }, 1500
      );
      return () => clearTimeout( timeout );
    }
  }, [ addMessageInArr, messages ] );

  return (
    <main className="main_block"
          // ref={ parentRef }
    >
      <h1>This is a Main page</h1>
      <MessagesList messages={ messages }/>
      <FormMess
        sendMessage={ addMessageInArr }
      />
    </main>
  );
}

export default Main;