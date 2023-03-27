import {memo,Fragment} from 'react'

//React-bootstrap
import {Modal,Form,Row,Col,Button} from 'react-bootstrap'

const AddCardModal = memo((props) =>{
    return (
        <Fragment>
            <Modal show={props.show} onHide={props.handleclose} centered>
                <Modal.Body className="p-4">
                    <Row>
                        <Col lg="12">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <Form.Check>
                                    <Form.Check.Input type="radio"  name="customRadio0" id="automatically" defaultChecked/>
                                    <Form.Check.Label htmlFor="automatically" className="h5 mb-0">Debit Card</Form.Check.Label>
                                </Form.Check>
                                <Form.Check>
                                    <Form.Check.Input type="radio"  name="customRadio0" id="automatically"/>
                                    <Form.Check.Label htmlFor="automatically" className="h5 mb-0">Credit Card</Form.Check.Label>
                                </Form.Check>
                            </div>
                            <div className="my-4">
                                <select className="form-select  form-control mb-3">
                                    <option defaultValue="">Select Card Type</option>
                                    <option defaultValue="1">Visa Card</option>
                                    <option defaultValue="2">Master Card</option>
                                    <option defaultValue="3">Rupay Card</option>
                                    <option defaultValue="4">Express Card</option>
                                </select>
                            </div>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label className="h6">Full Name</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                            <p className="mb-3">
                                *Same as on the card.
                            </p>
                            <h6 className="mb-3">Expiry Date</h6>
                            <Form.Control type="text" className="vanila-datepicker" placeholder="MM/YY" />
                            <div className="text-center mt-4">
                                <Button variant="primary" onClick={ props.handleclose}>
                                    Add Card
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </Fragment>
    )
})

AddCardModal.displayName="AddCardModal"
export default AddCardModal