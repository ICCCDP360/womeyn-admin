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

  const [checked, setChecked] = useState([]);
  const checkList = [
    "Admin Dashboard",
    "Seller Dashboard",
    "End Customer Dashboard",
    "Support and Query Dashboard",
  ];

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
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

  const [isChecked, setIsChecked] = useState(false);

  const { name, email, number, one, two, three, four } = form;

  const handleChanges = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] });
  };

  const setDatas = (e) => {
    const { value, checked, name } = e.target;
    if (checked) {
      setForm({ ...form, [name]: [value] });
    } else {
      setForm(
        ...form,
        form.filter((name) => name !== value)
      );
    }
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
    if (!one && !two && !three && !four) {
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

    form.one && form.two && form.three && form.four
      ? (permissionIds = "1,2,3,4")
      : form.two && form.three && form.four
      ? (permissionIds = "2,3,4")
      : form.one && form.two && form.four
      ? (permissionIds = "1,2,4")
      : form.one && form.two && form.three
      ? (permissionIds = "1,2,3")
      : form.three && form.four
      ? (permissionIds = "3,4")
      : form.two && form.four
      ? (permissionIds = "2,4")
      : form.two && form.three
      ? (permissionIds = "2,3")
      : form.one && form.four
      ? (permissionIds = "1,4")
      : form.one && form.three
      ? (permissionIds = "1,3")
      : form.one && form.two
      ? (permissionIds = "1,2")
      : form.four
      ? (permissionIds = "4")
      : form.three
      ? (permissionIds = "3")
      : form.two
      ? (permissionIds = "2")
      : form.one
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
                    <Button variant="secondary">Cancel</Button>{" "}
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
                      //   defaultValue=""
                      //   onChange={() => {
                      //     permission.push("Admin Dashboard");
                      //   }}
                      value={one}
                      //   defaultValue=""
                      onChange={handleChanges}
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
                      value={two}
                      //   defaultValue=""
                      onChange={handleChanges}
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
                      value={three}
                      //   defaultValue=""
                      onChange={handleChanges}
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
                      value={four}
                      //   defaultValue=""
                      onChange={handleChanges}
                      name="four"
                    />
                    Support and Query Dashboard
                  </ListGroupItem>
                </div>
                {/* {checkList.map((item, index) => (
                  <div key={index} className="field-container">
                    <ListGroupItem as="label">
                      <input
                        className="form-check-input me-5"
                        value={item}
                        type="checkbox"
                        onChange={handleCheck}
                      />
                    </ListGroupItem>
                    <span className={isChecked(item)}>{item}</span>
                  </div>
                ))} */}
                <div>
                  {error && !one && !two && !three && !four ? (
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
                    Cancel
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
                      defaultValue={form.email}
                      required
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </div>
                  <div className="user-card-content field-container">
                    <Form.Label htmlFor="validationServer01">
                      Permissions Given
                    </Form.Label>

                    {form.one && form.two && form.three && form.four ? (
                      <div className="permission flex-container">
                        <span>Admin Dashboard</span>
                        <span>Seller Dashboard</span>
                        <span>End Customer Dashboard</span>
                        <span>Support and Query Dashboard</span>
                      </div>
                    ) : form.two && form.three && form.four ? (
                      <div className="permission flex-container">
                        <span>Seller Dashboard</span>
                        <span>End Customer Dashboard</span>
                        <span>Support and Query Dashboard</span>
                      </div>
                    ) : form.one && form.two && form.four ? (
                      <div className="permission flex-container">
                        <span>Admin Dashboard</span>
                        <span>Seller Dashboard</span>
                        <span>Support and Query Dashboard</span>
                      </div>
                    ) : form.one && form.two && form.three ? (
                      <div className="permission flex-container">
                        <span>Admin Dashboard</span>
                        <span>Seller Dashboard</span>
                        <span>End Customer Dashboard</span>
                      </div>
                    ) : form.three && form.four ? (
                      <div className="permission flex-container">
                        <span>End Customer Dashboard</span>
                        <span>Support and Query Dashboard</span>
                      </div>
                    ) : form.two && form.four ? (
                      <div className="permission flex-container">
                        <span>Seller Dashboard</span>
                        <span>Support and Query Dashboard</span>
                      </div>
                    ) : form.two && form.three ? (
                      <div className="permission flex-container">
                        <span>Seller Dashboard</span>
                        <span>End Customer Dashboard</span>
                      </div>
                    ) : form.one && form.four ? (
                      <div className="permission flex-container">
                        <span>Admin Dashboard</span>
                        <span>Support and Query Dashboard</span>
                      </div>
                    ) : form.one && form.three ? (
                      <div className="permission flex-container">
                        <span>Admin Dashboard</span>
                        <span>End Customer Dashboard</span>
                      </div>
                    ) : form.one && form.two ? (
                      <div className="permission flex-container">
                        <span>Admin Dashboard</span>
                        <span>Seller Dashboard</span>
                      </div>
                    ) : form.four ? (
                      <div className="permission flex-container">
                        <span>Support and Query Dashboard</span>
                      </div>
                    ) : form.three ? (
                      <div className="permission flex-container">
                        <span>End Customer Dashboard</span>
                      </div>
                    ) : form.two ? (
                      <div className="permission flex-container">
                        <span>Seller Dashboard</span>
                      </div>
                    ) : form.one ? (
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
