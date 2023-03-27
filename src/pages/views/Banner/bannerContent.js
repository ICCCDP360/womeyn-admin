import { Fragment, memo, useEffect, useState } from "react";
import { Button, Col, Form, Nav, Row, Tab, Table } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";
import ProductImg from "../../../assets/product_logo.png";
import Loader from "../../../components/Loader";
import { getServiceCategory } from "../../../services/category/categoryServices";
import { ProductListServices } from "../../../services/list/listServices";
import {
  addProduct,
  addRecommendation,
  getRecommendation,
  getTopProducts,
} from "../../../services/topPicks/topPicks";
import "./styles.scss";

const BannerContent = memo((props) => {
  const [show, setShow] = useState(false);
  const [options, setOptions] = useState([{ value: "", label: "", id: "" }]);
  const [topProducts, setTopProducts] = useState();
  const [loading, setLoading] = useState(false);
  const [addStatus, setAddStatus] = useState(false);

  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption.id);
    console.log("selectedOption", selectedOption.id);
  };

  useEffect(() => {
    setAddStatus(false);
    getProducts();
    products();
  }, [addStatus]);

  const products = () => {
    ProductListServices()
      .then((res) => {
        let product = res.data.results.map((e) => {
          return {
            value: e.productName,
            label: e.productName,
            id: e.id,
          };
        });
        setOptions(product);
      })
      .catch((err) => console.log(err));
  };

  const getProducts = () => {
    getRecommendation(1)
      .then((res) => {
        let result = res.data.map((e) => {
          return e?.results;
        });
        setTopProducts(result);
      })
      .catch((err) => console.log(err));
  };

  const selectProduct = () => {
    setLoading(true);
    let data = {
      itemId: selectedOption,
      typeId: 1,
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

  if (!topProducts) {
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
          {props.props === "Top Products" ? (
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
                  Top Products
                </p>
                <Button onClick={() => handleShow()}>
                  + Select New Product
                </Button>
              </div>

              <Row>
                {topProducts.map((item) => {
                  return item.map((data) => {
                    return (
                      <>
                        <Col lg="4" md="2" className="recommendation-tabsize">
                          <div className="recommendationlist-full-container">
                            <div className="recommendationlist-center-container">
                              <div className="recommendationheaderlist">
                                <p className="recommendation-title-text">
                                  {data.productName}
                                </p>
                                <img
                                  src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${data.productThumbImage}`}
                                  alt="Product Img"
                                  className="recommendation-product-img"
                                />
                              </div>
                              <p className="recommendationcode-desc">
                                Best selling products in clothing & fashion
                              </p>
                            </div>
                            <div className="recommendation-btm-container">
                              <button className="recommendation-edit-btn">
                                Edit
                              </button>
                              <Form.Check className="form-switch">
                                <Form.Check.Input
                                  type="checkbox"
                                  className="recommendation-switch-btn"
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
          size="lg"
          // centered
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "red" }}>Select Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="field-container">
              <Form.Label htmlFor="validationServer01">
                <h6>Select One of the Products:</h6>
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
            <Button variant="primary" onClick={selectProduct}>
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

export default BannerContent;
