import { useState, memo, Fragment } from 'react'
// Router
import { Link, useNavigate } from 'react-router-dom'

// React-bootstrap
import { Button, Row, Col, ListGroup, ListGroupItem, Form } from 'react-bootstrap'

//Components 
import Card from '../../../components/bootstrap/card';

const AddUser = memo((props) => {
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

                <h3>Add User</h3>
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

AddUser.displayName = "AddUser"
export default AddUser