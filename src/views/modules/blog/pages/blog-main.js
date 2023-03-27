import {memo,Fragment} from 'react'

// React-bootstrap
import {Row, Col, Image} from 'react-bootstrap'

// Router
import {Link} from 'react-router-dom'



//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

//Component
import Card from '../../../../components/bootstrap/card'
import TopcategoriesCard from '../components/topcategories-card'
import Blogcard from '../components/blogcard'
import Incomingblog from '../components/incomingblog'
import Upcomingblog from '../components/upcomingblog'

//Img
import img1 from '../../../../assets/modules/blog/images/blog-avatar/01.png'
import img2 from '../../../../assets/modules/blog/images/blog-dashboard/09.png'
import img3 from '../../../../assets/modules/blog/images/blog-dashboard/10.png'
import img4 from '../../../../assets/modules/blog/images/blog-dashboard/11.png'
import img5 from '../../../../assets/modules/blog/images/blog-dashboard/12.png'
import img6 from '../../../../assets/modules/blog/images/blog-avatar/02.png'
import img7 from '../../../../assets/modules/blog/images/blog-avatar/03.png'
import img8 from '../../../../assets/modules/blog/images/blog-avatar/04.png'
import img9 from '../../../../assets/modules/blog/images/blog-avatar/05.png'
import img10 from '../../../../assets/modules/blog/images/blog-avatar/06.png'
import img11 from '../../../../assets/modules/blog/images/blog-dashboard/07.png'
import img12 from '../../../../assets/modules/blog/images/blog-dashboard/05.png'
import img13 from '../../../../assets/modules/blog/images/blog-dashboard/06.png'
import img14 from '../../../../assets/modules/blog/images/blog-dashboard/01.png'
import img15 from '../../../../assets/modules/blog/images/blog-dashboard/02.png'
import img16 from '../../../../assets/modules/blog/images/blog-dashboard/03.png'
import img17 from '../../../../assets/modules/blog/images/blog-dashboard/04.png'
import img18 from '../../../../assets/modules/blog/images/blog-dashboard/13.png'
import img19 from '../../../../assets/modules/blog/images/blog-dashboard/14.png'


const BlogMain = memo(() => {
    return (
        <Fragment>
            <Row>
                <Col lg="8">
                    <div className="overflow-hidden blog-data-slider slider-circle-btn position-relative">
                        <Swiper className="p-0 m-0 mb-2 swiper-wrapper list-inline"
                            slidesPerView={1}
                            spaceBetween={32}
                            modules={[Navigation]}
                            navigation={{
                                nextEl: '#swiper-button-next1',
                                prevEl: '#swiper-button-prev1'
                            }}>
                            <SwiperSlide>
                                <Incomingblog blogImage={img14} blogDate="14 Dec 2021" blogheader="Summer Cocktails and Mocktails" blogsData1="Food" blogsData2="Simmons" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Incomingblog blogImage={img18} blogDate="20 Dec 2021" blogheader="Curious About Vegan Skincare?" blogsData1="Lifestyle" blogsData2="Jenny Wilson" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Incomingblog blogImage={img19} blogDate="22 Dec 2021" blogheader="Foods for a Healthy System" blogsData1="Health" blogsData2="Jane cooper" />
                            </SwiperSlide>
                        <div id="swiper-button-next1" className="swiper-button swiper-button-next"></div>
                        <div id="swiper-button-prev1" className="swiper-button swiper-button-prev"></div>
                        </Swiper>
                    </div>
                </Col>
                <Col lg="4">
                    <Card>
                        <div className="card-header">
                            <h4 className="card-title">Author of the Week</h4>
                        </div>
                        <Card.Body className="card-thumbnail">
                            <div className="d-flex align-items-center">
                                <img className="img-fluid rounded-circle avatar-130" src={img1} alt="user-img" loading="lazy" />
                                <div className="ms-3">
                                    <h6 className="mb-3">Loren Banks</h6>
                                    <div className="d-flex justify-content-start align-items-center gap-2">
                                        <span className="text-primary">Travel </span>
                                        <span> | </span>
                                        <span className="d-flex  align-items-center gap-2">
                                            <svg width="18"  viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M10.1043 0.677006L11.9317 4.32776C12.1108 4.68616 12.4565 4.93467 12.8573 4.99218L16.9453 5.58062C17.9554 5.72644 18.3573 6.95054 17.6263 7.65194L14.6702 10.4924C14.3797 10.7718 14.2474 11.1733 14.3162 11.5676L15.0138 15.5778C15.1856 16.5698 14.1298 17.3267 13.227 16.8574L9.57321 14.9627C9.21502 14.7768 8.78602 14.7768 8.42679 14.9627L4.773 16.8574C3.87023 17.3267 2.81439 16.5698 2.98724 15.5778L3.68385 11.5676C3.75257 11.1733 3.62033 10.7718 3.32982 10.4924L0.37368 7.65194C-0.357285 6.95054 0.0446417 5.72644 1.05466 5.58062L5.14265 4.99218C5.54354 4.93467 5.89028 4.68616 6.06937 4.32776L7.89574 0.677006C8.34765 -0.225669 9.65235 -0.225669 10.1043 0.677006Z" fill="#FFD329"/>
                                            </svg> <span>4.2</span>
                                        </span>
                                    </div>
                                    <p className="my-4">Elit vitae neque velit mattis elementum egestas non, Sem eget.</p>
                                    <div className="d-flex gap-3">
                                        <Link to="/" onClick={(e) => e.preventDefault() }>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.9998 12C23.9998 5.37234 18.6273 0 12.0007 0C5.37201 0 0 5.37218 0 12C0 18.6268 5.37217 24 12.0007 24C18.6275 24 23.9998 18.6268 23.9998 12Z" fill="#3D83D9"></path>
                                                <path d="M9.06396 9.07227H6.28613V17.011H9.06396V9.07227Z" fill="white"></path>
                                                <path d="M7.67514 5.10254C6.80501 5.10254 6.12388 5.90215 6.32007 6.80286C6.43403 7.32607 6.86083 7.74668 7.38588 7.85212C8.28124 8.03193 9.06397 7.35414 9.06397 6.49153C9.06397 5.72568 8.44333 5.10254 7.67514 5.10254Z" fill="white"></path>
                                                <path d="M18.1938 11.511C18.0069 10.0148 17.2585 9.07227 15.2358 9.07227C13.8002 9.07227 13.2293 9.29619 12.9001 9.92284V9.07227H10.6514V17.011H12.9656V12.8554C12.9656 11.818 13.1622 11.0344 14.4449 11.0344C15.7092 11.0344 15.8108 11.9988 15.8108 12.9228V17.0112H18.1939C18.1938 17.0112 18.2379 11.8608 18.1938 11.511Z" fill="white"></path>
                                            </svg>
                                        </Link>
                                        <Link to="/" onClick={(e) => e.preventDefault() }>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24.0002 11.9992C24.0002 5.37225 18.6279 0 12 0C5.37242 0 0 5.37225 0 11.9992C0 18.6262 5.37242 24 12 24C18.6281 24 24.0002 18.6262 24.0002 11.9992Z" fill="#395196"></path>
                                                <path d="M13.0575 9.15703V8.02035C13.0575 7.46672 13.427 7.33737 13.6857 7.33737C13.9452 7.33737 15.2811 7.33737 15.2811 7.33737V4.90325L13.0846 4.89355C10.6466 4.89355 10.093 6.71004 10.093 7.87296V9.15703H8.68359V12.0004H10.1052C10.1052 15.2223 10.1052 19.1073 10.1052 19.1073H12.9477C12.9477 19.1073 12.9477 15.1827 12.9477 12.0004H15.0575L15.317 9.15703H13.0575V9.15703Z" fill="white"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="8">
                    <div>
                        <div className="d-flex justify-content-between mb-4">
                            <h3 className="mb-0">Trending Blogs</h3>
                            <Link to="/blog/blog-details" className="text-body">View All</Link>
                        </div>
                        <Row>
                            <Col lg="6" md="6">
                                <Blogcard blogImage={img11} blogDate="02 Dec 2021" blogcontent="The Expierience: If more of us valued food and cheer and song above hoarded gold."  blogcontent1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dolor at feugiat in tempor maecenas placerat..."/>
                            </Col>
                            <Col lg="6" md="6">
                                <Blogcard blogImage={img12} blogDate="02 Dec 2021" blogcontent="The Ultimate Travel Guide: What To Do, See & Eat."  blogcontent1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dolor at feugiat in tempor maecenas placerat..."/>
                            </Col>
                            <Col lg="6" md="6">
                                <Blogcard blogImage={img13} blogDate="03 Aug 2021" blogcontent="WIT AND DELIGHT: The Advice From A Twenty Something"  blogcontent1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dolor at feugiat in tempor maecenas placerat..."/>
                            </Col>
                            <Col lg="6" md="6">
                                <Blogcard blogImage={img11} blogDate="02 Dec 2021" blogcontent="The Foreign and Domestic Culinary Adventures: An Art"  blogcontent1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dolor at feugiat in tempor maecenas placerat..."/>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg="4">
                    <div>
                        <div className="d-flex justify-content-between mb-3">
                            <h3 className="mb-0">Top Categories</h3>
                            <Link to="/blog/blog-details" className="text-body">View All</Link>
                        </div>
                        <Row className="row-cols-1 row-cols-md-2">
                            <Col>
                                <TopcategoriesCard img={img2} header="Food" subHeader="6542 Post" />
                            </Col>
                            <Col>
                                <TopcategoriesCard img={img3} header="Travel" subHeader="3545 Post" />
                            </Col>
                            <Col>
                                <TopcategoriesCard img={img4} header="Workspace" subHeader="1565 Post" />
                            </Col>
                            <Col>
                                <TopcategoriesCard img={img5} header="Photography" subHeader="8985 Post" />
                            </Col>
                        </Row>
                    </div>
                    <Card>
                        <Card.Header>
                            <h4 className="mb-0">Suggested Writers For You</h4>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <Image className="img-fluid me-3 avatar-50 rounded-circle" src={img6} alt="01"/>
                                    <div>
                                        <h6 className="mb-0">Jane Cooper</h6>
                                        <small className="para-ellipsis-1">Lorem ipsum dolor consectetur sit amet.</small>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <svg className="me-2" width="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.1043 1.17701L11.9317 4.82776C12.1108 5.18616 12.4565 5.43467 12.8573 5.49218L16.9453 6.08062C17.9554 6.22644 18.3573 7.45054 17.6263 8.15194L14.6702 10.9924C14.3797 11.2718 14.2474 11.6733 14.3162 12.0676L15.0138 16.0778C15.1856 17.0698 14.1298 17.8267 13.227 17.3574L9.57321 15.4627C9.21502 15.2768 8.78602 15.2768 8.42679 15.4627L4.773 17.3574C3.87023 17.8267 2.81439 17.0698 2.98724 16.0778L3.68385 12.0676C3.75257 11.6733 3.62033 11.2718 3.32982 10.9924L0.37368 8.15194C-0.357285 7.45054 0.0446417 6.22644 1.05466 6.08062L5.14265 5.49218C5.54354 5.43467 5.89028 5.18616 6.06937 4.82776L7.89574 1.17701C8.34765 0.274331 9.65235 0.274331 10.1043 1.17701Z" fill="#FFD329"/>
                                    </svg> 3.5
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-4">
                                <div className="d-flex align-items-center">
                                    <Image className="img-fluid me-3 avatar-50 rounded-circle" src={img7}/>
                                    <div>
                                        <h6 className="mb-0">Wade Warren</h6>
                                        <small className="para-ellipsis-1">Lorem ipsum dolor consectetur sit amet.</small>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <svg className="me-2" width="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.1043 1.17701L11.9317 4.82776C12.1108 5.18616 12.4565 5.43467 12.8573 5.49218L16.9453 6.08062C17.9554 6.22644 18.3573 7.45054 17.6263 8.15194L14.6702 10.9924C14.3797 11.2718 14.2474 11.6733 14.3162 12.0676L15.0138 16.0778C15.1856 17.0698 14.1298 17.8267 13.227 17.3574L9.57321 15.4627C9.21502 15.2768 8.78602 15.2768 8.42679 15.4627L4.773 17.3574C3.87023 17.8267 2.81439 17.0698 2.98724 16.0778L3.68385 12.0676C3.75257 11.6733 3.62033 11.2718 3.32982 10.9924L0.37368 8.15194C-0.357285 7.45054 0.0446417 6.22644 1.05466 6.08062L5.14265 5.49218C5.54354 5.43467 5.89028 5.18616 6.06937 4.82776L7.89574 1.17701C8.34765 0.274331 9.65235 0.274331 10.1043 1.17701Z" fill="#FFD329"/>
                                    </svg> 3.5
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-4">
                                <div className="d-flex align-items-center">
                                    <Image className="img-fluid me-3 avatar-50 rounded-circle" src={img8}/>
                                    <div>
                                        <h6 className="mb-0">Jacob Jones</h6>
                                        <small className="para-ellipsis-1">Lorem ipsum dolor consectetur sit amet.</small>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <svg className="me-2" width="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.1043 1.17701L11.9317 4.82776C12.1108 5.18616 12.4565 5.43467 12.8573 5.49218L16.9453 6.08062C17.9554 6.22644 18.3573 7.45054 17.6263 8.15194L14.6702 10.9924C14.3797 11.2718 14.2474 11.6733 14.3162 12.0676L15.0138 16.0778C15.1856 17.0698 14.1298 17.8267 13.227 17.3574L9.57321 15.4627C9.21502 15.2768 8.78602 15.2768 8.42679 15.4627L4.773 17.3574C3.87023 17.8267 2.81439 17.0698 2.98724 16.0778L3.68385 12.0676C3.75257 11.6733 3.62033 11.2718 3.32982 10.9924L0.37368 8.15194C-0.357285 7.45054 0.0446417 6.22644 1.05466 6.08062L5.14265 5.49218C5.54354 5.43467 5.89028 5.18616 6.06937 4.82776L7.89574 1.17701C8.34765 0.274331 9.65235 0.274331 10.1043 1.17701Z" fill="#FFD329"/>
                                    </svg> 3.5
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-4">
                                <div className="d-flex align-items-center">
                                    <Image className="img-fluid me-3 avatar-50 rounded-circle" src={img9}/>
                                    <div>
                                        <h6 className="mb-0">Cody Fisher</h6>
                                        <small className="para-ellipsis-1">Lorem ipsum dolor consectetur sit amet.</small>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <svg className="me-2" width="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.1043 1.17701L11.9317 4.82776C12.1108 5.18616 12.4565 5.43467 12.8573 5.49218L16.9453 6.08062C17.9554 6.22644 18.3573 7.45054 17.6263 8.15194L14.6702 10.9924C14.3797 11.2718 14.2474 11.6733 14.3162 12.0676L15.0138 16.0778C15.1856 17.0698 14.1298 17.8267 13.227 17.3574L9.57321 15.4627C9.21502 15.2768 8.78602 15.2768 8.42679 15.4627L4.773 17.3574C3.87023 17.8267 2.81439 17.0698 2.98724 16.0778L3.68385 12.0676C3.75257 11.6733 3.62033 11.2718 3.32982 10.9924L0.37368 8.15194C-0.357285 7.45054 0.0446417 6.22644 1.05466 6.08062L5.14265 5.49218C5.54354 5.43467 5.89028 5.18616 6.06937 4.82776L7.89574 1.17701C8.34765 0.274331 9.65235 0.274331 10.1043 1.17701Z" fill="#FFD329"/>
                                    </svg> 3.5
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-4">
                                <div className="d-flex align-items-center">
                                    <Image className="img-fluid me-3 avatar-50 rounded-circle" src={img10}/>
                                    <div>
                                        <h6 className="mb-0">Dianne Russell</h6>
                                        <small className="para-ellipsis-1">Lorem ipsum dolor consectetur sit amet.</small>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <svg className="me-2" width="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.1043 1.17701L11.9317 4.82776C12.1108 5.18616 12.4565 5.43467 12.8573 5.49218L16.9453 6.08062C17.9554 6.22644 18.3573 7.45054 17.6263 8.15194L14.6702 10.9924C14.3797 11.2718 14.2474 11.6733 14.3162 12.0676L15.0138 16.0778C15.1856 17.0698 14.1298 17.8267 13.227 17.3574L9.57321 15.4627C9.21502 15.2768 8.78602 15.2768 8.42679 15.4627L4.773 17.3574C3.87023 17.8267 2.81439 17.0698 2.98724 16.0778L3.68385 12.0676C3.75257 11.6733 3.62033 11.2718 3.32982 10.9924L0.37368 8.15194C-0.357285 7.45054 0.0446417 6.22644 1.05466 6.08062L5.14265 5.49218C5.54354 5.43467 5.89028 5.18616 6.06937 4.82776L7.89574 1.17701C8.34765 0.274331 9.65235 0.274331 10.1043 1.17701Z" fill="#FFD329"/>
                                    </svg> 3.5
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-4">
                                <div className="d-flex align-items-center">
                                    <Image className="img-fluid me-3 avatar-50 rounded-circle" src={img6} alt="01"/>
                                    <div>
                                        <h6 className="mb-0">Jacob Jones</h6>
                                        <small className="para-ellipsis-1">Lorem ipsum dolor consectetur sit amet.</small>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <svg className="me-2" width="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.1043 1.17701L11.9317 4.82776C12.1108 5.18616 12.4565 5.43467 12.8573 5.49218L16.9453 6.08062C17.9554 6.22644 18.3573 7.45054 17.6263 8.15194L14.6702 10.9924C14.3797 11.2718 14.2474 11.6733 14.3162 12.0676L15.0138 16.0778C15.1856 17.0698 14.1298 17.8267 13.227 17.3574L9.57321 15.4627C9.21502 15.2768 8.78602 15.2768 8.42679 15.4627L4.773 17.3574C3.87023 17.8267 2.81439 17.0698 2.98724 16.0778L3.68385 12.0676C3.75257 11.6733 3.62033 11.2718 3.32982 10.9924L0.37368 8.15194C-0.357285 7.45054 0.0446417 6.22644 1.05466 6.08062L5.14265 5.49218C5.54354 5.43467 5.89028 5.18616 6.06937 4.82776L7.89574 1.17701C8.34765 0.274331 9.65235 0.274331 10.1043 1.17701Z" fill="#FFD329"/>
                                    </svg> 3.5
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="row-cols-1">
                <div className="d-flex pb-4 align-items-center justify-content-between">
                    <h4 className="mb-0">Upcoming Blogs</h4>
                    <Link to="/blog/blog-details">View All</Link>
                </div>
                <div className="overflow-hidden upcoming-blog-slider position-relative slider-circle-btn">
                    <Swiper className="p-0 m-0 mb-4 swiper-wrapper list-inline"
                        slidesPerView={3}
                        spaceBetween={32}
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '#next1',
                            prevEl: '#prev1'
                        }}
                        breakpoints= {{
                            320: { slidesPerView: 1 },
                            550: { slidesPerView: 1 },
                            991: { slidesPerView: 2 },
                            1400: { slidesPerView: 2 },
                            1500: { slidesPerView: 2 },
                            1920: { slidesPerView: 3 },
                            2040: { slidesPerView: 3 },
                            2440: { slidesPerView: 3 }
                        }}>
                            <SwiperSlide>
                                <Upcomingblog blogImage={img15} blogDate="14 Dec 2021" blogheader="How to Make Green Bean" blogsData1="Food" blogsData2="Simmons" blogcontent="Lorem ipsum dolor sit amet."/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Upcomingblog blogImage={img16} blogDate="20 Dec 2021" blogheader="Curious About Vegan Skincare?" blogsData1="Lifestyle" blogsData2="Jenny Wilson" blogcontent="Lorem ipsum dolor sit amet."/>
                            </SwiperSlide>  
                            <SwiperSlide>
                                <Upcomingblog blogImage={img17} blogDate="20 Dec 2021" blogheader="Foods for a Healthy System" blogsData1="Health" blogsData2="Jane cooper" blogcontent="Lorem ipsum dolor sit amet."/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Upcomingblog blogImage={img15} blogDate="14 Dec 2021" blogheader="How to Make Green Bean" blogsData1="Food" blogsData2="Simmons" blogcontent="Lorem ipsum dolor sit amet."/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Upcomingblog blogImage={img16} blogDate="20 Dec 2021" blogheader="Curious About Vegan Skincare?" blogsData1="Lifestyle" blogsData2="Jenny Wilson" blogcontent="Lorem ipsum dolor sit amet."/>
                            </SwiperSlide>
                    </Swiper>
                    <div id="next1" className="swiper-button swiper-button-next"></div>
                    <div id="prev1" className="swiper-button swiper-button-prev"></div>
                </div>
            </Row>
        </Fragment>
    )
})

BlogMain.displayName="BlogMain"
export default BlogMain
