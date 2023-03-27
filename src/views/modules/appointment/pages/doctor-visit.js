import {useState,memo,Fragment} from 'react'

// React-bootstrap
import { Row, Col, Image, Form, Button, Collapse, Table } from 'react-bootstrap'

// Components
import Card from '../../../../components/bootstrap/card'

// Signature pulgin
import SignaturePad from 'react-signature-pad-wrapper'

//Flatpickr
import Flatpickr from "react-flatpickr";

//Img
import img1 from '../../../../assets/modules/appointment/images/signature/01.svg'
import img2 from '../../../../assets/modules/appointment/images/signature/02.svg'
import img3 from '../../../../assets/modules/appointment/images/signature/04.svg'
import img4 from '../../../../assets/modules/appointment/images/signature/03.svg'
import img5 from '../../../../assets/modules/appointment/images/signature/05.svg'

const Doctorvisit = memo(() => {
    const [open, setOpen] = useState(true);

    const table =[
        {
            name: 'Anne Hathaway',
            department: 'Gastroenterologists',
            intime: '02:00 PM',
            outtime: '06:00 PM',
            color: 'danger',
            status: 'Doctor Out',
            signature: img1
        },{
            name: 'Ella Mai',
            department: 'Hematologists',
            intime: '04:00 PM',
            outtime: '08:00 PM',
            color: 'success',
            status: 'Doctor In',
            signature: img2
        },
        {
            name: 'Jhon Doe',
            department: 'Anesthesiologists',
            intime: '--',
            outtime: '--',
            color: 'danger',
            status: 'Doctor Out',
            signature: img3
        },
        {
            name: 'Marcelo Vieira',
            department: 'Endocrinologists',
            intime: '08:00 AM',
            outtime: '--',
            color: 'success',
            status: 'Doctor In',
            signature: img4
        },
        {
            name: 'Willow Smith',
            department: 'Internists',
            intime: '08:00 AM',
            outtime: '12:00 PM',
            color: 'success',
            status: 'Doctor In',
            signature: img5
        }
    ]

    return (
        <Fragment>
            <Row>
                <Col md="12">
                    <Card>
                        <Card.Body className="d-flex justify-content-between align-items-center flex-wrap">
                            <div className="card-title mb-0">
                                <h4 className="mb-0">Doctor visit</h4>
                            </div>
                            <div className="card-action mt-2 mt-sm-0">
                                <Button className="btn-primary" onClick={() => setOpen(!open)} aria-controls="collapseExample" aria-expanded={open}>
                                    Close
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Collapse in={open}>
                <Col lg="12" >
                    <Card id="collapseExample">
                        <Card.Body>
                            <Row>
                                <Col lg="8">
                                    <div className="form-group">
                                        <Form.Label htmlFor="name">Name</Form.Label>
                                        <Form.Control type="text" id="name" aria-describedby="name" />
                                    </div>
                                    <div className="form-group">
                                        <Form.Label htmlFor="department">Department</Form.Label>
                                        <select className="form-select" aria-label="Default select example" id="department">
                                            <option defaultValue="0">select department</option>
                                            <option defaultValue="1">Anesthesiologists</option>
                                            <option defaultValue="2">Cardiologists</option>
                                            <option defaultValue="3">Dermatologists</option>
                                            <option defaultValue="4">Gastroenterologists</option>
                                            <option defaultValue="5">Hematologists</option>
                                            <option defaultValue="6">Internists</option>
                                            <option defaultValue="7">Medical Geneticists</option>
                                            <option defaultValue="8">Nephrologists</option>
                                            <option defaultValue="9">Neurologists</option>
                                            <option defaultValue="10">Ophthalmologists</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <Form.Label htmlFor="time">In Time</Form.Label>
                                        <Flatpickr className="form-control time_flatpicker" options={{ enableTime: true, noCalendar: true,  dateFormat: "H:i"}} id="time" placeholder="In Time"/>
                                    </div>
                                    <div className="form-group">
                                        <Form.Label htmlFor="out">Out Time</Form.Label>
                                        <Flatpickr className="form-control time_flatpicker" options={{ enableTime: true, noCalendar: true,  dateFormat: "H:i"}} id="out" placeholder="Out Time"/>
                                    </div>
                                </Col>
                                <Col lg="4">
                                    <h5 className="text-center">Signature</h5>
                                    <div className="text-center" style={{background : "aliceblue"}}>
                                    <div>
                                        <SignaturePad />
                                    </div>
                                    </div>
                                    <div className="text-center mt-3">
                                        <Button variant="primary">Save</Button>
                                        <Button variant="danger" className="ms-3" onClick={() => setOpen(!open)} aria-controls="collapseExample" aria-expanded={open}>
                                        Clear
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                </Collapse>
                <Col lg="12">
                    <div className="fancy-table table-responsive">
                        <Table responsive striped>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Department</th>
                                    <th>In Time</th>
                                    <th>Out Time</th>
                                    <th>Stauts</th>
                                    <th>signature</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    table.map((item,index) => {
                                        return (
                                            <tr key={index}>
                                                <td><h6>{item.name}</h6></td>
                                                <td>{item.department}</td>
                                                <td>{item.intime}</td>
                                                <td>{item.outtime}</td>
                                                <td><div className={`bg-${item.color} text-white badge rounded-pill`}>{item.status}</div></td>
                                                <td><Image className="avatar-50" src={item.signature} alt="sign" /></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th><input  className="form-control form-control-sm" placeholder="Name"/></th>
                                    <th><input  className="form-control form-control-sm" placeholder="Department"/></th>
                                    <th><input  className="form-control form-control-sm" placeholder="In Time"/></th>
                                    <th><input  className="form-control form-control-sm" placeholder="Out Time"/></th>
                                </tr>
                            </tfoot>
                        </Table>
                    </div>
                </Col>
            </Row>
        </Fragment>
    )
})

Doctorvisit.displayName="Doctorvisit"
export default Doctorvisit
