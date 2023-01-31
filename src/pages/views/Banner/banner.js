import { Fragment, memo, useEffect, useState } from "react";
import { Button, Col, Form, Nav, Row, Tab, Table } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";
import ProductImg from "../../../assets/product_logo.png";

const Options = [
  { value: "Item One", label: "Item One" },
  { value: "Item Two", label: "Item Two" },
  { value: "Item Three", label: "Item Three" },
  { value: "Item Four", label: "Item Four" },
  { value: "Item Five", label: "Item Five" },
];

const Banner = memo((props) => {
  const [options, setOptions] = useState("Top Products");
  const [toggleState, setToggleState] = useState(1);
  const [show, setShow] = useState(false);

  const handleShow = (id) => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <Fragment className="mb-7">
      <div
        style={{
          marginLeft: "5%",
          marginRight: "5%",
          marginTop: "2%",
          backgroundColor: "white",
          width: "90%",
          padding: "1%",
        }}
      >
        <div>
          <p style={{ fontSize: "23px", fontWeight: "500", color: "black" }}>
            Top Picks
          </p>
          <div style={{ border: "1px solid #C0C0C0" }}>
            <div
              style={{
                display: "flex",
                width: "55%",
                justifyContent: "space-between",
              }}
            >
              <button
                style={
                  options === "Top Products"
                    ? {
                        marginBottom: "0px",
                        padding: "1.5%",
                        backgroundColor: "#918F90",
                        color: "white",
                        border: "none",
                      }
                    : {
                        marginBottom: "0px",
                        padding: "1.5%",
                        border: "none",
                        backgroundColor: "white",
                        color: "#918F90",
                      }
                }
                onClick={() => {
                  setOptions("Top Products");
                }}
              >
                Top Products
              </button>
              <button
                style={
                  options === "Top Services"
                    ? {
                        marginBottom: "0px",
                        padding: "1.5%",
                        backgroundColor: "#918F90",
                        color: "white",
                        border: "none",
                      }
                    : {
                        marginBottom: "0px",
                        padding: "1.5%",
                        border: "none",
                        backgroundColor: "white",
                        color: "#918F90",
                      }
                }
                onClick={() => {
                  setOptions("Top Services");
                }}
              >
                Top Services
              </button>
              <button
                style={
                  options === "Top Categories"
                    ? {
                        marginBottom: "0px",
                        padding: "1.5%",
                        backgroundColor: "#918F90",
                        color: "white",
                        border: "none",
                      }
                    : {
                        marginBottom: "0px",
                        padding: "1.5%",
                        border: "none",
                        backgroundColor: "white",
                        color: "#918F90",
                      }
                }
                onClick={() => {
                  setOptions("Top Categories");
                }}
              >
                Top Categories
              </button>
              <button
                style={
                  options === "Top Womenprenuers"
                    ? {
                        marginBottom: "0px",
                        padding: "1.5%",
                        backgroundColor: "#918F90",
                        color: "white",
                        border: "none",
                      }
                    : {
                        marginBottom: "0px",
                        padding: "1.5%",
                        border: "none",
                        backgroundColor: "white",
                        color: "#918F90",
                      }
                }
                onClick={() => {
                  setOptions("Top Womenprenuers");
                }}
              >
                Top Womenprenuers
              </button>
            </div>
          </div>
        </div>
        <div>
          {options === "Top Products" ? (
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
                <Button onClick={() => handleShow()}>+ Add New Product</Button>
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
                        View
                      </button>
                      <Form.Check className="form-switch">
                        <Form.Check.Input
                          type="checkbox"
                          style={{
                            height: "20px",
                            width: "40px",
                            backgroundColor: "#C0C0C0",
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
                        View
                      </button>
                      <Form.Check className="form-switch">
                        <Form.Check.Input
                          type="checkbox"
                          style={{
                            height: "20px",
                            width: "40px",
                            backgroundColor: "#C0C0C0",
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
                        View
                      </button>
                      <Form.Check className="form-switch">
                        <Form.Check.Input
                          type="checkbox"
                          style={{
                            height: "20px",
                            width: "40px",
                            backgroundColor: "#C0C0C0",
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
                        View
                      </button>
                      <Form.Check className="form-switch">
                        <Form.Check.Input
                          type="checkbox"
                          style={{
                            height: "20px",
                            width: "40px",
                            backgroundColor: "#C0C0C0",
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
                        View
                      </button>
                      <Form.Check className="form-switch">
                        <Form.Check.Input
                          type="checkbox"
                          style={{
                            height: "20px",
                            width: "40px",
                            backgroundColor: "#C0C0C0",
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
                        View
                      </button>
                      <Form.Check className="form-switch">
                        <Form.Check.Input
                          type="checkbox"
                          style={{
                            height: "20px",
                            width: "40px",
                            backgroundColor: "#C0C0C0",
                          }}
                        />
                      </Form.Check>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          ) : options === "Top Services" ? (
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
                <Button onClick={() => handleShow()}>+ Add New Service</Button>
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
                        View
                      </button>
                      <Form.Check className="form-switch">
                        <Form.Check.Input
                          type="checkbox"
                          style={{
                            height: "20px",
                            width: "40px",
                            backgroundColor: "#C0C0C0",
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
                        View
                      </button>
                      <Form.Check className="form-switch">
                        <Form.Check.Input
                          type="checkbox"
                          style={{
                            height: "20px",
                            width: "40px",
                            backgroundColor: "#C0C0C0",
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
                        View
                      </button>
                      <Form.Check className="form-switch">
                        <Form.Check.Input
                          type="checkbox"
                          style={{
                            height: "20px",
                            width: "40px",
                            backgroundColor: "#C0C0C0",
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
                        View
                      </button>
                      <Form.Check className="form-switch">
                        <Form.Check.Input
                          type="checkbox"
                          style={{
                            height: "20px",
                            width: "40px",
                            backgroundColor: "#C0C0C0",
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
                        View
                      </button>
                      <Form.Check className="form-switch">
                        <Form.Check.Input
                          type="checkbox"
                          style={{
                            height: "20px",
                            width: "40px",
                            backgroundColor: "#C0C0C0",
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
                        View
                      </button>
                      <Form.Check className="form-switch">
                        <Form.Check.Input
                          type="checkbox"
                          style={{
                            height: "20px",
                            width: "40px",
                            backgroundColor: "#C0C0C0",
                          }}
                        />
                      </Form.Check>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          ) : options === "Top Categories" ? (
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
                <Button onClick={() => handleShow()}>+ Add New Category</Button>
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
                        View
                      </button>
                      <Form.Check className="form-switch">
                        <Form.Check.Input
                          type="checkbox"
                          style={{
                            height: "20px",
                            width: "40px",
                            backgroundColor: "#C0C0C0",
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
                        View
                      </button>
                      <Form.Check className="form-switch">
                        <Form.Check.Input
                          type="checkbox"
                          style={{
                            height: "20px",
                            width: "40px",
                            backgroundColor: "#C0C0C0",
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
                        View
                      </button>
                      <Form.Check className="form-switch">
                        <Form.Check.Input
                          type="checkbox"
                          style={{
                            height: "20px",
                            width: "40px",
                            backgroundColor: "#C0C0C0",
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
                        View
                      </button>
                      <Form.Check className="form-switch">
                        <Form.Check.Input
                          type="checkbox"
                          style={{
                            height: "20px",
                            width: "40px",
                            backgroundColor: "#C0C0C0",
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
                        View
                      </button>
                      <Form.Check className="form-switch">
                        <Form.Check.Input
                          type="checkbox"
                          style={{
                            height: "20px",
                            width: "40px",
                            backgroundColor: "#C0C0C0",
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
                        View
                      </button>
                      <Form.Check className="form-switch">
                        <Form.Check.Input
                          type="checkbox"
                          style={{
                            height: "20px",
                            width: "40px",
                            backgroundColor: "#C0C0C0",
                          }}
                        />
                      </Form.Check>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          ) : options === "Top Womenprenuers" ? (
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
                  + Add New Womenprenuer
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
                        View
                      </button>
                      <Form.Check className="form-switch">
                        <Form.Check.Input
                          type="checkbox"
                          style={{
                            height: "20px",
                            width: "40px",
                            backgroundColor: "#C0C0C0",
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
                        View
                      </button>
                      <Form.Check className="form-switch">
                        <Form.Check.Input
                          type="checkbox"
                          style={{
                            height: "20px",
                            width: "40px",
                            backgroundColor: "#C0C0C0",
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
                        View
                      </button>
                      <Form.Check className="form-switch">
                        <Form.Check.Input
                          type="checkbox"
                          style={{
                            height: "20px",
                            width: "40px",
                            backgroundColor: "#C0C0C0",
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
                        View
                      </button>
                      <Form.Check className="form-switch">
                        <Form.Check.Input
                          type="checkbox"
                          style={{
                            height: "20px",
                            width: "40px",
                            backgroundColor: "#C0C0C0",
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
                        View
                      </button>
                      <Form.Check className="form-switch">
                        <Form.Check.Input
                          type="checkbox"
                          style={{
                            height: "20px",
                            width: "40px",
                            backgroundColor: "#C0C0C0",
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
                        View
                      </button>
                      <Form.Check className="form-switch">
                        <Form.Check.Input
                          type="checkbox"
                          style={{
                            height: "20px",
                            width: "40px",
                            backgroundColor: "#C0C0C0",
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
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "red" }}>Select Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="field-container">
              <Form.Label htmlFor="validationServer01">
                <h6>Select One of the Items:</h6>
              </Form.Label>
              {/* <Form.Control style={{ color: "black" }}> */}
              <Select
                // value={selectedOption.value}
                // onChange={handleChange}
                options={Options}
              />
              {/* </Form.Control> */}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>

        {/* <Row>
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
                  View
                </button>
                <Form.Check className="form-switch">
                  <Form.Check.Input
                    type="checkbox"
                    style={{
                      height: "20px",
                      width: "40px",
                      backgroundColor: "#C0C0C0",
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
                  View
                </button>
                <Form.Check className="form-switch">
                  <Form.Check.Input
                    type="checkbox"
                    style={{
                      height: "20px",
                      width: "40px",
                      backgroundColor: "#C0C0C0",
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
                  View
                </button>
                <Form.Check className="form-switch">
                  <Form.Check.Input
                    type="checkbox"
                    style={{
                      height: "20px",
                      width: "40px",
                      backgroundColor: "#C0C0C0",
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
                  View
                </button>
                <Form.Check className="form-switch">
                  <Form.Check.Input
                    type="checkbox"
                    style={{
                      height: "20px",
                      width: "40px",
                      backgroundColor: "#C0C0C0",
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
                  View
                </button>
                <Form.Check className="form-switch">
                  <Form.Check.Input
                    type="checkbox"
                    style={{
                      height: "20px",
                      width: "40px",
                      backgroundColor: "#C0C0C0",
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
                  View
                </button>
                <Form.Check className="form-switch">
                  <Form.Check.Input
                    type="checkbox"
                    style={{
                      height: "20px",
                      width: "40px",
                      backgroundColor: "#C0C0C0",
                    }}
                  />
                </Form.Check>
              </div>
            </div>
          </Col>
        </Row> */}
      </div>
    </Fragment>
  );
});

export default Banner;
