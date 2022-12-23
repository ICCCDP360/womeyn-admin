import { memo, Fragment, useState, useRef } from "react";

//react-bootstrap
import { Row, Col, Image, Form, Button } from "react-bootstrap";

//router
import { Link, useNavigate } from "react-router-dom";

//components
import Card from "../../../components/bootstrap/card";

// img
import auth2 from "../../../assets/images/auth/02.png";

// Import selectors & action from setting store
import * as SettingSelector from "../../../store/setting/selectors";

// Redux Selector / Action
import { useSelector } from "react-redux";
import { useFormik, Field } from "formik";
import * as Yup from "yup";

import { toast } from "react-toastify";
import { Modal } from "bootstrap";
import "./styles.scss";
// import { forgotPasswordServices } from "../../../services/forgotPassword-services/forgotPassword-services";
import { forgotPasswordServices } from "../../../services/password/passwordServices";
import logowomenyn from "../../../assets/loginLogos/women_white_log.svg";
import circlethree from "../../../assets/loginLogos/circle.svg";
import login from "../../../assets/loginLogos/login.png";
import "../../auth/Signin.scss";

const ForgetPassword = memo(() => {
  const userefs = useRef(null);

  const appName = useSelector(SettingSelector.app_name);
  let history = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email Required"),
    }),
    onSubmit: (values) => {
      var email = values.email;
      const data = {
        email: email,
      };
      forgotPasswordServices(data)
        .then((res) => {
          toast.success(`Check Your Mail 😃`);
          showModal();
        })
        .catch((err) => {
          toast.error(`${err?.response?.data?.message} 😬`);
        });
    },
  });

  const showModal = () => {
    const modalEle = userefs.current;
    const bsModal = new Modal(modalEle, {
      backdrop: "static",
      keyboard: false,
    });
    bsModal.show();
  };

  const hideModal = () => {
    const modalEle = userefs.current;
    const bsModal = Modal.getInstance(modalEle);
    bsModal.hide();
  };

  const loginnavigate = () => {
    history(`/`);
    hideModal();
  };

  return (
    <Fragment>
      <div className="signin">
        <Row>
          <Col
            lg="6"
            md="6"
            className="d-md-block d-none bg-primarys p-0 vh-100 overflow-hidden left"
          >
            <div className="logo">
              <img src={logowomenyn} alt="no image" />
            </div>
            <div className="circle">
              <img src={circlethree} alt="no image" className="circles" />
            </div>
            <div className="sellers">
              <h5 className="we">We are trusted by </h5>
              <div>
                <h6 className="seller">Sellers</h6>
              </div>
            </div>
            <div className="logo-image">
              <img src={login} className="Image-fluid" alt="images" />
            </div>
          </Col>
          <Col lg="6" md="6" className="singup-right-section">
            <Row className="justify-content-center align-items-center d-flex">
              <Col md="10">
                <div className=" justify-content-center mb-0 auth-card">
                  <div>
                    <Link
                      to="/womeyn"
                      className="navbar-brand d-flex align-items-center mb-3"
                    >
                      {/* <Logo></Logo> */}
                      <h4 className="logo-title ms-3">{appName}</h4>
                    </Link>
                    <h2 className="mb-2 mb-3">Forgot Password</h2>
                    <p className="mb-4 mt-3">
                      Enter your email address and we'll send you an email with
                      instructions to reset your password.
                    </p>
                    <Form onSubmit={formik.handleSubmit}>
                      <Row>
                        <Col lg="12" className="col-lg-12">
                          <Form.Group controlId="firstName">
                            <Form.Label>Email Id</Form.Label>
                            <Form.Control
                              name="email"
                              type="email"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.email}
                              isValid={
                                formik.touched.email && !formik.errors.email
                              }
                              isInvalid={
                                formik.touched.email && !!formik.errors.email
                              }
                            />
                            <Form.Text className="text-danger">
                              {formik.touched.email && formik.errors.email ? (
                                <div className="text-danger">
                                  {formik.errors.email}
                                </div>
                              ) : null}
                            </Form.Text>
                            <Form.Control.Feedback type="valid">
                              Looks Good! 😎
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Button
                        className="mt-5 reset-button"
                        onClick={() => history(`/`)}
                      >
                        Back
                      </Button>
                      <Button className="mt-5 ms-5 reset-button" type="submit">
                        Send Email
                      </Button>
                    </Form>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <>
          <p
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          ></p>
          <div
            class="modal fade modal-bodys"
            id="staticBackdrop"
            ref={userefs}
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                  <div className="mt-5 mb-5">
                    We have sent you a password reset link in your email. Please
                    follow the instruction and Reset your password.
                  </div>

                  <div className="mt-4 mb-5 button-forgetpassword">
                    <Button onClick={loginnavigate} className="reset-button">
                      Login
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </Fragment>
  );
});

ForgetPassword.displayName = "ForgetPassword";
export default ForgetPassword;
