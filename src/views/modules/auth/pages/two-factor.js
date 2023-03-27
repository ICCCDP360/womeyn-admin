import {memo,Fragment} from 'react'

// React-bootstrap
import { Row, Col, Form, Button } from 'react-bootstrap'

//Components
import Autheffect from '../components/auth-effect'
import Card from '../../../../components/bootstrap/card'

const Twofactor = memo(() => {
    return (
        <Fragment>
            <div className="iq-auth-page">
                <Autheffect />
                <Row className="align-items-center iq-auth-container w-100">
                    <Col lg="4" className="col-10 offset-lg-7 offset-1">
                        <Card>
                            <Card.Body>
                                <h4 className="pb-2">Two Factor -Verification</h4>
                                <p>Enter your email address and we’ll send you an email with instructions to reset your password</p>
                                <div className="form-group me-3">
                                    <Form.Label for="otp01">Enter the OTP you recieved to veify your device</Form.Label>
                                    <Form.Control type="email" className="mb-0" id="otp01" placeholder="Enter OTP" />
                                </div>
                                <Button>Verify</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
})

Twofactor.displayName="Twofactor"
export default Twofactor
