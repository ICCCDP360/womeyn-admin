import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import {
  getSubscriber,
  getTransaction,
} from "../../../../services/transactions/transaction";
import "./styles/Allorders.scss";
function PendingSubscribers() {
  const history = useNavigate();

  const tableheaders = [
    {
      header: "Order Id",
    },
    {
      header: "Customer Id",
    },
    {
      header: "Amount",
    },
    {
      header: "Payment Status",
    },
  ];

  const [tables, setTables] = useState([]);

  useEffect(() => {
    getSubscriber()
      .then((res) => {
        // setUsers(res.data.results);
        let unPaidSubscribers = res?.data[0].results.filter(
          (e) => e?.paymentStatus === "initiated"
        );
        console.log("s", res.data[0].results);
        setTables(unPaidSubscribers);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="mt-4 mb-5">
        <Row>
          <div className="d-flex justify-content-end">
            <Col lg={5}>
              <div className="py-0">
                <div className="form-group input-group mb-0">
                  <span
                    className="input-group-text"
                    style={{ cursor: "pointer" }}
                  >
                    <svg
                      className="icon-20"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="11.7669"
                        cy="11.7666"
                        r="8.98856"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></circle>
                      <path
                        d="M18.0186 18.4851L21.5426 22"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for order ID customer order status or something... "
                  />
                </div>
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
          {tables.map((item, index) => {
            return (
              <>
                <tr
                  className="cursor-texts"
                  onClick={() => history(`/womeyn/order-view/${index + 1}`)}
                >
                  <td>
                    <div className="d-flex align-items-center">
                      <div>
                        {item?.profileImageName ? (
                          <img
                            className="rounded me-3"
                            style={{
                              width: 48,
                              height: 48,
                            }}
                            src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item.profileImageName}`}
                            alt=""
                            loading="lazy"
                          />
                        ) : (
                          <img
                            className="rounded me-3"
                            style={{
                              width: 48,
                              height: 48,
                            }}
                            src="https://sialifehospital.com/wp-content/uploads/2021/04/testimonial-1.png"
                            alt=""
                            loading="lazy"
                          />
                        )}
                      </div>
                      <h6>
                        {item.firstName} {item.lastName}
                      </h6>
                    </div>
                  </td>
                  <td>{item._id}</td>
                  <td>{item.selectedPlan}</td>
                  <td>
                    {item.paymentStatus === "initiated" && (
                      <span
                        className="text-i box-shdow"
                        style={{ backgroundColor: "#B3B3FF" }}
                      >
                        Pending
                      </span>
                    )}
                    {item.paymentStatus === "unpaid" && (
                      <span
                        className="text-danger box-shdow"
                        style={{ backgroundColor: "#FF9999" }}
                      >
                        Unpaid
                      </span>
                    )}
                    {item.paymentStatus === "paid" && (
                      <span
                        className="text-success box-shdow"
                        style={{
                          backgroundColor: "#CCFFEE",
                          fontWeight: "600",
                        }}
                      >
                        Paid
                      </span>
                    )}
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default PendingSubscribers;
