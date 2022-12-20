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

import Camera from "../../../assets/images/bxs_camera.svg";
import "./styles.scss";

const AddService = memo((props) => {
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState("");

  const handleRemoveImage = (id) => {
    console.log(id, "ids kalai");

    const ImageDatas = selectedImage.filter((items, index) => {
      return index + 1 !== id;
    });

    setSelectedImage(ImageDatas);
  };
  const handleImageChange = (e) => {
    setSelectedImage([...selectedImage, e.target.files[0]]);
  };

  //   const [first, setFirst] = useState(false);
  //   const [second, setSecond] = useState(false);
  //   const [third, setThird] = useState(false);
  //   const [fourth, setFourth] = useState(false);
  //   const checkedOne = () => {
  //     setFirst(!first);
  //   };
  //   const checkedTwo = () => {
  //     setSecond(!second);
  //   };
  //   const checkedThree = () => {
  //     setThird(!third);
  //   };
  //   const checkedFour = () => {
  //     setFourth(!fourth);
  //   };
  //   const checkList = [
  //     "Admin Dashboard",
  //     "Seller Dashboard",
  //     "End Customer Dashboard",
  //     "Support and Query Dashboard",
  //   ];

  //   const [error, setError] = useState(false);

  //   const [form, setForm] = useState({
  //     name: "",
  //     email: "",
  //     number: "",
  //     one: null,
  //     two: null,
  //     three: null,
  //     four: null,
  //   });

  //   const { name, email, number, one, two, three, four } = form;

  //   const handleChanges = (e) => {
  //     setForm({ ...form, [e.target.name]: [e.target.value] });
  //   };

  const handleSubmit = () => {
    // if (name.length === 0 || email.length === 0 || number.length === 0) {
    //   setError(true);
    // } else if (name && email && number) {
    //   stmacess();
    // }
    stmacess();
  };

  const handleContinue = () => {
    // if (!one && !two && !three && !four) {
    //   setError(true);
    // } else if (one || two || three || four) {
    //   confirm();
    // }
    // if (!first && !second && !third && !fourth) {
    //   setError(true);
    // } else if (first || second || third || fourth) {
    //   confirm();
    // }
    confirm();
  };

  const stmacess = () => {
    // if (name.length === 0 || email.length === 0 || number.length === 0) {
    //   setError(true);
    // }
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

  const createUser = () => {
    // let permissionIds;
    // first && second && third && fourth
    //   ? (permissionIds = "1,2,3,4")
    //   : second && third && fourth
    //   ? (permissionIds = "2,3,4")
    //   : first && second && fourth
    //   ? (permissionIds = "1,2,4")
    //   : first && third && fourth
    //   ? (permissionIds = "1,3,4")
    //   : first && second && third
    //   ? (permissionIds = "1,2,3")
    //   : third && fourth
    //   ? (permissionIds = "3,4")
    //   : second && fourth
    //   ? (permissionIds = "2,4")
    //   : second && third
    //   ? (permissionIds = "2,3")
    //   : first && fourth
    //   ? (permissionIds = "1,4")
    //   : first && third
    //   ? (permissionIds = "1,3")
    //   : first && second
    //   ? (permissionIds = "1,2")
    //   : fourth
    //   ? (permissionIds = "4")
    //   : third
    //   ? (permissionIds = "3")
    //   : second
    //   ? (permissionIds = "2")
    //   : first
    //   ? (permissionIds = "1")
    //   : (permissionIds = "");
    // const data = {
    //   email: form.email[0],
    //   gender: "male",
    //   password: "abc123=00",
    //   firstName: form.name[0],
    //   lastName: "admin",
    //   contactNumber: form.number[0],
    //   permissionIds: permissionIds,
    // };
    // console.log("form", form.name[0]);
    // console.log("data", data);
    // createUsers(data)
    //   .then(async (result) => {
    //     console.log("result");
    //     navigate("/womeyn/user-management");
    //   })
    //   .catch((err) => {
    //     if (err) {
    //       console.log(err);
    //     }
    //   });
  };

  return (
    <Fragment>
      <div className="title-with-icon">
        <h2>Add Service</h2>
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
              Service Info
            </li>
            <li className="iq-tracker-position-0" id="iq-tracker-position-2">
              Upload Image
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
                    <Form.Label htmlFor="validationServer01">
                      SErvice Name
                    </Form.Label>
                    <Form.Control
                      name="name"
                      type="text"
                      className={true ? "" : "is-valid"}
                      id="name"
                      //   value={name}
                      //   defaultValue=""
                      //   onChange={handleChanges}
                      required
                      style={{ color: "black" }}
                    />
                    {/* <div>
                      {error && name.length === 0 ? (
                        <div className="text-danger">Name is required</div>
                      ) : (
                        ""
                      )}
                    </div> */}
                  </div>

                  <div className="field-container">
                    <Form.Label htmlFor="validationServer01">
                      Service Description
                    </Form.Label>
                    {/* <Form.Control
                      name="description"
                      type="text"
                      className={true ? "" : "is-valid"}
                      id="description"
                      aria-multiline={true}
                      rows="5"
                      //   value={email}
                      //   defaultValue=""
                      //   onChange={handleChanges}
                      required
                      style={{ color: "black" }}
                    /> */}
                    <div class="mb-3">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="5"
                      ></textarea>
                    </div>
                    {/* <div>
                      {error && email.length === 0 ? (
                        <div className="text-danger">Email is required</div>
                      ) : (
                        ""
                      )}
                    </div> */}
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
                <h6>Add Image</h6>
                <div>
                  <label htmlFor="upload-button">
                    <div className="main-camera-section">
                      <div className="inside-camera-section-upload">
                        <img src={Camera} alt="no image" />
                      </div>
                    </div>
                  </label>
                  <div>
                    <input
                      id="upload-button"
                      type="file"
                      name="myImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={(event) => handleImageChange(event)}
                      multiple
                    />
                  </div>
                  {selectedImage && (
                    <div className="row justify-content-center gap-2">
                      {selectedImage.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="container mt-2 col-lg-3 mb-3"
                          >
                            <img
                              src={URL.createObjectURL(item)}
                              alt="Avatar"
                              class="image"
                            />
                            <div class="overlay">
                              <div
                                class="icon"
                                title="User Profile"
                                onClick={() => handleRemoveImage(index + 1)}
                              >
                                <svg
                                  width="25"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  {" "}
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M20.2871 5.24297C20.6761 5.24297 21 5.56596 21 5.97696V6.35696C21 6.75795 20.6761 7.09095 20.2871 7.09095H3.71385C3.32386 7.09095 3 6.75795 3 6.35696V5.97696C3 5.56596 3.32386 5.24297 3.71385 5.24297H6.62957C7.22185 5.24297 7.7373 4.82197 7.87054 4.22798L8.02323 3.54598C8.26054 2.61699 9.0415 2 9.93527 2H14.0647C14.9488 2 15.7385 2.61699 15.967 3.49699L16.1304 4.22698C16.2627 4.82197 16.7781 5.24297 17.3714 5.24297H20.2871ZM18.8058 19.134C19.1102 16.2971 19.6432 9.55712 19.6432 9.48913C19.6626 9.28313 19.5955 9.08813 19.4623 8.93113C19.3193 8.78413 19.1384 8.69713 18.9391 8.69713H5.06852C4.86818 8.69713 4.67756 8.78413 4.54529 8.93113C4.41108 9.08813 4.34494 9.28313 4.35467 9.48913C4.35646 9.50162 4.37558 9.73903 4.40755 10.1359C4.54958 11.8992 4.94517 16.8102 5.20079 19.134C5.38168 20.846 6.50498 21.922 8.13206 21.961C9.38763 21.99 10.6811 22 12.0038 22C13.2496 22 14.5149 21.99 15.8094 21.961C17.4929 21.932 18.6152 20.875 18.8058 19.134Z"
                                    fill="currentColor"
                                  ></path>{" "}
                                </svg>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
                {/* <div>
                  {error && !first && !second && !third && !fourth ? (
                    <div className="text-danger">
                      Please select at least one field
                    </div>
                  ) : (
                    ""
                  )}
                </div> */}
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
                      Review Details
                    </Form.Label>
                    {/* <Form.Control
                      type="text"
                      className={true ? "" : "is-valid"}
                      id="validationServer01"
                      //   value={form.email}
                      required
                      style={{ color: "black" }}
                    /> */}
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </div>
                  {/* <div className="user-card-content field-container">
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
                  </div> */}
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

AddService.displayName = "AddService";
export default AddService;
