import { Fragment, memo, useEffect, useState } from "react";
import {
  Button,
  Col,
  Form,
  Modal,
  Nav,
  Row,
  Tab,
  Table,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import Select from "react-select";
import Card from "../../../components/bootstrap/card";
import Loader from "../../../components/Loader";
import {
  addPlacement,
  addPlacementProperties,
  getPlacementList,
  getPlacementProperties,
  getSingleProperty,
  updateProperties,
} from "../../../services/placement/placement";
import * as SettingSelector from "../../../store/setting/selectors";
import UserCard from "../../components/user-card";

//Router-dom
// import { Link } from "react-router-dom";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import Camera from "../../../assets/images/bxs_camera.svg";

const PlacementProperties = memo((props) => {
  const params = useParams();
  //   console.log("params", params.id);
  useSelector(SettingSelector.theme_color);
  const [show, setShow] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState("");

  const [properties, setProperties] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteShow = (id) => {
    setShowDeleteModal(true);
    setEditId(id);
  };
  const handleDeleteClose = () => {
    setShowDeleteModal(false);
  };

  const handleEditClose = () => {
    setShowEditModal(false);
  };

  useEffect(() => {
    getProperties();
  }, []);

  const getProperties = () => {
    getPlacementProperties(params.id)
      .then((res) => {
        setProperties(res.data.results);
        console.log("properties", res.data.results);
      })
      .catch((err) => console.log(err));
  };

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
    { value: "Image", label: "Image", id: 1 },
    { value: "Script", label: "Script", id: 2 },
  ];

  const [form, setForm] = useState({
    placementName: "",
  });

  const { placementName } = form;

  const handleChanges = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] });
  };

  const [updateForm, setUpdateForm] = useState({
    scriptText: "",
    redirectUrl: "",
  });

  const { scriptText, redirectUrl } = updateForm;

  const updateHandleChanges = (e) => {
    setUpdateForm({ ...updateForm, [e.target.name]: [e.target.value][0] });
  };

  const addProperty = () => {
    setLoading(true);

    const formData = new FormData();

    formData.append("scriptText", "");
    formData.append("upl", imageData);
    formData.append("redirectUrl", placementName[0]);

    console.log("fomData", formData);

    addPlacementProperties(params.id, formData)
      .then((res) => {
        setLoading(false);
        setShow(false);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const deleteProperty = () => {
    console.log("id", editId);
    setLoading(true);
    let data;

    data = {
      stateId: 5,
    };

    const formData = new FormData();

    formData.append("stateId", 5);

    updateProperties(editId, formData)
      .then((res) => {
        setLoading(false);
        setShow(false);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const enableImage = (id) => {
    let data = {
      stateId: 1,
    };

    const formData = new FormData();

    formData.append("stateId", 1);

    updateProperties(id, formData)
      .then((res) => {
        setLoading(false);
        setShow(false);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const disableImage = (id) => {
    let data = {
      stateId: 3,
    };

    const formData = new FormData();

    formData.append("stateId", 3);

    updateProperties(id, formData)
      .then((res) => {
        setLoading(false);
        setShow(false);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const getSelectedProperty = (id) => {
    setShowEditModal(true);
    setEditId(id);
    getSingleProperty(id)
      .then((res) => {
        setUpdateForm(res.data);
        console.log("updatedForm", res.data);
      })
      .catch((err) => console.log(err));
  };

  const updateSelectedProperty = (e) => {
    setLoading(true);

    const formData = new FormData();

    const imageUrl = imageData ? imageData : "";

    formData.append("scriptText", "");
    formData.append("upl", imageUrl);
    formData.append("redirectUrl", redirectUrl);

    updateProperties(editId, formData)
      .then((res) => {
        setLoading(false);
        setShowEditModal(false);
        window.location.reload();
        console.log("res", res);
      })
      .catch((err) => console.log(err));
  };
  if (!properties) {
    return <Loader />;
  }

  return (
    <Fragment>
      <div className="d-flex flex-row justify-content-between">
        <h3>Placement Properties</h3>
        <Button style={{ marginBottom: 10 }} onClick={handleShow}>
          + Add Image
        </Button>
      </div>
      <Row>
        <Col sm="12">
          <Card>
            <Card.Body>
              <div className="table-responsive">
                <table
                  id="datatable"
                  className="table table-striped"
                  data-toggle="data-table"
                >
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {properties.map((item, index) => (
                      <tr key={index}>
                        <td
                          onClick={() => window.location.reload(false)}
                          style={{ display: "flex", flexDirection: "row" }}
                        >
                          <a href={item.redirectUrl}>
                            <img
                              src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item.imageName}`}
                              alt="Product Img"
                              style={{ width: 100, height: 60 }}
                            />
                          </a>
                          <p className="mt-3 ms-3">{item.imageOriginalName}</p>
                        </td>

                        <td>
                          <p>
                            <div className="svg-style d-flex gap-3">
                              <span
                                className="icon-edit"
                                onClick={() => getSelectedProperty(item.id)}
                              ></span>
                              <span>
                                <i className="icon">
                                  {item.stateId === 1 ? (
                                    <svg
                                      class="icon-32"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      style={{ marginBottom: 16 }}
                                      onClick={() => disableImage(item.id)}
                                    >
                                      <path
                                        opacity="0.4"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M17.7366 6.04606C19.4439 7.36388 20.8976 9.29455 21.9415 11.7091C22.0195 11.8924 22.0195 12.1067 21.9415 12.2812C19.8537 17.1103 16.1366 20 12 20H11.9902C7.86341 20 4.14634 17.1103 2.05854 12.2812C1.98049 12.1067 1.98049 11.8924 2.05854 11.7091C4.14634 6.87903 7.86341 4 11.9902 4H12C14.0683 4 16.0293 4.71758 17.7366 6.04606ZM8.09756 12C8.09756 14.1333 9.8439 15.8691 12 15.8691C14.1463 15.8691 15.8927 14.1333 15.8927 12C15.8927 9.85697 14.1463 8.12121 12 8.12121C9.8439 8.12121 8.09756 9.85697 8.09756 12Z"
                                        fill="currentColor"
                                      ></path>
                                      <path
                                        d="M14.4308 11.997C14.4308 13.3255 13.3381 14.4115 12.0015 14.4115C10.6552 14.4115 9.5625 13.3255 9.5625 11.997C9.5625 11.8321 9.58201 11.678 9.61128 11.5228H9.66006C10.743 11.5228 11.621 10.6695 11.6601 9.60184C11.7674 9.58342 11.8845 9.57275 12.0015 9.57275C13.3381 9.57275 14.4308 10.6588 14.4308 11.997Z"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  ) : item.stateId === 3 ? (
                                    <svg
                                      width="32"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      style={{ marginBottom: 16 }}
                                      onClick={() => enableImage(item.id)}
                                    >
                                      <path
                                        opacity="0.4"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M11.9902 3.88184H12C13.3951 3.88184 14.7512 4.21657 16 4.84567L12.7415 8.13491C12.5073 8.09553 12.2537 8.066 12 8.066C9.8439 8.066 8.09756 9.82827 8.09756 12.004C8.09756 12.26 8.12683 12.516 8.16585 12.7523L4.5561 16.3949C3.58049 15.2529 2.73171 13.8736 2.05854 12.2895C1.98049 12.1123 1.98049 11.8957 2.05854 11.7087C4.14634 6.80583 7.86341 3.88184 11.9902 3.88184ZM18.4293 6.54985C19.8439 7.8494 21.0439 9.60183 21.9415 11.7087C22.0195 11.8957 22.0195 12.1123 21.9415 12.2895C19.8537 17.1924 16.1366 20.1262 12 20.1262H11.9902C10.1073 20.1262 8.30244 19.506 6.71219 18.3738L9.80488 15.2529C10.4293 15.6753 11.1902 15.9322 12 15.9322C14.1463 15.9322 15.8927 14.1699 15.8927 12.004C15.8927 11.1869 15.639 10.419 15.2195 9.78889L18.4293 6.54985Z"
                                        fill="currentColor"
                                      ></path>
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M18.4296 6.54952L20.2052 4.75771C20.4979 4.4722 20.4979 3.99964 20.2052 3.71413C19.9223 3.42862 19.4637 3.42862 19.1711 3.71413L18.254 4.63957C18.2442 4.65926 18.2247 4.67895 18.2052 4.69864C18.1954 4.71833 18.1759 4.73802 18.1564 4.75771L17.2881 5.63491L14.1954 8.7558L3.72715 19.3186L3.69789 19.358C3.50276 19.6435 3.54179 20.0383 3.78569 20.2844C3.92228 20.4311 4.1174 20.5 4.30276 20.5C4.48813 20.5 4.6735 20.4311 4.81984 20.2844L15.2198 9.78855L18.4296 6.54952ZM12.0004 14.4555C13.337 14.4555 14.4297 13.3529 14.4297 12.0041C14.4297 11.5906 14.3321 11.1968 14.1565 10.8621L10.8687 14.1798C11.2004 14.3571 11.5907 14.4555 12.0004 14.4555Z"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  ) : null}
                                </i>
                              </span>
                              <span
                                className="icon-delete"
                                onClick={() => handleDeleteShow(item.id)}
                              ></span>
                            </div>
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mt-2 mb-2">
            <h6>Image</h6>
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
                            style={{ width: 200, height: 200 }}
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
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Redirect url</Form.Label>
              <Form.Control
                name="placementName"
                type="text"
                className={true ? "" : "is-valid"}
                id="placementName"
                value={placementName}
                defaultValue=""
                onChange={handleChanges}
                required
                style={{ color: "black" }}
              />
              {/* <div>
                {error && categoryName.length === 0 ? (
                  <div className="text-danger"> Name is required</div>
                ) : (
                  ""
                )}
              </div> */}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={addProperty}>
            {loading ? (
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              "Save"
            )}
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Delete Modal */}
      <Modal
        show={showDeleteModal}
        onHide={handleDeleteClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "red" }}>Alert..!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you really want to delete the image</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={deleteProperty}>
            {loading ? (
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              "Delete"
            )}
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Edit Modal */}
      <Modal
        show={showEditModal}
        onHide={handleEditClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "red" }}>Update Property</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mt-2 mb-2">
            <h6>Image</h6>
            <label htmlFor="upload-button">
              {showEdit ? (
                <div className="main-camera-section">
                  <div>
                    <img
                      src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${updateForm.imageName}`}
                      alt="Product Img"
                      style={{ width: 200, height: 200 }}
                    />
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
                            style={{ width: 200, height: 200 }}
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
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Redirect url</Form.Label>
              <Form.Control
                name="redirectUrl"
                type="text"
                className={true ? "" : "is-valid"}
                id="redirectUrl"
                value={redirectUrl}
                defaultValue=""
                onChange={updateHandleChanges}
                required
                style={{ color: "black" }}
              />
              {/* <div>
                {error && categoryName.length === 0 ? (
                  <div className="text-danger"> Name is required</div>
                ) : (
                  ""
                )}
              </div> */}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={updateSelectedProperty}>
            {loading ? (
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              "Update"
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
});

export default PlacementProperties;
