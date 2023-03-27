import { Fragment, memo, useEffect, useState } from "react";
import { Button, Col, Form, Nav, Row, Tab, Table } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";
import ProductImg from "../../../assets/product_logo.png";
import Loader from "../../../components/Loader";
import {
  getProductCategory,
  getServiceCategory,
} from "../../../services/category/categoryServices";
import { ProductListServices } from "../../../services/list/listServices";
import {
  addRecommendation,
  getRecommendation,
} from "../../../services/topPicks/topPicks";
import "./styles.scss";

const TopProductCategory = memo((props) => {
  console.log("first", props.props);
  const [show, setShow] = useState(false);
  const [options, setOptions] = useState([{ value: "", label: "", id: "" }]);
  const [topProductCategory, setTopProductCategory] = useState();
  const [loading, setLoading] = useState(false);
  const [addStatus, setAddStatus] = useState(false);

  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption.id);
    console.log("selectedOption", selectedOption.id);
  };

  useEffect(() => {
    setAddStatus(false);
    if (props.props === "Top Product Category") {
      category();
      getCategory();
    }
  }, [addStatus]);

  const category = () => {
    getProductCategory()
      .then((res) => {
        console.log("service", res);
        let category = res.data.results.map((e) => {
          return {
            value: e.name,
            label: e.name,
            id: e.id,
          };
        });
        setOptions(category);
      })
      .catch((err) => console.log(err));
  };

  const getCategory = () => {
    getRecommendation(3)
      .then((res) => {
        let result = res.data.map((e) => {
          return e?.results;
        });
        setTopProductCategory(result);
      })
      .catch((err) => console.log(err));
  };

  const selectProductCategory = () => {
    console.log("CatId", selectedOption);
    setLoading(true);
    let data = {
      itemId: selectedOption,
      typeId: 3,
    };
    addRecommendation(data)
      .then((res) => {
        setAddStatus(true);
        setLoading(false);
        setShow(false);
        // window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleShow = (id) => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  if (!topProductCategory) {
    return <Loader />;
  }

  return (
    <Fragment className="mb-7">
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
        }}
      >
        <div>
          {props.props === "Top Product Category" ? (
            <div className="mt-5">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p
                  style={{
                    fontSize: "23px",
                    fontWeight: "500",
                    color: "black",
                  }}
                >
                  Top Categories
                </p>
                <Button onClick={() => handleShow()}>
                  + Select New Product Category
                </Button>
              </div>
              <Row>
                {topProductCategory.map((item) => {
                  return item.map((data) => {
                    return (
                      <>
                        <Col
                          lg="4"
                          md="2"
                          className="topproduct-categories-tabsize"
                        >
                          <div className="topproduct-categorieslist-full-container">
                            <div className="topproduct-categorieslist-center-container">
                              <div className="topproduct-categoriesheaderlist">
                                <p className="topproduct-categories-title-text">
                                  {data.productName}
                                </p>
                                <img
                                  src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${data.productThumbImage}`}
                                  alt="Product Img"
                                  className="topproduct-categories-product-img"
                                />
                              </div>
                              <p className="topproduct-categoriescode-desc">
                                Best selling products in clothing & fashion
                              </p>
                            </div>
                            <div className="topproduct-categories-btm-container">
                              <button className="topproduct-categories-edit-btn">
                                Edit
                              </button>
                              <Form.Check className="form-switch">
                                <Form.Check.Input
                                  type="checkbox"
                                  className="topproduct-categories-switch-btn"
                                />
                              </Form.Check>
                            </div>
                          </div>
                        </Col>
                      </>
                    );
                  });
                })}
              </Row>
            </div>
          ) : null}
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          //   centered
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "red" }}>Select Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="field-container">
              <Form.Label htmlFor="validationServer01">
                <h6>Select One of the Categories:</h6>
              </Form.Label>
              {/* <Form.Control style={{ color: "black" }}> */}
              <Select
                value={selectedOption.id}
                onChange={handleChange}
                options={options}
              />
              {/* </Form.Control> */}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={selectProductCategory}>
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
      </div>
    </Fragment>
  );
});

export default TopProductCategory;
