import * as moment from "moment";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../../../components/Loader";
import { OrdersDetailsById } from "../../../../services/list/listServices";
import OrderDetails from "../OrderDetails";
import "./styles/Allorders.scss";

export default function ViewOrderDetails() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const { id } = useParams();
  const history = useNavigate();

  const [orderDetails, setOrderDetails] = useState("");

  useEffect(() => {
    getOrderDetails();
  }, []);

  const getOrderDetails = () => {
    OrdersDetailsById(id)
      .then((res) => {
        console.log("singleOrder", res.data.results);
        setOrderDetails(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  if (!orderDetails) {
    return <Loader />;
  }

  return (
    <div>
      <h3 className="mb-4">Order Details</h3>
      {orderDetails.map((item, index) => {
        return (
          <>
            <div className="header-container">
              <p className="header-btn">{item?.orderId}</p>
              <div className="rightside-btn">
                <Button
                  className="invoiceprint mx-5"
                  onClick={() => history(`/womeyn/order-invoice`)}
                >
                  <div className="d-flex gap-3">
                    <div>View Invoice</div>
                  </div>
                </Button>
                {/* <button
                  className="header-btn1"
                  onClick={() => history(`/womeyn/order-invoice`)}
                >
                  View Invoice
                </button> */}
                {/* <Button className="invoiceprint">
                  <div className="d-flex gap-3">
                    <div>Download Invoice</div>
                  </div>
                </Button> */}
              </div>
            </div>
            {item.itemsOrdered.map((e) => {
              return (
                <>
                  <div className="mt-4">
                    <div className="content-container">
                      <div>
                        {e?.productThumbImage ? (
                          <img
                            src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item.itemsOrdered[0].productThumbImage}`}
                            className="set-img"
                          />
                        ) : (
                          <img
                            src={
                              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB1mnnhaYYI8KJjy0Faq6zAiVXa4%2FKids-Party-Wear-Frocks-Kids-Party-Dress-for-Winter-Girls-Puffy-Dresses-Children-Vintage-Dresses-Big.jpg&f=1&nofb=1&ipt=8ebd3f3ecdf1134c57d9f35534468b857f033a925d6c6bef13ba529599b4ddfd&ipo=images"
                            }
                            className="set-img"
                          />
                        )}
                      </div>
                      <div>
                        <p className="header-text">{e.productName}</p>
                        <span>Seller {e.sellerBusinessName}</span>
                        <div>
                          {e.variations ? (
                            <>
                              {e.variations.map((item) => {
                                return (
                                  <div className="d-flex">
                                    <p>{item?.name}:</p>
                                    <p className="ms-1"> {item?.value}</p>
                                  </div>
                                );
                              })}
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div>
                        <p className="header-text">$ {e.price}</p>
                      </div>
                      <div>
                        <p>Delivery expected by Fri,Oct 26th 18</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}

            <div className="d-flex mt-1 mx-3">
              {item.deliveryAddress ? (
                <>
                  <p className="header-text">Delivery Address:</p>
                  <p className="d-flex mx-1">
                    {item.deliveryAddress[0].fullAddress}
                  </p>
                </>
              ) : null}
            </div>

            <div className="footer-container mt-1">
              {item?.orderedDate ? (
                <p className="mb-0">
                  Ordered On {moment(item?.orderedDate).format("LLLL")}
                </p>
              ) : null}
              <p className="mb-0">
                Order Total <span className="text-black">$2,580</span>
              </p>
            </div>
          </>
        );
      })}
    </div>
  );
}
