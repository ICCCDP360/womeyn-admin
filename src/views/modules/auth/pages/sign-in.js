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

const Signin = memo(() => {
    return (
        <Fragment>
            <div className="iq-auth-page">
                {/* <Autheffect /> */}
                <Row className="d-flex align-items-center iq-auth-container w-100">
                    <Col xl="4" className="col-10 offset-xl-7 offset-1">
                        <Card>
                            <Card.Body>
                                <h3 className="text-center">Sign In</h3>
                                <p className="text-center">Sign in to stay connected</p>
                                <div className="form-group">
                                    <Form.Label htmlFor="email-id">Email address</Form.Label>
                                    <input type="email" className="form-control mb-0" id="email-id" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <Form.Label htmlFor="password">Password</Form.Label>
                                    <input type="password" className="form-control mb-0" id="password" placeholder="Enter password" />
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <Form.Check className="form-check d-inline-block pt-1 mb-0">
                                        <input type="checkbox" className="form-check-input" id="customCheck11" />
                                        <Form.Label className="form-check-label" htmlFor="customCheck11">Remember Me</Form.Label>
                                    </Form.Check>
                                    <Link to="/auth/reset-password">Forget password</Link>
                                </div>
                                <div className="text-center pb-3">
                                    <Button>Sign in</Button>
                                </div>
                                <p className="text-center">Or sign in with other accounts?</p>
                                <div className="d-flex justify-content-center">
                                    <ul className="list-group list-group-horizontal list-group-flush">
                                        <li className="list-group-item border-0 pb-0">
                                            <Link to="#"><Image src={img1} alt="fb" loading="lazy" /></Link>
                                        </li>
                                        <li className="list-group-item border-0 pb-0">
                                            <Link to="#"><Image src={img2} alt="gm" loading="lazy" /></Link>
                                        </li>
                                        <li className="list-group-item border-0 pb-0">
                                            <Link to="#"><Image src={img3} alt="im" loading="lazy" /></Link>
                                        </li>
                                        <li className="list-group-item border-0 pb-0">
                                            <Link to="#"><Image src={img4} alt="li" loading="lazy" /></Link>
                                        </li>
                                    </ul>
                                </div>
                                <p className="text-center">Don't have account?<Link to="/auth/sign-up" className="ms-2"> Click here to sign up.</Link></p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
})

Signin.displayName = "Signin"
export default Signin
