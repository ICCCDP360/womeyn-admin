import { memo, Fragment } from "react";

//Bootstrap
import { Modal, Form } from "react-bootstrap";

const Modalmessage = memo((props) => {
  return (
    <Fragment>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Massaging</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-between align-items-center pb-3 border-bottom">
            <Form.Check.Label className="mb-0" htmlFor="message-2001">
              Web link previews
            </Form.Check.Label>
            <div className="form-check form-switch mb-0">
              <Form.Check.Input
                type="checkbox"
                id="message-2001"
                defaultChecked
              />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center py-3 border-bottom">
            <Form.Check.Label className="mb-0" htmlFor="message-2002">
              Text Size
            </Form.Check.Label>
            <div className="form-check form-switch mb-0">
              <Form.Check.Input type="checkbox" id="message-2002" />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center py-3 border-bottom">
            <Form.Check.Label className="mb-0" htmlFor="message-2003">
              Send message with Enter key
            </Form.Check.Label>
            <div className="form-check form-switch mb-0">
              <Form.Check.Input
                type="checkbox"
                id="message-2003"
                defaultChecked
              />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center py-3 border-bottom">
            <Form.Check.Label className="mb-0" htmlFor="message-2004">
              Auto-download photos
            </Form.Check.Label>
            <div className="form-check form-switch mb-0">
              <Form.Check.Input type="checkbox" id="message-2004" />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center py-3 border-bottom">
            <Form.Check.Label className="mb-0" htmlFor="message-2005">
              Auto-download files
            </Form.Check.Label>
            <div className="form-check form-switch mb-0">
              <Form.Check.Input
                type="checkbox"
                id="message-2005"
                defaultChecked
              />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center pt-3">
            <Form.Check.Label className="mb-0" htmlFor="message-2006">
              When I recieve a File
            </Form.Check.Label>
            <div className="form-check form-switch mb-0">
              <Form.Check.Input type="checkbox" id="message-2006" />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
});

Modalmessage.displayName = "Modalmessage";
export default Modalmessage;
