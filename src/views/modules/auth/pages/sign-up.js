import { memo, Fragment } from 'react'

// React-bootstrap
import { Row, Col, Form, Image, Button } from 'react-bootstrap'

// Router
import { Link } from 'react-router-dom'

//Img
import img1 from '../../../../assets/images/brands/fb.svg'
import img2 from '../../../../assets/images/brands/gm.svg'
import img3 from '../../../../assets/images/brands/im.svg'
import img4 from '../../../../assets/images/brands/li.svg'

//Component
import Autheffect from '../components/auth-effect'
import Card from '../../../../components/bootstrap/card'

const Signup = memo(() => {
    return (
        <Fragment>
            <div className="iq-auth-page">
                {/* <Autheffect /> */}
                <Row className="d-flex align-items-center iq-auth-container w-100">
                    <Col lg="4" className="col-10 offset-lg-7 offset-1">
                        <Card>
                            <Card.Body>
                                <div className="mb-3">
                                    <h3 className="text-center">Sign Up</h3>
                                    <p className="text-center">Create your Hope UI account</p>
                                </div>
                                <Row className="d-flex justify-content-between">
                                    <Col sm="12" md="6" className="form-group">
                                        <Form.Label className="form-label" htmlFor="firstName">First Name</Form.Label>
                                        <input type="email" className="form-control mb-0" id="firstName" placeholder="Enter First Name" />
                                    </Col>
                                    <Col sm="12" md="6" className="form-group">
                                        <Form.Label className="form-label" htmlFor="lastname">Last Name</Form.Label>
                                        <input type="password" className="form-control mb-0" id="lastname" placeholder="Enter Last Name" />
                                    </Col>
                                </Row>
                                <Row className="d-flex justify-content-between">
                                    <Col sm="12" md="6" className="form-group">
                                        <Form.Label className="form-label" htmlFor="Emailid">Email</Form.Label>
                                        <input type="email" className="form-control mb-0" id="Emailid" placeholder="Enter Email" />
                                    </Col>
                                    <div className="form-group col-sm-12 col-md-6">
                                        <Form.Label className="form-label" htmlFor="Phone_NO">Phone No.</Form.Label>
                                        <input type="password" className="form-control mb-0" id="Phone_NO" placeholder="Enter Phone Number" />
                                    </div>
                                </Row>
                                <Row className="d-flex justify-content-between">
                                    <Col sm="12" md="6" className="form-group">
                                        <Form.Label className="form-label" htmlFor="firstPassword">Password</Form.Label>
                                        <input type="email" className="form-control mb-0" id="firstPassword" placeholder="Enter Password" />
                                    </Col>
                                    <Col sm="12" md="6" className="form-group">
                                        <Form.Label className="form-label" htmlFor="ConfirmPAssword">Confirm Password</Form.Label>
                                        <input type="password" className="form-control mb-0" id="ConfirmPAssword" placeholder="Enter Confirm Password" />
                                    </Col>
                                </Row>
                                <div className="text-center pb-3">
                                    <input type="checkbox" className="form-check-input" id="aggrement-hopeui" />
                                    <Form.Label className="form-check-label" htmlFor="aggrement-hopeui">I agree with the terms of use</Form.Label>
                                </div>
                                <div className="text-center pb-3">
                                    <Button>Sign in</Button>
                                </div>
                                <p className="text-center">Or sign in with other accounts?</p>
                                <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
                                    <Link to="#"><Image src={img1} alt="fb" loading="lazy" /></Link>
                                    <Link to="#"><Image src={img2} alt="gm" loading="lazy" /></Link>
                                    <Link to="#"><Image src={img3} alt="im" loading="lazy" /></Link>
                                    <Link to="#"><Image src={img4} alt="li" loading="lazy" /></Link>
                                </div>
                                <p className="text-center">Already have an Account <Link to="/auth/simple/sign-in" className="ms-2">sign in</Link></p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
}
)

Signup.displayName = "Signup"
export default Signup
