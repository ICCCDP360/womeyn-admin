import React, { memo, Fragment, useState } from "react";

//React-bootstrap
import { Dropdown, Nav, Image, Modal, Button } from "react-bootstrap";

//Router-dom
import { Link, useNavigate } from "react-router-dom";

//Componet
import Card from "../../components/bootstrap/card";

const UserCard = memo((props) => {
  console.log("permissions", props.id);
  const navigate = useNavigate();
  const getIndex = () => {
    console.log("first", props.data.id);
    // navigate(`/womeyn/seller-approval/edit/${props.data.id}`);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Fragment>
      <Card style={{ padding: "0px" }}>
        <Card.Body>
          <ul className="notification-list m-0 p-0">
            <li className="d-flex align-items-center justify-content-between">
              <div className="w-100">
                <div className="d-flex justify-content-between">
                  <div className="user-card-content">
                    <h6>{props.notificationtitle}</h6>
                    <div className="permission flex-container">
                      <p>{props.notificationdefault}</p>
                      <span>Seller approval</span>
                      <span>Ticket management</span>
                      <span>Account Admin</span>
                    </div>
                    <div className="contact flex-container">
                      <p>Contact: </p>
                      <span>{props.contact}</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <Link
                      className="nav-link "
                      aria-current="page"
                      to={`/womeyn/seller-approval/edit/${props.id}`}
                      // onClick={getIndex}
                    >
                      {" "}
                      <span className="item-name action-link">Edit</span>
                    </Link>
                    <Link className="nav-link" aria-current="page">
                      {" "}
                      <span
                        className="item-name action-link"
                        onClick={handleShow}
                      >
                        Delete
                      </span>
                      <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                        centered
                      >
                        <Modal.Header closeButton>
                          <Modal.Title style={{ color: "red" }}>
                            Warning
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          Do you really want to delete this user?
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Cancel
                          </Button>
                          <Button variant="primary" onClick={handleClose}>
                            Confirm
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </Card.Body>
      </Card>
    </Fragment>
  );
});

UserCard.displayName = "UserCard";
export default UserCard;
