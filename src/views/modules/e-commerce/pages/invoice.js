import { memo, Fragment } from 'react'

// React-bootstrap
import { Row, Col, Button } from 'react-bootstrap'

//Components
import Card from '../../../../components/bootstrap/card'

const Invoice = memo(() => {
    const Table = [
        {
            name: 'Item 1',
            discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            price: '$2,100.00',
            quantity: '1',
            total: '$2,100.00'
        },
        {
            name: 'Item 2',
            discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            price: '$4,205.00',
            quantity: '2',
            total: '$8,410.00'
        },
        {
            name: 'Item 3',
            discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            price: '$1,500',
            quantity: '3',
            total: '$4,500.00'
        }
    ]
    return (
        <Fragment>
            <Row>
                <Col lg="12">
                    <Card>
                        <Card.Body>
                            <Row>
                                <div className="col-12">
                                    <div className="d-flex justify-content-between mb-3">
                                        <h4 className="mb-0">Invoice  #215462</h4>
                                        <span>Hope UI ltd.</span>
                                    </div>
                                    <h5 className="mb-4">Elon Musk</h5>
                                    <Row>
                                        <Col lg="4" sm="12" className="mt-3 mt-sm-0">
                                            <div>
                                                <h6>Bill To:</h6>
                                                <p>
                                                    Elon Musk
                                                </p>
                                                <p className="mb-0">
                                                    4517 Washington Ave. Manchester, Kentucky 39495
                                                </p>
                                            </div>
                                        </Col>
                                        <Col lg="3" sm="12" className="mt-3 mt-sm-0">
                                            <div>
                                                <h6>Bill From:</h6>
                                                <p>
                                                    Hope UI ltd.
                                                </p>
                                                <p className="mb-0">
                                                    2972 Westheimer Rd. Santa Ana, Illinois 85486
                                                </p>
                                            </div>
                                        </Col>
                                        <Col lg="2" sm="12" className="mt-3 mt-sm-0 text-sm-end text-start">
                                            <div>
                                                <p className="text-muted mb-0">
                                                    Amount Due
                                                </p>
                                                <h5 className="mb-0">
                                                    $14,010.00
                                                </h5>
                                            </div>
                                        </Col>
                                        <Col lg="2" sm="12" className="mt-3 mt-sm-0 text-sm-end text-start">
                                            <div className="mb-3">
                                                <h6 className="mb-0">Invoice Date</h6>
                                                <p>
                                                    27 May 2021
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="col-12 mt-5">
                                    <div className="table-responsive-lg">
                                        <table className="table iq-billing-table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Description</th>
                                                    <th className="text-center" scope="col">Price</th>
                                                    <th className="text-center" scope="col">Quantity</th>
                                                    <th scope="col">Sub-Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    Table.map((item, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td className="w-50">
                                                                    <h6 className="mb-0">{item.name}</h6>
                                                                    <p className="mb-0">{item.discription}
                                                                    </p>
                                                                </td>
                                                                <td className="text-center">{item.price}</td>
                                                                <td className="text-center">{item.quantity}</td>
                                                                <td>{item.total}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <div className="text-center">
                                                            <h6>Total: </h6>
                                                            <h6>Tax: </h6>
                                                            <h6 className="mb-0">Discount:</h6>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex flex-column">
                                                            <h6>$15,010.00</h6>
                                                            <h6>$1,500</h6>
                                                            <h6 className="mb-0">$2,500</h6>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="3">Net Amount</td>
                                                    <td>
                                                        <h6 className="mb-0">$14,010.00</h6>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <p className="ms-4">
                                        Please pay before the due date. Thank you for your business.
                                    </p>
                                    <div className="d-flex justify-content-center mt-4">
                                        <Button className="btn btn-primary" string="window.print()">Print</Button>
                                    </div>
                                </div>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
})

Invoice.displayName = "Invoice"
export default Invoice
