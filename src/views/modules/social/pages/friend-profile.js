import React,{useState,memo,Fragment} from 'react'

//React-bootstrap
import {Row, Col, Image, Dropdown, Modal, Form} from 'react-bootstrap'

//Router
import {Link} from 'react-router-dom'

//Components
import Card from '../../../../components/bootstrap/card'
import CustomToggle from '../../../../components/dropdowns'
import Likeshare from '../components/like-share'
import Friendcomment from '../components/friend-comment'
import Commentfromcontrol from '../components/comment-from-control'
import Postheadermodal from '../components/postheadermodal'
import Imagemodal from '../components/image-modal'

//Fslightbox
import FsLightbox from 'fslightbox-react';

//Img
import img1 from '../../../../assets/modules/social/images/avatar/10.png' 
import img2 from '../../../../assets/modules/social/images/avatar/11.png' 
import img3 from '../../../../assets/modules/social/images/avatar/12.png' 
import img4 from '../../../../assets/modules/social/images/avatar/13.png' 
import img5 from '../../../../assets/modules/social/images/avatar/14.png' 
import img6 from '../../../../assets/modules/social/images/avatar/15.png' 
import img7 from '../../../../assets/modules/social/images/avatar/16.png' 
import img8 from '../../../../assets/modules/social/images/avatar/17.png' 
import img9 from '../../../../assets/modules/social/images/avatar/18.png' 
import friend1 from '../../../../assets/modules/social/images/avatar/01.png'
import friend2 from '../../../../assets/modules/social/images/avatar/02.png'
import friend3 from '../../../../assets/modules/social/images/avatar/03.png'
import friend4 from '../../../../assets/modules/social/images/avatar/04.png'
import friend5 from '../../../../assets/modules/social/images/avatar/05.png'
import friend6 from '../../../../assets/modules/social/images/avatar/06.png'
import friend7 from '../../../../assets/modules/social/images/avatar/07.png'
import friend8 from '../../../../assets/modules/social/images/avatar/08.png'
import friend9 from '../../../../assets/modules/social/images/avatar/09.png'
import app1 from '../../../../assets/modules/social/images/app/01.png'


const Friendprofile = memo(() => {
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
        slide1: 1
    });

    function imageOnSlide1(number) {
        setImageController1({
        toggler1: !imageController1.toggler1,
        slide1: number
        }); 
    }

    const [show, setShow,] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);


    return (
        <Fragment>
            <FsLightbox
                toggler={imageController.toggler}
                sources={[img1,img2,img3,img4,img5,img6,img7,img8,img9]}
                slide={imageController.slide}
            />
            <FsLightbox
                toggler={imageController1.toggler1}
                sources={[friend1,friend2,friend3,friend4,friend5,friend6,friend7,friend8,friend9]}
                slide={imageController1.slide1}
            />
            
            <Row>
                <Col lg="4">
                    <Card>
                        <Card.Header className="d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">About</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-inline p-0 m-0">
                                <li className="mb-2 d-flex align-items-center">
                                    <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9488 14.54C8.49884 14.54 5.58789 15.1038 5.58789 17.2795C5.58789 19.4562 8.51765 20.0001 11.9488 20.0001C15.3988 20.0001 18.3098 19.4364 18.3098 17.2606C18.3098 15.084 15.38 14.54 11.9488 14.54Z" fill="currentColor"></path>
                                        <path opacity="0.4" d="M11.949 12.467C14.2851 12.467 16.1583 10.5831 16.1583 8.23351C16.1583 5.88306 14.2851 4 11.949 4C9.61293 4 7.73975 5.88306 7.73975 8.23351C7.73975 10.5831 9.61293 12.467 11.949 12.467Z" fill="currentColor"></path>
                                        <path opacity="0.4" d="M21.0881 9.21923C21.6925 6.84176 19.9205 4.70654 17.664 4.70654C17.4187 4.70654 17.1841 4.73356 16.9549 4.77949C16.9244 4.78669 16.8904 4.802 16.8725 4.82902C16.8519 4.86324 16.8671 4.90917 16.8895 4.93889C17.5673 5.89528 17.9568 7.0597 17.9568 8.30967C17.9568 9.50741 17.5996 10.6241 16.9728 11.5508C16.9083 11.6462 16.9656 11.775 17.0793 11.7948C17.2369 11.8227 17.3981 11.8371 17.5629 11.8416C19.2059 11.8849 20.6807 10.8213 21.0881 9.21923Z" fill="currentColor"></path>
                                        <path d="M22.8094 14.817C22.5086 14.1722 21.7824 13.73 20.6783 13.513C20.1572 13.3851 18.747 13.205 17.4352 13.2293C17.4155 13.232 17.4048 13.2455 17.403 13.2545C17.4003 13.2671 17.4057 13.2887 17.4316 13.3022C18.0378 13.6039 20.3811 14.916 20.0865 17.6834C20.074 17.8032 20.1698 17.9068 20.2888 17.8888C20.8655 17.8059 22.3492 17.4853 22.8094 16.4866C23.0637 15.9589 23.0637 15.3456 22.8094 14.817Z" fill="currentColor"></path>
                                        <path opacity="0.4" d="M7.04459 4.77973C6.81626 4.7329 6.58077 4.70679 6.33543 4.70679C4.07901 4.70679 2.30701 6.84201 2.9123 9.21947C3.31882 10.8216 4.79355 11.8851 6.43661 11.8419C6.60136 11.8374 6.76343 11.8221 6.92013 11.7951C7.03384 11.7753 7.09115 11.6465 7.02668 11.551C6.3999 10.6234 6.04263 9.50765 6.04263 8.30991C6.04263 7.05904 6.43303 5.89462 7.11085 4.93913C7.13234 4.90941 7.14845 4.86348 7.12696 4.82926C7.10906 4.80135 7.07593 4.78694 7.04459 4.77973Z" fill="currentColor"></path>
                                        <path d="M3.32156 13.5127C2.21752 13.7297 1.49225 14.1719 1.19139 14.8167C0.936203 15.3453 0.936203 15.9586 1.19139 16.4872C1.65163 17.4851 3.13531 17.8066 3.71195 17.8885C3.83104 17.9065 3.92595 17.8038 3.91342 17.6832C3.61883 14.9167 5.9621 13.6046 6.56918 13.3029C6.59425 13.2885 6.59962 13.2677 6.59694 13.2542C6.59515 13.2452 6.5853 13.2317 6.5656 13.2299C5.25294 13.2047 3.84358 13.3848 3.32156 13.5127Z" fill="currentColor"></path>
                                    </svg>
                                    <p className="mb-0 ms-3">Web Developer</p>
                                </li>
                                <li className="mb-2 d-flex align-items-center">
                                    <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.4" d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83V17.16C3 20.26 4.77 22 7.81 22H16.191C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2Z" fill="currentColor"></path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.07996 6.6499V6.6599C7.64896 6.6599 7.29996 7.0099 7.29996 7.4399C7.29996 7.8699 7.64896 8.2199 8.07996 8.2199H11.069C11.5 8.2199 11.85 7.8699 11.85 7.4289C11.85 6.9999 11.5 6.6499 11.069 6.6499H8.07996ZM15.92 12.7399H8.07996C7.64896 12.7399 7.29996 12.3899 7.29996 11.9599C7.29996 11.5299 7.64896 11.1789 8.07996 11.1789H15.92C16.35 11.1789 16.7 11.5299 16.7 11.9599C16.7 12.3899 16.35 12.7399 15.92 12.7399ZM15.92 17.3099H8.07996C7.77996 17.3499 7.48996 17.1999 7.32996 16.9499C7.16996 16.6899 7.16996 16.3599 7.32996 16.1099C7.48996 15.8499 7.77996 15.7099 8.07996 15.7399H15.92C16.319 15.7799 16.62 16.1199 16.62 16.5299C16.62 16.9289 16.319 17.2699 15.92 17.3099Z" fill="currentColor"></path>
                                    </svg>
                                    <p className="mb-0 ms-3">Success in slowing economic activity.</p>
                                </li>
                                <li className="mb-2 d-flex align-items-center">
                                        <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.53162 2.93677C10.7165 1.66727 13.402 1.68946 15.5664 2.99489C17.7095 4.32691 19.012 6.70418 18.9998 9.26144C18.95 11.8019 17.5533 14.19 15.8075 16.0361C14.7998 17.1064 13.6726 18.0528 12.4488 18.856C12.3228 18.9289 12.1848 18.9777 12.0415 19C11.9036 18.9941 11.7693 18.9534 11.6508 18.8814C9.78243 17.6746 8.14334 16.134 6.81233 14.334C5.69859 12.8314 5.06584 11.016 5 9.13442C4.99856 6.57225 6.34677 4.20627 8.53162 2.93677ZM9.79416 10.1948C10.1617 11.1008 11.0292 11.6918 11.9916 11.6918C12.6221 11.6964 13.2282 11.4438 13.6748 10.9905C14.1214 10.5371 14.3715 9.92064 14.3692 9.27838C14.3726 8.29804 13.7955 7.41231 12.9073 7.03477C12.0191 6.65723 10.995 6.86235 10.3133 7.55435C9.63159 8.24635 9.42664 9.28872 9.79416 10.1948Z" fill="currentColor"></path>
                                            <ellipse opacity="0.4" cx="12" cy="21" rx="5" ry="1" fill="currentColor"></ellipse>
                                        </svg>
                                    <p className="mb-0 ms-3">USA</p>
                                </li>
                                <li className="d-flex align-items-center">
                                    <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.4" d="M11.7761 21.8374C9.49311 20.4273 7.37081 18.7645 5.44807 16.8796C4.09069 15.5338 3.05404 13.8905 2.41735 12.0753C1.27971 8.53523 2.60399 4.48948 6.30129 3.2884C8.2528 2.67553 10.3752 3.05175 12.0072 4.29983C13.6398 3.05315 15.7616 2.67705 17.7132 3.2884C21.4105 4.48948 22.7436 8.53523 21.606 12.0753C20.9745 13.8888 19.944 15.5319 18.5931 16.8796C16.6686 18.7625 14.5465 20.4251 12.265 21.8374L12.0161 22L11.7761 21.8374Z" fill="currentColor"></path>
                                        <path d="M12.0109 22.0001L11.776 21.8375C9.49013 20.4275 7.36487 18.7648 5.43902 16.8797C4.0752 15.5357 3.03238 13.8923 2.39052 12.0754C1.26177 8.53532 2.58605 4.48957 6.28335 3.28849C8.23486 2.67562 10.3853 3.05213 12.0109 4.31067V22.0001Z" fill="currentColor"></path>
                                        <path d="M18.2304 9.99922C18.0296 9.98629 17.8425 9.8859 17.7131 9.72157C17.5836 9.55723 17.5232 9.3434 17.5459 9.13016C17.5677 8.4278 17.168 7.78851 16.5517 7.53977C16.1609 7.43309 15.9243 7.00987 16.022 6.59249C16.1148 6.18182 16.4993 5.92647 16.8858 6.0189C16.9346 6.027 16.9816 6.04468 17.0244 6.07105C18.2601 6.54658 19.0601 7.82641 18.9965 9.22576C18.9944 9.43785 18.9117 9.63998 18.7673 9.78581C18.6229 9.93164 18.4291 10.0087 18.2304 9.99922Z" fill="currentColor"></path>
                                    </svg>
                                    <p className="mb-0 ms-3">Single</p>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header className="d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">Photos</h4>
                            </div>
                            <div className="card-header-toolbar d-flex align-items-center">
                                <p className="m-0"><Link to="#javascript:void(0)">Add Photo </Link></p>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ul className="profile-img-gallary p-0 m-0 list-unstyled d-grid gap-card grid-cols-3">
                                <li className=""><Link onClick={() => imageOnSlide(1)} to="#"><Image src={img1} alt="gallary-image" className="img-fluid" loading="lazy" /></Link></li>
                                <li className=""><Link onClick={() => imageOnSlide(2)} to="#"><Image src={img2} alt="gallary-image" className="img-fluid" loading="lazy" /></Link></li>
                                <li className=""><Link onClick={() => imageOnSlide(3)} to="#"><Image src={img3} alt="gallary-image" className="img-fluid" loading="lazy" /></Link></li>
                                <li className=""><Link onClick={() => imageOnSlide(4)} to="#"><Image src={img4} alt="gallary-image" className="img-fluid" loading="lazy" /></Link></li>
                                <li className=""><Link onClick={() => imageOnSlide(5)} to="#"><Image src={img5} alt="gallary-image" className="img-fluid" loading="lazy" /></Link></li>
                                <li className=""><Link onClick={() => imageOnSlide(6)} to="#"><Image src={img6} alt="gallary-image" className="img-fluid" loading="lazy" /></Link></li>
                                <li className=""><Link onClick={() => imageOnSlide(7)} to="#"><Image src={img7} alt="gallary-image" className="img-fluid" loading="lazy" /></Link></li>
                                <li className=""><Link onClick={() => imageOnSlide(8)} to="#"><Image src={img8} alt="gallary-image" className="img-fluid" loading="lazy" /></Link></li>
                                <li className=""><Link onClick={() => imageOnSlide(9)} to="#"><Image src={img9} alt="gallary-image" className="img-fluid" loading="lazy" /></Link></li>
                            </ul>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header className="d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">Friends</h4>
                            </div>
                            <div className="card-header-toolbar d-flex align-items-center">
                                <p className="m-0"><Link to="#javascript:void(0)">Add New </Link></p>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ul className="profile-img-gallary p-0 m-0 list-unstyled d-grid gap-card grid-cols-3">
                                <li className="">
                                <Link onClick={() => imageOnSlide1(1)} to="#">
                                    <Image src={friend1} alt="gallary-image" className="img-fluid" />
                                </Link>
                                <h6 className="mt-2 text-center">Anna Rexia</h6>
                                </li>
                                <li className="">
                                <Link onClick={() => imageOnSlide1(2)} to="#">
                                    <Image src={friend2} alt="gallary-image" className="img-fluid" />
                                </Link>
                                <h6 className="mt-2 text-center">Tara Zona</h6>
                                </li>
                                <li className="">
                                <Link onClick={() => imageOnSlide1(3)} to="#">
                                    <Image src={friend3} alt="gallary-image" className="img-fluid" />
                                </Link>
                                <h6 className="mt-2 text-center">Polly Tech</h6>
                                </li>
                                <li className="">
                                <Link onClick={() => imageOnSlide1(4)} to="#">
                                    <Image src={friend4} alt="gallary-image" className="img-fluid" />
                                </Link>
                                <h6 className="mt-2 text-center">Bill Emia</h6>
                                </li>
                                <li className="">
                                <Link onClick={() => imageOnSlide1(5)} to="#">
                                    <Image src={friend5} alt="gallary-image" className="img-fluid" />
                                </Link>
                                <h6 className="mt-2 text-center">Moe Fugga</h6>
                                </li>
                                <li className="">
                                <Link onClick={() => imageOnSlide1(6)} to="#">
                                    <Image src={friend6} alt="gallary-image" className="img-fluid" />
                                </Link>
                                <h6 className="mt-2 text-center">Hal Appeno </h6>
                                </li>
                                <li className="">
                                <Link onClick={() => imageOnSlide1(7)} to="#">
                                    <Image src={friend7} alt="gallary-image" className="img-fluid" />
                                </Link>
                                <h6 className="mt-2 text-center">Zack Lee</h6>
                                </li>
                                <li className="">
                                <Link onClick={() => imageOnSlide1(8)} to="#">
                                    <Image src={friend8} alt="gallary-image" className="img-fluid" />
                                </Link>
                                <h6 className="mt-2 text-center">Terry Aki</h6>
                                </li>
                                <li className="">
                                <Link onClick={() => imageOnSlide1(9)} to="#">
                                    <Image src={friend9} alt="gallary-image" className="img-fluid" />
                                </Link>
                                <h6 className="mt-2 text-center">Greta Life</h6>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="8">
                    <Card>
                        <div className="card-header">
                            <h4 className="mb-0">Create A Post</h4>
                        </div>
                        <Card.Body>
                            <div className="border-bottom">
                                <div className="d-flex align-items-center mb-3">
                                    <Image className="img-fluid rounded-circle avatar-60 p-1 border border-2 border-primary border-dotted" src={friend1} alt="" />
                                    <Form className="ms-3 w-100" onClick={handleShow1} >
                                        <input type="text" className="form-control border-0 shadow-none" placeholder="Write Something Here..." />
                                    </Form>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mt-3">
                                <div className="btn btn-sm btn-soft-light d-flex align-items-center">
                                    <span className="me-2">Photo</span>
                                    <svg width="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.9999 14.7024V16.0859C21.9999 16.3155 21.9899 16.5471 21.9699 16.7767C21.6893 19.9357 19.4949 22 16.3286 22H7.67126C6.06806 22 4.71535 21.4797 3.74341 20.5363C3.36265 20.1864 3.042 19.7753 2.7915 19.3041C3.12217 18.9021 3.49291 18.462 3.85363 18.0208C4.46485 17.289 5.05603 16.5661 5.42677 16.0959C5.97788 15.4142 7.43078 13.6196 9.44481 14.4617C9.85563 14.6322 10.2164 14.8728 10.547 15.0833C11.3586 15.6247 11.6993 15.7851 12.2705 15.4743C12.9017 15.1335 13.3125 14.4617 13.7434 13.76C13.9739 13.388 14.2043 13.0281 14.4548 12.6972C15.547 11.2736 17.2304 10.8926 18.6332 11.7348C19.3346 12.1559 19.9358 12.6872 20.4969 13.2276C20.6172 13.3479 20.7374 13.4592 20.8476 13.5695C20.9979 13.7198 21.4989 14.2211 21.9999 14.7024Z" fill="currentColor"></path>
                                        <path opacity="0.4" d="M16.3387 2H7.67134C4.27455 2 2 4.37607 2 7.91411V16.086C2 17.3181 2.28056 18.4119 2.79158 19.3042C3.12224 18.9022 3.49299 18.4621 3.85371 18.0199C4.46493 17.2891 5.05611 16.5662 5.42685 16.096C5.97796 15.4143 7.43086 13.6197 9.44489 14.4618C9.85571 14.6323 10.2164 14.8729 10.5471 15.0834C11.3587 15.6248 11.6994 15.7852 12.2705 15.4734C12.9018 15.1336 13.3126 14.4618 13.7435 13.759C13.9739 13.3881 14.2044 13.0282 14.4549 12.6973C15.5471 11.2737 17.2305 10.8927 18.6333 11.7349C19.3347 12.1559 19.9359 12.6873 20.497 13.2277C20.6172 13.348 20.7375 13.4593 20.8477 13.5696C20.998 13.7189 21.499 14.2202 22 14.7025V7.91411C22 4.37607 19.7255 2 16.3387 2Z" fill="currentColor"></path>
                                        <path d="M11.4543 8.79668C11.4543 10.2053 10.2809 11.3783 8.87313 11.3783C7.46632 11.3783 6.29297 10.2053 6.29297 8.79668C6.29297 7.38909 7.46632 6.21509 8.87313 6.21509C10.2809 6.21509 11.4543 7.38909 11.4543 8.79668Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                <div className="btn btn-sm btn-soft-light mx-3 d-flex align-items-center">
                                    <span className="me-2">Tag Friend</span>
                                    <svg width="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.997 15.1746C7.684 15.1746 4 15.8546 4 18.5746C4 21.2956 7.661 21.9996 11.997 21.9996C16.31 21.9996 19.994 21.3206 19.994 18.5996C19.994 15.8786 16.334 15.1746 11.997 15.1746Z" fill="currentColor"></path>
                                        <path opacity="0.4" d="M11.9971 12.5838C14.9351 12.5838 17.2891 10.2288 17.2891 7.29176C17.2891 4.35476 14.9351 1.99976 11.9971 1.99976C9.06008 1.99976 6.70508 4.35476 6.70508 7.29176C6.70508 10.2288 9.06008 12.5838 11.9971 12.5838Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                <div className="btn btn-sm btn-soft-light">More ...</div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Modal className="fade" id="post-modal" tabIndex="-1"  show={show1} onHide={handleClose1} fullscreen="sm-down" size="lg" >
                        <Modal.Header closeButton>
                            <h5 className="modal-title" id="post-modalLabel">Create Post</h5>
                        </Modal.Header>
                        <Modal.Body>
                            <Postheadermodal show={show1}  onclick={handleClose1}/>
                        </Modal.Body>
                    </Modal>
                    <Card>
                        <Card.Header className="d-flex align-items-center justify-content-between pb-0">
                            <div className="header-title">
                                <div className="d-flex justify-content-center flex-wrap">
                                    <div className="media-support-user-img me-2">
                                        <Image className="img-fluid rounded-circle p-1 border border-2 border-primary border-dotted avatar-50" src={friend1} alt="img1" />
                                    </div>
                                    <div className="media-support-info">
                                        <div className="d-flex align-items-center mb-2">
                                            <h6 className="mb-0 me-2">Joshua Martin</h6>
                                            <small className="text-dark">Added New Post</small>
                                        </div>
                                        <p className="mb-0 text-muted">3 hrs Ago</p>
                                    </div>
                                </div>
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle as={CustomToggle} className="" >
                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10 20.6788C10 21.9595 11.0378 23 12.3113 23C13.5868 23 14.6265 21.9595 14.6265 20.6788C14.6265 19.3981 13.5868 18.3576 12.3113 18.3576C11.0378 18.3576 10 19.3981 10 20.6788ZM10 12.0005C10 13.2812 11.0378 14.3217 12.3113 14.3217C13.5868 14.3217 14.6265 13.2812 14.6265 12.0005C14.6265 10.7198 13.5868 9.67929 12.3113 9.67929C11.0378 9.67929 10 10.7198 10 12.0005ZM12.3113 5.64239C11.0378 5.64239 10 4.60192 10 3.3212C10 2.04047 11.0378 1 12.3113 1C13.5868 1 14.6265 2.04047 14.6265 3.3212C14.6265 4.60192 13.5868 5.64239 12.3113 5.64239Z" fill="#8A92A6"/>
                                    </svg>
                                </Dropdown.Toggle>
                                <Dropdown.Menu >
                                    <Dropdown.Item className=" d-flex align-items-center">
                                        <svg width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M19.9927 18.9534H14.2984C13.7429 18.9534 13.291 19.4124 13.291 19.9767C13.291 20.5422 13.7429 21.0001 14.2984 21.0001H19.9927C20.5483 21.0001 21.0001 20.5422 21.0001 19.9767C21.0001 19.4124 20.5483 18.9534 19.9927 18.9534Z" fill="currentColor"></path>
                                            <path d="M10.309 6.90385L15.7049 11.2639C15.835 11.3682 15.8573 11.5596 15.7557 11.6929L9.35874 20.0282C8.95662 20.5431 8.36402 20.8344 7.72908 20.8452L4.23696 20.8882C4.05071 20.8903 3.88775 20.7613 3.84542 20.5764L3.05175 17.1258C2.91419 16.4915 3.05175 15.8358 3.45388 15.3306L9.88256 6.95545C9.98627 6.82108 10.1778 6.79743 10.309 6.90385Z" fill="currentColor"></path>
                                            <path opacity="0.4" d="M18.1208 8.66544L17.0806 9.96401C16.9758 10.0962 16.7874 10.1177 16.6573 10.0124C15.3927 8.98901 12.1545 6.36285 11.2561 5.63509C11.1249 5.52759 11.1069 5.33625 11.2127 5.20295L12.2159 3.95706C13.126 2.78534 14.7133 2.67784 15.9938 3.69906L17.4647 4.87078C18.0679 5.34377 18.47 5.96726 18.6076 6.62299C18.7663 7.3443 18.597 8.0527 18.1208 8.66544Z" fill="currentColor"></path>
                                        </svg>
                                        <span className="ms-2">Edit Post</span>
                                    </Dropdown.Item>
                                    <Dropdown.Item className=" d-flex align-items-center" >
                                        <svg width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M7.7688 8.71387H16.2312C18.5886 8.71387 20.5 10.5831 20.5 12.8885V17.8254C20.5 20.1308 18.5886 22 16.2312 22H7.7688C5.41136 22 3.5 20.1308 3.5 17.8254V12.8885C3.5 10.5831 5.41136 8.71387 7.7688 8.71387ZM11.9949 17.3295C12.4928 17.3295 12.8891 16.9419 12.8891 16.455V14.2489C12.8891 13.772 12.4928 13.3844 11.9949 13.3844C11.5072 13.3844 11.1109 13.772 11.1109 14.2489V16.455C11.1109 16.9419 11.5072 17.3295 11.9949 17.3295Z" fill="currentColor"></path>
                                            <path opacity="0.4" d="M17.523 7.39595V8.86667C17.1673 8.7673 16.7913 8.71761 16.4052 8.71761H15.7447V7.39595C15.7447 5.37868 14.0681 3.73903 12.0053 3.73903C9.94257 3.73903 8.26594 5.36874 8.25578 7.37608V8.71761H7.60545C7.20916 8.71761 6.83319 8.7673 6.47754 8.87661V7.39595C6.4877 4.41476 8.95692 2 11.985 2C15.0537 2 17.523 4.41476 17.523 7.39595Z" fill="currentColor"></path>
                                        </svg>
                                        <span className="ms-2">Security</span>
                                    </Dropdown.Item>
                                    <Dropdown.Item className=" d-flex align-items-center" >
                                        <svg width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M22 12C22 17.524 17.523 22 12 22C6.477 22 2 17.524 2 12C2 6.478 6.477 2 12 2C17.523 2 22 6.478 22 12Z" fill="currentColor"></path>
                                            <path d="M15.5739 15.8145C15.4429 15.8145 15.3109 15.7805 15.1899 15.7095L11.2639 13.3675C11.0379 13.2315 10.8989 12.9865 10.8989 12.7225V7.67554C10.8989 7.26154 11.2349 6.92554 11.6489 6.92554C12.0629 6.92554 12.3989 7.26154 12.3989 7.67554V12.2965L15.9589 14.4195C16.3139 14.6325 16.4309 15.0925 16.2189 15.4485C16.0779 15.6835 15.8289 15.8145 15.5739 15.8145Z" fill="currentColor"></path>
                                        </svg>
                                        <span className="ms-2">Timer</span>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body>
                            <div className="user-post">
                                <Link to="#"><Image src={app1} alt="post-image" className="img-fluid rounded w-100"  onClick={handleShow} /></Link>
                            </div>
                            <div className="comment-area pt-3">
                                <Likeshare noLikes="120" noComments="02"/>
                                <hr/>
                               <ul className="list-inline mt-4 mb-0">
                                    <li className="mb-0">
                                    <Friendcomment userName="Larry Robbins" userComment="So True!!" commentDuration="2 Min Ago" userImage={img1}/>
                                    </li>
                                </ul>
                                <Commentfromcontrol placeholder="Enter Your Comment Here..."/>
                            </div>                              
                        </Card.Body>
                    </Card>
                    <Imagemodal show={show}  onclick={handleClose} />
                    <Card>
                        <Card.Header className="card-header d-flex align-items-center justify-content-between pb-0">
                            <div className="header-title">
                                <div className="d-flex justify-content-center flex-wrap">
                                    <div className="media-support-user-img me-3">
                                        <Image className="img-fluid border border-2 border-primary border-dotted rounded-circle avatar-50 p-1" src={friend4} alt="" />
                                    </div>
                                    <div className="media-support-info">
                                        <div className="d-flex align-items-center mb-2">
                                            <h6 className="mb-0 me-2">Ella Martina</h6>
                                            <small className="text-dark">Updated Her Status</small>
                                        </div>
                                        <p className="mb-0 text-muted">3 hrs Ago</p>
                                    </div>
                                </div>
                            </div>                        
                            <Dropdown>
                                <Dropdown.Toggle as={CustomToggle} className="" >
                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10 20.6788C10 21.9595 11.0378 23 12.3113 23C13.5868 23 14.6265 21.9595 14.6265 20.6788C14.6265 19.3981 13.5868 18.3576 12.3113 18.3576C11.0378 18.3576 10 19.3981 10 20.6788ZM10 12.0005C10 13.2812 11.0378 14.3217 12.3113 14.3217C13.5868 14.3217 14.6265 13.2812 14.6265 12.0005C14.6265 10.7198 13.5868 9.67929 12.3113 9.67929C11.0378 9.67929 10 10.7198 10 12.0005ZM12.3113 5.64239C11.0378 5.64239 10 4.60192 10 3.3212C10 2.04047 11.0378 1 12.3113 1C13.5868 1 14.6265 2.04047 14.6265 3.3212C14.6265 4.60192 13.5868 5.64239 12.3113 5.64239Z" fill="#8A92A6"/>
                                    </svg>
                                </Dropdown.Toggle>
                                <Dropdown.Menu >
                                    <Dropdown.Item className=" d-flex align-items-center">
                                        <svg width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M19.9927 18.9534H14.2984C13.7429 18.9534 13.291 19.4124 13.291 19.9767C13.291 20.5422 13.7429 21.0001 14.2984 21.0001H19.9927C20.5483 21.0001 21.0001 20.5422 21.0001 19.9767C21.0001 19.4124 20.5483 18.9534 19.9927 18.9534Z" fill="currentColor"></path>
                                            <path d="M10.309 6.90385L15.7049 11.2639C15.835 11.3682 15.8573 11.5596 15.7557 11.6929L9.35874 20.0282C8.95662 20.5431 8.36402 20.8344 7.72908 20.8452L4.23696 20.8882C4.05071 20.8903 3.88775 20.7613 3.84542 20.5764L3.05175 17.1258C2.91419 16.4915 3.05175 15.8358 3.45388 15.3306L9.88256 6.95545C9.98627 6.82108 10.1778 6.79743 10.309 6.90385Z" fill="currentColor"></path>
                                            <path opacity="0.4" d="M18.1208 8.66544L17.0806 9.96401C16.9758 10.0962 16.7874 10.1177 16.6573 10.0124C15.3927 8.98901 12.1545 6.36285 11.2561 5.63509C11.1249 5.52759 11.1069 5.33625 11.2127 5.20295L12.2159 3.95706C13.126 2.78534 14.7133 2.67784 15.9938 3.69906L17.4647 4.87078C18.0679 5.34377 18.47 5.96726 18.6076 6.62299C18.7663 7.3443 18.597 8.0527 18.1208 8.66544Z" fill="currentColor"></path>
                                        </svg>
                                        <span className="ms-2">Edit Post</span>
                                    </Dropdown.Item>
                                    <Dropdown.Item className=" d-flex align-items-center" >
                                        <svg width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M7.7688 8.71387H16.2312C18.5886 8.71387 20.5 10.5831 20.5 12.8885V17.8254C20.5 20.1308 18.5886 22 16.2312 22H7.7688C5.41136 22 3.5 20.1308 3.5 17.8254V12.8885C3.5 10.5831 5.41136 8.71387 7.7688 8.71387ZM11.9949 17.3295C12.4928 17.3295 12.8891 16.9419 12.8891 16.455V14.2489C12.8891 13.772 12.4928 13.3844 11.9949 13.3844C11.5072 13.3844 11.1109 13.772 11.1109 14.2489V16.455C11.1109 16.9419 11.5072 17.3295 11.9949 17.3295Z" fill="currentColor"></path>
                                            <path opacity="0.4" d="M17.523 7.39595V8.86667C17.1673 8.7673 16.7913 8.71761 16.4052 8.71761H15.7447V7.39595C15.7447 5.37868 14.0681 3.73903 12.0053 3.73903C9.94257 3.73903 8.26594 5.36874 8.25578 7.37608V8.71761H7.60545C7.20916 8.71761 6.83319 8.7673 6.47754 8.87661V7.39595C6.4877 4.41476 8.95692 2 11.985 2C15.0537 2 17.523 4.41476 17.523 7.39595Z" fill="currentColor"></path>
                                        </svg>
                                        <span className="ms-2">Security</span>
                                    </Dropdown.Item>
                                    <Dropdown.Item className=" d-flex align-items-center" >
                                        <svg width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M22 12C22 17.524 17.523 22 12 22C6.477 22 2 17.524 2 12C2 6.478 6.477 2 12 2C17.523 2 22 6.478 22 12Z" fill="currentColor"></path>
                                            <path d="M15.5739 15.8145C15.4429 15.8145 15.3109 15.7805 15.1899 15.7095L11.2639 13.3675C11.0379 13.2315 10.8989 12.9865 10.8989 12.7225V7.67554C10.8989 7.26154 11.2349 6.92554 11.6489 6.92554C12.0629 6.92554 12.3989 7.26154 12.3989 7.67554V12.2965L15.9589 14.4195C16.3139 14.6325 16.4309 15.0925 16.2189 15.4485C16.0779 15.6835 15.8289 15.8145 15.5739 15.8145Z" fill="currentColor"></path>
                                        </svg>
                                        <span className="ms-2">Timer</span>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-dark">“Essentials to happiness in this life are something to do, something to love, and something to hope for.”</p>
                            <div className="comment-area pt-3">
                            <Likeshare noLikes="15" noComments="20"/>
                            <hr/>
                            <ul className="list-inline mt-4 mb-0">
                                <li className="mb-0">
                                    <Friendcomment userName="Larry Robbins" userComment="So True!!" commentDuration="5 Min Ago" userImage={img1}/>
                                </li>
                            </ul>
                            <Commentfromcontrol placeholder="Enter Your Comment Here..." />
                            </div>                              
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Fragment>
    )

}
)
Friendprofile.displayName="Friendprofile"
export default Friendprofile