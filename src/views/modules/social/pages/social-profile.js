import React, { useState,memo,Fragment } from 'react'

//React-bootstrap
import {Row, Col, Button, Image, Form, Tab, Nav, Modal} from 'react-bootstrap'

//Route
import {Link} from 'react-router-dom'

//FsLightBox
import FsLightbox from 'fslightbox-react';



//Components
import Card from '../../../../components/bootstrap/card'
import Imagemodal from '../components/image-modal'
import Likeshare from '../components/like-share'
import Friendcomment from '../components/friend-comment'
import Commentfromcontrol from '../components/comment-from-control'
import Postheader from '../components/post-header'
import Socialfriendrequest from '../components/social-friend-request'
import Profileimages1 from '../components/profile-image'
import Postheadermodal from '../components/postheadermodal'

//img
import img1 from '../../../../assets/modules/social/images/avatar/01.png'
import img2 from '../../../../assets/modules/social/images/avatar/22.png'
import img3 from '../../../../assets/modules/social/images/app/01.png'
import img5 from '../../../../assets/modules/social/images/social-profile/10.png'
import img6 from '../../../../assets/modules/social/images/social-profile/11.png'
import img7 from '../../../../assets/modules/social/images/social-profile/12.png'
import img8 from '../../../../assets/modules/social/images/social-profile/13.png'
import img9 from '../../../../assets/modules/social/images/avatar/11.png'
import img10 from '../../../../assets/modules/social/images/avatar/12.png'
import img11 from '../../../../assets/modules/social/images/avatar/13.png'
import img12 from '../../../../assets/modules/social/images/avatar/14.png'
import img13 from '../../../../assets/modules/social/images/avatar/15.png'
import img14 from '../../../../assets/modules/social/images/avatar/16.png'
import img15 from '../../../../assets/modules/social/images/avatar/17.png'
import img16 from '../../../../assets/modules/social/images/avatar/18.png'
import img17 from '../../../../assets/modules/social/images/avatar/10.png'
import img18 from '../../../../assets/modules/social/images/avatar/02.png'
import img19 from '../../../../assets/modules/social/images/avatar/03.png'
import img20 from '../../../../assets/modules/social/images/avatar/04.png'
import img21 from '../../../../assets/modules/social/images/avatar/05.png'
import img22 from '../../../../assets/modules/social/images/avatar/06.png'
import img23 from '../../../../assets/modules/social/images/avatar/07.png'
import img24 from '../../../../assets/modules/social/images/avatar/08.png'
import img25 from '../../../../assets/modules/social/images/avatar/09.png'
import img26 from '../../../../assets/modules/social/images/social-profile/14.png'
import img27 from '../../../../assets/modules/social/images/avatar/25.png'
import img28 from '../../../../assets/modules/social/images/avatar/27.png'
import img29 from '../../../../assets/modules/social/images/app/02.png'
import img30 from '../../../../assets/modules/social/images/avatar/19.png'
import img31 from '../../../../assets/modules/social/images/avatar/20.png'
import img32 from '../../../../assets/modules/social/images/avatar/21.png'
import img33 from '../../../../assets/modules/social/images/avatar/22.png'
import img34 from '../../../../assets/modules/social/images/avatar/23.png'
import img35 from '../../../../assets/modules/social/images/avatar/24.png'
import img36 from '../../../../assets/modules/social/images/avatar/25.png'
import img37 from '../../../../assets/modules/social/images/avatar/26.png'
import img38 from '../../../../assets/modules/social/images/avatar/27.png'
import img39 from '../../../../assets/modules/social/images/avatar/28.png'
import img40 from '../../../../assets/modules/social/images/profile-event/01.png'
import img41 from '../../../../assets/modules/social/images/profile-event/02.png'
import img42 from '../../../../assets/modules/social/images/profile-event/03.png'
import img43 from '../../../../assets/modules/social/images/profile-event/04.png'
import img44 from '../../../../assets/modules/social/images/profile-event/05.png'
import img45 from '../../../../assets/modules/social/images/profile-event/06.png'
import img46 from '../../../../assets/modules/social/images/profile-event/07.png'
import img47 from '../../../../assets/modules/social/images/profile-event/08.png'
import img48 from '../../../../assets/modules/social/images/profile-event/09.png'
import img49 from '../../../../assets/modules/social/images/profile-event/10.png'
import img50 from '../../../../assets/modules/social/images/profile-event/11.png'
import img51 from '../../../../assets/modules/social/images/profile-event/12.png'
import img52 from '../../../../assets/modules/social/images/profile-event/13.png'
import img53 from '../../../../assets/modules/social/images/profile-event/14.png'
import img54 from '../../../../assets/modules/social/images/profile-event/15.png'




const Socialprofile = memo(() => {
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   

    const s1={
        background:`url(${img29})`
    }

    const [imageController, setImageController] = useState({
        toggler: false,
        slide: 1
    });
    
    function imageOnSlide(number) {
        setImageController({
        toggler: !imageController.toggler,
        slide: number
        }); 
    }

    const [imageController1, setImageController1] = useState({
        toggler1: false,
        slide: 1
    });

    function imageOnSlide1(number) {
        setImageController1({
        toggler1: !imageController1.toggler1,
        slide: number
        }); 
    }

    const [imageController2, setImageController2] = useState({
        toggler2: false,
        slide: 1
    });
    
    function imageOnSlide2(number) {
        setImageController2({
        toggler2: !imageController2.toggler2,
        slide: number
        }); 
    }

    return (
        <Fragment>
            <FsLightbox
                toggler={imageController.toggler}
                sources={[img5, img6, img7, img8]}
                slide={imageController.slide}
            />
            <FsLightbox
                toggler={imageController1.toggler1}
                sources={[img17, img9, img10, img11, img12, img13, img14, img15, img16]}
                slide={imageController1.slide}
            />
            <FsLightbox
                toggler={imageController2.toggler2}
                sources={[img1, img18, img19, img20, img21, img22, img23, img24, img25]}
                slide={imageController2.slide}
            />
            <Tab.Container defaultActiveKey="first">
                <Card>
                    <Card.Body>
                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                            <Nav as="ul" className="nav-pills mb-0" data-toggle="slider-tab" role="tablist">
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="first" href="#pills-timeline-tab" data-bs-toggle="tab" data-bs-target="#timeline" aria-selected="true" >Timeline</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="second"  href="#pills-about-tab" data-bs-toggle="tab" data-bs-target="#about" aria-selected="false" >About</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="Thired" className="d-flex justify-content-center align-items-center" href="#pills-friends-tab" data-bs-toggle="tab" data-bs-target="#friends" aria-selected="false">Friends  <span className="badge bg-success d-inline-block py-1 ms-2">100</span></Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="Four" href="#pills-photos-tab" data-bs-toggle="tab" data-bs-target="#photos" aria-selected="false">Photos</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <div className="d-flex flex-wrap flex-sm-nowrap gap-3">
                                <div className="d-flex justify-content-between align-items-center gap-3 mb-3 mb-sm-0">
                                    <Button className="btn btn-icon btn-sm btn-primary rounded-pill">
                                        <span className="btn-inner">
                                            <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.4" d="M16.6667 2H7.33333C3.92889 2 2 3.92889 2 7.33333V16.6667C2 20.0622 3.92 22 7.33333 22H16.6667C20.0711 22 22 20.0622 22 16.6667V7.33333C22 3.92889 20.0711 2 16.6667 2Z" fill="currentColor"></path>
                                                <path d="M15.3205 12.7083H12.7495V15.257C12.7495 15.6673 12.4139 16 12 16C11.5861 16 11.2505 15.6673 11.2505 15.257V12.7083H8.67955C8.29342 12.6687 8 12.3461 8 11.9613C8 11.5765 8.29342 11.2539 8.67955 11.2143H11.2424V8.67365C11.2824 8.29088 11.6078 8 11.996 8C12.3842 8 12.7095 8.29088 12.7495 8.67365V11.2143H15.3205C15.7066 11.2539 16 11.5765 16 11.9613C16 12.3461 15.7066 12.6687 15.3205 12.7083Z" fill="currentColor"></path>
                                            </svg>
                                        </span>
                                    </Button>
                                    <Button className="btn btn-icon btn-sm btn-primary rounded-pill">
                                        <span className="btn-inner">
                                            <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.4" d="M21.3309 7.44251C20.9119 7.17855 20.3969 7.1552 19.9579 7.37855L18.4759 8.12677C17.9279 8.40291 17.5879 8.96129 17.5879 9.58261V15.4161C17.5879 16.0374 17.9279 16.5948 18.4759 16.873L19.9569 17.6202C20.1579 17.7237 20.3729 17.7735 20.5879 17.7735C20.8459 17.7735 21.1019 17.7004 21.3309 17.5572C21.7499 17.2943 21.9999 16.8384 21.9999 16.339V8.66179C21.9999 8.1623 21.7499 7.70646 21.3309 7.44251Z" fill="currentColor"></path>
                                                <path d="M11.9051 20H6.11304C3.69102 20 2 18.3299 2 15.9391V9.06091C2 6.66904 3.69102 5 6.11304 5H11.9051C14.3271 5 16.0181 6.66904 16.0181 9.06091V15.9391C16.0181 18.3299 14.3271 20 11.9051 20Z" fill="currentColor"></path>
                                            </svg>
                                        </span>
                                    </Button>
                                    <span>
                                        <Image className="img-fluid rounded-circle avatar-30" src={img1} alt="user-img" loading="lazy" />
                                    </span>
                                </div>
                                <Nav>
                                    <Form.Group className="input-group mb-0 search-input w-100">
                                        <Form.Control type="text" placeholder="Search..." />
                                        <span className="input-group-text">
                                            <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                                            <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </span>
                                    </Form.Group>
                                </Nav>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <Tab.Content className="iq-tab-fade-up">
                    <Tab.Pane eventKey="first"  id="timeline" role="tabpanel">
                        <Row>
                            <Col lg="8">
                                <Card>
                                    <Card.Header>
                                        <h4 className="mb-0">Create a Post</h4>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="border-bottom">
                                            <div className="d-flex align-items-center mb-3">
                                                <Image className="img-fluid rounded-circle avatar-60 p-1 border border-2 border-primary border-dotted" src={img2} alt="" loading="lazy" />
                                                <Form className="ms-3 w-100" onClick={handleShow1}>
                                                    <input type="text" className="form-control border-0 shadow-none" placeholder="Write Something Here..." />
                                                </Form>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center mt-3 text-dark">
                                            <div className="btn btn-sm btn-soft-light gap-2 d-flex align-items-center">
                                                <span>Photo</span>
                                                <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M21.9999 14.7024V16.0859C21.9999 16.3155 21.9899 16.5471 21.9699 16.7767C21.6893 19.9357 19.4949 22 16.3286 22H7.67126C6.06806 22 4.71535 21.4797 3.74341 20.5363C3.36265 20.1864 3.042 19.7753 2.7915 19.3041C3.12217 18.9021 3.49291 18.462 3.85363 18.0208C4.46485 17.289 5.05603 16.5661 5.42677 16.0959C5.97788 15.4142 7.43078 13.6196 9.44481 14.4617C9.85563 14.6322 10.2164 14.8728 10.547 15.0833C11.3586 15.6247 11.6993 15.7851 12.2705 15.4743C12.9017 15.1335 13.3125 14.4617 13.7434 13.76C13.9739 13.388 14.2043 13.0281 14.4548 12.6972C15.547 11.2736 17.2304 10.8926 18.6332 11.7348C19.3346 12.1559 19.9358 12.6872 20.4969 13.2276C20.6172 13.3479 20.7374 13.4592 20.8476 13.5695C20.9979 13.7198 21.4989 14.2211 21.9999 14.7024Z" fill="currentColor"></path>
                                                    <path opacity="0.4" d="M16.3387 2H7.67134C4.27455 2 2 4.37607 2 7.91411V16.086C2 17.3181 2.28056 18.4119 2.79158 19.3042C3.12224 18.9022 3.49299 18.4621 3.85371 18.0199C4.46493 17.2891 5.05611 16.5662 5.42685 16.096C5.97796 15.4143 7.43086 13.6197 9.44489 14.4618C9.85571 14.6323 10.2164 14.8729 10.5471 15.0834C11.3587 15.6248 11.6994 15.7852 12.2705 15.4734C12.9018 15.1336 13.3126 14.4618 13.7435 13.759C13.9739 13.3881 14.2044 13.0282 14.4549 12.6973C15.5471 11.2737 17.2305 10.8927 18.6333 11.7349C19.3347 12.1559 19.9359 12.6873 20.497 13.2277C20.6172 13.348 20.7375 13.4593 20.8477 13.5696C20.998 13.7189 21.499 14.2202 22 14.7025V7.91411C22 4.37607 19.7255 2 16.3387 2Z" fill="currentColor"></path>
                                                    <path d="M11.4543 8.79668C11.4543 10.2053 10.2809 11.3783 8.87313 11.3783C7.46632 11.3783 6.29297 10.2053 6.29297 8.79668C6.29297 7.38909 7.46632 6.21509 8.87313 6.21509C10.2809 6.21509 11.4543 7.38909 11.4543 8.79668Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                            <div className="btn btn-sm btn-soft-light mx-3 gap-2 d-flex align-items-center">
                                                <span>Tag Friend</span>
                                                <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.997 15.1746C7.684 15.1746 4 15.8546 4 18.5746C4 21.2956 7.661 21.9996 11.997 21.9996C16.31 21.9996 19.994 21.3206 19.994 18.5996C19.994 15.8786 16.334 15.1746 11.997 15.1746Z" fill="currentColor"></path>
                                                    <path opacity="0.4" d="M11.9971 12.5838C14.9351 12.5838 17.2891 10.2288 17.2891 7.29176C17.2891 4.35476 14.9351 1.99976 11.9971 1.99976C9.06008 1.99976 6.70508 4.35476 6.70508 7.29176C6.70508 10.2288 9.06008 12.5838 11.9971 12.5838Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                            <div className="btn btn-sm btn-soft-light">More ...</div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Modal className="fade" id="post-modal" tabIndex="-1"  show={show1} onHide={handleClose1} size="lg">
                                    <Modal.Header closeButton>
                                        <h5 className="modal-title" id="post-modalLabel">Create Post</h5>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Postheadermodal show={show1}  onclick={handleClose1}/>
                                    </Modal.Body>
                                </Modal>
                                <Card>
                                    <Postheader userName="Joshua Martin" postStatus="Added New Post" postDuration="3 hrs" userprofile={img2}/>
                                    <Card.Body>
                                        <div className="user-post">
                                            <Image src={img3} className="img-fluid rounded w-100" alt="post-image"   loading="lazy" onClick={handleShow}/>
                                        </div>
                                        <div className="comment-area pt-3">
                                            <Likeshare noLikes="45" noComments="12" noShare="30" />
                                            <hr />
                                            <ul className="list-inline mt-4">
                                                <li className="mb-0">
                                                    <Friendcomment userName="Larry Robbins" userComment="So True!!" commentDuration="2 Min Ago" userImage={img9}/>
                                                </li>
                                            </ul>
                                            <Commentfromcontrol placeholder="Enter Your Comment Here..."/>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Imagemodal show={show}  onclick={handleClose} />
                                <div className="mb-4" style={s1}>
                                    <div className="hero-image position-relative rounded">
                                        <div className="h-100">
                                            <Row className="align-items-center h-100">
                                                <Col lg="12">
                                                    <h2 className="mb-3">Complement your<br/> flawless beauty.</h2>
                                                    <p className="mb-3 text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                                    <Button type="button" className="btn btn-primary">Shop Now</Button>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                                <Card>
                                    <Postheader userName="Ella Martina" postStatus="Updated Her Status" postDuration="5 hrs" userprofile={img2}/>
                                    <Card.Body>
                                        <p>Purchased New Home Decors For My New Home :)</p>
                                        <div className="iq-grid-container">
                                            <div className="item-img-1">
                                                <Link onClick={() => imageOnSlide(1)} to="#" >
                                                    <Image src={img5} className="img-fluid h-100 object-cover  rounded"
                                                    alt="grid-1" />
                                                </Link>
                                            </div>
                                            <div className="item-img-2">
                                                <Link className="d-flex justify-content-center" onClick={() => imageOnSlide(2)} to="#">
                                                <Image className="img-fluid h-100 object-cover rounded" src={img6} alt="grid-2" loading="lazy" />
                                                </Link>
                                            </div>
                                            <Link className="d-flex justify-content-center" onClick={() => imageOnSlide(3)} to="#">
                                                <Image className="img-fluid h-100 object-cover rounded" src={img7} alt="grid-3" loading="lazy" />
                                            </Link>
                                            <Link className="d-flex justify-content-center" onClick={() => imageOnSlide(1)} to="#">
                                                <Image className="img-fluid h-100 object-cover rounded" src={img8} alt="grid-4" loading="lazy" />
                                            </Link>
                                        </div>
                                        <div className="comment-area pt-3">
                                        <Likeshare noLikes="53" noComments="31" noShare="30" />
                                            <hr />
                                            <ul className="list-inline mt-4">
                                                <li className="mb-0">
                                                    <Friendcomment userName="Larry Robbins" userComment="So True!!" commentDuration="2 Min Ago" userImage={img9}/>
                                                </li>
                                            </ul>
                                            <Commentfromcontrol placeholder="Enter Your Comment Here..."/>

                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg="4">
                                <Card>
                                    <Card.Body>
                                        <div className="d-flex align-items-center gap-3">
                                            <span className="badge bg-info py-2 ">
                                                <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </span>
                                            <h5 className="mb-0">21 New Items For You</h5>
                                        </div>
                                    </Card.Body>
                                </Card>
                                
                                <Card>
                                    <Card.Header className="d-flex align-items-center justify-content-between">
                                        <div className="header-title">
                                            <h4 className="card-title">Photos</h4>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                            <p className="m-0"><Link to="#">Add New </Link></p>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <ul className="profile-img-gallary p-0 m-0 list-unstyled d-grid gap-card grid-cols-3">
                                            <li className=""><Link onClick={() => imageOnSlide1(1)} to="#"><Image src={img17} alt="gallary-image" className="img-fluid rounded" loading="lazy" /></Link></li>
                                            <li className=""><Link onClick={() => imageOnSlide1(2)} to="#"><Image src={img9} alt="gallary-image" className="img-fluid rounded" loading="lazy" /></Link></li>
                                            <li className=""><Link onClick={() => imageOnSlide1(3)} to="#"><Image src={img10} alt="gallary-image" className="img-fluid rounded" loading="lazy" /></Link></li>
                                            <li className=""><Link onClick={() => imageOnSlide1(4)} to="#"><Image src={img11} alt="gallary-image" className="img-fluid rounded" loading="lazy" /></Link></li>
                                            <li className=""><Link onClick={() => imageOnSlide1(5)} to="#"><Image src={img12} alt="gallary-image" className="img-fluid rounded" loading="lazy" /></Link></li>
                                            <li className=""><Link onClick={() => imageOnSlide1(6)} to="#"><Image src={img13} alt="gallary-image" className="img-fluid rounded" loading="lazy" /></Link></li>
                                            <li className=""><Link onClick={() => imageOnSlide1(7)} to="#"><Image src={img14} alt="gallary-image" className="img-fluid rounded" loading="lazy" /></Link></li>
                                            <li className=""><Link onClick={() => imageOnSlide1(8)} to="#"><Image src={img15} alt="gallary-image" className="img-fluid rounded" loading="lazy" /></Link></li>
                                            <li className=""><Link onClick={() => imageOnSlide1(9)} to="#"><Image src={img16} alt="gallary-image" className="img-fluid rounded" loading="lazy" /></Link></li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Header className="card-header d-flex align-items-center justify-content-between">
                                        <div className="header-title">
                                            <h4 className="card-title">Friends</h4>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                            <p className="m-0"><Link to="#">Add New </Link></p>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <ul className="profile-img-gallary p-0 m-0 list-unstyled d-grid gap-card grid-cols-3">
                                            <li className="">
                                            <Link onClick={() => imageOnSlide2(1)} to="#">
                                                <Image src={img1} alt="gallary-image" className="img-fluid rounded" loading="lazy" />
                                            </Link>
                                            <h6 className="mt-2 text-center">Anna Rexia</h6>
                                            </li>
                                            <li className="">
                                            <Link onClick={() => imageOnSlide2(2)} to="#">
                                                <Image src={img18} alt="gallary-image" className="img-fluid rounded" loading="lazy" />
                                            </Link>
                                            <h6 className="mt-2 text-center">Tara Zona</h6>
                                            </li>
                                            <li className="">
                                            <Link onClick={() => imageOnSlide2(3)} to="#">
                                                <Image src={img19} alt="gallary-image" className="img-fluid rounded" loading="lazy" />
                                            </Link>
                                            <h6 className="mt-2 text-center">Polly Tech</h6>
                                            </li>
                                            <li className="">
                                            <Link onClick={() => imageOnSlide2(4)} to="#">
                                                <Image src={img20} alt="gallary-image" className="img-fluid rounded" loading="lazy" />
                                            </Link>
                                            <h6 className="mt-2 text-center">Bill Emia</h6>
                                            </li>
                                            <li className="">
                                            <Link onClick={() => imageOnSlide2(5)} to="#">
                                                <Image src={img21} alt="gallary-image" className="img-fluid rounded" loading="lazy" />
                                            </Link>
                                            <h6 className="mt-2 text-center">Moe Fugga</h6>
                                            </li>
                                            <li className="">
                                            <Link onClick={() => imageOnSlide2(6)} to="#">
                                                <Image src={img22} alt="gallary-image" className="img-fluid rounded" loading="lazy" />
                                            </Link>
                                            <h6 className="mt-2 text-center">Hal Appeno </h6>
                                            </li>
                                            <li className="">
                                            <Link onClick={() => imageOnSlide2(7)} to="#">
                                                <Image src={img23} alt="gallary-image" className="img-fluid rounded" loading="lazy" />
                                            </Link>
                                            <h6 className="mt-2 text-center">Zack Lee</h6>
                                            </li>
                                            <li className="">
                                            <Link onClick={() => imageOnSlide2(8)} to="#">
                                                <Image src={img23} alt="gallary-image" className="img-fluid rounded" loading="lazy" />
                                            </Link>
                                            <h6 className="mt-2 text-center">Terry Aki</h6>
                                            </li>
                                            <li className="">
                                            <Link onClick={() => imageOnSlide2(10)} to="#">
                                                <Image src={img24} alt="gallary-image" className="img-fluid rounded" loading="lazy" />
                                            </Link>
                                            <h6 className="mt-2 text-center">Greta Life</h6>
                                            </li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Header className="d-flex align-items-center justify-content-between">
                                        <div className="header-title">
                                            <h4 className="card-title">Live Events</h4>
                                        </div>
                                        <Link className="text-body" to="#">View All</Link>
                                    </Card.Header>
                                    <Card.Body>
                                        <Image src={img26} alt="userimg" className="img-fluid w-100" loading="lazy" />
                                        <div className="d-flex justify-content-between align-items-center my-3">
                                            <h6 className="mb-0">Music Festival 2021</h6>
                                            <div className="btn btn-sm text-dark ">
                                                Sep 23
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <span className="d-flex gap-2">
                                                <svg width="18"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.5 10.5005C14.5 9.11924 13.3808 8 12.0005 8C10.6192 8 9.5 9.11924 9.5 10.5005C9.5 11.8808 10.6192 13 12.0005 13C13.3808 13 14.5 11.8808 14.5 10.5005Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.9995 21C10.801 21 4.5 15.8984 4.5 10.5633C4.5 6.38664 7.8571 3 11.9995 3C16.1419 3 19.5 6.38664 19.5 10.5633C19.5 15.8984 13.198 21 11.9995 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                                <span className="d-none d-sm-block">1901 Thornridge</span>
                                            </span>
                                            <p className="mb-0">5 KM</p>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="iq-media-group iq-media-group-1">
                                                <Link to="#" className="iq-media-1">
                                                    <div className="icon">
                                                        <Image className="img-fluid rounded-circle avatar-40"
                                                            src={img27} alt="" loading="lazy" />
                                                    </div>
                                                </Link>
                                                <Link to="#" className="iq-media-1">
                                                    <div className="icon">
                                                        <Image className="img-fluid rounded-circle avatar-40"
                                                            src={img28} alt="" loading="lazy" />
                                                    </div>
                                                </Link>
                                                <Link to="#" className="iq-media-1">
                                                    <div className="icon rounded-circle bg-primary text-white avatar-40">+ 25</div>
                                                </Link>
                                            </div>
                                            <h6 className="mb-0">25 joined</h6>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second"  id="about" role="tabpanel" >
                        <Row>
                            <Col sm="12">
                                <Card>
                                    <Card.Body>
                                        <Tab.Container defaultActiveKey="1">
                                            <Row>
                                                <Col md="2">
                                                    <Nav className="flex-column nav-pills nav-iconly gap-3">
                                                        <Nav.Link eventKey="1"  href="#v-pills-basicinfo-tab" data-bs-toggle="pill" data-bs-target="#v-pills-basicinfo-tab" role="button">Contact and Basic Info</Nav.Link>
                                                        <Nav.Link  eventKey="2" href="#v-pills-family-tab" data-bs-toggle="pill" data-bs-target="#v-pills-family" role="button">Family and Relationship</Nav.Link>
                                                        <Nav.Link  eventKey="3" href="#v-pills-work-tab" data-bs-toggle="pill" data-bs-target="#v-pills-work-tab" role="button">Work and Education</Nav.Link>
                                                        <Nav.Link eventKey="4"  href="#v-pills-lived-tab" data-bs-toggle="pill" data-bs-target="#v-pills-lived-tab" role="button">Places You've Lived</Nav.Link>
                                                        <Nav.Link  eventKey="5" href="#v-pills-details-tab" data-bs-toggle="pill" data-bs-target="#v-pills-details-tab" role="button">Details About You</Nav.Link>
                                                    </Nav>
                                                </Col>
                                                <Col md="10">
                                                    <Tab.Content className="iq-tab-fade-up">
                                                        <Tab.Pane eventKey="1"  id="v-pills-basicinfo-tab" role="tabpanel"  aria-labelledby="v-pills-basicinfo-tab">
                                                            <div className="mb-3">
                                                                <div className="border-bottom pb-3 mb-3">
                                                                    <h3 className="mb-0">Contact Information</h3>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-3">
                                                                        <h6>Email</h6>
                                                                    </div>
                                                                    <div className="col-9">
                                                                        <p className="mb-0">Bnijohn@gmail.com</p>
                                                                    </div>
                                                                    <div className="col-3">
                                                                        <h6>Mobile</h6>
                                                                    </div>
                                                                    <div className="col-9">
                                                                        <p className="mb-0">(001) 4544 565 456</p>
                                                                    </div>
                                                                    <div className="col-3">
                                                                        <h6>Address</h6>
                                                                    </div>
                                                                    <div className="col-9">
                                                                        <p className="mb-0">United States of America</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="mb-3">
                                                                <div className="border-bottom pb-3 mb-3">
                                                                    <h4 className="mb-0">Websites and Social Links</h4>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-3">
                                                                        <h6>Website</h6>
                                                                    </div>
                                                                    <div className="col-9">
                                                                        <p className="mb-0">www.bootstrap.com</p>
                                                                    </div>
                                                                    <div className="col-3">
                                                                        <h6>Social Link</h6>
                                                                    </div>
                                                                    <div className="col-9">
                                                                        <p className="mb-0">www.bootstrap.com</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="mb-0">
                                                                <div className="border-bottom pb-3 mb-3">
                                                                    <h4 className="mb-0">Basic Information</h4>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-3">
                                                                        <h6>Birth Date</h6>
                                                                    </div>
                                                                    <div className="col-9">
                                                                        <p className="mb-0">24 January</p>
                                                                    </div>
                                                                    <div className="col-3">
                                                                        <h6>Birth Year</h6>
                                                                    </div>
                                                                    <div className="col-9">
                                                                        <p className="mb-0">1994</p>
                                                                    </div>
                                                                    <div className="col-3">
                                                                        <h6>Gender</h6>
                                                                    </div>
                                                                    <div className="col-9">
                                                                        <p className="mb-0">Female</p>
                                                                    </div>
                                                                    <div className="col-3">
                                                                        <h6>interested in</h6>
                                                                    </div>
                                                                    <div className="col-9">
                                                                        <p className="mb-0">Designing</p>
                                                                    </div>
                                                                    <div className="col-3">
                                                                        <h6>language</h6>
                                                                    </div>
                                                                    <div className="col-9">
                                                                        <p className="mb-0">English, French</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="2"  id="v-pills-family" role="tabpanel">
                                                            <div className="border-bottom mb-3 pb-3">
                                                                <h3 className="mb-0">Relationship</h3>
                                                            </div>
                                                            <div className="d-flex align-items-center gap-2 mb-4">
                                                                <Link to="#" className="d-flex">
                                                                    <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M12.0001 8.32739V15.6537" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                        <path d="M15.6668 11.9904H8.3335" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M16.6857 2H7.31429C4.04762 2 2 4.31208 2 7.58516V16.4148C2 19.6879 4.0381 22 7.31429 22H16.6857C19.9619 22 22 19.6879 22 16.4148V7.58516C22 4.31208 19.9619 2 16.6857 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    </svg>
                                                                </Link>
                                                                <h6 className="mb-0 text-primary">Add Your Relationship Status</h6>
                                                            </div>
                                                            <div className="border-bottom mb-3 pb-3">
                                                                <h4 className="mb-0">Family Members</h4>
                                                            </div>
                                                            <ul className="suggestions-lists m-0 p-0">
                                                                <div className="d-flex align-items-center gap-2 mb-4">
                                                                    <Link to="#" className="d-flex">
                                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M12.0001 8.32739V15.6537" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                            <path d="M15.6668 11.9904H8.3335" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                            <path fillRule="evenodd" clipRule="evenodd" d="M16.6857 2H7.31429C4.04762 2 2 4.31208 2 7.58516V16.4148C2 19.6879 4.0381 22 7.31429 22H16.6857C19.9619 22 22 19.6879 22 16.4148V7.58516C22 4.31208 19.9619 2 16.6857 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                        </svg>
                                                                    </Link>
                                                                    <h6 className="mb-0 text-primary">Add Family Members</h6>
                                                                </div>
                                                                <li className="d-flex align-items-center justify-content-between gap-3 mb-4">
                                                                    <img src={img1} alt="story-img" className="rounded-circle avatar-48" loading="lazy" />
                                                                    <div className="d-flex justify-content-between w-100">
                                                                        <div>
                                                                            <h6>Paul Molive</h6>
                                                                            <p className="mb-0">Brother</p>
                                                                        </div>
                                                                        <Link className="d-flex align-items-start gap-2 mb-4" to="#">
                                                                            <svg width="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path opacity="0.4" d="M19.9927 18.9534H14.2984C13.7429 18.9534 13.291 19.4124 13.291 19.9767C13.291 20.5422 13.7429 21.0001 14.2984 21.0001H19.9927C20.5483 21.0001 21.0001 20.5422 21.0001 19.9767C21.0001 19.4124 20.5483 18.9534 19.9927 18.9534Z" fill="currentColor"></path>
                                                                                <path d="M10.309 6.90385L15.7049 11.2639C15.835 11.3682 15.8573 11.5596 15.7557 11.6929L9.35874 20.0282C8.95662 20.5431 8.36402 20.8344 7.72908 20.8452L4.23696 20.8882C4.05071 20.8903 3.88775 20.7613 3.84542 20.5764L3.05175 17.1258C2.91419 16.4915 3.05175 15.8358 3.45388 15.3306L9.88256 6.95545C9.98627 6.82108 10.1778 6.79743 10.309 6.90385Z" fill="currentColor"></path>
                                                                                <path opacity="0.4" d="M18.1208 8.66544L17.0806 9.96401C16.9758 10.0962 16.7874 10.1177 16.6573 10.0124C15.3927 8.98901 12.1545 6.36285 11.2561 5.63509C11.1249 5.52759 11.1069 5.33625 11.2127 5.20295L12.2159 3.95706C13.126 2.78534 14.7133 2.67784 15.9938 3.69906L17.4647 4.87078C18.0679 5.34377 18.47 5.96726 18.6076 6.62299C18.7663 7.3443 18.597 8.0527 18.1208 8.66544Z" fill="currentColor"></path>
                                                                            </svg>
                                                                            Edit
                                                                        </Link>
                                                                    </div>
                                                                </li>
                                                                <li className="d-flex align-items-center justify-content-between gap-3 mb-4">
                                                                    <Image src={img18} alt="story-img" className="rounded-circle avatar-48" loading="lazy" />
                                                                    <div className="d-flex justify-content-between w-100">
                                                                        <div>
                                                                            <h6>Anna Mull</h6>
                                                                            <p className="mb-0">Sister</p>
                                                                        </div>
                                                                        <Link className="d-flex align-items-start gap-2" to="#">
                                                                            <svg width="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path opacity="0.4" d="M19.9927 18.9534H14.2984C13.7429 18.9534 13.291 19.4124 13.291 19.9767C13.291 20.5422 13.7429 21.0001 14.2984 21.0001H19.9927C20.5483 21.0001 21.0001 20.5422 21.0001 19.9767C21.0001 19.4124 20.5483 18.9534 19.9927 18.9534Z" fill="currentColor"></path>
                                                                                <path d="M10.309 6.90385L15.7049 11.2639C15.835 11.3682 15.8573 11.5596 15.7557 11.6929L9.35874 20.0282C8.95662 20.5431 8.36402 20.8344 7.72908 20.8452L4.23696 20.8882C4.05071 20.8903 3.88775 20.7613 3.84542 20.5764L3.05175 17.1258C2.91419 16.4915 3.05175 15.8358 3.45388 15.3306L9.88256 6.95545C9.98627 6.82108 10.1778 6.79743 10.309 6.90385Z" fill="currentColor"></path>
                                                                                <path opacity="0.4" d="M18.1208 8.66544L17.0806 9.96401C16.9758 10.0962 16.7874 10.1177 16.6573 10.0124C15.3927 8.98901 12.1545 6.36285 11.2561 5.63509C11.1249 5.52759 11.1069 5.33625 11.2127 5.20295L12.2159 3.95706C13.126 2.78534 14.7133 2.67784 15.9938 3.69906L17.4647 4.87078C18.0679 5.34377 18.47 5.96726 18.6076 6.62299C18.7663 7.3443 18.597 8.0527 18.1208 8.66544Z" fill="currentColor"></path>
                                                                            </svg>
                                                                            Edit
                                                                        </Link>
                                                                    </div>
                                                                </li>
                                                                <li className="d-flex align-items-center justify-content-between gap-3">
                                                                    <Image src={img19} alt="story-img" className="rounded-circle avatar-48" loading="lazy" />
                                                                    <div className="d-flex justify-content-between w-100">
                                                                        <div>
                                                                            <h6>Paige Turner</h6>
                                                                            <p className="mb-0">Cousin</p>
                                                                        </div>
                                                                        <Link className="d-flex align-items-start gap-2" to="#">
                                                                            <svg width="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path opacity="0.4" d="M19.9927 18.9534H14.2984C13.7429 18.9534 13.291 19.4124 13.291 19.9767C13.291 20.5422 13.7429 21.0001 14.2984 21.0001H19.9927C20.5483 21.0001 21.0001 20.5422 21.0001 19.9767C21.0001 19.4124 20.5483 18.9534 19.9927 18.9534Z" fill="currentColor"></path>
                                                                                <path d="M10.309 6.90385L15.7049 11.2639C15.835 11.3682 15.8573 11.5596 15.7557 11.6929L9.35874 20.0282C8.95662 20.5431 8.36402 20.8344 7.72908 20.8452L4.23696 20.8882C4.05071 20.8903 3.88775 20.7613 3.84542 20.5764L3.05175 17.1258C2.91419 16.4915 3.05175 15.8358 3.45388 15.3306L9.88256 6.95545C9.98627 6.82108 10.1778 6.79743 10.309 6.90385Z" fill="currentColor"></path>
                                                                                <path opacity="0.4" d="M18.1208 8.66544L17.0806 9.96401C16.9758 10.0962 16.7874 10.1177 16.6573 10.0124C15.3927 8.98901 12.1545 6.36285 11.2561 5.63509C11.1249 5.52759 11.1069 5.33625 11.2127 5.20295L12.2159 3.95706C13.126 2.78534 14.7133 2.67784 15.9938 3.69906L17.4647 4.87078C18.0679 5.34377 18.47 5.96726 18.6076 6.62299C18.7663 7.3443 18.597 8.0527 18.1208 8.66544Z" fill="currentColor"></path>
                                                                            </svg>
                                                                            Edit
                                                                        </Link>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="3"  id="v-pills-work-tab" role="tabpanel" aria-labelledby="v-pills-work-tab">
                                                            <div className="border-bottom mb-3 pb-3">
                                                                <h3 className="mb-0">Work</h3>
                                                            </div>
                                                            <ul className="suggestions-lists m-0 p-0">
                                                                <div className="d-flex align-items-center gap-2 mb-4">
                                                                    <Link to="#" className="d-flex">
                                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M12.0001 8.32739V15.6537" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                            <path d="M15.6668 11.9904H8.3335" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                            <path fillRule="evenodd" clipRule="evenodd" d="M16.6857 2H7.31429C4.04762 2 2 4.31208 2 7.58516V16.4148C2 19.6879 4.0381 22 7.31429 22H16.6857C19.9619 22 22 19.6879 22 16.4148V7.58516C22 4.31208 19.9619 2 16.6857 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                        </svg>
                                                                    </Link>
                                                                    <h6 className="mb-0 text-primary">Add Work Place</h6>
                                                                </div>
                                                                <li className="d-flex align-items-center justify-content-between gap-3 mb-4">
                                                                    <Image src={img20} alt="story-img" className="rounded-circle avatar-48" loading="lazy" />
                                                                    <div className="d-flex justify-content-between w-100">
                                                                        <div>
                                                                            <h6>Themeforest</h6>
                                                                            <p className="mb-0">Web Designer</p>
                                                                        </div>
                                                                        <Link className="d-flex align-items-start gap-2 mb-4" to="#">
                                                                            <svg width="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path opacity="0.4" d="M19.9927 18.9534H14.2984C13.7429 18.9534 13.291 19.4124 13.291 19.9767C13.291 20.5422 13.7429 21.0001 14.2984 21.0001H19.9927C20.5483 21.0001 21.0001 20.5422 21.0001 19.9767C21.0001 19.4124 20.5483 18.9534 19.9927 18.9534Z" fill="currentColor"></path>
                                                                                <path d="M10.309 6.90385L15.7049 11.2639C15.835 11.3682 15.8573 11.5596 15.7557 11.6929L9.35874 20.0282C8.95662 20.5431 8.36402 20.8344 7.72908 20.8452L4.23696 20.8882C4.05071 20.8903 3.88775 20.7613 3.84542 20.5764L3.05175 17.1258C2.91419 16.4915 3.05175 15.8358 3.45388 15.3306L9.88256 6.95545C9.98627 6.82108 10.1778 6.79743 10.309 6.90385Z" fill="currentColor"></path>
                                                                                <path opacity="0.4" d="M18.1208 8.66544L17.0806 9.96401C16.9758 10.0962 16.7874 10.1177 16.6573 10.0124C15.3927 8.98901 12.1545 6.36285 11.2561 5.63509C11.1249 5.52759 11.1069 5.33625 11.2127 5.20295L12.2159 3.95706C13.126 2.78534 14.7133 2.67784 15.9938 3.69906L17.4647 4.87078C18.0679 5.34377 18.47 5.96726 18.6076 6.62299C18.7663 7.3443 18.597 8.0527 18.1208 8.66544Z" fill="currentColor"></path>
                                                                            </svg>
                                                                            Edit
                                                                        </Link>
                                                                    </div>
                                                                </li>
                                                                <li className="d-flex align-items-center justify-content-between gap-3 mb-4">
                                                                    <Image src={img21} alt="story-img" className="rounded-circle avatar-48" loading="lazy" />
                                                                    <div className="d-flex justify-content-between w-100">
                                                                        <div>
                                                                            <h6>iqonicdesign</h6>
                                                                            <p className="mb-0">Software Developer</p>
                                                                        </div>
                                                                        <Link className="d-flex align-items-start gap-2" to="#">
                                                                            <svg width="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path opacity="0.4" d="M19.9927 18.9534H14.2984C13.7429 18.9534 13.291 19.4124 13.291 19.9767C13.291 20.5422 13.7429 21.0001 14.2984 21.0001H19.9927C20.5483 21.0001 21.0001 20.5422 21.0001 19.9767C21.0001 19.4124 20.5483 18.9534 19.9927 18.9534Z" fill="currentColor"></path>
                                                                                <path d="M10.309 6.90385L15.7049 11.2639C15.835 11.3682 15.8573 11.5596 15.7557 11.6929L9.35874 20.0282C8.95662 20.5431 8.36402 20.8344 7.72908 20.8452L4.23696 20.8882C4.05071 20.8903 3.88775 20.7613 3.84542 20.5764L3.05175 17.1258C2.91419 16.4915 3.05175 15.8358 3.45388 15.3306L9.88256 6.95545C9.98627 6.82108 10.1778 6.79743 10.309 6.90385Z" fill="currentColor"></path>
                                                                                <path opacity="0.4" d="M18.1208 8.66544L17.0806 9.96401C16.9758 10.0962 16.7874 10.1177 16.6573 10.0124C15.3927 8.98901 12.1545 6.36285 11.2561 5.63509C11.1249 5.52759 11.1069 5.33625 11.2127 5.20295L12.2159 3.95706C13.126 2.78534 14.7133 2.67784 15.9938 3.69906L17.4647 4.87078C18.0679 5.34377 18.47 5.96726 18.6076 6.62299C18.7663 7.3443 18.597 8.0527 18.1208 8.66544Z" fill="currentColor"></path>
                                                                            </svg>
                                                                            Edit
                                                                        </Link>
                                                                    </div>
                                                                </li>
                                                                <li className="d-flex align-items-center justify-content-between gap-3 mb-4">
                                                                    <img src={img22} alt="story-img" className="rounded-circle avatar-48" loading="lazy" />
                                                                    <div className="d-flex justify-content-between w-100">
                                                                        <div>
                                                                            <h6>W3school</h6>
                                                                            <p className="mb-0">Designer</p>
                                                                        </div>
                                                                        <Link className="d-flex align-items-start gap-2" to="#">
                                                                            <svg width="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path opacity="0.4" d="M19.9927 18.9534H14.2984C13.7429 18.9534 13.291 19.4124 13.291 19.9767C13.291 20.5422 13.7429 21.0001 14.2984 21.0001H19.9927C20.5483 21.0001 21.0001 20.5422 21.0001 19.9767C21.0001 19.4124 20.5483 18.9534 19.9927 18.9534Z" fill="currentColor"></path>
                                                                                <path d="M10.309 6.90385L15.7049 11.2639C15.835 11.3682 15.8573 11.5596 15.7557 11.6929L9.35874 20.0282C8.95662 20.5431 8.36402 20.8344 7.72908 20.8452L4.23696 20.8882C4.05071 20.8903 3.88775 20.7613 3.84542 20.5764L3.05175 17.1258C2.91419 16.4915 3.05175 15.8358 3.45388 15.3306L9.88256 6.95545C9.98627 6.82108 10.1778 6.79743 10.309 6.90385Z" fill="currentColor"></path>
                                                                                <path opacity="0.4" d="M18.1208 8.66544L17.0806 9.96401C16.9758 10.0962 16.7874 10.1177 16.6573 10.0124C15.3927 8.98901 12.1545 6.36285 11.2561 5.63509C11.1249 5.52759 11.1069 5.33625 11.2127 5.20295L12.2159 3.95706C13.126 2.78534 14.7133 2.67784 15.9938 3.69906L17.4647 4.87078C18.0679 5.34377 18.47 5.96726 18.6076 6.62299C18.7663 7.3443 18.597 8.0527 18.1208 8.66544Z" fill="currentColor"></path>
                                                                            </svg>
                                                                            Edit
                                                                        </Link>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                            <div className="border-bottom mb-3 pb-3">
                                                                <h4 className="mb-0">Professional Skills</h4>
                                                            </div>
                                                            <div className="d-flex align-items-center gap-2 mb-4">
                                                                <Link to="#" className="d-flex">
                                                                    <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M12.0001 8.32739V15.6537" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                        <path d="M15.6668 11.9904H8.3335" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M16.6857 2H7.31429C4.04762 2 2 4.31208 2 7.58516V16.4148C2 19.6879 4.0381 22 7.31429 22H16.6857C19.9619 22 22 19.6879 22 16.4148V7.58516C22 4.31208 19.9619 2 16.6857 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    </svg>
                                                                </Link>
                                                                <h6 className="mb-0 text-primary">Add Professional Skills</h6>
                                                            </div>

                                                            <div className="border-bottom mb-3 pb-3">
                                                                <h4 className="mb-0">College</h4>
                                                            </div>
                                                            <ul className="suggestions-lists m-0 p-0">
                                                                <div className="d-flex align-items-center gap-2 mb-4">
                                                                    <Link to="#" className="d-flex">
                                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M12.0001 8.32739V15.6537" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                            <path d="M15.6668 11.9904H8.3335" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                            <path fillRule="evenodd" clipRule="evenodd" d="M16.6857 2H7.31429C4.04762 2 2 4.31208 2 7.58516V16.4148C2 19.6879 4.0381 22 7.31429 22H16.6857C19.9619 22 22 19.6879 22 16.4148V7.58516C22 4.31208 19.9619 2 16.6857 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                        </svg>
                                                                    </Link>
                                                                    <h6 className="mb-0 text-primary">Add College</h6>
                                                                </div>
                                                                <li className="d-flex align-items-center justify-content-between gap-3">
                                                                    <Image src={img23} alt="story-img" className="rounded-circle avatar-48" loading="lazy" />
                                                                    <div className="d-flex justify-content-between w-100">
                                                                        <div>
                                                                            <h6>London School of Brick and Balls</h6>
                                                                            <p className="mb-0">Greenwich, United Kingdom</p>
                                                                        </div>
                                                                        <Link className="d-flex align-items-start gap-2" to="#">
                                                                            <svg width="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path opacity="0.4" d="M19.9927 18.9534H14.2984C13.7429 18.9534 13.291 19.4124 13.291 19.9767C13.291 20.5422 13.7429 21.0001 14.2984 21.0001H19.9927C20.5483 21.0001 21.0001 20.5422 21.0001 19.9767C21.0001 19.4124 20.5483 18.9534 19.9927 18.9534Z" fill="currentColor"></path>
                                                                                <path d="M10.309 6.90385L15.7049 11.2639C15.835 11.3682 15.8573 11.5596 15.7557 11.6929L9.35874 20.0282C8.95662 20.5431 8.36402 20.8344 7.72908 20.8452L4.23696 20.8882C4.05071 20.8903 3.88775 20.7613 3.84542 20.5764L3.05175 17.1258C2.91419 16.4915 3.05175 15.8358 3.45388 15.3306L9.88256 6.95545C9.98627 6.82108 10.1778 6.79743 10.309 6.90385Z" fill="currentColor"></path>
                                                                                <path opacity="0.4" d="M18.1208 8.66544L17.0806 9.96401C16.9758 10.0962 16.7874 10.1177 16.6573 10.0124C15.3927 8.98901 12.1545 6.36285 11.2561 5.63509C11.1249 5.52759 11.1069 5.33625 11.2127 5.20295L12.2159 3.95706C13.126 2.78534 14.7133 2.67784 15.9938 3.69906L17.4647 4.87078C18.0679 5.34377 18.47 5.96726 18.6076 6.62299C18.7663 7.3443 18.597 8.0527 18.1208 8.66544Z" fill="currentColor"></path>
                                                                            </svg>
                                                                            Edit
                                                                        </Link>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="4"  id="v-pills-lived-tab" role="tabpanel" aria-labelledby="v-pills-lived-tab">
                                                            <div className="border-bottom mb-3 pb-3">
                                                                <h3 className="mb-0">Current City and Hometown</h3>
                                                            </div>
                                                            <ul className="suggestions-lists m-0 p-0">
                                                                <li className="d-flex align-items-center justify-content-between gap-3 mb-4">
                                                                    <Image src={img1} alt="story-img" className="rounded-circle avatar-48" loading="lazy" />
                                                                    <div className="d-flex justify-content-between w-100">
                                                                        <div>
                                                                            <h6>Birmingham</h6>
                                                                            <p className="mb-0">Liverpool</p>
                                                                        </div>
                                                                        <Link className="d-flex align-items-start gap-2 mb-4" to="#">
                                                                            <svg width="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path opacity="0.4" d="M19.9927 18.9534H14.2984C13.7429 18.9534 13.291 19.4124 13.291 19.9767C13.291 20.5422 13.7429 21.0001 14.2984 21.0001H19.9927C20.5483 21.0001 21.0001 20.5422 21.0001 19.9767C21.0001 19.4124 20.5483 18.9534 19.9927 18.9534Z" fill="currentColor"></path>
                                                                                <path d="M10.309 6.90385L15.7049 11.2639C15.835 11.3682 15.8573 11.5596 15.7557 11.6929L9.35874 20.0282C8.95662 20.5431 8.36402 20.8344 7.72908 20.8452L4.23696 20.8882C4.05071 20.8903 3.88775 20.7613 3.84542 20.5764L3.05175 17.1258C2.91419 16.4915 3.05175 15.8358 3.45388 15.3306L9.88256 6.95545C9.98627 6.82108 10.1778 6.79743 10.309 6.90385Z" fill="currentColor"></path>
                                                                                <path opacity="0.4" d="M18.1208 8.66544L17.0806 9.96401C16.9758 10.0962 16.7874 10.1177 16.6573 10.0124C15.3927 8.98901 12.1545 6.36285 11.2561 5.63509C11.1249 5.52759 11.1069 5.33625 11.2127 5.20295L12.2159 3.95706C13.126 2.78534 14.7133 2.67784 15.9938 3.69906L17.4647 4.87078C18.0679 5.34377 18.47 5.96726 18.6076 6.62299C18.7663 7.3443 18.597 8.0527 18.1208 8.66544Z" fill="currentColor"></path>
                                                                            </svg>
                                                                            Edit
                                                                        </Link>
                                                                    </div>
                                                                </li>
                                                                <li className="d-flex align-items-center justify-content-between gap-3 mb-4">
                                                                    <Image src={img18} alt="story-img" className="rounded-circle avatar-48" loading="lazy" />
                                                                    <div className="d-flex justify-content-between w-100">
                                                                        <div>
                                                                            <h6>Manchester</h6>
                                                                            <p className="mb-0">Newcastle</p>
                                                                        </div>
                                                                        <Link className="d-flex align-items-start gap-2" to="#">
                                                                            <svg width="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path opacity="0.4" d="M19.9927 18.9534H14.2984C13.7429 18.9534 13.291 19.4124 13.291 19.9767C13.291 20.5422 13.7429 21.0001 14.2984 21.0001H19.9927C20.5483 21.0001 21.0001 20.5422 21.0001 19.9767C21.0001 19.4124 20.5483 18.9534 19.9927 18.9534Z" fill="currentColor"></path>
                                                                                <path d="M10.309 6.90385L15.7049 11.2639C15.835 11.3682 15.8573 11.5596 15.7557 11.6929L9.35874 20.0282C8.95662 20.5431 8.36402 20.8344 7.72908 20.8452L4.23696 20.8882C4.05071 20.8903 3.88775 20.7613 3.84542 20.5764L3.05175 17.1258C2.91419 16.4915 3.05175 15.8358 3.45388 15.3306L9.88256 6.95545C9.98627 6.82108 10.1778 6.79743 10.309 6.90385Z" fill="currentColor"></path>
                                                                                <path opacity="0.4" d="M18.1208 8.66544L17.0806 9.96401C16.9758 10.0962 16.7874 10.1177 16.6573 10.0124C15.3927 8.98901 12.1545 6.36285 11.2561 5.63509C11.1249 5.52759 11.1069 5.33625 11.2127 5.20295L12.2159 3.95706C13.126 2.78534 14.7133 2.67784 15.9938 3.69906L17.4647 4.87078C18.0679 5.34377 18.47 5.96726 18.6076 6.62299C18.7663 7.3443 18.597 8.0527 18.1208 8.66544Z" fill="currentColor"></path>
                                                                            </svg>
                                                                            Edit
                                                                        </Link>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                            <div className="border-bottom mb-3 pb-3">
                                                                <h4 className="mb-0">Other Places Lived</h4>
                                                            </div>
                                                            <div className="d-flex align-items-center gap-2 mb-4">
                                                                <Link to="#" className="d-flex">
                                                                    <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M12.0001 8.32739V15.6537" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                        <path d="M15.6668 11.9904H8.3335" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M16.6857 2H7.31429C4.04762 2 2 4.31208 2 7.58516V16.4148C2 19.6879 4.0381 22 7.31429 22H16.6857C19.9619 22 22 19.6879 22 16.4148V7.58516C22 4.31208 19.9619 2 16.6857 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    </svg>
                                                                </Link>
                                                                <h6 className="mb-0 text-primary">Add Place</h6>
                                                            </div>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="5"  id="v-pills-details-tab" role="tabpanel" aria-labelledby="v-pills-details-tab">
                                                            <div className="border-bottom mb-3 pb-3">
                                                                <h3 className="mb-0">About You</h3>
                                                            </div>
                                                            <p className="mb-3">Hi, I’m Bni, I’m 26 and I work as a Web Designer for the iqonicdesign.</p>
                                                            <div className="border-bottom mb-3 pb-3">
                                                                <h4 className="mb-0">Other Name</h4>
                                                            </div>
                                                            <p className="mb-3">Bini Rock</p>
                                                            <div className="border-bottom mb-3 pb-3">
                                                                <h4 className="mb-0">Favorite Quotes</h4>
                                                            </div>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                                        </Tab.Pane>
                                                    </Tab.Content>
                                                </Col>
                                            </Row>
                                        </Tab.Container>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>   
                    </Tab.Pane>
                    <Tab.Pane eventKey="Thired"  id="friends" role="tabpanel">
                        <Card>
                            <Card.Body>
                                <h4>Friends</h4>
                                <div className="friend-list-tab mt-2">
                                    <Tab.Container defaultActiveKey="6">
                                        <Nav className="nav-pills">
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="6" data-bs-toggle="pill" href="#pill-all-friends" data-bs-target="#all-friends">All Friends</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="7" data-bs-toggle="pill" href="#pill-recently-add" data-bs-target="#recently-add">Recently Added</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="8" data-bs-toggle="pill" href="#pill-closefriends" data-bs-target="#closefriends"> Close friends</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="9" data-bs-toggle="pill" href="#pill-home" data-bs-target="#home-town"> Home/Town</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="10" data-bs-toggle="pill" href="#pill-following" data-bs-target="#following">Following</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content className="iq-tab-fade-up">
                                            <Tab.Pane eventKey="6"  id="all-friends" role="tabpanel">
                                                <Card.Body className="p-0">
                                                    <Row>
                                                    <Col md="6" lg="6" className="my-3">
                                                        <Socialfriendrequest socialimg={img1} socialprofilefriendstitle="Petey Cruiser" socialprofilefriendsdec="15  friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="my-3">
                                                        <Socialfriendrequest socialimg={img18} socialprofilefriendstitle="Anna Sthesia" socialprofilefriendsdec="50  friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                        <Socialfriendrequest socialimg={img19} socialprofilefriendstitle="Paul Molive" socialprofilefriendsdec="10  friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                        <Socialfriendrequest socialimg={img20} socialprofilefriendstitle="Gail Forcewind" socialprofilefriendsdec="20  friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                        <Socialfriendrequest socialimg={img21} socialprofilefriendstitle="Paige Turner" socialprofilefriendsdec="12  friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                        <Socialfriendrequest socialimg={img22} socialprofilefriendstitle="b Frapples" socialprofilefriendsdec="06  friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                        <Socialfriendrequest socialimg={img23} socialprofilefriendstitle="Walter Melon" socialprofilefriendsdec="30  friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                        <Socialfriendrequest socialimg={img24} socialprofilefriendstitle="Barb Ackue" socialprofilefriendsdec="14  friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                        <Socialfriendrequest socialimg={img25} socialprofilefriendstitle="Buck Kinnear" socialprofilefriendsdec="16  friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                        <Socialfriendrequest socialimg={img17} socialprofilefriendstitle="Ira Membrit" socialprofilefriendsdec="22  friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                        <Socialfriendrequest socialimg={img9} socialprofilefriendstitle="Shonda Leer" socialprofilefriendsdec="10  friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                        <Socialfriendrequest socialimg={img10} socialprofilefriendstitle="ock Lee" socialprofilefriendsdec="18 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                        <Socialfriendrequest socialimg={img11} socialprofilefriendstitle="Maya Didas" socialprofilefriendsdec="40 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                        <Socialfriendrequest socialimg={img12} socialprofilefriendstitle="Rick O'Shea" socialprofilefriendsdec="50 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                        <Socialfriendrequest socialimg={img13} socialprofilefriendstitle="Pete Sariya" socialprofilefriendsdec="5 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                        <Socialfriendrequest socialimg={img14} socialprofilefriendstitle="Monty Carlo" socialprofilefriendsdec="2 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                     <Socialfriendrequest socialimg={img15} socialprofilefriendstitle="Sal Monella" socialprofilefriendsdec="0 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                        <Socialfriendrequest socialimg={img16} socialprofilefriendstitle="Sue Vaneer" socialprofilefriendsdec="25 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                        <Socialfriendrequest socialimg={img30} socialprofilefriendstitle="Cliff Hanger" socialprofilefriendsdec="18 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                        <Socialfriendrequest socialimg={img31} socialprofilefriendstitle="Barb Dwyer" socialprofilefriendsdec="23 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                        <Socialfriendrequest socialimg={img32} socialprofilefriendstitle="Terry Aki" socialprofilefriendsdec="8 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                        <Socialfriendrequest socialimg={img33} socialprofilefriendstitle="Cory Ander" socialprofilefriendsdec="7 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                    <Socialfriendrequest socialimg={img34} socialprofilefriendstitle="Robin Banks" socialprofilefriendsdec="14 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                    <Socialfriendrequest socialimg={img35} socialprofilefriendstitle="Jimmy Changa" socialprofilefriendsdec="10 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                    <Socialfriendrequest socialimg={img36} socialprofilefriendstitle="Barry Wine" socialprofilefriendsdec="18 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                    <Socialfriendrequest socialimg={img37} socialprofilefriendstitle="Poppa Cherry" socialprofilefriendsdec="16 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                    <Socialfriendrequest socialimg={img38} socialprofilefriendstitle="Zack Lee" socialprofilefriendsdec="33 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                    <Socialfriendrequest socialimg={img39} socialprofilefriendstitle="Don Stairs" socialprofilefriendsdec="15 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                    <Socialfriendrequest socialimg={img34} socialprofilefriendstitle="Peter Pants" socialprofilefriendsdec="12 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                    <Socialfriendrequest socialimg={img20} socialprofilefriendstitle="Hal Appeno" socialprofilefriendsdec="13 friends"/>
                                                    </Col>
                                                    </Row>
                                                </Card.Body>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="7"  id="recently-add" role="tabpanel">
                                                <Card.Body className="p-0">
                                                    <Row>
                                                        <Col md="6" lg="6" className="my-3">
                                                            <Socialfriendrequest socialimg={img23} socialprofilefriendstitle="Otto Matic" socialprofilefriendsdec="4 friends"/>
                                                        </Col>
                                                        <Col md="6" lg="6" className="my-3">
                                                            <Socialfriendrequest socialimg={img24} socialprofilefriendstitle="Moe Fugga" socialprofilefriendsdec="16 friends"/>
                                                        </Col>
                                                        <Col md="6" lg="6" className="mb-3">
                                                            <Socialfriendrequest socialimg={img25} socialprofilefriendstitle="Tom Foolery" socialprofilefriendsdec="14 friends"/>
                                                        </Col>
                                                        <Col md="6" lg="6" className="mb-3">
                                                            <Socialfriendrequest socialimg={img30} socialprofilefriendstitle="Bud Wiser" socialprofilefriendsdec="16 friends"/>
                                                        </Col>
                                                        <Col md="6" lg="6" className="mb-3">
                                                            <Socialfriendrequest socialimg={img14} socialprofilefriendstitle="Polly Tech" socialprofilefriendsdec="10 friends"/>
                                                        </Col>
                                                        <Col md="6" lg="6" className="mb-3">
                                                            <Socialfriendrequest socialimg={img15} socialprofilefriendstitle="Holly Graham" socialprofilefriendsdec="8 friends"/>
                                                        </Col>
                                                        <Col md="6" lg="6" className="mb-3">
                                                            <Socialfriendrequest socialimg={img16} socialprofilefriendstitle="Tara Zona" socialprofilefriendsdec="5 friends"/>
                                                        </Col>
                                                        <Col md="6" lg="6" className="mb-3">
                                                            <Socialfriendrequest socialimg={img23} socialprofilefriendstitle="Barry Cade" socialprofilefriendsdec="20 friends"/>
                                                        </Col>
                                                    </Row>
                                                </Card.Body>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="8"  id="closefriends" role="tabpanel">
                                                <Card.Body className="p-0">
                                                    <Row>
                                                    <Col md="6" lg="6" className="my-3">
                                                        <Socialfriendrequest socialimg={img30} socialprofilefriendstitle="Bud Wiser" socialprofilefriendsdec="32 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="my-3">
                                                        <Socialfriendrequest socialimg={img21} socialprofilefriendstitle="Otto Matic" socialprofilefriendsdec="9 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                        <Socialfriendrequest socialimg={img22} socialprofilefriendstitle="Peter Pants" socialprofilefriendsdec="2 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                        <Socialfriendrequest socialimg={img23} socialprofilefriendstitle="Zack Lee" socialprofilefriendsdec="15 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                        <Socialfriendrequest socialimg={img24} socialprofilefriendstitle="Barry Wine" socialprofilefriendsdec="36 friends"/>
                                                        
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                    <Socialfriendrequest socialimg={img26} socialprofilefriendstitle="Robin Banks" socialprofilefriendsdec="22 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                    <Socialfriendrequest socialimg={img25} socialprofilefriendstitle="Cory Ander" socialprofilefriendsdec="10 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                    <Socialfriendrequest socialimg={img13} socialprofilefriendstitle="Cory Ander" socialprofilefriendsdec="10 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                    <Socialfriendrequest socialimg={img14} socialprofilefriendstitle="Polly Tec" socialprofilefriendsdec="30 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                    <Socialfriendrequest socialimg={img15} socialprofilefriendstitle="Hal Appeno" socialprofilefriendsdec="25 friends"/>
                                                    </Col>
                                                    </Row>
                                                </Card.Body>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="9"  id="home-town" role="tabpanel">
                                                <Card.Body className="p-0">
                                                    <Row>
                                                    <Col md="6" lg="6" className="my-3">
                                                        <Socialfriendrequest socialimg={img16} socialprofilefriendstitle="Paul Molive" socialprofilefriendsdec="14 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="my-3">
                                                        <Socialfriendrequest socialimg={img17} socialprofilefriendstitle="Paige Turner" socialprofilefriendsdec="8 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                        <Socialfriendrequest socialimg={img21} socialprofilefriendstitle="Barb Ackue" socialprofilefriendsdec="23 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                        <Socialfriendrequest socialimg={img22} socialprofilefriendstitle="Ira Membrit" socialprofilefriendsdec="16 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                        <Socialfriendrequest socialimg={img23} socialprofilefriendstitle="Maya Didas" socialprofilefriendsdec="12 friends"/>
                                                    </Col>
                                                    </Row>
                                                </Card.Body>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="10"  id="following" role="tabpanel">
                                                <Card.Body className="p-0">
                                                    <Row>
                                                    <Col md="6" lg="6" className="my-3">
                                                        <Socialfriendrequest socialimg={img22} socialprofilefriendstitle="Maya Didas" socialprofilefriendsdec="20 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="my-3">
                                                        <Socialfriendrequest socialimg={img23} socialprofilefriendstitle="Monty Carlo" socialprofilefriendsdec="3 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                    <Socialfriendrequest socialimg={img24} socialprofilefriendstitle="Cliff Hanger" socialprofilefriendsdec="20 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                    <Socialfriendrequest socialimg={img25} socialprofilefriendstitle="b Ackue" socialprofilefriendsdec="12 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                    <Socialfriendrequest socialimg={img28} socialprofilefriendstitle="Bob Frapples" socialprofilefriendsdec="12 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                    <Socialfriendrequest socialimg={img30} socialprofilefriendstitle="Anna Mull" socialprofilefriendsdec="6 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                    <Socialfriendrequest socialimg={img31} socialprofilefriendstitle="ry Wine" socialprofilefriendsdec="15 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                    <Socialfriendrequest socialimg={img32} socialprofilefriendstitle="Don Stairs" socialprofilefriendsdec="12 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                    <Socialfriendrequest socialimg={img33} socialprofilefriendstitle="Peter Pants" socialprofilefriendsdec="8 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                    <Socialfriendrequest socialimg={img32} socialprofilefriendstitle="Polly Tech" socialprofilefriendsdec="18 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                    <Socialfriendrequest socialimg={img34} socialprofilefriendstitle="Tara Zona" socialprofilefriendsdec="30 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                    <Socialfriendrequest socialimg={img34} socialprofilefriendstitle="Arty Ficial" socialprofilefriendsdec="15 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                    <Socialfriendrequest socialimg={img35} socialprofilefriendstitle="Bill Emia" socialprofilefriendsdec="1225 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                    <Socialfriendrequest socialimg={img36} socialprofilefriendstitle="Bill Yerds" socialprofilefriendsdec="9 friends"/>
                                                    </Col>
                                                    <Col md="6" lg="6" className="mb-3">
                                                    <Socialfriendrequest socialimg={img37} socialprofilefriendstitle="Matt Innae" socialprofilefriendsdec="19 friends"/>
                                                    </Col>
                                                    </Row>
                                                </Card.Body>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            </Card.Body>
                        </Card>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Four"  id="photos" role="tabpanel">
                        <Card>
                            <Card.Body>
                                <h4>Photos</h4>
                                <Tab.Container defaultActiveKey="11">
                                    <div className="friend-list-tab mt-2">
                                        <Nav as="ul" className="nav-tabs mb-0">
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="11" data-bs-toggle="pill" href="#pill-photosofyou" data-bs-target="#photosofyou">Photos of You</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="12" data-bs-toggle="pill" href="#pill-your-photos" data-bs-target="#your-photos">Your Photos</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content className="iq-tab-fade-up">
                                            <Tab.Pane eventKey="11"  id="photosofyou" role="tabpanel">
                                                <Card.Body className="p-0">
                                                    <div className="d-grid gap-2 d-grid-template-1fr-13 my-3">
                                                        <Profileimages1 profileimagesimg={img40} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img41} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img42} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img43} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img44} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img45} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img46} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img47} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img48} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img49} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img50} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img51} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img52} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img53} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img54} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img45} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img42} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img43} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img45} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img49} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img44} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img50} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img54} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img41} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                    </div>
                                                </Card.Body>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="12"  id="your-photos" role="tabpanel">
                                                <Card.Body  className="p-0">
                                                    <div className="d-grid gap-2 d-grid-template-1fr-13 my-3">
                                                        <Profileimages1 profileimagesimg={img40} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img41} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img42} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img43} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img44} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img45} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img46} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img47} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img48} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img49} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img50} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img51} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img52} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img53} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                        <Profileimages1 profileimagesimg={img54} profileimagesdetail1="60" profileimagesdetail2="30" profileimagesdetail3="10"></Profileimages1>
                                                    </div>
                                                </Card.Body>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </div>
                                </Tab.Container>
                            </Card.Body>
                        </Card>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </Fragment>
    )
}
)
Socialprofile.displayName="Socialprofile"
export default Socialprofile
