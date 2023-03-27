import {memo,Fragment} from 'react'

// React-bootstrap
import {Row, Col, Image, Dropdown} from 'react-bootstrap'

// Router
import {Link} from 'react-router-dom'

// Component
import Topbloglist from '../components/topbloglist'
import CustomToggle from '../../../../components/dropdowns'
import Card from '../../../../components/bootstrap/card'

// Img
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
import img11 from '../../../../assets/modules/blog/images/blog-list/01.png'
import img12 from '../../../../assets/modules/blog/images/blog-list/02.png'
import img13 from '../../../../assets/modules/blog/images/blog-list/03.png'
import img14 from '../../../../assets/modules/blog/images/blog-list/04.png'
import img15 from '../../../../assets/modules/blog/images/blog-list/05.png'

const Bloglist = memo(() => {
    return (
        <Fragment>
            <div className="mb-5">
                <div className="d-flex justify-content-between mb-4">
                    <h4 className="mb-0">Blog List</h4>
                    <Dropdown className="d-flex align-items-center">
                    Sort By :
                    <div className="ms-2">Date
                        <Dropdown.Toggle as={CustomToggle} >
                        <svg width="14" className="ms-1 text-muted" id="dropdownMenuLink1" role="button"  viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 1.5L5 5.5L1 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        </Dropdown.Toggle>
                            <Dropdown.Menu aria-labelledby="dropdownMenuButton1">
                                <li><Dropdown.Item href="#">Action</Dropdown.Item></li>
                                <li><Dropdown.Item href="#">Another action</Dropdown.Item></li>
                                <li><Dropdown.Item href="#">Something else here</Dropdown.Item></li>
                            </Dropdown.Menu>
                        </div>
                    </Dropdown>
                </div>
                <Row>
                    <Col lg="8">
                        <div className="mb-5">
                            <p className="blog-line-around text-secondary mb-0">
                                <span className="blog-line-day px-4">Today</span>
                            </p>
                        </div>
                        <Col>
                            <Topbloglist blogImage={img11} blogDate="14 Dec 2021" blogheader="How to Make Green Bean" blogsmall1="Food" blogsmall2="Brooklyn Simmons" blogcontent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla turpis purus vitae tortor, nisl, aliquam. Sodaleset..."/>
                        </Col>
                        <Col>
                            <Topbloglist blogImage={img12} blogDate="02 Dec 2021" blogheader="The Ultimate Travel Guide: What To Do, See & Eat." blogsmall1="Food" blogsmall2="Brooklyn Simmons" blogcontent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla turpis purus vitae tortor, nisl, aliquam. Sodaleset..."/>
                        </Col>
                        <div className="my-5">
                            <p className="blog-line-around text-secondary mb-0">
                                <span className="blog-line-day px-4">Yesterday</span>
                            </p>
                        </div>
                        <Col>
                            <Topbloglist blogImage={img13} blogDate="03 Aug 2021" blogheader="WIT AND DELIGHT: The Advice From A Twenty Something" blogsmall1="Food" blogsmall2="Brooklyn Simmons" blogcontent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla turpis purus vitae tortor, nisl, aliquam. Sodaleset..."/>
                        </Col>
                        <Col>
                            <Topbloglist blogImage={img14} blogDate="02 Dec 2021" blogheader="The Cheapest Destinations of All Time, A list of Beauty and Budget." blogsmall1="Food" blogsmall2="Brooklyn Simmons" blogcontent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla turpis purus vitae tortor, nisl, aliquam. Sodaleset..."/>
                        </Col>
                        <Col>
                            <Topbloglist blogImage={img15} blogDate="02 Dec 2021" blogheader="The Foreign and Domestic Culinary Adventures: An Art." blogsmall1="Food" blogsmall2="Brooklyn Simmons" blogcontent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla turpis purus vitae tortor, nisl, aliquam. Sodaleset..."/>
                        </Col>
                    </Col>
                    <Col lg="4">
                        <Card>
                            <Card.Header>
                                <h4 className="card-title">Author of the Week</h4>
                            </Card.Header>
                            <Card.Body>
                                <div className="d-flex align-items-center gap-3">
                                    <Image className="img-fluid rounded-circle avatar-130" src={img1} alt="user-img"/>
                                    <div>
                                        <h6 className="mb-3">Loren Banks</h6>
                                        <div className="d-flex justify-content-start align-items-center gap-2">
                                            <span className="text-primary"> Travel</span><span> | </span>
                                            <span className="d-flex  align-items-center">
                                                <svg width="18"  viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.1043 0.677006L11.9317 4.32776C12.1108 4.68616 12.4565 4.93467 12.8573 4.99218L16.9453 5.58062C17.9554 5.72644 18.3573 6.95054 17.6263 7.65194L14.6702 10.4924C14.3797 10.7718 14.2474 11.1733 14.3162 11.5676L15.0138 15.5778C15.1856 16.5698 14.1298 17.3267 13.227 16.8574L9.57321 14.9627C9.21502 14.7768 8.78602 14.7768 8.42679 14.9627L4.773 16.8574C3.87023 17.3267 2.81439 16.5698 2.98724 15.5778L3.68385 11.5676C3.75257 11.1733 3.62033 10.7718 3.32982 10.4924L0.37368 7.65194C-0.357285 6.95054 0.0446417 5.72644 1.05466 5.58062L5.14265 4.99218C5.54354 4.93467 5.89028 4.68616 6.06937 4.32776L7.89574 0.677006C8.34765 -0.225669 9.65235 -0.225669 10.1043 0.677006Z" fill="#FFD329"/>
                                                </svg> <span className="ms-2">4.2</span>
                                            </span>
                                        </div>
                                        <p className="my-4">Elit vitae neque velit mattis elementum egestas non, Sem eget.</p>
                                        <div className="d-flex gap-2">
                                            <Link to="/" onClick={(e) => e.preventDefault()} >
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M23.9998 12C23.9998 5.37234 18.6273 0 12.0007 0C5.37201 0 0 5.37218 0 12C0 18.6268 5.37217 24 12.0007 24C18.6275 24 23.9998 18.6268 23.9998 12Z" fill="#3D83D9"></path>
                                                    <path d="M9.06396 9.07227H6.28613V17.011H9.06396V9.07227Z" fill="white"></path>
                                                    <path d="M7.67514 5.10254C6.80501 5.10254 6.12388 5.90215 6.32007 6.80286C6.43403 7.32607 6.86083 7.74668 7.38588 7.85212C8.28124 8.03193 9.06397 7.35414 9.06397 6.49153C9.06397 5.72568 8.44333 5.10254 7.67514 5.10254Z" fill="white"></path>
                                                    <path d="M18.1938 11.511C18.0069 10.0148 17.2585 9.07227 15.2358 9.07227C13.8002 9.07227 13.2293 9.29619 12.9001 9.92284V9.07227H10.6514V17.011H12.9656V12.8554C12.9656 11.818 13.1622 11.0344 14.4449 11.0344C15.7092 11.0344 15.8108 11.9988 15.8108 12.9228V17.0112H18.1939C18.1938 17.0112 18.2379 11.8608 18.1938 11.511Z" fill="white"></path>
                                                </svg>
                                            </Link>
                                            <Link to="/" onClick={(e) => e.preventDefault()} >
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
                        <Card className="bg-transparent mb-0">
                            <div className="d-flex justify-content-between mb-4">
                                <h3 className="mb-3">Top Categories</h3>
                                <Link to="/" onClick={(e) => e.preventDefault()} className="text-body"> View All</Link>
                            </div>
                            <Card.Body className="p-0">
                                <Row className="row-cols-1 row-cols-md-2">
                                    <Col>
                                        <Card>
                                            <Card.Body className="card-thumbnail">
                                            <Image src={img2} className="img-fluid rounded-top object-cover iq-top-categories" alt="Top-Categories"/>
                                                <div className="text-center">
                                                    <h5 className="mb-0 para-ellipsis-1">Food</h5>
                                                    <small>6542 Post</small>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <Card.Body className="card-thumbnail">
                                                <Image className="img-fluid rounded-top object-cover iq-top-categories" src={img3} alt="01"/>
                                                <div className="text-center">
                                                    <h5 className="mb-0 para-ellipsis-1">Travel</h5>
                                                    <small>3545 Post</small>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <Card.Body className="card-thumbnail">
                                                <Image className="img-fluid rounded-top object-cover iq-top-categories" src={img4} alt="01"/>
                                                <div className="text-center">
                                                    <h5 className="mb-0 para-ellipsis-1">Workspace</h5>
                                                    <small>1565 Post</small>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <Card.Body className="card-thumbnail">
                                                <Image className="img-fluid rounded-top object-cover iq-top-categories" src={img5} alt="01"/>
                                                <div className="text-center">
                                                    <h5 className="mb-0 para-ellipsis-1">Photography</h5>
                                                    <small>8985 Post</small>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <h4 className="mb-0">Suggested Writers For You</h4>
                            </Card.Header>
                            <Card.Body>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-3">
                                        <Image className="img-fluid  avatar-50 rounded-circle" src={img6} alt="01"/>
                                        <div>
                                            <h6 className="mb-0">Jane Cooper</h6>
                                            <small className="text-ellipsis short-1">Lorem ipsum dolor consectetur sit amet.</small>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <svg  width="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M10.1043 1.17701L11.9317 4.82776C12.1108 5.18616 12.4565 5.43467 12.8573 5.49218L16.9453 6.08062C17.9554 6.22644 18.3573 7.45054 17.6263 8.15194L14.6702 10.9924C14.3797 11.2718 14.2474 11.6733 14.3162 12.0676L15.0138 16.0778C15.1856 17.0698 14.1298 17.8267 13.227 17.3574L9.57321 15.4627C9.21502 15.2768 8.78602 15.2768 8.42679 15.4627L4.773 17.3574C3.87023 17.8267 2.81439 17.0698 2.98724 16.0778L3.68385 12.0676C3.75257 11.6733 3.62033 11.2718 3.32982 10.9924L0.37368 8.15194C-0.357285 7.45054 0.0446417 6.22644 1.05466 6.08062L5.14265 5.49218C5.54354 5.43467 5.89028 5.18616 6.06937 4.82776L7.89574 1.17701C8.34765 0.274331 9.65235 0.274331 10.1043 1.17701Z" fill="#FFD329"/>
                                        </svg> 3.5
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <div className="d-flex align-items-center gap-3">
                                        <Image className="img-fluid  avatar-50 rounded-circle" src={img7} alt="01"/>
                                        <div>
                                            <h6 className="mb-0">Wade Warren</h6>
                                            <small className="para-ellipsis-1">Lorem ipsum dolor consectetur sit amet.</small>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <svg  width="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M10.1043 1.17701L11.9317 4.82776C12.1108 5.18616 12.4565 5.43467 12.8573 5.49218L16.9453 6.08062C17.9554 6.22644 18.3573 7.45054 17.6263 8.15194L14.6702 10.9924C14.3797 11.2718 14.2474 11.6733 14.3162 12.0676L15.0138 16.0778C15.1856 17.0698 14.1298 17.8267 13.227 17.3574L9.57321 15.4627C9.21502 15.2768 8.78602 15.2768 8.42679 15.4627L4.773 17.3574C3.87023 17.8267 2.81439 17.0698 2.98724 16.0778L3.68385 12.0676C3.75257 11.6733 3.62033 11.2718 3.32982 10.9924L0.37368 8.15194C-0.357285 7.45054 0.0446417 6.22644 1.05466 6.08062L5.14265 5.49218C5.54354 5.43467 5.89028 5.18616 6.06937 4.82776L7.89574 1.17701C8.34765 0.274331 9.65235 0.274331 10.1043 1.17701Z" fill="#FFD329"/>
                                        </svg> 3.5
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <div className="d-flex align-items-center gap-3">
                                        <Image className="img-fluid  avatar-50 rounded-circle" src={img8} alt="01"/>
                                        <div>
                                            <h6 className="mb-0">Jacob Jones</h6>
                                            <small className="para-ellipsis-1">Lorem ipsum dolor consectetur sit amet.</small>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <svg  width="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M10.1043 1.17701L11.9317 4.82776C12.1108 5.18616 12.4565 5.43467 12.8573 5.49218L16.9453 6.08062C17.9554 6.22644 18.3573 7.45054 17.6263 8.15194L14.6702 10.9924C14.3797 11.2718 14.2474 11.6733 14.3162 12.0676L15.0138 16.0778C15.1856 17.0698 14.1298 17.8267 13.227 17.3574L9.57321 15.4627C9.21502 15.2768 8.78602 15.2768 8.42679 15.4627L4.773 17.3574C3.87023 17.8267 2.81439 17.0698 2.98724 16.0778L3.68385 12.0676C3.75257 11.6733 3.62033 11.2718 3.32982 10.9924L0.37368 8.15194C-0.357285 7.45054 0.0446417 6.22644 1.05466 6.08062L5.14265 5.49218C5.54354 5.43467 5.89028 5.18616 6.06937 4.82776L7.89574 1.17701C8.34765 0.274331 9.65235 0.274331 10.1043 1.17701Z" fill="#FFD329"/>
                                        </svg> 3.5
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <div className="d-flex align-items-center gap-3">
                                        <Image className="img-fluid  avatar-50 rounded-circle" src={img9} alt="01"/>
                                        <div>
                                            <h6 className="mb-0">Cody Fisher</h6>
                                            <small className="para-ellipsis-1">Lorem ipsum dolor consectetur sit amet.</small>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <svg  width="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M10.1043 1.17701L11.9317 4.82776C12.1108 5.18616 12.4565 5.43467 12.8573 5.49218L16.9453 6.08062C17.9554 6.22644 18.3573 7.45054 17.6263 8.15194L14.6702 10.9924C14.3797 11.2718 14.2474 11.6733 14.3162 12.0676L15.0138 16.0778C15.1856 17.0698 14.1298 17.8267 13.227 17.3574L9.57321 15.4627C9.21502 15.2768 8.78602 15.2768 8.42679 15.4627L4.773 17.3574C3.87023 17.8267 2.81439 17.0698 2.98724 16.0778L3.68385 12.0676C3.75257 11.6733 3.62033 11.2718 3.32982 10.9924L0.37368 8.15194C-0.357285 7.45054 0.0446417 6.22644 1.05466 6.08062L5.14265 5.49218C5.54354 5.43467 5.89028 5.18616 6.06937 4.82776L7.89574 1.17701C8.34765 0.274331 9.65235 0.274331 10.1043 1.17701Z" fill="#FFD329"/>
                                        </svg> 3.5
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <div className="d-flex align-items-center gap-3">
                                        <Image className="img-fluid avatar-50 rounded-circle" src={img10} alt="01"/>
                                        <div>
                                            <h6 className="mb-0">Jane Cooper</h6>
                                            <small className="para-ellipsis-1">Lorem ipsum dolor consectetur sit amet.</small>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <svg  width="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M10.1043 1.17701L11.9317 4.82776C12.1108 5.18616 12.4565 5.43467 12.8573 5.49218L16.9453 6.08062C17.9554 6.22644 18.3573 7.45054 17.6263 8.15194L14.6702 10.9924C14.3797 11.2718 14.2474 11.6733 14.3162 12.0676L15.0138 16.0778C15.1856 17.0698 14.1298 17.8267 13.227 17.3574L9.57321 15.4627C9.21502 15.2768 8.78602 15.2768 8.42679 15.4627L4.773 17.3574C3.87023 17.8267 2.81439 17.0698 2.98724 16.0778L3.68385 12.0676C3.75257 11.6733 3.62033 11.2718 3.32982 10.9924L0.37368 8.15194C-0.357285 7.45054 0.0446417 6.22644 1.05466 6.08062L5.14265 5.49218C5.54354 5.43467 5.89028 5.18616 6.06937 4.82776L7.89574 1.17701C8.34765 0.274331 9.65235 0.274331 10.1043 1.17701Z" fill="#FFD329"/>
                                        </svg> 3.5
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
})

Bloglist.displayName="Bloglist"
export default Bloglist
