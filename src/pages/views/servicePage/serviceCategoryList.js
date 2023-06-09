import { Fragment, memo, useEffect, useState } from "react";

//react-bootstrap
import { Button, Col, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";

//components
import Card from "../../../components/bootstrap/card";

// Sweetalert
import Swal from "sweetalert2";

import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import {
  createCategory,
  getServiceSubCategory,
} from "../../../services/category/categoryServices";

const serviceCategoryList = memo(() => {
  const userId = localStorage.getItem("user_id");
  let { categoryId, name } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [subCategory, setSubCategory] = useState([]);

  useEffect(() => {
    getServiceSubCategory(categoryId)
      .then((res) => {
        // setUsers(res.data.results);
        console.log("subCategory", res);
        setSubCategory(res?.data?.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const [form, setForm] = useState({
    categoryName: "",
    categoryDescription: "",
  });

  const { categoryName, categoryDescription } = form;

  const handleChanges = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = () => {
    if (categoryName.length === 0 || categoryDescription.length === 0) {
      setError(true);
    } else if (categoryName && categoryDescription) {
      createProduct();
    }
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const createProduct = () => {
    const formData = new FormData();

    formData.append("name", form.categoryName[0]);
    formData.append("description", form.categoryDescription[0]);
    formData.append("typeId", 2);
    formData.append("createdBy", userId);
    formData.append("categoryId", categoryId);

    console.log("name", form.categoryName[0]);

    createCategory(formData)
      .then(async (result) => {
        console.log(result);
        handleClose();
        window.location.reload(false);
        // navigate("/womeyn/product-category");
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  };

  return (
    <Fragment>
      <Row>
        <div className="header-title d-flex flex-row justify-content-between">
          <div className="header-title d-flex flex-row">
            <div onClick={() => navigate(-1)} className="cursor-style mt-3">
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="icon-32"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                style={{ color: "black" }}
              >
                <path
                  d="M4.25 12.2744L19.25 12.2744"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <h2 className="mt-2 ms-2">{name}</h2>
          </div>
          <Button className="mb-2" onClick={handleShow}>
            + Add a New Sub Category
          </Button>
        </div>
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
                      <th>Name</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subCategory.map((item, index) => (
                      <tr key={index}>
                        <td onClick={() => window.location.reload(false)}>
                          <Link
                            to={`/womeyn/category/${item.id}`}
                            style={{ color: "black" }}
                          >
                            {item.name}
                          </Link>
                        </td>
                        <td>{item.description}</td>
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
          <Modal.Title>Add Sub Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="categoryName"
                type="text"
                className={true ? "" : "is-valid"}
                id="categoryName"
                value={categoryName}
                defaultValue=""
                onChange={handleChanges}
                required
                style={{ color: "black" }}
              />
              <div>
                {error && categoryName.length === 0 ? (
                  <div className="text-danger"> Name is required</div>
                ) : (
                  ""
                )}
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="categoryDescription"
                type="text"
                className={true ? "" : "is-valid"}
                id="categoryDescription"
                as="textarea"
                rows={5}
                value={categoryDescription}
                defaultValue=""
                onChange={handleChanges}
                required
                style={{ color: "black" }}
              />

              <div>
                {error && categoryDescription.length === 0 ? (
                  <div className="text-danger">Description is required</div>
                ) : (
                  ""
                )}
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
});

serviceCategoryList.displayName = "serviceCategoryList";
export default serviceCategoryList;
