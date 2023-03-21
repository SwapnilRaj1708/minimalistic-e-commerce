import { useState } from "react";
import Button from "../components/Button";
import Modal from "./Cart";

export default function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  function handleClick() {
    setShowModal(true);
  }
  function handleClose() {
    setShowModal(false);
  }
  const actionBar = (
    <Button onClick={handleClose} primary>
      I accept
    </Button>
  );
  const modal = (
    <Modal actionBar={actionBar} onClose={handleClose}>
      Hi there! This is a modal
    </Modal>
  );
  return (
    <div>
      <Button primary onClick={handleClick}>
        Show Modal
      </Button>
      {showModal && modal}
    </div>
  );
}
