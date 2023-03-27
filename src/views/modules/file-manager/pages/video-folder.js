import {useState,memo,Fragment} from 'react'

// React-boostrap
import {Row,Col,Button,Modal} from 'react-bootstrap'

// React-bootstrap
import Dropzone from "react-dropzone-uploader"
import 'react-dropzone-uploader/dist/styles.css'

//Components
import Video from "../components/video.js"

//Img
import img1 from '../../../../assets/modules/file-manager/images/8.png'
import img2 from '../../../../assets/modules/file-manager/images/7.png'
import img3 from '../../../../assets/modules/file-manager/images/2.png'
import img4 from '../../../../assets/modules/file-manager/images/1.png'
import img5 from '../../../../assets/modules/file-manager/images/6.png'
import img6 from '../../../../assets/modules/file-manager/images/5.png'
import img7 from '../../../../assets/modules/file-manager/images/4.png'


const Videofolder = memo(() => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (files, allFiles) => {
        allFiles.forEach(f => f.remove());
    };

    return (
        <Fragment>
            <div className="border-bottom pb-3 d-flex align-items-center justify-content-between">
                <h5>Videos</h5>
                <Button  onClick={handleShow}>
                    <span className="d-flex justify-content-center">   
                        <svg width="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M21.3309 7.44251C20.9119 7.17855 20.3969 7.1552 19.9579 7.37855L18.4759 8.12677C17.9279 8.40291 17.5879 8.96129 17.5879 9.58261V15.4161C17.5879 16.0374 17.9279 16.5948 18.4759 16.873L19.9569 17.6202C20.1579 17.7237 20.3729 17.7735 20.5879 17.7735C20.8459 17.7735 21.1019 17.7004 21.3309 17.5572C21.7499 17.2943 21.9999 16.8384 21.9999 16.339V8.66179C21.9999 8.1623 21.7499 7.70646 21.3309 7.44251Z" fill="currentColor"></path>
                            <path d="M11.9051 20H6.11304C3.69102 20 2 18.3299 2 15.9391V9.06091C2 6.66904 3.69102 5 6.11304 5H11.9051C14.3271 5 16.0181 6.66904 16.0181 9.06091V15.9391C16.0181 18.3299 14.3271 20 11.9051 20Z" fill="currentColor"></path>
                        </svg>
                        <span className="ms-3 mb-0"> Add Video</span>
                    </span>
                </Button>
            </div>
            <h4 className="py-3">Recently viewed</h4>
            <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4">
                <Col>
                    <Video imageDate="Dec 13, 2020" imgName="1234725783.mp4" imgLink="just now" imgChange={img1} id={1}/>
                </Col> 
                <Col>
                    <Video imageDate="Dec 13, 2020" imgName="25783.mkv" imgLink="2 day ago" imgChange={img2} id={2}/>
                </Col>
                <Col>
                    <Video imageDate="Dec 13, 2020" imgName="25783.mkv" imgLink="a month ago" imgChange={img3} id={3}/>
                </Col>
                <Col>
                    <Video imageDate="Dec 13, 2020" imgName="49895383.jpg" imgLink="a month ago" imgChange={img4} id={4}/>
                </Col>
                <Col>
                    <Video imageDate="Dec 13, 2020" imgName="25767483.mkv" imgLink="just now" imgChange={img5} id={5}/>
                </Col>
                <Col>
                    <Video imageDate="Dec 13, 2020" imgName="123472578.mp4" imgLink="2 day ago" imgChange={img6} id={6}/>
                </Col>
                <Col>
                    <Video imageDate="Dec 13, 2020" imgName="2598783.mkv" imgLink="a month ago" imgChange={img7} id={7}/>
                </Col>
                <Col>
                    <Video imageDate="Dec 13, 2020" imgName="Video-25783.mkv" imgLink="2 day ago" imgChange={img1} id={8}/>
                </Col>
            </Row>
            <h3 className="my-3">All Videos</h3>
            <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4">
                <Col>
                    <Video imageDate="Dec 13, 2020" imgName="1234725783.mp4" imgLink="just now" imgChange={img6} id={9}/>
                </Col>
                <Col>
                    <Video imageDate="Dec 13, 2020" imgName="25783.mkv" imgLink="2 day ago" imgChange={img5} id={10}/>
                </Col>
                <Col>
                    <Video imageDate="Dec 13, 2020" imgName="25783.mkv" imgLink="a month ago" imgChange={img2} id={11}/>
                </Col>
                <Col>
                    <Video imageDate="Dec 13, 2020" imgName="25783.mkv" imgLink="2 day ago" imgChange={img1} id={12}/>
                </Col>
                <Col>
                    <Video imageDate="Dec 13, 2020" imgName="1234725783.mp4" imgLink="just now" imgChange={img4} id={13}/>
                </Col>
                <Col>
                    <Video imageDate="Dec 13, 2020" imgName="25783.mkv" imgLink="2 day ago" imgChange={img3} id={14}/>
                </Col>
                <Col>
                    <Video imageDate="Dec 13, 2020" imgName="25783.mkv" imgLink="a month ago" imgChange={img1} id={15}/>
                </Col>
                <Col>
                    <Video imageDate="Dec 13, 2020" imgName="25783.mkv" imgLink="2 day ago" imgChange={img7} id={16}/>
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
                        style={{'min-height': '500px'}}
                    />
                </Modal.Body>
            </Modal>
        </Fragment>
    )
})

Videofolder.displayName="Videofolder"
export default Videofolder
