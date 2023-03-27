import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import Loader from "../../../../components/Loader";
import { OrdersListByStatus } from "../../../../services/list/listServices";
import "./styles/Allorders.scss";

function InProgress() {
  const history = useNavigate();

  const [orderLimit, setOrderLimit] = useState(10);

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
      header: "Delivery Date",
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
    getOrdersListByStatus();
  }, []);

  const getOrdersListByStatus = () => {
    OrdersListByStatus(3)
      .then((res) => {
        console.log("data", res.data.results);
        setTables(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  const loadMoreOrders = () => {
    setOrderLimit(orderLimit + 10);
  };
  if (!tables) {
    return <Loader />;
  }
  return (
    <div>
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
                      {item.itemsOrdered[0].productImageName ? (
                        <img
                          src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item.itemsOrdered[0].productImageName}`}
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
                  <td>{item?.countryName}</td>
                  <td>{item.totalOrderAmount}</td>
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
        {/* <Button className="mt-5 loadMore-button" onClick={loadMoreOrders}>
          Load More
        </Button> */}
      </div>
    </div>
  );
}

export default InProgress;
