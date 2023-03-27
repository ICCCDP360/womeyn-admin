import React,{memo,Fragment} from 'react'

//React-bootstrap
import {Image,Dropdown,Button} from 'react-bootstrap'

const Socialfriendrequest = memo((props) => {
    return (
        <Fragment>
            <div className="border rounded">
                <div className="d-flex">
                    <Image src={props.socialimg} alt="profile-img" className="img-fluid avatar-120 rounded-0 rounded-start" loading="lazy" />
                    <div className="p-3 mb-0 w-100">
                        <div className="d-flex align-items-center justify-content-between h-100">
                            <div className="friend-info">
                                <h5>{props.socialprofilefriendstitle}</h5>
                                <p className="mb-0">{props.socialprofilefriendsdec}</p>
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle as={Button} variant="secondary" bsPrefix="d-flex justify-content-center align-items-center  btn">
                                        <svg className="me-1" width="18"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.81214 17.6234C9.41137 17.6234 9.01059 17.4713 8.70464 17.1654L4.45892 12.9196C3.84703 12.3077 3.84703 11.3165 4.45892 10.7064C5.07082 10.0945 6.06024 10.0927 6.67214 10.7046L9.81214 13.8446L17.1979 6.45892C17.8098 5.84703 18.7992 5.84703 19.4111 6.45892C20.023 7.07082 20.023 8.06203 19.4111 8.67392L10.9196 17.1654C10.6137 17.4713 10.2129 17.6234 9.81214 17.6234" fill="currentColor"/>
                                        </svg>
                                        Friend
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-right" aria-labelledby="dropdownMenuButton01">
                                    <Dropdown.Item href="#">Get Notification</Dropdown.Item>
                                    <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                    <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                    <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                    <Dropdown.Item href="#">Block</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="card-header-toolbar d-flex align-items-center">
                    </div>
                </div>
            </div>
        </Fragment>
    )
})

Socialfriendrequest.displayName="Socialfriendrequest"
export default Socialfriendrequest