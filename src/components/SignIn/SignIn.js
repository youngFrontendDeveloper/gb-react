import { useState } from "react";
import ModalSign from "../ModalSign/ModalSign";
import { logIn } from "../../services/firebase";
import { signIn } from "../../store/profile/actions";
import "./SignIn.css";
import { useDispatch } from "react-redux";

function SignIn() {
  const [modalShow, setModalShow] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSingIn = async (email, pass) => {
    setError("");
    setLoading(true);
    try {
      await logIn(email, pass);
      dispatch(signIn);
      setModalShow(false);
    } catch (err) {
      console.log(err);
      setError("Неправильный логин или пароль");
      // setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <a
        className="m-2 sign-in-link"
        onClick={() => {
          setModalShow(true);
          setError("");
        }}
      >
        Sign in
      </a>
      <ModalSign
        show={modalShow}
        onHide={() => setModalShow(false)}
        handleSign={handleSingIn}
        error={error}
        loading={loading}
      />
    </>
  );
}

export default SignIn;
