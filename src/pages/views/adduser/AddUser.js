import { Fragment, memo, useEffect, useMemo, useState } from "react";
// Router
import { Link, useNavigate } from "react-router-dom";

// React-bootstrap
import {
  Button,
  Col,
  Form,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";

//Components
import Card from "../../../components/bootstrap/card";

import { createAdmin } from "../../../services/admin/adminServices";
import { PermissionListServices } from "../../../services/permission/permissionServices";

const MyCheckBoxList = [
  {
    active: true,
    name: "Dashboard",
    id: 1,
  },
  {
    active: true,
    name: "User Management",
    id: 2,
  },
  {
    active: true,
    name: "Coupons",
    id: 3,
  },
  {
    active: true,
    name: "Seller Approval",
    id: 4,
  },
  {
    active: true,
    name: "Products Approval",
    id: 5,
  },
  {
    active: true,
    name: "Services Approval",
    id: 6,
  },
  {
    active: true,
    name: "Manage Categories",
    id: 7,
  },
  {
    active: true,
    name: "Manage Banners",
    id: 8,
  },
  {
    active: true,
    name: "Recommendations",
    id: 9,
  },
  {
    active: true,
    name: "Manage Orders",
    id: 10,
  },
  {
    active: true,
    name: "Manage Transactions",
    id: 11,
  },
  {
    active: true,
    name: "Manage Subscribers",
    id: 12,
  },
];

const allCheckBox = [{ active: true, name: "select All", id: 0 }];

const Checkbox = ({ obj, onChange }) => {
  return (
    <>
      <input
        type="checkbox"
        id={`custom-checkbox-${obj.index}`}
        name={obj.name}
        value={obj.checked}
        checked={obj.checked}
        onChange={() => onChange({ ...obj, checked: !obj.checked })}
        style={{ marginRight: 10 }}
      />
      {obj.name}
    </>
  );
};

const AddUser = memo((props) => {
  const [data, setData] = useState(MyCheckBoxList.sort((a, b) => a.id - b.id));

  // console.log("sortedData", data);

  const isVerified = useMemo(() => {
    return data.every((d) => d.checked);
  }, [data]);

  const navigate = useNavigate();

  const [permission, setPermission] = useState([]);
  const [permissionId, setPermissionId] = useState([]);
  const [permissionName, setPermissionName] = useState([]);
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);

  const [error, setError] = useState(false);

  useEffect(() => {
    PermissionListServices()
      .then((res) => {
        // setUsers(res.data.results);
        // console.log("subCategory", res?.data?.results);
        setPermission(res?.data?.results);
      })
      .catch((err) => console.log(err));
  }, []);

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
    setForm({
      ...form,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = () => {
    if (name.length === 0 || email.length === 0 || number.length === 0) {
      setError(true);
    } else if (name && email && number) {
      stmacess();
    }
  };

  const handleContinue = () => {
    let id = [];
    let name = [];

    console.log("cData", data);

    data.map((e) => (e.checked ? id.push(e.id) : null));

    data.map((e) => (e.checked ? name.push(e.name) : null));

    setPermissionId(id);

    setPermissionName(name);

    // console.log("a", name);

    if (id.length === 0) {
      setError(true);
    } else {
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
    let pId = permissionId.toString();
    let pName = permissionName.toString();

    const data = {
      email: form.email[0],
      gender: "male",
      password: "abc123=00",
      firstName: form.name[0],
      lastName: "admin",
      contactNumber: form.number[0],
      permissionIds: pId,
      permissionNames: pName,
    };

    // console.log("form", form.name[0]);

    // console.log("data", data);

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

  const getData = () => {
    let a = [];
    const selectedData = data.map((e) => (e.checked ? a.push(e.order) : null));
    console.log("ddd===>", a);
  };

  // console.log("fff", permissionId);

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
              User Info
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
                      maxLength={11}
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
                    <Button variant="secondary" onClick={() => navigate(-1)}>
                      Back
                    </Button>{" "}
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
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                    }}
                  >
                    {data.map((obj, index) => (
                      <div
                        key={index}
                        className="p-1"
                        style={{ marginLeft: 40, marginRight: 20, width: 200 }}
                      >
                        <Checkbox
                          obj={obj}
                          onChange={(item) => {
                            setData(
                              data.map((d) => (d.id === item.id ? item : d))
                            );
                          }}
                        />
                      </div>
                    ))}
                    {/* <Button onClick={getData}>Get Data</Button> */}
                  </div>
                </div>
                <div>
                  {error ? (
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
                      disabled
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </div>
                  <div className="user-card-content field-container">
                    <Form.Label htmlFor="validationServer01">
                      Permissions Given
                      {console.log("Checked", first, second, third, fourth)}
                    </Form.Label>
                    <div className="d-flex flex-wrap">
                      {permissionName.map((item) => {
                        return (
                          <div className="permission flex-container mt-1 flex-wrap">
                            <span>{item}</span>
                          </div>
                        );
                      })}
                    </div>
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
