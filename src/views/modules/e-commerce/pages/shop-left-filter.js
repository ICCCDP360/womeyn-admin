import React,{useState,memo,Fragment} from 'react';

// React-bootstrap
import {Row, Col,Button, Image, Collapse} from 'react-bootstrap';

// Router
import {Link} from 'react-router-dom';

//Components
import Card from '../../../../components/bootstrap/card'
import ProductCard from "../components/product-card"
import ProductCardListView from "../components/product-card-list-view"
import FilterRating from "../components/filter-rating"
import FilterOptions from "../components/filter-options"
import RangeSlider from '../components/range-slider'

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';
// Import Swiper styles
import 'swiper/css';

//Img
import img1 from '../../../../assets/modules/e-commerce/images/01.png';
import img2 from '../../../../assets/modules/e-commerce/images/02.png';
import img3 from '../../../../assets/modules/e-commerce/images/03.png';
import img4 from '../../../../assets/modules/e-commerce/images/04.png';
import img5 from '../../../../assets/modules/e-commerce/images/05.png';
import img6 from '../../../../assets/modules/e-commerce/images/06.png';
import img7 from '../../../../assets/modules/e-commerce/images/2.png';
import img8 from '../../../../assets/modules/e-commerce/images/1.png';

SwiperCore.use([Autoplay]);


const Shopleftfilter = memo(() => {
    const [open, setOpen] = useState(true);
    
    return (
        <Fragment>
            <Row>
                <Col lg="3">
                    <Card className="iq-filter-card">
                        <Card.Header className="border-bottom px-0 py-4 mx-4">
                            <h4 className="list-main mb-0">Filters</h4>
                        </Card.Header>
                        <Card.Body>
                            <Button 
                                href="#"
                                onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}
                                bsPrefix="bg-transparent iq-custom-collapse w-100 d-flex justify-content-between pb-3">
                                    <h5 className="mb-0">Categories</h5>
                                    <i className="right-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </i>
                                </Button>
                                <Collapse in={open}>
                                    <div  id="iq-product-filter-01">
                                        <div className="mt-2">
                                        <span>Price</span>
                                                <RangeSlider />
                                                <div className="product-ratings mt-2">
                                                    <h5 className="py-3 mb-0">
                                                        Avg. Customer Review
                                                    </h5>
                                                    <div>
                                                        <FilterRating id="01" count={5} count1={0} productChecked="Checked" />
                                                        <FilterRating id="02" count={4} count1={1}/>
                                                        <FilterRating id="03" count={3} count1={2}/>
                                                        <FilterRating id="04" count={2} count1={3}/>
                                                        <FilterRating id="05" count={1} count1={4}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </Collapse>
                            <Link className="bg-transparent d-flex justify-content-between iq-custom-collapse py-3" data-bs-toggle="collapse" to="#iq-product-filter-02" role="button" aria-expanded="true" aria-controls="iq-product-filter-02">
                                <h5 className="mb-0">Type</h5>
                                <i className="right-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </i>
                            </Link>
                            <div className="collapse show" id="iq-product-filter-02">
                                <FilterOptions uniqueName="type" id="01" productName="Accessories" productChecked="Checked" />
                                <FilterOptions uniqueName="type" id="02" productName="Bags" />
                                <FilterOptions uniqueName="type" id="03" productName="Men's Fashion" />
                                <FilterOptions uniqueName="type" id="04" productName="Women's Fashion" />
                                <FilterOptions uniqueName="type" id="05" productName="Fashion" />
                            </div>
                            <Link className="bg-transparent d-flex justify-content-between iq-custom-collapse py-3" data-bs-toggle="collapse" to="#iq-product-filter-03" role="button" aria-expanded="true" aria-controls="iq-product-filter-03">
                                <h5 className="mb-0">Discount</h5>
                                <i className="right-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </i>
                            </Link>
                            <div className="collapse show" id="iq-product-filter-03">
                                <FilterOptions uniqueName="discount" id="01" productName="80% Off" />
                                <FilterOptions uniqueName="discount" id="02" productName="50% Off" />
                                <FilterOptions uniqueName="discount" id="03" productName="40% Off" />
                                <FilterOptions uniqueName="discount" id="04" productName="30% Off" />
                                <FilterOptions uniqueName="discount" id="05" productName="20% Off" />
                                <FilterOptions uniqueName="discount" id="06" productName="10% Off" productChecked="Checked" />
                            </div>
                            <Link className="bg-transparent d-flex justify-content-between iq-custom-collapse pt-3" data-bs-toggle="collapse" to="#iq-product-filter-04" role="button" aria-expanded="true" aria-controls="iq-product-filter-04">
                                <h5 className="mb-0">Sellers</h5>
                                <i className="right-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </i>
                            </Link>
                            <div className="collapse show mt-3" id="iq-product-filter-04">
                                <FilterOptions uniqueName="sellers" id="01" productName="Max" />
                                <FilterOptions uniqueName="sellers" id="02" productName="Ajio" />
                                <FilterOptions uniqueName="sellers" id="03" productName="Levi's" />
                                <FilterOptions uniqueName="sellers" id="04" productName="Woodie" />
                                <FilterOptions uniqueName="sellers" id="05" productName="Denim" />
                            </div>
                        </Card.Body>
                    </Card>
                    <div className="overflow-hidden collection-slider">
                        <Swiper className="p-0 m-0 mb-4 swiper-wrapper list-inline"
                            slidesPerView= {1}
                            loop= {true}
                            centeredSlides= {true}
                            autoplay= {true}
                            spaceBetween= {8}
                            breakpoints= {{
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
                                            <Image src={img7} className="img-fluid object-contain avatar-100" alt="product"/>
                                        </div>
                                        <div className="text-center">
                                            <h6 className="text-primary">
                                                New Collection for you
                                            </h6>
                                            <p className="small">Get 20 % off on Headphones</p>
                                            <Button className="btn btn-primary" type="submit">View Now</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide className="card-slide">
                                <Card>
                                    <Card.Body>
                                        <div className="d-flex justify-content-center">
                                            <Image src={img8} className="img-fluid object-contain avatar-100" alt="product"/>
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
                <Col lg="9">
                    <div className="d-flex justify-content-between align-items-center">
                        <h4 className="mb-0">Fashion</h4>
                        <ul className="nav nav-pills mb-0 iq-product-filter d-flex bg-transparent align-items-center" id="pills-tab" role="tablist">
                            <li className="nav-item dropdown d-xl-block">
                                <div className="form-group input-group mb-0 search-input ">
                                    <input type="search" className="form-control" placeholder="Search..."/>
                                    <span className="input-group-text" >
                                        <svg width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                                            <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </span>
                                </div>
                            </li>
                            <li className="nav-item ms-2" role="presentation">
                                <Button bsPrefix="nav-link btn btn-sm btn-icon rounded-pill active" id="grid-view-tab" data-bs-toggle="pill" data-bs-target="#pills-grid-view" to="#" role="tab" aria-controls="pills-grid-view" aria-selected="true">
                                    <span className="btn-inner">
                                        <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M16.0756 2H19.4616C20.8639 2 22.0001 3.14585 22.0001 4.55996V7.97452C22.0001 9.38864 20.8639 10.5345 19.4616 10.5345H16.0756C14.6734 10.5345 13.5371 9.38864 13.5371 7.97452V4.55996C13.5371 3.14585 14.6734 2 16.0756 2Z" fill="currentColor"></path>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z" fill="currentColor"></path>
                                        </svg>
                                    </span>
                                </Button>
                            </li>
                            <li className="nav-item ms-2" role="presentation">
                                <Button bsPrefix="nav-link btn btn-sm btn-icon rounded-pill" id="list-view-tab" data-bs-toggle="pill" data-bs-target="#pills-list-view" to="#" role="tab" aria-controls="pills-list-view" aria-selected="false">
                                    <span className="btn-inner">
                                        <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M10.0833 15.958H3.50777C2.67555 15.958 2 16.6217 2 17.4393C2 18.2559 2.67555 18.9207 3.50777 18.9207H10.0833C10.9155 18.9207 11.5911 18.2559 11.5911 17.4393C11.5911 16.6217 10.9155 15.958 10.0833 15.958Z" fill="currentColor"></path>
                                            <path opacity="0.4" d="M22.0001 6.37867C22.0001 5.56214 21.3246 4.89844 20.4934 4.89844H13.9179C13.0857 4.89844 12.4102 5.56214 12.4102 6.37867C12.4102 7.1963 13.0857 7.86 13.9179 7.86H20.4934C21.3246 7.86 22.0001 7.1963 22.0001 6.37867Z" fill="currentColor"></path>
                                            <path d="M8.87774 6.37856C8.87774 8.24523 7.33886 9.75821 5.43887 9.75821C3.53999 9.75821 2 8.24523 2 6.37856C2 4.51298 3.53999 3 5.43887 3C7.33886 3 8.87774 4.51298 8.87774 6.37856Z" fill="currentColor"></path>
                                            <path d="M21.9998 17.3992C21.9998 19.2648 20.4609 20.7777 18.5609 20.7777C16.6621 20.7777 15.1221 19.2648 15.1221 17.3992C15.1221 15.5325 16.6621 14.0195 18.5609 14.0195C20.4609 14.0195 21.9998 15.5325 21.9998 17.3992Z" fill="currentColor"></path>
                                        </svg>
                                    </span>
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <span>Filter</span>
                    </div>
                    <div className="d-flex mb-4 mt-2 align-items-center">
                        <div className="bg-soft-primary rounded-pill iq-custom-badge">
                            5 star
                            <Button className="btn btn-primary btn-sm rounded-pill iq-cancel-btn">
                                <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </Button>
                        </div>
                        <div className="bg-soft-primary rounded-pill iq-custom-badge">
                            Watch
                            <Button className="btn btn-primary btn-sm rounded-pill iq-cancel-btn btn btn-primary">
                                <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </Button>
                        </div>
                        <div className="bg-soft-primary rounded-pill iq-custom-badge">
                            10% off
                            <Button className="btn btn-primary btn-sm rounded-pill iq-cancel-btn btn btn-primary">
                                <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </Button>
                        </div>
                    </div>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-grid-view" role="tabpanel" aria-labelledby="grid-view-tab">
                            <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
                                <Col>
                                    <ProductCard productName="Casual Shoes" productImage={img1} productRating="3.5"  productPrice="$56.00" />
                                </Col>
                                <Col>
                                    <ProductCard productName="Biker's Jacket" productImage={img2} productRating="3.5"  productPrice="$56.00" statusDetails="New" statusColor="primary"  />
                                </Col>
                                <Col>
                                    <ProductCard productName="Knitted Shrug" productImage={img3} productRating="3.5"  productPrice="$56.00" />
                                </Col>
                                <Col>
                                    <ProductCard productName="Blue Handbag" productImage={img4} productRating="3.5"  productPrice="$56.00" />
                                </Col>
                                <Col>
                                    <ProductCard productName="Pink Sweater" productImage={img5} productRating="3.5"  productPrice="$56.00" statusDetails="Sold" statusColor="warning" />
                                </Col>
                                <Col>
                                    <ProductCard productName="Pink Handbag" productImage={img6} productRating="3.5"  productPrice="$56.00" />
                                </Col>
                                <Col>
                                    <ProductCard productName="Casual Shoes" productImage={img1} productRating="3.5"  productPrice="$56.00" />
                                </Col>
                                <Col>
                                    <ProductCard productName="Biker's Jacket" productImage={img2} productRating="3.5"  productPrice="$56.00" statusDetails="New" statusColor="primary"  />
                                </Col>
                                <Col>
                                    <ProductCard productName="Knitted Shrug" productImage={img3} productRating="3.5"  productPrice="$56.00" />
                                </Col>
                            </Row>
                        </div>
                        <div className="tab-pane fade" id="pills-list-view" role="tabpanel" aria-labelledby="list-view-tab">
                            <Row className="row-cols-1">
                                <Col>
                                    <ProductCardListView productName="Casual Shoes" productImage={img1} productRating="3.9" productPrice="$56.00" statusColor="success" statusIdentity="In Stock" deliveryDate="Thu Jan 30" replaceTime="10" />
                                    <ProductCardListView productName="Biker's Jacket" productImage={img2} productRating="3.5" productPrice="$65.00" statusColor="danger" statusIdentity="Out of Stock" deliveryDate="Thu Jan 31" replaceTime="10" />
                                    <ProductCardListView productName="Knitted Shrug" productImage={img3} productRating="3.5" productPrice="$65.00" statusColor="warning" statusIdentity="Limited" deliveryDate="Thu Jan 22" replaceTime="20" />
                                    <ProductCardListView productName="Blue Handbag" productImage={img4} productRating="3.5" productPrice="$65.00" statusColor="success" statusIdentity="In Stock" deliveryDate="Thu Jan 25" replaceTime="15" />
                                    <ProductCardListView productName="Pink Triusers" productImage={img5} productRating="3.5" productPrice="$65.00" statusColor="success" statusIdentity="In Stock" deliveryDate="Thu Jan 26" replaceTime="10" />
                                    <ProductCardListView productName="Pink Handbag" productImage={img6} productRating="3.5" productPrice="$65.00" statusColor="success" statusIdentity="In Stock" deliveryDate="Thu Jan 25" replaceTime="05" />
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="text-center mb-4">
                        <Button className="btn btn-primary">Load More</Button>
                    </div>
                </Col>
            </Row>
        </Fragment>
    )
})

Shopleftfilter.displayName="Shopleftfilter"
export default Shopleftfilter
