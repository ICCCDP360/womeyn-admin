import {memo,Fragment} from 'react'

// React-bootstrap
import { Nav } from 'react-bootstrap'

// Router
import { Link, useLocation } from 'react-router-dom'

const Filemanagervarticalnav = memo(() => {

    let location = useLocation();

    return (
        <Fragment>
            <ul className="navbar-nav iq-main-menu" id="sidebar-menu">
                <Nav.Item as="li" className="static-item">
                    <Nav.Link className="static-item disabled" href="#" tabIndex="-1">
                        <span className="default-icon">File Manager</span>
                        <span className="mini-icon">-</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" className={`${location.pathname === '/file-manager/dashboard' ? 'active' : ''}`}>
                    <Link className={`${location.pathname === '/file-manager/dashboard' ? 'active' : ''} nav-link`} aria-current="page" to="/file-manager/dashboard">
                        <i className="icon">
                            <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M16.0756 2H19.4616C20.8639 2 22.0001 3.14585 22.0001 4.55996V7.97452C22.0001 9.38864 20.8639 10.5345 19.4616 10.5345H16.0756C14.6734 10.5345 13.5371 9.38864 13.5371 7.97452V4.55996C13.5371 3.14585 14.6734 2 16.0756 2Z" fill="currentColor"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z" fill="currentColor"></path>
                            </svg>
                        </i>
                        <span className="item-name">Dashboard</span>
                    </Link>
                </Nav.Item>
                <li><hr className="hr-horizontal" /></li>
                <Nav.Item as="li" className="static-item">
                    <Nav.Link className="static-item disabled" href="#" tabIndex="-1">
                        <span className="default-icon">Pages</span>
                        <span className="mini-icon">-</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" className={`${location.pathname === '/file-manager/image-folder' ? 'active' : ''}`}>
                    <Link className={`${location.pathname === '/file-manager/image-folder' ? 'active' : ''} nav-link`} to="/file-manager/image-folder">
                        <i className="icon">
                            <svg width="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.9999 14.7024V16.0859C21.9999 16.3155 21.9899 16.5471 21.9698 16.7767C21.6893 19.9357 19.4949 22 16.3286 22H7.67125C6.06804 22 4.71534 21.4797 3.74339 20.5363C3.36263 20.1864 3.04199 19.7753 2.79149 19.3041C3.12215 18.9021 3.49289 18.462 3.85361 18.0208C4.46484 17.289 5.05602 16.5661 5.42676 16.0959C5.97786 15.4142 7.43077 13.6196 9.4448 14.4617C9.85562 14.6322 10.2163 14.8728 10.547 15.0833C11.3586 15.6247 11.6993 15.7851 12.2704 15.4743C12.9017 15.1335 13.3125 14.4617 13.7434 13.76C13.9739 13.388 14.2043 13.0281 14.4548 12.6972C15.547 11.2736 17.2304 10.8926 18.6332 11.7348C19.3346 12.1559 19.9358 12.6872 20.4969 13.2276C20.6171 13.3479 20.7374 13.4592 20.8476 13.5695C20.9979 13.7198 21.4989 14.2211 21.9999 14.7024Z" fill="currentColor"/>
                                <path opacity="0.4" d="M16.3387 2H7.67134C4.27455 2 2 4.37607 2 7.91411V16.086C2 17.3181 2.28056 18.4119 2.79158 19.3042C3.12224 18.9022 3.49299 18.4621 3.85371 18.0199C4.46493 17.2891 5.05611 16.5662 5.42685 16.096C5.97796 15.4143 7.43086 13.6197 9.44489 14.4618C9.85571 14.6323 10.2164 14.8729 10.5471 15.0834C11.3587 15.6248 11.6994 15.7852 12.2705 15.4734C12.9018 15.1336 13.3126 14.4618 13.7435 13.759C13.9739 13.3881 14.2044 13.0282 14.4549 12.6973C15.5471 11.2737 17.2305 10.8927 18.6333 11.7349C19.3347 12.1559 19.9359 12.6873 20.497 13.2277C20.6172 13.348 20.7375 13.4593 20.8477 13.5696C20.998 13.7189 21.499 14.2202 22 14.7025V7.91411C22 4.37607 19.7255 2 16.3387 2Z" fill="currentColor"/>
                                <path d="M11.4544 8.79665C11.4544 10.2053 10.2811 11.3782 8.87325 11.3782C7.46644 11.3782 6.29309 10.2053 6.29309 8.79665C6.29309 7.38906 7.46644 6.21506 8.87325 6.21506C10.2811 6.21506 11.4544 7.38906 11.4544 8.79665Z" fill="currentColor"/>
                            </svg>
                        </i>
                        <i className="sidenav-mini-icon"> I </i>
                        <span className="item-name">Image</span>
                    </Link>
                </Nav.Item>
                <Nav.Item as="li" className={`${location.pathname === '/file-manager/video-folder' ? 'active' : ''}`}>
                    <Link className={`${location.pathname === '/file-manager/video-folder' ? 'active' : ''} nav-link`} to="/file-manager/video-folder">
                        <i className="icon">
                            <svg width="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M22 12.0048C22 17.5137 17.5116 22 12 22C6.48842 22 2 17.5137 2 12.0048C2 6.48625 6.48842 2 12 2C17.5116 2 22 6.48625 22 12.0048Z" fill="currentColor"/>
                                <path d="M16 12.0049C16 12.2576 15.9205 12.5113 15.7614 12.7145C15.7315 12.7543 15.5923 12.9186 15.483 13.0255L15.4233 13.0838C14.5881 13.9694 12.5099 15.3011 11.456 15.7278C11.456 15.7375 10.8295 15.9913 10.5312 16H10.4915C10.0341 16 9.60653 15.7482 9.38778 15.34C9.26847 15.1154 9.15909 14.4642 9.14915 14.4554C9.05966 13.8712 9 12.9769 9 11.9951C9 10.9657 9.05966 10.0316 9.16903 9.45808C9.16903 9.44836 9.27841 8.92345 9.34801 8.74848C9.45739 8.49672 9.65625 8.2819 9.90483 8.14581C10.1037 8.04957 10.3125 8 10.5312 8C10.7599 8.01069 11.1875 8.15553 11.3565 8.22357C12.4702 8.65128 14.598 10.051 15.4134 10.9064C15.5526 11.0425 15.7017 11.2087 15.7415 11.2467C15.9105 11.4605 16 11.723 16 12.0049Z" fill="currentColor"/>
                            </svg>
                        </i>
                        <i className="sidenav-mini-icon"> V </i>
                        <span className="item-name">Video</span>
                    </Link>
                </Nav.Item>
                <Nav.Item as="li" className={`${location.pathname === '/file-manager/document-folder' ? 'active' : ''}`}>
                    <Link className={`${location.pathname === '/file-manager/document-folder' ? 'active' : ''} nav-link`} to="/file-manager/document-folder">
                        <i className="icon">
                            <svg width="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M18.8088 9.021C18.3573 9.021 17.7592 9.011 17.0146 9.011C15.1987 9.011 13.7055 7.508 13.7055 5.675V2.459C13.7055 2.206 13.5036 2 13.253 2H7.96363C5.49517 2 3.5 4.026 3.5 6.509V17.284C3.5 19.889 5.59022 22 8.16958 22H16.0463C18.5058 22 20.5 19.987 20.5 17.502V9.471C20.5 9.217 20.299 9.012 20.0475 9.013C19.6247 9.016 19.1177 9.021 18.8088 9.021Z" fill="#currentColor"/>
                                <path opacity="0.4" d="M16.084 2.56729C15.785 2.25629 15.263 2.47029 15.263 2.90129V5.53829C15.263 6.64429 16.174 7.55429 17.28 7.55429C17.977 7.56229 18.945 7.56429 19.767 7.56229C20.188 7.56129 20.402 7.05829 20.11 6.75429C19.055 5.65729 17.166 3.69129 16.084 2.56729Z" fill="#currentColor"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.9739 11.3876H12.3589C12.7699 11.3876 13.1039 11.0546 13.1039 10.6436C13.1039 10.2326 12.7699 9.89861 12.3589 9.89861H8.9739C8.5629 9.89861 8.2299 10.2326 8.2299 10.6436C8.2299 11.0546 8.5629 11.3876 8.9739 11.3876ZM8.974 16.3818H14.418C14.829 16.3818 15.163 16.0488 15.163 15.6378C15.163 15.2268 14.829 14.8928 14.418 14.8928H8.974C8.563 14.8928 8.23 15.2268 8.23 15.6378C8.23 16.0488 8.563 16.3818 8.974 16.3818Z" fill="#currentColor"/>
                            </svg>
                        </i>
                        <i className="sidenav-mini-icon"> D </i>
                        <span className="item-name">Document</span>
                    </Link>
                </Nav.Item>
                <Nav.Item as="li" className={`${location.pathname === '/file-manager/all-file' ? 'active' : ''}`}>
                    <Link className={`${location.pathname === '/file-manager/all-file' ? 'active' : ''} nav-link`} to="/file-manager/all-file">
                        <i className="icon">
                            <svg width="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M16.8843 5.11485H13.9413C13.2081 5.11969 12.512 4.79355 12.0474 4.22751L11.0782 2.88762C10.6214 2.31661 9.9253 1.98894 9.19321 2.00028H7.11261C3.37819 2.00028 2.00001 4.19201 2.00001 7.91884V11.9474C1.99536 12.3904 21.9956 12.3898 21.9969 11.9474V10.7761C22.0147 7.04924 20.6721 5.11485 16.8843 5.11485Z" fill="currentColor"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M20.8321 6.54346C21.1521 6.91754 21.3993 7.34785 21.5612 7.81235C21.8798 8.76704 22.0273 9.77029 21.9969 10.7761V16.0291C21.9956 16.4716 21.963 16.9134 21.8991 17.3512C21.7775 18.124 21.5057 18.8655 21.0989 19.5341C20.9119 19.8571 20.6849 20.1552 20.4231 20.4214C19.2383 21.5089 17.665 22.0749 16.0574 21.992H7.93061C6.32049 22.0743 4.74462 21.5085 3.55601 20.4214C3.2974 20.1547 3.07337 19.8566 2.88915 19.5341C2.48475 18.866 2.21869 18.1237 2.1067 17.3512C2.03549 16.9141 1.99981 16.472 2 16.0291V10.7761C1.99983 10.3373 2.02357 9.89895 2.07113 9.4628C2.08113 9.38628 2.09614 9.31101 2.11098 9.23652C2.13573 9.11233 2.16005 8.99031 2.16005 8.86829C2.25031 8.34196 2.41496 7.83108 2.64908 7.35094C3.34261 5.86908 4.76525 5.11484 7.09481 5.11484H16.8754C18.1802 5.01393 19.4753 5.40673 20.5032 6.21514C20.6215 6.31552 20.7316 6.42532 20.8321 6.54346ZM6.97033 15.5411H17.0355H17.0533C17.2741 15.5507 17.4896 15.4716 17.6517 15.3216C17.8137 15.1715 17.9088 14.963 17.9157 14.7425C17.9282 14.5487 17.8644 14.3576 17.7379 14.2101C17.5924 14.0118 17.3618 13.8934 17.1155 13.8906H6.97033C6.51365 13.8906 6.14343 14.2601 6.14343 14.7159C6.14343 15.1716 6.51365 15.5411 6.97033 15.5411Z" fill="currentColor"/>
                            </svg>                            
                        </i>
                        <i className="sidenav-mini-icon"> A </i>
                        <span className="item-name">All Files</span>
                        <div>
                            <span className="badge bg-warning d-inline-block rounded-pill">21</span>
                        </div>
                    </Link>
                </Nav.Item>
                <Nav.Item as="li" className={`${location.pathname === '/file-manager/trash' ? 'active' : ''}`}>
                    <Link className={`${location.pathname === '/file-manager/trash' ? 'active' : ''} nav-link`} to="/file-manager/trash">
                        <i className="icon">
                            <svg width="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M19.6433 9.48844C19.6433 9.55644 19.1103 16.2972 18.8059 19.1341C18.6153 20.875 17.493 21.931 15.8095 21.961C14.516 21.99 13.2497 22 12.0039 22C10.6812 22 9.38772 21.99 8.13215 21.961C6.50507 21.922 5.38177 20.845 5.20088 19.1341C4.88772 16.2872 4.36448 9.55644 4.35476 9.48844C4.34503 9.28345 4.41117 9.08846 4.54538 8.93046C4.67765 8.78447 4.86827 8.69647 5.06861 8.69647H18.9392C19.1385 8.69647 19.3194 8.78447 19.4624 8.93046C19.5956 9.08846 19.6627 9.28345 19.6433 9.48844Z" fill="currentColor"/>
                                <path d="M21 5.97686C21 5.56588 20.6761 5.24389 20.2871 5.24389H17.3714C16.7781 5.24389 16.2627 4.8219 16.1304 4.22692L15.967 3.49795C15.7385 2.61698 14.9498 2 14.0647 2H9.93624C9.0415 2 8.26054 2.61698 8.02323 3.54595L7.87054 4.22792C7.7373 4.8219 7.22185 5.24389 6.62957 5.24389H3.71385C3.32386 5.24389 3 5.56588 3 5.97686V6.35685C3 6.75783 3.32386 7.08982 3.71385 7.08982H20.2871C20.6761 7.08982 21 6.75783 21 6.35685V5.97686Z" fill="currentColor"/>
                            </svg>                            
                        </i>
                        <i className="sidenav-mini-icon"> T </i>
                        <span className="item-name">Trash</span>
                    </Link>
                </Nav.Item>
                <li><hr className="hr-horizontal"/></li>
                <li className="nav-item static-item">
                    <Link className="nav-link static-item disabled" to="#" tabIndex="-1">
                        <span className="default-icon">Other</span>
                        <span className="mini-icon">-</span>
                    </Link>
                </li>
                <Nav.Item>
                    <Link className={`${location.pathname === '/auth/sign-in' ? 'active' : ''} nav-link`} to="/auth/sign-in">
                        <i className="icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M2 6.447C2 3.996 4.03024 2 6.52453 2H11.4856C13.9748 2 16 3.99 16 6.437V17.553C16 20.005 13.9698 22 11.4744 22H6.51537C4.02515 22 2 20.01 2 17.563V16.623V6.447Z" fill="currentColor"></path>
                                <path d="M21.7787 11.4548L18.9329 8.5458C18.6388 8.2458 18.1655 8.2458 17.8723 8.5478C17.5802 8.8498 17.5811 9.3368 17.8743 9.6368L19.4335 11.2298H17.9386H9.54826C9.13434 11.2298 8.79834 11.5748 8.79834 11.9998C8.79834 12.4258 9.13434 12.7698 9.54826 12.7698H19.4335L17.8743 14.3628C17.5811 14.6628 17.5802 15.1498 17.8723 15.4518C18.0194 15.6028 18.2113 15.6788 18.4041 15.6788C18.595 15.6788 18.7868 15.6028 18.9329 15.4538L21.7787 12.5458C21.9199 12.4008 21.9998 12.2048 21.9998 11.9998C21.9998 11.7958 21.9199 11.5998 21.7787 11.4548Z" fill="currentColor"></path>
                            </svg>
                        </i>
                        <span className="item-name">Sign Out</span>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className={`${location.pathname === '' ? 'active' : ''} nav-link`} to="#">
                        <i className="icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M22 11.9998C22 17.5238 17.523 21.9998 12 21.9998C6.477 21.9998 2 17.5238 2 11.9998C2 6.47776 6.477 1.99976 12 1.99976C17.523 1.99976 22 6.47776 22 11.9998Z" fill="currentColor"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.8701 12.6307C12.8701 13.1127 12.4771 13.5057 11.9951 13.5057C11.5131 13.5057 11.1201 13.1127 11.1201 12.6307V8.21069C11.1201 7.72869 11.5131 7.33569 11.9951 7.33569C12.4771 7.33569 12.8701 7.72869 12.8701 8.21069V12.6307ZM11.1251 15.8035C11.1251 15.3215 11.5161 14.9285 11.9951 14.9285C12.4881 14.9285 12.8801 15.3215 12.8801 15.8035C12.8801 16.2855 12.4881 16.6785 12.0051 16.6785C11.5201 16.6785 11.1251 16.2855 11.1251 15.8035Z" fill="currentColor"></path>
                            </svg>
                        </i>
                        <span className="item-name">Help</span>
                    </Link>
                </Nav.Item>
            </ul>
        </Fragment>
    )
})

Filemanagervarticalnav.displayName="Filemanagervarticalnav"
export default Filemanagervarticalnav