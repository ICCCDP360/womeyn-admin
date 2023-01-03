import { memo, Fragment, useEffect, useState } from "react";
import { Button, Modal, Nav, Tab } from "react-bootstrap";
import Card from "../../../components/bootstrap/card";
import { useSelector } from "react-redux";
import * as SettingSelector from "../../../store/setting/selectors";
import { Table, Row, Col } from "react-bootstrap";
import UserCard from "../../components/user-card";
import { getAdminServices } from "../../../services/admin/adminServices";
import { getSellerServices } from "../../../services/seller/sellerServices";
import Loader from "../../../components/Loader";

import { sellerApprovalServices } from "../../../services/seller/sellerServices";

//Router-dom
import { Link } from "react-router-dom";
import UserList from "../userList/userList";

let description =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

const UserManagement = memo((props) => {
  useSelector(SettingSelector.theme_color);

  const [users, setUsers] = useState([]);

  const [sellers, setSellers] = useState([]);

  const [userLimit, setUserLimit] = useState(10);
  const [sellerLimit, setSellerLimit] = useState(10);

  const [show, setShow] = useState(false);

  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    //
    setUserId(item?.id);
    setShow(true);
  };

  const actionReject = () => {
    setLoading(true);

    const data = {
      stateId: "4",
    };
    sellerApprovalServices(userId, data)
      .then((res) => {
        setLoading(false);

        handleClose();
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };
  const actionApprove = (item) => {
    const data = {
      stateId: "1",
    };
    sellerApprovalServices(item?.id, data)
      .then((res) => {
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAdminServices()
      .then((res) => {
        // setUsers(res.data.results);

        setUsers(res?.data?.results);
      })
      .catch((err) => console.log(err));
    getSellerServices()
      .then((res) => {
        setSellers(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const loadMoreUsers = () => {
    setUserLimit(userLimit + 10);
  };

  const loadMoreSellers = () => {
    setSellerLimit(sellerLimit + 10);
  };

  if (!users && !sellers) {
    return <Loader />;
  }

  return (
    <Fragment>
      <div className="d-flex flex-row justify-content-between">
        <h3>User Management</h3>
        <Link className="nav-link " aria-current="page" to="/womeyn/user-add">
          <Button style={{ marginBottom: 10 }}>+ Add User</Button>
        </Link>
      </div>
      <div>
        <Card>
          <Card.Body>
            <div>
              <Tab.Container defaultActiveKey="1">
                <Nav className="tab-bottom-bordered">
                  <div
                    className="mb-0 nav nav-tabs"
                    id="nav-tab1"
                    role="tablist"
                  >
                    <Nav.Link
                      eventKey="1"
                      id="nav-admin"
                      data-bs-target="#tab-admin"
                      aria-controls="pills-admin"
                      data-bs-toggle="tab"
                      type="button"
                      role="tab"
                      aria-selected="true"
                    >
                      <span className="iq-mail-section">Admin Users</span>
                    </Nav.Link>
                    <Nav.Link
                      eventKey="2"
                      id="nav-sellers"
                      data-bs-target="#tab-sellers"
                      aria-controls="pills-sellers"
                      data-bs-toggle="tab"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      <span className="iq-mail-section">Sellers</span>
                    </Nav.Link>
                    <Nav.Link
                      eventKey="3"
                      id="nav-endc"
                      data-bs-target="#tab-endc"
                      aria-controls="pills-endc"
                      data-bs-toggle="tab"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      <span className="iq-mail-section">End Customers</span>
                    </Nav.Link>
                  </div>
                </Nav>
                <Tab.Content
                  className="mt-4 iq-tab-fade-up"
                  id="nav-tabContent"
                >
                  <Tab.Pane
                    eventKey="1"
                    id="nav-admin"
                    role="tab"
                    aria-labelledby="nav-admin-tab"
                  >
                    {/* <p>{users}</p> */}
                    {/* <p>{sellers}</p> */}
                    <div className="d-flex flex-column">
                      <Row>
                        <Col sm="12">
                          {users.slice(0, userLimit).map((user, index) => {
                            return (
                              <>
                                <UserCard
                                  key={index}
                                  notificationimg={"img1"}
                                  notificationtitle={user.firstName}
                                  notificationsvg="1"
                                  notificationcolor="primary"
                                  notificationdefault="Permissions:"
                                  contact={user.email}
                                  id={user.id}
                                />
                              </>
                            );
                          })}
                        </Col>
                      </Row>
                    </div>
                    {userLimit[userLimit.length - 1] ===
                    users[users.length - 1] ? (
                      <div className="loadMore-div">
                        <Button
                          className="mt-5 loadMore-button"
                          onClick={loadMoreUsers}
                        >
                          Load More
                        </Button>
                      </div>
                    ) : null}
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="2"
                    id="nav-sellers"
                    role="tab"
                    aria-labelledby="nav-sellers-tab"
                  >
                    <div className="d-flex flex-column">
                      <Row>
                        <Col sm="12">
                          <Table responsive striped>
                            <thead>
                              <tr>
                                <th>Seller</th>
                                <th>Description</th>
                                <th>Services/Product</th>
                                <th>Status</th>
                                <th className="text-center">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {sellers
                                .slice(0, sellerLimit)
                                .map((item, index) => {
                                  return (
                                    <>
                                      <tr key={index}>
                                        <td>
                                          <div className="d-flex align-items-center">
                                            {item?.profileImageName ? (
                                              <img
                                                className="rounded me-3"
                                                style={{
                                                  width: 64,
                                                  height: 64,
                                                }}
                                                src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item.profileImageName}`}
                                                alt=""
                                                loading="lazy"
                                              />
                                            ) : (
                                              <img
                                                className="rounded me-3"
                                                style={{
                                                  width: 64,
                                                  height: 64,
                                                }}
                                                src="https://sialifehospital.com/wp-content/uploads/2021/04/testimonial-1.png"
                                                alt=""
                                                loading="lazy"
                                              />
                                            )}
                                            <div className="media-support-info">
                                              <h5 className="iq-sub-label text-uppercase">
                                                {item.firstName}
                                              </h5>
                                              <p className="mb-0">
                                                {item.email}
                                              </p>
                                            </div>
                                          </div>
                                        </td>
                                        <td className="text-dark no-wrap">{`${description.slice(
                                          0,
                                          100
                                        )}...`}</td>
                                        <td className="text-dark no-wrap flex-container">
                                          <div>
                                            <Button
                                              type="button"
                                              variant="soft-secondary"
                                            >
                                              Clothing
                                            </Button>{" "}
                                            <Button
                                              type="button"
                                              variant="soft-secondary"
                                            >
                                              Personal Care
                                            </Button>{" "}
                                            <Button
                                              type="button"
                                              variant="soft-secondary"
                                            >
                                              Beauty
                                            </Button>{" "}
                                            <Button
                                              type="button"
                                              variant="soft-secondary"
                                            >
                                              Lifestyle
                                            </Button>{" "}
                                            <Button variant="icon btn-warning warning">
                                              +4
                                            </Button>
                                          </div>
                                        </td>

                                        <td>
                                          {item.stateId === 1 ? (
                                            <div className="d-flex gap-2 justify-content-start">
                                              <div className="status-box bg-success"></div>
                                              <p className="p-bold green-text">
                                                Active
                                              </p>
                                            </div>
                                          ) : item.stateId === 2 ? (
                                            <div className="d-flex gap-2 justify-content-start">
                                              <div className="status-box bg-info"></div>
                                              <p className="p-bold blue-text">
                                                Pending
                                              </p>
                                            </div>
                                          ) : item.stateId === 3 ? (
                                            <div className="d-flex gap-2 justify-content-start">
                                              <div className="status-box "></div>
                                              <p className="p-bold yellow-text">
                                                Pending Approval
                                              </p>
                                            </div>
                                          ) : item.stateId === 4 ? (
                                            <div className="d-flex gap-2 justify-content-start">
                                              <div className="status-box bg-danger"></div>
                                              <p className="p-bold red-text">
                                                Rejected
                                              </p>
                                            </div>
                                          ) : null}
                                        </td>
                                        <td>
                                          {item.stateId === 1 ? (
                                            <>
                                              <div
                                                className="d-flex gap-3 justify-content-start"
                                                style={{
                                                  marginBottom: 12,
                                                  cursor: "pointer",
                                                }}
                                              >
                                                <svg
                                                  width="32"
                                                  height="32"
                                                  viewBox="0 0 32 32"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  onClick={() =>
                                                    handleShow(item)
                                                  }
                                                  // onClick={() =>
                                                  //   handleShow(item)
                                                  // }
                                                >
                                                  <rect
                                                    width="32"
                                                    height="32"
                                                    rx="16"
                                                    fill="#E95A5A"
                                                  />
                                                  <path
                                                    d="M19.665 12.335C19.5731 12.2424 19.4639 12.169 19.3435 12.1188C19.2231 12.0686 19.094 12.0428 18.9636 12.0428C18.8332 12.0428 18.7041 12.0686 18.5837 12.1188C18.4633 12.169 18.354 12.2424 18.2622 12.335L16 14.6071L13.7378 12.335C13.5518 12.149 13.2995 12.0445 13.0364 12.0445C12.7733 12.0445 12.5211 12.149 12.335 12.335C12.149 12.5211 12.0445 12.7733 12.0445 13.0364C12.0445 13.2995 12.149 13.5518 12.335 13.7378L14.6071 16L12.335 18.2622C12.2424 18.354 12.169 18.4633 12.1188 18.5837C12.0686 18.7041 12.0428 18.8332 12.0428 18.9636C12.0428 19.094 12.0686 19.2231 12.1188 19.3435C12.169 19.4639 12.2424 19.5731 12.335 19.665C12.4269 19.7576 12.5361 19.831 12.6565 19.8812C12.7769 19.9313 12.906 19.9572 13.0364 19.9572C13.1668 19.9572 13.2959 19.9313 13.4163 19.8812C13.5367 19.831 13.646 19.7576 13.7378 19.665L16 17.3929L18.2622 19.665C18.354 19.7576 18.4633 19.831 18.5837 19.8812C18.7041 19.9313 18.8332 19.9572 18.9636 19.9572C19.094 19.9572 19.2231 19.9313 19.3435 19.8812C19.4639 19.831 19.5731 19.7576 19.665 19.665C19.7576 19.5731 19.831 19.4639 19.8812 19.3435C19.9313 19.2231 19.9572 19.094 19.9572 18.9636C19.9572 18.8332 19.9313 18.7041 19.8812 18.5837C19.831 18.4633 19.7576 18.354 19.665 18.2622L17.3929 16L19.665 13.7378C19.7576 13.646 19.831 13.5367 19.8812 13.4163C19.9313 13.2959 19.9572 13.1668 19.9572 13.0364C19.9572 12.906 19.9313 12.7769 19.8812 12.6565C19.831 12.5361 19.7576 12.4269 19.665 12.335ZM22.9842 9.01582C22.0729 8.07231 20.9829 7.31974 19.7776 6.80201C18.5724 6.28428 17.2761 6.01177 15.9644 6.00037C14.6528 5.98897 13.352 6.23892 12.1379 6.73563C10.9239 7.23233 9.82091 7.96585 8.89338 8.89338C7.96585 9.82091 7.23233 10.9239 6.73563 12.1379C6.23892 13.352 5.98897 14.6528 6.00037 15.9644C6.01177 17.2761 6.28428 18.5724 6.80201 19.7776C7.31974 20.9829 8.07231 22.0729 9.01582 22.9842C9.92709 23.9277 11.0171 24.6803 12.2224 25.198C13.4276 25.7157 14.7239 25.9882 16.0356 25.9996C17.3472 26.011 18.648 25.7611 19.8621 25.2644C21.0761 24.7677 22.1791 24.0342 23.1066 23.1066C24.0342 22.1791 24.7677 21.0761 25.2644 19.8621C25.7611 18.648 26.011 17.3472 25.9996 16.0356C25.9882 14.7239 25.7157 13.4276 25.198 12.2224C24.6803 11.0171 23.9277 9.92709 22.9842 9.01582ZM21.5913 21.5913C20.2992 22.8848 18.5986 23.6903 16.7792 23.8706C14.9598 24.0509 13.1342 23.5947 11.6134 22.5799C10.0926 21.5651 8.97074 20.0544 8.43889 18.3052C7.90704 16.5559 7.99813 14.6764 8.69666 12.9868C9.39518 11.2972 10.6579 9.90208 12.2697 9.0391C13.8815 8.17612 15.7427 7.89868 17.5361 8.25406C19.3296 8.60943 20.9443 9.57564 22.1052 10.988C23.2661 12.4005 23.9014 14.1717 23.9029 16C23.9064 17.0385 23.7039 18.0674 23.3071 19.0272C22.9104 19.9869 22.3272 20.8584 21.5913 21.5913Z"
                                                    fill="white"
                                                  />
                                                </svg>
                                              </div>
                                            </>
                                          ) : item.stateId ===
                                            2 ? null : item.stateId === 3 ? (
                                            <div
                                              className="d-flex gap-2 justify-content-start"
                                              style={{
                                                marginBottom: 12,
                                                cursor: "pointer",
                                              }}
                                            >
                                              <svg
                                                width="32"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                onClick={() =>
                                                  actionApprove(item)
                                                }
                                              >
                                                <rect
                                                  width="32"
                                                  height="32"
                                                  rx="16"
                                                  fill="#198754"
                                                />
                                                <path
                                                  d="M18.72 12.79L14.43 17.09L12.78 15.44C12.6904 15.3353 12.58 15.2503 12.456 15.1903C12.3319 15.1303 12.1968 15.0965 12.0591 15.0912C11.9213 15.0859 11.784 15.1091 11.6557 15.1594C11.5274 15.2096 11.4108 15.2859 11.3134 15.3833C11.2159 15.4808 11.1396 15.5974 11.0894 15.7257C11.0391 15.854 11.0159 15.9913 11.0212 16.1291C11.0265 16.2668 11.0603 16.4019 11.1203 16.526C11.1803 16.65 11.2653 16.7604 11.37 16.85L13.72 19.21C13.8134 19.3027 13.9243 19.376 14.0461 19.4258C14.1679 19.4755 14.2984 19.5008 14.43 19.5C14.6923 19.4989 14.9437 19.3947 15.13 19.21L20.13 14.21C20.2237 14.117 20.2981 14.0064 20.3489 13.8846C20.3997 13.7627 20.4258 13.632 20.4258 13.5C20.4258 13.368 20.3997 13.2373 20.3489 13.1154C20.2981 12.9936 20.2237 12.883 20.13 12.79C19.9426 12.6037 19.6892 12.4992 19.425 12.4992C19.1608 12.4992 18.9074 12.6037 18.72 12.79ZM16 6C14.0222 6 12.0888 6.58649 10.4443 7.6853C8.79981 8.78412 7.51809 10.3459 6.76121 12.1732C6.00433 14.0004 5.8063 16.0111 6.19215 17.9509C6.578 19.8907 7.53041 21.6725 8.92894 23.0711C10.3275 24.4696 12.1093 25.422 14.0491 25.8079C15.9889 26.1937 17.9996 25.9957 19.8268 25.2388C21.6541 24.4819 23.2159 23.2002 24.3147 21.5557C25.4135 19.9112 26 17.9778 26 16C26 14.6868 25.7413 13.3864 25.2388 12.1732C24.7363 10.9599 23.9997 9.85752 23.0711 8.92893C22.1425 8.00035 21.0401 7.26375 19.8268 6.7612C18.6136 6.25866 17.3132 6 16 6ZM16 24C14.4178 24 12.871 23.5308 11.5554 22.6518C10.2398 21.7727 9.21447 20.5233 8.60897 19.0615C8.00347 17.5997 7.84504 15.9911 8.15372 14.4393C8.4624 12.8874 9.22433 11.462 10.3432 10.3431C11.462 9.22433 12.8874 8.4624 14.4393 8.15372C15.9911 7.84504 17.5997 8.00346 19.0615 8.60896C20.5233 9.21447 21.7727 10.2398 22.6518 11.5554C23.5308 12.871 24 14.4177 24 16C24 18.1217 23.1572 20.1566 21.6569 21.6569C20.1566 23.1571 18.1217 24 16 24Z"
                                                  fill="white"
                                                />
                                              </svg>

                                              <svg
                                                width="32"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                onClick={() =>
                                                  actionReject(item)
                                                }
                                                // onClick={handleShow}
                                              >
                                                <rect
                                                  width="32"
                                                  height="32"
                                                  rx="16"
                                                  fill="#E95A5A"
                                                />
                                                <path
                                                  d="M19.665 12.335C19.5731 12.2424 19.4639 12.169 19.3435 12.1188C19.2231 12.0686 19.094 12.0428 18.9636 12.0428C18.8332 12.0428 18.7041 12.0686 18.5837 12.1188C18.4633 12.169 18.354 12.2424 18.2622 12.335L16 14.6071L13.7378 12.335C13.5518 12.149 13.2995 12.0445 13.0364 12.0445C12.7733 12.0445 12.5211 12.149 12.335 12.335C12.149 12.5211 12.0445 12.7733 12.0445 13.0364C12.0445 13.2995 12.149 13.5518 12.335 13.7378L14.6071 16L12.335 18.2622C12.2424 18.354 12.169 18.4633 12.1188 18.5837C12.0686 18.7041 12.0428 18.8332 12.0428 18.9636C12.0428 19.094 12.0686 19.2231 12.1188 19.3435C12.169 19.4639 12.2424 19.5731 12.335 19.665C12.4269 19.7576 12.5361 19.831 12.6565 19.8812C12.7769 19.9313 12.906 19.9572 13.0364 19.9572C13.1668 19.9572 13.2959 19.9313 13.4163 19.8812C13.5367 19.831 13.646 19.7576 13.7378 19.665L16 17.3929L18.2622 19.665C18.354 19.7576 18.4633 19.831 18.5837 19.8812C18.7041 19.9313 18.8332 19.9572 18.9636 19.9572C19.094 19.9572 19.2231 19.9313 19.3435 19.8812C19.4639 19.831 19.5731 19.7576 19.665 19.665C19.7576 19.5731 19.831 19.4639 19.8812 19.3435C19.9313 19.2231 19.9572 19.094 19.9572 18.9636C19.9572 18.8332 19.9313 18.7041 19.8812 18.5837C19.831 18.4633 19.7576 18.354 19.665 18.2622L17.3929 16L19.665 13.7378C19.7576 13.646 19.831 13.5367 19.8812 13.4163C19.9313 13.2959 19.9572 13.1668 19.9572 13.0364C19.9572 12.906 19.9313 12.7769 19.8812 12.6565C19.831 12.5361 19.7576 12.4269 19.665 12.335ZM22.9842 9.01582C22.0729 8.07231 20.9829 7.31974 19.7776 6.80201C18.5724 6.28428 17.2761 6.01177 15.9644 6.00037C14.6528 5.98897 13.352 6.23892 12.1379 6.73563C10.9239 7.23233 9.82091 7.96585 8.89338 8.89338C7.96585 9.82091 7.23233 10.9239 6.73563 12.1379C6.23892 13.352 5.98897 14.6528 6.00037 15.9644C6.01177 17.2761 6.28428 18.5724 6.80201 19.7776C7.31974 20.9829 8.07231 22.0729 9.01582 22.9842C9.92709 23.9277 11.0171 24.6803 12.2224 25.198C13.4276 25.7157 14.7239 25.9882 16.0356 25.9996C17.3472 26.011 18.648 25.7611 19.8621 25.2644C21.0761 24.7677 22.1791 24.0342 23.1066 23.1066C24.0342 22.1791 24.7677 21.0761 25.2644 19.8621C25.7611 18.648 26.011 17.3472 25.9996 16.0356C25.9882 14.7239 25.7157 13.4276 25.198 12.2224C24.6803 11.0171 23.9277 9.92709 22.9842 9.01582ZM21.5913 21.5913C20.2992 22.8848 18.5986 23.6903 16.7792 23.8706C14.9598 24.0509 13.1342 23.5947 11.6134 22.5799C10.0926 21.5651 8.97074 20.0544 8.43889 18.3052C7.90704 16.5559 7.99813 14.6764 8.69666 12.9868C9.39518 11.2972 10.6579 9.90208 12.2697 9.0391C13.8815 8.17612 15.7427 7.89868 17.5361 8.25406C19.3296 8.60943 20.9443 9.57564 22.1052 10.988C23.2661 12.4005 23.9014 14.1717 23.9029 16C23.9064 17.0385 23.7039 18.0674 23.3071 19.0272C22.9104 19.9869 22.3272 20.8584 21.5913 21.5913Z"
                                                  fill="white"
                                                />
                                              </svg>
                                            </div>
                                          ) : item.stateId === 4 ? (
                                            <div
                                              className="d-flex gap-3 justify-content-start"
                                              style={{
                                                marginBottom: 12,
                                                cursor: "pointer",
                                              }}
                                            >
                                              <svg
                                                width="32"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                onClick={() =>
                                                  actionApprove(item)
                                                }
                                              >
                                                <rect
                                                  width="32"
                                                  height="32"
                                                  rx="16"
                                                  fill="#198754"
                                                />
                                                <path
                                                  d="M18.72 12.79L14.43 17.09L12.78 15.44C12.6904 15.3353 12.58 15.2503 12.456 15.1903C12.3319 15.1303 12.1968 15.0965 12.0591 15.0912C11.9213 15.0859 11.784 15.1091 11.6557 15.1594C11.5274 15.2096 11.4108 15.2859 11.3134 15.3833C11.2159 15.4808 11.1396 15.5974 11.0894 15.7257C11.0391 15.854 11.0159 15.9913 11.0212 16.1291C11.0265 16.2668 11.0603 16.4019 11.1203 16.526C11.1803 16.65 11.2653 16.7604 11.37 16.85L13.72 19.21C13.8134 19.3027 13.9243 19.376 14.0461 19.4258C14.1679 19.4755 14.2984 19.5008 14.43 19.5C14.6923 19.4989 14.9437 19.3947 15.13 19.21L20.13 14.21C20.2237 14.117 20.2981 14.0064 20.3489 13.8846C20.3997 13.7627 20.4258 13.632 20.4258 13.5C20.4258 13.368 20.3997 13.2373 20.3489 13.1154C20.2981 12.9936 20.2237 12.883 20.13 12.79C19.9426 12.6037 19.6892 12.4992 19.425 12.4992C19.1608 12.4992 18.9074 12.6037 18.72 12.79ZM16 6C14.0222 6 12.0888 6.58649 10.4443 7.6853C8.79981 8.78412 7.51809 10.3459 6.76121 12.1732C6.00433 14.0004 5.8063 16.0111 6.19215 17.9509C6.578 19.8907 7.53041 21.6725 8.92894 23.0711C10.3275 24.4696 12.1093 25.422 14.0491 25.8079C15.9889 26.1937 17.9996 25.9957 19.8268 25.2388C21.6541 24.4819 23.2159 23.2002 24.3147 21.5557C25.4135 19.9112 26 17.9778 26 16C26 14.6868 25.7413 13.3864 25.2388 12.1732C24.7363 10.9599 23.9997 9.85752 23.0711 8.92893C22.1425 8.00035 21.0401 7.26375 19.8268 6.7612C18.6136 6.25866 17.3132 6 16 6ZM16 24C14.4178 24 12.871 23.5308 11.5554 22.6518C10.2398 21.7727 9.21447 20.5233 8.60897 19.0615C8.00347 17.5997 7.84504 15.9911 8.15372 14.4393C8.4624 12.8874 9.22433 11.462 10.3432 10.3431C11.462 9.22433 12.8874 8.4624 14.4393 8.15372C15.9911 7.84504 17.5997 8.00346 19.0615 8.60896C20.5233 9.21447 21.7727 10.2398 22.6518 11.5554C23.5308 12.871 24 14.4177 24 16C24 18.1217 23.1572 20.1566 21.6569 21.6569C20.1566 23.1571 18.1217 24 16 24Z"
                                                  fill="white"
                                                />
                                              </svg>
                                            </div>
                                          ) : null}
                                        </td>
                                      </tr>
                                    </>
                                  );
                                })}
                            </tbody>
                          </Table>
                          <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                            centered
                          >
                            <Modal.Header closeButton>
                              <Modal.Title style={{ color: "red" }}>
                                Alert..!
                              </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              Do you really want to reject the seller?
                            </Modal.Body>
                            <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>
                                Cancel
                              </Button>
                              <Button variant="primary" onClick={actionReject}>
                                {loading ? (
                                  <span
                                    class="spinner-border spinner-border-sm"
                                    role="status"
                                    aria-hidden="true"
                                  ></span>
                                ) : (
                                  "Confirm"
                                )}
                              </Button>
                            </Modal.Footer>
                          </Modal>
                          {sellerLimit[sellerLimit.length - 1] ===
                          sellers[sellers.length - 1] ? (
                            <div className="loadMore-div">
                              <Button
                                className="mt-5 loadMore-button"
                                onClick={loadMoreSellers}
                              >
                                Load More
                              </Button>
                            </div>
                          ) : null}
                        </Col>
                      </Row>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="3"
                    id="nav-endc"
                    role="tab"
                    aria-labelledby="nav-endc-tab"
                  >
                    <div className="d-flex flex-column">
                      <Row>
                        <Col sm="12">
                          <UserList />
                        </Col>
                      </Row>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Fragment>
  );
});

export default UserManagement;
