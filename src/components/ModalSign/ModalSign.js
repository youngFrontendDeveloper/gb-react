import { Modal, Button } from "react-bootstrap";
import SingForm from "../SignForm/SingForm";

function ModalSign(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Заполните данные:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SingForm
          onSubmit={props.handleSign}
          error={props.error}
          loading={props.loading}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalSign;
