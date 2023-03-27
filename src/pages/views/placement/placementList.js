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
  getPlacementList,
  getSinglePlacement,
  updatePlacement,
} from "../../../services/placement/placement";
import * as SettingSelector from "../../../store/setting/selectors";
import UserCard from "../../components/user-card";
import "./styles.scss";

//Router-dom
import { Link } from "react-router-dom";

const PlacementList = memo((props) => {
  useSelector(SettingSelector.theme_color);
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  const [error, setError] = useState(false);

  const [placement, setPlacement] = useState();
  const [selectedPlacement, setSelectedPlacement] = useState("");
  const [editId, setEditId] = useState("");
  const [getId, setGetId] = useState("");

  const handleAlertClose = () => setShowAlertModal(false);
  const handleAlertShow = (id) => {
    console.log("id", id);
    setShowAlertModal(true);
    setGetId(id);
    // getSelectedPlacement(id);
  };

  console.log("fddfdf", getId);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const [selectedOption, setSelectedOption] = useState("");
  const [defaultOption, setDefaultOption] = useState("");

  const options = [
    { value: "Image", label: "Image", id: 1 },
    { value: "Script", label: "Script", id: 2 },
  ];

  const [form, setForm] = useState({
    placementName: "",
    placementDescription: "",
  });

  const { placementName, placementDescription } = form;

  const handleChanges = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] });
  };

  const [updateForm, setUpdateForm] = useState({
    name: "",
    description: "",
  });

  const { name, description } = updateForm;

  const updateHandleChanges = (e) => {
    setUpdateForm({ ...updateForm, [e.target.name]: [e.target.value][0] });
  };

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption.id);
    console.log("selectedOption", selectedOption.id);
  };

  const updateHandleChange = (selectedOption) => {
    setSelectedOption(selectedOption.id);
    console.log("selectedOption", selectedOption.id);
  };

  const addPlacementList = () => {
    setLoading(true);
    let data = {
      name: placementName[0],
      typeId: selectedOption,
      description: placementDescription[0],
    };
    addPlacement(data)
      .then((res) => {
        setLoading(false);
        setShow(false);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const getSelectedPlacement = () => {
    setShowAlertModal(false);
    console.log("getId", getId);
    setShowModal(true);
    setEditId(getId);
    getSinglePlacement(getId)
      .then((res) => {
        setUpdateForm(res.data);
        let placementTypeId = res.data.typeId;
        setDefaultOption(placementTypeId);
        console.log("get", placementTypeId);
      })
      .catch((err) => console.log(err));
  };

  console.log("updateOption", selectedOption);

  console.log("updateForm", updateForm);

  const updateStatus = (e) => {
    let data;

    e.stateId === 1 ? (data = { stateId: 3 }) : (data = { stateId: 1 });
    updatePlacement(e.id, data)
      .then((res) => {
        setLoading(false);
        setShow(false);
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteShow = (id) => {
    setShowDeleteModal(true);
    setEditId(id);
  };
  const handleDeleteClose = () => {
    setShowDeleteModal(false);
  };

  const deletePlacement = () => {
    let data;

    data = {
      stateId: 5,
    };
    updatePlacement(editId, data)
      .then((res) => {
        setLoading(false);
        setShow(false);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const updateSelectedPlacement = (e) => {
    placement.some((r) => r.name === name) ? setError(true) : setError(false);

    setLoading(true);
    let data = {
      name: name,
      typeId: selectedOption ? selectedOption : defaultOption,
      description: description,
    };
    if (error) {
      setLoading(false);
      return null;
    }
    updatePlacement(e, data)
      .then((res) => {
        setLoading(false);
        setShowModal(false);
        window.location.reload();
        console.log("res", res);
      })
      .catch((err) => console.log(err));
  };

  console.log("form", form);
  console.log("selected", selectedOption);

  console.log("placement", placement);

  useEffect(() => {
    getPlacement();
  }, []);

  const getPlacement = () => {
    getPlacementList()
      .then((res) => {
        // console.log("placementDetails", res.data.results[0]);
        // setUpdateForm(res.data.results[0]);
        setPlacement(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  if (!placement) {
    return <Loader />;
  }

  return (
    <Fragment>
      <div className="d-flex flex-row justify-content-between">
        <h3>Placements List</h3>

        {/* <Link
          className="nav-link "
          aria-current="page"
          to="/womeyn/add-placement"
        > */}
        <Button style={{ marginBottom: 10 }} onClick={handleShow}>
          + Add Placement
        </Button>
        {/* </Link> */}
      </div>
      <Row>
        {placement.map((item) => {
          // item.stateId === 1 ? setChecked(true) : setChecked(false);
          return (
            <>
              <Col lg="4" md="2" className="placement-tabsize">
                <div className="placementlist-full-container">
                  <div className="placementlist-center-container">
                    <div className="placementheaderlist">
                      <h5 className="placement-title-text">
                        <Link
                          className="nav-link "
                          aria-current="page"
                          to={
                            item.typeId === 1
                              ? `/womeyn/placement-properties/${item.id}`
                              : `/womeyn/placement-script-properties/${item.id}`
                          }
                          // onClick={getIndex}
                        >
                          {item.name}
                        </Link>
                      </h5>
                    </div>
                    {/* <p className="placementcode-text">
                    {item.placementCode}
                  </p> */}
                    <p className="placementcode-desc">{item.description}</p>
                  </div>
                  <div className="placement-btm-container">
                    <button
                      className="placement-edit-btn"
                      onClick={() => handleAlertShow(item.id)}
                    >
                      Edit
                    </button>
                    {/* </Link> */}

                    <button
                      className="placement-dlte-btn"
                      onClick={() => handleDeleteShow(item.id)}
                    >
                      Delete
                    </button>

                    <Form.Check className="form-switch">
                      <Form.Check.Input
                        type="checkbox"
                        // checked={checked}
                        defaultChecked={item.stateId === 1 ? true : false}
                        onChange={() => updateStatus(item)}
                        className="placement-switch-btn"
                      />
                    </Form.Check>
                  </div>
                </div>
              </Col>
            </>
          );
        })}
      </Row>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Placement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
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

            <Form.Group className="mb-3">
              <Form.Label>Type</Form.Label>
              <Select
                defaultValue={selectedOption}
                onChange={handleChange}
                options={options}
              />

              {/* <div>
                {error && categoryDescription.length === 0 ? (
                  <div className="text-danger">Description is required</div>
                ) : (
                  ""
                )}
              </div> */}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="validationServer01">
                Placement Description
              </Form.Label>
              <Form.Control
                name="placementDescription"
                type="text"
                className={true ? "" : "is-valid"}
                id="placementDescription"
                as="textarea"
                rows={5}
                value={placementDescription}
                defaultValue=""
                onChange={handleChanges}
                required
                style={{ color: "black" }}
              />

              {/* <div>
                {error && categoryDescription.length === 0 ? (
                  <div className="text-danger">Description is required</div>
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
          <Button variant="primary" onClick={addPlacementList}>
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
      {/* Edit Banner */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Update Placement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                className={true ? "" : "is-valid"}
                id="name"
                value={name}
                // defaultValue={updateForm.name}
                onChange={updateHandleChanges}
                required
                style={{ color: "black" }}
              />
              <div>
                {error ? (
                  <div className="text-danger"> Name is already exist</div>
                ) : (
                  ""
                )}
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              {defaultOption === 1 ? (
                <>
                  <Form.Label>Type</Form.Label>
                  <Select
                    defaultValue={options[0]}
                    onChange={updateHandleChange}
                    options={options}
                  />
                </>
              ) : defaultOption === 2 ? (
                <>
                  <Form.Label>Type</Form.Label>
                  <Select
                    defaultValue={options[1]}
                    onChange={updateHandleChange}
                    options={options}
                  />
                </>
              ) : null}

              {/* <div>
                {error && categoryDescription.length === 0 ? (
                  <div className="text-danger">Description is required</div>
                ) : (
                  ""
                )}
              </div> */}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="validationServer01">
                Placement Description
              </Form.Label>
              <Form.Control
                name="description"
                type="text"
                className={true ? "" : "is-valid"}
                id="description"
                as="textarea"
                rows={5}
                value={description}
                // defaultValue={updateForm.description}
                onChange={updateHandleChanges}
                required
                style={{ color: "black" }}
              />

              {/* <div>
                {placement.some((e) => e.name === name) ? (
                  <div className="text-danger">Placement name is existed</div>
                ) : (
                  ""
                )}
              </div> */}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => updateSelectedPlacement(editId)}
          >
            {/* {loading ? (
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              "Update"
            )} */}
            update
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Delete Placement */}
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
        <Modal.Body>Do you really want to delete the placement</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={deletePlacement}>
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
      {/* AlertModal */}
      <Modal show={showAlertModal} onHide={handleAlertClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Update Placement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>If you Change the Placement type, all the data will be deleted</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAlertClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={getSelectedPlacement}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
});

export default PlacementList;
