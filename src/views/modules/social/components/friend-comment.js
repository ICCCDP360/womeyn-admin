import React,{useState,memo,Fragment} from 'react'

//React-bootstrap
import {Image,Collapse} from 'react-bootstrap'

//Router
import {Link} from 'react-router-dom'

//Component
import Commentfromcontrol from './comment-from-control'

const Friendcomment = memo((props) => {
    const [open, setOpen] = useState(false);
    return (
        <Fragment>
            <div className="d-flex">
                <Image src={props.userImage} alt="userimg" className="avatar-50 rounded-circle me-3 img-fluid"/>
                <div className="w-100">
                    <h6 className="mb-1">{props.userName}</h6>
                    <p className="mb-1">{props.userComment}</p>
                    <div className="d-flex flex-wrap align-items-center gap-3">
                        <Link to="/" onClick={(e) => e.preventDefault() } >Like</Link>
                        <Link to="#"   onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>Reply</Link>
                        <span> {props.commentDuration} </span>
                    </div>
                    <Collapse in={open}>
                        <div>
                            <Commentfromcontrol placeholder="Enter Your Reply..."/>
                        </div>
                    </Collapse>
                </div>
            </div>
        </Fragment>
    )
})

Friendcomment.displayName="Friendcomment"
export default Friendcomment