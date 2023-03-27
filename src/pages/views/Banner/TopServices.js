import { Fragment, memo, useEffect, useState } from "react";
import { Button, Col, Form, Nav, Row, Tab, Table } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";
import ProductImg from "../../../assets/product_logo.png";
import Loader from "../../../components/Loader";
import { getServiceCategory } from "../../../services/category/categoryServices";
import {
  ProductListServices,
  ServicesList,
} from "../../../services/list/listServices";
import {
  addRecommendation,
  getRecommendation,
} from "../../../services/topPicks/topPicks";

// const Options = [
//   { value: "Item One", label: "Item One" },
//   { value: "Item Two", label: "Item Two" },
//   { value: "Item Three", label: "Item Three" },
//   { value: "Item Four", label: "Item Four" },
//   { value: "Item Five", label: "Item Five" },
// ];

const TopServices = memo((props) => {
  console.log("first", props.props);
  const [show, setShow] = useState(false);
  const [options, setOptions] = useState([{ value: "", label: "", id: "" }]);
  const [topServices, setTopServices] = useState();
  const [loading, setLoading] = useState(false);
  const [addStatus, setAddStatus] = useState(false);

  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption.id);
    console.log("selectedOption", selectedOption.id);
  };

  useEffect(() => {
    setAddStatus(false);
    if (props.props === "Top Services") {
      services();
      getServices();
    }
  }, [addStatus]);

  const services = () => {
    ServicesList()
      .then((res) => {
        console.log("service", res.data.results);
        let service = res.data.results.map((e) => {
          return {
            value: e.serviceName,
            label: e.serviceName,
            id: e.id,
          };
        });
        setOptions(service);
      })
      .catch((err) => console.log(err));
  };

  const getServices = () => {
    getRecommendation(2)
      .then((res) => {
        let result = res.data.map((e) => {
          return e?.results;
        });
        setTopServices(result);
      })
      .catch((err) => console.log(err));
  };

  const selectServices = () => {
    console.log("id", selectedOption.id);
    setLoading(true);
    let data = {
      itemId: selectedOption,
      typeId: 2,
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

  if (!topServices) {
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
          {props.props === "Top Services" ? (
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
                  Top Services
                </p>
                <Button onClick={() => handleShow()}>
                  + Select New Service
                </Button>
              </div>
              <Row>
                {topServices.map((item) => {
                  return item.map((data) => {
                    return (
                      <>
                        <Col lg="4" md="2">
                          <div
                            style={{
                              border: "1px solid #C0C0C0",
                              borderRadius: "5px",
                              marginTop: "5%",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginLeft: "3%",
                              }}
                            >
                              <p
                                style={{
                                  marginTop: "5%",
                                  fontSize: "16px",
                                  fontWeight: "600",
                                  color: "#E95A5A",
                                }}
                              >
                                {data.productName}
                              </p>
                              <img
                                src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${data.productThumbImage}`}
                                alt="Service Img"
                                style={{ width: 80, height: 80 }}
                              />
                            </div>
                            <p
                              style={{
                                fontSize: "13px",
                                fontWeight: "400",
                                color: "black",
                                marginTop: "5%",
                                marginLeft: "3%",
                              }}
                            >
                              Best selling products in clothing & fashion
                            </p>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                padding: "3%",
                                borderTop: "1px solid #C0C0C0",
                              }}
                            >
                              <button
                                style={{
                                  backgroundColor: "white",
                                  border: "1px solid #C0C0C0",
                                  borderRadius: "5px",
                                  padding: "1%",
                                  paddingRight: "5%",
                                  paddingLeft: "5%",
                                }}
                              >
                                Edit
                              </button>
                              <Form.Check className="form-switch">
                                <Form.Check.Input
                                  type="checkbox"
                                  style={{
                                    height: "20px",
                                    width: "40px",
                                    // backgroundColor: "#C0C0C0",
                                  }}
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
            <Modal.Title style={{ color: "red" }}>Select Service</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="field-container">
              <Form.Label htmlFor="validationServer01">
                <h6>Select One of the Services:</h6>
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
            <Button variant="primary" onClick={selectServices}>
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

export default TopServices;
