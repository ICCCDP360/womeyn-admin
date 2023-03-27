import {useState,memo,Fragment} from 'react'

// React-boostrap
import {Row,Col,Button,Modal} from 'react-bootstrap' 


// React-dropzone
import Dropzone from "react-dropzone-uploader"
import 'react-dropzone-uploader/dist/styles.css'


// Img
import img1 from '../../../../assets/modules/file-manager/images/pdf.svg'
import img2 from '../../../../assets/modules/file-manager/images/excel.svg'
import img3 from '../../../../assets/modules/file-manager/images/word.svg'

// Components
import Document from "../components/document.js"

const DocumentFolder = memo(() => { 

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (files, allFiles) => {
        allFiles.forEach(f => f.remove());
    };

    return(
        <Fragment>
            <div className="border-bottom pb-3 d-flex align-items-center justify-content-between">
            <h5>Document</h5>
            <Button  >
                <span className="d-flex justify-content-center " onClick={handleShow}>   
                    <svg width="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83V17.16C3 20.26 4.77 22 7.81 22H16.191C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2Z" fill="currentColor"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.07996 6.6499V6.6599C7.64896 6.6599 7.29996 7.0099 7.29996 7.4399C7.29996 7.8699 7.64896 8.2199 8.07996 8.2199H11.069C11.5 8.2199 11.85 7.8699 11.85 7.4289C11.85 6.9999 11.5 6.6499 11.069 6.6499H8.07996ZM15.92 12.7399H8.07996C7.64896 12.7399 7.29996 12.3899 7.29996 11.9599C7.29996 11.5299 7.64896 11.1789 8.07996 11.1789H15.92C16.35 11.1789 16.7 11.5299 16.7 11.9599C16.7 12.3899 16.35 12.7399 15.92 12.7399ZM15.92 17.3099H8.07996C7.77996 17.3499 7.48996 17.1999 7.32996 16.9499C7.16996 16.6899 7.16996 16.3599 7.32996 16.1099C7.48996 15.8499 7.77996 15.7099 8.07996 15.7399H15.92C16.319 15.7799 16.62 16.1199 16.62 16.5299C16.62 16.9289 16.319 17.2699 15.92 17.3099Z" fill="currentColor"></path>
                    </svg>    
                    <span className="ms-3 mb-0">Add Document</span>
                </span>
            </Button>
            </div>
            <h4 className="py-3">Recently viewed</h4>
            <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4">
                <Col>
                    <Document  imageDate="Dec 13, 2020" media="pdf" imgName="Doc-123472578.pdf" imgLink="just now" imgChange={img1} imgMb="5mb" docType="PDF" docName="demo.pdf"/>
                </Col>
                <Col>
                    <Document imageDate="Dec 13, 2020" media="xlxs" imgName="Doc-25783.xlsx" imgLink="2 days ago" imgChange={img2} imgMb="2mb" docType="XLSX" docName="demo.xlsx"/>
                </Col>
                <Col>
                    <Document imageDate="Dec 13, 2020" media="word" imgName="abc-25783.doc" imgLink="a month ago" imgChange={img3} imgMb="7mb" docType="DOCX" docName="demo.docx"/>
                </Col>
                <Col>
                    <Document imageDate="Dec 13, 2020" media="xlxs" imgName="xyz-25783.xlsx" imgLink="2 days ago" imgChange={img2} imgMb="12mb" docType="XLSX" docName="demo.xlsx"/>
                </Col>
                <Col>
                    <Document imageDate="Dec 13, 2020" media="word" imgName="abd-25783.doc" imgLink="a month ago" imgChange={img3} imgMb="10mb" docType="DOCX" docName="demo.docx"/>
                </Col>
                <Col>
                    <Document imageDate="Dec 13, 2020" media="pdf" imgName="abc-123472578.pdf" imgLink="just now" imgChange={img1} imgMb="58kb" docType="PDF" docName="demo.pdf"/>
                </Col>
                <Col>
                    <Document imageDate="Dec 13, 2020" media="xlxs" imgName="list-25783.xlsx" imgLink="2 days ago" imgChange={img2} imgMb="2mb" docType="XLSX" docName="demo.xlsx"/>
                </Col>
                <Col>
                    <Document imageDate="Dec 13, 2020" media="pdf" imgName="Themes-123472578.pdf" imgLink="just now" imgChange={img1} imgMb="15mb" docType="PDF" docName="demo.pdf"/>
                </Col>
            </Row> 
            <h3 className="my-3">All Documents</h3>
            <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4">
                <Col>
                    <Document imageDate="Dec 13, 2020" media="xlxs" imgName="Students-25783.xlsx" imgLink="just now" imgChange={img2} imgMb="12mb" docType="XLSX" docName="demo.xlsx"/>
                </Col>
                <Col>
                    <Document imageDate="Dec 13, 2020" media="word" imgName="Projects-25783.doc" imgLink="2 days ago" imgChange={img3} imgMb="14mb" docType="DOCX" docName="demo.docx"/>
                </Col>
                <Col>
                    <Document imageDate="Dec 13, 2020" media="pdf" imgName="Certifacte-25783.pdf" imgLink="a month ago" imgChange={img1} imgMb="24mb" docType="PDF" docName="demo.pdf"/>
                </Col>
                <Col>
                    <Document imageDate="Dec 13, 2020" media="word" imgName="CV-25783.doc" imgLink="2 days ago" imgChange={img3} imgMb="2mb" docType="DOCX" docName="demo.docx"/>
                </Col>
                <Col>
                    <Document imageDate="Dec 13, 2020" media="word" imgName="Portfolio-25783.doc" imgLink="a month ago" imgChange={img3} imgMb="18mb" docType="DOCX" docName="demo.docx"/>
                </Col>
                <Col>
                    <Document imageDate="Dec 13, 2020" media="xlxs" imgName="Posts list-25783.xlsx" imgLink="just now" imgChange={img2} imgMb="5mb" docType="XLSX" docName="demo.xlsx"/>
                </Col>
                <Col>
                    <Document imageDate="Dec 13, 2020" media="word" imgName="abc-25783.doc" imgLink="2 days ago" imgChange={img3} imgMb="20mb" docType="DOCX" docName="demo.docx"/>
                </Col>
                <Col>
                    <Document imageDate="Dec 13, 2020"  media="pdf" imgName="doc-25783.pdf" imgLink="just now" imgChange={img1} imgMb="8mb" docType="PDF" docName="demo.pdf"/>
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
                        style={{'min-height': '500px '}}
                    />
                </Modal.Body>
            </Modal>
        </Fragment>
    )
})

DocumentFolder.displayName="DocumentFolder"
export default DocumentFolder
