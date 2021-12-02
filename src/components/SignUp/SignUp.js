// import { Link } from "react-bootstrap";
import { useState } from "react";
import ModalSign from "../ModalSign/ModalSign";
import { signUp } from "../../services/firebase";
import { Button } from "react-bootstrap";
import "./SignUp.css";
// import Button from "@restart/ui/esm/Button";

function SignUp() {
  const [modalShow, setModalShow] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSingUp = async (email, pass) => {
    setLoading(true);
    try {
      await signUp(email, pass);
      setModalShow(false);
    } catch (err) {
      console.log(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        className="m-2 sign-up-link button"
        onClick={() => setModalShow(true)}
      >
        Sign up
      </Button>
      <ModalSign
        show={modalShow}
        onHide={() => setModalShow(false)}
        handleSign={handleSingUp}
        error={error}
        loading={loading}
      />
    </>
  );
}

export default SignUp;
