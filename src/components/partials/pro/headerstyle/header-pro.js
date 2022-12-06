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

//img
import img1 from "../../../../assets/images/shapes/01.png";
import img2 from "../../../../assets/images/shapes/02.png";
import img3 from "../../../../assets/images/shapes/03.png";
import img4 from "../../../../assets/images/shapes/04.png";

// logo
import Logo from "../../components/logo";

// Redux Selector / Action
import { useSelector } from "react-redux";

// Import selectors & action from setting store
import * as SettingSelector from "../../../../store/setting/selectors";

import RadioBtn from "../../../setting/elements/radio-btn";
import loginServices from "../../../../services/login_services/login-services";
import { toast } from "react-toastify";

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
                    <svg
                      width="20"
                      className="icon-20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.14373 20.7821V17.7152C9.14372 16.9381 9.77567 16.3067 10.5584 16.3018H13.4326C14.2189 16.3018 14.8563 16.9346 14.8563 17.7152V20.7732C14.8562 21.4473 15.404 21.9951 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0007C21.1356 20.3586 21.5 19.4868 21.5 18.5775V9.86585C21.5 9.13139 21.1721 8.43471 20.6046 7.9635L13.943 2.67427C12.7785 1.74912 11.1154 1.77901 9.98539 2.74538L3.46701 7.9635C2.87274 8.42082 2.51755 9.11956 2.5 9.86585V18.5686C2.5 20.4637 4.04738 22 5.95617 22H7.87229C8.19917 22.0023 8.51349 21.8751 8.74547 21.6464C8.97746 21.4178 9.10793 21.1067 9.10792 20.7821H9.14373Z"
                        fill="currentColor"
                      />
                    </svg>
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
                    <svg
                      width="20"
                      className="icon-20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83V17.16C3 20.26 4.77 22 7.81 22H16.191C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.07999 6.64999V6.65999C7.64899 6.65999 7.29999 7.00999 7.29999 7.43999C7.29999 7.86999 7.64899 8.21999 8.07999 8.21999H11.069C11.5 8.21999 11.85 7.86999 11.85 7.42899C11.85 6.99999 11.5 6.64999 11.069 6.64999H8.07999ZM15.92 12.74H8.07999C7.64899 12.74 7.29999 12.39 7.29999 11.96C7.29999 11.53 7.64899 11.179 8.07999 11.179H15.92C16.35 11.179 16.7 11.53 16.7 11.96C16.7 12.39 16.35 12.74 15.92 12.74ZM15.92 17.31H8.07999C7.77999 17.35 7.48999 17.2 7.32999 16.95C7.16999 16.69 7.16999 16.36 7.32999 16.11C7.48999 15.85 7.77999 15.71 8.07999 15.74H15.92C16.319 15.78 16.62 16.12 16.62 16.53C16.62 16.929 16.319 17.27 15.92 17.31Z"
                        fill="currentColor"
                      />
                    </svg>
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
                    <svg
                      className="icon-20"
                      width="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M11.9912 18.6215L5.49945 21.8641C5.00921 22.1302 4.39768 21.9525 4.12348 21.4643C4.0434 21.3108 4.00106 21.1402 4 20.9668V13.7088C4 14.4284 4.40573 14.8726 5.47299 15.3701L11.9912 18.6215Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.89526 2H15.0695C17.7773 2 19.9735 3.06605 20 5.79337V20.9668C19.9989 21.1374 19.9565 21.3051 19.8765 21.4554C19.7479 21.7007 19.5259 21.8827 19.2615 21.9598C18.997 22.0368 18.7128 22.0023 18.4741 21.8641L11.9912 18.6215L5.47299 15.3701C4.40573 14.8726 4 14.4284 4 13.7088V5.79337C4 3.06605 6.19625 2 8.89526 2ZM8.22492 9.62227H15.7486C16.1822 9.62227 16.5336 9.26828 16.5336 8.83162C16.5336 8.39495 16.1822 8.04096 15.7486 8.04096H8.22492C7.79137 8.04096 7.43991 8.39495 7.43991 8.83162C7.43991 9.26828 7.79137 9.62227 8.22492 9.62227Z"
                        fill="currentColor"
                      />
                    </svg>
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
