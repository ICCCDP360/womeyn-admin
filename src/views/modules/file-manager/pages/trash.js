import {memo,Fragment} from 'react'

// React-bootstrap
import {Row, Col,Button} from 'react-bootstrap'

//Componet
import Document from "../components/document.js"
import Images from "../components/images.js"
import Video from "../components/video.js"

//Sweet alert
import Swal from "sweetalert2";

//Img
import img1 from '../../../../assets/modules/file-manager/images/5.png'
import img2 from '../../../../assets/modules/file-manager/images/6.png'
import img3 from '../../../../assets/modules/file-manager/images/7.png'
import img4 from '../../../../assets/modules/file-manager/images/8.png'
import pdf  from '../../../../assets/modules/file-manager/images/pdf.svg'
import excel  from '../../../../assets/modules/file-manager/images/excel.svg'
import word  from '../../../../assets/modules/file-manager/images/word.svg'

const Trash = memo(() => {
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
  return (
    <Fragment>
        <div className="border-bottom pb-3 d-flex align-items-center justify-content-between ">
            <h5>Trash</h5>
            <Button variant="primary restore-btn" type="submit" onClick={Sweetalert}>
                <div className="d-flex justify-content-center ">   
                    <svg width="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M19.643 9.48851C19.643 9.5565 19.11 16.2973 18.8056 19.1342C18.615 20.8751 17.4927 21.9311 15.8092 21.9611C14.5157 21.9901 13.2494 22.0001 12.0036 22.0001C10.6809 22.0001 9.38741 21.9901 8.13185 21.9611C6.50477 21.9221 5.38147 20.8451 5.20057 19.1342C4.88741 16.2873 4.36418 9.5565 4.35445 9.48851C4.34473 9.28351 4.41086 9.08852 4.54507 8.93053C4.67734 8.78453 4.86796 8.69653 5.06831 8.69653H18.9388C19.1382 8.69653 19.3191 8.78453 19.4621 8.93053C19.5953 9.08852 19.6624 9.28351 19.643 9.48851Z" fill="currentColor"></path>
                    <path d="M21 5.97686C21 5.56588 20.6761 5.24389 20.2871 5.24389H17.3714C16.7781 5.24389 16.2627 4.8219 16.1304 4.22692L15.967 3.49795C15.7385 2.61698 14.9498 2 14.0647 2H9.93624C9.0415 2 8.26054 2.61698 8.02323 3.54595L7.87054 4.22792C7.7373 4.8219 7.22185 5.24389 6.62957 5.24389H3.71385C3.32386 5.24389 3 5.56588 3 5.97686V6.35685C3 6.75783 3.32386 7.08982 3.71385 7.08982H20.2871C20.6761 7.08982 21 6.75783 21 6.35685V5.97686Z" fill="currentColor"></path>
                    </svg>
                    <p className="ms-3 mb-0">Restore All</p>
                </div>
            </Button>
        </div>
        <h4 className="py-3 mb-0">Documents</h4>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4">
            <Col>
                <Document imageDate="Dec 13, 2020" media="pdf" trash="true"  imgName="Doc-123472578.pdf" imgLink="just now" imgChange={pdf} imgMb="5mb" docType="PDF" docName="demo.pdf"></Document>
            </Col>
            <Col>
                <Document imageDate="Dec 13, 2020" media="xlxs"  trash="true"  imgName="Doc-25783.xlsx" imgLink="2 days ago" imgChange={excel} imgMb="2mb" docType="XLSX" docName="demo.xlsx"></Document>
            </Col>
            <Col>
                <Document imageDate="Dec 13, 2020" media="word" trash="true"  imgName="abc-25783.doc" imgLink="a month ago" imgChange={word} imgMb="7mb" docType="DOCX" docName="demo.docx"></Document>
            </Col>
            <Col>
                <Document imageDate="Dec 13, 2020" media="xlxs" trash="true"   imgName="xyz-25783.xlsx" imgLink="2 days ago" imgChange={excel} imgMb="12mb" docType="XLSX" docName="demo.xlsx"></Document>
            </Col>
        </Row> 
        <h3 className="my-3">Image</h3>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4">
            <Col>
                <Images imageDate="Dec 13, 2020" trash="true"  imgName="1234725783"  dropdown="true"  imgLink="just now" imgChange={img1} id={6}></Images>
            </Col>
            <Col>
                <Images imageDate="Dec 13, 2020" trash="true"  imgName="25783"  dropdown="true"  imgLink="2 day ago" imgChange={img2} id={5}></Images>
            </Col>
            <Col>
                <Images imageDate="Dec 13, 2020" trash="true" imgName="49895383"  dropdown="true"  imgLink="a month ago" imgChange={img3} id={2}></Images>
            </Col>
            <Col>
                <Images imageDate="Dec 13, 2020" trash="true" imgName="4509853"  dropdown="true"  imgLink="2 day ago" imgChange={img4} id={1}></Images>
            </Col>
        </Row>
        <h3 className="my-3">Videos</h3>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4">
            <Col>
                <Video imageDate="Dec 13, 2020"  dropdown="true" imgName="1234725783.mp4" imgLink="just now" imgChange={img1} id={6}></Video>
            </Col>
            <Col>
                <Video imageDate="Dec 13, 2020" dropdown="true" imgName="25783.mkv" imgLink="2 day ago" imgChange={img2} id={5}></Video>
            </Col>
            <Col>
                <Video imageDate="Dec 13, 2020" dropdown="true" imgName="25783.mkv" imgLink="a month ago" imgChange={img3} id={2}></Video>
            </Col>
            <Col>
                <Video imageDate="Dec 13, 2020" dropdown="true" imgName="25783.mkv" imgLink="2 day ago" imgChange={img4} id={1}></Video>
            </Col>
        </Row>
    </Fragment>
  )
})

Trash.displayName="Trash"
export default Trash