import { Fragment, memo, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { addCoupon } from "../../../services/coupons/couponServices";
import "./styles.scss";

const CouponCreation = memo((props) => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("user_id");
  const [value, setValue] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [couponPercent, setCouponPercent] = useState("");
  const [couponAmount, setCouponAmount] = useState("");
  const [couponTitle, setCouponTitle] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [minOrderAmount, setMinOrderAmount] = useState("");
  const [maxDiscountAmount, setMaxDiscountAmount] = useState("");
  const [couponDescription, setCouponDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const createCoupon = () => {
    setLoading(true);
    console.log("value", value);

    console.log("cp", couponPercent);
    console.log("ca", couponAmount);

    let percentage;
    let amount;

    if (value === "1") {
      amount = couponAmount;
      percentage = "";
    } else if (value === "2") {
      percentage = couponPercent;
      amount = "";
    }

    let data = {
      title: couponTitle,
      offerPercentage: percentage,
      offerAmount: amount,
      minOrderAmount: minOrderAmount,
      maxDiscountAmount: maxDiscountAmount,
      couponCode: couponCode,
      couponType: value,
      couponDescription: couponDescription,
      startDate: startDate,
      endDate: endDate,
      createdBy: userId,
    };

    console.log("couponData", data);
    addCoupon(data)
      .then((res) => {
        setLoading(false);
        navigate("/womeyn/coupons");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Fragment className="mb-7">
      <div className="header">
        <h2 className="text-primary">Coupons</h2>
      </div>

      <div>
        <div>
          <div style={{ border: "1px solid #D1D6E3", borderRadius: "5px" }}>
            <div className="p-3 ps-5">
              <h4 className="text-dark">Select your coupon duration</h4>
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
                        id="startDate"
                        name="startDate"
                        aria-label="startDate"
                        aria-describedby="basic-addon1"
                        required
                        onChange={(e) => setStartDate(e.target.value)}
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
                        name="endDate"
                        id="endDate"
                        aria-label="endDate"
                        aria-describedby="basic-addon1"
                        required
                        onChange={(e) => setEndDate(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </div>
        <div className="content-margin">
          <h3 className="ms-5">Set Discount</h3>
          <div style={{ border: "1px solid #D1D6E3", borderRadius: "5px" }}>
            <div className="p-3 ps-3">
              <p className="text-dark p-3 pt-1" style={{ width: "60%" }}>
                Please select the discount type that you want to apply.
              </p>

              <Form>
                <Form.Group>
                  <Form.Check className="d-block ms-3">
                    <Form.Check.Input
                      className="me-2"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      onChange={() => setValue("2")}
                      // checked={checked}
                      // onChange={(e) => setChecked(e.currentTarget.checked)}
                    />
                    <Form.Check.Label htmlFor="flexRadioDefault1 text-dark">
                      <p className="ms-5 mb-0" style={{ color: "black" }}>
                        Percentage Off
                      </p>
                    </Form.Check.Label>
                  </Form.Check>
                  <Form.Check className="d-block ms-3 mt-3">
                    <Form.Check.Input
                      className="me-2"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      onChange={() => setValue("1")}
                      maxLength={2}
                      // checked={checked}
                    />
                    <Form.Check.Label htmlFor="flexRadioDefault2 text-dark">
                      <p className="ms-5" style={{ color: "black" }}>
                        Money Off
                      </p>
                    </Form.Check.Label>
                  </Form.Check>
                </Form.Group>
                {value === "2" ? (
                  <>
                    <Row>
                      <Col md="6" className="mb-1">
                        <Form.Label md="6" htmlFor="validationDefault01">
                          <p className="ms-3 mb-0">Discount</p>
                        </Form.Label>

                        <Form.Control
                          style={{ border: "1px solid #000", marginLeft: 15 }}
                          type="text"
                          id="percentage"
                          onChange={(e) => setCouponPercent(e.target.value)}
                          maxLength={2}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6" className="mb-1">
                        <Form.Label md="6" htmlFor="validationDefault01">
                          <p className="ms-3 mb-0">Maximum Discount Amount</p>
                        </Form.Label>

                        <Form.Control
                          style={{ border: "1px solid #000", marginLeft: 15 }}
                          type="text"
                          id="maxDiscountAmount"
                          onChange={(e) =>
                            setMaxDiscountAmount(parseInt(e.target.value))
                          }
                          // maxLength={2}
                        />
                      </Col>
                    </Row>
                  </>
                ) : value === "1" ? (
                  <>
                    <Row>
                      <Col md="6" className="mb-1">
                        <Form.Label md="6" htmlFor="validationDefault01">
                          <p className="ms-3 mb-0">Discount</p>
                        </Form.Label>

                        <Form.Control
                          style={{ border: "1px solid #000", marginLeft: 15 }}
                          type="text"
                          id="money"
                          onChange={(e) => setCouponAmount(e.target.value)}
                        />
                      </Col>
                    </Row>
                  </>
                ) : null}
                <Row>
                  <Col md="6" className="mb-1">
                    <Form.Label md="6" htmlFor="validationDefault01">
                      <p className="ms-3 mb-0">Minimum Order Amount</p>
                    </Form.Label>

                    <Form.Control
                      style={{ border: "1px solid #000", marginLeft: 15 }}
                      type="text"
                      id="order Amount"
                      onChange={(e) =>
                        setMinOrderAmount(parseInt(e.target.value))
                      }
                    />
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </div>

        <div className="content-margin">
          <h3 className="ms-5">Coupon Details</h3>
          <div style={{ border: "1px solid #D1D6E3", borderRadius: "5px" }}>
            <div className="p-3 ps-5">
              <Form>
                <Row>
                  <Col md="6" className="mb-4">
                    <Form.Label md="6" htmlFor="validationDefault01">
                      <p className=" mb-0">Coupon Title</p>
                    </Form.Label>

                    <Form.Control
                      style={{ border: "1px solid #000" }}
                      type="text"
                      id="title"
                      onChange={(e) => setCouponTitle(e.target.value)}
                    />
                  </Col>
                  <p
                    style={{ color: "black", fontSize: "11px" }}
                    className=" mb-0"
                  >
                    {/* Maximum 100 characters */}
                  </p>

                  <Col md="6" className="mb-4">
                    <Form.Label md="6" htmlFor="validationDefault01">
                      Coupon Code
                    </Form.Label>

                    <Form.Control
                      style={{ border: "1px solid #000" }}
                      type="text"
                      id="code"
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                  </Col>
                  <p
                    style={{ color: "black", fontSize: "11px" }}
                    className=" mb-0"
                  >
                    {/* Maximum 100 characters */}
                  </p>

                  <Col md="6" className="mb-4">
                    <Form.Label md="6" htmlFor="validationDefault01">
                      Description
                    </Form.Label>

                    <Form.Control
                      style={{ border: "1px solid #000" }}
                      type="text"
                      id="description"
                      as="textarea"
                      rows={5}
                      onChange={(e) => setCouponDescription(e.target.value)}
                    />
                  </Col>
                </Row>
              </Form>
              <div>
                <Button
                  variant="primary"
                  onClick={createCoupon}
                  className="margin-left-button "
                >
                  {loading ? (
                    <span
                      class="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  ) : (
                    "Add Coupon"
                  )}
                </Button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

export default CouponCreation;
