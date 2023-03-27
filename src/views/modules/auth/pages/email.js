import {memo,Fragment} from 'react'

// components
import Card from '../../../../components/bootstrap/card'

// React-bootstrap
import { Row, Col, Button } from 'react-bootstrap'

//component
import Autheffect from '../components/auth-effect'


const Authemail = memo(() => {
    return (
        <Fragment>
           <div className="iq-auth-page">
               <Autheffect />
                <Row className="align-items-center iq-auth-container  w-100">
                    <Col lg="4" className="col-10 offset-lg-7 offset-1">
                        <Card>
                            <Card.Body>
                                <h4 className="pb-3">Success!</h4>
                                <p>A email has been send to your email@domain.com. Please check for an email from company and click on the included link to reset your password.</p>
                                <Button>Back to home</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
})

Authemail.displayName="Authemail"
export default Authemail
