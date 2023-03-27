import { Fragment, memo, useEffect, useState } from "react";
import { Button, Col, Form, Nav, Row, Tab, Table } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";
import ProductImg from "../../../assets/product_logo.png";
import {
  getProductCategory,
  getServiceCategory,
} from "../../../services/category/categoryServices";
import { ProductListServices } from "../../../services/list/listServices";

// const Options = [
//   { value: "Item One", label: "Item One" },
//   { value: "Item Two", label: "Item Two" },
//   { value: "Item Three", label: "Item Three" },
//   { value: "Item Four", label: "Item Four" },
//   { value: "Item Five", label: "Item Five" },
// ];

const TopCategories = memo((props) => {
  console.log("first", props.props);
  const [show, setShow] = useState(false);
  const [options, setOptions] = useState([{ value: "", label: "" }]);
  const [addStatus, setAddStatus] = useState(false);

  useEffect(() => {
    setAddStatus(false);
    if (props.props === "Top Categories") {
      category();
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
          };
        });
        setOptions(category);
      })
      .catch((err) => console.log(err));
  };

  const handleShow = (id) => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Fragment className="mb-7">
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
        }}
      >
        <div>
          {props.props === "Top Categories" ? (
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
                  + Select New Category
                </Button>
              </div>
              <Row>
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
                        Product 1
                      </p>
                      <img src={ProductImg} style={{ width: "20%" }} />
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
                        Product 1
                      </p>
                      <img src={ProductImg} style={{ width: "20%" }} />
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
                        Product 1
                      </p>
                      <img src={ProductImg} style={{ width: "20%" }} />
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
                        Product 1
                      </p>
                      <img src={ProductImg} style={{ width: "20%" }} />
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
                        Product 1
                      </p>
                      <img src={ProductImg} style={{ width: "20%" }} />
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
                        Product 1
                      </p>
                      <img src={ProductImg} style={{ width: "20%" }} />
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
            <Modal.Title style={{ color: "red" }}>Select Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="field-container">
              <Form.Label htmlFor="validationServer01">
                <h6>Select One of the Categories:</h6>
              </Form.Label>
              {/* <Form.Control style={{ color: "black" }}> */}
              <Select
                // value={selectedOption.value}
                // onChange={handleChange}
                options={options}
              />
              {/* </Form.Control> */}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Fragment>
  );
});

export default TopCategories;
