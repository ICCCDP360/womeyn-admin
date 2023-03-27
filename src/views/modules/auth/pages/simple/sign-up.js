import {memo,Fragment} from 'react'

// React-bootstrap
import { Row, Col,Image,Form} from 'react-bootstrap'

// components
import  Card from '../../../../../components/bootstrap/card'

// router
import { Link } from 'react-router-dom'

//img
import img1 from '../../../../../assets/images/brands/fb.svg'
import img2 from '../../../../../assets/images/brands/gm.svg'
import img3 from '../../../../../assets/images/brands/im.svg'
import img4 from '../../../../../assets/images/brands/li.svg'
import img5 from '../../../../../assets/images/dashboard/top-image.jpg'

const SignUp = memo(() => {
    return (
        <Fragment>
            <section className="iq-auth-page" style={{ background: `url(${img5})`, backgroundRepeat: 'no-repeat', position: 'relative', backgroundSize: 'cover' }}>
                <Row className="d-flex align-items-center justify-content-center vh-100 w-100">
                    <Col md="4" xl="4">
                        <Card className="p-4">
                            <Card.Body>
                                <h3 className="text-center">Sign Up</h3>
                                <p className="text-center">Create your Hope UI account</p>
                                <Row className="d-flex justify-content-between">
                                    <Form.Group className="form-group col-6">
                                        <Form.Label className="form-label">First Name</Form.Label>
                                        <Form.Control type="email" className="mb-0" placeholder="Enter First Name"></Form.Control>
                                    </Form.Group>
                                    <Form.Group className="form-group col-6">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="password" className="mb-0" placeholder="Enter Last Name"></Form.Control>
                                    </Form.Group>
                                </Row>
                                <Row className="d-flex justify-content-between">
                                    <Form.Group className="form-group col-6">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" className="mb-0" placeholder="Enter Email"></Form.Control>
                                    </Form.Group>
                                    <Form.Group className="form-group col-6">
                                        <Form.Label>Phone No.</Form.Label>
                                        <Form.Control type="password" className="mb-0" placeholder="Enter Phone Number"></Form.Control>
                                    </Form.Group>
                                </Row>
                                <Row className="d-flex justify-content-between">
                                    <Form.Group className="form-group col-6">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="email" className="mb-0" placeholder="Enter Password"></Form.Control>
                                    </Form.Group>
                                    <Form.Group className="form-group col-6 mb-3">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type="password" className="mb-0" placeholder="Enter Confirm Password"></Form.Control>
                                    </Form.Group>
                                </Row>
                                <div className="text-center pb-3">
                                    <input type="checkbox" className="form-check-input me-1" id="aggrement-hopeui" />
                                    <Form.Label className="form-check-label" htmlFor="aggrement-hopeui">I agree with the terms of use</Form.Label>
                                </div>
                                <div className="text-center pb-3">
                                    <Link className="btn btn-primary" to="/auth/simple/sign-in" role="button">Sign in</Link>
                                </div>
                                <p className="text-center">Or sign in with other accounts?</p>
                                <div className="d-flex justify-content-center">
                                    <ul className="list-group list-group-horizontal list-group-flush">
                                        <li className="list-group-item border-0 pb-0">
                                            <Link to="#"><Image src={img1} alt="fb" /></Link>
                                        </li>
                                        <li className="list-group-item border-0 pb-0">
                                            <Link to="#"><Image src={img2} alt="gm" /></Link>
                                        </li>
                                        <li className="list-group-item border-0 pb-0">
                                            <Link to="#"><Image src={img3} alt="im" /></Link>
                                        </li>
                                        <li className="list-group-item border-0 pb-0">
                                            <Link to="#"><Image src={img4} alt="li" /></Link>
                                        </li>
                                    </ul>
                                </div>
                                <p className="text-center">Already have an Account<Link to="/auth/simple/sign-in">Sign in</Link></p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </Fragment>
    )
})

SignUp.displayName="SignUp"
export default SignUp
