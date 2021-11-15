import { useDispatch, useSelector } from "react-redux";
import { useCallback, useState } from "react";
import { changeName, selectShowName, toggleShowName } from "../../store/profile/profileSlice";
import { Col, Container, Form, Row } from "react-bootstrap";


function Profile() {
  const [ newUserName, setNewUserName ] = useState( "Default" );
  const showName = useSelector( selectShowName );
  const dispatch = useDispatch();

  const handleShowName = useCallback( () => {
    dispatch( toggleShowName() );
  }, [ dispatch ] );

  const handleAddName = (e) => {
    setNewUserName( e.target.value );
    dispatch( changeName( {
      userName: newUserName
    } ) );
  };

  return (
    <Container>
      <Row>
        <h1>This is a Profile page</h1>
      </Row>
      <Row>
        <Col className="mx-auto" sm={11} md={5} lg={4}>
      <Form className="mb-2">
      <Form.Control type="text"
             value={ newUserName }
             onChange={ handleAddName }
             placeholder="Введите имя"
             className="mb-2"
      />
      <Form.Check type="checkbox"
             checked={ showName }
             value={ showName }
             onChange={ handleShowName }/>

      <span >Show name</span>
      </Form>
      { showName && <div>{ newUserName }</div> }
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;