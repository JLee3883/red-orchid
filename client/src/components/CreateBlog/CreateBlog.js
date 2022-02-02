import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const CreateBlog = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div style={{ margin: "0 auto", width: "18rem" }}>
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
            <input
              className="flow-talk-title"
              placeholder="Flow Talk Title"
            ></input>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            className="flow-talk-entry"
            placeholder="Flow Talk Entry"
          ></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateBlog;
