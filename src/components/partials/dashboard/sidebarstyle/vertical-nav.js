import { memo, Fragment, useEffect, useState, useContext } from "react";

//Router
import { Link, useLocation, useNavigate } from "react-router-dom";

//React-bootstrap
import {
  Accordion,
  Tooltip,
  OverlayTrigger,
  useAccordionButton,
  AccordionContext,
  Nav,
} from "react-bootstrap";
//Svg
import { ReactComponent as Dashboard } from "../../../../assets/svg/dashboard.svg";
import { ReactComponent as SellerApproval } from "../../../../assets/svg/seller-approval.svg";
import { ReactComponent as UserManagement } from "../../../../assets/svg/user-mng.svg";
import { ReactComponent as Product } from "../../../../assets/svg/product.svg";
import { ReactComponent as Service } from "../../../../assets/svg/service.svg";
import "../../../../sass/components/_button.scss";
import "./styles.scss";
import { PendingApprovalServices } from "../../../../services/approval/pendingApprovalServices";
import loginServices from "../../../../services/login_services/login-services";
import { toast } from "react-toastify";

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

  const [activeMenu, setActiveMenu] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
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
      toast.success("Logout Success");
      if (result) {
        setTimeout(() => {
          history("/");
        }, 1000);
      }
    });
  };

  return (
    <Fragment>
      <Accordion as="ul" className="navbar-nav iq-main-menu">
        <li className="nav-item static-item">
          <Link className="nav-link static-item disabled" to="#" tabIndex="-1">
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
            location.pathname === "/womeyn/create-coupon" ? "active" : ""
          } nav-item`}
        >
          <Link
            className={`${
              location.pathname === "/womeyn/create-coupon" ? "active" : ""
            } nav-link `}
            aria-current="page"
            to="/womeyn/create-coupon"
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Coupons</Tooltip>}
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
            <span className="item-name">Coupons</span>
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
                <span
                  className={`${
                    location.pathname === "/dashboard"
                      ? "active"
                      : "icon-product"
                  } icon-size`}
                ></span>
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
              overlay={<Tooltip>Manage Placement</Tooltip>}
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
            <span className="item-name">Manage Placement</span>
          </Link>
        </li>
        {/* <li
          className={`${
            location.pathname === "/womeyn/service-list" ? "active" : ""
          } nav-item`}
        >
          <Link
            className={`${
              location.pathname === "/womeyn/service-list" ? "active" : ""
            } nav-link `}
            aria-current="page"
            to="/womeyn/service-list"
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Services</Tooltip>}
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
            <span className="item-name">Services</span>
          </Link>
        </li> */}
        <li>
          <hr className="hr-horizontal" />
        </li>

        <li className="nav-item static-item">
          <Link className="nav-link static-item disabled" to="#" tabIndex="-1">
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
});

VerticalNav.displayName = "VerticalNav";
export default VerticalNav;
