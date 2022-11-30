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
// import { forgetPasswordEmailSend } from "./api/Post";
import { Modal } from "bootstrap";
import "./styles.scss";
import { forgotPasswordServices } from "../../../services/forgotPassword-services/forgotPassword-services";

const ForgetPassword = memo(() => {
  const userefs = useRef(null);

  const appName = useSelector(SettingSelector.app_name);
  let history = useNavigate();

  const [formState, setFormState] = useState(true);
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
          console.log(res?.data, "forget password");
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
      <section className="login-content">
        <Row className="m-0 align-items-center bg-white vh-100">
          <Col
            md="6"
            className="d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden"
          >
            <Image
              src={auth2}
              className="img-fluid gradient-main animated-scaleX"
              alt="images"
            />
          </Col>
          <Col md="6" className="p-0">
            <Card className="card-transparent auth-card shadow-none d-flex justify-content-center mb-0">
              <Card.Body>
                <h2 className="mb-2 mb-3">Reset Password</h2>
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
                          isValid={formik.touched.email && !formik.errors.email}
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
                  <Button className="mt-5 reset-button" type="submit">
                    Reset Password
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            <div className="sign-bg sign-bg-right">
              <svg
                width="280"
                height="230"
                viewBox="0 0 431 398"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.05">
                  <rect
                    x="-157.085"
                    y="193.773"
                    width="543"
                    height="77.5714"
                    rx="38.7857"
                    transform="rotate(-45 -157.085 193.773)"
                    fill="#3B8AFF"
                  />
                  <rect
                    x="7.46875"
                    y="358.327"
                    width="543"
                    height="77.5714"
                    rx="38.7857"
                    transform="rotate(-45 7.46875 358.327)"
                    fill="#3B8AFF"
                  />
                  <rect
                    x="61.9355"
                    y="138.545"
                    width="310.286"
                    height="77.5714"
                    rx="38.7857"
                    transform="rotate(45 61.9355 138.545)"
                    fill="#3B8AFF"
                  />
                  <rect
                    x="62.3154"
                    y="-190.173"
                    width="543"
                    height="77.5714"
                    rx="38.7857"
                    transform="rotate(45 62.3154 -190.173)"
                    fill="#3B8AFF"
                  />
                </g>
              </svg>
            </div>
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
                    If you are a registered customer, you will receive a
                    password reset link in your email. Please follow the
                    instruction and Reset your password.
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
      </section>
    </Fragment>
  );
});

ForgetPassword.displayName = "ForgetPassword";
export default ForgetPassword;
