import { useState, useEffect, memo, Fragment } from "react";
import { Table, Nav, Tab, Button } from "react-bootstrap";
import Card from "../../../components/bootstrap/card";
import { useSelector } from "react-redux";
import * as SettingSelector from "../../../store/setting/selectors";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

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
    <Fragment>
      <div className="header">
        <div className="d-flex flex-row">
          <p className="text-dark">coupons</p>
          <p className="text-dark ml-1">Create a new coupon</p>
        </div>
        {/* <Row>
          <Col sm="12">
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
        </Row> */}
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
      {/* <div class=" mt-0 p-1 bg-secondary w-100"></div> */}
    </Fragment>
  );
});

export default CouponCreation;
