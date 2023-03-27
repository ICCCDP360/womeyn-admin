import React, { Fragment, memo, useState } from "react";

//React-bootstrap
import { Button, Dropdown, Image, Modal, Nav } from "react-bootstrap";

//Router-dom
import { Link, useNavigate } from "react-router-dom";

//Componet
import Card from "../../components/bootstrap/card";
import { deleteAdminServices } from "../../services/admin/adminServices";

const UserCard = memo((props) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  // console.log("permissions", props.permissionNames);

  const permissions = props.permissions;

  const permissionArray = props.permissionNames.split(",");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteUser = () => {
    setLoading(true);
    deleteAdminServices(props.id)
      .then((res) => {
        console.log("response", res);
        setLoading(false);

        handleClose();
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Fragment>
      <Card style={{ padding: "0px", marginBottom: "4px" }}>
        <Card.Body>
          <ul className="notification-list m-0 p-0">
            <li className="d-flex align-items-center justify-content-between">
              <div className="w-100">
                <div className="d-flex justify-content-between">
                  <div className="user-card-content">
                    <h6>{props.notificationtitle}</h6>
                    <div className="permission d-flex">
                      <p>{props.notificationdefault}</p>
                      {permissionArray ? (
                        <div className="d-flex flex-wrap">
                          {permissionArray.map((e) => {
                            return <span className="mt-1">{e}</span>;
                          })}
                        </div>
                      ) : null}
                      {/* {permissions.includes("1,2,3,4") ? (
                        <>
                          <span>Admin Dashboard</span>
                          <span>Seller Dashboard</span>
                          <span>End Customer Dashboard</span>
                          <span>Support and Query Dashboard</span>
                        </>
                      ) : permissions.includes("2,3,4") ? (
                        <>
                          <span>Seller Dashboard</span>
                          <span>End Customer Dashboard</span>
                          <span>Support and Query Dashboard</span>
                        </>
                      ) : permissions.includes("1,2,4") ? (
                        <>
                          <span>Admin Dashboard</span>
                          <span>Seller Dashboard</span>
                          <span>Support and Query Dashboard</span>
                        </>
                      ) : permissions.includes("1,3,4") ? (
                        <>
                          <span>Admin Dashboard</span>
                          <span>End Customer Dashboard</span>
                          <span>Support and Query Dashboard</span>
                        </>
                      ) : permissions.includes("1,2,3") ? (
                        <>
                          <span>Admin Dashboard</span>
                          <span>Seller Dashboard</span>
                          <span>End Customer Dashboard</span>
                        </>
                      ) : permissions.includes("3,4") ? (
                        <>
                          <span>End Customer Dashboard</span>
                          <span>Support and Query Dashboard</span>
                        </>
                      ) : permissions.includes("2,4") ? (
                        <>
                          <span>Seller Dashboard</span>
                          <span>Support and Query Dashboard</span>
                        </>
                      ) : permissions.includes("2,3") ? (
                        <>
                          <span>Seller Dashboard</span>
                          <span>End Customer Dashboard</span>
                        </>
                      ) : permissions.includes("1,4") ? (
                        <>
                          <span>Admin Dashboard</span>
                          <span>Support and Query Dashboard</span>
                        </>
                      ) : permissions.includes("1,3") ? (
                        <>
                          <span>Admin Dashboard</span>
                          <span>End Customer Dashboard</span>
                        </>
                      ) : permissions.includes("1,2") ? (
                        <>
                          <span>Admin Dashboard</span>
                          <span>Seller Dashboard</span>
                        </>
                      ) : permissions.includes("4") ? (
                        <>
                          <span>Support and Query Dashboard</span>
                        </>
                      ) : permissions.includes("3") ? (
                        <>
                          <span>End Customer Dashboard</span>
                        </>
                      ) : permissions.includes("2") ? (
                        <>
                          <span>Seller Dashboard</span>
                        </>
                      ) : permissions.includes("2") ? (
                        <>
                          <span>Admin Dashboard</span>
                        </>
                      ) : null} */}
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
                          <Button variant="primary" onClick={deleteUser}>
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
