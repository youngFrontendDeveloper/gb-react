import { useState } from "react";
import ModalSign from "../ModalSign/ModalSign";
import { logIn } from "../../services/firebase";
import { Button } from "react-bootstrap";

import "./SignIn.css";

function SignIn() {
  const [modalShow, setModalShow] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSingIn = async (email, pass) => {
    // setError("");
    setLoading(true);
    try {
      await logIn(email, pass);
      setModalShow(false);
    } catch (err) {
      console.log(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Закрытие модального окна
  const onHide = () => {
    setModalShow(false);
    setError("");
  };

  return (
    <>
      <Button
        className="m-2 sign-in-link button"
        onClick={() => {
          setModalShow(true);
          setError("");
        }}
      >
        Sign in
      </Button>
      <ModalSign
        show={modalShow}
        onHide={onHide}
        handleSign={handleSingIn}
        error={error}
        loading={loading}
      />
    </>
  );
}

export default SignIn;
