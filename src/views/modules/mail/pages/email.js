import {useState,memo,Fragment} from 'react'

// React-bootstrap
import {Button,Dropdown,Modal, Nav, Tab} from 'react-bootstrap'

// Components
import Card from '../../../../components/bootstrap/card'
import EmailData from '../components/email-data'
import CustomToggle from '../../../../components/dropdowns'
import EmailPopup from '../components/email-popup'

const Email = memo(() => {

    const [show, setShow,] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Fragment>
            <div className="overflow-hidden">
                <Card>
                    <Card.Body className="p-0">
                        <div className="mail-data tab-bottom-bordered d-flex justify-content-between align-items-center flex-wrap">
                            <Tab.Container defaultActiveKey="1">
                                <Nav as="ul" className="mb-0 pe-0 nav-tabs" role="tablist">
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="1" data-bs-target="#tab-home" aria-controls="pills-home" data-bs-toggle="tab" href="#" role="tab" aria-selected="true">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" fill="none">
                                                <path opacity="0.4" d="M21.25 13.4764C20.429 13.4764 19.761 12.8145 19.761 12.001C19.761 11.1865 20.429 10.5246 21.25 10.5246C21.449 10.5246 21.64 10.4463 21.78 10.3076C21.921 10.1679 22 9.97864 22 9.78146L21.999 7.10415C21.999 4.84102 20.14 3 17.856 3H6.144C3.86 3 2.001 4.84102 2.001 7.10415L2 9.86766C2 10.0648 2.079 10.2541 2.22 10.3938C2.36 10.5325 2.551 10.6108 2.75 10.6108C3.599 10.6108 4.239 11.2083 4.239 12.001C4.239 12.8145 3.571 13.4764 2.75 13.4764C2.336 13.4764 2 13.8093 2 14.2195V16.8949C2 19.158 3.858 21 6.143 21H17.857C20.142 21 22 19.158 22 16.8949V14.2195C22 13.8093 21.664 13.4764 21.25 13.4764Z" fill="currentColor"/>
                                                <path d="M15.4305 11.5886L14.2515 12.7366L14.5305 14.3596C14.5785 14.6406 14.4655 14.9176 14.2345 15.0836C14.0055 15.2516 13.7065 15.2726 13.4545 15.1386L11.9995 14.3736L10.5415 15.1396C10.4335 15.1966 10.3155 15.2266 10.1985 15.2266C10.0455 15.2266 9.8945 15.1786 9.7645 15.0846C9.5345 14.9176 9.4215 14.6406 9.4695 14.3596L9.7475 12.7366L8.5685 11.5886C8.3645 11.3906 8.2935 11.0996 8.3815 10.8286C8.4705 10.5586 8.7005 10.3666 8.9815 10.3266L10.6075 10.0896L11.3365 8.61259C11.4635 8.35859 11.7175 8.20059 11.9995 8.20059H12.0015C12.2845 8.20159 12.5385 8.35959 12.6635 8.61359L13.3925 10.0896L15.0215 10.3276C15.2995 10.3666 15.5295 10.5586 15.6175 10.8286C15.7065 11.0996 15.6355 11.3906 15.4305 11.5886Z" fill="currentColor"/>
                                            </svg>
                                            <span className="iq-mail-section">
                                                Primary
                                            </span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="2" data-bs-target="#tab-profile" aria-controls="pills-profile" data-bs-toggle="tab" href="#" role="tab" aria-selected="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M11.949 14.5399C8.49903 14.5399 5.58807 15.1037 5.58807 17.2794C5.58807 19.4561 8.51783 20 11.949 20C15.399 20 18.31 19.4362 18.31 17.2605C18.31 15.0839 15.3802 14.5399 11.949 14.5399Z" fill="currentColor"/>
                                                <path opacity="0.4" d="M11.949 12.467C14.2851 12.467 16.1583 10.5831 16.1583 8.23351C16.1583 5.88306 14.2851 4 11.949 4C9.61293 4 7.73975 5.88306 7.73975 8.23351C7.73975 10.5831 9.61293 12.467 11.949 12.467Z" fill="currentColor"/>
                                                <path opacity="0.4" d="M21.0879 9.21926C21.6923 6.84179 19.9203 4.70657 17.6639 4.70657C17.4186 4.70657 17.184 4.73359 16.9548 4.77952C16.9243 4.78672 16.8903 4.80203 16.8724 4.82905C16.8518 4.86327 16.867 4.9092 16.8894 4.93892C17.5672 5.89531 17.9567 7.05973 17.9567 8.3097C17.9567 9.50744 17.5995 10.6241 16.9727 11.5508C16.9082 11.6463 16.9655 11.775 17.0792 11.7949C17.2368 11.8228 17.398 11.8372 17.5627 11.8417C19.2058 11.8849 20.6805 10.8213 21.0879 9.21926Z" fill="currentColor"/>
                                                <path d="M22.8093 14.8169C22.5084 14.1721 21.7823 13.73 20.6782 13.5129C20.1571 13.385 18.7468 13.2049 17.4351 13.2292C17.4154 13.2319 17.4046 13.2455 17.4028 13.2545C17.4002 13.2671 17.4055 13.2887 17.4315 13.3022C18.0377 13.6039 20.381 14.916 20.0864 17.6834C20.0738 17.8032 20.1696 17.9067 20.2887 17.8887C20.8654 17.8059 22.349 17.4853 22.8093 16.4866C23.0636 15.9588 23.0636 15.3456 22.8093 14.8169Z" fill="currentColor"/>
                                                <path opacity="0.4" d="M7.04483 4.77979C6.8165 4.73296 6.58101 4.70685 6.33567 4.70685C4.07926 4.70685 2.30726 6.84207 2.91255 9.21953C3.31906 10.8216 4.79379 11.8852 6.43685 11.842C6.60161 11.8375 6.76368 11.8221 6.92037 11.7951C7.03409 11.7753 7.09139 11.6465 7.02692 11.5511C6.40014 10.6235 6.04288 9.50771 6.04288 8.30997C6.04288 7.0591 6.43327 5.89468 7.11109 4.93919C7.13258 4.90947 7.1487 4.86354 7.12721 4.82932C7.1093 4.80141 7.07617 4.787 7.04483 4.77979Z" fill="currentColor"/>
                                                <path d="M3.32156 13.5127C2.21752 13.7297 1.49225 14.1719 1.19139 14.8167C0.936203 15.3453 0.936203 15.9586 1.19139 16.4872C1.65163 17.485 3.13531 17.8065 3.71195 17.8885C3.83104 17.9065 3.92595 17.8038 3.91342 17.6831C3.61883 14.9166 5.9621 13.6045 6.56918 13.3028C6.59425 13.2884 6.59962 13.2677 6.59694 13.2542C6.59515 13.2452 6.5853 13.2317 6.5656 13.2299C5.25294 13.2047 3.84358 13.3848 3.32156 13.5127Z" fill="currentColor"/>
                                            </svg>
                                            <span className="iq-mail-section">
                                                Social
                                            </span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="3" data-bs-target="#tab-contact" aria-controls="pills-contact" data-bs-toggle="tab" href="#" role="tab" aria-selected="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" fill="none">
                                                <path opacity="0.4" d="M11.9991 21.9982C11.2301 21.9982 10.4621 21.7062 9.87511 21.1232L9.14511 20.3932C8.86211 20.1112 8.48311 19.9552 8.08111 19.9542H7.05411C5.39411 19.9542 4.04311 18.6032 4.04311 16.9432V15.9152C4.04211 15.5142 3.88611 15.1352 3.60311 14.8502L2.88511 14.1332C1.70911 12.9642 1.70411 11.0532 2.87411 9.87621L3.60411 9.14521C3.88611 8.86221 4.04211 8.48321 4.04311 8.08121V7.05521C4.04311 5.39421 5.39411 4.04321 7.05411 4.04321H8.08211C8.48311 4.04321 8.86111 3.88721 9.14611 3.60221L9.86511 2.88521C11.0341 1.70921 12.9441 1.70321 14.1221 2.87421L14.8521 3.60421C15.1361 3.88721 15.5141 4.04321 15.9151 4.04321H16.9431C18.6031 4.04321 19.9541 5.39421 19.9541 7.05521V8.08221C19.9551 8.48321 20.1111 8.86221 20.3941 9.14721L21.1121 9.86521C21.6811 10.4312 21.9961 11.1852 21.9991 11.9902C22.0011 12.7902 21.6931 13.5432 21.1321 14.1122C21.1221 14.1222 21.1131 14.1332 21.1031 14.1422L20.3931 14.8522C20.1111 15.1352 19.9551 15.5142 19.9541 15.9162V16.9432C19.9541 18.6032 18.6031 19.9542 16.9431 19.9542H15.9151C15.5141 19.9552 15.1351 20.1112 14.8511 20.3942L14.1321 21.1122C13.5461 21.7022 12.7721 21.9982 11.9991 21.9982Z" fill="currentColor"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M10.0428 10.0509C9.8778 10.2159 9.6638 10.3049 9.4268 10.3049C9.2048 10.3049 8.9868 10.2139 8.8118 10.0499C8.6458 9.88489 8.5518 9.65889 8.5518 9.42989C8.5518 9.21189 8.6438 8.98789 8.8058 8.81489C8.8948 8.72489 9.0008 8.65689 9.1068 8.62089C9.4088 8.48289 9.8098 8.56389 10.0478 8.81389C10.1328 8.89889 10.1978 8.99189 10.2408 9.08889C10.2878 9.19289 10.3118 9.31089 10.3118 9.42989C10.3118 9.66789 10.2168 9.88889 10.0428 10.0509ZM15.1905 8.80979C14.8495 8.46979 14.2945 8.46979 13.9535 8.80979L8.8135 13.9498C8.4725 14.2908 8.4725 14.8458 8.8135 15.1878C8.9795 15.3528 9.1985 15.4438 9.4325 15.4438C9.6665 15.4438 9.8855 15.3528 10.0505 15.1878L15.1905 10.0478C15.5315 9.70579 15.5315 9.15179 15.1905 8.80979ZM14.9058 13.7639C14.5818 13.6279 14.1978 13.7019 13.9418 13.9579C13.8888 14.0199 13.8138 14.1159 13.7628 14.2289C13.7088 14.3509 13.7018 14.4819 13.7018 14.5699C13.7018 14.6579 13.7088 14.7879 13.7628 14.9099C13.8128 15.0219 13.8728 15.1129 13.9518 15.1919C14.1328 15.3599 14.3428 15.4449 14.5768 15.4449C14.7988 15.4449 15.0168 15.3549 15.1958 15.1879C15.3548 15.0289 15.4418 14.8089 15.4418 14.5699C15.4418 14.3299 15.3548 14.1109 15.1948 13.9509C15.1068 13.8639 15.0008 13.7959 14.9058 13.7639Z" fill="currentColor"/>
                                            </svg>
                                            <span className="iq-mail-section">
                                                Promotions
                                            </span>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <div className="d-flex align-items-center px-3 iq-extra-mail-content">
                                    <div className="me-3">
                                        <Dropdown>
                                            <Dropdown.Toggle as={CustomToggle} >
                                                <input type="checkbox" className="form-check-input" id="customCheck1" />
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M19 8.5L12 15.5L5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <li><Dropdown.Item className="dropdown-item" href="#">All</Dropdown.Item></li>
                                                <li><Dropdown.Item className="dropdown-item" href="#">None</Dropdown.Item></li>
                                                <li><Dropdown.Item className="dropdown-item" href="#">Read</Dropdown.Item></li>
                                                <li><Dropdown.Item className="dropdown-item" href="#">Unread</Dropdown.Item></li>
                                                <li><Dropdown.Item className="dropdown-item" href="#">Starred</Dropdown.Item></li>
                                                <li><Dropdown.Item className="dropdown-item" href="#">Unstarred</Dropdown.Item></li>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="me-4" onClick={handleShow}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" fill="none">
                                            <path opacity="0.4" d="M21.9999 15.9402C21.9999 18.7302 19.7599 20.9902 16.9699 21.0002H16.9599H7.04991C4.26991 21.0002 1.99991 18.7502 1.99991 15.9602V15.9502C1.99991 15.9502 2.00591 11.5242 2.01391 9.29821C2.01491 8.88021 2.49491 8.64621 2.82191 8.90621C5.19791 10.7912 9.44691 14.2282 9.49991 14.2732C10.2099 14.8422 11.1099 15.1632 12.0299 15.1632C12.9499 15.1632 13.8499 14.8422 14.5599 14.2622C14.6129 14.2272 18.7669 10.8932 21.1789 8.97721C21.5069 8.71621 21.9889 8.95021 21.9899 9.36721C21.9999 11.5762 21.9999 15.9402 21.9999 15.9402Z" fill="currentColor"/>
                                            <path d="M21.476 5.6736C20.61 4.0416 18.906 2.9996 17.03 2.9996H7.05001C5.17401 2.9996 3.47001 4.0416 2.60401 5.6736C2.41001 6.0386 2.50201 6.4936 2.82501 6.7516L10.25 12.6906C10.77 13.1106 11.4 13.3196 12.03 13.3196C12.034 13.3196 12.037 13.3196 12.04 13.3196C12.043 13.3196 12.047 13.3196 12.05 13.3196C12.68 13.3196 13.31 13.1106 13.83 12.6906L21.255 6.7516C21.578 6.4936 21.67 6.0386 21.476 5.6736Z" fill="currentColor"/>
                                        </svg>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <span className="iq-header-page">Page 1 to 50</span>
                                        <div className="btn-group btn-group-toggle btn-group-sm ms-3 btn-group-edges"> 
                                            <Button className="btn btn-icon btn-primary" to="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M15.5 19L8.5 12L15.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </Button>
                                            <Button className="btn btn-icon btn-primary" to="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Container>
                        </div>
                    </Card.Body>
                    <Card.Body className="p-0">
                        <div className="iq-email-listbox h-100">
                            <Tab.Content id="nav-tab" role="tablist">
                                <Tab.Pane eventKey="1" className="fade show active" id="tab-home" role="tabpanel" aria-labelledby="home-tab">
                                    <ul className="iq-email-sender-list m-0">
                                        <EmailData id="1" senderName="Library Books" stars={true} subjectName="Books you applied for are availabe" mailTime="10:00 AM" emailMessage="Adipiscing elit. sollicitudin fusce tellus elementum est orci lacinia. Habitant lectus risus orci pellentesqu..." />
                                        <EmailData id="2" senderName="Swiggy" stars={true} subjectName="Round trip around the world" mailTime="10:00 AM" emailMessage="Sollicitudin fusce tellus elementum est lacinia. Habitant lectus risus orci pellentesqu elementum tellus est lacinia..."/>
                                        <EmailData id="3" senderName="Jane Cooper" stars={true}  subjectName="It’s time to earn bigger rewards!" mailTime="10:00 AM" emailMessage="Lorem ipsum dolor sit amet, sollicitudin fusce tellus elementum est lacinia. Habitant lectus est pellentesq..."/>
                                        <EmailData id="4" senderName="Wade Warren"  subjectName="Kick off the weekend with a cook-off" mailTime="10:00 AM" emailMessage=" Adipiscing elit.  sollicitudin fusce tellus elementum est lacinia. Habitant lectus risus orci pellentesqu..."/>
                                        <EmailData id="5" senderName="Leslie Alexander" stars={true}  subjectName="Check Out Top Companies Hiring Now!" mailTime="10:00 AM" emailMessage="Sollicitudin fusce tellus elementum est lacinia. Habitant lectus risus orci pellentesqu elementum tellus est lacinia..."/>
                                        <EmailData id="6" senderName="Library Books" stars={true}  subjectName="Your daily dose of handpicked stories" mailTime="10:00 AM" emailMessage="Sollicitudin fusce tellus elementum est lacinia. Habitant lectus risussce tellus elem orci pellentesqu..."/>
                                        <EmailData id="7" senderName="Wipro Wilp" stars={true}  subjectName="Data Is Where You Can Advance: Build the Career You’ve Wanted" mailTime="10:00 AM" emailMessage="Adipiscing elit. sollicitudin fusce tellus eleme lectus risus orci pellentesqu..."/>
                                        <EmailData id="8" senderName="Jane Cooper" stars={true}  subjectName="Statement of Accounts of Funds " mailTime="10:00 AM" emailMessage="Adipiscing elementum elit. sollicitudin fusce tellus elementum est lacinia. Habitant lectus risus tellusorci ..."/>
                                        <EmailData id="9" senderName="Guy Hawkins"  subjectName="Smart careers and greater futures" mailTime="10:00 AM" emailMessage="Adipiscing elit. sollicitudin fusce tellus elementum est orci lacinia. Habitant lectus risus orci pellentesqu..."/>
                                        <EmailData id="10" senderName="Library Books" stars={true}  subjectName="Kick off the weekend with a cook-off" mailTime="10:00 AM" emailMessage="Adipiscing elit. sollicitudin fusce tellus elementum est orci lacinia. Habitant lectus risus orci pellentesqu..."/>
                                        <EmailData id="11" senderName="Wade Warren" stars={true}  subjectName="Your daily dose of handpicked stories" mailTime="10:00 AM" emailMessage="Adipiscing elit. sollicitudin fusce tellus elementum est orci lacinia. Habitant lectus risus orci pellentesqu..."/>
                                        <EmailData id="12" senderName="Library Books" stars={true}  subjectName="Data Is Where You Can Advance: Build the Career You’ve Wanted" mailTime="10:00 AM" emailMessage="Lorem ipsum dolor sit amet, sollicitudin fusce tellus elementum est lacinia. Habitant est pellentesq..."/>
                                        <EmailData id="13" senderName="Wipro Wilp"  subjectName="Check Out Top Companies Hiring Now!" mailTime="10:00 AM" emailMessage="Adipiscing elit. sollicitudin fusce tellus eleme lectus risus orci pellentesqu..."/>
                                        <EmailData id="14" senderName="Leslie Alexander" stars={true}  subjectName="Books you applied for are availabe" mailTime="10:00 AM" emailMessage="Sollicitudin fusce tellus elementum est lacinia. Habitant lectus risussce tellus elem orci pellentesqu..."/>
                                    </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="2" className="fade show" id="tab-profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <ul className="iq-email-sender-list m-0">
                                        <EmailData id="111" senderName="Library Books" stars={true} subjectName="Books you applied for are availabe" mailTime="10:00 AM" emailMessage="Adipiscing elit. sollicitudin fusce tellus elementum est orci lacinia. Habitant lectus risus orci pellentesqu..."/>
                                        <EmailData id="112" senderName="Swiggy" stars={true} subjectName="Round trip around the world" mailTime="10:00 AM" emailMessage="Sollicitudin fusce tellus elementum est lacinia. Habitant lectus risus orci pellentesqu elementum tellus est lacinia..."/>
                                        <EmailData id="113" senderName="Jane Cooper" stars={true} subjectName="It’s time to earn bigger rewards!" mailTime="10:00 AM" emailMessage="Lorem ipsum dolor sit amet, sollicitudin fusce tellus elementum est lacinia. Habitant lectus est pellentesq..."/>
                                        <EmailData id="114" senderName="Wade Warren"  subjectName="Kick off the weekend with a cook-off" mailTime="10:00 AM" emailMessage=" Adipiscing elit.  sollicitudin fusce tellus elementum est lacinia. Habitant lectus risus orci pellentesqu..."/>
                                        <EmailData id="115" senderName="Leslie Alexander" stars={true} subjectName="Check Out Top Companies Hiring Now!" mailTime="10:00 AM" emailMessage="Sollicitudin fusce tellus elementum est lacinia. Habitant lectus risus orci pellentesqu elementum tellus est lacinia..."/>
                                        <EmailData id="116" senderName="Library Books" stars={true} subjectName="Your daily dose of handpicked stories" mailTime="10:00 AM" emailMessage="Sollicitudin fusce tellus elementum est lacinia. Habitant lectus risussce tellus elem orci pellentesqu..."/>
                                        <EmailData id="117" senderName="Wipro Wilp" stars={true} subjectName="Data Is Where You Can Advance: Build the Career You’ve Wanted" mailTime="10:00 AM" emailMessage="Adipiscing elit. sollicitudin fusce tellus eleme lectus risus orci pellentesqu..."/>
                                        <EmailData id="118" senderName="Jane Cooper" stars={true} subjectName="Statement of Accounts of Funds " mailTime="10:00 AM" emailMessage="Adipiscing elementum elit. sollicitudin fusce tellus elementum est lacinia. Habitant lectus risus tellusorci ..."/>
                                        <EmailData id="119" senderName="Guy Hawkins" subjectName="Smart careers and greater futures" mailTime="10:00 AM" emailMessage="Adipiscing elit. sollicitudin fusce tellus elementum est orci lacinia. Habitant lectus risus orci pellentesqu..."/>
                                        <EmailData id="1110" senderName="Library Books" stars={true} subjectName="Kick off the weekend with a cook-off" mailTime="10:00 AM" emailMessage="Adipiscing elit. sollicitudin fusce tellus elementum est orci lacinia. Habitant lectus risus orci pellentesqu..."/>
                                        <EmailData id="1111" senderName="Wade Warren" stars={true} subjectName="Your daily dose of handpicked stories" mailTime="10:00 AM" emailMessage="Adipiscing elit. sollicitudin fusce tellus elementum est orci lacinia. Habitant lectus risus orci pellentesqu..."/>
                                        <EmailData id="1112" senderName="Library Books" stars={true} subjectName="Data Is Where You Can Advance: Build the Career You’ve Wanted" mailTime="10:00 AM" emailMessage="Lorem ipsum dolor sit amet, sollicitudin fusce tellus elementum est lacinia. Habitant est pellentesq..."/>
                                        <EmailData id="1113" senderName="Wipro Wilp" subjectName="Check Out Top Companies Hiring Now!" mailTime="10:00 AM" emailMessage="Adipiscing elit. sollicitudin fusce tellus eleme lectus risus orci pellentesqu..."/>
                                        <EmailData id="1114" senderName="Leslie Alexander" stars={true} subjectName="Books you applied for are availabe" mailTime="10:00 AM" emailMessage="Sollicitudin fusce tellus elementum est lacinia. Habitant lectus risussce tellus elem orci pellentesqu..."/>
                                    </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="3" className="fade show" id="tab-contact" role="tabpanel" aria-labelledby="contact-tab">
                                    <ul className="iq-email-sender-list m-0">
                                        <EmailData id="21" senderName="Library Books" stars={true} subjectName="Books you applied for are availabe" mailTime="10:00 AM" emailMessage="Adipiscing elit. sollicitudin fusce tellus elementum est orci lacinia. Habitant lectus risus orci pellentesqu..."/>
                                        <EmailData id="22" senderName="Swiggy" stars={true} subjectName="Round trip around the world" mailTime="10:00 AM" emailMessage="Sollicitudin fusce tellus elementum est lacinia. Habitant lectus risus orci pellentesqu elementum tellus est lacinia..."/>
                                        <EmailData id="23" senderName="Jane Cooper" stars={true} subjectName="It’s time to earn bigger rewards!" mailTime="10:00 AM" emailMessage="Lorem ipsum dolor sit amet, sollicitudin fusce tellus elementum est lacinia. Habitant lectus est pellentesq..."/>
                                        <EmailData id="24" senderName="Wade Warren" subjectName="Kick off the weekend with a cook-off" mailTime="10:00 AM" emailMessage=" Adipiscing elit.  sollicitudin fusce tellus elementum est lacinia. Habitant lectus risus orci pellentesqu..."/>
                                        <EmailData id="25" senderName="Leslie Alexander" stars={true} subjectName="Check Out Top Companies Hiring Now!" mailTime="10:00 AM" emailMessage="Sollicitudin fusce tellus elementum est lacinia. Habitant lectus risus orci pellentesqu elementum tellus est lacinia..."/>
                                        <EmailData id="26" senderName="Library Books" stars={true} subjectName="Your daily dose of handpicked stories" mailTime="10:00 AM" emailMessage="Sollicitudin fusce tellus elementum est lacinia. Habitant lectus risussce tellus elem orci pellentesqu..."/>
                                        <EmailData id="27" senderName="Wipro Wilp" stars={true} subjectName="Data Is Where You Can Advance: Build the Career You’ve Wanted" mailTime="10:00 AM" emailMessage="Adipiscing elit. sollicitudin fusce tellus eleme lectus risus orci pellentesqu..."/>
                                        <EmailData id="28" senderName="Jane Cooper" stars={true} subjectName="Statement of Accounts of Funds " mailTime="10:00 AM" emailMessage="Adipiscing elementum elit. sollicitudin fusce tellus elementum est lacinia. Habitant lectus risus tellusorci ..."/>
                                        <EmailData id="29" senderName="Guy Hawkins" subjectName="Smart careers and greater futures" mailTime="10:00 AM" emailMessage="Adipiscing elit. sollicitudin fusce tellus elementum est orci lacinia. Habitant lectus risus orci pellentesqu..."/>
                                        <EmailData id="210" senderName="Library Books" stars={true} subjectName="Kick off the weekend with a cook-off" mailTime="10:00 AM" emailMessage="Adipiscing elit. sollicitudin fusce tellus elementum est orci lacinia. Habitant lectus risus orci pellentesqu..."/>
                                        <EmailData id="211" senderName="Wade Warren" stars={true} subjectName="Your daily dose of handpicked stories" mailTime="10:00 AM" emailMessage="Adipiscing elit. sollicitudin fusce tellus elementum est orci lacinia. Habitant lectus risus orci pellentesqu..."/>
                                        <EmailData id="212" senderName="Library Books" stars={true} subjectName="Data Is Where You Can Advance: Build the Career You’ve Wanted" mailTime="10:00 AM" emailMessage="Lorem ipsum dolor sit amet, sollicitudin fusce tellus elementum est lacinia. Habitant est pellentesq..."/>
                                        <EmailData id="213" senderName="Wipro Wilp" subjectName="Check Out Top Companies Hiring Now!" mailTime="10:00 AM" emailMessage="Adipiscing elit. sollicitudin fusce tellus eleme lectus risus orci pellentesqu..."/>
                                        <EmailData id="214" senderName="Leslie Alexander" stars={true} subjectName="Books you applied for are availabe" mailTime="10:00 AM" emailMessage="Sollicitudin fusce tellus elementum est lacinia. Habitant lectus risussce tellus elem orci pellentesqu..."/>
                                    </ul>
                                </Tab.Pane>
                            </Tab.Content>
                        </div>                           
                    </Card.Body>
                </Card>
            </div>
            <Modal className="iq-custom-mail-modal" size="lg" fullscreen="lg-down" show={show} onHide={handleClose}>
                <EmailPopup show={show}  onclick={handleClose} closeBtn="closeButton" />
            </Modal>
        </Fragment>
    )
})

Email.displayName="Email"
export default Email
