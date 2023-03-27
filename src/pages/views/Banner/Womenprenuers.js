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
import { getRecommendedSellers } from "../../../services/seller/sellerServices";
import {
  addRecommendation,
  getRecommendation,
} from "../../../services/topPicks/topPicks";
import "./styles.scss";

// const Options = [
//   { value: "Item One", label: "Item One" },
//   { value: "Item Two", label: "Item Two" },
//   { value: "Item Three", label: "Item Three" },
//   { value: "Item Four", label: "Item Four" },
//   { value: "Item Five", label: "Item Five" },
// ];

const WOmenprenuers = memo((props) => {
  const [show, setShow] = useState(false);
  const [options, setOptions] = useState([{ value: "", label: "" }]);
  const [womenprenuers, setWomenprenuers] = useState();
  const [loading, setLoading] = useState(false);
  const [addStatus, setAddStatus] = useState(false);

  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption.id);
    console.log("selectedOption", selectedOption.id);
  };

  useEffect(() => {
    setAddStatus(false);
    if (props.props === "Top Womenprenuers") {
      category();
      getWomenprenuers();
    }
  }, [addStatus]);

  const category = () => {
    getRecommendedSellers()
      .then((res) => {
        let category = res.data.results.map((e) => {
          return {
            value: `${e.firstName} ${e.lastName}`,
            label: `${e.firstName} ${e.lastName}`,
            id: e.id,
          };
        });
        setOptions(category);
      })
      .catch((err) => console.log(err));
  };

  const getWomenprenuers = () => {
    getRecommendation(5)
      .then((res) => {
        let result = res.data.map((e) => {
          return e?.results;
        });
        setWomenprenuers(result);
      })
      .catch((err) => console.log(err));
  };

  const selectWomenprenuers = () => {
    setLoading(true);
    let data = {
      itemId: selectedOption,
      typeId: 5,
    };
    console.log("data", data);
    addRecommendation(data)
      .then((res) => {
        setAddStatus(true);
        console.log("response", res);
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

  if (!womenprenuers) {
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
          {props.props === "Top Womenprenuers" ? (
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
                  Top Womenprenuers
                </p>
                <Button onClick={() => handleShow()}>
                  + Select New Womenprenuer
                </Button>
              </div>

              <Row>
                {womenprenuers.map((item) => {
                  return item.map((data) => {
                    return (
                      <>
                        <Col lg="4" md="2" className="womenprenuers-tabsize">
                          <div className="womenprenuerslist-full-container">
                            <div className="womenprenuerslist-center-container">
                              <div className="womenprenuersheaderlist">
                                <p className="womenprenuers-title-text">
                                  {data.productName}
                                </p>
                                <img
                                  src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${data.productThumbImage}`}
                                  alt="Img"
                                  className="womenprenuers-product-img"
                                />
                              </div>
                              <p className="womenprenuerscode-desc">
                                Best selling products in clothing & fashion
                              </p>
                            </div>
                            <div className="womenprenuers-btm-container">
                              <button className="womenprenuers-edit-btn">
                                Edit
                              </button>
                              <Form.Check className="form-switch">
                                <Form.Check.Input
                                  type="checkbox"
                                  className="womenprenuers-switch-btn"
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
          // centered
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "red" }}>
              Select Womenprenuer
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="field-container">
              <Form.Label htmlFor="validationServer01">
                <h6>Select One of the Womenprenuers:</h6>
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
            <Button variant="primary" onClick={selectWomenprenuers}>
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

export default WOmenprenuers;
