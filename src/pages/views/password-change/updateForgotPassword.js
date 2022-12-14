import { memo, Fragment, useState } from "react";

//react-bootstrap
import { Row, Col, Image, Form, Button, Spinner } from "react-bootstrap";

//router
import { Link, useNavigate } from "react-router-dom";

//components
import Card from "../../../components/bootstrap/card";

// img
import auth2 from "../../../assets/images/auth/02.png";

// Import selectors & action from setting store
import * as SettingSelector from "../../../store/setting/selectors";

//images
import logowomenyn from "../../../assets/loginLogos/women_white_log.svg";
import circlethree from "../../../assets/loginLogos/circle.svg";
import login from "../../../assets/loginLogos/login.png";
import circleone from "../../../assets/loginLogos/circle2.svg";
import circletwo from "../../../assets/loginLogos/circle1.svg";
import qutations from "../../../assets/loginLogos/quatation.svg";

import "../../auth/Signin.scss";

// Redux Selector / Action
import { useSelector } from "react-redux";
import { useFormik, Field } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { changePasswordServices } from "../../../services/change-password/changePassword-services";
const UpdateForgotPassword = memo(() => {
  const queryParameters = new URLSearchParams(window.location.search);
  const nameToken = queryParameters.get("token");

  const appName = useSelector(SettingSelector.app_name);
  let history = useNavigate();
  const [formState, setFormState] = useState(true);

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, "Atleast 8 characters long")
        .max(50, "Too Long")
        .required("password Required"),
      confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
    }),
    onSubmit: (values) => {
      var password = values.password;
      var confirmPassword = values.confirmPassword;
      const datas = {
        password: password,
      };
      console.log(datas, "kalai forgetpassword repeat password!!");
      changePasswordServices(nameToken, datas)
        .then((res) => {
          console.log("====================================");
          console.log(res?.data);
          console.log("====================================");
          toast.success("User Password Chnaged 😃");
          setTimeout(() => {
            history("/");
          }, 1000);
        })
        .catch((err) => {
          console.log("====================================");
          console.log(err);
          console.log("====================================");
          toast.error(`${err?.response?.data?.message} 😬`);
        });
    },
  });

  return (
    <Fragment>
      <section className="login-content">
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
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                height: "94%",
                paddingTop: "7%",
              }}
            >
              <img src={login} className="Image-fluid" alt="images" />
            </div>
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
                      <Form.Group controlId="newPassword" className="mt-3">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control
                          name="password"
                          type="password"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.password}
                          isValid={
                            formik.touched.password && !formik.errors.password
                          }
                          isInvalid={
                            formik.touched.password && !!formik.errors.password
                          }
                        />
                        <Form.Text className="text-danger">
                          {formik.touched.password && formik.errors.password ? (
                            <div className="text-danger">
                              {formik.errors.password}
                            </div>
                          ) : null}
                        </Form.Text>
                        <Form.Control.Feedback type="valid">
                          Looks Good! 😎
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col lg="12" className="col-lg-12 ">
                      <Form.Group controlId="confirmPassword" className="mt-3">
                        <Form.Label>Repeat New Password</Form.Label>
                        <Form.Control
                          name="confirmPassword"
                          type="password"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.confirmPassword}
                          isValid={
                            formik.touched.confirmPassword &&
                            !formik.errors.confirmPassword
                          }
                          isInvalid={
                            formik.touched.confirmPassword &&
                            !!formik.errors.confirmPassword
                          }
                        />
                        <Form.Text className="text-danger">
                          {formik.touched.confirmPassword &&
                          formik.errors.confirmPassword ? (
                            <div className="text-danger">
                              {formik.errors.confirmPassword}
                            </div>
                          ) : null}
                        </Form.Text>
                        <Form.Control.Feedback type="valid">
                          Looks Good! 😎
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button className="mt-5" type="submit" variant="primary">
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
      </section>
    </Fragment>
  );
});

UpdateForgotPassword.displayName = "UpdateForgotPassword";
export default UpdateForgotPassword;
