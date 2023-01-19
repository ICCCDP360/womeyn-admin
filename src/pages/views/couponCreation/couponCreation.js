import { useState, useEffect, memo, Fragment } from "react";
import { Table, Nav, Tab, Button, Form } from "react-bootstrap";
import Card from "../../../components/bootstrap/card";
import { useSelector } from "react-redux";
import * as SettingSelector from "../../../store/setting/selectors";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

import "./styles.scss";

//Images
//img
import img1 from "../../../assets/images/earth_souls.png";
import img2 from "../../../assets/images/earth_souls.png";
import img3 from "../../../assets/images/earth_souls.png";
import img4 from "../../../assets/images/earth_souls.png";
import img5 from "../../../assets/images/earth_souls.png";
import img6 from "../../../assets/images/earth_souls.png";
import img7 from "../../../assets/images/earth_souls.png";
import img8 from "../../../assets/images/earth_souls.png";
import img9 from "../../../assets/images/earth_souls.png";
import Loader from "../../../components/Loader";
import "./styles.scss";

let description =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

const CouponCreation = memo((props) => {
  return (
    <Fragment className="mb-7">
      <div className="header">
        <div className="d-flex flex-row gap-3">
          <p className="text-primary">Coupons</p>
          <p className="text-dark ml-1">Create a new coupon</p>
        </div>
        <Row>
          {/* <Col sm="12" style={{ width: 330 }}>

            <ul
              className="text-center iq-product-tracker mb-0"
              id="progressbar"
            >
              <li
                className="active iq-tracker-position-0"
                id="iq-tracker-position-1"
              >
                Products
              </li>
              <li className="iq-tracker-position-0" id="iq-tracker-position-2">
                Details
              </li>
              <li className="iq-tracker-position-0" id="iq-tracker-position-3">
                Review
              </li>
            </ul>
          </Col> */}
          <Col sm="12" style={{ width: 330 }}>
            <ul
              className="text-center iq-product-tracker mb-0 py-4"
              id="progressbar"
            >
              <li
                className="active iq-tracker-position-0"
                id="iq-tracker-position-1"
              >
                Products
              </li>
              <li className="iq-tracker-position-0" id="iq-tracker-position-2">
                Details
              </li>
              <li className="iq-tracker-position-0" id="iq-tracker-position-3">
                Review
              </li>
            </ul>
          </Col>
        </Row>
        <div>
          <Button variant="secondary">Cancel</Button>{" "}
          <Button
            variant="primary"
            //   onClick={handleSubmit}
            //   onClick={() => {
            //
            //   }}
            className="margin-left-button "
          >
            Continue
          </Button>{" "}
        </div>
      </div>
      <div>
        <hr className="hr-horizontal" />
      </div>
      <div>
        <div>
          <h3 className="ms-5">Set Schedule</h3>
          <div style={{ border: "1px solid #D1D6E3", borderRadius: "5px" }}>
            <div className="p-3 ps-5">
              <p className="text-dark">
                Select a duration for your coupon between 1 - 90 days
              </p>
              <Form>
                <Row>
                  <Col md="3" className="mb-3 mt-2">
                    <Form.Label md="6" htmlFor="validationDefault01">
                      Start Date
                    </Form.Label>
                    <Form.Group
                      className="input-group"
                      style={{
                        border: "1px solid #828793",
                        borderRadius: "5px",
                      }}
                    >
                      <span
                        className="input-group-text"
                        id="basic-addon1"
                      ></span>
                      <Form.Control
                        style={{
                          borderLeft: "1px solid #828793",
                          textTransform: "uppercase",
                        }}
                        type="date"
                        id="validationCustomUsername"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md="3" className="mb-3 mt-2">
                    <Form.Label htmlFor="validationDefault02">
                      End Date
                    </Form.Label>
                    <Form.Group
                      className="input-group"
                      style={{
                        border: "1px solid #828793",
                        borderRadius: "5px",
                      }}
                    >
                      <span
                        className="input-group-text"
                        id="basic-addon1"
                      ></span>
                      <Form.Control
                        style={{
                          borderLeft: "1px solid #828793",
                          textTransform: "uppercase",
                        }}
                        type="date"
                        id="validationCustomUsername"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <div
                  className="background"
                  style={{
                    width: "60%",
                    border: "1px solid #D1D6E3",
                    borderRadius: "5px",
                  }}
                >
                  <div className="p-3">
                    <p className="text-dark mb-0">
                      When you selected today as the start date, it will take up
                      to 6 hours after coupon submission for your coupon to be
                      visible to costomers.
                    </p>
                  </div>
                </div>
                {/* <div>
                <h6>End Date</h6>
              </div> */}
              </Form>
            </div>
          </div>
        </div>
        <div className="content-margin">
          <h3 className="ms-5">Set Discount</h3>
          <div style={{ border: "1px solid #D1D6E3", borderRadius: "5px" }}>
            <div className="p-3 ps-3">
              <p className="text-dark p-3 pt-1" style={{ width: "60%" }}>
                Please enter the discount amount that you want to apply to the
                products which you added to your coupon in perviouse step.
              </p>
              <Form>
                <Form.Group>
                  <Form.Check className="d-block ms-3">
                    <Form.Check.Input
                      className="me-2"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      defaultChecked
                    />
                    <Form.Check.Label htmlFor="flexRadioDefault1 text-dark">
                      <p className="ms-5 mb-0">Percentage Off</p>
                    </Form.Check.Label>
                  </Form.Check>
                  <Form.Check className="d-block ms-3 mt-3">
                    <Form.Check.Input
                      className="me-2"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                    <Form.Check.Label htmlFor="flexRadioDefault2 text-dark">
                      <p className="ms-5 ">Money Off</p>
                    </Form.Check.Label>
                  </Form.Check>
                </Form.Group>
                <Row>
                  <Col md="3" className="mb-1">
                    <Form.Label md="6" htmlFor="validationDefault01">
                      <p className="ms-3 mb-0">Discount</p>
                    </Form.Label>
                    <Form.Group
                      className="input-group w-50 ms-3"
                      style={{
                        border: "1px solid #828793",
                        borderRadius: "5px",
                      }}
                    >
                      <span
                        className="input-group-text"
                        id="basic-addon1"
                      ></span>
                      <Form.Control
                        style={{ borderLeft: "1px solid #828793" }}
                        type="text"
                        id="validationCustomUsername"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <p
                    style={{ color: "black", fontSize: "11px" }}
                    className="ms-3 mb-0"
                  >
                    Minimum 1% and Maximum 80%
                  </p>
                </Row>
                {/* <div>
                <h6>End Date</h6>
              </div> */}
              </Form>
            </div>
          </div>
        </div>
        <div className="content-margin">
          <h3 className="ms-5">Set Budget</h3>
          <div style={{ border: "1px solid #D1D6E3", borderRadius: "5px" }}>
            <div className="p-3 ps-5">
              <p className="text-dark mb-0">
                Your budget will be shared among the following 2 cost;
              </p>
              <ul className="text-dark">
                <li>INR equivaletd of the discount that you are offering</li>
                <li>Redemption fees (0.00 for each redemption)</li>
              </ul>

              <div
                className="background mb-3"
                style={{
                  width: "60%",
                  border: "1px solid #D1D6E3",
                  borderRadius: "5px",
                }}
              >
                <div className="p-3">
                  <p className="text-dark mb-0">
                    Budget are not hard limits. coupon budgets are for planning
                    purpose only and budget overshooting should be expected.
                    <span style={{ color: "blue", fontSize: "10px" }}>
                      Learn more
                    </span>
                  </p>
                  <p className="text-dark mb-0">
                    Your coupon will be deactivated when ity reaches 80%
                    utilisation
                    <p
                      style={{
                        color: "blue",
                        fontSize: "10px",
                        marginBottom: "0px",
                      }}
                    >
                      How do budgets work?
                    </p>
                  </p>
                </div>
              </div>
              <Form>
                <Row>
                  <Col md="3" className="mb-3">
                    <Form.Group
                      className="input-group"
                      style={{
                        border: "1px solid #828793",
                        borderRadius: "5px",
                      }}
                    >
                      <span
                        className="input-group-text"
                        id="basic-addon1"
                      ></span>
                      <Form.Control
                        style={{ borderLeft: "1px solid #828793" }}
                        type="text"
                        id="validationCustomUsername"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <span></span>
                  <p
                    style={{ color: "black", fontSize: "11px" }}
                    className=" mb-0"
                  >
                    Minimum $ 50 and Maximum $100000
                  </p>
                </Row>

                {/* <div>
                <h6>End Date</h6>
              </div> */}
              </Form>
            </div>
          </div>
        </div>
        <div className="content-margin">
          <h3 className="ms-5">Coupon Title</h3>
          <div style={{ border: "1px solid #D1D6E3", borderRadius: "5px" }}>
            <div className="p-3 ps-5">
              <p className="text-dark w-50">
                For a more affective coupon title, please choose a definition
                that accurately describes the product group that you added to
                your coupon. For example ‘Save 15% on hand sanitisers’
              </p>
              <Form>
                <Row>
                  <Col md="3" className="mb-1">
                    <Form.Label md="6" htmlFor="validationDefault01">
                      Coupon Title
                    </Form.Label>
                    <Form.Group
                      className="input-group"
                      style={{
                        border: "1px solid #828793",
                        borderRadius: "5px",
                      }}
                    >
                      <span
                        className="input-group-text"
                        id="basic-addon1"
                      ></span>
                      <Form.Control
                        style={{ borderLeft: "1px solid #828793" }}
                        type="text"
                        id="validationCustomUsername"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <p
                    style={{ color: "black", fontSize: "11px" }}
                    className=" mb-0"
                  >
                    Maximum 100 characters
                  </p>
                  <p
                    style={{ color: "blue", fontSize: "11px" }}
                    className=" mb-0"
                  >
                    Title guidlines
                  </p>
                </Row>

                {/* <div>
                <h6>End Date</h6>
              </div> */}
              </Form>
            </div>
          </div>
        </div>
        <div className="content-margin ms-5">
          <h3 className="mb-4">Targeting</h3>
          <p className="text-dark mb-3">
            You may choose to limit the Audience of your coupon to one of the
            customer segment below
          </p>
          <p className="text-dark">Is this a sitewide coupon - - - YES/ NO</p>
          <Form className="mb-5">
            <Row>
              <Col md="3">
                <Form.Group className="form-group">
                  <select
                    className="form-select mb-3 shadow-none"
                    style={{ border: "1px solid #828793", borderRadius: "5px" }}
                  >
                    <option defaultValue className="text-dark">
                      Sellers
                    </option>
                    {/* <option value="1">Seller One</option> */}
                    <option value="2">Seller Two</option>
                    <option value="3">Seller Three</option>
                  </select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <p className="text-dark">Please choose / product service</p>
              <Col md="3">
                <Form.Group className="form-group">
                  <select
                    className="form-select mb-3 shadow-none"
                    style={{ border: "1px solid #828793", borderRadius: "5px" }}
                  >
                    <option defaultValue className="text-dark">
                      Product
                    </option>
                    {/* <option value="1">Product</option> */}
                    <option value="2">Services</option>
                  </select>
                </Form.Group>
              </Col>
            </Row>
          </Form>
          <div className="mb-5 w-75">
            <Button className="w-25">Continue</Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

export default CouponCreation;
