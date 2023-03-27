import { useFormik } from "formik";
import { Fragment, memo, useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import Card from "../../../../components/bootstrap/card";
// import support_services from "../../../../services/support_services/support_services";
import { addReply } from "../../../../services/tickets/ticketsServices";

const ReplyTicket = memo((props) => {
  let history = useNavigate();

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);
  };

  console.log("props", props);

  const closeTicket = () => {
    setLoading(true);
    let data = {
      stateId: 3,
      messageId: props.id,
    };
    addReply(data)
      .then((result) => {
        setLoading(false);
        toast.success("Ticket Closed Successfully!!");
        history("/womeyn/tickets");
      })
      .catch((err) => {
        toast.error("Failed to close Ticket !");
        if (err) {
          throw err;
        }
      });
  };

  const saveReply = (data) => {
    addReply(data)
      .then((result) => {
        toast.success("Ticket replied Successfully!!");
        props.getTickets();
        formReplyDetails.resetForm();
      })
      .catch((err) => {
        toast.error("Failed to reply Ticket !");
        if (err) {
          throw err;
        }
      });
  };
  const goBack = () => {
    history("/womeyn/tickets");
  };
  const formReplyDetails = useFormik({
    initialValues: {
      message: "",
      masterTicketId: props.id,
    },
    onSubmit: (values) => {
      saveReply(values);
    },
    validationSchema: yup.object({
      message: yup.string().required("Message  is Required !"),
    }),
  });
  return (
    <Fragment>
      <div>
        <Card>
          <Card.Body className="m-0 p-0">
            <div>
              <div>
                <h3>Add Reply</h3>
              </div>
              <div className="mb-4 mt-4">
                <Form
                  onSubmit={formReplyDetails.handleSubmit}
                  validateOnChange={false}
                >
                  <div>
                    <Row>
                      <Col lg="8">
                        <div className="form-group">
                          <Form.Control
                            as="textarea"
                            rows={5}
                            name="message"
                            value={formReplyDetails.values.message}
                            onChange={formReplyDetails.handleChange}
                            placeholder="Enter your reply here"
                          />
                          <div className="">
                            {formReplyDetails.errors.message &&
                            formReplyDetails.touched.message ? (
                              <span className="error-message text-danger">
                                {formReplyDetails.errors.message}
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </Col>
                      <Col lg="4" className="m-auto">
                        <Button variant="primary" onClick={handleShow}>
                          Close Ticket
                        </Button>
                      </Col>
                    </Row>
                  </div>
                  <div className="">
                    <Button variant="secondary" onClick={goBack}>
                      Back
                    </Button>{" "}
                    <Button
                      variant="primary"
                      type="submit"
                      className="margin-left-button"
                    >
                      Add reply
                    </Button>{" "}
                  </div>
                </Form>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "red" }}>Alert..!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you really want to close the ticket?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={closeTicket}>
            {loading ? (
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              "Confirm"
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
});

export default ReplyTicket;
