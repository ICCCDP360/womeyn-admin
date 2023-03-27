import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import { getTransaction } from "../../../../services/transactions/transaction";
import "./styles/Allorders.scss";
function Allorderdetails() {
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
    getTransaction()
      .then((res) => {
        // setUsers(res.data.results);
        console.log("subCategory", res);
        setTables(res?.data?.results);
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
                  <td>{item.orderId}</td>
                  <td>{item.client_reference_id}</td>
                  <td>${item.amount_total}</td>
                  <td>
                    {/* {item.status === "Pending" && <span className='text-i box-shdow' style={{ backgroundColor: "#B3B3FF" }}>Pending</span>} */}
                    {item.payment_status === "unpaid" && (
                      <span
                        className="text-danger box-shdow"
                        style={{ backgroundColor: "#FF9999" }}
                      >
                        Unpaid
                      </span>
                    )}
                    {item.payment_status === "paid" && (
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

export default Allorderdetails;
