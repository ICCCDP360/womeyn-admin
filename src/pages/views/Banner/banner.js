import { Fragment, memo, useEffect, useState } from "react";
import { Button, Col, Form, Nav, Row, Tab, Table } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";
import ProductImg from "../../../assets/product_logo.png";
import BannerContent from "./bannerContent";
import "./styles.scss";
import TopCategories from "./TopCategories";
import {
  default as TopProductCategories,
  default as TopProductCategory,
} from "./TopProductCategory";
import TopServiceCategory from "./TopServiceCategory";
import TopServices from "./TopServices";
import WOmenprenuers from "./Womenprenuers";

const Banner = memo((props) => {
  const [options, setOptions] = useState("Top Products");

  return (
    <Fragment className="mb-7">
      <div className="recommendation-header-container">
        <div>
          <p className="recommendation-text">Recommendations</p>
          <div className="recommendation-cardborder">
            <div className="recommendation-cardinnerside">
              <button
                className={
                  options == "Top Products"
                    ? "recommendation-header-active"
                    : "recommendation-header-inactive"
                }
                onClick={() => {
                  setOptions("Top Products");
                }}
              >
                Products
              </button>
              <button
                className={
                  options == "Top Services"
                    ? "recommendation-header-active"
                    : "recommendation-header-inactive"
                }
                onClick={() => {
                  setOptions("Top Services");
                }}
              >
                Services
              </button>
              <button
                className={
                  options == "Top Product Category"
                    ? "recommendation-header-active"
                    : "recommendation-header-inactive"
                }
                onClick={() => {
                  setOptions("Top Product Category");
                }}
              >
                Product Category
              </button>
              <button
                className={
                  options == "Top Service Category"
                    ? "recommendation-header-active"
                    : "recommendation-header-inactive"
                }
                onClick={() => {
                  setOptions("Top Service Category");
                }}
              >
                Service Category
              </button>
              <button
                className={
                  options == "Top Womenprenuers"
                    ? "recommendation-header-active"
                    : "recommendation-header-inactive"
                }
                onClick={() => {
                  setOptions("Top Womenprenuers");
                }}
              >
                Womenprenuers
              </button>
            </div>
          </div>
        </div>
        <div>
          {options === "Top Products" ? (
            <BannerContent props={options} />
          ) : options === "Top Services" ? (
            <TopServices props={options} />
          ) : options === "Top Product Category" ? (
            <TopProductCategory props={options} />
          ) : options === "Top Service Category" ? (
            <TopServiceCategory props={options} />
          ) : options === "Top Womenprenuers" ? (
            <WOmenprenuers props={options} />
          ) : null}
        </div>
      </div>
    </Fragment>
  );
});

export default Banner;
