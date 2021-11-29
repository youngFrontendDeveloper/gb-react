import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function SingForm({ onSubmit, loading, error }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePass = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, pass);
    setEmail("");
    setPass("");
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          value={email}
          onChange={handleChangeEmail}
          className="mb-3"
          type="email"
          placeholder="Enter email"
        />
        <Form.Control
          value={pass}
          onChange={handleChangePass}
          className="mb-3"
          type="password"
          placeholder="Password"
        />
        <Button
          disabled={loading}
          variant="primary"
          type="submit"
          className="mb-3"
        >
          Submit
        </Button>
      </Form>
      {error && <h4>{error}</h4>}
    </>
  );
}

export default SingForm;
