import {memo,Fragment} from 'react'

// Components
import Card from '../../../../components/bootstrap/card'
import Autheffect from "../components/auth-effect"

// React-bootstrap
import { Row,Form,Button,Col} from 'react-bootstrap'

const Accountdeactivate = memo(() => {
    return (
        <Fragment>
            <div className="iq-auth-page">
                <Autheffect />
                <Row className="d-flex align-items-center iq-auth-container w-100">
                    <Col lg="4"  className="col-10  offset-lg-7 offset-1">
                        <Card>
                            <Card.Body>
                                <h4>Account De-activate</h4>
                                <p>Enter your details to de-activate your account</p>
                                <div className="form-group me-3">
                                    <Form.Label htmlFor ="email01">Email</Form.Label>
                                    <input type="email" className="form-control mb-0" id="email01" placeholder="Enter Email" />
                                </div>
                                <div className="form-group me-3">
                                    <Form.Label htmlFor="username01">Username</Form.Label>
                                    <input type="email" className="form-control mb-0" id="username01" placeholder="Enter Username" />
                                </div>
                                <Button>De-activate</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
})

Accountdeactivate.displayName="Accountdeactivate"
export default Accountdeactivate
