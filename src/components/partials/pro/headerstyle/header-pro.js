import { useState, useEffect, memo } from "react";

//react-bootstrap
import {
  Navbar,
  Container,
  Nav,
  Dropdown,
  Form,
  Image,
  Button,
  Collapse,
} from "react-bootstrap";

//router
import { Link, useLocation, useNavigate } from "react-router-dom";

//component
import CustomToggle from "../../../dropdowns";
import Card from "../../../bootstrap/card";
// import Modalpopup from "../../../../views/modules/auth/components/modal-popup";

// logo
import Logo from "../../components/logo";

// Redux Selector / Action
import { useSelector } from "react-redux";

// Import selectors & action from setting store
import * as SettingSelector from "../../../../store/setting/selectors";

import RadioBtn from "../../../setting/elements/radio-btn";
import loginServices from "../../../../services/login_services/login-services";
import { toast } from "react-toastify";
import "./styles.scss";

import { ReactComponent as Logout } from "../../../../assets/svg/logout.svg";

const Headerpro = memo((props) => {
  let history = useNavigate();

  const themeFontSize = useSelector(SettingSelector.theme_font_size);
  const headerNavbar = useSelector(SettingSelector.header_navbar);
  useEffect(() => {
    if (headerNavbar === "navs-sticky" || headerNavbar === "nav-glass") {
      window.onscroll = () => {
        if (document.documentElement.scrollTop > 50) {
          document.getElementsByTagName("nav")[0].classList.add("menu-sticky");
        } else {
          document
            .getElementsByTagName("nav")[0]
            .classList.remove("menu-sticky");
        }
      };
    }

    document.getElementsByTagName("html")[0].classList.add(themeFontSize);

    //offcanvase code
    const result = window.matchMedia("(max-width: 1200px)");
    window.addEventListener("resize", () => {
      if (result.matches === true) {
        if (show1 === true) {
          document.documentElement.style.setProperty("overflow", "hidden");
        } else {
          document.documentElement.style.removeProperty("overflow");
        }
      } else {
        document.documentElement.style.removeProperty("overflow");
      }
    });
    if (window.innerWidth <= "1200") {
      if (show1 === true) {
        document.documentElement.style.setProperty("overflow", "hidden");
      } else {
        document.documentElement.style.removeProperty("overflow");
      }
    } else {
      document.documentElement.style.removeProperty("overflow");
    }
  });

  const [show, setShow] = useState(true);

  const [show1, setShow1] = useState(false);

  //collapse
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);
  const [open10, setOpen10] = useState(false);
  const [open11, setOpen11] = useState(false);
  const [open12, setOpen12] = useState(false);
  const [open13, setOpen13] = useState(false);
  const [open14, setOpen14] = useState(false);
  const [open15, setOpen15] = useState(false);
  const [open16, setOpen16] = useState(false);
  const [open17, setOpen17] = useState(false);

  //fullscreen
  const fullscreen = () => {
    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  const minisidebar = () => {
    document.getElementsByTagName("ASIDE")[0].classList.toggle("sidebar-mini");
  };

  let location = useLocation();

  const [show3, setShow3] = useState(false);

  const handleClose = () => setShow3(false);
  const handleShow = () => setShow3(true);

  const [show4, setShow4] = useState(false);

  const handleClose1 = () => setShow4(false);
  const handleShow1 = () => setShow4(true);

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
    <Navbar expand="xl" className={`nav iq-navbar ${headerNavbar} `}>
      <Container fluid className="navbar-inner">
        <Link to="/dashboard" className="navbar-brand">
          <Logo color={true} />
          <h4 className="logo-title d-none d-sm-block">{props.app_name}</h4>
        </Link>
        <div
          className="sidebar-toggle"
          data-toggle="sidebar"
          data-active="true"
          onClick={minisidebar}
        >
          <i className="icon d-flex">
            <svg width="20px" viewBox="0 0 24 24" className="icon-20">
              <path
                fill="currentColor"
                d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
              />
            </svg>
          </i>
        </div>
        <div className="d-flex align-items-center justify-content-between product-offcanvas">
          <div className="breadcrumb-title border-end me-3 pe-3 d-none d-xl-block"></div>
          <div
            className={`offcanvas offcanvas-end shadow-none iq-product-menu-responsive ${
              show1 === true ? "show" : ""
            } `}
            tabIndex="-1"
            id="offcanvasBottom"
            style={{ visibility: `${show1 === true ? "visible" : "hidden"}` }}
          >
            <div className="offcanvas-body">
              <ul className="iq-nav-menu list-unstyled">
                <Nav.Item as="li" className="active">
                  <Nav.Link
                    className="menu-arrow justify-content-start"
                    onClick={() => history(`/womeyn/dashboard`)}
                    aria-controls="homeData"
                    aria-expanded={open}
                    role="button"
                  >
                    <span className="icon-home font-size-icon"></span>
                    <span className="nav-text ms-2">Home</span>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item as="li">
                  <Nav.Link
                    className="menu-arrow justify-content-start"
                    onClick={() => history(`/womeyn/user-profile`)}
                    aria-expanded={open2}
                    role="button"
                    aria-controls="allPagesData"
                  >
                    <span className="icon-profile font-size-icon"></span>
                    <span className="nav-text ms-2">Your Profile</span>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item as="li">
                  <Nav.Link
                    className="menu-arrow justify-content-start"
                    onClick={() => {
                      setOpen12(!open12);
                      logOut();
                    }}
                    aria-expanded={open12}
                    role="button"
                    aria-controls="elementsData"
                  >
                    <span className="icon-logout font-size-icon"></span>
                    <span className="nav-text ms-2">Logout</span>
                  </Nav.Link>
                </Nav.Item>
              </ul>
            </div>
          </div>
          <div
            className={`offcanvas-backdrop fade  ${
              show1 === true ? "show d-block" : "d-none"
            }`}
            onClick={() => setShow1(false)}
          ></div>
        </div>
        <div className="d-flex align-items-center">
          <Button
            id="navbar-toggle"
            bsPrefix="navbar-toggler"
            type="button"
            aria-expanded={show1}
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            onClick={() => setShow1(!show1)}
          >
            <span className="navbar-toggler-icon">
              <span className="mt-1 navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </span>
          </Button>
        </div>
        <div
          className={` navbar-collapse ${
            show1 === true ? "collapse show" : "collapse"
          }`}
          id="navbarSupportedContent"
        >
          <ul className="mb-2 navbar-nav ms-auto align-items-center navbar-list mb-lg-0">
            <li className="nav-item dropdown me-0 me-xl-3">
              <div
                className="d-flex align-items-center mr-2 iq-font-style"
                role="group"
                aria-label="First group"
              >
                <RadioBtn
                  btnName="theme_font_size"
                  labelclassName="  border-0 btn-icon btn-sm"
                  id="font-size-sm"
                  defaultChecked={themeFontSize}
                  value="theme-fs-sm"
                >
                  <span className="mb-0 h6" style={{ color: "inherit" }}>
                    A
                  </span>
                </RadioBtn>
                <RadioBtn
                  btnName="theme_font_size"
                  labelclassName="  border-0 btn-icon"
                  id="theme-fs-md"
                  defaultChecked={themeFontSize}
                  value="theme-fs-md"
                >
                  <span className="mb-0 h4" style={{ color: "inherit" }}>
                    A
                  </span>
                </RadioBtn>
                <RadioBtn
                  btnName="theme_font_size"
                  labelclassName="  border-0 btn-icon"
                  id="theme-fs-lg"
                  defaultChecked={themeFontSize}
                  value="theme-fs-lg"
                >
                  <span className="mb-0 h2" style={{ color: "inherit" }}>
                    A
                  </span>
                </RadioBtn>
              </div>
            </li>
            <Dropdown
              as="li"
              className="nav-item border-end pe-3 d-none d-xl-block"
            >
              <div className="form-group input-group mb-0 search-input">
                <Form.Control type="text" placeholder="Search..." />
                <span className="input-group-text">
                  <svg
                    width="20"
                    className="icon-20"
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
                      strokeLinejoin="round"
                    ></circle>
                    <path
                      d="M18.0186 18.4851L21.5426 22"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </div>
            </Dropdown>
            <Dropdown
              as="li"
              className="nav-item  iq-responsive-menu border-end d-block d-xl-none"
            >
              <Dropdown.Toggle as={CustomToggle} className="btn btn-sm bg-body">
                <svg
                  className="icon-20"
                  width="20"
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
              </Dropdown.Toggle>
              <Dropdown.Menu
                variant="end"
                aria-labelledby="navbarDropdown-search-11"
                style={{ width: "25rem" }}
              >
                <div className="px-3 py-0">
                  <div className="form-group input-group mb-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                    <span className="input-group-text">
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
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown as="li" className="nav-item iq-tour ps-3 ps-lg-0">
              <Dropdown.Toggle
                as={CustomToggle}
                variant="py-0  d-flex align-items-center nav-link"
              >
                <div className="btn btn-primary btn-icon btn-sm rounded-pill">
                  <span className="btn-inner">
                    <svg
                      width="32"
                      className="icon-32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.997 15.1746C7.684 15.1746 4 15.8546 4 18.5746C4 21.2956 7.661 21.9996 11.997 21.9996C16.31 21.9996 19.994 21.3206 19.994 18.5996C19.994 15.8786 16.334 15.1746 11.997 15.1746Z"
                        fill="currentColor"
                      ></path>
                      <path
                        opacity="0.4"
                        d="M11.9971 12.5838C14.9351 12.5838 17.2891 10.2288 17.2891 7.29176C17.2891 4.35476 14.9351 1.99976 11.9971 1.99976C9.06008 1.99976 6.70508 4.35476 6.70508 7.29176C6.70508 10.2288 9.06008 12.5838 11.9971 12.5838Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu variant="end">
                <Dropdown.Item href="/womeyn/user-profile">
                  Profile
                </Dropdown.Item>
                <Dropdown.Item href="/dashboard/app/user-privacy-setting">
                  Privacy Setting
                </Dropdown.Item>
                <Dropdown.Item onClick={logOut}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ul>
        </div>
      </Container>
    </Navbar>
  );
});

Headerpro.displayName = "Headerpro";
export default Headerpro;
