import { useState,memo,Fragment } from 'react'

//React-bootstrap
import {Image, Dropdown} from 'react-bootstrap'

//Router
import { Link } from 'react-router-dom'

//Components
import Card from '../../../../components/bootstrap/card'

// Fsloghtbox
import FsLightbox from 'fslightbox-react';

//Sweet alert
import Swal from "sweetalert2";

// Img
import img1 from '../../../../assets/modules/file-manager/images/8.png'
import img2 from '../../../../assets/modules/file-manager/images/7.png'
import img3 from '../../../../assets/modules/file-manager/images/2.png'
import img4 from '../../../../assets/modules/file-manager/images/1.png'
import img5 from '../../../../assets/modules/file-manager/images/6.png'
import img6 from '../../../../assets/modules/file-manager/images/5.png'
import img7 from '../../../../assets/modules/file-manager/images/4.png'


const Images = memo((props) => {

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
                toggler={imageController.toggler}
                sources={[img1, img2, img3, img4, img5, img6,img7,img1,img6,img5,img2,img1,img4,img3,img1,img7]}
                slide={imageController.slide}
            />
            <Card className="iq-file-manager">
                <Card.Body className="card-thumbnail">
                    <Link onClick={() => imageOnSlide(props.id)} to="#">
                        <Image src={props.imgChange} className="img-fluid" alt=""/>
                    </Link>
                    <div className="mt-2">
                        <p className="small mb-2">Created on {props.imageDate}</p>
                        <div className="d-flex align-items-center mb-2 text-primary gap-2">
                            <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M16.3328 22H7.66618C4.2769 22 2 19.6229 2 16.0843V7.91672C2 4.37811 4.2769 2 7.66618 2H16.3338C19.7231 2 22 4.37811 22 7.91672V16.0843C22 19.6229 19.7231 22 16.3328 22Z" fill="currentColor"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.2451 8.67496C11.2451 10.045 10.1301 11.16 8.7601 11.16C7.3891 11.16 6.2751 10.045 6.2751 8.67496C6.2751 7.30496 7.3891 6.18896 8.7601 6.18896C10.1301 6.18896 11.2451 7.30496 11.2451 8.67496ZM19.4005 14.0876C19.6335 14.3136 19.8005 14.5716 19.9105 14.8466C20.2435 15.6786 20.0705 16.6786 19.7145 17.5026C19.2925 18.4836 18.4845 19.2246 17.4665 19.5486C17.0145 19.6936 16.5405 19.7556 16.0675 19.7556H7.6865C6.8525 19.7556 6.1145 19.5616 5.5095 19.1976C5.1305 18.9696 5.0635 18.4446 5.3445 18.1026C5.8145 17.5326 6.2785 16.9606 6.7465 16.3836C7.6385 15.2796 8.2395 14.9596 8.9075 15.2406C9.1785 15.3566 9.4505 15.5316 9.7305 15.7156C10.4765 16.2096 11.5135 16.8876 12.8795 16.1516C13.8132 15.641 14.3552 14.7673 14.827 14.0069L14.8365 13.9916C14.8682 13.9407 14.8997 13.8898 14.9311 13.8391C15.0915 13.5799 15.2495 13.3246 15.4285 13.0896C15.6505 12.7986 16.4745 11.8886 17.5395 12.5366C18.2185 12.9446 18.7895 13.4966 19.4005 14.0876Z" fill="currentColor"></path>
                            </svg>
                            <p className=" mb-0 text-dark">Gallery-{props.imgName}.jpg</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <small>You opened <Link to="#">{props.imgLink}</Link></small>
                    {props.trash === 'true' &&
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
                </Card.Body>
            </Card>
        </Fragment>
    )
})

Images.displayName="Images"
export default Images