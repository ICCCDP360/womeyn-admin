import { Fragment, memo, useEffect, useState } from "react";
// Router
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";

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
import "./styles.scss";

import Camera from "../../../assets/images/bxs_camera.svg";

const AddPlacement = memo((props) => {
  const navigate = useNavigate();
  const [showEdit, setShowEdit] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageData, setImageData] = useState(null);

  const handleRemoveImage = (id) => {
    const ImageDatas = selectedImage.filter((items, index) => {
      return index + 1 !== id;
    });

    setSelectedImage(ImageDatas);
    setShowEdit(true);
  };

  const handleImageChange = (e) => {
    setSelectedImage([e.target.files[0]]);
    setImageData(e.target.files[0]);
    setShowEdit(false);
    // console.log("Image", e.target.files[0]);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { value: "Image", label: "Image" },
    { value: "Script", label: "Script" },
    { value: "Carousel", label: "Carousel" },
  ];

  return (
    <Fragment>
      <div>
        <h3>Add Placement</h3>
      </div>

      <Row>
        <Col>
          <Card>
            <Card.Body className="p-0">
              <div id="basic" className="iq-product-tracker-card show b-0">
                <Card>
                  <Card.Body>
                    <Form.Group className="form-group">
                      <Form.Label>
                        <h6>Select Placement</h6>
                      </Form.Label>
                      <select
                        className="form-select mb-2 shadow-none"
                        style={{ width: "40%" }}
                      >
                        <option value="1">Banner One</option>
                        <option value="2">Banner Two</option>
                        <option value="3">Banner Three</option>
                      </select>
                    </Form.Group>
                    <Form.Group
                      className="form-group "
                      style={{ width: "40%" }}
                    >
                      <Form.Label>
                        <h6>Type</h6>
                      </Form.Label>
                      {/* <select
                        className="form-select mb-2 shadow-none"
                        style={{ width: "40%" }}
                      >
                        options={options}
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        <option value="1">Image</option>
                        <option value="2">Script</option>
                      </select> */}
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                      />
                    </Form.Group>
                  </Card.Body>
                </Card>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body className="p-0">
              {selectedOption.value === "Script" ? (
                <div id="basic" className="iq-product-tracker-card show b-0">
                  <Form>
                    <div className="field-container">
                      <Form.Label htmlFor="validationServer01">
                        Script
                      </Form.Label>
                      <Form.Control
                        name="categoryDescription"
                        type="text"
                        className={true ? "" : "is-valid"}
                        id="categoryDescription"
                        as="textarea"
                        rows={5}
                        //   value={categoryDescription}
                        defaultValue=""
                        //   onChange={handleChanges}
                        required
                        style={{ color: "black" }}
                      />

                      {/* <div>
                      {error && categoryDescription.length === 0 ? (
                        <div className="text-danger">
                          Category Description is required
                        </div>
                      ) : (
                        ""
                      )}
                    </div> */}
                    </div>

                    {/* <TagsInput /> */}
                    <hr className="hr-horizontal" />
                    <div>
                      <Button variant="secondary">Back</Button>{" "}
                      <Button
                        variant="primary"
                        //   onClick={handleSubmit}
                        className="margin-left-button "
                      >
                        Continue
                      </Button>{" "}
                    </div>
                  </Form>
                </div>
              ) : selectedOption.value === "Image" ? (
                <div>
                  <h6>Add Image</h6>
                  <div className="mt-4">
                    <label htmlFor="upload-button">
                      {showEdit ? (
                        <div className="main-camera-section">
                          <div className="inside-camera-section-upload">
                            <img src={Camera} alt="no image" />
                          </div>
                        </div>
                      ) : (
                        <div>
                          {selectedImage.map((item, index) => {
                            return (
                              <div key={index} className="container mt-2  mb-3">
                                <div className="main-camera-section">
                                  <img
                                    src={URL.createObjectURL(item)}
                                    alt="Avatar"
                                    class="image"
                                    style={{ width: 100, height: 100 }}
                                  />
                                </div>
                                <div class="overlay mt-2">
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
                  </div>
                  <div className="mt-4">
                    <Button variant="secondary">Back</Button>{" "}
                    <Button
                      variant="primary"
                      //   onClick={handleSubmit}
                      className="margin-left-button "
                    >
                      Continue
                    </Button>{" "}
                  </div>
                </div>
              ) : null}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

AddPlacement.displayName = "AddPlacement";
export default AddPlacement;
