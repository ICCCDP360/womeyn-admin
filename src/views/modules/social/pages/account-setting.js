import React,{memo,Fragment} from 'react'

// React-bootstrap
import {Row,Col, Container,Form, Button} from 'react-bootstrap'

//components
import Card from '../../../../components/bootstrap/card'

const Accountsetting = memo(() => {
  return (
    <Fragment>
        <Container fluid>
            <Row>
                <Col lg="6">
                    <Card>
                        <Card.Header className="d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">Account Setting</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="acc-edit">
                                <Form>
                                    <div className="form-group">
                                        <Form.Label htmlFor="uname">User Name:</Form.Label>
                                        <Form.Control type="text" id="uname" defaultValue="Barry@01" />
                                    </div>
                                    <div className="form-group">
                                        <Form.Label  htmlFor="email">Email Id:</Form.Label>
                                        <Form.Control type="email"  id="email" defaultValue="Barryjohn@gmail.com" />
                                    </div>
                                    <div className="form-group">
                                        <Form.Label  htmlFor="altemail">Alternate Email:</Form.Label>
                                        <Form.Control type="email" id="altemail" defaultValue="designtheme@gmail.com" />
                                    </div>
                                    <div className="form-group">
                                        <Form.Label className="form-label d-block">Language Known:</Form.Label>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="english" defaultChecked="" />
                                            <Form.Label className="form-check-label" htmlFor="english">English</Form.Label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="french" defaultChecked="" />
                                            <Form.Label className="form-check-label" htmlFor="french">French</Form.Label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="hindi" />
                                            <Form.Label className="form-check-label" htmlFor="hindi">Hindi</Form.Label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="spanish" defaultChecked="" />
                                            <Form.Label className="form-check-label" htmlFor="spanish">Spanish</Form.Label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="arabic" />
                                            <Form.Label className="form-check-label" htmlFor="arabic">Arabic</Form.Label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="italian" />
                                            <Form.Label className="form-check-label" htmlFor="italian">Italian</Form.Label>
                                        </div>
                                    </div>
                                    <Button>Submit</Button>
                                    <Button type="reset" variant="mm-bg-danger">Cancel</Button>
                                </Form>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="6">
                    <Card>
                        <Card.Header className="d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">Social Media</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="acc-edit">
                                <Form>
                                    <div className="form-group">
                                        <Form.Label className="form-label" htmlFor="facebook">Facebook:</Form.Label>
                                        <Form.Control type="text"  id="facebook" defaultValue="www.facebook.com" />
                                    </div>
                                    <div className="form-group">
                                        <Form.Label className="form-label" htmlFor="twitter">Twitter:</Form.Label>
                                        <Form.Control type="text"  id="twitter" defaultValue="www.twitter.com" />
                                    </div>
                                    <div className="form-group">
                                        <Form.Label className="form-label" htmlFor="LinkedIn">Linked In:</Form.Label>
                                        <Form.Control type="text"  id="LinkedIn" defaultValue="www.linkedin.com" />
                                    </div>
                                    <div className="form-group">
                                        <Form.Label className="form-label" htmlFor="instagram">Instagram:</Form.Label>
                                        <Form.Control type="text"  id="instagram" defaultValue="www.instagram.com" />
                                    </div>
                                    <div className="form-group">
                                        <Form.Label className="form-label" htmlFor="youtube">You Tube:</Form.Label>
                                        <Form.Control type="text"  id="youtube" defaultValue="www.youtube.com" />
                                    </div>
                                    <Button type="submit">Submit</Button>
                                    <Button type="reset" variant="mm-bg-danger">Cancel</Button>
                                </Form>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </Fragment>
  )
})

export default Accountsetting