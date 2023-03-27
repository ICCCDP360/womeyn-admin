import {useState,memo,Fragment} from 'react';

// React-bootstrap
import {Row,Col,Button,Modal} from 'react-bootstrap'

// React-dropzone
import Dropzone from "react-dropzone-uploader"
import 'react-dropzone-uploader/dist/styles.css'

//Img
import img1 from '../../../../assets/modules/file-manager/images/8.png'
import img2 from '../../../../assets/modules/file-manager/images/7.png'
import img3 from '../../../../assets/modules/file-manager/images/2.png'
import img4 from '../../../../assets/modules/file-manager/images/1.png'
import img5 from '../../../../assets/modules/file-manager/images/6.png'
import img6 from '../../../../assets/modules/file-manager/images/5.png'
import img7 from '../../../../assets/modules/file-manager/images/4.png'


//Components
import Images from "../components/images.js"

const Imagefolder = memo(() => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (files, allFiles) => {
        allFiles.forEach(f => f.remove());
    };

    return (
        
        <Fragment>
            <div className="border-bottom pb-3 d-flex align-items-center justify-content-between">
                <h5>Images</h5>
                <Button  onClick={handleShow}>
                    <span className="d-flex">
                        <svg width="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M16.3328 22H7.66618C4.2769 22 2 19.6229 2 16.0843V7.91672C2 4.37811 4.2769 2 7.66618 2H16.3338C19.7231 2 22 4.37811 22 7.91672V16.0843C22 19.6229 19.7231 22 16.3328 22Z" fill="currentColor"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.2451 8.67496C11.2451 10.045 10.1301 11.16 8.7601 11.16C7.3891 11.16 6.2751 10.045 6.2751 8.67496C6.2751 7.30496 7.3891 6.18896 8.7601 6.18896C10.1301 6.18896 11.2451 7.30496 11.2451 8.67496ZM19.4005 14.0876C19.6335 14.3136 19.8005 14.5716 19.9105 14.8466C20.2435 15.6786 20.0705 16.6786 19.7145 17.5026C19.2925 18.4836 18.4845 19.2246 17.4665 19.5486C17.0145 19.6936 16.5405 19.7556 16.0675 19.7556H7.6865C6.8525 19.7556 6.1145 19.5616 5.5095 19.1976C5.1305 18.9696 5.0635 18.4446 5.3445 18.1026C5.8145 17.5326 6.2785 16.9606 6.7465 16.3836C7.6385 15.2796 8.2395 14.9596 8.9075 15.2406C9.1785 15.3566 9.4505 15.5316 9.7305 15.7156C10.4765 16.2096 11.5135 16.8876 12.8795 16.1516C13.8132 15.641 14.3552 14.7673 14.827 14.0069L14.8365 13.9916C14.8682 13.9407 14.8997 13.8898 14.9311 13.8391C15.0915 13.5799 15.2495 13.3246 15.4285 13.0896C15.6505 12.7986 16.4745 11.8886 17.5395 12.5366C18.2185 12.9446 18.7895 13.4966 19.4005 14.0876Z" fill="currentColor"></path>
                        </svg>                            
                        <span className="ms-3 mb-0">Add Image</span>
                    </span>
                </Button>
            </div>
            <h4 className="py-3">Recently viewed</h4>
            <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4">
                <Col>
                    <Images imageDate="Dec 13, 2020" imgName="1234725783" imgLink="just now" imgChange={img1} id={1} />
                </Col>
                <Col>
                    <Images imageDate="Dec 13, 2020" imgName="25783" imgLink="2 day ago" imgChange={img2}  id={2} />
                </Col>
                <Col>
                    <Images imageDate="Dec 13, 2020" imgName="49895383" imgLink="a month ago" imgChange={img3} id={3} />
                </Col>
                <Col>
                    <Images imageDate="Dec 13, 2020" imgName="4509853" imgLink="2 day ago" imgChange={img4} id={4} />
                </Col>
                <Col>
                    <Images imageDate="Dec 13, 2020" imgName="280397557" imgLink="just now" imgChange={img5} id={5} />
                </Col>
                <Col>
                    <Images imageDate="Dec 13, 2020" imgName="76935783" imgLink="2 day ago" imgChange={img6} id={6} />
                </Col>
                <Col>
                    <Images imageDate="Dec 13, 2020" imgName="4725783" imgLink="a month ago" imgChange={img7} id={7} />
                </Col>
                <Col>
                    <Images imageDate="Dec 13, 2020" imgName="4725783" imgLink="2 day ago" imgChange={img1} id={8} />
                </Col>
            </Row>
            <h3 className="my-3">All Image</h3>
            <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4">
                <Col>
                    <Images imageDate="Dec 13, 2020" imgName="1234725783" imgLink="just now" imgChange={img6} id={9} />
                </Col>
                <Col>
                    <Images imageDate="Dec 13, 2020" imgName="25783" imgLink="2 day ago" imgChange={img5} id={10} />
                </Col>
                <Col>
                    <Images imageDate="Dec 13, 2020" imgName="49895383" imgLink="a month ago" imgChange={img2} id={11} />
                </Col>
                <Col>
                    <Images imageDate="Dec 13, 2020" imgName="4509853" imgLink="2 day ago" imgChange={img1} id={12} />
                </Col>
                <Col>
                    <Images imageDate="Dec 13, 2020" imgName="1234725783" imgLink="just now" imgChange={img4} id={13} />
                </Col>
                <Col>
                    <Images imageDate="Dec 13, 2020" imgName="25783" imgLink="2 day ago" imgChange={img3} id={14} />
                </Col>
                <Col>
                    <Images imageDate="Dec 13, 2020" imgName="49895383" imgLink="a month ago" imgChange={img1} id={15} />
                </Col>
                <Col>
                    <Images imageDate="Dec 13, 2020" imgName="4509853" imgLink="2 day ago" imgChange={img7} id={16} />
                </Col>
            </Row>  
            <Modal className="fade file-manager-modal" show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body className="text-center">
                    <Dropzone
                        inputContent={"Drop files here or browse files"}
                        inputWithFilesContent={"Add more"}
                        submitButtonContent={"Save"}
                        onSubmit={handleSubmit}
                        
                    />
                </Modal.Body>
            </Modal>
        </Fragment>
    )
})

Imagefolder.displayName="DocumentFolder"
export default Imagefolder
