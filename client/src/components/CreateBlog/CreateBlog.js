import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import FormField from "../Forms/FormField";

const CreateBlog = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div style={{ margin: "10px auto", width: "18rem" }}>
        <Button
          onClick={handleShow}
          style={{ width: "18rem", backgroundColor: "red", borderColor: "red" }}
        >
          Create New Flow Talk
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <FormField label="Flow Talk Title" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormField label="Flow Talk Entry" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateBlog;
