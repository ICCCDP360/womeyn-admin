import { memo, Fragment } from "react";

//Router
import { Link, useLocation } from "react-router-dom";

//React-bootstrap
import { Accordion, Tooltip, OverlayTrigger } from "react-bootstrap";
//Svg
import { ReactComponent as Dashboard } from "../../../../assets/svg/dashboard.svg";
import { ReactComponent as SellerApproval } from "../../../../assets/svg/seller-approval.svg";
import { ReactComponent as UserManagement } from "../../../../assets/svg/user-mng.svg";
import { ReactComponent as Product } from "../../../../assets/svg/product.svg";
import { ReactComponent as Service } from "../../../../assets/svg/service.svg";
import "../../../../sass/components/_button.scss";
import "./styles.scss";

const VerticalNav = memo(() => {
  //location
  let location = useLocation();

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
              location.pathname === "/dashboard" ? "active" : ""
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
              overlay={<Tooltip>Seller Approval</Tooltip>}
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
            <span className="item-name">Seller Approval (10)</span>
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
            location.pathname === "/womeyn/product-category" ? "active" : ""
          } nav-item`}
        >
          <Link
            className={`${
              location.pathname === "/womeyn/product-category" ? "active" : ""
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
        </li>
        <li
          className={`${
            location.pathname === "/womeyn/service-category" ? "active" : ""
          } nav-item`}
        >
          <Link
            className={`${
              location.pathname === "/womeyn/service-category" ? "active" : ""
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
        </li>
        {/* <li
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
              overlay={<Tooltip>Products</Tooltip>}
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
            <span className="item-name">Products</span>
          </Link>
        </li>
        <li
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
      </Accordion>
    </Fragment>
  );
});

VerticalNav.displayName = "VerticalNav";
export default VerticalNav;
