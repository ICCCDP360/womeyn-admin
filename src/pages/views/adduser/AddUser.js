import { useState, memo, Fragment } from "react";
// Router
import { Link, useNavigate } from "react-router-dom";

// React-bootstrap
import {
  Button,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Form,
} from "react-bootstrap";

//Components
import Card from "../../../components/bootstrap/card";

//addUser Services
import { createUsers } from "../../../services/create-user/create-user";

const AddUser = memo((props) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({});
  const permission = [];

  const onFormChange = (e, updatedAt) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const stmacess = () => {
    document.getElementById("basic").classList.remove("show");
    document.getElementById("stmacs").classList.add("show");
    document.getElementById("iq-tracker-position-1").classList.remove("active");
    document.getElementById("iq-tracker-position-1").classList.add("done");
    document.getElementById("iq-tracker-position-2").classList.add("active");
  };
  const confirm = () => {
    document.getElementById("stmacs").classList.remove("show");
    document.getElementById("confirm").classList.add("show");
    document.getElementById("iq-tracker-position-2").classList.remove("active");
    document.getElementById("iq-tracker-position-2").classList.add("done");
    document.getElementById("iq-tracker-position-3").classList.add("active");
    console.log("first", values);
    console.log("permisson", permission);
  };

  const goBack = () => {
    document.getElementById("basic").classList.add("show");
    document.getElementById("stmacs").classList.remove("show");
    document.getElementById("iq-tracker-position-2").classList.remove("active");
    document.getElementById("iq-tracker-position-2").classList.add("done");
    document.getElementById("iq-tracker-position-1").classList.add("active");
  };

  const goBack2 = () => {
    document.getElementById("stmacs").classList.add("show");
    document.getElementById("confirm").classList.remove("show");
    document.getElementById("iq-tracker-position-3").classList.remove("active");
    document.getElementById("iq-tracker-position-3").classList.add("done");
    document.getElementById("iq-tracker-position-2").classList.add("active");
  };

  const createUser = () => {
    let permissionIds;

    values.one && values.two && values.three && values.four
      ? (permissionIds = "1,2,3,4")
      : values.two && values.three && values.four
      ? (permissionIds = "2,3,4")
      : values.one && values.two && values.four
      ? (permissionIds = "1,2,4")
      : values.one && values.two && values.three
      ? (permissionIds = "1,2,3")
      : values.three && values.four
      ? (permissionIds = "3,4")
      : values.two && values.four
      ? (permissionIds = "2,4")
      : values.two && values.three
      ? (permissionIds = "2,3")
      : values.one && values.four
      ? (permissionIds = "1,4")
      : values.one && values.three
      ? (permissionIds = "1,3")
      : values.one && values.two
      ? (permissionIds = "1,2")
      : values.four
      ? (permissionIds = "4")
      : values.three
      ? (permissionIds = "3")
      : values.two
      ? (permissionIds = "2")
      : values.one
      ? (permissionIds = "1")
      : (permissionIds = "");

    const data = {
      email: values.email,
      gender: "male",
      password: "abc123=00",
      firstName: values.name,
      lastName: "admin",
      contactNumber: values.number,
      permissionIds: permissionIds,
    };

    createUsers(data)
      .then(async (result) => {
        console.log("result");
        navigate("/womeyn/user-management");
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  };

  return (
    <Fragment>
      <div className="title-with-icon">
        <h3>Add User</h3>
      </div>
      <Row>
        <Col sm="12">
          <ul
            className="text-center iq-product-tracker mb-0 py-4"
            id="progressbar"
          >
            <li
              className="active iq-tracker-position-0"
              id="iq-tracker-position-1"
            >
              Basic Info
            </li>
            <li className="iq-tracker-position-0" id="iq-tracker-position-2">
              System Access
            </li>
            <li className="iq-tracker-position-0" id="iq-tracker-position-3">
              Confirm
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            {/* <div className="card-header">
                            <h4>My Cart</h4>
                        </div> */}
            <Card.Body className="p-0">
              <div id="basic" className="iq-product-tracker-card show b-0">
                <Form>
                  <div className="field-container">
                    <Form.Label htmlFor="validationServer01">Name</Form.Label>
                    <Form.Control
                      name="name"
                      type="text"
                      className={true ? "" : "is-valid"}
                      id="name"
                      //   defaultValue=""
                      onChange={onFormChange}
                      required
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </div>

                  <div className="field-container">
                    <Form.Label htmlFor="validationServer01">
                      Email Address
                    </Form.Label>
                    <Form.Control
                      name="email"
                      type="email"
                      className={true ? "" : "is-valid"}
                      id="email"
                      //   defaultValue=""
                      onChange={onFormChange}
                      required
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </div>
                  <div className="field-container">
                    <Form.Label htmlFor="validationServer01">
                      Contact Details
                    </Form.Label>
                    <Form.Control
                      name="number"
                      type="text"
                      className={true ? "" : "is-valid"}
                      id="number"
                      //   defaultValue=""
                      onChange={onFormChange}
                      required
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </div>
                  <hr className="hr-horizontal" />
                  <div>
                    <Button variant="secondary">Cancel</Button>{" "}
                    <Button
                      variant="primary"
                      onClick={stmacess}
                      //   onClick={() => {
                      //     console.log(values);
                      //   }}
                      className="margin-left-button "
                    >
                      Continue
                    </Button>{" "}
                  </div>
                </Form>
              </div>
              <div id="stmacs" className="iq-product-tracker-card  b-0">
                <div className="field-container">
                  <ListGroupItem as="label">
                    <input
                      className="form-check-input me-5"
                      type="checkbox"
                      //   defaultValue=""
                      //   onChange={() => {
                      //     permission.push("Admin Dashboard");
                      //   }}
                      onChange={onFormChange}
                      name="one"
                    />
                    Admin Dashboard
                  </ListGroupItem>
                </div>

                <div className="field-container">
                  <ListGroupItem as="label">
                    <input
                      className="form-check-input me-5"
                      type="checkbox"
                      //   defaultValue=""
                      //   onChange={() => {
                      //     permission.push("Seller Dashboard");
                      //   }}
                      onChange={onFormChange}
                      name="two"
                    />
                    Seller Dashboard
                  </ListGroupItem>
                </div>
                <div className="field-container">
                  <ListGroupItem as="label">
                    <input
                      className="form-check-input me-5"
                      type="checkbox"
                      //   defaultValue=""
                      //   onChange={() => {
                      //     permission.push("End Customer Dashboard");
                      //   }}
                      onChange={onFormChange}
                      name="three"
                    />
                    End Customer Dashboard
                  </ListGroupItem>
                </div>
                <div className="field-container">
                  <ListGroupItem as="label">
                    <input
                      className="form-check-input me-5"
                      type="checkbox"
                      //   defaultValue=""
                      //   onChange={() => {
                      //     permission.push("Support and Query Dashboard");
                      //   }}
                      onChange={onFormChange}
                      name="four"
                    />
                    Support and Query Dashboard
                  </ListGroupItem>
                </div>

                <hr className="hr-horizontal" />
                <div>
                  <Button variant="secondary" onClick={goBack}>
                    Cancel
                  </Button>{" "}
                  <Button
                    variant="primary"
                    onClick={confirm}
                    // onClick={() => {
                    //   console.log(values);
                    // }}
                    className="margin-left-button "
                  >
                    Continue
                  </Button>{" "}
                </div>
              </div>
              <div id="confirm" className="iq-product-tracker-card  b-0">
                <Form>
                  <div className="field-container">
                    <Form.Label htmlFor="validationServer01">
                      Email Address
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className={true ? "" : "is-valid"}
                      id="validationServer01"
                      defaultValue={values.email}
                      required
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </div>
                  <div className="user-card-content field-container">
                    <Form.Label htmlFor="validationServer01">
                      Permissions Given
                    </Form.Label>

                    {values.one && values.two && values.three && values.four ? (
                      <div className="permission flex-container">
                        <span>Admin Dashboard</span>
                        <span>Seller Dashboard</span>
                        <span>End Customer Dashboard</span>
                        <span>Support and Query Dashboard</span>
                      </div>
                    ) : values.two && values.three && values.four ? (
                      <div className="permission flex-container">
                        <span>Seller Dashboard</span>
                        <span>End Customer Dashboard</span>
                        <span>Support and Query Dashboard</span>
                      </div>
                    ) : values.one && values.two && values.four ? (
                      <div className="permission flex-container">
                        <span>Admin Dashboard</span>
                        <span>Seller Dashboard</span>
                        <span>Support and Query Dashboard</span>
                      </div>
                    ) : values.one && values.two && values.three ? (
                      <div className="permission flex-container">
                        <span>Admin Dashboard</span>
                        <span>Seller Dashboard</span>
                        <span>End Customer Dashboard</span>
                      </div>
                    ) : values.three && values.four ? (
                      <div className="permission flex-container">
                        <span>End Customer Dashboard</span>
                        <span>Support and Query Dashboard</span>
                      </div>
                    ) : values.two && values.four ? (
                      <div className="permission flex-container">
                        <span>Seller Dashboard</span>
                        <span>Support and Query Dashboard</span>
                      </div>
                    ) : values.two && values.three ? (
                      <div className="permission flex-container">
                        <span>Seller Dashboard</span>
                        <span>End Customer Dashboard</span>
                      </div>
                    ) : values.one && values.four ? (
                      <div className="permission flex-container">
                        <span>Admin Dashboard</span>
                        <span>Support and Query Dashboard</span>
                      </div>
                    ) : values.one && values.three ? (
                      <div className="permission flex-container">
                        <span>Admin Dashboard</span>
                        <span>End Customer Dashboard</span>
                      </div>
                    ) : values.one && values.two ? (
                      <div className="permission flex-container">
                        <span>Admin Dashboard</span>
                        <span>Seller Dashboard</span>
                      </div>
                    ) : values.four ? (
                      <div className="permission flex-container">
                        <span>Support and Query Dashboard</span>
                      </div>
                    ) : values.three ? (
                      <div className="permission flex-container">
                        <span>End Customer Dashboard</span>
                      </div>
                    ) : values.two ? (
                      <div className="permission flex-container">
                        <span>Seller Dashboard</span>
                      </div>
                    ) : values.one ? (
                      <div className="permission flex-container">
                        <span>Admin Dashboard</span>
                      </div>
                    ) : null}
                  </div>
                  <hr className="hr-horizontal" />
                  <Button variant="secondary" onClick={goBack2}>
                    Cancel
                  </Button>{" "}
                  <Button
                    variant="primary"
                    onClick={createUser}
                    className="margin-left-button "
                  >
                    Save Updates
                  </Button>{" "}
                </Form>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

AddUser.displayName = "AddUser";
export default AddUser;
