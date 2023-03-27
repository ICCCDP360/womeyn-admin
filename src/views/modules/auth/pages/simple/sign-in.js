import {memo,Fragment} from 'react'

// React-bootstrap
import { Row, Col, Image, FormCheck, Form,Button } from 'react-bootstrap'

// Components
import Card from '../../../../../components/bootstrap/card'

// Router
import { Link } from 'react-router-dom'

//Img
import img1 from '../../../../../assets/images/brands/fb.svg'
import img2 from '../../../../../assets/images/brands/gm.svg'
import img3 from '../../../../../assets/images/brands/im.svg'
import img4 from '../../../../../assets/images/brands/li.svg'
import img5 from '../../../../../assets/images/dashboard/top-image.jpg'

const SignIn = memo(() => {
    return (
        <Fragment>
            <section className="iq-auth-page" style={{ background: `url(${img5})`, backgroundRepeat: 'no-repeat', position: 'relative', backgroundSize: 'cover' }}>
                <Row className="d-flex align-items-center justify-content-center vh-100 w-100">
                    <Col md="4" xl="4">
                        <Card className="p-4">
                            <Card.Body>
                                <h3 className="text-center">Sign In</h3>
                                <p className="text-center">Sign in to stay connected</p>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" className="mb-0" placeholder="Enter email"></Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" className="mb-0" placeholder="Enter password"></Form.Control>
                                </Form.Group>
                                <div className="d-flex justify-content-between">
                                    <Form.Check className="d-inline-block mt-2 pt-1">
                                        <FormCheck.Input type="checkbox" id="customCheck11"></FormCheck.Input>
                                        <Form.Check.Label htmlFor="customCheck11">Remember Me</Form.Check.Label>
                                    </Form.Check>
                                    <Link to="#">Forget password</Link>
                                </div>
                                <div className="text-center pb-3">
                                    <Button href="#">Sign in</Button>
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
                                <p className="text-center">Don't have account?<Link to="/auth/simple/sign-up"> Click here to sign up.</Link></p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </Fragment>
    )
})

SignIn.displayName="SignIn"
export default SignIn
