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
          <Col sm="12" style={{ width: 330 }}>
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
          <h3>Set Schedule</h3>
          <div className="border rounded border-secondary">
            <div className="p-2">
              <p className="text-dark">
                Select a duration for your coupon between 1-95 days
              </p>
              <Form>
                <Row>
                  <Col md="2" className="mb-3">
                    <Form.Label md="6" htmlFor="validationDefault01">
                      Start Date
                    </Form.Label>
                    <Form.Group className="input-group">
                      <span
                        className="input-group-text"
                        id="basic-addon1"
                      ></span>
                      <Form.Control
                        type="text"
                        id="validationCustomUsername"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md="2" className="mb-3">
                    <Form.Label htmlFor="validationDefault02">
                      End Date
                    </Form.Label>
                    <Form.Group className="input-group">
                      <span
                        className="input-group-text"
                        id="basic-addon1"
                      ></span>
                      <Form.Control
                        type="text"
                        id="validationCustomUsername"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <div
                  className="border rounded border-secondary background"
                  style={{ width: "60%" }}
                >
                  <div className="p-3">
                    <p className="text-dark mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
          <h3>Set Discount</h3>
          <div className="border rounded border-secondary">
            <div className="p-2">
              <p className="text-dark">
                Please enter the amount that you want to apply as the product
                which you ordered to your coupon
              </p>
              <Form>
                <Form.Group>
                  <Form.Check className="d-block m-5">
                    <Form.Check.Input
                      className="me-2"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <Form.Check.Label htmlFor="flexRadioDefault1 text-dark">
                      Percentage Off
                    </Form.Check.Label>
                  </Form.Check>
                  <Form.Check className="d-block m-5">
                    <Form.Check.Input
                      className="me-2"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      defaultChecked
                    />
                    <Form.Check.Label htmlFor="flexRadioDefault2 text-dark">
                      Money Off
                    </Form.Check.Label>
                  </Form.Check>
                </Form.Group>
                <Row>
                  <Col md="2" className="mb-3">
                    <Form.Label md="6" htmlFor="validationDefault01">
                      G-Discount
                    </Form.Label>
                    <Form.Group className="input-group">
                      <span
                        className="input-group-text"
                        id="basic-addon1"
                      ></span>
                      <Form.Control
                        type="text"
                        id="validationCustomUsername"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        required
                      />
                    </Form.Group>
                    <span>Maximum discount is $100</span>
                  </Col>
                </Row>
                {/* <div>
                <h6>End Date</h6>
              </div> */}
              </Form>
            </div>
          </div>
        </div>
        <div className="content-margin">
          <h3>Set Budget</h3>
          <div className="border rounded border-secondary">
            <div className="p-2">
              <p className="text-dark">
                Select a duration for your coupon between 1-95 days
              </p>
              <ul className="text-dark">
                <li>Select a duration for your coupon between 1-95 days </li>
                <li>Select a duration for your coupon between 1-95 days</li>
              </ul>

              <div
                className="border rounded border-secondary background mb-3"
                style={{ width: "60%" }}
              >
                <div className="p-3">
                  <p className="text-dark mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
              <Form>
                <Row>
                  <Col md="2" className="mb-3">
                    <Form.Group className="input-group">
                      <span
                        className="input-group-text"
                        id="basic-addon1"
                      ></span>
                      <Form.Control
                        type="text"
                        id="validationCustomUsername"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        required
                      />
                    </Form.Group>
                    <span>Maximum discount is $100</span>
                  </Col>
                </Row>

                {/* <div>
                <h6>End Date</h6>
              </div> */}
              </Form>
            </div>
          </div>
        </div>
        <div className="content-margin">
          <h3>Coupon Title</h3>
          <div className="border rounded border-secondary">
            <div className="p-2">
              <p className="text-dark">
                Select a duration for your coupon between 1-95 days
              </p>
              <Form>
                <Row>
                  <Col md="4" className="mb-3">
                    <Form.Label md="6" htmlFor="validationDefault01">
                      Coupon Title
                    </Form.Label>
                    <Form.Group className="input-group">
                      <span
                        className="input-group-text"
                        id="basic-addon1"
                      ></span>
                      <Form.Control
                        type="text"
                        id="validationCustomUsername"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        required
                      />
                    </Form.Group>
                    <span>Maximum 30 characters allowed</span>
                  </Col>
                </Row>

                {/* <div>
                <h6>End Date</h6>
              </div> */}
              </Form>
            </div>
          </div>
        </div>
        <div className="content-margin">
          <h3>Targeting</h3>
          <p className="text-dark mb-3">
            Select a duration for your coupon between 1-95 days
          </p>
          <p className="text-dark">
            Select a duration for your coupon ---- YES/NO
          </p>
          <Form className="mb-5">
            <Row>
              <Col md="2">
                <Form.Group className="form-group">
                  <select className="form-select mb-3 shadow-none">
                    <option defaultValue className="text-dark">
                      Sellers One
                    </option>
                    {/* <option value="1">Seller One</option> */}
                    <option value="2">Seller Two</option>
                    <option value="3">Seller Three</option>
                  </select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md="2">
                <Form.Group className="form-group">
                  <Form.Label> Products/Services</Form.Label>
                  <select className="form-select mb-3 shadow-none">
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
          <div className="mb-5">
            <Button>Continue</Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

export default CouponCreation;
