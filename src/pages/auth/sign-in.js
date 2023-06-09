import { Fragment, memo, useEffect, useState } from "react";

//react-bootstrap
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";

//router
import { Link, Navigate, useNavigate } from "react-router-dom";

// Import selectors & action from setting store
import * as SettingSelector from "../../store/setting/selectors";

// Redux Selector / Action
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import loginServices from "../../services/login_services/login-services";

import { Field, useFormik } from "formik";
import * as Yup from "yup";
import { ReactComponent as Home } from "../../assets/home.svg";
import circlethree from "../../assets/loginLogos/circle.svg";
import login from "../../assets/loginLogos/login.png";
import logowomenyn from "../../assets/loginLogos/new-womeyn.svg";
import "./Signin.scss";

const SignIn = memo(() => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      // confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email Required"),
      password: Yup.string()
        .min(5, "Atleast 6 characters long")
        .max(50, "Too Long")
        .required("Password Required"),
    }),
    onSubmit: (values) => {
      var email = values.email;
      var password = values.password;
      const datas = {
        email: email,
        password: password,
      };
      loginServices
        .login(datas)
        .then(async (result) => {
          if (result.tokens) {
            let auth_set = await loginServices.asyncAuthStorage(result);
            if (auth_set) {
              toast.success("User Logged in Successfully");
              setTimeout(() => {
                history("/womeyn/dashboard");
              }, 1500);
            }
          }
        })
        .catch((err) => {
          if (err) {
            toast.error(`${err?.response?.data?.message}`);
          }
        });
    },
  });

  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    loginServices.useAuth().then((result) => {
      if (result) {
        setAuth(result);
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  }, [auth]);
  const appName = useSelector(SettingSelector.app_name);
  let history = useNavigate();
  const authUser = (e) => {
    e.preventDefault();
    e.persist();
  };
  if (!auth && !loading) {
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
                <img src={logowomenyn} alt="no image" className="logo-womeyn" />
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
                      <h2 className="mb-2 text-center mb-5">Sign In</h2>
                      {/* <p className="text-center">Login to stay connected.</p> */}
                      <Form onSubmit={formik.handleSubmit}>
                        <Row>
                          <Col sm="12" md="12" lg="12" className="form-group">
                            <Form.Group controlId="firstName">
                              <Form.Label>Email</Form.Label>
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
                          <br />
                          <Col sm="12" md="12" lg="12" className="form-group">
                            <Form.Group controlId="password">
                              <Form.Label>Password</Form.Label>
                              <Form.Control
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                isValid={
                                  formik.touched.password &&
                                  !formik.errors.password
                                }
                                isInvalid={
                                  formik.touched.password &&
                                  !!formik.errors.password
                                }
                              />
                              <Form.Text className="text-danger">
                                {formik.touched.password &&
                                formik.errors.password ? (
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
                          <Col
                            lg="12"
                            className="d-flex justify-content-between"
                          >
                            <Form.Check className="form-check mb-3">
                              <Form.Check.Input
                                type="checkbox"
                                id="customCheck1"
                                name="remember"
                              />
                              <Form.Check.Label htmlFor="customCheck1">
                                Remember Me
                              </Form.Check.Label>
                            </Form.Check>
                            <Link to="/forgot-password">Forgot Password?</Link>
                          </Col>
                        </Row>
                        <div className="d-flex justify-content-center">
                          <Button type="submit" variant="btn btn-primary">
                            Sign In
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  } else if (!loading && auth) {
    return <Navigate to="/womeyn/dashboard"></Navigate>;
  }
});

SignIn.displayName = "SignIn";
export default SignIn;
