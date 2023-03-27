import {memo,Fragment} from 'react'

// React-bootstrap
import { Row, Col, Form, Image, Button } from 'react-bootstrap'

//Img
import img1 from '../../../../assets/images/avatars/01.png'


// Components
import Card from '../../../../components/bootstrap/card'
import Autheffect from '../components/auth-effect'


const Lockscreen = memo(() => {
    return (
        <Fragment>
            <div className="iq-auth-page">
                <Autheffect />
                <Row className="align-items-center iq-auth-container w-100">
                    <Col lg="4" className="col-10 offset-lg-7 offset-1">
                        <Card>
                            <Card.Body>
                                <Image src={img1} alt="User-Profile" className="theme-color-default-img img-fluid avatar avatar-50 avatar-rounded" loading="lazy" />
                            <h4>Hi ! Austin Robertson</h4>
                            <p>Enter your password to acess the admin.</p>
                            <div className="form-group me-3">
                                    <Form.Label  htmlFor="lock-pass">Password</Form.Label>
                                    <Form.Control type="email" className="mb-0" id="lock-pass" placeholder="Enter Password" />
                                </div>
                            <Button>Login</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
})

Lockscreen.displayName="Lockscreen"
export default Lockscreen
