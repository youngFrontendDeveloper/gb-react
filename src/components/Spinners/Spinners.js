import { Spinner } from "react-bootstrap";

import "./Spinner.css";

function Spinners() {
  return (
    <div className="spinner-wrapper">
      <Spinner animation="border" role="status" variant="primary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Spinners;