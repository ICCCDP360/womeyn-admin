import { Fragment, memo, useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import {
  addPlacement,
  getSinglePlacement,
} from "../../../services/placement/placement";
import * as SettingSelector from "../../../store/setting/selectors";

//Router-dom
import { Link, useNavigate } from "react-router-dom";
import {
  GetCouponList,
  updateCoupon,
} from "../../../services/coupons/couponServices";
import "./styles.scss";

const CouponList = memo((props) => {
  useSelector(SettingSelector.theme_color);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const [coupon, setCoupon] = useState();
  const [editId, setEditId] = useState("");
  const [getId, setGetId] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [defaultOption, setDefaultOption] = useState("");

  const [form, setForm] = useState({
    placementName: "",
    placementDescription: "",
  });

  const updateStatus = (e) => {
    let data;

    e.stateId === 1 ? (data = { stateId: 3 }) : (data = { stateId: 1 });
    updateCoupon(e.id, data)
      .then((res) => {
        setLoading(false);
        setShow(false);
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteShow = (id) => {
    setShowDeleteModal(true);
    setEditId(id);
  };
  const handleDeleteClose = () => {
    setShowDeleteModal(false);
  };

  const deleteCoupon = () => {
    let data;

    data = {
      stateId: 5,
    };
    updateCoupon(editId, data)
      .then((res) => {
        setLoading(false);
        setShow(false);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCoupon();
  }, []);

  const getCoupon = () => {
    GetCouponList()
      .then((res) => {
        setCoupon(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  if (!coupon) {
    return <Loader />;
  }

  return (
    <Fragment>
      <div className="d-flex flex-row justify-content-between">
        <h3>Coupons List</h3>

        <Link
          className="nav-link "
          aria-current="page"
          to="/womeyn/coupon-creation"
        >
          <Button style={{ marginBottom: 10 }}>+ Add a Coupon</Button>
        </Link>
      </div>
      <Row>
        {coupon.map((item) => {
          return (
            <>
              <Col lg="4" md="2" className="coupon-tabsize">
                <div className="couponlist-full-container">
                  <div className="couponlist-center-container">
                    <div className="couponheaderlist">
                      <h5 className="coupon-title-text">
                        <Link
                          className="nav-link "
                          aria-current="page"
                          to={
                            item.typeId === 1
                              ? `/womeyn/placement-properties/${item.id}`
                              : `/womeyn/placement-script-properties/${item.id}`
                          }
                        >
                          {item.title}
                        </Link>
                      </h5>
                    </div>
                    <p className="couponcode-text">{item.couponCode}</p>
                    <p className="couponcode-desc">{item.couponDescription}</p>
                  </div>
                  <div className="coupon-btm-container">
                    <button
                      className="coupon-edit-btn"
                      onClick={() =>
                        navigate(`/womeyn/coupon/edit-coupon/${item.id}`)
                      }
                    >
                      Edit
                    </button>
                    <button
                      className="coupon-dlte-btn"
                      onClick={() => handleDeleteShow(item.id)}
                    >
                      Delete
                    </button>

                    <Form.Check className="form-switch">
                      <Form.Check.Input
                        type="checkbox"
                        defaultChecked={item.stateId === 1 ? true : false}
                        onChange={() => updateStatus(item)}
                        className="coupon-switch-btn"
                      />
                    </Form.Check>
                  </div>
                </div>
              </Col>
            </>
          );
        })}
      </Row>
      {/* Delete Placement */}
      <Modal
        show={showDeleteModal}
        onHide={handleDeleteClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "red" }}>Alert..!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you really want to delete the coupon</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={deleteCoupon}>
            {loading ? (
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              "Delete"
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
});

export default CouponList;
