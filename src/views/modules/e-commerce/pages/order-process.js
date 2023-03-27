import { useState, memo, Fragment } from 'react'

// Router
import { Link } from 'react-router-dom'

// React-bootstrap
import { Button, Row, Col, Image, Table, Form } from 'react-bootstrap'

//Components
import Card from '../../../../components/bootstrap/card'
import Counter from '../components/counter'
import Swal from "sweetalert2";

//Img
import img1 from '../../../../assets/modules/e-commerce/images/cart/01.png'
import img2 from '../../../../assets/modules/e-commerce/images/cart/02.png'
import img3 from '../../../../assets/modules/e-commerce/images/cart/03.png'
import img4 from '../../../../assets/modules/e-commerce/images/01.png'
import img5 from '../../../../assets/modules/e-commerce/images/user-cards/02.png'



const Orderprocess = memo(() => {

    const checkout = () => {
        document.getElementById('cart').classList.remove('show');
        document.getElementById('checkout').classList.add('show');
        document.getElementById('iq-tracker-position-1').classList.remove('active');
        document.getElementById('iq-tracker-position-1').classList.add('done');
        document.getElementById('iq-tracker-position-2').classList.add('active');
    }
    const payment = () => {
        document.getElementById('checkout').classList.remove('show');
        document.getElementById('payment').classList.add('show');
        document.getElementById('iq-tracker-position-2').classList.remove('active');
        document.getElementById('iq-tracker-position-2').classList.add('done');
        document.getElementById('iq-tracker-position-3').classList.add('active');
    }

    const [productList, setProductList] = useState([
        {
            image: img1,
            name: 'Biker’s Jacket',
            color: 'Red & Black',
            size: ' L',
            price: '$80.00'
        },
        {
            image: img2,
            name: 'Pink Sweater',
            color: 'Pink',
            size: 'M',
            price: '$70.00'
        },
        {
            image: img3,
            name: 'Beats Headphones',
            color: 'Green',
            size: 'M'
        },
        {
            image: img4,
            name: 'Shoes',
            color: 'Yellow',
            size: '8'
        }
    ]);
    const handleRemove = (index) => {
        Swal.fire({
            icon: 'error',
            title: 'Are you sure?',
            text: 'You want to delete this item',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                setProductList(() => productList.filter((item, productIndex) => index !== productIndex))
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }
    return (
        <Fragment>
            <Row>
                <Col sm="12">
                    <ul className="text-center iq-product-tracker mb-0 py-4" id="progressbar">
                        <li className="active iq-tracker-position-0" id="iq-tracker-position-1">Cart</li>
                        <li className="iq-tracker-position-0" id="iq-tracker-position-2">Checkout</li>
                        <li className="iq-tracker-position-0" id="iq-tracker-position-3">Payment</li>
                    </ul>
                    <div id="cart" className="iq-product-tracker-card show b-0">
                        <Row>
                            <Col lg="8">
                                <Card>
                                    <div className="card-header">
                                        <h4>My Cart</h4>
                                    </div>
                                    <Card.Body className="p-0">
                                        <Table responsive className="mb-0">
                                            <tbody>
                                                {
                                                    productList.map((item, index) => {
                                                        return (
                                                            <tr data-item="list" key={index}>
                                                                <td>
                                                                    <div className="d-flex align-items-center gap-4">
                                                                        <Image src={item.image} alt="image" className="img-fluid object-contain avatar-100 iq-product-bg p-3" loading="lazy" />
                                                                        <div>
                                                                            <h5 className="mb-3">{item.name}</h5>
                                                                            <p className="mb-1">Colour: {item.color}</p>
                                                                            <p className="mb-1">Size: {item.size}</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <Counter />

                                                                </td>
                                                                <td>
                                                                    <div className="d-flex gap-3">
                                                                        <p className="text-decoration-line-through mb-0">{item.price}</p>
                                                                        <Link to="#" className="text-decoration-none">$56.00</Link>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <button className="btn btn-icon btn-danger btn-sm delete-btn" onClick={() => handleRemove(index)}>
                                                                        <span className="btn-inner">
                                                                            <svg className="icon-32" width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path opacity="0.4" d="M19.643 9.48851C19.643 9.5565 19.11 16.2973 18.8056 19.1342C18.615 20.8751 17.4927 21.9311 15.8092 21.9611C14.5157 21.9901 13.2494 22.0001 12.0036 22.0001C10.6809 22.0001 9.38741 21.9901 8.13185 21.9611C6.50477 21.9221 5.38147 20.8451 5.20057 19.1342C4.88741 16.2873 4.36418 9.5565 4.35445 9.48851C4.34473 9.28351 4.41086 9.08852 4.54507 8.93053C4.67734 8.78453 4.86796 8.69653 5.06831 8.69653H18.9388C19.1382 8.69653 19.3191 8.78453 19.4621 8.93053C19.5953 9.08852 19.6624 9.28351 19.643 9.48851Z" fill="currentColor"></path>
                                                                                <path d="M21 5.97686C21 5.56588 20.6761 5.24389 20.2871 5.24389H17.3714C16.7781 5.24389 16.2627 4.8219 16.1304 4.22692L15.967 3.49795C15.7385 2.61698 14.9498 2 14.0647 2H9.93624C9.0415 2 8.26054 2.61698 8.02323 3.54595L7.87054 4.22792C7.7373 4.8219 7.22185 5.24389 6.62957 5.24389H3.71385C3.32386 5.24389 3 5.56588 3 5.97686V6.35685C3 6.75783 3.32386 7.08982 3.71385 7.08982H20.2871C20.6761 7.08982 21 6.75783 21 6.35685V5.97686Z" fill="currentColor"></path>
                                                                            </svg>
                                                                        </span>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    }
                                                    )
                                                }

                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg="4">
                                <Card>
                                    <div className="card-header">
                                        <h4 className="mb-0">Order Summary</h4>
                                    </div>
                                    <Card.Body>
                                        <div className="border-bottom">
                                            <div className="d-flex justify-content-between mb-4">
                                                <h6 className="mb-0">Order ID</h6>
                                                <h6 className="mb-0">ASDW11268</h6>
                                            </div>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Coupon Code" aria-label="Coupon Code" aria-describedby="CouponCode" />
                                                <Button className="btn btn-primary" type="button" id="CouponCode">Apply</Button>
                                            </div>
                                        </div>
                                        <div className="border-bottom mt-4">
                                            <div className="d-flex justify-content-between mb-4">
                                                <h6>Subtotal</h6>
                                                <h6 className="text-primary">$206.00</h6>
                                            </div>
                                            <div className="d-flex justify-content-between mb-4">
                                                <h6>Discount</h6>
                                                <h6 className="text-success">-$38.00</h6>
                                            </div>
                                            <div className="d-flex justify-content-between mb-4">
                                                <h6>Shipping</h6>
                                                <h6 className="text-primary">FREE</h6>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <div className="d-flex justify-content-between mb-4">
                                                <h6 className="mb-0">Order Total</h6>
                                                <h6 className="text-primary mb-0">$168.00</h6>
                                            </div>
                                            <div className="alert border-primary rounded border-1 mb-4">
                                                <div className="d-flex justify-content-between align-items-center ">
                                                    <h6 className="text-primary mb-0">Total Savings on this order</h6>
                                                    <h6 className="text-primary mb-0"><b>$38.00</b></h6>
                                                </div>
                                            </div>
                                            <div className="alert border-primary rounded border-1 mb-4">
                                                <div className="d-flex justify-content-between align-items-center ">
                                                    <h6 className="text-primary mb-0">Expected date of delivery</h6>
                                                    <h6 className="text-primary mb-0">12 Feb 2020</h6>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <Button id="place-order" to="#" onClick={checkout} variant="primary d-block mt-3 next w-100">Checkout</Button>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    <div id="checkout" className="iq-product-tracker-card b-0">
                        <Row>
                            <Col lg="8">
                                <Card>
                                    <Card.Body>
                                        <h4 className="mb-0">Most Recently Used</h4>
                                        <Row>
                                            <Col lg="4">
                                                <div className="mt-4">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="address" id="address21" defaultChecked />
                                                        <label className="form-check-label mb-0" htmlFor="address21">
                                                            <span className="h6 mb-0">Billing Address</span>
                                                        </label>
                                                    </div>
                                                    <p className="mb-0">Elon Musk</p>
                                                    <p className="mb-0">265, Hill View, Rochester Avenue.Kentucky - 40062  </p>
                                                    <div className="mt-2">
                                                        <Link to="#">Edit</Link>
                                                        <span>
                                                            |
                                                        </span>
                                                        <Link to="#">Remove </Link>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg="4">
                                                <div className="mt-4">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="address" id="address001" />
                                                        <label className="form-check-label" htmlFor="address001">
                                                            <span className="h6 mb-0">Shipping Address</span>
                                                        </label>
                                                    </div>
                                                    <p className="mb-0">Elon Musk</p>
                                                    <p className="mb-0">265, Hill View, Rochester Avenue.Kentucky - 40062  </p>
                                                    <div className="mt-2">
                                                        <Link to="#">Edit</Link>
                                                        <span>
                                                            |
                                                        </span>
                                                        <Link to="#">Remove </Link>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg="4">
                                                <div className="mt-4">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="address" id="address002" />
                                                        <label className="form-check-label" htmlFor="address002">
                                                            <span className="h6 mb-0">Office Address</span>
                                                        </label>
                                                    </div>
                                                    <p className="mb-0">Elon Musk</p>
                                                    <p className="mb-0">265, Hill View, Rochester Avenue.Kentucky - 40062  </p>
                                                    <div className="mt-2">
                                                        <Link to="#">Edit</Link>
                                                        <span>
                                                            |
                                                        </span>
                                                        <Link to="#">Remove </Link>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <h4 className="mb-0">Add New Address</h4>
                                    </Card.Header>
                                    <Card.Body>
                                        <Form>
                                            <Row>
                                                <Col lg="6">
                                                    <div className="form-group">
                                                        <Form.Label htmlFor="fName">First Name</Form.Label>
                                                        <Form.Control type="text" id="fName" />
                                                    </div>
                                                </Col>
                                                <Col lg="6">
                                                    <div className="form-group">
                                                        <Form.Label htmlFor="LName">Last Name</Form.Label>
                                                        <Form.Control type="text" id="LName" />
                                                    </div>
                                                </Col>
                                                <Col lg="6">
                                                    <div className="form-group">
                                                        <Form.Label htmlFor="Cno">Contact Number</Form.Label>
                                                        <Form.Control type="email" id="Cno" />
                                                    </div>
                                                </Col>
                                                <Col lg="6">
                                                    <div className="form-group">
                                                        <Form.Label htmlFor="email">Email ID</Form.Label>
                                                        <Form.Control type="text" id="email" />
                                                    </div>
                                                </Col>
                                                <Col lg="6">
                                                    <div className="form-group">
                                                        <Form.Label htmlFor="HName">House no./ Flat no.</Form.Label>
                                                        <Form.Control type="password" id="HName" />
                                                    </div>
                                                </Col>
                                                <Col lg="6">
                                                    <div className="form-group">
                                                        <Form.Label htmlFor="Lmark">Landmark</Form.Label>
                                                        <Form.Control type="text" id="Lmark" />
                                                    </div>
                                                </Col>
                                                <Col lg="6">
                                                    <div className="form-group">
                                                        <Form.Label htmlFor="Street">Street Address</Form.Label>
                                                        <Form.Control type="text" id="Street" />
                                                    </div>
                                                </Col>
                                                <Col lg="6">
                                                    <div className="form-group">
                                                        <Form.Label htmlFor="Town">Town/ City</Form.Label>
                                                        <Form.Control type="text" id="Town" />
                                                    </div>
                                                </Col>
                                                <Col lg="6">
                                                    <div className="form-group">
                                                        <Form.Label htmlFor="State">State/ Country</Form.Label>
                                                        <Form.Control type="text" id="State" />
                                                    </div>
                                                </Col>
                                                <Col lg="6">
                                                    <div className="form-group">
                                                        <Form.Label htmlFor="Zip">Postcode/ ZIP Code</Form.Label>
                                                        <Form.Control type="text" id="Zip" />
                                                    </div>
                                                </Col>
                                                <Col lg="12">
                                                    <div className="form-group mb-0">
                                                        <Form.Label htmlFor="Comment">Enter your Comment</Form.Label>
                                                        <textarea className="form-control" rows="4" id="Comment" placeholder=""></textarea>
                                                    </div>
                                                </Col>
                                                <Col lg="12" className="d-flex my-4">
                                                    <div className="form-check">
                                                        <input type="checkbox" id="Daddress" className="form-check-input" />
                                                        <label className="form-check-label" htmlFor="Daddress">Make this my default address.</label>
                                                    </div>
                                                </Col>
                                                <div className="d-flex">
                                                    <Button type="submit" className="btn btn-primary">Submit
                                                        <svg className="submit ms-2" width="7" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M4.58579 6L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893C0.683418 -0.0976305 1.31658 -0.0976305 1.70711 0.292893L6.70711 5.29289C7.09763 5.68342 7.09763 6.31658 6.70711 6.70711L1.70711 11.7071C1.31658 12.0976 0.683418 12.0976 0.292893 11.7071C-0.0976311 11.3166 -0.0976311 10.6834 0.292893 10.2929L4.58579 6Z" fill="white" />
                                                        </svg>
                                                    </Button>
                                                </div>
                                            </Row>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg="4">
                                <Card>
                                    <Card.Header>
                                        <h4 className="mb-0">Payment Summary</h4>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="border-bottom">
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <h6>
                                                    <svg width="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M10 0.75C15.108 0.75 19.25 4.891 19.25 10C19.25 15.108 15.108 19.25 10 19.25C4.891 19.25 0.75 15.108 0.75 10C0.75 4.891 4.891 0.75 10 0.75Z" stroke="#3A57E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M9.99512 6.20312V10.6221" stroke="#3A57E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M9.995 13.7969H10.005" stroke="#3A57E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg> New user?
                                                </h6>
                                                <div className="d-flex">
                                                    <Button type="submit" className="btn btn-primary">Submit
                                                        <svg className="submit ms-2" width="7" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M4.58579 6L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893C0.683418 -0.0976305 1.31658 -0.0976305 1.70711 0.292893L6.70711 5.29289C7.09763 5.68342 7.09763 6.31658 6.70711 6.70711L1.70711 11.7071C1.31658 12.0976 0.683418 12.0976 0.292893 11.7071C-0.0976311 11.3166 -0.0976311 10.6834 0.292893 10.2929L4.58579 6Z" fill="white" />
                                                        </svg>
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between mb-4">
                                                <h6 className="mb-0">Order ID</h6>
                                                <h6 className="mb-0">ASDW11268</h6>
                                            </div>
                                            <div className="input-group mb-3">
                                                <Form.Control type="text" id="last-name" placeholder="Coupon Code" />
                                                <Button type="submit" className="btn btn-primary">Apply</Button>
                                            </div>
                                        </div>
                                        <div className="border-bottom mt-4">
                                            <div className="d-flex justify-content-between mb-4">
                                                <h6 className="mb-0">Subtotal</h6>
                                                <h6 className="mb-0 text-primary">$206.00</h6>
                                            </div>
                                            <div className="d-flex justify-content-between mb-4">
                                                <h6 className="mb-0">Discount</h6>
                                                <h6 className="mb-0 text-success">-$38.00</h6>
                                            </div>
                                            <div className="d-flex justify-content-between mb-4">
                                                <h6 className="mb-0">Shipping</h6>
                                                <h6 className="mb-0 text-primary">FREE</h6>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <div className="d-flex justify-content-between mb-4">
                                                <h6 className="mb-0">Order Total</h6>
                                                <h6 className="mb-0 text-primary">$168.00</h6>
                                            </div>
                                            <div className="alert border-primary rounded border-1 mb-4">
                                                <div className="d-flex justify-content-between align-items-center ">
                                                    <h6 className="mb-0 text-primary">Total Savings on this order</h6>
                                                    <h6 className="mb-0 text-primary">$38.00</h6>
                                                </div>
                                            </div>
                                            <div className="alert border-primary rounded border-1 mb-4">
                                                <div className="d-flex justify-content-between align-items-center ">
                                                    <h6 className="mb-0 text-primary">Expected date of delivery</h6>
                                                    <h6 className="mb-0 text-primary">12 Feb 2020</h6>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <Button id="deliver-address" href="#" onClick={payment} className="btn btn-primary d-block mt-2 next">Place Order</Button>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <h4 className="mb-0">Delivery Method</h4>
                                    </Card.Body>
                                    <Card.Body>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="form-check d-flex align-items-center gap-3">
                                                <input className="form-check-input" id="StandardD" type="radio" name="delivery001" />
                                                <label className="form-check-label d-flex flex-column" htmlFor="StandardD">
                                                    <span className="h6">Standard Delivery</span>
                                                    <span>2-3 days delivery</span>
                                                </label>
                                            </div>
                                            <h6 className="text-primary mb-0">FREE</h6>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <div className="form-check d-flex align-items-center gap-3">
                                                <input className="form-check-input" id="ExpressD" type="radio" name="delivery001" />
                                                <label className="form-check-label d-flex flex-column" htmlFor="ExpressD">
                                                    <span className="h6">Express Delivery</span>
                                                    <span>1 day fast delivery</span>
                                                </label>
                                            </div>
                                            <h6 className="text-primary mb-0">$10</h6>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <div className="card-header">
                                        <h4 className="mb-0">Additional Services</h4>
                                    </div>
                                    <Card.Body>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="form-check">
                                                <input className="form-check-input" id="productCare" type="checkbox" name="delivery002" />
                                                <label className="form-check-label" htmlFor="productCare">
                                                    <span className="h6">Handle With Care</span>
                                                    <span>Protection provided</span>
                                                </label>
                                            </div>
                                            <h6 className="text-primary mb-0">$12</h6>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <div className="form-check">
                                                <input className="form-check-input" id="productGift" type="checkbox" name="delivery002" />
                                                <label className="form-check-label" htmlFor="productGift">
                                                    <span className="h6">Gift Wrap</span>
                                                    <span>Gift wrap your product</span>
                                                </label>
                                            </div>
                                            <h6 className="text-primary mb-0">$15</h6>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    <div id="payment" className="iq-product-tracker-card b-0">
                        <Row>
                            <Col lg="8">
                                <Card>
                                    <Card.Header>
                                        <h4 className="mb-0">Payment Options</h4>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="d-flex justify-content-between flex-wrap">
                                            <div className="d-flex mt-3">
                                                <Image className="img-fluid" src={img5} alt="01" />
                                                <h6 className="mb-0 ms-3">Barclays Bank Debit Card ending in 7852</h6>
                                            </div>
                                            <h6 className="mb-0 mt-3">Elon Musk</h6>
                                            <h6 className="mb-0 mt-3">06 / 2030</h6>
                                        </div>
                                        <Form className="mt-4">
                                            <div className="d-flex align-items-center">
                                                <div className="mb-4">
                                                    <Form.Label>
                                                        <span className="h6">Enter CVV</span></Form.Label>
                                                    <Form.Control type="text" placeholder="xxx" required />
                                                </div>
                                                <Button type="submit" className="btn btn-primary mt-2 ms-3">Continue</Button>
                                            </div>
                                        </Form>
                                        <hr />
                                        <div className="card-lists">
                                            <div className="form-group mt-4">
                                                <div className="form-check mb-4">
                                                    <input type="radio" id="credit" name="customRadio" className="form-check-input" defaultChecked />
                                                    <label className="custom-control-label" htmlFor="credit">
                                                        <span className="h6">Credit / Debit / ATM Card</span>
                                                    </label>
                                                </div>
                                                <div className="form-check mb-4">
                                                    <input type="radio" id="netbaking" name="customRadio" className="form-check-input" />
                                                    <label className="custom-control-label" htmlFor="netbaking">
                                                        <span className="h6"> Net Banking</span>
                                                    </label>
                                                </div>
                                                <div className="form-check mb-4">
                                                    <input type="radio" id="emi" name="customRadio" className="form-check-input" />
                                                    <label className="custom-control-label" htmlFor="emi">
                                                        <span className="h6">EMI (Easy Installment)</span>
                                                    </label>
                                                </div>
                                                <div className="form-check mb-4">
                                                    <input type="radio" id="cod" name="customRadio" className="form-check-input" />
                                                    <label className="custom-control-label" htmlFor="cod">
                                                        <span className="h6">Cash On Delivery</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="d-flex flex-wrap gap-2">
                                            <Button type="submit" className="btn btn-primary mt-2">Add Gift Card</Button>
                                            <Button className="btn btn-primary mt-2" href="#" role="button">cancel</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg="4">
                                <Card>
                                    <Card.Header>
                                        <h4 className="mb-0">Billing Details</h4>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="d-flex justify-content-between mb-4">
                                            <h6 className="mb-0">Order ID</h6>
                                            <h6 className="mb-0">ASDW11268</h6>
                                        </div>
                                        <div className="alert border-primary rounded border-1 mb-4">
                                            <div className="d-flex justify-content-between align-items-center ">
                                                <h6 className="text-primary mb-0">Expected date of delivery</h6>
                                                <h6 className="text-primary mb-0">12 Feb 2020</h6>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="mt-4">
                                            <div className="d-flex justify-content-between mb-4">
                                                <h6 className="mb-0">Subtotal</h6>
                                                <h6 className="mb-0 text-primary">$206.00</h6>
                                            </div>
                                            <div className="d-flex justify-content-between mb-4">
                                                <h6 className="mb-0">Discount</h6>
                                                <h6 className="mb-0 text-success">-$38.00</h6>
                                            </div>
                                            <div className="d-flex justify-content-between mb-4">
                                                <h6 className="mb-0">Shipping</h6>
                                                <h6 className="mb-0 text-primary">FREE</h6>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="d-flex justify-content-between mb-4">
                                            <h6 className="mb-0">Amoun  t Payable</h6>
                                            <h6 className="mb-0 text-primary">$168.00</h6>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Link to="/e-commerce/invoice" className="btn btn-primary w-100">Finish Payment</Link>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Fragment>
    )
})

Orderprocess.displayName = "Orderprocess"
export default Orderprocess
