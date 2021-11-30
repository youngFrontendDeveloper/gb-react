import { useDispatch, useSelector, connect, shallowEqual } from "react-redux";
import { useCallback, useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { onValue, set } from "firebase/database";
import { logOut, userRef } from "../../services/firebase";
import {
  changeName,
  signOut,
  toggleCheckbox,
} from "../../store/profile/actions";
import { selectCheckbox, selectName } from "../../store/profile/selectors";
import NameProfile from "./NameProfile";

export function Profile({ checkboxValue, setName, changeChecked }) {
  const name = useSelector(selectName, shallowEqual);
  // const checkboxValue = useSelector(selectCheckbox);
  // console.log(checkboxValue);
  const [value, setValue] = useState(name);
  // const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onValue(userRef, (snapshot) => {
      const userData = snapshot.val();
      setName(userData?.name || "");
    });

    return unsubscribe;
  }, [setName]);

  // const handleChange = useCallback(() => {
  //   dispatch(toggleCheckbox);
  // }, [dispatch]);

  // const handleSubmit = useCallback(
  //   (e) => {
  //     e.preventDefault();
  //     dispatch(changeName(value));
  //     setValue("");
  //   },
  //   [dispatch, value]
  // );

  const handleChange = () => {
    changeChecked();
  };

  const handleChangeName = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    set(userRef, {
      name: value,
    });
  };

  // const handleLogOutClick = async () => {
  //   try {
  //     await logOut();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <Container>
      <Row className="mb-3">
        <h1 className="page__title">This is a Profile page</h1>
      </Row>
      <Row>
        <Col className="mx-auto" sm={11} md={5} lg={4}>
          <Form onSubmit={handleSubmit} className="mb-2">
            <Form.Control
              type="text"
              value={value}
              onChange={handleChangeName}
              placeholder="Введите имя"
              className="mb-2"
            />
            <Button type="submit" className="mb-2 button">
              Поменять имя
            </Button>
            <Form.Check
              type="checkbox"
              checked={checkboxValue}
              onChange={handleChange}
            />
          </Form>
          <NameProfile name={name} checkbox={checkboxValue} />
          {/* <Button onClick={handleLogOutClick}>SIGN OUT</Button> */}
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  name: state.profile.name,
  checkboxValue: state.profile.checkbox,
});

const mapDispatchToProps = (dispatch) => ({
  changeChecked: () => dispatch(toggleCheckbox),
  setName: (newName) => dispatch(changeName(newName)),
  // logOut: () => dispatch(signOut()),
});

const mapDispatchToProps2 = {
  setName: changeName,
};

export const ConnectedProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
