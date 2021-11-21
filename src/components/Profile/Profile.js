import { useDispatch, useSelector } from "react-redux";
import { useCallback, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { changeName, toggleCheckbox } from "../../store/profile/actions";
import { selectCheckbox, selectName } from "../../store/profile/selectors";
import NameProfile from "./NameProfile";


function Profile() {
  const name = useSelector( selectName );
  const checkboxValue = useSelector( selectCheckbox);
  console.log( checkboxValue );
  const [ value, setValue ] = useState( name );
  const dispatch = useDispatch();


  const handleChange = useCallback( () => {
    dispatch( toggleCheckbox );
  }, [ dispatch ] );

  const handleChangeName = (e) => {
    setValue( e.target.value );
  };

  const handleSubmit = useCallback( (e) => {
    e.preventDefault();
    dispatch( changeName( value ) );
    setValue( "" );
  }, [ dispatch, value ] );


  return (
    <Container>
      <Row>
        <h1>This is a Profile page</h1>
      </Row>
      <Row>
        <Col className="mx-auto" sm={ 11 } md={ 5 } lg={ 4 }>
          <Form onSubmit={ handleSubmit } className="mb-2">
            <Form.Control type="text"
                          value={ value }
                          onChange={ handleChangeName }
                          placeholder="Введите имя"
                          className="mb-2"
            />
            <Button type="submit"
                    className="mb-2 button">Поменять имя</Button>
            <Form.Check type="checkbox"
                        checked={ checkboxValue }
                        onChange={ handleChange }/>
          </Form>
          <NameProfile name={name} checkbox={checkboxValue}/>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;