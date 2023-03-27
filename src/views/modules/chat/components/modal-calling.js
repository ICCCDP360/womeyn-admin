import {memo,Fragment} from 'react'

//bootstrap
import {Modal, Form} from 'react-bootstrap'


const Modalcalling = memo((props) => {
    return (
        <Fragment>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Calling</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-between align-items-center pb-3 border-bottom">
                        <Form.Check.Label className="mb-0" htmlFor="call-001">Caller ID</Form.Check.Label>
                        <div className="form-check form-switch mb-0">
                            <Form.Check.Input type="checkbox" id="call-001" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center pt-3 pb-3 border-bottom">
                        <Form.Check.Label className="mb-0" htmlFor="call-002">Call Forwarding and Voicemall</Form.Check.Label>
                        <div className="form-check form-switch mb-0">
                            <Form.Check.Input type="checkbox" id="call-002" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center pt-3 pb-3 border-bottom">
                        <Form.Check.Label className="mb-0" htmlFor="call-003">Show Call Window When Hope UI is in the background</Form.Check.Label>
                        <div className="form-check form-switch mb-0">
                            <Form.Check.Input type="checkbox" id="call-003" defaultChecked />
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center pt-3">
                        <Form.Check.Label className="form-check-label mb-0" htmlFor="call-004">Only allow Hope UI calls from contacts to ring on this device</Form.Check.Label>
                        <div className="form-check form-switch mb-0">
                            <Form.Check.Input type="checkbox" id="call-004" />
                        </div>
                    </div> 
                </Modal.Body>
            </Modal>
        </Fragment>
    )
})

Modalcalling.displayName="Modalcalling"
export default Modalcalling