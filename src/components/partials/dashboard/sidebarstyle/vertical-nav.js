import { Fragment, memo, useContext, useEffect, useState } from "react";

//Router
import { Link, useLocation, useNavigate } from "react-router-dom";

//React-bootstrap
import {
  Accordion,
  AccordionContext,
  Nav,
  OverlayTrigger,
  Tooltip,
  useAccordionButton,
} from "react-bootstrap";
//Svg
import { toast } from "react-toastify";
import "../../../../sass/components/_button.scss";
import { PendingApprovalServices } from "../../../../services/approval/pendingApprovalServices";
import loginServices from "../../../../services/login_services/login-services";
import "./styles.scss";

function CustomToggle({ children, eventKey, onClick }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(eventKey, (active) =>
    onClick({ state: !active, eventKey: eventKey })
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <Link
      to="#"
      aria-expanded={isCurrentEventKey ? "true" : "false"}
      className="nav-link"
      role="button"
      onClick={(e) => {
        decoratedOnClick(isCurrentEventKey);
      }}
    >
      {children}
    </Link>
  );
}

const VerticalNav = memo(() => {
  //location
  let location = useLocation();
  let history = useNavigate();

  const permission = localStorage.getItem("permissions");

  // if (
  //   permission.includes("4") ||
  //   permission.includes("5") ||
  //   permission.includes("6")
  // ) {
  //   setApproval(true);
  // }

  // if (
  //   permission.includes("7") ||
  //   permission.includes("8") ||
  //   permission.includes("9")
  // ) {
  //   setManage(true);
  // }

  // if (
  //   permission.includes("10") ||
  //   permission.includes("11") ||
  //   permission.includes("12")
  // ) {
  //   setTransaction(true);
  // }

  console.log("per", permission);

  const permissionArray = permission.split(",");
  const userId = localStorage.getItem("user_id");

  //636e7d24a1af9d2a2a577b87

  console.log("array", permissionArray);

  const [activeMenu, setActiveMenu] = useState(false);

  const [active, setActive] = useState("");

  const [pendingList, setPendingList] = useState("");

  useEffect(() => {
    PendingApprovalServices()
      .then((res) => {
        setPendingList(res?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const logOut = () => {
    loginServices.logout(null).then((result) => {
      toast.success("Logged out Successfully");
      if (result) {
        setTimeout(() => {
          history("/");
        }, 1000);
      }
    });
  };

  if (userId === "636e7d24a1af9d2a2a577b87") {
    return (
      <Fragment>
        <Accordion as="ul" className="navbar-nav iq-main-menu">
          <li className="nav-item static-item">
            <Link
              className="nav-link static-item disabled"
              to="#"
              tabIndex="-1"
            >
              <span className="default-icon">Pages</span>
              <span className="mini-icon">-</span>
            </Link>
          </li>
          <li
            className={`${
              location.pathname === "/womeyn/dashboard" ? "active" : ""
            } nav-item`}
          >
            <Link
              className={`${
                location.pathname === "/womeyn/dashboard" ? "active" : ""
              } nav-link `}
              aria-current="page"
              to="/womeyn/dashboard"
            >
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Dashboard</Tooltip>}
              >
                <i className="icon">
                  <span
                    className={`${
                      location.pathname === "/dashboard"
                        ? "active"
                        : "icon-dashboard"
                    } icon-size`}
                  ></span>
                </i>
              </OverlayTrigger>
              <span className="item-name">Dashboard</span>
            </Link>
          </li>
          <li
            className={`${
              location.pathname === "/womeyn/user-management" ? "active" : ""
            } nav-item`}
          >
            <Link
              className={`${
                location.pathname === "/womeyn/user-management" ? "active" : ""
              } nav-link `}
              aria-current="page"
              to="/womeyn/user-management"
            >
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>User Management</Tooltip>}
              >
                <i className="icon">
                  <span
                    className={`${
                      location.pathname === "/dashboard"
                        ? "active"
                        : "icon-user-mng"
                    } icon-size`}
                  ></span>
                </i>
              </OverlayTrigger>
              <span className="item-name">User Management</span>
            </Link>
          </li>
          <li
            className={`${
              location.pathname === "/womeyn/coupons" ? "active" : ""
            } nav-item`}
          >
            <Link
              className={`${
                location.pathname === "/womeyn/coupons" ? "active" : ""
              } nav-link `}
              aria-current="page"
              to="/womeyn/coupons"
            >
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Coupons</Tooltip>}
              >
                <i className="icon">
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21.7872 10.539C21.6518 10.6706 21.4681 10.7457 21.2747 10.7457C20.559 10.7457 19.9787 11.3095 19.9787 11.9953C19.9787 12.6858 20.5522 13.2467 21.2611 13.2543C21.6605 13.258 22 13.5286 22 13.9166V16.3265C22 18.3549 20.3075 20 18.2186 20H15.0658C14.7398 20 14.4758 19.7435 14.4758 19.4269V17.3975C14.4758 17.0029 14.1567 16.6929 13.7505 16.6929C13.354 16.6929 13.0251 17.0029 13.0251 17.3975V19.4269C13.0251 19.7435 12.7611 20 12.4362 20H5.78143C3.70213 20 2 18.3558 2 16.3265V13.9166C2 13.5286 2.33946 13.258 2.73888 13.2543C3.44874 13.2467 4.02128 12.6858 4.02128 11.9953C4.02128 11.3282 3.46035 10.8209 2.72534 10.8209C2.53191 10.8209 2.34816 10.7457 2.21277 10.6142C2.07737 10.4827 2 10.3042 2 10.1163V7.68291C2 5.65731 3.706 4 5.7911 4H12.4362C12.7611 4 13.0251 4.25649 13.0251 4.57311V6.97827C13.0251 7.36348 13.354 7.68291 13.7505 7.68291C14.1567 7.68291 14.4758 7.36348 14.4758 6.97827V4.57311C14.4758 4.25649 14.7398 4 15.0658 4H18.2186C20.3075 4 22 5.64416 22 7.67352V10.0411C22 10.229 21.9226 10.4075 21.7872 10.539ZM13.7505 14.8702C14.1567 14.8702 14.4758 14.5508 14.4758 14.1656V10.4075C14.4758 10.0223 14.1567 9.70288 13.7505 9.70288C13.354 9.70288 13.0251 10.0223 13.0251 10.4075V14.1656C13.0251 14.5508 13.354 14.8702 13.7505 14.8702Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </i>
              </OverlayTrigger>
              <span className="item-name">Coupons</span>
            </Link>
          </li>

          <li
            className={`${
              location.pathname === "/womeyn/tickets" ? "active" : ""
            } nav-item`}
          >
            <Link
              className={`${
                location.pathname === "/womeyn/tickets" ? "active" : ""
              } nav-link `}
              aria-current="page"
              to="/womeyn/tickets"
            >
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Ticket and Query</Tooltip>}
              >
                <i className="icon">
                  <span
                    className={`${
                      location.pathname === "/dashboard"
                        ? "active"
                        : "icon-profile"
                    } icon-size`}
                  ></span>
                </i>
              </OverlayTrigger>
              <span className="item-name">Ticket and Query</span>
            </Link>
          </li>

          <li className="nav-item static-item">
            <Link
              className="nav-link static-item disabled"
              to="#"
              tabIndex="-1"
            >
              <span className="default-icon">Approval</span>
              <span className="mini-icon">-</span>
            </Link>
          </li>

          <li
            className={`${
              location.pathname === "/womeyn/seller-approval" ? "active" : ""
            } nav-item`}
          >
            <Link
              className={`${
                location.pathname === "/womeyn/seller-approval" ? "active" : ""
              } nav-link `}
              aria-current="page"
              to="/womeyn/seller-approval"
            >
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip>
                    Seller Approval({pendingList.TotalSellersCount})
                  </Tooltip>
                }
              >
                <i className="icon">
                  <span
                    className={`${
                      location.pathname === "/dashboard"
                        ? "active"
                        : "icon-seller-approval"
                    } icon-size`}
                  ></span>
                </i>
              </OverlayTrigger>
              <span className="item-name">
                Seller Approval ({pendingList.TotalSellersCount})
              </span>
            </Link>
          </li>

          <li
            className={`${
              location.pathname === "/womeyn/product-list" ? "active" : ""
            } nav-item`}
          >
            <Link
              className={`${
                location.pathname === "/womeyn/product-list" ? "active" : ""
              } nav-link `}
              aria-current="page"
              to="/womeyn/product-list"
            >
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip>Products ({pendingList.TotalProductsCount})</Tooltip>
                }
              >
                <i className="icon">
                  <span
                    className={`${
                      location.pathname === "/dashboard"
                        ? "active"
                        : "icon-product"
                    } icon-size`}
                  ></span>
                </i>
              </OverlayTrigger>
              <span className="item-name">
                Products ({pendingList.TotalProductsCount})
              </span>
            </Link>
          </li>
          <li
            className={`${
              location.pathname === "/womeyn/services" ? "active" : ""
            } nav-item`}
          >
            <Link
              className={`${
                location.pathname === "/womeyn/services" ? "active" : ""
              } nav-link `}
              aria-current="page"
              to="/womeyn/services"
            >
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip>Services ({pendingList.TotalProductsCount})</Tooltip>
                }
              >
                <i className="icon">
                  <span
                    className={`${
                      location.pathname === "/dashboard"
                        ? "active"
                        : "icon-service"
                    } icon-size`}
                  ></span>
                </i>
              </OverlayTrigger>
              <span className="item-name">
                Services ({pendingList.TotalServicesCount})
              </span>
            </Link>
          </li>

          <li className="nav-item static-item">
            <Link
              className="nav-link static-item disabled"
              to="#"
              tabIndex="-1"
            >
              <span className="default-icon">Manage</span>
              <span className="mini-icon">-</span>
            </Link>
          </li>

          <Accordion.Item
            as="li"
            eventKey="sidebar-e-commerce"
            bsPrefix={`nav-item ${active === "e-commerce" ? "active" : ""} `}
            onClick={() => setActive("e-commerce")}
          >
            <CustomToggle
              eventKey="sidebar-e-commerce"
              onClick={(activeKey) => setActiveMenu(activeKey)}
            >
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Categories</Tooltip>}
              >
                <i className="icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 4C2 2.89543 2.89543 2 4 2H9C10.1046 2 11 2.89543 11 4V20C11 21.1046 10.1046 22 9 22H4C2.89543 22 2 21.1046 2 20V4Z"
                      fill="currentColor"
                    />
                    <path
                      d="M13 4C13 2.89543 13.8954 2 15 2H20C21.1046 2 22 2.89543 22 4V9C22 10.1046 21.1046 11 20 11H15C13.8954 11 13 10.1046 13 9V4Z"
                      fill="currentColor"
                    />
                    <path
                      d="M13 15C13 13.8954 13.8954 13 15 13H20C21.1046 13 22 13.8954 22 15V20C22 21.1046 21.1046 22 20 22H15C13.8954 22 13 21.1046 13 20V15Z"
                      fill="currentColor"
                    />
                  </svg>
                </i>
              </OverlayTrigger>
              <span className="item-name">Categories</span>
              <i className="right-icon">
                <svg
                  className="icon-18"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </i>
            </CustomToggle>
            <Accordion.Collapse eventKey="sidebar-e-commerce">
              <ul className="sub-nav">
                <Nav.Item as="li">
                  <Link
                    className={`${
                      location.pathname === "/womeyn/product-category"
                        ? "active"
                        : ""
                    } nav-link `}
                    aria-current="page"
                    to="/womeyn/product-category"
                  >
                    <OverlayTrigger
                      placement="right"
                      overlay={<Tooltip>Product Category</Tooltip>}
                    >
                      <i className="icon">
                        <span
                          className={`${
                            location.pathname === "/dashboard"
                              ? "active"
                              : "icon-product"
                          } icon-size`}
                        ></span>
                      </i>
                    </OverlayTrigger>
                    <span className="item-name">Product Category</span>
                  </Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Link
                    className={`${
                      location.pathname === "/womeyn/service-category"
                        ? "active"
                        : ""
                    } nav-link `}
                    aria-current="page"
                    to="/womeyn/service-category"
                  >
                    <OverlayTrigger
                      placement="right"
                      overlay={<Tooltip>Service Category</Tooltip>}
                    >
                      <i className="icon">
                        <span
                          className={`${
                            location.pathname === "/dashboard"
                              ? "active"
                              : "icon-service"
                          } icon-size`}
                        ></span>
                      </i>
                    </OverlayTrigger>
                    <span className="item-name">Service Category</span>
                  </Link>
                </Nav.Item>
              </ul>
            </Accordion.Collapse>
          </Accordion.Item>

          <li
            className={`${
              location.pathname === "/womeyn/placement-list" ? "active" : ""
            } nav-item`}
          >
            <Link
              className={`${
                location.pathname === "/womeyn/placement-list" ? "active" : ""
              } nav-link `}
              aria-current="page"
              to="/womeyn/placement-list"
            >
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Manage Banner</Tooltip>}
              >
                <i className="icon">
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.87774 6.37856C8.87774 8.24523 7.33886 9.75821 5.43887 9.75821C3.53999 9.75821 2 8.24523 2 6.37856C2 4.51298 3.53999 3 5.43887 3C7.33886 3 8.87774 4.51298 8.87774 6.37856ZM20.4933 4.89833C21.3244 4.89833 22 5.56203 22 6.37856C22 7.19618 21.3244 7.85989 20.4933 7.85989H13.9178C13.0856 7.85989 12.4101 7.19618 12.4101 6.37856C12.4101 5.56203 13.0856 4.89833 13.9178 4.89833H20.4933ZM3.50777 15.958H10.0833C10.9155 15.958 11.5911 16.6217 11.5911 17.4393C11.5911 18.2558 10.9155 18.9206 10.0833 18.9206H3.50777C2.67555 18.9206 2 18.2558 2 17.4393C2 16.6217 2.67555 15.958 3.50777 15.958ZM18.5611 20.7778C20.4611 20.7778 22 19.2648 22 17.3992C22 15.5325 20.4611 14.0196 18.5611 14.0196C16.6623 14.0196 15.1223 15.5325 15.1223 17.3992C15.1223 19.2648 16.6623 20.7778 18.5611 20.7778Z"
                      fill="currentColor"
                    />
                  </svg>
                </i>
              </OverlayTrigger>
              <span className="item-name">Manage Banner</span>
            </Link>
          </li>
          <li
            className={`${
              location.pathname === "/womeyn/banner" ? "active" : ""
            } nav-item`}
          >
            <Link
              className={`${
                location.pathname === "/womeyn/banner" ? "active" : ""
              } nav-link `}
              aria-current="page"
              to="/womeyn/banner"
            >
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Recommendation</Tooltip>}
              >
                <i className="icon">
                  <svg
                    width="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M11.7761 21.8374C9.49311 20.4273 7.37081 18.7645 5.44807 16.8796C4.09069 15.5338 3.05404 13.8905 2.41735 12.0753C1.27971 8.53523 2.60399 4.48948 6.30129 3.2884C8.2528 2.67553 10.3752 3.05175 12.0072 4.29983C13.6398 3.05315 15.7616 2.67705 17.7132 3.2884C21.4105 4.48948 22.7436 8.53523 21.606 12.0753C20.9745 13.8888 19.944 15.5319 18.5931 16.8796C16.6686 18.7625 14.5465 20.4251 12.265 21.8374L12.0161 22L11.7761 21.8374Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M12.0109 22.0001L11.776 21.8375C9.49013 20.4275 7.36487 18.7648 5.43902 16.8797C4.0752 15.5357 3.03238 13.8923 2.39052 12.0754C1.26177 8.53532 2.58605 4.48957 6.28335 3.28849C8.23486 2.67562 10.3853 3.05213 12.0109 4.31067V22.0001Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M18.2304 9.99922C18.0296 9.98629 17.8425 9.8859 17.7131 9.72157C17.5836 9.55723 17.5232 9.3434 17.5459 9.13016C17.5677 8.4278 17.168 7.78851 16.5517 7.53977C16.1609 7.43309 15.9243 7.00987 16.022 6.59249C16.1148 6.18182 16.4993 5.92647 16.8858 6.0189C16.9346 6.027 16.9816 6.04468 17.0244 6.07105C18.2601 6.54658 19.0601 7.82641 18.9965 9.22576C18.9944 9.43785 18.9117 9.63998 18.7673 9.78581C18.6229 9.93164 18.4291 10.0087 18.2304 9.99922Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </i>
              </OverlayTrigger>
              <span className="item-name">Recommendation</span>
            </Link>
          </li>

          <li className="nav-item static-item">
            <Link
              className="nav-link static-item disabled"
              to="#"
              tabIndex="-1"
            >
              <span className="default-icon">Transactions</span>
              <span className="mini-icon">-</span>
            </Link>
          </li>

          <li
            className={`${
              location.pathname === "/womeyn/orders" ? "active" : ""
            } nav-item`}
          >
            <Link
              className={`${
                location.pathname === "/womeyn/orders" ? "active" : ""
              } nav-link `}
              aria-current="page"
              to="/womeyn/orders"
            >
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Orders</Tooltip>}
              >
                <i className="icon">
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.4184 6.47H16.6232C19.3152 6.47 21.5 8.72 21.5 11.48V17C21.5 19.76 19.3152 22 16.6232 22H7.3768C4.6848 22 2.5 19.76 2.5 17V11.48C2.5 8.72 4.6848 6.47 7.3768 6.47H7.58162C7.60113 5.27 8.05955 4.15 8.8886 3.31C9.72741 2.46 10.8003 2.03 12.0098 2C14.4286 2 16.3891 4 16.4184 6.47ZM9.91273 4.38C9.36653 4.94 9.06417 5.68 9.04466 6.47H14.9553C14.9261 4.83 13.6191 3.5 12.0098 3.5C11.2587 3.5 10.4784 3.81 9.91273 4.38ZM15.7064 10.32C16.116 10.32 16.4379 9.98 16.4379 9.57V8.41C16.4379 8 16.116 7.66 15.7064 7.66C15.3065 7.66 14.9748 8 14.9748 8.41V9.57C14.9748 9.98 15.3065 10.32 15.7064 10.32ZM8.93737 9.57C8.93737 9.98 8.6155 10.32 8.20585 10.32C7.80595 10.32 7.47433 9.98 7.47433 9.57V8.41C7.47433 8 7.80595 7.66 8.20585 7.66C8.6155 7.66 8.93737 8 8.93737 8.41V9.57Z"
                      fill="currentColor"
                    />
                  </svg>
                </i>
              </OverlayTrigger>
              <span className="item-name">Orders</span>
            </Link>
          </li>
          <li
            className={`${
              location.pathname === "/womeyn/transactions" ? "active" : ""
            } nav-item`}
          >
            <Link
              className={`${
                location.pathname === "/womeyn/transactions" ? "active" : ""
              } nav-link `}
              aria-current="page"
              to="/womeyn/transactions"
            >
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Transactions</Tooltip>}
              >
                <i className="icon">
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.7689 8.3818H22C22 4.98459 19.9644 3 16.5156 3H7.48444C4.03556 3 2 4.98459 2 8.33847V15.6615C2 19.0154 4.03556 21 7.48444 21H16.5156C19.9644 21 22 19.0154 22 15.6615V15.3495H17.7689C15.8052 15.3495 14.2133 13.7975 14.2133 11.883C14.2133 9.96849 15.8052 8.41647 17.7689 8.41647V8.3818ZM17.7689 9.87241H21.2533C21.6657 9.87241 22 10.1983 22 10.6004V13.131C21.9952 13.5311 21.6637 13.8543 21.2533 13.8589H17.8489C16.8548 13.872 15.9855 13.2084 15.76 12.2643C15.6471 11.6783 15.8056 11.0736 16.1931 10.6122C16.5805 10.1509 17.1573 9.88007 17.7689 9.87241ZM17.92 12.533H18.2489C18.6711 12.533 19.0133 12.1993 19.0133 11.7877C19.0133 11.3761 18.6711 11.0424 18.2489 11.0424H17.92C17.7181 11.0401 17.5236 11.1166 17.38 11.255C17.2364 11.3934 17.1555 11.5821 17.1556 11.779C17.1555 12.1921 17.4964 12.5282 17.92 12.533ZM6.73778 8.3818H12.3822C12.8044 8.3818 13.1467 8.04812 13.1467 7.63649C13.1467 7.22487 12.8044 6.89119 12.3822 6.89119H6.73778C6.31903 6.89116 5.9782 7.2196 5.97333 7.62783C5.97331 8.04087 6.31415 8.37705 6.73778 8.3818Z"
                      fill="currentColor"
                    />
                  </svg>
                </i>
              </OverlayTrigger>
              <span className="item-name">Transactions</span>
            </Link>
          </li>
          <li
            className={`${
              location.pathname === "/womeyn/subscribers" ? "active" : ""
            } nav-item`}
          >
            <Link
              className={`${
                location.pathname === "/womeyn/subscribers" ? "active" : ""
              } nav-link `}
              aria-current="page"
              to="/womeyn/subscribers"
            >
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Subscribers</Tooltip>}
              >
                <i className="icon">
                  <span
                    className={`${
                      location.pathname === "/dashboard"
                        ? "active"
                        : "icon-profile"
                    } icon-size`}
                  ></span>
                </i>
              </OverlayTrigger>
              <span className="item-name">Subscribers</span>
            </Link>
          </li>
          <li>
            <hr className="hr-horizontal" />
          </li>

          <li className="nav-item static-item">
            <Link
              className="nav-link static-item disabled"
              to="#"
              tabIndex="-1"
            >
              <span className="default-icon">Others </span>
              <span className="mini-icon">-</span>
            </Link>
          </li>

          <Nav.Item as="li">
            <Nav.Link
              className="menu-arrow justify-content-start"
              onClick={() => {
                logOut();
              }}
              role="button"
              aria-controls="elementsData"
            >
              <span className="icon-logout font-size-icon"></span>
              <span className="nav-text ms-2">Sign Out</span>
            </Nav.Link>
          </Nav.Item>
        </Accordion>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Accordion as="ul" className="navbar-nav iq-main-menu">
          <div>
            <li className="nav-item static-item">
              <Link
                className="nav-link static-item disabled"
                to="#"
                tabIndex="-1"
              >
                <span className="default-icon">Pages</span>
                <span className="mini-icon">-</span>
              </Link>
            </li>
            <li
              className={`${
                location.pathname === "/womeyn/dashboard" ? "active" : ""
              } nav-item`}
            >
              <Link
                className={`${
                  location.pathname === "/womeyn/dashboard" ? "active" : ""
                } nav-link `}
                aria-current="page"
                to="/womeyn/dashboard"
              >
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Dashboard</Tooltip>}
                >
                  <i className="icon">
                    <span
                      className={`${
                        location.pathname === "/dashboard"
                          ? "active"
                          : "icon-dashboard"
                      } icon-size`}
                    ></span>
                  </i>
                </OverlayTrigger>
                <span className="item-name">Dashboard</span>
              </Link>
            </li>
            <div>
              {permissionArray.map((e) => {
                return (
                  <>
                    {e === "2" ? (
                      <li
                        className={`${
                          location.pathname === "/womeyn/user-management"
                            ? "active"
                            : ""
                        } nav-item`}
                      >
                        <Link
                          className={`${
                            location.pathname === "/womeyn/user-management"
                              ? "active"
                              : ""
                          } nav-link `}
                          aria-current="page"
                          to="/womeyn/user-management"
                        >
                          <OverlayTrigger
                            placement="right"
                            overlay={<Tooltip>User Management</Tooltip>}
                          >
                            <i className="icon">
                              <span
                                className={`${
                                  location.pathname === "/dashboard"
                                    ? "active"
                                    : "icon-user-mng"
                                } icon-size`}
                              ></span>
                            </i>
                          </OverlayTrigger>
                          <span className="item-name">User Management</span>
                        </Link>
                      </li>
                    ) : e === "3" ? (
                      <li
                        className={`${
                          location.pathname === "/womeyn/coupons"
                            ? "active"
                            : ""
                        } nav-item`}
                      >
                        <Link
                          className={`${
                            location.pathname === "/womeyn/coupons"
                              ? "active"
                              : ""
                          } nav-link `}
                          aria-current="page"
                          to="/womeyn/coupons"
                        >
                          <OverlayTrigger
                            placement="right"
                            overlay={<Tooltip>Coupons</Tooltip>}
                          >
                            <i className="icon">
                              <svg
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M21.7872 10.539C21.6518 10.6706 21.4681 10.7457 21.2747 10.7457C20.559 10.7457 19.9787 11.3095 19.9787 11.9953C19.9787 12.6858 20.5522 13.2467 21.2611 13.2543C21.6605 13.258 22 13.5286 22 13.9166V16.3265C22 18.3549 20.3075 20 18.2186 20H15.0658C14.7398 20 14.4758 19.7435 14.4758 19.4269V17.3975C14.4758 17.0029 14.1567 16.6929 13.7505 16.6929C13.354 16.6929 13.0251 17.0029 13.0251 17.3975V19.4269C13.0251 19.7435 12.7611 20 12.4362 20H5.78143C3.70213 20 2 18.3558 2 16.3265V13.9166C2 13.5286 2.33946 13.258 2.73888 13.2543C3.44874 13.2467 4.02128 12.6858 4.02128 11.9953C4.02128 11.3282 3.46035 10.8209 2.72534 10.8209C2.53191 10.8209 2.34816 10.7457 2.21277 10.6142C2.07737 10.4827 2 10.3042 2 10.1163V7.68291C2 5.65731 3.706 4 5.7911 4H12.4362C12.7611 4 13.0251 4.25649 13.0251 4.57311V6.97827C13.0251 7.36348 13.354 7.68291 13.7505 7.68291C14.1567 7.68291 14.4758 7.36348 14.4758 6.97827V4.57311C14.4758 4.25649 14.7398 4 15.0658 4H18.2186C20.3075 4 22 5.64416 22 7.67352V10.0411C22 10.229 21.9226 10.4075 21.7872 10.539ZM13.7505 14.8702C14.1567 14.8702 14.4758 14.5508 14.4758 14.1656V10.4075C14.4758 10.0223 14.1567 9.70288 13.7505 9.70288C13.354 9.70288 13.0251 10.0223 13.0251 10.4075V14.1656C13.0251 14.5508 13.354 14.8702 13.7505 14.8702Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </i>
                          </OverlayTrigger>
                          <span className="item-name">Coupons</span>
                        </Link>
                      </li>
                    ) : null}
                  </>
                );
              })}
            </div>

            {/* <li
              className={`${
                location.pathname === "/womeyn/tickets" ? "active" : ""
              } nav-item`}
            >
              <Link
                className={`${
                  location.pathname === "/womeyn/tickets" ? "active" : ""
                } nav-link `}
                aria-current="page"
                to="/womeyn/tickets"
              >
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Ticket and Query</Tooltip>}
                >
                  <i className="icon">
                    <span
                      className={`${
                        location.pathname === "/dashboard"
                          ? "active"
                          : "icon-profile"
                      } icon-size`}
                    ></span>
                  </i>
                </OverlayTrigger>
                <span className="item-name">Ticket and Query</span>
              </Link>
            </li> */}

            {permission.includes("4") ||
            permission.includes("5") ||
            permission.includes("6") ? (
              <li className="nav-item static-item">
                <Link
                  className="nav-link static-item disabled"
                  to="#"
                  tabIndex="-1"
                >
                  <span className="default-icon">Approval</span>
                  <span className="mini-icon">-</span>
                </Link>
              </li>
            ) : null}

            <div>
              {permissionArray.map((r) => {
                return (
                  <>
                    {r === "4" ? (
                      <li
                        className={`${
                          location.pathname === "/womeyn/seller-approval"
                            ? "active"
                            : ""
                        } nav-item`}
                      >
                        <Link
                          className={`${
                            location.pathname === "/womeyn/seller-approval"
                              ? "active"
                              : ""
                          } nav-link `}
                          aria-current="page"
                          to="/womeyn/seller-approval"
                        >
                          <OverlayTrigger
                            placement="right"
                            overlay={
                              <Tooltip>
                                Seller Approval(
                                {pendingList.TotalSellersCount})
                              </Tooltip>
                            }
                          >
                            <i className="icon">
                              <span
                                className={`${
                                  location.pathname === "/dashboard"
                                    ? "active"
                                    : "icon-seller-approval"
                                } icon-size`}
                              ></span>
                            </i>
                          </OverlayTrigger>
                          <span className="item-name">
                            Seller Approval ({pendingList.TotalSellersCount})
                          </span>
                        </Link>
                      </li>
                    ) : r === "5" ? (
                      <li
                        className={`${
                          location.pathname === "/womeyn/product-list"
                            ? "active"
                            : ""
                        } nav-item`}
                      >
                        <Link
                          className={`${
                            location.pathname === "/womeyn/product-list"
                              ? "active"
                              : ""
                          } nav-link `}
                          aria-current="page"
                          to="/womeyn/product-list"
                        >
                          <OverlayTrigger
                            placement="right"
                            overlay={
                              <Tooltip>
                                Products ({pendingList.TotalProductsCount})
                              </Tooltip>
                            }
                          >
                            <i className="icon">
                              <span
                                className={`${
                                  location.pathname === "/dashboard"
                                    ? "active"
                                    : "icon-product"
                                } icon-size`}
                              ></span>
                            </i>
                          </OverlayTrigger>
                          <span className="item-name">
                            Products ({pendingList.TotalProductsCount})
                          </span>
                        </Link>
                      </li>
                    ) : r === "6" ? (
                      <li
                        className={`${
                          location.pathname === "/womeyn/services"
                            ? "active"
                            : ""
                        } nav-item`}
                      >
                        <Link
                          className={`${
                            location.pathname === "/womeyn/services"
                              ? "active"
                              : ""
                          } nav-link `}
                          aria-current="page"
                          to="/womeyn/services"
                        >
                          <OverlayTrigger
                            placement="right"
                            overlay={
                              <Tooltip>
                                Services ({pendingList.TotalProductsCount})
                              </Tooltip>
                            }
                          >
                            <i className="icon">
                              <span
                                className={`${
                                  location.pathname === "/dashboard"
                                    ? "active"
                                    : "icon-service"
                                } icon-size`}
                              ></span>
                            </i>
                          </OverlayTrigger>
                          <span className="item-name">
                            Services ({pendingList.TotalServicesCount})
                          </span>
                        </Link>
                      </li>
                    ) : null}
                  </>
                );
              })}
            </div>

            {permission.includes("7") ||
            permission.includes("8") ||
            permission.includes("9") ? (
              <li className="nav-item static-item">
                <Link
                  className="nav-link static-item disabled"
                  to="#"
                  tabIndex="-1"
                >
                  <span className="default-icon">Manage</span>
                  <span className="mini-icon">-</span>
                </Link>
              </li>
            ) : null}

            {/* <li className="nav-item static-item">
              <Link
                className="nav-link static-item disabled"
                to="#"
                tabIndex="-1"
              >
                <span className="default-icon">Manage</span>
                <span className="mini-icon">-</span>
              </Link>
            </li> */}

            <div>
              {permissionArray.map((t) => {
                return (
                  <>
                    {t === "7" ? (
                      <Accordion.Item
                        as="li"
                        eventKey="sidebar-e-commerce"
                        bsPrefix={`nav-item ${
                          active === "e-commerce" ? "active" : ""
                        } `}
                        onClick={() => setActive("e-commerce")}
                      >
                        <CustomToggle
                          eventKey="sidebar-e-commerce"
                          onClick={(activeKey) => setActiveMenu(activeKey)}
                        >
                          <OverlayTrigger
                            placement="right"
                            overlay={<Tooltip>Categories</Tooltip>}
                          >
                            <i className="icon">
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2 4C2 2.89543 2.89543 2 4 2H9C10.1046 2 11 2.89543 11 4V20C11 21.1046 10.1046 22 9 22H4C2.89543 22 2 21.1046 2 20V4Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M13 4C13 2.89543 13.8954 2 15 2H20C21.1046 2 22 2.89543 22 4V9C22 10.1046 21.1046 11 20 11H15C13.8954 11 13 10.1046 13 9V4Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M13 15C13 13.8954 13.8954 13 15 13H20C21.1046 13 22 13.8954 22 15V20C22 21.1046 21.1046 22 20 22H15C13.8954 22 13 21.1046 13 20V15Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </i>
                          </OverlayTrigger>
                          <span className="item-name">Categories</span>
                          <i className="right-icon">
                            <svg
                              className="icon-18"
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </i>
                        </CustomToggle>
                        <Accordion.Collapse eventKey="sidebar-e-commerce">
                          <ul className="sub-nav">
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname ===
                                  "/womeyn/product-category"
                                    ? "active"
                                    : ""
                                } nav-link `}
                                aria-current="page"
                                to="/womeyn/product-category"
                              >
                                <OverlayTrigger
                                  placement="right"
                                  overlay={<Tooltip>Product Category</Tooltip>}
                                >
                                  <i className="icon">
                                    <span
                                      className={`${
                                        location.pathname === "/dashboard"
                                          ? "active"
                                          : "icon-product"
                                      } icon-size`}
                                    ></span>
                                  </i>
                                </OverlayTrigger>
                                <span className="item-name">
                                  Product Category
                                </span>
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname ===
                                  "/womeyn/service-category"
                                    ? "active"
                                    : ""
                                } nav-link `}
                                aria-current="page"
                                to="/womeyn/service-category"
                              >
                                <OverlayTrigger
                                  placement="right"
                                  overlay={<Tooltip>Service Category</Tooltip>}
                                >
                                  <i className="icon">
                                    <span
                                      className={`${
                                        location.pathname === "/dashboard"
                                          ? "active"
                                          : "icon-service"
                                      } icon-size`}
                                    ></span>
                                  </i>
                                </OverlayTrigger>
                                <span className="item-name">
                                  Service Category
                                </span>
                              </Link>
                            </Nav.Item>
                          </ul>
                        </Accordion.Collapse>
                      </Accordion.Item>
                    ) : t === "8" ? (
                      <li
                        className={`${
                          location.pathname === "/womeyn/placement-list"
                            ? "active"
                            : ""
                        } nav-item`}
                      >
                        <Link
                          className={`${
                            location.pathname === "/womeyn/placement-list"
                              ? "active"
                              : ""
                          } nav-link `}
                          aria-current="page"
                          to="/womeyn/placement-list"
                        >
                          <OverlayTrigger
                            placement="right"
                            overlay={<Tooltip>Manage Banner</Tooltip>}
                          >
                            <i className="icon">
                              <svg
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M8.87774 6.37856C8.87774 8.24523 7.33886 9.75821 5.43887 9.75821C3.53999 9.75821 2 8.24523 2 6.37856C2 4.51298 3.53999 3 5.43887 3C7.33886 3 8.87774 4.51298 8.87774 6.37856ZM20.4933 4.89833C21.3244 4.89833 22 5.56203 22 6.37856C22 7.19618 21.3244 7.85989 20.4933 7.85989H13.9178C13.0856 7.85989 12.4101 7.19618 12.4101 6.37856C12.4101 5.56203 13.0856 4.89833 13.9178 4.89833H20.4933ZM3.50777 15.958H10.0833C10.9155 15.958 11.5911 16.6217 11.5911 17.4393C11.5911 18.2558 10.9155 18.9206 10.0833 18.9206H3.50777C2.67555 18.9206 2 18.2558 2 17.4393C2 16.6217 2.67555 15.958 3.50777 15.958ZM18.5611 20.7778C20.4611 20.7778 22 19.2648 22 17.3992C22 15.5325 20.4611 14.0196 18.5611 14.0196C16.6623 14.0196 15.1223 15.5325 15.1223 17.3992C15.1223 19.2648 16.6623 20.7778 18.5611 20.7778Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </i>
                          </OverlayTrigger>
                          <span className="item-name">Manage Banner</span>
                        </Link>
                      </li>
                    ) : t === "9" ? (
                      <li
                        className={`${
                          location.pathname === "/womeyn/banner" ? "active" : ""
                        } nav-item`}
                      >
                        <Link
                          className={`${
                            location.pathname === "/womeyn/banner"
                              ? "active"
                              : ""
                          } nav-link `}
                          aria-current="page"
                          to="/womeyn/banner"
                        >
                          <OverlayTrigger
                            placement="right"
                            overlay={<Tooltip>Recommendation</Tooltip>}
                          >
                            <i className="icon">
                              <svg
                                width="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  opacity="0.4"
                                  d="M11.7761 21.8374C9.49311 20.4273 7.37081 18.7645 5.44807 16.8796C4.09069 15.5338 3.05404 13.8905 2.41735 12.0753C1.27971 8.53523 2.60399 4.48948 6.30129 3.2884C8.2528 2.67553 10.3752 3.05175 12.0072 4.29983C13.6398 3.05315 15.7616 2.67705 17.7132 3.2884C21.4105 4.48948 22.7436 8.53523 21.606 12.0753C20.9745 13.8888 19.944 15.5319 18.5931 16.8796C16.6686 18.7625 14.5465 20.4251 12.265 21.8374L12.0161 22L11.7761 21.8374Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M12.0109 22.0001L11.776 21.8375C9.49013 20.4275 7.36487 18.7648 5.43902 16.8797C4.0752 15.5357 3.03238 13.8923 2.39052 12.0754C1.26177 8.53532 2.58605 4.48957 6.28335 3.28849C8.23486 2.67562 10.3853 3.05213 12.0109 4.31067V22.0001Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M18.2304 9.99922C18.0296 9.98629 17.8425 9.8859 17.7131 9.72157C17.5836 9.55723 17.5232 9.3434 17.5459 9.13016C17.5677 8.4278 17.168 7.78851 16.5517 7.53977C16.1609 7.43309 15.9243 7.00987 16.022 6.59249C16.1148 6.18182 16.4993 5.92647 16.8858 6.0189C16.9346 6.027 16.9816 6.04468 17.0244 6.07105C18.2601 6.54658 19.0601 7.82641 18.9965 9.22576C18.9944 9.43785 18.9117 9.63998 18.7673 9.78581C18.6229 9.93164 18.4291 10.0087 18.2304 9.99922Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </i>
                          </OverlayTrigger>
                          <span className="item-name">Recommendation</span>
                        </Link>
                      </li>
                    ) : null}
                  </>
                );
              })}
            </div>

            {permission.includes("10") ||
            permission.includes("11") ||
            permission.includes("12") ? (
              <li className="nav-item static-item">
                <Link
                  className="nav-link static-item disabled"
                  to="#"
                  tabIndex="-1"
                >
                  <span className="default-icon">Transactions</span>
                  <span className="mini-icon">-</span>
                </Link>
              </li>
            ) : null}

            <div>
              {permissionArray.map((y) => {
                return (
                  <>
                    {y === "10" ? (
                      <li
                        className={`${
                          location.pathname === "/womeyn/orders" ? "active" : ""
                        } nav-item`}
                      >
                        <Link
                          className={`${
                            location.pathname === "/womeyn/orders"
                              ? "active"
                              : ""
                          } nav-link `}
                          aria-current="page"
                          to="/womeyn/orders"
                        >
                          <OverlayTrigger
                            placement="right"
                            overlay={<Tooltip>Orders</Tooltip>}
                          >
                            <i className="icon">
                              <svg
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M16.4184 6.47H16.6232C19.3152 6.47 21.5 8.72 21.5 11.48V17C21.5 19.76 19.3152 22 16.6232 22H7.3768C4.6848 22 2.5 19.76 2.5 17V11.48C2.5 8.72 4.6848 6.47 7.3768 6.47H7.58162C7.60113 5.27 8.05955 4.15 8.8886 3.31C9.72741 2.46 10.8003 2.03 12.0098 2C14.4286 2 16.3891 4 16.4184 6.47ZM9.91273 4.38C9.36653 4.94 9.06417 5.68 9.04466 6.47H14.9553C14.9261 4.83 13.6191 3.5 12.0098 3.5C11.2587 3.5 10.4784 3.81 9.91273 4.38ZM15.7064 10.32C16.116 10.32 16.4379 9.98 16.4379 9.57V8.41C16.4379 8 16.116 7.66 15.7064 7.66C15.3065 7.66 14.9748 8 14.9748 8.41V9.57C14.9748 9.98 15.3065 10.32 15.7064 10.32ZM8.93737 9.57C8.93737 9.98 8.6155 10.32 8.20585 10.32C7.80595 10.32 7.47433 9.98 7.47433 9.57V8.41C7.47433 8 7.80595 7.66 8.20585 7.66C8.6155 7.66 8.93737 8 8.93737 8.41V9.57Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </i>
                          </OverlayTrigger>
                          <span className="item-name">Orders</span>
                        </Link>
                      </li>
                    ) : y === "11" ? (
                      <li
                        className={`${
                          location.pathname === "/womeyn/transactions"
                            ? "active"
                            : ""
                        } nav-item`}
                      >
                        <Link
                          className={`${
                            location.pathname === "/womeyn/transactions"
                              ? "active"
                              : ""
                          } nav-link `}
                          aria-current="page"
                          to="/womeyn/transactions"
                        >
                          <OverlayTrigger
                            placement="right"
                            overlay={<Tooltip>Transactions</Tooltip>}
                          >
                            <i className="icon">
                              <svg
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M17.7689 8.3818H22C22 4.98459 19.9644 3 16.5156 3H7.48444C4.03556 3 2 4.98459 2 8.33847V15.6615C2 19.0154 4.03556 21 7.48444 21H16.5156C19.9644 21 22 19.0154 22 15.6615V15.3495H17.7689C15.8052 15.3495 14.2133 13.7975 14.2133 11.883C14.2133 9.96849 15.8052 8.41647 17.7689 8.41647V8.3818ZM17.7689 9.87241H21.2533C21.6657 9.87241 22 10.1983 22 10.6004V13.131C21.9952 13.5311 21.6637 13.8543 21.2533 13.8589H17.8489C16.8548 13.872 15.9855 13.2084 15.76 12.2643C15.6471 11.6783 15.8056 11.0736 16.1931 10.6122C16.5805 10.1509 17.1573 9.88007 17.7689 9.87241ZM17.92 12.533H18.2489C18.6711 12.533 19.0133 12.1993 19.0133 11.7877C19.0133 11.3761 18.6711 11.0424 18.2489 11.0424H17.92C17.7181 11.0401 17.5236 11.1166 17.38 11.255C17.2364 11.3934 17.1555 11.5821 17.1556 11.779C17.1555 12.1921 17.4964 12.5282 17.92 12.533ZM6.73778 8.3818H12.3822C12.8044 8.3818 13.1467 8.04812 13.1467 7.63649C13.1467 7.22487 12.8044 6.89119 12.3822 6.89119H6.73778C6.31903 6.89116 5.9782 7.2196 5.97333 7.62783C5.97331 8.04087 6.31415 8.37705 6.73778 8.3818Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </i>
                          </OverlayTrigger>
                          <span className="item-name">Transactions</span>
                        </Link>
                      </li>
                    ) : y === "12" ? (
                      <li
                        className={`${
                          location.pathname === "/womeyn/subscribers"
                            ? "active"
                            : ""
                        } nav-item`}
                      >
                        <Link
                          className={`${
                            location.pathname === "/womeyn/subscribers"
                              ? "active"
                              : ""
                          } nav-link `}
                          aria-current="page"
                          to="/womeyn/subscribers"
                        >
                          <OverlayTrigger
                            placement="right"
                            overlay={<Tooltip>Subscribers</Tooltip>}
                          >
                            <i className="icon">
                              <span
                                className={`${
                                  location.pathname === "/dashboard"
                                    ? "active"
                                    : "icon-profile"
                                } icon-size`}
                              ></span>
                            </i>
                          </OverlayTrigger>
                          <span className="item-name">Subscribers</span>
                        </Link>
                      </li>
                    ) : null}
                  </>
                );
              })}
            </div>
          </div>
          <li>
            <hr className="hr-horizontal" />
          </li>

          <li className="nav-item static-item">
            <Link
              className="nav-link static-item disabled"
              to="#"
              tabIndex="-1"
            >
              <span className="default-icon">Others </span>
              <span className="mini-icon">-</span>
            </Link>
          </li>

          <Nav.Item as="li">
            <Nav.Link
              className="menu-arrow justify-content-start"
              onClick={() => {
                logOut();
              }}
              role="button"
              aria-controls="elementsData"
            >
              <span className="icon-logout font-size-icon"></span>
              <span className="nav-text ms-2">Sign Out</span>
            </Nav.Link>
          </Nav.Item>
        </Accordion>
      </Fragment>
    );
  }
});

VerticalNav.displayName = "VerticalNav";
export default VerticalNav;
