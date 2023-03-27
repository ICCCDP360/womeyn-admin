import {memo,Fragment} from 'react'

// React-bootstrap
import { Row, Col, Form, Button } from 'react-bootstrap'


//Components
import Autheffect from '../components/auth-effect'
import Card from '../../../../components/bootstrap/card'

const Resetpassword = memo(() => {
    return (
        <Fragment>
            <div className="iq-auth-page">
                <Autheffect />
                <Row className="align-items-center iq-auth-container w-100">
                    <Col lg="4" className="col-10 offset-lg-7 offset-1">
                        <Card>
                            <Card.Body>
                                <h4>Reset Password</h4>
                                <p>Enter your email address and we’ll send you an email with instructions to reset your password</p>
                                <div className="form-group me-3">
                                        <Form.Label >Email</Form.Label>
                                        <Form.Control type="email" className="mb-0"  placeholder="Enter Email" />
                                    </div>
                                <Button>Reset</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
})

Resetpassword.displayName="Resetpassword"
export default Resetpassword
