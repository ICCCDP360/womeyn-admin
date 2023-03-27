import {memo,Fragment} from 'react'

//Router
import {Link} from 'react-router-dom'

const Userlist = memo((props) => {
    return (
        <Fragment>
            <li onClick={props.onclick} className={`${props.className}  iq-chat-list nav-item`}>
                <Link to="#" className={` px-0 d-flex gap-3 ${props.className} nav-link`} >
                    <div className="position-relative">
                        <img src={props.userProfileImg} alt="status-1" className="avatar-50 rounded-pill" loading="lazy" />
                        <div className={`iq-profile-badge ${props.status === 'online' ? 'bg-success' : 'bg-danger'}`}></div>
                    </div>
                    <div className="d-flex align-items-center w-100 iq-userlist-data">
                        <div className="d-flex flex-grow-1 flex-column">
                            <div className="d-flex align-items-center gap-1">
                                <p className="mb-0 text-ellipsis short-1 flex-grow-1 iq-userlist-name">{props.userName}</p>
                                <small className="text-capitalize">{props.lastMessage}</small>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <small className="text-ellipsis short-1 flex-grow-1">{props.userMessage}</small>
                                {
                                    props.unreadMessage === `${props.unreadMessage}` &&
                                    <span className="badge rounded-pill bg-warning">{props.unreadMessage}</span>
                                }
                            </div>
                        </div>
                    </div>
                </Link>
            </li>
        </Fragment>
    )
})

Userlist.displayName="Userlist"
export default Userlist