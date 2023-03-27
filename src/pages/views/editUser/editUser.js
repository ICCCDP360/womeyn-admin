import { Fragment, memo, useEffect, useState } from "react";
// Router
import { useNavigate, useParams } from "react-router-dom";

// React-bootstrap
import { Button, Col, Form, Row } from "react-bootstrap";

import {
  getAdminByIdServices,
  updateUserServices,
} from "../../../services/admin/adminServices";

//Components
import { toast } from "react-toastify";
import Card from "../../../components/bootstrap/card";
import Loader from "../../../components/Loader";
const MyCheckBoxList = [
  {
    active: true,
    name: "Dashboard",
    id: 1,
    // isChecked: false,
  },
  {
    active: true,
    name: "User Management",
    id: 2,
    // isChecked: false,
  },
  {
    active: true,
    name: "Coupons",
    id: 3,
    // isChecked: false,
  },
  {
    active: true,
    name: "Seller Approval",
    id: 4,
    // isChecked: false,
  },
  {
    active: true,
    name: "Products Approval",
    id: 5,
    // isChecked: false,
  },
  {
    active: true,
    name: "Services Approval",
    id: 6,
    // isChecked: false,
  },
  {
    active: true,
    name: "Manage Categories",
    id: 7,
    // isChecked: false,
  },
  {
    active: true,
    name: "Manage Banners",
    id: 8,
    // isChecked: false,
  },
  {
    active: true,
    name: "Recommendations",
    id: 9,
    // isChecked: false,
  },
  {
    active: true,
    name: "Manage Orders",
    id: 10,
    // isChecked: false,
  },
  {
    active: true,
    name: "Manage Transactions",
    id: 11,
    // isChecked: false,
  },
  {
    active: true,
    name: "Manage Subscribers",
    id: 12,
    // isChecked: false,
  },
];

const Checkbox = ({ obj, onChange }) => {
  return (
    <>
      <input
        type="checkbox"
        id={`custom-checkbox-${obj.index}`}
        name={obj.name}
        // value={obj.checked}
        checked={obj.checked}
        onChange={() => onChange({ ...obj, checked: !obj.checked })}
        style={{ marginRight: 10 }}
      />
      {obj.name}
    </>
  );
};

const EditUser = memo((props) => {
  const navigate = useNavigate();
  const params = useParams();

  const [permissionId, setPermissionId] = useState([]);
  const [permissionName, setPermissionName] = useState([]);

  const history = useNavigate();

  const [user, setUser] = useState("");

  const [permissions, setPermissions] = useState(MyCheckBoxList);

  const [Userdetails, setUsersdetails] = useState({
    firstName: "",
    email: "",
    contactNumber: "",
  });
  const { firstName, email, contactNumber } = Userdetails;

  const handleUserDetailsChanges = (e) => {
    setUsersdetails({ ...Userdetails, [e.target.name]: e.target.value });
  };

  const handleUserProfileSubmit = (e) => {
    e.preventDefault();
    if (
      firstName.length === 0 ||
      email.length === 0 ||
      contactNumber.length <= 8
    ) {
      setError(true);
    }

    if (firstName && email && contactNumber) {
      stmacess();
    }
  };

  useEffect(() => {
    getAdminByIdServices(params.id)
      .then((res) => {
        // setUsers(res.data.results);
        //
        console.log("res", res.data.permissionIds);
        let pId = res.data.permissionIds;
        let pArray = pId.split(",");
        let permissionArray = pArray.map(Number);
        permissionArray.map((e) => {
          MyCheckBoxList.find((r) => {
            if (e === r.id) {
              r.checked = true;
            }
          });
          console.log("array", MyCheckBoxList);
        });
        console.log("pArray", permissionArray);
        setPermissions(MyCheckBoxList);
        setUser(res?.data);
        setUsersdetails(res?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [data, setData] = useState(MyCheckBoxList.sort((a, b) => a.id - b.id));

  console.log("eData", data);

  const [error, setError] = useState(false);

  const [form, setForm] = useState({
    name: "",
    emailId: "",
    number: "",
    one: null,
    two: null,
    three: null,
    four: null,
  });

  // const { firstName, email, contactNumber, one, two, three, four } = form;
  const { name, emailId, number, one, two, three, four } = form;

  const handleChanges = (e) => {
    setForm({ ...form, [e.target.firstName]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstName.length === 0 ||
      email.length === 0 ||
      contactNumber.length === 0
    ) {
      setError(true);
    } else if (firstName && email && contactNumber) {
      stmacess();
    }
  };

  const handleContinue = () => {
    let id = [];
    let name = [];

    console.log("data", data);

    data.map((e) => (e.checked ? id.push(e.id) : null));

    data.map((e) => (e.checked ? name.push(e.name) : null));

    setPermissionId(id);

    setPermissionName(name);

    console.log("a", name);

    if (id.length === 0) {
      setError(true);
    } else {
      confirm();
    }
    confirm();
  };

  const stmacess = () => {
    document.getElementById("basic").classList.remove("show");
    document.getElementById("stmacs").classList.add("show");
    document.getElementById("iq-tracker-position-1").classList.remove("active");
    document.getElementById("iq-tracker-position-1").classList.add("done");
    document.getElementById("iq-tracker-position-2").classList.add("active");
  };
  const confirm = () => {
    // if (!first && !second && !third && !fourth) {
    //   setError(true);
    // }
    document.getElementById("stmacs").classList.remove("show");
    document.getElementById("confirm").classList.add("show");
    document.getElementById("iq-tracker-position-2").classList.remove("active");
    document.getElementById("iq-tracker-position-2").classList.add("done");
    document.getElementById("iq-tracker-position-3").classList.add("active");
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

  const updateUser = () => {
    let pId = permissionId.toString();
    let pName = permissionName.toString();
    const data = {
      email: email,
      password: "qwe12345",
      firstName: firstName,
      lastName: user?.lastName,
      permissionIds: pId,
      permissionNames: pName,
      // permissionIds: user.permissionIds,
    };

    updateUserServices(user.id, data)
      .then((res) => {
        toast.success("successfully User updated");
        navigate("/womeyn/user-management");
        console.log("result", res);
      })
      .catch((err) => {
        toast.error("error");
      });
  };

  const handleCheck = (item) => {
    console.log("check", item);
    if (item.isChecked === true) {
      item.isChecked = false;
    } else {
      item.isChecked = true;
    }
  };

  if (!user) {
    return <Loader />;
  }

  return (
    <Fragment>
      <div className="title-with-icon">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => history(`/womeyn/user-management`)}
          style={{ cursor: "pointer" }}
        >
          <path
            d="M14.6661 6.66663H4.54191L8.94374 2.28357C9.19491 2.03271 9.33602 1.69246 9.33602 1.33769C9.33602 0.98291 9.19491 0.642664 8.94374 0.391799C8.69256 0.140934 8.35189 0 7.99668 0C7.64146 0 7.30079 0.140934 7.04961 0.391799L0.380176 7.05298C0.258738 7.17968 0.163545 7.32908 0.10006 7.49261C-0.0333532 7.81696 -0.0333532 8.18077 0.10006 8.50511C0.163545 8.66865 0.258738 8.81805 0.380176 8.94475L7.04961 15.6059C7.17362 15.7308 7.32115 15.8299 7.48369 15.8975C7.64624 15.9652 7.82059 16 7.99668 16C8.17276 16 8.34711 15.9652 8.50966 15.8975C8.6722 15.8299 8.81973 15.7308 8.94374 15.6059C9.06876 15.4821 9.16799 15.3347 9.23571 15.1724C9.30343 15.01 9.3383 14.8359 9.3383 14.66C9.3383 14.4842 9.30343 14.31 9.23571 14.1477C9.16799 13.9853 9.06876 13.838 8.94374 13.7142L4.54191 9.3311H14.6661C15.0199 9.3311 15.3592 9.19074 15.6093 8.9409C15.8595 8.69105 16 8.35219 16 7.99886C16 7.64553 15.8595 7.30667 15.6093 7.05683C15.3592 6.80699 15.0199 6.66663 14.6661 6.66663Z"
            fill="#232D42"
          />
        </svg>

        <h3>Edit User</h3>
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
                      name="firstName"
                      type="text"
                      className={true ? "" : "is-valid"}
                      id="name"
                      value={firstName}
                      // defaultValue={firstName}
                      onChange={handleUserDetailsChanges}
                      required
                      style={{ color: "black" }}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <div>
                      {error && firstName.length <= 0 ? (
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
                      defaultValue={email}
                      onChange={handleUserDetailsChanges}
                      required
                      style={{ color: "black" }}
                      disabled
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <div>
                      {error && email.length <= 0 ? (
                        <div className="text-danger">email is required</div>
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
                      name="contactNumber"
                      type="text"
                      className={true ? "" : "is-valid"}
                      id="number"
                      value={contactNumber}
                      onChange={handleUserDetailsChanges}
                      required
                      style={{ color: "black" }}
                      maxLength={9}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <div>
                      {error && contactNumber.length <= 0 ? (
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
                      onClick={handleUserProfileSubmit}
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
                            console.log("item", item);
                            setData(
                              data.map((d) => {
                                console.log("d", d);
                                return d.id === item.id ? item : d;
                              })
                            );
                          }}
                        />
                      </div>
                    ))}
                  </div>
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
                    //
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
                      defaultValue={user.email}
                      required
                      style={{ color: "black" }}
                      disabled
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </div>
                  <div className="user-card-content field-container">
                    <Form.Label htmlFor="validationServer01">
                      Permissions Given
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
                    onClick={updateUser}
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

EditUser.displayName = "EditUser";
export default EditUser;
