import { Fragment, memo, useEffect, useState } from "react";
import { Button, Col, Form, Nav, Row, Tab, Table } from "react-bootstrap";
import ProductImg from "../../../assets/product_logo.png";

const Banner = memo((props) => {
  const [toggleState, setToggleState] = useState(1);

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
          <div style={{ border: "1px solid #E95A5A" }}>
            <div
              style={{
                display: "flex",
                width: "55%",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  marginBottom: "0px",
                  padding: "1.5%",
                  backgroundColor: "#E95A5A",
                  color: "white",
                }}
              >
                Top Products
              </p>
              <p style={{ marginBottom: "0px", padding: "1.5%" }}>
                Top Services
              </p>
              <p style={{ marginBottom: "0px", padding: "1.5%" }}>
                Top Categories
              </p>
              <p style={{ marginBottom: "0px", padding: "1.5%" }}>
                Top Womenprenuers
              </p>
            </div>
          </div>
        </div>
        <Row>
          <Col lg="4" md="2">
            <div
              style={{
                border: "1px solid #E95A5A",
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
                  borderTop: "1px solid #E95A5A",
                }}
              >
                <button
                  style={{
                    backgroundColor: "white",
                    border: "1px solid #E95A5A",
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
                      backgroundColor: "rgba(233, 90, 90, 0.2)",
                    }}
                  />
                </Form.Check>
              </div>
            </div>
          </Col>
          <Col lg="4" md="2">
            <div
              style={{
                border: "1px solid #E95A5A",
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
                  borderTop: "1px solid #E95A5A",
                }}
              >
                <button
                  style={{
                    backgroundColor: "white",
                    border: "1px solid #E95A5A",
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
                      backgroundColor: "rgba(233, 90, 90, 0.2)",
                    }}
                  />
                </Form.Check>
              </div>
            </div>
          </Col>
          <Col lg="4" md="2">
            <div
              style={{
                border: "1px solid #E95A5A",
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
                  borderTop: "1px solid #E95A5A",
                }}
              >
                <button
                  style={{
                    backgroundColor: "white",
                    border: "1px solid #E95A5A",
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
                      backgroundColor: "rgba(233, 90, 90, 0.2)",
                    }}
                  />
                </Form.Check>
              </div>
            </div>
          </Col>
          <Col lg="4" md="2">
            <div
              style={{
                border: "1px solid #E95A5A",
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
                  borderTop: "1px solid #E95A5A",
                }}
              >
                <button
                  style={{
                    backgroundColor: "white",
                    border: "1px solid #E95A5A",
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
                      backgroundColor: "rgba(233, 90, 90, 0.2)",
                    }}
                  />
                </Form.Check>
              </div>
            </div>
          </Col>
          <Col lg="4" md="2">
            <div
              style={{
                border: "1px solid #E95A5A",
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
                  borderTop: "1px solid #E95A5A",
                }}
              >
                <button
                  style={{
                    backgroundColor: "white",
                    border: "1px solid #E95A5A",
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
                      backgroundColor: "rgba(233, 90, 90, 0.2)",
                    }}
                  />
                </Form.Check>
              </div>
            </div>
          </Col>
          <Col lg="4" md="2">
            <div
              style={{
                border: "1px solid #E95A5A",
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
                  borderTop: "1px solid #E95A5A",
                }}
              >
                <button
                  style={{
                    backgroundColor: "white",
                    border: "1px solid #E95A5A",
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
                      backgroundColor: "rgba(233, 90, 90, 0.2)",
                    }}
                  />
                </Form.Check>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
});

export default Banner;
