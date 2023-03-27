import React, { Fragment, useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import download from "../../../../assets/download file.png";
import print from "../../../../assets/print.png";
import "./styles/Orderdetails.scss";

function Orderdetailsview() {
  const [price, setPrice] = useState(0);
  const tableheaders = [
    {
      header: "SR",
    },
    {
      header: "PRODUCT NAME",
    },
    {
      header: "QUANTITY",
    },
    {
      header: "ITEM PRICE",
    },
    {
      header: "AMOUNT",
    },
  ];
  const Tables = [
    {
      name: "Shoe",
      discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$2,100.00",
      quantity: "1",
      total: "$2,100.00",
    },
    {
      name: "Bag",
      discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$4,205.00",
      quantity: "2",
      total: "$8,410.00",
    },
    {
      name: "IPhone",
      discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$1,500",
      quantity: "3",
      total: "$4,500.00",
    },
  ];

  const PrintScreen = () => {
    window.print();
  };

  return (
    <Fragment>
      <div className="p-3">
        <Row>
          <Card lg={6} xl={6}>
            <Card.Body className="m-0 p-0">
              <div>
                <div className="d-flex justify-content-between mb-3">
                  <div>
                    <h2 className="mb-0">Invoice </h2>
                    <div className="mt-2">STATUS : Pending</div>
                  </div>
                  <div>
                    <div className="d-flex justify-content-end flex-column">
                      <h4 className="text-end">Product</h4>
                      <p className="text-end">Elon Musk</p>
                      <p className="mb-0 text-end w-100">
                        4517 Washington Ave. Manchester, Kentucky 39495
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 mt-5">
                <hr />
              </div>
              <div className="mb-5">
                <Row>
                  <Col lg="4" sm="12" className="mt-3 mt-sm-0">
                    <div>
                      <h6>DATE</h6>
                      <p>February 20,2023</p>
                    </div>
                  </Col>
                  <Col
                    lg="4"
                    sm="12"
                    className="mt-3 mt-sm-0 d-flex align-items-center justify-content-center"
                  >
                    <div className="">
                      <h6>INVOICE NO</h6>
                      <div className="mt-2">#10034</div>
                    </div>
                  </Col>
                  <Col
                    lg="4"
                    sm="12"
                    className="mt-3 mt-sm-0 text-sm-end text-start"
                  >
                    <div>
                      <h6 className="text-end">INVOICE TO</h6>
                      <p className="mb-0">Product Shoe</p>
                      <p className="mb-0">Descriptions</p>{" "}
                      <p className="mb-0">
                        4517 Washington Ave. Manchester, Kentucky 39495
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>

              <div
                className="mt-5 borders mb-5"
                style={{ borderRadius: "30px" }}
              >
                <Table className="border">
                  <thead>
                    <tr>
                      {tableheaders.map((item, index) => {
                        return (
                          <>
                            <th>{item.header}</th>
                          </>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {Tables.map((items, index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{items.name}</td>
                          <td>{items.quantity}</td>
                          <td>{items.price}</td>
                          <td>{items.total}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Row>
        <div className="d-flex justify-content-between">
          <div>
            <Button className="invoiceprint">
              <div className="d-flex gap-3">
                <div>Download Invoice</div>
                <div>
                  <span>
                    <img
                      src={download}
                      alt="no image"
                      width={"100%"}
                      height={20}
                    />
                  </span>
                </div>
              </div>
            </Button>
          </div>
          <div>
            <Button onClick={PrintScreen} className="invoiceprint">
              <div className="d-flex gap-3">
                <div>Print Invoice</div>

                <div>
                  <span>
                    <img
                      src={print}
                      alt="no image"
                      width={"100%"}
                      height={20}
                    />
                  </span>
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Orderdetailsview;
