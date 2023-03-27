import * as moment from "moment";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import paypal_logo from "../../../../assets/paypal.webp";
import Stripe from "../../../../assets/Stripe_Logo.png";
import {
  FilterOrder,
  OrdersList,
  OrdersListByStatus,
} from "../../../../services/list/listServices";
import "./styles/Allorders.scss";

const options = [
  { id: 0, value: "All", label: "All" },
  { id: 1, value: "New Order", label: "New Order" },
  { id: 2, value: "Confirmed", label: "Confirmed" },
  { id: 3, value: "In Progress", label: "In Progress" },
  { id: 4, value: "Cancelled by Buyer", label: "Cancelled by Buyer" },
  { id: 5, value: "Cancelled by Seller", label: "Cancelled by Seller" },
  { id: 6, value: "Delivered", label: "Delivered" },
];

function Allorder() {
  const history = useNavigate();

  const [selectedOption, setSelectedOption] = useState(0);
  const [value, onChange] = useState();
  const [value1, onChange1] = useState();

  const [orderLimit, setOrderLimit] = useState(10);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption.id);
    console.log("selectedOption", selectedOption.id);
  };

  const tableheaders = [
    {
      header: "Order Id",
    },
    {
      header: "Customer",
    },
    {
      header: "Order",
    },
    {
      header: "Payment Method",
    },
    {
      header: "Order Amount",
    },
    {
      header: "Order Status",
    },
  ];

  const [tables, setTables] = useState([]);

  useEffect(() => {
    if (selectedOption === 0) {
      getOrdersList();
    } else if (selectedOption === 1) {
      getOrdersListByStatus(selectedOption);
    } else if (selectedOption === 2) {
      getOrdersListByStatus(selectedOption);
    } else if (selectedOption === 3) {
      getOrdersListByStatus(selectedOption);
    } else if (selectedOption === 4) {
      getOrdersListByStatus(selectedOption);
    } else if (selectedOption === 5) {
      getOrdersListByStatus(selectedOption);
    } else if (selectedOption === 6) {
      getOrdersListByStatus(selectedOption);
    }
  }, [selectedOption]);

  const getOrdersList = () => {
    OrdersList()
      .then((res) => {
        console.log("data", res.data.results);
        setTables(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  const getOrdersListByStatus = (id) => {
    OrdersListByStatus(selectedOption)
      .then((res) => {
        console.log("data", res.data.results);
        setTables(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  const loadMoreOrders = () => {
    setOrderLimit(orderLimit + 10);
  };

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const filterOrderByDate = () => {
    // console.log("date", moment(startDate).format().slice(0, 10), endDate);
    let sDate = moment(startDate).format().slice(0, 10);
    let eDate = moment(endDate).format().slice(0, 10);

    FilterOrder(0, sDate, eDate)
      .then((res) => {
        console.log("data", res.data.results);
        setTables(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="mt-4 mb-5">
        <Row>
          <div className="d-flex justify-content-end">
            <Col lg={2}>
              <div className="py-0">
                <DatePicker
                  dateFormat="yyyy-MM-dd"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  showIcon
                  placeholderText="Select Start Date"
                />
              </div>
            </Col>
            <Col lg={2}>
              <div>
                <DatePicker
                  dateFormat="yyyy-MM-dd"
                  showIcon
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  placeholderText="Select End Date"
                />
              </div>
            </Col>
            <Col lg={2}>
              <div>
                <Button
                  style={{ padding: 1, width: "40%" }}
                  onClick={filterOrderByDate}
                  // onClick={() => history(`/womeyn/order-invoice`)}
                >
                  <div>
                    <div>Filter</div>
                  </div>
                </Button>
              </div>
            </Col>
          </div>
        </Row>
      </div>
      <Table hover>
        <thead>
          <tr>
            {tableheaders.map((item, index) => {
              return <th>{item.header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {tables.slice(0, orderLimit).map((item, index) => {
            return (
              <>
                <tr
                  className="cursor-texts"
                  onClick={() => history(`/womeyn/view-order/${item.orderId}`)}
                >
                  <td>{item?.orderId} </td>
                  <td>{item.customerName}</td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      {item.itemsOrdered[0].productThumbImage ? (
                        <img
                          src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item.itemsOrdered[0].productThumbImage}`}
                          alt="no image"
                          width={30}
                          height={30}
                          style={{ borderRadius: "20%" }}
                        />
                      ) : (
                        <img
                          src={
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo13dMxSP1rF3oMPw_0yGj892NadEqEnQ_Uw&usqp=CAU"
                          }
                          alt="no image"
                          width={30}
                          height={30}
                          style={{ borderRadius: "20%" }}
                        />
                      )}
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      {item?.paymentMethod === "Stripe" ? (
                        <img
                          src={Stripe}
                          alt="no image"
                          width={100}
                          // height={30}
                          style={{ borderRadius: "20%" }}
                        />
                      ) : item?.paymentMethod === "Paypal" ? (
                        <img
                          src={paypal_logo}
                          alt="no image"
                          width={30}
                          height={30}
                          style={{ borderRadius: "20%" }}
                        />
                      ) : null}
                    </div>
                  </td>
                  <td>$ {item.totalOrderAmount}</td>
                  <td>
                    {item.stateId === 1 && (
                      <span
                        className="text-i box-shdow"
                        style={{ backgroundColor: "#B3B3FF" }}
                      >
                        New Order
                      </span>
                    )}
                    {item.stateId === 2 && (
                      <span
                        className="text-i box-shdow"
                        style={{ backgroundColor: "#00ffff" }}
                      >
                        Confirmed
                      </span>
                    )}
                    {item.stateId === 3 && (
                      <span
                        className="text-i box-shdow"
                        style={{ backgroundColor: "#ffff00" }}
                      >
                        In Progress
                      </span>
                    )}
                    {item.stateId === 4 && (
                      <span
                        className="text-i box-shdow"
                        style={{ backgroundColor: "#ff1a1a" }}
                      >
                        Cancelled
                      </span>
                    )}
                    {item.stateId === 5 && (
                      <span
                        className="text-i box-shdow"
                        style={{ backgroundColor: "#ff1a1a" }}
                      >
                        Rejected by Seller
                      </span>
                    )}
                    {item.stateId === 6 && (
                      <span
                        className="text-i box-shdow"
                        style={{ backgroundColor: "#ff1a1a" }}
                      >
                        Cancelled by Buyer
                      </span>
                    )}
                    {item.stateId === 7 && (
                      <span
                        className="text-i box-shdow"
                        style={{ backgroundColor: "#ff1a1a" }}
                      >
                        Cancelled by Seller
                      </span>
                    )}
                    {item.stateId === 8 && (
                      <span
                        className="text-i box-shdow"
                        style={{ backgroundColor: "#28a745" }}
                      >
                        Delivered
                      </span>
                    )}
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
      <div className="loadMore-div">
        <Button className="mt-5 loadMore-button" onClick={loadMoreOrders}>
          Load More
        </Button>
      </div>
    </div>
  );
}

export default Allorder;
