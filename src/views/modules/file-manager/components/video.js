import { useState,memo,Fragment } from 'react';

//React-bootstrap
import {Image, Dropdown} from 'react-bootstrap'

//Router
import { Link } from 'react-router-dom'

//Components
import Card from '../../../../components/bootstrap/card'

//Sweet alert
import Swal from "sweetalert2";

//Pulgin
import FsLightbox from 'fslightbox-react';

//Video
import video1 from '../../../../assets/images/video1.mp4'
import video2 from '../../../../assets/images/video2.mp4'
import video3 from '../../../../assets/images/video3.mp4'

const Video = memo((props) => {
    const [ videoController, setvideoController] = useState({
        toggler: false,
        slide: 1
    });
    
    function videoOnSlide(number) {
        setvideoController({
        toggler: !videoController.toggler,
        slide: number
        }); 
    }
    function Sweetalert() {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: 'You want to restore this item',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Restore!',
                'Your item has been restore.',
                'success'
              )
            }
          })          
    }
    function Sweetalert1() {
        Swal.fire({
            icon: 'error',
            title: 'Are you sure?',
            text: 'You want to delete this item',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })          
    }
    return (
        <Fragment>
            <FsLightbox
                toggler={videoController.toggler}
                sources={[video1, video2, video3,video1, video2, video3,video1, video2, video3,video1, video2, video3,video1, video2, video3,video1]}
                slide={videoController.slide}
            />
            <Card className=" iq-file-manager">
                <Card.Body className="card-thumbnail">
                    <div className="position-relative iq-video-hover">
                        <Link onClick={() => videoOnSlide(props.id)} to="#">  
                            <Image src={props.imgChange} className="img-fluid" alt=""/>
                            <div className="iq-btn-video btn btn-white text-primary rounded-pill btn-icon position-absolute">
                                <span className="text-white">
                                    <svg viewBox="0 0 44 44" fill="none" width="24" height="35" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.8817 9.20912C14.5492 8.3891 12.8335 9.3478 12.8335 10.9124V33.0875C12.8335 34.6522 14.5492 35.6109 15.8817 34.7908L33.8989 23.7033C35.168 22.9223 35.168 21.0776 33.8989 20.2967L15.8817 9.20912Z" fill="currentColor"></path>
                                    </svg>
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className="mt-3">
                        <p className="small mb-2 text-muted">Created on {props.imageDate}</p>
                        <div className="d-flex align-items-center mb-2 text-primary gap-2">
                            <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4" d="M21.3309 7.44251C20.9119 7.17855 20.3969 7.1552 19.9579 7.37855L18.4759 8.12677C17.9279 8.40291 17.5879 8.96129 17.5879 9.58261V15.4161C17.5879 16.0374 17.9279 16.5948 18.4759 16.873L19.9569 17.6202C20.1579 17.7237 20.3729 17.7735 20.5879 17.7735C20.8459 17.7735 21.1019 17.7004 21.3309 17.5572C21.7499 17.2943 21.9999 16.8384 21.9999 16.339V8.66179C21.9999 8.1623 21.7499 7.70646 21.3309 7.44251Z" fill="currentColor"></path>
                                    <path d="M11.9051 20H6.11304C3.69102 20 2 18.3299 2 15.9391V9.06091C2 6.66904 3.69102 5 6.11304 5H11.9051C14.3271 5 16.0181 6.66904 16.0181 9.06091V15.9391C16.0181 18.3299 14.3271 20 11.9051 20Z" fill="currentColor"></path>
                                </svg>
                            <h6 className="ms-2 mb-0">Video-{props.imgName}</h6>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">You opened <Link to="#">{props.imgLink}</Link></small>
                            {props.dropdown === 'true' &&
                        <Dropdown >
                            <Dropdown.Toggle as='svg' height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <circle cx="2.5" cy="3" r="2.5" fill="currentcolor"></circle>
                            <circle cx="2.5" cy="10" r="2.5" fill="currentcolor"></circle>
                            <circle cx="2.5" cy="17" r="2.5" fill="currentcolor"></circle>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <li><Dropdown.Item   className="dropdown-item delete-btn" onClick={Sweetalert1}>Delete</Dropdown.Item></li>
                            <li><Dropdown.Item  className="dropdown-item restore-btn"onClick={Sweetalert} >Restore</Dropdown.Item></li>
                            </Dropdown.Menu>
                        </Dropdown>
                    }
                        </div> 
                        
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
})

Video.displayName="Video"
export default Video