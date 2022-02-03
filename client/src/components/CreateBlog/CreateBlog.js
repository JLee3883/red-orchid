import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import FormField from "../Forms/FormField";
import "./CreateBlog.css";
import { CREATE_FLOWTALK } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

const CreateBlog = () => {
  const [show, setShow] = useState(false);
  const [flow, setFlow] = useState({
    flowTalkTitle: "",
    flowTalkText: "",
    flowTalkAuthor: "author",
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [createFlowTalk, { error }] = useMutation(CREATE_FLOWTALK);
  const handleSubmit = async () => {
    console.log(flow);
    const { data } = await createFlowTalk({
      variables: {
        ...flow,
      },
    });
    window.location.reload()
  };
  return (
    <>
      <div style={{ margin: "10px auto", width: "18rem" }}>
        <Button
          className="flow-talk-button"
          onClick={handleShow}
          style={{
            width: "18rem",
            backgroundColor: "red",
            borderColor: "red",
            boxShadow: "5px 5px 5px grey",
          }}
        >
          Create New Flow Talk
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <FormField
              value={flow.flowTalkTitle}
              label="Flow Talk Title"
              change={(event) =>
                setFlow({ ...flow, flowTalkTitle: event.target.value })
              }
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormField
            value={flow.flowTalkText}
            label="Flow Talk Entry"
            change={(event) =>
              setFlow({ ...flow, flowTalkText: event.target.value })
            }
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleSubmit}
            className="submitFlowTalk"
          >
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateBlog;
