import { useState, memo, Fragment } from 'react'
// Router
import { Link, useNavigate } from 'react-router-dom'

// React-bootstrap
import { Button, Row, Col, ListGroup, ListGroupItem, Form } from 'react-bootstrap'

//Components 
import Card from '../../../../components/bootstrap/card'

const EditUser = memo((props) => {
    const stmacess = () => {
        document.getElementById('basic').classList.remove('show');
        document.getElementById('stmacs').classList.add('show');
        document.getElementById('iq-tracker-position-1').classList.remove('active');
        document.getElementById('iq-tracker-position-1').classList.add('done');
        document.getElementById('iq-tracker-position-2').classList.add('active');
    }
    const confirm = () => {
        document.getElementById('stmacs').classList.remove('show');
        document.getElementById('confirm').classList.add('show');
        document.getElementById('iq-tracker-position-2').classList.remove('active');
        document.getElementById('iq-tracker-position-2').classList.add('done');
        document.getElementById('iq-tracker-position-3').classList.add('active');
    }

    const goBack = () => {
        document.getElementById('basic').classList.add('show');
        document.getElementById('stmacs').classList.remove('show');
        document.getElementById('iq-tracker-position-2').classList.remove('active');
        document.getElementById('iq-tracker-position-2').classList.add('done');
        document.getElementById('iq-tracker-position-1').classList.add('active');
    }

    const goBack2 = () => {
        document.getElementById('stmacs').classList.add('show');
        document.getElementById('confirm').classList.remove('show');
        document.getElementById('iq-tracker-position-3').classList.remove('active');
        document.getElementById('iq-tracker-position-3').classList.add('done');
        document.getElementById('iq-tracker-position-2').classList.add('active');
    }

    return (
        <Fragment>
            <div className="title-with-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6661 6.66663H4.54191L8.94374 2.28357C9.19491 2.03271 9.33602 1.69246 9.33602 1.33769C9.33602 0.98291 9.19491 0.642664 8.94374 0.391799C8.69256 0.140934 8.35189 0 7.99668 0C7.64146 0 7.30079 0.140934 7.04961 0.391799L0.380176 7.05298C0.258738 7.17968 0.163545 7.32908 0.10006 7.49261C-0.0333532 7.81696 -0.0333532 8.18077 0.10006 8.50511C0.163545 8.66865 0.258738 8.81805 0.380176 8.94475L7.04961 15.6059C7.17362 15.7308 7.32115 15.8299 7.48369 15.8975C7.64624 15.9652 7.82059 16 7.99668 16C8.17276 16 8.34711 15.9652 8.50966 15.8975C8.6722 15.8299 8.81973 15.7308 8.94374 15.6059C9.06876 15.4821 9.16799 15.3347 9.23571 15.1724C9.30343 15.01 9.3383 14.8359 9.3383 14.66C9.3383 14.4842 9.30343 14.31 9.23571 14.1477C9.16799 13.9853 9.06876 13.838 8.94374 13.7142L4.54191 9.3311H14.6661C15.0199 9.3311 15.3592 9.19074 15.6093 8.9409C15.8595 8.69105 16 8.35219 16 7.99886C16 7.64553 15.8595 7.30667 15.6093 7.05683C15.3592 6.80699 15.0199 6.66663 14.6661 6.66663Z" fill="#232D42" />
                </svg>

                <h3>Edit User</h3>
            </div>
            <Row>
                <Col sm="12">
                    <ul className="text-center iq-product-tracker mb-0 py-4" id="progressbar">
                        <li className="active iq-tracker-position-0" id="iq-tracker-position-1">Basic Info</li>
                        <li className="iq-tracker-position-0" id="iq-tracker-position-2">System Access</li>
                        <li className="iq-tracker-position-0" id="iq-tracker-position-3">Confirm</li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        {/* <div className="card-header">
                            <h4>My Cart</h4>
                        </div> */}
                        <Card.Body className="p-0">
                            <div id="basic" className="iq-product-tracker-card show b-0">
                                <Form  >
                                    <div className='field-container'>
                                        <Form.Label htmlFor="validationServer01">Name</Form.Label>
                                        <Form.Control type="text" className={true ? "" : "is-valid"} id="validationServer01" defaultValue="" required />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                                    </div>

                                    <div className='field-container'>
                                        <Form.Label htmlFor="validationServer01">Email Address</Form.Label>
                                        <Form.Control type="text" className={true ? "" : "is-valid"} id="validationServer01" defaultValue="" required />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                                    </div>
                                    <div className='field-container'>
                                        <Form.Label htmlFor="validationServer01">Contact Details</Form.Label>
                                        <Form.Control type="text" className={true ? "" : "is-valid"} id="validationServer01" defaultValue="" required />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                                    </div>
                                    <hr className="hr-horizontal" />
                                    <div>
                                        <Button variant="secondary">Cancel</Button>{' '}

                                        <Button variant="primary" onClick={stmacess} className='margin-left-button '>Continue</Button>{' '}

                                    </div>
                                </Form>
                            </div>
                            <div id="stmacs" className="iq-product-tracker-card  b-0">
                                <div className='field-container'>
                                    <ListGroupItem as="label">
                                        <input className="form-check-input me-5" type="checkbox" defaultValue="" />
                                        Admin Dashboard
                                    </ListGroupItem>
                                </div>

                                <div className='field-container'>
                                    <ListGroupItem as="label">
                                        <input className="form-check-input me-5" type="checkbox" defaultValue="" />
                                        Seller Dashboard
                                    </ListGroupItem>
                                </div>
                                <div className='field-container'>
                                    <ListGroupItem as="label">
                                        <input className="form-check-input me-5" type="checkbox" defaultValue="" />
                                        End Customer Dashboard
                                    </ListGroupItem>
                                </div>
                                <div className='field-container'>
                                    <ListGroupItem as="label">
                                        <input className="form-check-input me-5" type="checkbox" defaultValue="" />
                                        Support and Query Dashboard
                                    </ListGroupItem>
                                </div>

                                <hr className="hr-horizontal" />
                                <div>
                                    <Button variant="secondary" onClick={goBack}>Cancel</Button>{' '}

                                    <Button variant="primary" onClick={confirm} className='margin-left-button '>Continue</Button>{' '}

                                </div>
                            </div>
                            <div id="confirm" className="iq-product-tracker-card  b-0">
                                <Form  >
                                    <div className='field-container'>
                                        <Form.Label htmlFor="validationServer01">Email Address</Form.Label>
                                        <Form.Control type="text" className={true ? "" : "is-valid"} id="validationServer01" defaultValue="" required />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                                    </div>
                                    <div className='user-card-content field-container'>
                                        <Form.Label htmlFor="validationServer01">Permissions Given</Form.Label>
                                        <div className='permission flex-container'>
                                            <span>Seller approval</span>
                                            <span>Ticket management</span>
                                            <span>Account Admin</span>
                                        </div>
                                    </div>
                                    <hr className="hr-horizontal" />
                                    <Button variant="secondary" onClick={goBack2}>Cancel</Button>{' '}

                                    <Button variant="primary" onClick={() => {
                                    }} className='margin-left-button '>Save Updates</Button>{' '}

                                </Form>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
})

EditUser.displayName = "EditUser"
export default EditUser