import { memo, Fragment } from "react";

//React-bootstrap
import { Modal, Row, Col, Button, Form, Image } from "react-bootstrap";

//Img
import img from "../../../../../assets/modules/chat/images/avatar/01.png";
import img1 from "../../../../../assets/modules/chat/images/avatar/03.png";
import img2 from "../../../../../assets/modules/chat/images/avatar/04.png";
import img3 from "../../../../../assets/modules/chat/images/avatar/05.png";
import img4 from "../../../../../assets/modules/chat/images/avatar/06.png";
import img5 from "../../../../../assets/modules/chat/images/avatar/08.png";
import img6 from "../../../../../assets/modules/chat/images/avatar/09.png";
import img7 from "../../../../../assets/modules/chat/images/avatar/11.png";
import img8 from "../../../../../assets/modules/chat/images/avatar/12.png";

const Modalgroup = memo((props) => {
  return (
    <Fragment>
      <Modal show={props.show} onHide={props.handleclose}>
        <Modal.Header closeButton>
          <Modal.Title>Add to Group</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col lg="12">
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
              <h4>People</h4>
              <div className="form-check p-0">
                <div className="d-flex justify-content-between align-items-center my-3 ">
                  <Form.Check.Label
                    className="d-flex align-items-center gap-3"
                    htmlFor="group-people-01"
                  >
                    <Image
                      src={img}
                      alt="chat-user"
                      className="avatar-50 rounded-pill"
                      loading="lazy"
                    />
                    <span className="d-flex flex-column">
                      <span className="h6 mb-0">Ellyse Perry</span>
                      <span className="mb-0 text-lowercase">
                        Ellyse@gmail.com
                      </span>
                    </span>
                  </Form.Check.Label>
                  <div className="mb-3 form-check">
                    <Form.Check.Input type="checkbox" id="group-people-01" />
                  </div>
                </div>
              </div>
              <div className="form-check p-0">
                <div className="d-flex justify-content-between align-items-center my-3 ">
                  <Form.Check.Label
                    className="d-flex align-items-center gap-3"
                    htmlFor="group-people-02"
                  >
                    <Image
                      src={img1}
                      alt="chat-user"
                      className="avatar-50 rounded-pill"
                      loading="lazy"
                    />
                    <span className="d-flex flex-column">
                      <span className="h6 mb-0">Faf Du Plessis</span>
                      <span className="mb-0 text-lowercase">
                        Plessis@gmail.com
                      </span>
                    </span>
                  </Form.Check.Label>
                  <div className="mb-3 form-check">
                    <Form.Check.Input type="checkbox" id="group-people-02" />
                  </div>
                </div>
              </div>
              <div className="form-check p-0">
                <div className="d-flex justify-content-between align-items-center my-3 ">
                  <Form.Check.Label
                    className="d-flex align-items-center gap-3"
                    htmlFor="group-people-03"
                  >
                    <Image
                      src={img2}
                      alt="chat-user"
                      className="avatar-50 rounded-pill"
                      loading="lazy"
                    />
                    <span className="d-flex flex-column">
                      <span className="h6 mb-0">Brendon McCullum</span>
                      <span className="mb-0 text-lowercase">
                        McCullum@gmail.com
                      </span>
                    </span>
                  </Form.Check.Label>
                  <div className="mb-3 form-check">
                    <Form.Check.Input type="checkbox" id="group-people-03" />
                  </div>
                </div>
              </div>
              <div className="form-check p-0">
                <div className="d-flex justify-content-between align-items-center my-3 ">
                  <Form.Check.Label
                    className="d-flex align-items-center gap-3"
                    htmlFor="group-people-04"
                  >
                    <Image
                      src={img3}
                      alt="chat-user"
                      className="avatar-50 rounded-pill"
                      loading="lazy"
                    />
                    <span className="d-flex flex-column">
                      <span className="h6 mb-0">Wade Johnson</span>
                      <span className="mb-0 text-lowercase">
                        Johnson@gmail.com
                      </span>
                    </span>
                  </Form.Check.Label>
                  <div className="mb-3 form-check">
                    <Form.Check.Input type="checkbox" id="group-people-04" />
                  </div>
                </div>
              </div>
              <div className="form-check p-0">
                <div className="d-flex justify-content-between align-items-center my-3 ">
                  <Form.Check.Label
                    className="d-flex align-items-center gap-3"
                    htmlFor="group-people-05"
                  >
                    <Image
                      src={img8}
                      alt="chat-user"
                      className="avatar-50 rounded-pill"
                      loading="lazy"
                    />
                    <span className="d-flex flex-column">
                      <span className="h6 mb-0">Arlene Cyrus</span>
                      <span className="mb-0 text-lowercase">
                        Arlene@gmail.com
                      </span>
                    </span>
                  </Form.Check.Label>
                  <div className="mb-3 form-check">
                    <Form.Check.Input type="checkbox" id="group-people-05" />
                  </div>
                </div>
              </div>
              <div className="form-check p-0">
                <div className="d-flex justify-content-between align-items-center my-3 ">
                  <Form.Check.Label
                    className="d-flex align-items-center gap-3"
                    htmlFor="group-people-06"
                  >
                    <Image
                      src={img5}
                      alt="chat-user"
                      className="avatar-50 rounded-pill"
                      loading="lazy"
                    />
                    <span className="d-flex flex-column">
                      <span className="h6 mb-0">Darlene Warner</span>
                      <span className="mb-0 text-lowercase">
                        Darlene@gmail.com
                      </span>
                    </span>
                  </Form.Check.Label>
                  <div className="mb-3 form-check">
                    <Form.Check.Input type="checkbox" id="group-people-06" />
                  </div>
                </div>
              </div>
              <div className="form-check p-0">
                <div className="d-flex justify-content-between align-items-center my-3 ">
                  <Form.Check.Label
                    className="d-flex align-items-center gap-3"
                    htmlFor="group-people-07"
                  >
                    <Image
                      src={img6}
                      alt="chat-user"
                      className="avatar-50 rounded-pill"
                      loading="lazy"
                    />
                    <span className="d-flex flex-column">
                      <span className="h6 mb-0">Jenny Wilson</span>
                      <span className="mb-0 text-lowercase">
                        Jenny@gmail.com
                      </span>
                    </span>
                  </Form.Check.Label>
                  <div className="mb-3 form-check">
                    <Form.Check.Input type="checkbox" id="group-people-07" />
                  </div>
                </div>
              </div>
              <div className="form-check p-0">
                <div className="d-flex justify-content-between align-items-center my-3 ">
                  <Form.Check.Label
                    className="d-flex align-items-center gap-3"
                    htmlFor="group-people-08"
                  >
                    <Image
                      src={img7}
                      alt="chat-user"
                      className="avatar-50 rounded-pill"
                      loading="lazy"
                    />
                    <span className="d-flex flex-column">
                      <span className="h6 mb-0">Devon Lane</span>
                      <span className="mb-0 text-lowercase">
                        DevonLane@gmail.com
                      </span>
                    </span>
                  </Form.Check.Label>
                  <div className="mb-3 form-check">
                    <Form.Check.Input type="checkbox" id="group-people-08" />
                  </div>
                </div>
              </div>
              <div className="form-check p-0">
                <div className="d-flex justify-content-between align-items-center my-3 ">
                  <Form.Check.Label
                    className="d-flex align-items-center gap-3"
                    htmlFor="group-people-09"
                  >
                    <Image
                      src={img4}
                      alt="chat-user"
                      className="avatar-50 rounded-pill"
                      loading="lazy"
                    />
                    <span className="d-flex flex-column">
                      <span className="mb-0 h6">Christopher</span>
                      <span className="mb-0 text-lowercase">
                        Christopher@gmail.com
                      </span>
                    </span>
                  </Form.Check.Label>
                  <div className="mb-3 form-check">
                    <Form.Check.Input type="checkbox" id="group-people-09" />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="12" className=" text-center">
              <div className="border-top pt-3">
                <Button onClick={props.handleclose}>Done</Button>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
});

export default Modalgroup;
