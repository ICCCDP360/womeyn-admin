import { memo, Fragment } from "react";

//React-bootstrap
import { Modal, Image, Form, Button } from "react-bootstrap";

//Img
import img from "../../../../../assets/modules/chat/images/avatar/01.png";
import img1 from "../../../../../assets/modules/chat/images/avatar/03.png";
import img2 from "../../../../../assets/modules/chat/images/avatar/04.png";
import img3 from "../../../../../assets/modules/chat/images/avatar/06.png";
import img4 from "../../../../../assets/modules/chat/images/avatar/12.png";

const ModalContact = memo((props) => {
  return (
    <Fragment>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contacts list</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="nav">
            <div className="form-group input-group search-input w-100">
              <Form.Control type="search" placeholder="Search" />
              <span className="input-group-text">
                <svg
                  className="icon-24"
                  width="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="11.7669"
                    cy="11.7666"
                    r="8.98856"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>
                  <path
                    d="M18.0186 18.4851L21.5426 22"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          <h5 className="mb-0">A</h5>
          <div>
            <div className="d-flex justify-content-between align-items-center my-3 ">
              <div className="d-flex align-items-center gap-3">
                <Image
                  src={img1}
                  alt="chat-user"
                  className="avatar-50 rounded-pill"
                  loading="lazy"
                />
                <h6 className="mb-0">Anna Sthesia</h6>
              </div>
              <Button>UnBlock</Button>
            </div>
            <div className="d-flex justify-content-between align-items-center my-3 ">
              <div className="d-flex align-items-center gap-3">
                <Image
                  src={img}
                  alt="chat-user"
                  className="avatar-50 rounded-pill"
                  loading="lazy"
                />
                <h6 className="mb-0">Ashutosh Turner</h6>
              </div>
              <Button variant="outline-primary">Block</Button>
            </div>
            <div className="d-flex justify-content-between align-items-center my-3 ">
              <div className="d-flex align-items-center gap-3">
                <Image
                  src={img2}
                  alt="chat-user"
                  className="avatar-50 rounded-pill"
                  loading="lazy"
                />
                <h6 className="mb-0">Andrew Tye</h6>
              </div>
              <Button variant="outline-primary">Block</Button>
            </div>
            <div className="d-flex justify-content-between align-items-center my-3 ">
              <div className="d-flex align-items-center gap-3">
                <Image
                  src={img3}
                  alt="chat-user"
                  className="avatar-50 rounded-pill"
                  loading="lazy"
                />
                <h6 className="mb-0">Aaron Finch</h6>
              </div>
              <Button variant="outline-primary">Block</Button>
            </div>
            <div className="d-flex justify-content-between align-items-center my-3 ">
              <div className="d-flex align-items-center gap-3">
                <Image
                  src={img4}
                  alt="chat-user"
                  className="avatar-50 rounded-pill"
                  loading="lazy"
                />
                <h6 className="mb-0">AB de Villiers</h6>
              </div>
              <Button variant="outline-primary">Block</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
});

export default ModalContact;
