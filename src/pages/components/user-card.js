import React, { memo, Fragment } from "react";

//React-bootstrap
import { Dropdown, Nav, Image } from "react-bootstrap";

//Router-dom
import { Link } from "react-router-dom";

//Componet
import Card from "../../components/bootstrap/card";

const UserCard = memo((props) => {
  console.log(props.contact);
  return (
    <Fragment>
      <Card style={{ padding: "0px" }}>
        <Card.Body>
          <ul className="notification-list m-0 p-0">
            <li className="d-flex align-items-center justify-content-between">
              {/* <div className="user-img img-fluid">
                                <Image src={props.notificationimg} alt="story-img" className="rounded-circle avatar-40" loading="lazy" />
                            </div> */}
              <div className="w-100">
                <div className="d-flex justify-content-between">
                  <div className="user-card-content">
                    <h6>{props.notificationtitle}</h6>
                    <div className="permission flex-container">
                      <p>{props.notificationdefault}</p>
                      <span>Seller approval</span>
                      <span>Ticket management</span>
                      <span>Account Admin</span>
                    </div>
                    <div className="contact flex-container">
                      <p>Contact: </p>

                      <span>{props.contact}</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    {/* <Link to="/" onClick={(e) => e.preventDefault()} className={` iq-notify bg-soft-${props.notificationcolor} rounded d-flex justify-content-center align-items-center p-1`}>
                                            {props.notificationsvg === '1' &&
                                                <svg width="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.2513 17C11.7129 17 11.1753 16.7956 10.7644 16.3875L10.2534 15.8764C10.0553 15.679 9.78997 15.5698 9.50856 15.5691H8.78964C7.62759 15.5691 6.68186 14.6233 6.68186 13.4613V12.7416C6.68116 12.4609 6.57196 12.1956 6.37385 11.9961L5.87123 11.4941C5.048 10.6758 5.0445 9.33798 5.86353 8.51402L6.37455 8.00229C6.57196 7.80417 6.68116 7.53885 6.68186 7.25744V6.53919C6.68186 5.37641 7.62759 4.43064 8.78964 4.43064H9.50926C9.78997 4.43064 10.0546 4.32144 10.2541 4.12192L10.7574 3.61999C11.5757 2.79673 12.9128 2.79253 13.7374 3.61229L14.2484 4.12332C14.4472 4.32144 14.7119 4.43064 14.9926 4.43064H15.7122C16.8742 4.43064 17.82 5.37641 17.82 6.53919V7.25814C17.8207 7.53885 17.9299 7.80417 18.128 8.00369L18.6306 8.50632C19.0289 8.90255 19.2494 9.43038 19.2515 9.99392C19.2529 10.554 19.0373 11.0811 18.6446 11.4794C18.6376 11.4864 18.6313 11.4941 18.6243 11.5004L18.1273 11.9975C17.9299 12.1956 17.8207 12.4609 17.82 12.7423V13.4613C17.82 14.6233 16.8742 15.5691 15.7122 15.5691H14.9926C14.7119 15.5698 14.4465 15.679 14.2477 15.8771L13.7444 16.3798C13.3342 16.7928 12.7924 17 12.2513 17" fill="currentColor" />
                                                    <path opacity="0.4" d="M3.00002 19.2505L6.74976 13.4967L10.6623 16.0465L6.91252 21.8003L6.70615 17.8403L3.00002 19.2505Z" fill="currentColor" />
                                                    <path opacity="0.4" d="M21.8248 19.2505L17.6705 12.8759L13.758 15.4257L17.9123 21.8003L17.9298 17.5506L21.8248 19.2505Z" fill="currentColor" />
                                                </svg>
                                            }
                                            {props.notificationsvg === '2' &&
                                                <svg width="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.4" d="M11.7761 21.8374C9.49311 20.4273 7.37081 18.7645 5.44807 16.8796C4.09069 15.5338 3.05404 13.8905 2.41735 12.0753C1.27971 8.53523 2.60399 4.48948 6.30129 3.2884C8.2528 2.67553 10.3752 3.05175 12.0072 4.29983C13.6398 3.05315 15.7616 2.67705 17.7132 3.2884C21.4105 4.48948 22.7436 8.53523 21.606 12.0753C20.9745 13.8888 19.944 15.5319 18.5931 16.8796C16.6686 18.7625 14.5465 20.4251 12.265 21.8374L12.0161 22L11.7761 21.8374Z" fill="currentColor"></path>
                                                    <path d="M12.0109 22.0001L11.776 21.8375C9.49013 20.4275 7.36487 18.7648 5.43902 16.8797C4.0752 15.5357 3.03238 13.8923 2.39052 12.0754C1.26177 8.53532 2.58605 4.48957 6.28335 3.28849C8.23486 2.67562 10.3853 3.05213 12.0109 4.31067V22.0001Z" fill="currentColor"></path>
                                                    <path d="M18.2304 9.99922C18.0296 9.98629 17.8425 9.8859 17.7131 9.72157C17.5836 9.55723 17.5232 9.3434 17.5459 9.13016C17.5677 8.4278 17.168 7.78851 16.5517 7.53977C16.1609 7.43309 15.9243 7.00987 16.022 6.59249C16.1148 6.18182 16.4993 5.92647 16.8858 6.0189C16.9346 6.027 16.9816 6.04468 17.0244 6.07105C18.2601 6.54658 19.0601 7.82641 18.9965 9.22576C18.9944 9.43785 18.9117 9.63998 18.7673 9.78581C18.6229 9.93164 18.4291 10.0087 18.2304 9.99922Z" fill="currentColor"></path>
                                                </svg>
                                            }
                                            {props.notificationsvg === '3' &&
                                                <svg width="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.4" d="M12.02 2C6.21 2 2 6.74 2 12C2 13.68 2.49 15.41 3.35 16.99C3.51 17.25 3.53 17.58 3.42 17.89L2.75 20.13C2.6 20.67 3.06 21.07 3.57 20.91L5.59 20.31C6.14 20.13 6.57 20.36 7.081 20.67C8.541 21.53 10.36 21.97 12 21.97C16.96 21.97 22 18.14 22 11.97C22 6.65 17.7 2 12.02 2Z" fill="currentColor"></path>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.9807 13.2901C11.2707 13.2801 10.7007 12.7101 10.7007 12.0001C10.7007 11.3001 11.2807 10.7201 11.9807 10.7301C12.6907 10.7301 13.2607 11.3001 13.2607 12.0101C13.2607 12.7101 12.6907 13.2901 11.9807 13.2901ZM7.37033 13.2901C6.67033 13.2901 6.09033 12.7101 6.09033 12.0101C6.09033 11.3001 6.66033 10.7301 7.37033 10.7301C8.08033 10.7301 8.65033 11.3001 8.65033 12.0101C8.65033 12.7101 8.08033 13.2801 7.37033 13.2901ZM15.3105 12.0101C15.3105 12.7101 15.8805 13.2901 16.5905 13.2901C17.3005 13.2901 17.8705 12.7101 17.8705 12.0101C17.8705 11.3001 17.3005 10.7301 16.5905 10.7301C15.8805 10.7301 15.3105 11.3001 15.3105 12.0101Z" fill="currentColor"></path>
                                                </svg>
                                            }
                                            {props.notificationsvg === '4' &&
                                                <svg width="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.4" d="M20 12.5645C17.5 7.56444 13.1667 6.73113 11 7.06447V13.0645C12.5 13.0645 15.9 13.3645 17.5 14.5645C18.7911 15.5328 20.603 17.8684 21.2546 18.7343C21.3177 18.8181 21.452 18.7632 21.435 18.6597C21.233 17.4306 20.5944 13.7532 20 12.5645Z" fill="currentColor" />
                                                    <path d="M11.2053 16C11.0569 16 10.9107 15.9593 10.7814 15.88L2.37194 10.6625C2.14094 10.5185 2 10.2692 2 10C2 9.73086 2.14094 9.48151 2.37194 9.33754L10.7814 4.12003C11.0262 3.96876 11.3356 3.95937 11.5889 4.09813C11.8432 4.23584 12 4.49771 12 4.78252L12 15.2175C12 15.5024 11.8432 15.7642 11.5889 15.9019C11.4691 15.9677 11.3367 16 11.2053 16Z" fill="currentColor" />
                                                </svg>
                                            }
                                            {props.notificationsvg === '5' &&
                                                <svg width="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13 5.5C13 4.5 11.5 3 11.5 3C11.5 3 9.99997 4.5 10 5.5C10 6.47631 10.209 7.5 11.5 7.5C12.791 7.5 13 6.5 13 5.5Z" fill="currentColor" />
                                                    <path opacity="0.4" d="M10 11V8H13V11H10Z" fill="currentColor" />
                                                    <path opacity="0.4" d="M3 20V13H20V20H3Z" fill="currentColor" />
                                                    <path d="M18.7916 11H4.23667C3.93831 11 3.6475 11.0938 3.40537 11.2681L2.84935 11.6685C1.93994 12.3232 1.93994 13.6768 2.84935 14.3315C3.40719 14.7332 4.15627 14.7445 4.72601 14.3599L4.96717 14.1972C5.60207 13.7686 6.42245 13.7281 7.09645 14.0921L7.59822 14.363C8.32332 14.7546 9.20587 14.711 9.88889 14.25C10.5719 13.789 11.4545 13.7454 12.1796 14.137L12.5982 14.363C13.3233 14.7546 14.2059 14.711 14.8889 14.25C15.5719 13.789 16.4545 13.7454 17.1796 14.137L17.8451 14.4964C18.4219 14.8079 19.1214 14.7867 19.6783 14.441C20.7847 13.7543 20.8392 12.1642 19.7825 11.4034L19.5717 11.2516C19.3445 11.088 19.0716 11 18.7916 11Z" fill="currentColor" />
                                                </svg>
                                            }
                                            {props.notificationsvg === '6' &&
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M5.50052 15C6.37518 14.9974 7.21675 14.6653 7.85752 14.07L14.1175 17.647C13.9078 18.4666 14.0002 19.3343 14.378 20.0913C14.7557 20.8483 15.3935 21.4439 16.1745 21.7692C16.9555 22.0944 17.8275 22.1274 18.6309 21.8623C19.4343 21.5971 20.1153 21.0515 20.5493 20.3252C20.9832 19.599 21.1411 18.7408 20.994 17.9076C20.8469 17.0745 20.4047 16.3222 19.7483 15.7885C19.0918 15.2548 18.2652 14.9753 17.4195 15.0013C16.5739 15.0273 15.7659 15.357 15.1435 15.93L8.88352 12.353C8.94952 12.103 8.98552 11.844 8.99152 11.585L15.1415 8.06996C15.7337 8.60874 16.4932 8.92747 17.2925 8.97268C18.0918 9.01789 18.8823 8.78684 19.5315 8.31828C20.1806 7.84972 20.6489 7.17217 20.8577 6.39929C21.0666 5.6264 21.0032 4.80522 20.6784 4.0735C20.3535 3.34178 19.7869 2.74404 19.0735 2.38056C18.3602 2.01708 17.5436 1.90998 16.7607 2.07723C15.9777 2.24447 15.2761 2.67588 14.7736 3.29909C14.271 3.92229 13.9981 4.69937 14.0005 5.49996C14.0045 5.78796 14.0435 6.07496 14.1175 6.35296L8.43352 9.59997C8.1039 9.09003 7.64729 8.67461 7.10854 8.39454C6.5698 8.11446 5.96746 7.97937 5.3607 8.00251C4.75395 8.02566 4.16365 8.20627 3.64781 8.52658C3.13197 8.84689 2.70834 9.29589 2.41853 9.82946C2.12872 10.363 1.98271 10.9628 1.99484 11.5699C2.00697 12.177 2.17683 12.7704 2.48772 13.292C2.79861 13.8136 3.23984 14.2453 3.76807 14.5447C4.29629 14.8442 4.89333 15.0011 5.50052 15Z" fill="currentColor"></path>
                                                </svg>
                                            }
                                        </Link> */}
                    <Link
                      className="nav-link "
                      aria-current="page"
                      to="/womeyn/seller-approval/edit"
                    >
                      {" "}
                      <span className="item-name action-link">Edit</span>
                    </Link>
                    <Link
                      className="nav-link"
                      aria-current="page"
                      // to="/womeyn/user-management"
                    >
                      {" "}
                      <span className="item-name action-link">Delete</span>
                    </Link>
                    {/* <div className="card-header-toolbar d-flex align-items-center action-link">
                                            Edit
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center action-link">
                                            Delete
                                        </div> */}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </Card.Body>
      </Card>
    </Fragment>
  );
});

UserCard.displayName = "UserCard";
export default UserCard;
