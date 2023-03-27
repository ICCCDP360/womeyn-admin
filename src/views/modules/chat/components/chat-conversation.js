import {memo,Fragment} from 'react'

//React-bootstrap
import { Image, Button, Dropdown, Form } from 'react-bootstrap'

//Router
import { Link } from 'react-router-dom'

//Componet
import Card from '../../../components/Card'

//Img
import img1 from '../../../assets/images/chat/08.png'
import img2 from '../../../assets/images/chat/02.png'

const ChatConversation = memo((props) => {
    return (
        <Fragment>
            <div className={`card tab-pane fade ${props.className}`} aria-labelledby={props.Id} role="tabpanel" id={props.Id}>
                <Card.Header className="border-bottom chat-content-header  pb-3">
                    <div className="d-flex align-items-center">
                        <Button className="btn-sm d-block d-lg-none mr-2" data-toggel-extra="side-nav"
                            data-expand-extra=".chat-left-wrapper">
                            <i className="las la-arrow-right"></i>
                        </Button>
                        {props.chatConversationImg &&
                            <div className="avatar-50 avatar-borderd avatar-rounded bg-white chat-profile-1" onClick={() =>{ props.chatConversation ()}} >
                                <img src={props.chatConversationImg} alt="users" className="img-fluid" loading="lazy"  />
                            </div>
                        }
                        {props.chatConversationIcon &&
                            <div className="p-2 bg-white rounded-circle chat-profile-1" onClick={() =>{ props.chatConversation ()}}>
                                <span className="text-primary">
                                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M23.8502 15.1956C25.7102 14.9343 27.1422 13.3396 27.1462 11.4076C27.1462 9.50358 25.7582 7.92492 23.9382 7.62625"
                                            stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        </path>
                                        <path
                                            d="M26.3047 19.667C28.106 19.9363 29.3634 20.567 29.3634 21.867C29.3634 22.7617 28.7714 23.343 27.814 23.7083"
                                            stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        </path>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M15.849 20.2184C11.5637 20.2184 7.90369 20.8677 7.90369 23.4611C7.90369 26.0531 11.541 26.7211 15.849 26.7211C20.1344 26.7211 23.793 26.0784 23.793 23.4837C23.793 20.8891 20.157 20.2184 15.849 20.2184Z"
                                            stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        </path>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M15.849 16.5172C18.661 16.5172 20.941 14.2385 20.941 11.4252C20.941 8.61319 18.661 6.33319 15.849 6.33319C13.037 6.33319 10.757 8.61319 10.757 11.4252C10.7463 14.2279 13.009 16.5079 15.8117 16.5172H15.849Z"
                                            stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        </path>
                                        <path
                                            d="M7.84641 15.1956C5.98508 14.9343 4.55442 13.3396 4.55042 11.4076C4.55042 9.50358 5.93841 7.92492 7.75841 7.62625"
                                            stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        </path>
                                        <path
                                            d="M5.39192 19.667C3.59059 19.9363 2.33325 20.567 2.33325 21.867C2.33325 22.7617 2.92525 23.343 3.88259 23.7083"
                                            stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        </path>
                                    </svg>
                                </span>
                            </div>
                        }
                        <div className="chat-title ms-2">
                            <h5 className="mb-0">{props.chatConversationName} </h5>
                            <div>
                                <span className="me-1 text-success">
                                    <svg width="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="currentcolor" />
                                    </svg>
                                </span>
                                <small>Active</small>
                            </div>
                        </div>
                    </div>
                    <div className="chat-action">
                        <div className="d-flex align-items-center" role="tablist">
                            <Button className="text-white bg-primary btn-sm">
                                <svg width="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.353 1.5C17.054 1.911 19.978 4.831 20.393 8.532" stroke="currentcolor"
                                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.353 5.04303C15.124 5.38703 16.508 6.77203 16.853 8.54303" stroke="currentcolor"
                                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M10.0315 11.4724C14.0205 15.4604 14.9254 10.8467 17.4653 13.3848C19.9138 15.8328 21.3222 16.3232 18.2188 19.4247C17.8302 19.737 15.3613 23.4943 6.68447 14.8197C-1.99341 6.144 1.76157 3.67244 2.07394 3.28395C5.18377 0.173846 5.66682 1.58938 8.11539 4.03733C10.6541 6.5765 6.04254 7.48441 10.0315 11.4724Z"
                                        stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Button>
                            <Button className="bg-primary btn-sm ms-3">
                                <span className="text-white">
                                    <svg width="20" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M15.2968 11.5383C15.3777 13.3704 13.8991 14.9196 11.9946 14.9975C11.8543 15.0034 5.01526 14.9896 5.01526 14.9896C3.11992 15.1335 1.4611 13.7715 1.31161 11.9463C1.30034 11.8103 1.30341 4.47219 1.30341 4.47219C1.21945 2.63815 2.696 1.08499 4.60159 1.00418C4.74392 0.997278 11.5737 1.01009 11.5737 1.01009C13.4783 0.868176 15.1422 2.24001 15.2897 4.07405C15.2999 4.2061 15.2968 11.5383 15.2968 11.5383Z"
                                            stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                        <path
                                            d="M15.3 5.97984L18.593 3.28484C19.409 2.61684 20.633 3.19884 20.632 4.25184L20.62 11.6008C20.619 12.6538 19.394 13.2308 18.58 12.5628L15.3 9.86784"
                                            stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </Button>
                            <Dropdown className="ms-3">
                                <Dropdown.Toggle as='svg' className="text-primary" role="button" height="20" id={`drop-down- ${props.dropdownId}`} viewBox="0 0 5 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2.5" cy="3" r="2.5" fill="currentcolor" />
                                    <circle cx="2.5" cy="14" r="2.5" fill="currentcolor" />
                                    <circle cx="2.5" cy="25" r="2.5" fill="currentcolor" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu aria-labelledby={`drop-down- ${props.dropdownId}`}>
                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <Dropdown className="chat-action-responsive d-none">
                        <Dropdown.Toggle as='svg' href="#" className="text-white" id={`dropdownMenuButton ${props.dropdownId}`}
                            aria-expanded="false" width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2.5" cy="3" r="2.5" fill="currentcolor"></circle>
                            <circle cx="2.5" cy="10" r="2.5" fill="currentcolor"></circle>
                            <circle cx="2.5" cy="17" r="2.5" fill="currentcolor"></circle>
                        </Dropdown.Toggle>
                        <Dropdown.Menu aria-labelledby={`dropdownMenuButton ${props.dropdownId}`}>
                            <li>
                                <Dropdown.Item className=" d-flex align-items-center" href="#">
                                    <svg className="text-primary" width="15" viewBox="0 0 22 22" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.353 1.5C17.054 1.911 19.978 4.831 20.393 8.532" stroke="currentcolor"
                                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M13.353 5.04303C15.124 5.38703 16.508 6.77203 16.853 8.54303" stroke="currentcolor"
                                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M10.0315 11.4724C14.0205 15.4604 14.9254 10.8467 17.4653 13.3848C19.9138 15.8328 21.3222 16.3232 18.2188 19.4247C17.8302 19.737 15.3613 23.4943 6.68447 14.8197C-1.99341 6.144 1.76157 3.67244 2.07394 3.28395C5.18377 0.173846 5.66682 1.58938 8.11539 4.03733C10.6541 6.5765 6.04254 7.48441 10.0315 11.4724Z"
                                            stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                    </svg> <span className="ms-2">Call</span>
                                </Dropdown.Item>
                            </li>
                            <li>
                                <Dropdown.Item className="d-flex align-items-center" href="#">
                                    <svg width="15" className="text-primary" viewBox="0 0 22 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M15.2968 11.5383C15.3777 13.3704 13.8991 14.9196 11.9946 14.9975C11.8543 15.0034 5.01526 14.9896 5.01526 14.9896C3.11992 15.1335 1.4611 13.7715 1.31161 11.9463C1.30034 11.8103 1.30341 4.47219 1.30341 4.47219C1.21945 2.63815 2.696 1.08499 4.60159 1.00418C4.74392 0.997278 11.5737 1.01009 11.5737 1.01009C13.4783 0.868176 15.1422 2.24001 15.2897 4.07405C15.2999 4.2061 15.2968 11.5383 15.2968 11.5383Z"
                                            stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                        <path
                                            d="M15.3 5.97984L18.593 3.28484C19.409 2.61684 20.633 3.19884 20.632 4.25184L20.62 11.6008C20.619 12.6538 19.394 13.2308 18.58 12.5628L15.3 9.86784"
                                            stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                    </svg><span className="ms-2">Video-call</span>
                                </Dropdown.Item>
                            </li>
                        </Dropdown.Menu>
                    </Dropdown>
                </Card.Header>
                <Card.Body className="c.js">
                    <div className="chat-detail mb-4">
                        <span>Yesterday</span>
                    </div>
                    <div className="chat-left">
                        <div className="d-flex">
                            <p className="md-0">Hi! Devon how are you?</p>
                        </div>
                        <div className="d-flex justify-content-end">
                            <small>10.00pm</small>
                        </div>
                        <div className="chat-like">
                            <span className="text-danger">
                                <svg width="14" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4"
                                        d="M6.85068 12.5583C5.32866 11.6182 3.91379 10.5097 2.63196 9.25306C1.72704 8.35584 1.03595 7.26031 0.611482 6.05018C-0.146939 3.69015 0.735911 0.992986 3.20078 0.192264C4.50179 -0.216313 5.91674 0.034503 7.00474 0.866556C8.09313 0.0354335 9.50763 -0.215301 10.8087 0.192264C13.2736 0.992986 14.1623 3.69015 13.4039 6.05018C12.9829 7.25917 12.2959 8.3546 11.3953 9.25306C10.1123 10.5083 8.69759 11.6167 7.17657 12.5583L7.01066 12.6667L6.85068 12.5583Z"
                                        fill="currentcolor" />
                                    <path
                                        d="M7.00731 12.6666L6.8507 12.5583C5.32679 11.6183 3.90996 10.5098 2.62605 9.25304C1.71684 8.35707 1.02163 7.26144 0.59372 6.05016C-0.158776 3.69013 0.724074 0.992966 3.18894 0.192245C4.48995 -0.216332 5.92356 0.0346753 7.00731 0.873695V12.6666Z"
                                        fill="currentcolor" />
                                    <path
                                        d="M11.1537 4.66615C11.0198 4.65753 10.8951 4.5906 10.8088 4.48104C10.7225 4.37149 10.6822 4.22893 10.6974 4.08677C10.7119 3.61854 10.4454 3.19234 10.0346 3.02651C9.77403 2.95539 9.61626 2.67324 9.68144 2.39499C9.74328 2.12121 9.99964 1.95098 10.2573 2.0126C10.2898 2.018 10.3212 2.02979 10.3497 2.04737C11.1735 2.36439 11.7068 3.2176 11.6644 4.1505C11.663 4.2919 11.6079 4.42665 11.5116 4.52387C11.4153 4.62109 11.2862 4.67244 11.1537 4.66615Z"
                                        fill="currentcolor" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="chat-left mt-4">
                        <div>
                            <p className="mb-0">See....! <Link to="/dashboard">Design System</Link> </p>
                        </div>
                        <Image src={img1} className="chat-img" alt="img-1" />
                        <div className="chat-like">
                            <span className="text-danger">
                                <svg width="14" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4"
                                        d="M6.85068 12.5583C5.32866 11.6182 3.91379 10.5097 2.63196 9.25306C1.72704 8.35584 1.03595 7.26031 0.611482 6.05018C-0.146939 3.69015 0.735911 0.992986 3.20078 0.192264C4.50179 -0.216313 5.91674 0.034503 7.00474 0.866556C8.09313 0.0354335 9.50763 -0.215301 10.8087 0.192264C13.2736 0.992986 14.1623 3.69015 13.4039 6.05018C12.9829 7.25917 12.2959 8.3546 11.3953 9.25306C10.1123 10.5083 8.69759 11.6167 7.17657 12.5583L7.01066 12.6667L6.85068 12.5583Z"
                                        fill="currentcolor" />
                                    <path
                                        d="M7.00731 12.6666L6.8507 12.5583C5.32679 11.6183 3.90996 10.5098 2.62605 9.25304C1.71684 8.35707 1.02163 7.26144 0.59372 6.05016C-0.158776 3.69013 0.724074 0.992966 3.18894 0.192245C4.48995 -0.216332 5.92356 0.0346753 7.00731 0.873695V12.6666Z"
                                        fill="currentcolor" />
                                    <path
                                        d="M11.1537 4.66615C11.0198 4.65753 10.8951 4.5906 10.8088 4.48104C10.7225 4.37149 10.6822 4.22893 10.6974 4.08677C10.7119 3.61854 10.4454 3.19234 10.0346 3.02651C9.77403 2.95539 9.61626 2.67324 9.68144 2.39499C9.74328 2.12121 9.99964 1.95098 10.2573 2.0126C10.2898 2.018 10.3212 2.02979 10.3497 2.04737C11.1735 2.36439 11.7068 3.2176 11.6644 4.1505C11.663 4.2919 11.6079 4.42665 11.5116 4.52387C11.4153 4.62109 11.2862 4.67244 11.1537 4.66615Z"
                                        fill="currentcolor" />
                                </svg>
                            </span>
                        </div>
                        <div className="d-flex justify-content-end">
                            <small>10.00pm</small>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <div className="chat-right mt-4">
                            <div className="chat-text">
                                <p className="mb-0">This is beautiful...</p>
                            </div>
                            <div className="d-flex justify-content-end align-items-center">
                                <span className="text-success">
                                    <svg width="22" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M4.38689 13.3287C3.79682 12.7192 3.79682 11.731 4.38689 11.1215C4.97696 10.512 5.93365 10.512 6.52371 11.1215L8.44686 13.108C8.56487 13.2299 8.75621 13.2299 8.87422 13.108L15.071 6.70712C15.6611 6.09763 16.6178 6.09763 17.2078 6.70712C17.7979 7.31662 17.7979 8.30481 17.2078 8.91431L8.87422 17.5223C8.75621 17.6442 8.56487 17.6442 8.44686 17.5223L4.38689 13.3287Z"
                                            fill="currentcolor" />
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M8.73616 14.465C8.14609 13.8555 8.84562 13.5634 9.43569 12.9539C10.0258 12.3444 10.2829 11.6483 10.873 12.2578L12.7961 14.2443C12.9141 14.3662 13.1055 14.3662 13.2235 14.2443L19.4203 7.84342C20.0104 7.23392 20.9671 7.23392 21.5571 7.84342C22.1472 8.45291 22.1472 9.44111 21.5571 10.0506L13.2235 18.6586C13.1055 18.7805 12.9141 18.7805 12.7961 18.6586L8.73616 14.465Z"
                                            fill="currentcolor" />
                                    </svg>
                                </span>
                                <small>10:00 pm</small>
                            </div>
                            <div className="chat-like">
                                <span className="text-danger">
                                    <svg width="14" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.4"
                                            d="M6.85068 12.5583C5.32866 11.6182 3.91379 10.5097 2.63196 9.25306C1.72704 8.35584 1.03595 7.26031 0.611482 6.05018C-0.146939 3.69015 0.735911 0.992986 3.20078 0.192264C4.50179 -0.216313 5.91674 0.034503 7.00474 0.866556C8.09313 0.0354335 9.50763 -0.215301 10.8087 0.192264C13.2736 0.992986 14.1623 3.69015 13.4039 6.05018C12.9829 7.25917 12.2959 8.3546 11.3953 9.25306C10.1123 10.5083 8.69759 11.6167 7.17657 12.5583L7.01066 12.6667L6.85068 12.5583Z"
                                            fill="currentcolor" />
                                        <path
                                            d="M7.00731 12.6666L6.8507 12.5583C5.32679 11.6183 3.90996 10.5098 2.62605 9.25304C1.71684 8.35707 1.02163 7.26144 0.59372 6.05016C-0.158776 3.69013 0.724074 0.992966 3.18894 0.192245C4.48995 -0.216332 5.92356 0.0346753 7.00731 0.873695V12.6666Z"
                                            fill="currentcolor" />
                                        <path
                                            d="M11.1537 4.66615C11.0198 4.65753 10.8951 4.5906 10.8088 4.48104C10.7225 4.37149 10.6822 4.22893 10.6974 4.08677C10.7119 3.61854 10.4454 3.19234 10.0346 3.02651C9.77403 2.95539 9.61626 2.67324 9.68144 2.39499C9.74328 2.12121 9.99964 1.95098 10.2573 2.0126C10.2898 2.018 10.3212 2.02979 10.3497 2.04737C11.1735 2.36439 11.7068 3.2176 11.6644 4.1505C11.663 4.2919 11.6079 4.42665 11.5116 4.52387C11.4153 4.62109 11.2862 4.67244 11.1537 4.66615Z"
                                            fill="currentcolor" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <div className="chat-right mt-4">
                            <div className="d-flex align-items-center w-100">
                                <Image src={img2} alt="images-chat" className="avatar-50 rounded-circle" />
                                <span className="ms-2 text-primary">
                                    <svg width="10" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0.214335 7.13276L7.06244 2.91355C7.21582 2.81954 7.41218 2.82854 7.55578 2.93955C8.2064 3.44057 8.78766 3.9486 9.17549 4.37562C9.17549 4.37562 9.50959 4.71764 9.65418 4.93465C9.88766 5.23066 10 5.61768 10 5.9937C10 6.41572 9.87691 6.81474 9.63171 7.13376C9.57602 7.19076 9.36403 7.44177 9.16377 7.64678C7.99539 8.92285 4.94549 11.031 3.34141 11.67C3.10793 11.773 2.48466 11.988 2.16131 12C1.84967 12 1.54879 11.932 1.25962 11.783C0.90403 11.578 0.625612 11.26 0.469307 10.8829C0.368686 10.6209 0.213358 9.83489 0.213358 9.81189C0.112736 9.25086 0.0375146 8.46282 0.00039219 7.54278C-0.00644615 7.37777 0.0765909 7.21776 0.214335 7.13276Z"
                                            fill="currentcolor" />
                                        <path opacity="0.4"
                                            d="M0.672307 4.86025C0.370443 5.04726 -0.00957327 4.80824 0.00508032 4.44923C0.0412258 3.60718 0.103748 2.86515 0.179946 2.31312C0.191669 2.30112 0.346997 1.32207 0.525771 0.991052C0.837404 0.376021 1.44895 2.86102e-06 2.1064 2.86102e-06H2.16111C2.58509 0.0110035 3.48677 0.387022 3.48677 0.410023C3.94103 0.599033 4.53402 0.919049 5.17194 1.30407C5.45915 1.47808 5.46598 1.9051 5.17877 2.08211L0.672307 4.86025Z"
                                            fill="currentcolor" />
                                    </svg>
                                </span>
                            </div>
                            <div className="d-flex justify-content-end align-items-center">
                                <span className="text-success">
                                    <svg width="22" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M4.38689 13.3287C3.79682 12.7192 3.79682 11.731 4.38689 11.1215C4.97696 10.512 5.93365 10.512 6.52371 11.1215L8.44686 13.108C8.56487 13.2299 8.75621 13.2299 8.87422 13.108L15.071 6.70712C15.6611 6.09763 16.6178 6.09763 17.2078 6.70712C17.7979 7.31662 17.7979 8.30481 17.2078 8.91431L8.87422 17.5223C8.75621 17.6442 8.56487 17.6442 8.44686 17.5223L4.38689 13.3287Z"
                                            fill="currentcolor" />
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M8.73616 14.465C8.14609 13.8555 8.84562 13.5634 9.43569 12.9539C10.0258 12.3444 10.2829 11.6483 10.873 12.2578L12.7961 14.2443C12.9141 14.3662 13.1055 14.3662 13.2235 14.2443L19.4203 7.84342C20.0104 7.23392 20.9671 7.23392 21.5571 7.84342C22.1472 8.45291 22.1472 9.44111 21.5571 10.0506L13.2235 18.6586C13.1055 18.7805 12.9141 18.7805 12.7961 18.6586L8.73616 14.465Z"
                                            fill="currentcolor" />
                                    </svg>
                                </span>
                                <small>10:00 pm</small>
                            </div>
                            <div className="chat-like">
                                <span className="text-danger">
                                    <svg width="14" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.4"
                                            d="M6.85068 12.5583C5.32866 11.6182 3.91379 10.5097 2.63196 9.25306C1.72704 8.35584 1.03595 7.26031 0.611482 6.05018C-0.146939 3.69015 0.735911 0.992986 3.20078 0.192264C4.50179 -0.216313 5.91674 0.034503 7.00474 0.866556C8.09313 0.0354335 9.50763 -0.215301 10.8087 0.192264C13.2736 0.992986 14.1623 3.69015 13.4039 6.05018C12.9829 7.25917 12.2959 8.3546 11.3953 9.25306C10.1123 10.5083 8.69759 11.6167 7.17657 12.5583L7.01066 12.6667L6.85068 12.5583Z"
                                            fill="currentcolor" />
                                        <path
                                            d="M7.00731 12.6666L6.8507 12.5583C5.32679 11.6183 3.90996 10.5098 2.62605 9.25304C1.71684 8.35707 1.02163 7.26144 0.59372 6.05016C-0.158776 3.69013 0.724074 0.992966 3.18894 0.192245C4.48995 -0.216332 5.92356 0.0346753 7.00731 0.873695V12.6666Z"
                                            fill="currentcolor" />
                                        <path
                                            d="M11.1537 4.66615C11.0198 4.65753 10.8951 4.5906 10.8088 4.48104C10.7225 4.37149 10.6822 4.22893 10.6974 4.08677C10.7119 3.61854 10.4454 3.19234 10.0346 3.02651C9.77403 2.95539 9.61626 2.67324 9.68144 2.39499C9.74328 2.12121 9.99964 1.95098 10.2573 2.0126C10.2898 2.018 10.3212 2.02979 10.3497 2.04737C11.1735 2.36439 11.7068 3.2176 11.6644 4.1505C11.663 4.2919 11.6079 4.42665 11.5116 4.52387C11.4153 4.62109 11.2862 4.67244 11.1537 4.66615Z"
                                            fill="currentcolor" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="chat-detail my-4">
                        <span>Today</span>
                    </div>
                    <div className="chat-left">
                        <div className="d-flex mb-1">
                            <p className="mb-0">Lets meet we’ll discuss about the projects and let then tell the team about the ideas</p>
                        </div>
                        <div className="d-flex justify-content-end">
                            <small>10.00pm</small>
                        </div>
                        <div className="chat-like">
                            <span className="text-danger">
                                <svg width="14" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4"
                                        d="M6.85068 12.5583C5.32866 11.6182 3.91379 10.5097 2.63196 9.25306C1.72704 8.35584 1.03595 7.26031 0.611482 6.05018C-0.146939 3.69015 0.735911 0.992986 3.20078 0.192264C4.50179 -0.216313 5.91674 0.034503 7.00474 0.866556C8.09313 0.0354335 9.50763 -0.215301 10.8087 0.192264C13.2736 0.992986 14.1623 3.69015 13.4039 6.05018C12.9829 7.25917 12.2959 8.3546 11.3953 9.25306C10.1123 10.5083 8.69759 11.6167 7.17657 12.5583L7.01066 12.6667L6.85068 12.5583Z"
                                        fill="currentcolor" />
                                    <path
                                        d="M7.00731 12.6666L6.8507 12.5583C5.32679 11.6183 3.90996 10.5098 2.62605 9.25304C1.71684 8.35707 1.02163 7.26144 0.59372 6.05016C-0.158776 3.69013 0.724074 0.992966 3.18894 0.192245C4.48995 -0.216332 5.92356 0.0346753 7.00731 0.873695V12.6666Z"
                                        fill="currentcolor" />
                                    <path
                                        d="M11.1537 4.66615C11.0198 4.65753 10.8951 4.5906 10.8088 4.48104C10.7225 4.37149 10.6822 4.22893 10.6974 4.08677C10.7119 3.61854 10.4454 3.19234 10.0346 3.02651C9.77403 2.95539 9.61626 2.67324 9.68144 2.39499C9.74328 2.12121 9.99964 1.95098 10.2573 2.0126C10.2898 2.018 10.3212 2.02979 10.3497 2.04737C11.1735 2.36439 11.7068 3.2176 11.6644 4.1505C11.663 4.2919 11.6079 4.42665 11.5116 4.52387C11.4153 4.62109 11.2862 4.67244 11.1537 4.66615Z"
                                        fill="currentcolor" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="chat-left mt-4">
                        <div>
                            <p className="mb-0">See....! <Link to="/dashboard">Design System</Link> </p>
                        </div>
                        <Image src={img1} className="chat-img" alt="img-2" />
                        <div className="chat-like">
                            <span className="text-danger">
                                <svg width="14" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4"
                                        d="M6.85068 12.5583C5.32866 11.6182 3.91379 10.5097 2.63196 9.25306C1.72704 8.35584 1.03595 7.26031 0.611482 6.05018C-0.146939 3.69015 0.735911 0.992986 3.20078 0.192264C4.50179 -0.216313 5.91674 0.034503 7.00474 0.866556C8.09313 0.0354335 9.50763 -0.215301 10.8087 0.192264C13.2736 0.992986 14.1623 3.69015 13.4039 6.05018C12.9829 7.25917 12.2959 8.3546 11.3953 9.25306C10.1123 10.5083 8.69759 11.6167 7.17657 12.5583L7.01066 12.6667L6.85068 12.5583Z"
                                        fill="currentcolor" />
                                    <path
                                        d="M7.00731 12.6666L6.8507 12.5583C5.32679 11.6183 3.90996 10.5098 2.62605 9.25304C1.71684 8.35707 1.02163 7.26144 0.59372 6.05016C-0.158776 3.69013 0.724074 0.992966 3.18894 0.192245C4.48995 -0.216332 5.92356 0.0346753 7.00731 0.873695V12.6666Z"
                                        fill="currentcolor" />
                                    <path
                                        d="M11.1537 4.66615C11.0198 4.65753 10.8951 4.5906 10.8088 4.48104C10.7225 4.37149 10.6822 4.22893 10.6974 4.08677C10.7119 3.61854 10.4454 3.19234 10.0346 3.02651C9.77403 2.95539 9.61626 2.67324 9.68144 2.39499C9.74328 2.12121 9.99964 1.95098 10.2573 2.0126C10.2898 2.018 10.3212 2.02979 10.3497 2.04737C11.1735 2.36439 11.7068 3.2176 11.6644 4.1505C11.663 4.2919 11.6079 4.42665 11.5116 4.52387C11.4153 4.62109 11.2862 4.67244 11.1537 4.66615Z"
                                        fill="currentcolor" />
                                </svg>
                            </span>
                        </div>
                        <div className="d-flex justify-content-end">
                            <small>10.00pm</small>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <div className="chat-right mt-4">
                            <div className="chat-text">
                                <p className="mb-0">Lets meet we’ll discuss about the projects</p>
                            </div>
                            <div className="d-flex justify-content-end align-items-center">
                                <span className="text-success">
                                    <svg width="22" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M4.38689 13.3287C3.79682 12.7192 3.79682 11.731 4.38689 11.1215C4.97696 10.512 5.93365 10.512 6.52371 11.1215L8.44686 13.108C8.56487 13.2299 8.75621 13.2299 8.87422 13.108L15.071 6.70712C15.6611 6.09763 16.6178 6.09763 17.2078 6.70712C17.7979 7.31662 17.7979 8.30481 17.2078 8.91431L8.87422 17.5223C8.75621 17.6442 8.56487 17.6442 8.44686 17.5223L4.38689 13.3287Z"
                                            fill="currentcolor" />
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M8.73616 14.465C8.14609 13.8555 8.84562 13.5634 9.43569 12.9539C10.0258 12.3444 10.2829 11.6483 10.873 12.2578L12.7961 14.2443C12.9141 14.3662 13.1055 14.3662 13.2235 14.2443L19.4203 7.84342C20.0104 7.23392 20.9671 7.23392 21.5571 7.84342C22.1472 8.45291 22.1472 9.44111 21.5571 10.0506L13.2235 18.6586C13.1055 18.7805 12.9141 18.7805 12.7961 18.6586L8.73616 14.465Z"
                                            fill="currentcolor" />
                                    </svg>
                                </span>
                                <small>10:00 pm</small>
                            </div>
                            <div className="chat-like">
                                <span className="text-danger">
                                    <svg width="14" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.4"
                                            d="M6.85068 12.5583C5.32866 11.6182 3.91379 10.5097 2.63196 9.25306C1.72704 8.35584 1.03595 7.26031 0.611482 6.05018C-0.146939 3.69015 0.735911 0.992986 3.20078 0.192264C4.50179 -0.216313 5.91674 0.034503 7.00474 0.866556C8.09313 0.0354335 9.50763 -0.215301 10.8087 0.192264C13.2736 0.992986 14.1623 3.69015 13.4039 6.05018C12.9829 7.25917 12.2959 8.3546 11.3953 9.25306C10.1123 10.5083 8.69759 11.6167 7.17657 12.5583L7.01066 12.6667L6.85068 12.5583Z"
                                            fill="currentcolor" />
                                        <path
                                            d="M7.00731 12.6666L6.8507 12.5583C5.32679 11.6183 3.90996 10.5098 2.62605 9.25304C1.71684 8.35707 1.02163 7.26144 0.59372 6.05016C-0.158776 3.69013 0.724074 0.992966 3.18894 0.192245C4.48995 -0.216332 5.92356 0.0346753 7.00731 0.873695V12.6666Z"
                                            fill="currentcolor" />
                                        <path
                                            d="M11.1537 4.66615C11.0198 4.65753 10.8951 4.5906 10.8088 4.48104C10.7225 4.37149 10.6822 4.22893 10.6974 4.08677C10.7119 3.61854 10.4454 3.19234 10.0346 3.02651C9.77403 2.95539 9.61626 2.67324 9.68144 2.39499C9.74328 2.12121 9.99964 1.95098 10.2573 2.0126C10.2898 2.018 10.3212 2.02979 10.3497 2.04737C11.1735 2.36439 11.7068 3.2176 11.6644 4.1505C11.663 4.2919 11.6079 4.42665 11.5116 4.52387C11.4153 4.62109 11.2862 4.67244 11.1537 4.66615Z"
                                            fill="currentcolor" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </Card.Body>
                <Card.Footer className="px-3 py-3 border-top">
                    <Form>
                        <div className="input-group">
                            <input type="text" className="form-control chat-input" placeholder="Write a message"
                                aria-label="Recipient's username" />
                            <span className="text-primary mgs-icon emoji-icon">
                                <svg width="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_156_599)">
                                        <path
                                            d="M20.4853 4.01473C18.2188 1.74823 15.2053 0.5 12 0.5C8.79469 0.5 5.78119 1.74823 3.51473 4.01473C1.24819 6.28119 0 9.29469 0 12.5C0 15.7053 1.24819 18.7188 3.51473 20.9853C5.78119 23.2518 8.79469 24.5 12 24.5C15.2053 24.5 18.2188 23.2518 20.4853 20.9853C22.7518 18.7188 24 15.7053 24 12.5C24 9.29469 22.7518 6.28119 20.4853 4.01473ZM12 23.0714C6.17091 23.0714 1.42856 18.3291 1.42856 12.5C1.42856 6.67091 6.17091 1.92856 12 1.92856C17.8291 1.92856 22.5714 6.67091 22.5714 12.5C22.5714 18.3291 17.8291 23.0714 12 23.0714Z"
                                            fill="#0048B3" />
                                        <path
                                            d="M9.40398 9.3309C8.23431 8.16114 6.33104 8.16123 5.16136 9.3309C4.88241 9.60981 4.88241 10.0621 5.16136 10.3411C5.44036 10.62 5.89266 10.62 6.17157 10.3411C6.78432 9.72836 7.78126 9.7284 8.39392 10.3411C8.53342 10.4806 8.71618 10.5503 8.89895 10.5503C9.08171 10.5503 9.26457 10.4806 9.40398 10.3411C9.68293 10.0621 9.68293 9.60986 9.40398 9.3309Z"
                                            fill="currentcolor" />
                                        <path
                                            d="M18.8384 9.3309C17.6688 8.16123 15.7655 8.16114 14.5958 9.3309C14.3169 9.60981 14.3169 10.0621 14.5958 10.3411C14.8748 10.62 15.3271 10.62 15.606 10.3411C16.2187 9.72836 17.2156 9.72831 17.8284 10.3411C17.9679 10.4806 18.1506 10.5503 18.3334 10.5503C18.5162 10.5503 18.699 10.4806 18.8384 10.3411C19.1174 10.0621 19.1174 9.60986 18.8384 9.3309Z"
                                            fill="currentcolor" />
                                        <path
                                            d="M18.3335 13.024H5.6668C5.2723 13.024 4.95251 13.3438 4.95251 13.7383C4.95251 17.6243 8.11409 20.7859 12.0001 20.7859C15.8862 20.7859 19.0477 17.6243 19.0477 13.7383C19.0477 13.3438 18.728 13.024 18.3335 13.024ZM12.0001 19.3573C9.14366 19.3573 6.77816 17.215 6.42626 14.4525H17.574C17.2221 17.215 14.8566 19.3573 12.0001 19.3573Z"
                                            fill="currentcolor" />
                                    </g>
                                    <defs>
                                        <clipPath>
                                            <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                            <span className="mgs-icon attachment-icon">
                                <svg width="19" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.15518 17.0987L13.1405 8.64034C13.66 8.09001 13.66 7.19775 13.1405 6.64743C12.6209 6.0971 11.7785 6.0971 11.259 6.64742L1.77933 16.6887C0.740224 17.7893 0.740225 19.5738 1.77933 20.6745C2.81843 21.7752 4.50314 21.7752 5.54225 20.6745L16.831 8.717C18.3897 7.06601 18.3897 4.38923 16.831 2.73824C15.2724 1.08725 12.7453 1.08725 11.1866 2.73824L3.55224 10.8249"
                                        stroke="currentcolor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </span>
                            <span className="mgs-icon voice-icon">
                                <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.00021 21.5V18.3391" stroke="currentcolor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" />
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M9.00021 14.3481V14.3481C6.75611 14.3481 4.9384 12.5218 4.9384 10.2682V5.58095C4.9384 3.32732 6.75611 1.5 9.00021 1.5C11.2433 1.5 13.061 3.32732 13.061 5.58095V10.2682C13.061 12.5218 11.2433 14.3481 9.00021 14.3481Z"
                                        stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M17 10.3006C17 14.7394 13.418 18.3383 9 18.3383C4.58093 18.3383 1 14.7394 1 10.3006"
                                        stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.0689 6.25579H13.0585" stroke="currentcolor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" />
                                    <path d="M10.0704 9.59344H13.0605" stroke="currentcolor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" />
                                </svg>
                            </span>
                            <span className="mgs-icon send-icon">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.8325 6.67463L8.10904 12.4592L1.59944 8.38767C0.66675 7.80414 0.860765 6.38744 1.91572 6.07893L17.3712 1.55277C18.3373 1.26963 19.2326 2.17283 18.9456 3.142L14.3731 18.5868C14.0598 19.6432 12.6512 19.832 12.0732 18.8953L8.10601 12.4602"
                                        stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </div>
                    </Form>
                </Card.Footer>
            </div>
        </Fragment>
    )
})

ChatConversation.displayName="ChatConversation"
export default ChatConversation