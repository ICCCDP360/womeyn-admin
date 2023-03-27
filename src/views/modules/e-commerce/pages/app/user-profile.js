import { memo, Fragment } from 'react'

// React-bootstrap
import { Row, Col, Image, Dropdown, Button, Table, Form, Tab, Nav } from 'react-bootstrap'

// Router
import { Link } from 'react-router-dom'

//Img
import img1 from '../../../../../assets/modules/e-commerce/images/app/01.png'
import img2 from '../../../../../assets/modules/e-commerce/images/app/02.png'
import img3 from '../../../../../assets/modules/e-commerce/images/user-cards/01.png'
import img4 from '../../../../../assets/modules/e-commerce/images/user-cards/02.png'
import img5 from '../../../../../assets/modules/e-commerce/images/user-cards/03.png'
import img6 from '../../../../../assets/modules/e-commerce/images/user-cards/05.png'
import img7 from '../../../../../assets/modules/e-commerce/images/user-cards/04.png'
import img8 from '../../../../../assets/modules/e-commerce/images/user/06.png'
import img9 from '../../../../../assets/modules/e-commerce/images/02.png'
import img10 from '../../../../../assets/modules/e-commerce/images/04.png'
import img11 from '../../../../../assets/modules/e-commerce/images/05.png'
import img12 from '../../../../../assets/modules/e-commerce/images/01.png'
import img13 from '../../../../../assets/modules/e-commerce/images/2.png';
import img14 from '../../../../../assets/modules/e-commerce/images/1.png';


//Components
import UserAccountCards from "../../components/user-account-cards"
import ProductSlider from "../../components/product-slider"
import Card from '../../../../../components/bootstrap/card'

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';

SwiperCore.use([Autoplay]);

const Userprofile = memo(() => {
    return (
        <Fragment>
            <Row>
                <Col lg="8">
                    <Card>
                        <Card.Header>
                            <Card.Header.Title>
                                <h4 className="card-title">Welcome Elon</h4>
                            </Card.Header.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container defaultActiveKey="first">
                                <Nav as="ul" className="nav-tabs nav-iconly gap-5 mb-5" id="myTab" role="tablist">
                                    <Nav.Link as="button" eventKey="first" className="d-flex flex-column align-items-center w-100" id="order-tab" data-bs-toggle="tab" data-bs-target="#order" type="button" role="tab" aria-controls="order" aria-selected="false">
                                        <svg width="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M16.6203 22H7.3797C4.68923 22 2.5 19.8311 2.5 17.1646V11.8354C2.5 9.16894 4.68923 7 7.3797 7H16.6203C19.3108 7 21.5 9.16894 21.5 11.8354V17.1646C21.5 19.8311 19.3108 22 16.6203 22Z" fill="currentColor"></path>
                                            <path d="M15.7551 10C15.344 10 15.0103 9.67634 15.0103 9.27754V6.35689C15.0103 4.75111 13.6635 3.44491 12.0089 3.44491C11.2472 3.44491 10.4477 3.7416 9.87861 4.28778C9.30854 4.83588 8.99272 5.56508 8.98974 6.34341V9.27754C8.98974 9.67634 8.65604 10 8.24487 10C7.8337 10 7.5 9.67634 7.5 9.27754V6.35689C7.50497 5.17303 7.97771 4.08067 8.82984 3.26285C9.68098 2.44311 10.7814 2.03179 12.0119 2C14.4849 2 16.5 3.95449 16.5 6.35689V9.27754C16.5 9.67634 16.1663 10 15.7551 10Z" fill="currentColor"></path>
                                        </svg>
                                        Your Orders
                                    </Nav.Link>
                                    <Nav.Link as="button" eventKey="second" className="d-flex flex-column align-items-center w-100" id="adress-tab" data-bs-toggle="tab" data-bs-target="#adress" type="button" role="tab" aria-controls="adress" aria-selected="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 40 40" fill="currentColor">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M14.2194 4.89463C17.8608 2.7788 22.3367 2.81578 25.9439 4.9915C29.5157 7.21153 31.6866 11.1736 31.6664 15.4358C31.5832 19.6699 29.2555 23.65 26.3458 26.7268C24.6664 28.5107 22.7877 30.0881 20.748 31.4267C20.538 31.5482 20.3079 31.6295 20.0691 31.6667C19.8393 31.6569 19.6155 31.589 19.4179 31.4691C16.304 29.4576 13.5722 26.8901 11.3539 23.8899C9.49763 21.3856 8.44304 18.36 8.33331 15.224C8.3309 10.9538 10.5779 7.01046 14.2194 4.89463ZM16.3236 16.9913C16.9361 18.5014 18.3819 19.4864 19.986 19.4864C21.0368 19.494 22.047 19.0731 22.7913 18.3175C23.5357 17.5619 23.9524 16.5344 23.9487 15.464C23.9543 13.8301 22.9924 12.3539 21.5121 11.7246C20.0318 11.0954 18.325 11.4373 17.1888 12.5906C16.0526 13.7439 15.711 15.4812 16.3236 16.9913Z" fill="currentColor" />
                                            <ellipse opacity="0.4" cx="20" cy="35" rx="8.33333" ry="1.66667" fill="currentColor" />
                                        </svg>
                                        Your Address
                                    </Nav.Link>
                                    <Nav.Link as="button" eventKey="thrid" className="d-flex flex-column align-items-center w-100" id="card-tab" data-bs-toggle="tab" data-bs-target="#card" type="button" role="tab" aria-controls="card" aria-selected="true">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 40 40" fill="currentColor">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M36.6607 13.9585H29.6029C26.3185 13.9643 23.6578 16.5586 23.6518 19.7609C23.6474 22.9705 26.3111 25.5763 29.6029 25.5807H36.6666V26.0906C36.6666 31.6893 33.2726 35 27.5289 35H12.4726C6.72739 35 3.33331 31.6893 3.33331 26.0906V13.8964C3.33331 8.2977 6.72739 5 12.4726 5H27.5229C33.2666 5 36.6607 8.2977 36.6607 13.8964V13.9585ZM11.2326 13.9455H20.6326H20.6385H20.6504C21.3541 13.9427 21.9229 13.3836 21.92 12.6961C21.917 12.01 21.3422 11.4553 20.6385 11.4582H11.2326C10.5333 11.4611 9.96591 12.0143 9.96294 12.6975C9.95998 13.3836 10.5289 13.9427 11.2326 13.9455Z" fill="currentColor" />
                                            <path opacity="0.4" d="M26.729 20.4944C27.0775 22.0798 28.4674 23.1951 30.0543 23.1661H35.4708C36.1311 23.1661 36.6666 22.6193 36.6666 21.9434V17.7242C36.6652 17.0497 36.1311 16.5015 35.4708 16.5H29.9268C28.1217 16.5058 26.6638 18.0041 26.6666 19.8505C26.6666 20.0666 26.6879 20.2827 26.729 20.4944" fill="currentColor" />
                                            <ellipse cx="30" cy="19.8333" rx="1.66667" ry="1.66667" fill="currentColor" />
                                        </svg>
                                        Your Cards
                                    </Nav.Link>
                                    <Nav.Link as="button" eventKey="four" className="d-flex flex-column align-items-center w-100" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 40 40" fill="currentColor">
                                            <path d="M19.9947 25.291C12.8063 25.291 6.66632 26.4243 6.66632 30.9577C6.66632 35.4927 12.768 36.666 19.9947 36.666C27.183 36.666 33.323 35.5343 33.323 30.9993C33.323 26.4643 27.223 25.291 19.9947 25.291" fill="currentColor" />
                                            <path opacity="0.4" d="M19.9947 20.9728C24.8913 20.9728 28.8147 17.0478 28.8147 12.1528C28.8147 7.25782 24.8913 3.33282 19.9947 3.33282C15.0997 3.33282 11.1747 7.25782 11.1747 12.1528C11.1747 17.0478 15.0997 20.9728 19.9947 20.9728" fill="currentColor" />
                                        </svg>
                                        Profile
                                    </Nav.Link>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first" id="order" role="tabpanel" aria-labelledby="order-tab">
                                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                                            <h5 className="mb-0 pb-3">3 Orders placed in </h5>
                                            <div className="text-end pb-3">
                                                <Dropdown>
                                                    <Dropdown.Toggle as={Button} variant="soft-primary" bsPrefix=" ">
                                                        Last 90 Days
                                                        <svg width="12" className="ms-2" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M6 5.08579L10.2929 0.792893C10.6834 0.402369 11.3166 0.402369 11.7071 0.792893C12.0976 1.18342 12.0976 1.81658 11.7071 2.20711L6.70711 7.20711C6.31658 7.59763 5.68342 7.59763 5.29289 7.20711L0.292893 2.20711C-0.0976311 1.81658 -0.0976311 1.18342 0.292893 0.792893C0.683418 0.402369 1.31658 0.402369 1.70711 0.792893L6 5.08579Z" fill="currentColor" />
                                                        </svg>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#" active>Last 30 Days</Dropdown.Item>
                                                        <Dropdown.Item href="#">Last 90 Days</Dropdown.Item>
                                                        <Dropdown.Item href="#">Last 180 Days</Dropdown.Item>
                                                        <Dropdown.Divider />
                                                        <Dropdown.Item href="#">Last 1 Year</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                        <Card className="shadow-none border iq-product-order-placed">
                                            <Card.Header className="user-details-bg-color p-4">
                                                <div className="iq-order-user-details d-flex justify-content-between align-items-center gap-4">
                                                    <div>
                                                        <p>Order Placed</p>
                                                        <h6 className="mb-0">12 Jan 2021</h6>
                                                    </div>
                                                    <div>
                                                        <p>Total</p>
                                                        <h6 className="mb-0">$550.00</h6>
                                                    </div>
                                                    <div>
                                                        <p>Ship to</p>
                                                        <h6 className="mb-0 text-primary">Elon Musk</h6>
                                                    </div>
                                                </div>
                                                <h6 className="mb-xl-0 mb-2 iq-order-id">Order ID:
                                                    <Link to="#">#895-458895-125489</Link>
                                                </h6>
                                            </Card.Header>
                                            <Card.Body>
                                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                                    <div className="d-flex align-items-center">
                                                        <Image src={img1} alt="user-profile" className="img-fluid rounded object-contain avatar-100 iq-product-bg p-3" />
                                                        <div className="ms-3">
                                                            <Link to="/e-commerce/product-details">
                                                                <h5 className="mb-3">Biker’s Jacket</h5>
                                                            </Link>
                                                            <h6 className="text-primary mb-0">
                                                                $50.56
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div className="mt-3 mt-xl-0 mt-3 mt-md-0">
                                                        <div className="text-end pb-3">
                                                            <Dropdown>
                                                                <Dropdown.Toggle as={Button} variant="btn-primary" bsPrefix="btn-primary mb-3 ">
                                                                    Buy It Again
                                                                    <svg width="12" className="ms-2" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M6 5.08579L10.2929 0.792893C10.6834 0.402369 11.3166 0.402369 11.7071 0.792893C12.0976 1.18342 12.0976 1.81658 11.7071 2.20711L6.70711 7.20711C6.31658 7.59763 5.68342 7.59763 5.29289 7.20711L0.292893 2.20711C-0.0976311 1.81658 -0.0976311 1.18342 0.292893 0.792893C0.683418 0.402369 1.31658 0.402369 1.70711 0.792893L6 5.08579Z" fill="currentColor" />
                                                                    </svg>
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item href="#" active>Buy It Again</Dropdown.Item>
                                                                    <Dropdown.Item href="#">Replace</Dropdown.Item>
                                                                    <Dropdown.Item href="#">View</Dropdown.Item>
                                                                    <Dropdown.Divider />
                                                                    <Dropdown.Item href="#">Cancel Order</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                        <div className="text-center">
                                                            <Link to="/e-commerce/invoice">Invoice</Link>
                                                            <span className="mx-1">|</span>
                                                            <Link to="/e-commerce/product-details">Write a Review</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                        <Card className=" shadow-none border iq-product-order-placed">
                                            <Card.Header className="user-details-bg-color p-4">
                                                <div className="iq-order-user-details d-flex gap-4 justify-content-between align-items-center">
                                                    <div>
                                                        <p>Order Placed</p>
                                                        <h6 className="mb-0">01 Jan 2022</h6>
                                                    </div>
                                                    <div>
                                                        <p>Total</p>
                                                        <h6 className="mb-0">$950.00</h6>
                                                    </div>
                                                    <div>
                                                        <p>Ship to</p>
                                                        <h6 className="mb-0 text-primary">Elon Musk</h6>
                                                    </div>
                                                </div>
                                                <h6 className="mb-xl-0 mb-2 iq-order-id">Order ID:
                                                    <Link to="#">#405-653265-0876343</Link>
                                                </h6>
                                            </Card.Header>
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                                    <div className="d-flex align-items-center">
                                                        <Image src={img2} alt="user-profile" className="img-fluid rounded object-contain avatar-100 iq-product-bg p-3" />
                                                        <div className="ms-3">
                                                            <Link to="/e-commerce/product-details">
                                                                <h5 className="mb-3">Biker’s Jacket</h5>
                                                            </Link>
                                                            <h6 className="text-primary mb-0">
                                                                $50.56
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div className="mt-3 mt-xl-0 mt-3 mt-md-0">
                                                        <div className="text-end pb-3">
                                                            <Dropdown>
                                                                <Dropdown.Toggle as={Button} variant="btn-primary" bsPrefix="btn-primary mb-3  ">
                                                                    Buy It Again
                                                                    <svg width="12" className="ms-2" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M6 5.08579L10.2929 0.792893C10.6834 0.402369 11.3166 0.402369 11.7071 0.792893C12.0976 1.18342 12.0976 1.81658 11.7071 2.20711L6.70711 7.20711C6.31658 7.59763 5.68342 7.59763 5.29289 7.20711L0.292893 2.20711C-0.0976311 1.81658 -0.0976311 1.18342 0.292893 0.792893C0.683418 0.402369 1.31658 0.402369 1.70711 0.792893L6 5.08579Z" fill="currentColor" />
                                                                    </svg>
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item href="#" active>Buy It Again</Dropdown.Item>
                                                                    <Dropdown.Item href="#">Replace</Dropdown.Item>
                                                                    <Dropdown.Item href="#">View</Dropdown.Item>
                                                                    <Dropdown.Divider />
                                                                    <Dropdown.Item href="#">Cancel Order</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                        <div className="text-center">
                                                            <Link to="/e-commerce/invoice">Invoice</Link>
                                                            <span className="mx-1">|</span>
                                                            <Link to="/e-commerce/product-details">Write a Review</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                        <div className="col-12 text-center">
                                            <Link to="#" className="btn btn-primary">Load More</Link>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second" id="adress" role="tabpanel" aria-labelledby="adress-tab">
                                        <Row>
                                            <div className="col-12">
                                                <div className="address-card">
                                                    <div className="border border-3 border-dashed p-2 mb-4">
                                                        <Link to="#" className="d-flex align-items-center justify-content-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" className="text-secondary" viewBox="0 0 30 30" fill="none">
                                                                <path d="M12.6035 27H17.3787V17.3787H27V12.6036H17.3787V3H12.6035V12.6036H3V17.3787H12.6035V27Z" fill="currentColor"></path>
                                                            </svg>
                                                            <h6 className="ms-2 mb-0">Add Address</h6>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <UserAccountCards cardCass="default-card" addressMode="Default" userName="Elon Musk" addressType="Home" userContact="(303) 555-0105" userAddress="265, Hill View, Rochester Avenue. Kentucky - 40062" />
                                            <UserAccountCards cardCass="border iq-user-address" userName="Christopher Nolan" addressType="Office" userContact="(+994) 569-05210" userAddress="265, Hill View, Rochester Avenue. Kentucky - 40062" />
                                            <UserAccountCards cardCass="border iq-user-address" userName="Christopher Nolan" addressType="Home" userContact="(+994) 569-05210" userAddress="265, Hill View, Rochester Avenue. Kentucky - 40062" />
                                            <UserAccountCards cardCass="border iq-user-address mb-0" userName="Christopher Nolan" addressType="Office" userContact="(+994) 569-05210" userAddress="265, Hill View, Rochester Avenue. Kentucky - 40062" />
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="thrid" id="card" role="tabpanel" aria-labelledby="card-tab">
                                        <h4 className="mb-4">Your Payment Options</h4>
                                        <div className="border rounded">
                                            <Card className="shadow-none mb-0">
                                                <div className="card-header border-bottom d-flex flex-wrap justify-content-between py-4 px-0 mx-4">
                                                    <h5 className="mb-0">Your Default Payment Preference </h5>
                                                    <Link to="#">Update preference</Link>
                                                </div>
                                                <Card.Body>
                                                    <Row>
                                                        <Col lg="2">
                                                            <h6>Name: </h6>
                                                            <h6 className="mt-2">Elon Musk</h6>
                                                        </Col>
                                                        <Col lg="4">
                                                            <h6>Address:</h6>
                                                            <p className="mt-2 mb-0">265, Hill View, Rochester Avenue. Kentucky - 40062  </p>
                                                        </Col>
                                                        <Col lg="4">
                                                            <h6>Payment Method:</h6>
                                                            <p className="mt-2 mb-0">Bank Of America Debit Card ending in 0654</p>
                                                        </Col>
                                                    </Row>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div className="border rounded mt-4">
                                            <Card className="shadow-none mb-0">
                                                <div className="card-header border-bottom d-flex flex-wrap justify-content-between py-4 px-0 mx-4">
                                                    <h5>Your Saved Debit & Credit Cards </h5>
                                                    <Link to="#">Expires On</Link>
                                                </div>
                                                <Card.Body>
                                                    <div className="credit-cards">
                                                        <div className="accordion" id="accordionExample">
                                                            <div className="accordion-item border-0 mb-4">
                                                                <div className="accordion-header" id="headingOne">
                                                                    <div className="accordion-button bg-body" role="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                        <div className="d-flex flex-grow-1 align-items-center ">
                                                                            <Image src={img3} alt="image" className="img-fluid" />
                                                                            <h6 className="ms-3 card-details mb-0">BOA Debit Card 0654</h6>
                                                                        </div>
                                                                        <div>
                                                                            <h6 className="mx-2 mb-0">03 / 2022</h6>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <div className="d-flex flex-column">
                                                                            <h6 className="mb-2">Elon Musk</h6>
                                                                            <p>255, Hill View, Rochester Avenue. Kentucky - 40062 </p>
                                                                            <Link to="#" >
                                                                                <small className="text-primary">Edit | Remove</small>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="accordion-item shadow-none border-0 mb-4">
                                                                <div className="accordion-header" id="headingTwo">
                                                                    <div className="accordion-button bg-body collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                        <div className="d-flex flex-grow-1 align-items-center">
                                                                            <Image src={img3} alt="image" className="img-fluid" />
                                                                            <h6 className="ms-3 card-details mb-0">CB Credit Card 6549</h6>
                                                                        </div>
                                                                        <div>
                                                                            <h6 className="mx-2 mb-0">05 / 2026</h6>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <div className="d-flex flex-column">
                                                                            <h6 className="mb-2">Elon Musk</h6>
                                                                            <p>255, Hill View, Rochester Avenue.Kentucky - 40062 </p>
                                                                            <Link to="#" >
                                                                                <small className="text-primary">Edit | Remove</small>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="accordion-item shadow-none border-0 mb-4">
                                                                <div className="accordion-header" id="headingThree">
                                                                    <div className="accordion-button bg-body collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                        <div className="d-flex flex-grow-1 align-items-center">
                                                                            <Image src={img4} alt="image" className="img-fluid" />
                                                                            <h6 className="ms-3 card-details mb-0">BB Debit Card 7852</h6>
                                                                        </div>
                                                                        <div>
                                                                            <h6 className="mx-2 mb-0">06 / 2030</h6>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <div className="d-flex flex-column">
                                                                            <h6 className="mb-2">Elon Musk</h6>
                                                                            <p>255, Hill View, Rochester Avenue.Kentucky - 40062 </p>
                                                                            <Link to="#" >
                                                                                <small className="text-primary">Edit | Remove</small>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="accordion-item border-0">
                                                                <div className="accordion-header" id="headingFour">
                                                                    <div className="accordion-button bg-body collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                                        <div className="d-flex flex-grow-1 align-items-center">
                                                                            <Image src={img3} alt="image" className="img-fluid" />
                                                                            <h6 className="ms-3 card-details mb-0">BOA Debit Card 6555</h6>
                                                                        </div>
                                                                        <div>
                                                                            <h6 className="text-danger mx-2 mb-0">Expired 08/2021</h6>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <div className="d-flex flex-column">
                                                                            <h6 className="mb-2">Elon Musk</h6>
                                                                            <p>255, Hill View, Rochester Avenue.Kentucky - 40062 </p>
                                                                            <Link to="#" >
                                                                                <small className="text-primary">Edit | Remove</small>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div className="border rounded mt-4">
                                            <Card className="shadow-none mb-0">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <h5 className="mb-3">Add a New Payment Method</h5>
                                                            <h5 className="mb-1">Credit or Debit Cards</h5>
                                                            <p>We accept all major credit and debit card</p>
                                                        </div>
                                                        <div>
                                                            <Image src={img3} alt="user-profile" className="img-fluid mt-3 me-3" />
                                                            <Image src={img5} alt="user-profile" className="img-fluid mt-3 me-3" />
                                                            <Image src={img6} alt="user-profile" className="img-fluid mt-3 me-3" />
                                                            <Image src={img7} alt="user-profile" className="img-fluid mt-3 me-3" />
                                                            <Image src={img4} alt="user-profile" className="img-fluid mt-3 me-3" />
                                                        </div>
                                                    </div>
                                                    <Button className="btn btn-primary mt-3">Add a credit or debit card</Button>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="four" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <Card className="border shadow-none">
                                            <div className="card-header border-bottom py-4 px-0 mx-4">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h4 className="mb-0">Profile Details</h4>
                                                    <button className="btn btn-primary">Edit Profile</button>
                                                </div>
                                            </div>
                                            <Card.Body className="p-0 pt-3">
                                                <div className="table-responsive">
                                                    <Table className="table table-borderless mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <th>Full Name:</th>
                                                                <td>Elon Musk</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Contact Number:</th>
                                                                <td>(303) 555-0105</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Address:</th>
                                                                <td>265, Hill View, Rochester Avenue. Kentucky - 40062</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Email Id:</th>
                                                                <td>elon.musk@gmail.com</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Password:</th>
                                                                <td>*************</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                        <Card className="border shadow-none">
                                            <div className="card-header border-bottom py-4 px-0 mx-4">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h4 className="mb-0">Edit Profile Details</h4>
                                                </div>
                                            </div>
                                            <Card.Body>
                                                <h6 className="mb-2">Avatar</h6>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <div className="position-relative">
                                                        <Image src={img8} alt="user-profile" className="img-fluid edit-img border border-white border-4 rounded-circle" />
                                                        <div className="iq-icon-edit position-absolute btn btn-primary btn-sm rounded-circle p-1">
                                                            <svg className="upload-button" width="20" viewBox="0 0 24 24">
                                                                <path fill="#ffffff" d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" />
                                                            </svg>
                                                        </div>
                                                        <div className="iq-icon-cancel position-absolute btn btn-primary btn-sm rounded-circle p-1">
                                                            <svg width="20" viewBox="0 0 24 24" fill="none">
                                                                <path d="M17 7L7 17M7 7L17 17L7 7Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="text-center">Allowed file type : png, jpg, jpeg</p>
                                                <Form className="mt-4">
                                                    <Row>
                                                        <Col lg="6">
                                                            <div className="form-group">
                                                                <Form.Label htmlFor="firstname">First Name</Form.Label>
                                                                <Form.Control type="text" id="firstname" />
                                                            </div>
                                                        </Col>
                                                        <Col lg="6">
                                                            <div className="form-group">
                                                                <Form.Label htmlFor="lastname">Last Name</Form.Label>
                                                                <Form.Control type="text" id="lastname" />
                                                            </div>
                                                        </Col>
                                                        <Col lg="6">
                                                            <div className="form-group">
                                                                <Form.Label htmlFor="contact">Contact Number</Form.Label>
                                                                <Form.Control type="text" id="contact" />
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
                                                                <Form.Label htmlFor="house">House no./ Flat no.</Form.Label>
                                                                <Form.Control type="text" id="house" />
                                                            </div>
                                                        </Col>
                                                        <Col lg="6">
                                                            <div className="form-group">
                                                                <Form.Label htmlFor="landmark">Landmark</Form.Label>
                                                                <Form.Control type="text" id="landmark" />
                                                            </div>
                                                        </Col>
                                                        <Col lg="6">
                                                            <div className="form-group">
                                                                <Form.Label htmlFor="address">Street Address</Form.Label>
                                                                <Form.Control type="text" id="address" />
                                                            </div>
                                                        </Col>
                                                        <Col lg="6">
                                                            <div className="form-group">
                                                                <Form.Label htmlFor="city">Town/ City</Form.Label>
                                                                <Form.Control type="text" id="city" />
                                                            </div>
                                                        </Col>
                                                        <Col lg="6">
                                                            <div className="form-group">
                                                                <Form.Label htmlFor="state">State/ Country</Form.Label>
                                                                <Form.Control type="text" id="state" placeholder=" " />
                                                            </div>
                                                        </Col>
                                                        <Col lg="6">
                                                            <div className="form-group">
                                                                <Form.Label htmlFor="code">Postcode/ ZIP Code</Form.Label>
                                                                <Form.Control type="text" id="code" placeholder=" " />
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <Button type="submit" className="btn btn-primary">Save Changes</Button>
                                                </Form>
                                            </Card.Body>
                                        </Card>
                                        <Card className="border border-dashed border-2 shadow-none mb-0 rounded border-primary">
                                            <div className="card-header">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h4 className="mb-0">Secure Your Account</h4>
                                                    <Button className="btn btn-primary">Enable</Button>
                                                </div>
                                            </div>
                                            <Card.Body>
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" viewBox="0 0 24 24" fill="none" className="text-success">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M11.9845 21.606C11.9845 21.606 19.6565 19.283 19.6565 12.879C19.6565 6.474 19.9345 5.974 19.3195 5.358C18.7035 4.742 12.9905 2.75 11.9845 2.75C10.9785 2.75 5.26551 4.742 4.65051 5.358C4.03451 5.974 4.31251 6.474 4.31251 12.879C4.31251 19.283 11.9845 21.606 11.9845 21.606Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M9.38591 11.8746L11.2779 13.7696L15.1759 9.86963" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                    <p className="ms-3 mb-0">Two-factor authentication adds an extra layer of security to your account. To log in, in addition you'll need to provide a 6 digit code</p>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="4">
                    <Card>
                        <Card.Header>
                            <h4 className="mb-0">Buy It Again</h4>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-inline m-0 p-0">
                                <li className="d-flex align-items-center mb-4 flex-wrap justify-content-center">
                                    <div className="mb-0 mb-xl-0 mb-md-0 mb-lg-4">
                                        <Image src={img9} alt="user-profile" className="img-fluid rounded object-contain avatar-80 iq-product-bg" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <Link to="/e-commerce/product-details" className="h6 iq-product-detail">
                                            Biker’s Jacket
                                        </Link>
                                        <h5 className="text-primary mt-2 mb-0">$50.56</h5>
                                        <small className="mb-0">Buy on Jan 2020</small>
                                    </div>
                                    <Button className="primary btn-icon btn-sm rounded-circle" to="/e-commerce/order-process" role="button">
                                        <span className="btn-inner">
                                            <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M5.91064 20.5886C5.91064 19.7486 6.59064 19.0686 7.43064 19.0686C8.26064 19.0686 8.94064 19.7486 8.94064 20.5886C8.94064 21.4186 8.26064 22.0986 7.43064 22.0986C6.59064 22.0986 5.91064 21.4186 5.91064 20.5886ZM17.1606 20.5886C17.1606 19.7486 17.8406 19.0686 18.6806 19.0686C19.5106 19.0686 20.1906 19.7486 20.1906 20.5886C20.1906 21.4186 19.5106 22.0986 18.6806 22.0986C17.8406 22.0986 17.1606 21.4186 17.1606 20.5886Z" fill="currentColor"></path>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M20.1907 6.34909C20.8007 6.34909 21.2007 6.55909 21.6007 7.01909C22.0007 7.47909 22.0707 8.13909 21.9807 8.73809L21.0307 15.2981C20.8507 16.5591 19.7707 17.4881 18.5007 17.4881H7.59074C6.26074 17.4881 5.16074 16.4681 5.05074 15.1491L4.13074 4.24809L2.62074 3.98809C2.22074 3.91809 1.94074 3.52809 2.01074 3.12809C2.08074 2.71809 2.47074 2.44809 2.88074 2.50809L5.26574 2.86809C5.60574 2.92909 5.85574 3.20809 5.88574 3.54809L6.07574 5.78809C6.10574 6.10909 6.36574 6.34909 6.68574 6.34909H20.1907ZM14.1307 11.5481H16.9007C17.3207 11.5481 17.6507 11.2081 17.6507 10.7981C17.6507 10.3781 17.3207 10.0481 16.9007 10.0481H14.1307C13.7107 10.0481 13.3807 10.3781 13.3807 10.7981C13.3807 11.2081 13.7107 11.5481 14.1307 11.5481Z" fill="currentColor"></path>
                                            </svg>
                                        </span>
                                    </Button>
                                </li>
                                <li className="d-flex align-items-center mb-4 flex-wrap justify-content-center">
                                    <div className="mb-0 mb-xl-0 mb-md-0 mb-lg-4">
                                        <Image src={img10} alt="user-profile" className="img-fluid rounded object-contain avatar-80 iq-product-bg" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <Link to="/e-commerce/product-details" className="h6 iq-product-detail">
                                            Blue Side Bag
                                        </Link>
                                        <h5 className="text-primary mt-2  mb-0">$50.56</h5>
                                        <small className="mb-0">Buy on Jan 2020</small>
                                    </div>
                                    <Button className="primary btn-icon btn-sm rounded-circle" to="/e-commerce/order-process" role="button">
                                        <span className="btn-inner">
                                            <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M5.91064 20.5886C5.91064 19.7486 6.59064 19.0686 7.43064 19.0686C8.26064 19.0686 8.94064 19.7486 8.94064 20.5886C8.94064 21.4186 8.26064 22.0986 7.43064 22.0986C6.59064 22.0986 5.91064 21.4186 5.91064 20.5886ZM17.1606 20.5886C17.1606 19.7486 17.8406 19.0686 18.6806 19.0686C19.5106 19.0686 20.1906 19.7486 20.1906 20.5886C20.1906 21.4186 19.5106 22.0986 18.6806 22.0986C17.8406 22.0986 17.1606 21.4186 17.1606 20.5886Z" fill="currentColor"></path>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M20.1907 6.34909C20.8007 6.34909 21.2007 6.55909 21.6007 7.01909C22.0007 7.47909 22.0707 8.13909 21.9807 8.73809L21.0307 15.2981C20.8507 16.5591 19.7707 17.4881 18.5007 17.4881H7.59074C6.26074 17.4881 5.16074 16.4681 5.05074 15.1491L4.13074 4.24809L2.62074 3.98809C2.22074 3.91809 1.94074 3.52809 2.01074 3.12809C2.08074 2.71809 2.47074 2.44809 2.88074 2.50809L5.26574 2.86809C5.60574 2.92909 5.85574 3.20809 5.88574 3.54809L6.07574 5.78809C6.10574 6.10909 6.36574 6.34909 6.68574 6.34909H20.1907ZM14.1307 11.5481H16.9007C17.3207 11.5481 17.6507 11.2081 17.6507 10.7981C17.6507 10.3781 17.3207 10.0481 16.9007 10.0481H14.1307C13.7107 10.0481 13.3807 10.3781 13.3807 10.7981C13.3807 11.2081 13.7107 11.5481 14.1307 11.5481Z" fill="currentColor"></path>
                                            </svg>
                                        </span>
                                    </Button>
                                </li>
                                <li className="d-flex align-items-center mb-4 flex-wrap justify-content-center">
                                    <div className="mb-0 mb-xl-0 mb-md-0 mb-lg-4">
                                        <Image src={img11} alt="user-profile" className="img-fluid rounded object-contain avatar-80 iq-product-bg" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <Link to="/e-commerce/product-details" className="h6 iq-product-detail">
                                            Pink Sweater
                                        </Link>
                                        <h5 className="text-primary mt-2  mb-0">$50.56</h5>
                                        <small className="mb-0">Buy on Jan 2020</small>
                                    </div>
                                    <Button className="primary btn-icon btn-sm rounded-circle" to="/e-commerce/order-process" role="button">
                                        <span className="btn-inner">
                                            <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M5.91064 20.5886C5.91064 19.7486 6.59064 19.0686 7.43064 19.0686C8.26064 19.0686 8.94064 19.7486 8.94064 20.5886C8.94064 21.4186 8.26064 22.0986 7.43064 22.0986C6.59064 22.0986 5.91064 21.4186 5.91064 20.5886ZM17.1606 20.5886C17.1606 19.7486 17.8406 19.0686 18.6806 19.0686C19.5106 19.0686 20.1906 19.7486 20.1906 20.5886C20.1906 21.4186 19.5106 22.0986 18.6806 22.0986C17.8406 22.0986 17.1606 21.4186 17.1606 20.5886Z" fill="currentColor"></path>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M20.1907 6.34909C20.8007 6.34909 21.2007 6.55909 21.6007 7.01909C22.0007 7.47909 22.0707 8.13909 21.9807 8.73809L21.0307 15.2981C20.8507 16.5591 19.7707 17.4881 18.5007 17.4881H7.59074C6.26074 17.4881 5.16074 16.4681 5.05074 15.1491L4.13074 4.24809L2.62074 3.98809C2.22074 3.91809 1.94074 3.52809 2.01074 3.12809C2.08074 2.71809 2.47074 2.44809 2.88074 2.50809L5.26574 2.86809C5.60574 2.92909 5.85574 3.20809 5.88574 3.54809L6.07574 5.78809C6.10574 6.10909 6.36574 6.34909 6.68574 6.34909H20.1907ZM14.1307 11.5481H16.9007C17.3207 11.5481 17.6507 11.2081 17.6507 10.7981C17.6507 10.3781 17.3207 10.0481 16.9007 10.0481H14.1307C13.7107 10.0481 13.3807 10.3781 13.3807 10.7981C13.3807 11.2081 13.7107 11.5481 14.1307 11.5481Z" fill="currentColor"></path>
                                            </svg>
                                        </span>
                                    </Button>
                                </li>
                                <li className="d-flex align-items-center flex-wrap justify-content-center">
                                    <div className="mb-0 mb-xl-0 mb-md-0 mb-lg-4">
                                        <Image src={img12} alt="user-profile" className="img-fluid rounded object-contain avatar-80 iq-product-bg" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <Link to="/e-commerce/product-details" className="h6 iq-product-detail">
                                            Pink Sweater
                                        </Link>
                                        <h5 className="text-primary mt-2  mb-0">$50.56</h5>
                                        <small className="mb-0">Buy on Jan 2020</small>
                                    </div>
                                    <Button className="primary btn-icon btn-sm rounded-circle" to="/e-commerce/order-process" role="button">
                                        <span className="btn-inner">
                                            <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M5.91064 20.5886C5.91064 19.7486 6.59064 19.0686 7.43064 19.0686C8.26064 19.0686 8.94064 19.7486 8.94064 20.5886C8.94064 21.4186 8.26064 22.0986 7.43064 22.0986C6.59064 22.0986 5.91064 21.4186 5.91064 20.5886ZM17.1606 20.5886C17.1606 19.7486 17.8406 19.0686 18.6806 19.0686C19.5106 19.0686 20.1906 19.7486 20.1906 20.5886C20.1906 21.4186 19.5106 22.0986 18.6806 22.0986C17.8406 22.0986 17.1606 21.4186 17.1606 20.5886Z" fill="currentColor"></path>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M20.1907 6.34909C20.8007 6.34909 21.2007 6.55909 21.6007 7.01909C22.0007 7.47909 22.0707 8.13909 21.9807 8.73809L21.0307 15.2981C20.8507 16.5591 19.7707 17.4881 18.5007 17.4881H7.59074C6.26074 17.4881 5.16074 16.4681 5.05074 15.1491L4.13074 4.24809L2.62074 3.98809C2.22074 3.91809 1.94074 3.52809 2.01074 3.12809C2.08074 2.71809 2.47074 2.44809 2.88074 2.50809L5.26574 2.86809C5.60574 2.92909 5.85574 3.20809 5.88574 3.54809L6.07574 5.78809C6.10574 6.10909 6.36574 6.34909 6.68574 6.34909H20.1907ZM14.1307 11.5481H16.9007C17.3207 11.5481 17.6507 11.2081 17.6507 10.7981C17.6507 10.3781 17.3207 10.0481 16.9007 10.0481H14.1307C13.7107 10.0481 13.3807 10.3781 13.3807 10.7981C13.3807 11.2081 13.7107 11.5481 14.1307 11.5481Z" fill="currentColor"></path>
                                            </svg>
                                        </span>
                                    </Button>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                    <div className="overflow-hidden collection-slider">
                        <Swiper className="p-0 m-0 mb-4 swiper-wrapper list-inline"
                            slidesPerView={1}
                            loop={true}
                            centeredSlides={true}
                            autoplay={true}
                            spaceBetween={8}
                            breakpoints={{
                                320: { slidesPerView: 1 },
                                550: { slidesPerView: 1 },
                                991: { slidesPerView: 1 },
                                1400: { slidesPerView: 1 },
                                1500: { slidesPerView: 1 },
                                1920: { slidesPerView: 1 },
                                2040: { slidesPerView: 1 },
                                2440: { slidesPerView: 1 }
                            }}>
                            <SwiperSlide className="card-slide">
                                <Card>
                                    <Card.Body>
                                        <div className="d-flex justify-content-center">
                                            <Image src={img13} className="img-fluid object-contain avatar-100" alt="product" />
                                        </div>
                                        <div className="text-center">
                                            <h6 className="text-primary">
                                                New Collection for you
                                            </h6>
                                            <p className="small">Get 20 % off on Headphones</p>
                                            <Button className="primary" type="submit">View Now</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide className="card-slide">
                                <Card>
                                    <Card.Body>
                                        <div className="d-flex justify-content-center">
                                            <Image src={img14} className="img-fluid object-contain avatar-100" alt="product" />
                                        </div>
                                        <div className="text-center">
                                            <h6 className="text-primary">
                                                New Collection for you
                                            </h6>
                                            <p className="small">Get 20 % off on Biker's Jacket</p>
                                            <Button className="btn btn-primary" type="submit">View Now</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Col>
                <ProductSlider />
            </Row>
        </Fragment>
    )
})

Userprofile.displayName = "Userprofile"
export default Userprofile
