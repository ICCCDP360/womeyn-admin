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

import { createAdmin } from "../../../services/admin/adminServices";

const AddUser = memo((props) => {
  const navigate = useNavigate();

  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const checkedOne = () => {
    setFirst(!first);
  };
  const checkedTwo = () => {
    setSecond(!second);
  };
  const checkedThree = () => {
    setThird(!third);
  };
  const checkedFour = () => {
    setFourth(!fourth);
  };

  const [error, setError] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    one: null,
    two: null,
    three: null,
    four: null,
  });

  const { name, email, number, one, two, three, four } = form;

  const handleChanges = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = () => {
    if (name.length === 0 || email.length === 0 || number.length === 0) {
      setError(true);
    } else if (name && email && number) {
      stmacess();
    }
  };

  const handleContinue = () => {
    if (!one && !two && !three && !four) {
      setError(true);
    } else if (one || two || three || four) {
      confirm();
    }
    if (!first && !second && !third && !fourth) {
      setError(true);
    } else if (first || second || third || fourth) {
      confirm();
    }
  };

  const stmacess = () => {
    if (name.length === 0 || email.length === 0 || number.length === 0) {
      setError(true);
    }
    document.getElementById("basic").classList.remove("show");
    document.getElementById("stmacs").classList.add("show");
    document.getElementById("iq-tracker-position-1").classList.remove("active");
    document.getElementById("iq-tracker-position-1").classList.add("done");
    document.getElementById("iq-tracker-position-2").classList.add("active");
  };
  const confirm = () => {
    // if (!one && !two && !three && !four) {
    //   setError(true);
    // }
    if (!first && !second && !third && !fourth) {
      setError(true);
    }

    document.getElementById("stmacs").classList.remove("show");
    document.getElementById("confirm").classList.add("show");
    document.getElementById("iq-tracker-position-2").classList.remove("active");
    document.getElementById("iq-tracker-position-2").classList.add("done");
    document.getElementById("iq-tracker-position-3").classList.add("active");
    console.log("first", form);
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

    first && second && third && fourth
      ? (permissionIds = "1,2,3,4")
      : second && third && fourth
      ? (permissionIds = "2,3,4")
      : first && second && fourth
      ? (permissionIds = "1,2,4")
      : first && third && fourth
      ? (permissionIds = "1,3,4")
      : first && second && third
      ? (permissionIds = "1,2,3")
      : third && fourth
      ? (permissionIds = "3,4")
      : second && fourth
      ? (permissionIds = "2,4")
      : second && third
      ? (permissionIds = "2,3")
      : first && fourth
      ? (permissionIds = "1,4")
      : first && third
      ? (permissionIds = "1,3")
      : first && second
      ? (permissionIds = "1,2")
      : fourth
      ? (permissionIds = "4")
      : third
      ? (permissionIds = "3")
      : second
      ? (permissionIds = "2")
      : first
      ? (permissionIds = "1")
      : (permissionIds = "");

    const data = {
      email: form.email[0],
      gender: "male",
      password: "abc123=00",
      firstName: form.name[0],
      lastName: "admin",
      contactNumber: form.number[0],
      permissionIds: permissionIds,
    };

    console.log("form", form.name[0]);

    console.log("data", data);

    createAdmin(data)
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
                      value={name}
                      //   defaultValue=""
                      onChange={handleChanges}
                      required
                      style={{ color: "black" }}
                    />
                    <div>
                      {error && name.length === 0 ? (
                        <div className="text-danger">Name is required</div>
                      ) : (
                        ""
                      )}
                    </div>
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
                      value={email}
                      //   defaultValue=""
                      onChange={handleChanges}
                      required
                      style={{ color: "black" }}
                    />
                    <div>
                      {error && email.length === 0 ? (
                        <div className="text-danger">Email is required</div>
                      ) : (
                        ""
                      )}
                    </div>
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
                      value={number}
                      //   defaultValue=""
                      onChange={handleChanges}
                      required
                      style={{ color: "black" }}
                    />
                    <div>
                      {error && number.length === 0 ? (
                        <div className="text-danger">Number is required</div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <hr className="hr-horizontal" />
                  <div>
                    <Button variant="secondary">Back</Button>{" "}
                    <Button
                      variant="primary"
                      onClick={handleSubmit}
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
                      value={one}
                      onChange={checkedOne}
                      name="one"
                      checked={first}
                    />
                    Admin Dashboard
                  </ListGroupItem>
                </div>

                <div className="field-container">
                  <ListGroupItem as="label">
                    <input
                      className="form-check-input me-5"
                      type="checkbox"
                      value={two}
                      onChange={checkedTwo}
                      name="two"
                      checked={second}
                    />
                    Seller Dashboard
                  </ListGroupItem>
                </div>
                <div className="field-container">
                  <ListGroupItem as="label">
                    <input
                      className="form-check-input me-5"
                      type="checkbox"
                      value={three}
                      onChange={checkedThree}
                      name="three"
                      checked={third}
                    />
                    End Customer Dashboard
                  </ListGroupItem>
                </div>
                <div className="field-container">
                  <ListGroupItem as="label">
                    <input
                      className="form-check-input me-5"
                      type="checkbox"
                      value={four}
                      onChange={checkedFour}
                      name="four"
                      checked={fourth}
                    />
                    Support and Query Dashboard
                  </ListGroupItem>
                </div>
                <div>
                  {error && !first && !second && !third && !fourth ? (
                    <div className="text-danger">
                      Please select at least one field
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <hr className="hr-horizontal" />
                <div>
                  <Button variant="secondary" onClick={goBack}>
                    Back
                  </Button>{" "}
                  <Button
                    variant="primary"
                    onClick={handleContinue}
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
                      value={form.email}
                      required
                      style={{ color: "black" }}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </div>
                  <div className="user-card-content field-container">
                    <Form.Label htmlFor="validationServer01">
                      Permissions Given
                      {console.log("Checked", first, second, third, fourth)}
                    </Form.Label>

                    {first && second && third && fourth ? (
                      <div className="permission flex-container">
                        <span>Admin Dashboard</span>
                        <span>Seller Dashboard</span>
                        <span>End Customer Dashboard</span>
                        <div className="mt-2">
                          <span className="p-1">
                            Support and Query Dashboard
                          </span>
                        </div>
                      </div>
                    ) : second && third && fourth ? (
                      <div className="permission flex-container">
                        <span>Seller Dashboard</span>
                        <span>End Customer Dashboard</span>
                        <span>Support and Query Dashboard</span>
                      </div>
                    ) : first && second && fourth ? (
                      <div className="permission flex-container">
                        <span>Admin Dashboard</span>
                        <span>Seller Dashboard</span>
                        <span>Support and Query Dashboard</span>
                      </div>
                    ) : first && third && fourth ? (
                      <div className="permission flex-container">
                        <span>Admin Dashboard</span>
                        <span>End Customer Dashboard</span>
                        <span>Support and Query Dashboard</span>
                      </div>
                    ) : first && second && third ? (
                      <div className="permission flex-container">
                        <span>Admin Dashboard</span>
                        <span>Seller Dashboard</span>
                        <span>End Customer Dashboard</span>
                      </div>
                    ) : third && fourth ? (
                      <div className="permission flex-container">
                        <span>End Customer Dashboard</span>
                        <span>Support and Query Dashboard</span>
                      </div>
                    ) : second && fourth ? (
                      <div className="permission flex-container">
                        <span>Seller Dashboard</span>
                        <span>Support and Query Dashboard</span>
                      </div>
                    ) : second && third ? (
                      <div className="permission flex-container">
                        <span>Seller Dashboard</span>
                        <span>End Customer Dashboard</span>
                      </div>
                    ) : first && fourth ? (
                      <div className="permission flex-container">
                        <span>Admin Dashboard</span>
                        <span>Support and Query Dashboard</span>
                      </div>
                    ) : first && third ? (
                      <div className="permission flex-container">
                        <span>Admin Dashboard</span>
                        <span>End Customer Dashboard</span>
                      </div>
                    ) : first && second ? (
                      <div className="permission flex-container">
                        <span>Admin Dashboard</span>
                        <span>Seller Dashboard</span>
                      </div>
                    ) : fourth ? (
                      <div className="permission flex-container">
                        <span>Support and Query Dashboard</span>
                      </div>
                    ) : third ? (
                      <div className="permission flex-container">
                        <span>End Customer Dashboard</span>
                      </div>
                    ) : second ? (
                      <div className="permission flex-container">
                        <span>Seller Dashboard</span>
                      </div>
                    ) : first ? (
                      <div className="permission flex-container">
                        <span>Admin Dashboard</span>
                      </div>
                    ) : null}
                  </div>
                  <hr className="hr-horizontal" />
                  <Button variant="secondary" onClick={goBack2}>
                    Back
                  </Button>{" "}
                  <Button
                    variant="primary"
                    onClick={createUser}
                    className="margin-left-button "
                  >
                    Save
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
