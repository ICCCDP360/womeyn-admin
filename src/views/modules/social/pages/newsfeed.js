import React, { useState, memo, Fragment } from "react";

// React-bootstrap
import {
  Row,
  Col,
  Image,
  Dropdown,
  Form,
  Button,
  Modal,
  Tab,
  Nav,
} from "react-bootstrap";

// Router
import { Link } from "react-router-dom";

// FsLightbox
import FsLightbox from "fslightbox-react";

//Components
import Card from "../../../../components/bootstrap/card";
import CustomToggle from "../../../../components/dropdowns";
import Imagemodal from "../components/image-modal";
import Likeshare from "../components/like-share";
import Friendcomment from "../components/friend-comment";
import Commentfromcontrol from "../components/comment-from-control";
import Postheadermodal from "../components/postheadermodal";
import Stories from "../../../../components/stories";

//Img
import img1 from "../../../../assets/modules/social/images/avatar/31.png";
import img2 from "../../../../assets/modules/social/images/avatar/01.png";
import img3 from "../../../../assets/modules/social/images/newsfeed/06.png";
import img4 from "../../../../assets/modules/social/images/avatar/09.png";
import img5 from "../../../../assets/modules/social/images/avatar/22.png";
import img6 from "../../../../assets/modules/social/images/avatar/15.png";
import img7 from "../../../../assets/modules/social/images/newsfeed/05.png";
import img8 from "../../../../assets/modules/social/images/avatar/23.png";
import img9 from "../../../../assets/modules/social/images/avatar/26.png";
import img10 from "../../../../assets/modules/social/images/newsfeed/07.png";
import img11 from "../../../../assets/modules/social/images/newsfeed/03.png";
import img12 from "../../../../assets/modules/social/images/newsfeed/11.png";
import img13 from "../../../../assets/modules/social/images/newsfeed/04.png";
import img14 from "../../../../assets/modules/social/images/newsfeed/09.png";
import img15 from "../../../../assets/modules/social/images/newsfeed/10.png";
import img20 from "../../../../assets/modules/social/images/newsfeed/02.png";
import img27 from "../../../../assets/modules/social/images/avatar/11.png";
import img28 from "../../../../assets/modules/social/images/avatar/24.png";
import img29 from "../../../../assets/modules/social/images/avatar/12.png";
import img30 from "../../../../assets/modules/social/images/avatar/14.png";
import img31 from "../../../../assets/modules/social/images/avatar/09.png";
import img32 from "../../../../assets/modules/social/images/avatar/10.png";
import img33 from "../../../../assets/modules/social/images/avatar/11.png";
import img35 from "../../../../assets/modules/social/images/app/01.png";
import img36 from "../../../../assets/modules/social/images/avatar/16.png";
import img37 from "../../../../assets/modules/social/images/avatar/17.png";
import img38 from "../../../../assets/modules/social/images/avatar/18.png";
import img39 from "../../../../assets/modules/social/images/avatar/19.png";
import img40 from "../../../../assets/modules/social/images/avatar/20.png";

const Newsfeed = memo(() => {
  const [imageController, setImageController] = useState({
    toggler: false,
    slide: 1,
  });
  function imageOnSlide(number) {
    setImageController({
      toggler: !imageController.toggler,
      slide: number,
    });
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  // stories
  const stories = [
    {
      id: "yourstory",
      photo: img2,
      name: "Your Story",
      link: "https://ramon.codes",
      preview: [
        {
          storyid: "yourstory-1",
          type: "photo",
          length: 3,
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
          storypreview:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
          link: "",
          linkText: "false",
          seen: "false",
        },
        {
          storyid: "yourstory-12",
          type: "video",
          length: 0,
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4",
          storypreview:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.jpg",
          link: "",
          linkText: "false",
          seen: "false",
        },
      ],
    },
    {
      id: "ali",
      photo: img30,
      name: "Ali",
      link: "",
      preview: [
        {
          storyid: "ali-1",
          type: "video",
          length: 0,
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.mp4",
          storypreview:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.jpg",
          link: "",
          linkText: "false",
          seen: "false",
        },
        {
          storyid: "ali-2",
          type: "photo",
          length: 3,
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg",
          storypreview:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg",
          link: "",
          linkText: "false",
          seen: "false",
        },

        {
          storyid: "ali-3",
          type: "photo",
          length: 3,
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png",
          storypreview:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png",
          link: "https://ramon.codes",
          linkText: "Visit my Portfolio",
          seen: "false",
        },
      ],
    },
    {
      id: "ammy",
      photo: img6,
      name: "Ammy",
      link: "",
      preview: [
        {
          storyid: "ammy-1",
          type: "photo",
          length: 5,
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg",
          storypreview:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg",
          link: "",
          linkText: "false",
          seen: "false",
        },
        {
          storyid: "ammy-2",
          type: "photo",
          length: 3,
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg",
          storypreview:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg",
          link: "http://ladygaga.com",
          linkText: "false",
          seen: "false",
        },
      ],
    },
    {
      id: "roger-1",
      photo: img36,
      name: "Roger",
      link: "",
      preview: [
        {
          storyid: "roger-1",
          type: "photo",
          length: 5,
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg",
          storypreview:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg",
          link: "",
          linkText: "false",
          seen: "false",
        },
      ],
    },
    {
      id: "justin",
      photo: img37,
      name: "Justin",
      link: "",
      preview: [
        {
          storyid: "justin-1",
          type: "photo",
          length: 10,
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
          storypreview:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
          link: "",
          linkText: "false",
          seen: "false",
        },
      ],
    },
    {
      id: "roy",
      photo: img38,
      name: "Roy",
      link: "",
      preview: [
        {
          storyid: "roy-1",
          type: "photo",
          length: 10,
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
          storypreview:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
          link: "",
          linkText: "false",
          seen: "false",
        },
      ],
    },
    {
      id: "johan",
      photo: img39,
      name: "Johan",
      link: "",
      preview: [
        {
          storyid: "johan-1",
          type: "photo",
          length: 10,
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
          storypreview:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
          link: "",
          linkText: "false",
          seen: "false",
        },
      ],
    },
    {
      id: "sado",
      photo: img40,
      name: "Sado",
      link: "",
      preview: [
        {
          storyid: "sado-1",
          type: "photo",
          length: 10,
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
          storypreview:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
          link: "",
          linkText: "false",
          seen: "false",
        },
      ],
    },
  ];

  return (
    <Fragment>
      <FsLightbox
        toggler={imageController.toggler}
        sources={[img11, img12, img13, img14, img15, img20]}
        slide={imageController.slide}
      />

      <Row>
        <Col lg="3" xl="3">
          <Card>
            <Card.Header className="pb-3">
              <div className="header-title">
                <h4 className="card-title">Activity</h4>
              </div>
              <Link
                to="/"
                onClick={(e) => e.preventDefault()}
                className="text-body"
              >
                See all
              </Link>
            </Card.Header>
            <Card.Body>
              <h5 className="mb-3">Stories About You</h5>
              <div className="d-flex align-items-center mb-4 gap-3">
                <Image
                  src={img1}
                  className="img-fluid avatar-50 me-2 rounded-circle"
                  alt="img2"
                />
                <div>
                  <p className="mb-0">Mentions</p>
                  <small>2 stories mention you</small>
                </div>
              </div>
              <h5 className="mb-4">New</h5>
              <div className="iq-social-user-details">
                <div className="d-flex justify-content-center gap-3">
                  <div className="iq-newsfeed-img">
                    <Image
                      src={img2}
                      className="img-fluid avatar-48 rounded-circle"
                      alt="img3"
                    />
                  </div>
                  <div className="d-flex align-items-center   justify-content-between  flex-grow-1">
                    <div>
                      <h5>sepid</h5>
                      <small className="text-ellipsis short-1">
                        Liked Your Photo
                      </small>
                    </div>
                    <div>
                      <Image
                        src={img3}
                        className="img-fluid avatar-40 rounded object-contain"
                        alt="profile-image"
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center gap-3">
                  <div className="iq-newsfeed-img">
                    <Image
                      src={img4}
                      className="img-fluid avatar-48  rounded-circle"
                      alt="profile-image-1"
                    />
                  </div>
                  <div className="d-flex align-items-center   justify-content-between  flex-grow-1">
                    <div>
                      <h5>Rokni</h5>
                      <small className="text-ellipsis short-1">
                        Started Following You
                      </small>
                    </div>
                    <div>
                      <Button variant="primary  btn-sm btn-icon rounded-pill">
                        <span className="btn-inner">
                          <svg
                            width="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.4"
                              d="M21.101 9.58786H19.8979V8.41162C19.8979 7.90945 19.4952 7.5 18.999 7.5C18.5038 7.5 18.1 7.90945 18.1 8.41162V9.58786H16.899C16.4027 9.58786 16 9.99731 16 10.4995C16 11.0016 16.4027 11.4111 16.899 11.4111H18.1V12.5884C18.1 13.0906 18.5038 13.5 18.999 13.5C19.4952 13.5 19.8979 13.0906 19.8979 12.5884V11.4111H21.101C21.5962 11.4111 22 11.0016 22 10.4995C22 9.99731 21.5962 9.58786 21.101 9.58786Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M9.5 15.0156C5.45422 15.0156 2 15.6625 2 18.2467C2 20.83 5.4332 21.5001 9.5 21.5001C13.5448 21.5001 17 20.8533 17 18.269C17 15.6848 13.5668 15.0156 9.5 15.0156Z"
                              fill="currentColor"
                            ></path>
                            <path
                              opacity="0.4"
                              d="M9.50023 12.5542C12.2548 12.5542 14.4629 10.3177 14.4629 7.52761C14.4629 4.73754 12.2548 2.5 9.50023 2.5C6.74566 2.5 4.5376 4.73754 4.5376 7.52761C4.5376 10.3177 6.74566 12.5542 9.50023 12.5542Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center gap-3">
                  <div className="iq-newsfeed-img">
                    <Image
                      src={img6}
                      className="img-fluid avatar-48  rounded-circle"
                      alt="profile-image-1"
                    />
                  </div>
                  <div className="d-flex align-items-center   justify-content-between  flex-grow-1">
                    <div>
                      <h5>Arman</h5>
                      <small className="text-ellipsis short-1">
                        Liked Your Photo
                      </small>
                    </div>
                    <div>
                      <Image
                        src={img7}
                        className="img-fluid avatar-40 rounded object-contain"
                        alt="profile-image-2"
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center gap-3">
                  <div className="iq-newsfeed-img">
                    <Image
                      src={img8}
                      className="img-fluid avatar-48  rounded-circle"
                      alt="profile-image-1"
                    />
                  </div>
                  <div className="d-flex align-items-center   justify-content-between  flex-grow-1">
                    <div>
                      <h5>Medra</h5>
                      <small className="text-ellipsis short-1">
                        Started Following You
                      </small>
                    </div>
                    <div>
                      <Button variant="primary  btn-sm btn-icon rounded-pill">
                        <span className="btn-inner">
                          <svg
                            width="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.4"
                              d="M21.101 9.58786H19.8979V8.41162C19.8979 7.90945 19.4952 7.5 18.999 7.5C18.5038 7.5 18.1 7.90945 18.1 8.41162V9.58786H16.899C16.4027 9.58786 16 9.99731 16 10.4995C16 11.0016 16.4027 11.4111 16.899 11.4111H18.1V12.5884C18.1 13.0906 18.5038 13.5 18.999 13.5C19.4952 13.5 19.8979 13.0906 19.8979 12.5884V11.4111H21.101C21.5962 11.4111 22 11.0016 22 10.4995C22 9.99731 21.5962 9.58786 21.101 9.58786Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M9.5 15.0156C5.45422 15.0156 2 15.6625 2 18.2467C2 20.83 5.4332 21.5001 9.5 21.5001C13.5448 21.5001 17 20.8533 17 18.269C17 15.6848 13.5668 15.0156 9.5 15.0156Z"
                              fill="currentColor"
                            ></path>
                            <path
                              opacity="0.4"
                              d="M9.50023 12.5542C12.2548 12.5542 14.4629 10.3177 14.4629 7.52761C14.4629 4.73754 12.2548 2.5 9.50023 2.5C6.74566 2.5 4.5376 4.73754 4.5376 7.52761C4.5376 10.3177 6.74566 12.5542 9.50023 12.5542Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center gap-3">
                  <div className="iq-newsfeed-img">
                    <Image
                      src={img9}
                      className="img-fluid avatar-48  rounded-circle"
                      alt="profile-image-1"
                    />
                  </div>
                  <div className="d-flex align-items-center   justify-content-between  flex-grow-1">
                    <div>
                      <h5>Afshin</h5>
                      <small className="text-ellipsis short-1">
                        Liked Your Photo
                      </small>
                    </div>
                    <div>
                      <Image
                        src={img10}
                        className="img-fluid avatar-40 rounded object-contain"
                        alt="profile-image-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex align-items-center justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Explore</h4>
              </div>
              <Link
                to="/"
                onClick={(e) => e.preventDefault()}
                className="text-body"
              >
                See all
              </Link>
            </Card.Header>
            <Card.Body>
              <div className="d-flex align-items-center justify-content-between flex-grow-1">
                <div className="d-flex ">
                  <div className="btn btn-sm  btn-soft-primary">Website</div>
                  <div className="btn btn-sm  btn-soft-primary ms-3">
                    product
                  </div>
                </div>
              </div>
              <div className="iq-grid-explore d-grid mt-3">
                <Link
                  onClick={() => imageOnSlide(1)}
                  to="#"
                  className="iq-item-col-end rounded"
                >
                  <Image
                    className="img-fluid rounded"
                    src={img11}
                    alt="grid-1"
                  />
                </Link>
                <Link
                  onClick={() => imageOnSlide(2)}
                  to="#"
                  className="iq-item-row-end rounded"
                >
                  <Image
                    className="img-fluid rounded"
                    src={img12}
                    alt="grid-2"
                  />
                </Link>
                <Link
                  onClick={() => imageOnSlide(3)}
                  to="#"
                  className="iq-item-row-end rounded"
                >
                  <Image
                    className="img-fluid rounded"
                    src={img13}
                    alt="grid-3"
                  />
                </Link>
                <Link
                  onClick={() => imageOnSlide(4)}
                  to="#"
                  className="iq-item-row-end rounded"
                >
                  <Image
                    className="img-fluid rounded"
                    src={img14}
                    alt="grid-4"
                  />
                </Link>
                <Link
                  onClick={() => imageOnSlide(5)}
                  to="#"
                  className="iq-item-row-end rounded"
                >
                  <Image
                    className="img-fluid rounded"
                    src={img15}
                    alt="grid-5"
                  />
                </Link>
                <Link
                  onClick={() => imageOnSlide(6)}
                  to="#"
                  className="iq-item-col-end rounded"
                >
                  <Image
                    className="img-fluid rounded"
                    src={img20}
                    alt="grid-6"
                  />
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6" xl="6">
          <Card>
            <Card.Header>
              <div className="header-title">
                <h4 className="card-title">Stories</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <Stories stories={stories} />
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h4 className="mb-0">Create A Post</h4>
            </Card.Header>
            <Card.Body>
              <div className="border-bottom">
                <div className="d-flex align-items-center mb-3 gap-3">
                  <Image
                    className="img-fluid rounded-circle avatar-60 p-1 border border-2 border-primary border-dotted"
                    src={img5}
                    alt=""
                  />
                  <Form className="w-100" onClick={handleShow1}>
                    <Form.Control
                      type="text"
                      className=" border-0 shadow-none"
                      placeholder="Write Something Here..."
                    />
                  </Form>
                </div>
              </div>
              <div className="d-flex align-items-center mt-3">
                <div className="btn btn-sm btn-soft-light d-flex align-items-center gap-2">
                  <span>Photo</span>
                  <svg
                    width="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.9999 14.7024V16.0859C21.9999 16.3155 21.9899 16.5471 21.9699 16.7767C21.6893 19.9357 19.4949 22 16.3286 22H7.67126C6.06806 22 4.71535 21.4797 3.74341 20.5363C3.36265 20.1864 3.042 19.7753 2.7915 19.3041C3.12217 18.9021 3.49291 18.462 3.85363 18.0208C4.46485 17.289 5.05603 16.5661 5.42677 16.0959C5.97788 15.4142 7.43078 13.6196 9.44481 14.4617C9.85563 14.6322 10.2164 14.8728 10.547 15.0833C11.3586 15.6247 11.6993 15.7851 12.2705 15.4743C12.9017 15.1335 13.3125 14.4617 13.7434 13.76C13.9739 13.388 14.2043 13.0281 14.4548 12.6972C15.547 11.2736 17.2304 10.8926 18.6332 11.7348C19.3346 12.1559 19.9358 12.6872 20.4969 13.2276C20.6172 13.3479 20.7374 13.4592 20.8476 13.5695C20.9979 13.7198 21.4989 14.2211 21.9999 14.7024Z"
                      fill="currentColor"
                    ></path>
                    <path
                      opacity="0.4"
                      d="M16.3387 2H7.67134C4.27455 2 2 4.37607 2 7.91411V16.086C2 17.3181 2.28056 18.4119 2.79158 19.3042C3.12224 18.9022 3.49299 18.4621 3.85371 18.0199C4.46493 17.2891 5.05611 16.5662 5.42685 16.096C5.97796 15.4143 7.43086 13.6197 9.44489 14.4618C9.85571 14.6323 10.2164 14.8729 10.5471 15.0834C11.3587 15.6248 11.6994 15.7852 12.2705 15.4734C12.9018 15.1336 13.3126 14.4618 13.7435 13.759C13.9739 13.3881 14.2044 13.0282 14.4549 12.6973C15.5471 11.2737 17.2305 10.8927 18.6333 11.7349C19.3347 12.1559 19.9359 12.6873 20.497 13.2277C20.6172 13.348 20.7375 13.4593 20.8477 13.5696C20.998 13.7189 21.499 14.2202 22 14.7025V7.91411C22 4.37607 19.7255 2 16.3387 2Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M11.4543 8.79668C11.4543 10.2053 10.2809 11.3783 8.87313 11.3783C7.46632 11.3783 6.29297 10.2053 6.29297 8.79668C6.29297 7.38909 7.46632 6.21509 8.87313 6.21509C10.2809 6.21509 11.4543 7.38909 11.4543 8.79668Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <div className="btn btn-sm btn-soft-light mx-3 d-flex align-items-center gap-2">
                  <span>Tag Friend</span>
                  <svg
                    width="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.997 15.1746C7.684 15.1746 4 15.8546 4 18.5746C4 21.2956 7.661 21.9996 11.997 21.9996C16.31 21.9996 19.994 21.3206 19.994 18.5996C19.994 15.8786 16.334 15.1746 11.997 15.1746Z"
                      fill="currentColor"
                    ></path>
                    <path
                      opacity="0.4"
                      d="M11.9971 12.5838C14.9351 12.5838 17.2891 10.2288 17.2891 7.29176C17.2891 4.35476 14.9351 1.99976 11.9971 1.99976C9.06008 1.99976 6.70508 4.35476 6.70508 7.29176C6.70508 10.2288 9.06008 12.5838 11.9971 12.5838Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <div className="btn btn-sm btn-soft-light">More ...</div>
              </div>
            </Card.Body>
          </Card>
          <Modal
            className="fade"
            id="post-modal"
            tabIndex="-1"
            show={show1}
            onHide={handleClose1}
            fullscreen="sm-down"
            size="lg"
          >
            <Modal.Header closeButton>
              <h5 className="modal-title" id="post-modalLabel">
                Create Post
              </h5>
            </Modal.Header>
            <Modal.Body>
              <Postheadermodal show={show1} onclick={handleClose1} />
            </Modal.Body>
          </Modal>
          <Card>
            <Card.Header className=" pb-0">
              <div className="header-title">
                <div className="d-flex justify-content-center flex-wrap gap-3">
                  <div className="media-support-user-img">
                    <Image
                      className="img-fluid rounded-circle p-1 border border-2 border-primary border-dotted avatar-50"
                      src={img5}
                      alt=""
                    />
                  </div>
                  <div className="media-support-info">
                    <div className="d-flex align-items-center mb-2 gap-2">
                      <h6 className="mb-0">Joshua Martin</h6>
                      <small className="text-dark">Added New Post</small>
                    </div>
                    <p className="mb-0 text-muted">3 hrs Ago</p>
                  </div>
                </div>
              </div>
              <Dropdown>
                <Dropdown.Toggle as={CustomToggle} className="">
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 20.6788C10 21.9595 11.0378 23 12.3113 23C13.5868 23 14.6265 21.9595 14.6265 20.6788C14.6265 19.3981 13.5868 18.3576 12.3113 18.3576C11.0378 18.3576 10 19.3981 10 20.6788ZM10 12.0005C10 13.2812 11.0378 14.3217 12.3113 14.3217C13.5868 14.3217 14.6265 13.2812 14.6265 12.0005C14.6265 10.7198 13.5868 9.67929 12.3113 9.67929C11.0378 9.67929 10 10.7198 10 12.0005ZM12.3113 5.64239C11.0378 5.64239 10 4.60192 10 3.3212C10 2.04047 11.0378 1 12.3113 1C13.5868 1 14.6265 2.04047 14.6265 3.3212C14.6265 4.60192 13.5868 5.64239 12.3113 5.64239Z"
                      fill="#8A92A6"
                    />
                  </svg>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item className=" d-flex align-items-center">
                    <svg
                      width="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M19.9927 18.9534H14.2984C13.7429 18.9534 13.291 19.4124 13.291 19.9767C13.291 20.5422 13.7429 21.0001 14.2984 21.0001H19.9927C20.5483 21.0001 21.0001 20.5422 21.0001 19.9767C21.0001 19.4124 20.5483 18.9534 19.9927 18.9534Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M10.309 6.90385L15.7049 11.2639C15.835 11.3682 15.8573 11.5596 15.7557 11.6929L9.35874 20.0282C8.95662 20.5431 8.36402 20.8344 7.72908 20.8452L4.23696 20.8882C4.05071 20.8903 3.88775 20.7613 3.84542 20.5764L3.05175 17.1258C2.91419 16.4915 3.05175 15.8358 3.45388 15.3306L9.88256 6.95545C9.98627 6.82108 10.1778 6.79743 10.309 6.90385Z"
                        fill="currentColor"
                      ></path>
                      <path
                        opacity="0.4"
                        d="M18.1208 8.66544L17.0806 9.96401C16.9758 10.0962 16.7874 10.1177 16.6573 10.0124C15.3927 8.98901 12.1545 6.36285 11.2561 5.63509C11.1249 5.52759 11.1069 5.33625 11.2127 5.20295L12.2159 3.95706C13.126 2.78534 14.7133 2.67784 15.9938 3.69906L17.4647 4.87078C18.0679 5.34377 18.47 5.96726 18.6076 6.62299C18.7663 7.3443 18.597 8.0527 18.1208 8.66544Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span className="ms-2">Edit Post</span>
                  </Dropdown.Item>
                  <Dropdown.Item className=" d-flex align-items-center">
                    <svg
                      width="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.7688 8.71387H16.2312C18.5886 8.71387 20.5 10.5831 20.5 12.8885V17.8254C20.5 20.1308 18.5886 22 16.2312 22H7.7688C5.41136 22 3.5 20.1308 3.5 17.8254V12.8885C3.5 10.5831 5.41136 8.71387 7.7688 8.71387ZM11.9949 17.3295C12.4928 17.3295 12.8891 16.9419 12.8891 16.455V14.2489C12.8891 13.772 12.4928 13.3844 11.9949 13.3844C11.5072 13.3844 11.1109 13.772 11.1109 14.2489V16.455C11.1109 16.9419 11.5072 17.3295 11.9949 17.3295Z"
                        fill="currentColor"
                      ></path>
                      <path
                        opacity="0.4"
                        d="M17.523 7.39595V8.86667C17.1673 8.7673 16.7913 8.71761 16.4052 8.71761H15.7447V7.39595C15.7447 5.37868 14.0681 3.73903 12.0053 3.73903C9.94257 3.73903 8.26594 5.36874 8.25578 7.37608V8.71761H7.60545C7.20916 8.71761 6.83319 8.7673 6.47754 8.87661V7.39595C6.4877 4.41476 8.95692 2 11.985 2C15.0537 2 17.523 4.41476 17.523 7.39595Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span className="ms-2">Security</span>
                  </Dropdown.Item>
                  <Dropdown.Item className=" d-flex align-items-center">
                    <svg
                      width="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M22 12C22 17.524 17.523 22 12 22C6.477 22 2 17.524 2 12C2 6.478 6.477 2 12 2C17.523 2 22 6.478 22 12Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M15.5739 15.8145C15.4429 15.8145 15.3109 15.7805 15.1899 15.7095L11.2639 13.3675C11.0379 13.2315 10.8989 12.9865 10.8989 12.7225V7.67554C10.8989 7.26154 11.2349 6.92554 11.6489 6.92554C12.0629 6.92554 12.3989 7.26154 12.3989 7.67554V12.2965L15.9589 14.4195C16.3139 14.6325 16.4309 15.0925 16.2189 15.4485C16.0779 15.6835 15.8289 15.8145 15.5739 15.8145Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span className="ms-2">Timer</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Header>
            <Card.Body>
              <div className="user-post">
                <Link to="#">
                  <Image
                    src={img35}
                    alt="post-image"
                    className="img-fluid rounded"
                    onClick={handleShow}
                  />
                </Link>
              </div>
              <div className="comment-area pt-3">
                <Likeshare noLikes="120" noComments="02" />
                <hr />
                <ul className="list-inline mt-4">
                  <li className="mb-4">
                    <Friendcomment
                      userName="Larry Robbins"
                      userComment="So True!!"
                      commentDuration="2 Min Ago"
                      userImage={img27}
                    />
                  </li>
                </ul>
                <Commentfromcontrol placeholder="Enter Your Comment Here..." />
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex align-items-center justify-content-between pb-0">
              <div className="header-title">
                <div className="d-flex justify-content-center flex-wrap">
                  <div className="media-support-user-img me-3">
                    <Image
                      className="img-fluid rounded-circle p-1 border border-2 border-primary border-dotted avatar-50"
                      src={img28}
                      alt=""
                    />
                  </div>
                  <div className="media-support-info">
                    <div className="d-flex align-items-center mb-2 gap-2">
                      <h6 className="mb-0 ">Ella Martina</h6>
                      <small className="text-dark">Updated Her Status</small>
                    </div>
                    <p className="mb-0 text-muted">5 hrs Ago</p>
                  </div>
                </div>
              </div>
              <Dropdown>
                <Dropdown.Toggle as={CustomToggle} className="">
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 20.6788C10 21.9595 11.0378 23 12.3113 23C13.5868 23 14.6265 21.9595 14.6265 20.6788C14.6265 19.3981 13.5868 18.3576 12.3113 18.3576C11.0378 18.3576 10 19.3981 10 20.6788ZM10 12.0005C10 13.2812 11.0378 14.3217 12.3113 14.3217C13.5868 14.3217 14.6265 13.2812 14.6265 12.0005C14.6265 10.7198 13.5868 9.67929 12.3113 9.67929C11.0378 9.67929 10 10.7198 10 12.0005ZM12.3113 5.64239C11.0378 5.64239 10 4.60192 10 3.3212C10 2.04047 11.0378 1 12.3113 1C13.5868 1 14.6265 2.04047 14.6265 3.3212C14.6265 4.60192 13.5868 5.64239 12.3113 5.64239Z"
                      fill="#8A92A6"
                    />
                  </svg>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item className=" d-flex align-items-center">
                    <svg
                      width="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M19.9927 18.9534H14.2984C13.7429 18.9534 13.291 19.4124 13.291 19.9767C13.291 20.5422 13.7429 21.0001 14.2984 21.0001H19.9927C20.5483 21.0001 21.0001 20.5422 21.0001 19.9767C21.0001 19.4124 20.5483 18.9534 19.9927 18.9534Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M10.309 6.90385L15.7049 11.2639C15.835 11.3682 15.8573 11.5596 15.7557 11.6929L9.35874 20.0282C8.95662 20.5431 8.36402 20.8344 7.72908 20.8452L4.23696 20.8882C4.05071 20.8903 3.88775 20.7613 3.84542 20.5764L3.05175 17.1258C2.91419 16.4915 3.05175 15.8358 3.45388 15.3306L9.88256 6.95545C9.98627 6.82108 10.1778 6.79743 10.309 6.90385Z"
                        fill="currentColor"
                      ></path>
                      <path
                        opacity="0.4"
                        d="M18.1208 8.66544L17.0806 9.96401C16.9758 10.0962 16.7874 10.1177 16.6573 10.0124C15.3927 8.98901 12.1545 6.36285 11.2561 5.63509C11.1249 5.52759 11.1069 5.33625 11.2127 5.20295L12.2159 3.95706C13.126 2.78534 14.7133 2.67784 15.9938 3.69906L17.4647 4.87078C18.0679 5.34377 18.47 5.96726 18.6076 6.62299C18.7663 7.3443 18.597 8.0527 18.1208 8.66544Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span className="ms-2">Edit Post</span>
                  </Dropdown.Item>
                  <Dropdown.Item className=" d-flex align-items-center">
                    <svg
                      width="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.7688 8.71387H16.2312C18.5886 8.71387 20.5 10.5831 20.5 12.8885V17.8254C20.5 20.1308 18.5886 22 16.2312 22H7.7688C5.41136 22 3.5 20.1308 3.5 17.8254V12.8885C3.5 10.5831 5.41136 8.71387 7.7688 8.71387ZM11.9949 17.3295C12.4928 17.3295 12.8891 16.9419 12.8891 16.455V14.2489C12.8891 13.772 12.4928 13.3844 11.9949 13.3844C11.5072 13.3844 11.1109 13.772 11.1109 14.2489V16.455C11.1109 16.9419 11.5072 17.3295 11.9949 17.3295Z"
                        fill="currentColor"
                      ></path>
                      <path
                        opacity="0.4"
                        d="M17.523 7.39595V8.86667C17.1673 8.7673 16.7913 8.71761 16.4052 8.71761H15.7447V7.39595C15.7447 5.37868 14.0681 3.73903 12.0053 3.73903C9.94257 3.73903 8.26594 5.36874 8.25578 7.37608V8.71761H7.60545C7.20916 8.71761 6.83319 8.7673 6.47754 8.87661V7.39595C6.4877 4.41476 8.95692 2 11.985 2C15.0537 2 17.523 4.41476 17.523 7.39595Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span className="ms-2">Security</span>
                  </Dropdown.Item>
                  <Dropdown.Item className=" d-flex align-items-center">
                    <svg
                      width="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M22 12C22 17.524 17.523 22 12 22C6.477 22 2 17.524 2 12C2 6.478 6.477 2 12 2C17.523 2 22 6.478 22 12Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M15.5739 15.8145C15.4429 15.8145 15.3109 15.7805 15.1899 15.7095L11.2639 13.3675C11.0379 13.2315 10.8989 12.9865 10.8989 12.7225V7.67554C10.8989 7.26154 11.2349 6.92554 11.6489 6.92554C12.0629 6.92554 12.3989 7.26154 12.3989 7.67554V12.2965L15.9589 14.4195C16.3139 14.6325 16.4309 15.0925 16.2189 15.4485C16.0779 15.6835 15.8289 15.8145 15.5739 15.8145Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span className="ms-2">Timer</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Header>
            <Card.Body>
              <p>
                “Essentials to happiness in this life are something to do,
                something to love, and something to hope for.”
              </p>
              <div className="comment-area pt-3">
                <Likeshare noLikes="15" noComments="20" />
                <hr />
                <ul className="list-inline mt-4">
                  <Friendcomment
                    userName="Larry Robbins"
                    userComment="So True!!"
                    commentDuration="5 Min Ago"
                    userImage={img27}
                  />
                </ul>
                <Commentfromcontrol placeholder="Enter Your Comment Here..." />
              </div>
            </Card.Body>
          </Card>
          <Imagemodal show={show} onclick={handleClose} />
        </Col>
        <Col lg="3" xl="3">
          <Card>
            <Card.Header>
              <div className="header-title">
                <h4 className="card-title">Message</h4>
              </div>
              <span>
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.4923 0.789001H5.7533C2.6783 0.789001 0.750298 2.966 0.750298 6.048V14.362C0.750298 17.444 2.6693 19.621 5.7533 19.621H14.5773C17.6623 19.621 19.5813 17.444 19.5813 14.362V10.334"
                    stroke="currentcolor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.8278 8.92093L14.3008 1.44793C15.2318 0.517927 16.7408 0.517927 17.6718 1.44793L18.8888 2.66493C19.8198 3.59593 19.8198 5.10593 18.8888 6.03593L11.3798 13.5449C10.9728 13.9519 10.4208 14.1809 9.8448 14.1809H6.0988L6.1928 10.4009C6.2068 9.84493 6.4338 9.31493 6.8278 8.92093Z"
                    stroke="currentcolor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.1652 2.60254L17.7312 7.16854"
                    stroke="currentcolor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Card.Header>
            <Card.Body>
              <div className="nav">
                <div className="form-group input-group mb-0 search-input w-100 ">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <span className="input-group-text">
                    <svg
                      width="18"
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
              <Tab.Container defaultActiveKey="first">
                <div className="iq-social-message-newsfeed mt-3">
                  <nav className="tab-bottom-bordered">
                    <Nav
                      className="mb-0 nav-tabs flex-nowrap justify-content-between"
                      id="nav-tab"
                      role="tablist"
                    >
                      <Nav.Link
                        href="#"
                        eventKey="first"
                        id="pills-activeorders-tab1"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-activeorders"
                        role="tab"
                        aria-controls="pills-activeorders"
                        aria-selected="true"
                      >
                        <span className="iq-socail-message-tab-text">
                          Archive
                        </span>
                        <span
                          className="iq-socail-message-tab-icon"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Primary"
                        >
                          <svg
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M17.857 20.417C19.73 20.417 21.249 18.899 21.25 17.026V17.024V14.324C20.013 14.324 19.011 13.322 19.01 12.085C19.01 10.849 20.012 9.846 21.249 9.846H21.25V7.146C21.252 5.272 19.735 3.752 17.862 3.75H17.856H6.144C4.27 3.75 2.751 5.268 2.75 7.142V7.143V9.933C3.944 9.891 4.945 10.825 4.987 12.019C4.988 12.041 4.989 12.063 4.989 12.085C4.99 13.32 3.991 14.322 2.756 14.324H2.75V17.024C2.749 18.897 4.268 20.417 6.141 20.417H6.142H17.857Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12.3711 9.06303L12.9871 10.31C13.0471 10.432 13.1631 10.517 13.2981 10.537L14.6751 10.738C15.0161 10.788 15.1511 11.206 14.9051 11.445L13.9091 12.415C13.8111 12.51 13.7671 12.647 13.7891 12.782L14.0241 14.152C14.0821 14.491 13.7271 14.749 13.4231 14.589L12.1921 13.942C12.0711 13.878 11.9271 13.878 11.8061 13.942L10.5761 14.589C10.2711 14.749 9.91609 14.491 9.97409 14.152L10.2091 12.782C10.2321 12.647 10.1871 12.51 10.0891 12.415L9.09409 11.445C8.84809 11.206 8.98309 10.788 9.32309 10.738L10.7001 10.537C10.8351 10.517 10.9521 10.432 11.0121 10.31L11.6271 9.06303C11.7791 8.75503 12.2191 8.75503 12.3711 9.06303Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </span>
                      </Nav.Link>
                      <Nav.Link
                        href="#"
                        eventKey="second"
                        id="pills-cancelledorders-tab1"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-cancelledorders"
                        role="tab"
                        aria-controls="pills-cancelledorders"
                        aria-selected="false"
                      >
                        <span className="iq-socail-message-tab-text">
                          Recent
                        </span>
                        <span
                          className="iq-socail-message-tab-icon"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="General"
                        >
                          <svg
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M4.81409 20.4368H19.1971C20.7791 20.4368 21.7721 18.7267 20.9861 17.3527L13.8001 4.78775C13.0091 3.40475 11.0151 3.40375 10.2231 4.78675L3.02509 17.3518C2.23909 18.7258 3.23109 20.4368 4.81409 20.4368Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M12.0024 13.4147V10.3147"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M11.995 16.5H12.005"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </span>
                      </Nav.Link>
                      <Nav.Link
                        eventKey="third"
                        href="#"
                        id="pills-mytrades-tab1"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-mytrades"
                        role="tab"
                        aria-controls="pills-mytrades"
                        aria-selected="false"
                      >
                        <span className="iq-socail-message-tab-text">New</span>
                        <span
                          className="iq-socail-message-tab-icon"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Requests"
                        >
                          <svg
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.9846 21.606C11.9846 21.606 19.6566 19.283 19.6566 12.879C19.6566 6.474 19.9346 5.974 19.3196 5.358C18.7036 4.742 12.9906 2.75 11.9846 2.75C10.9786 2.75 5.26557 4.742 4.65057 5.358C4.03457 5.974 4.31257 6.474 4.31257 12.879C4.31257 19.283 11.9846 21.606 11.9846 21.606Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M9.38574 11.8746L11.2777 13.7696L15.1757 9.86963"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </span>
                      </Nav.Link>
                    </Nav>
                  </nav>
                </div>
                <Tab.Content id="pills-tabContent">
                  <Tab.Pane
                    eventKey="first"
                    className="fade"
                    id="pills-activeorders"
                    role="tabpanel"
                  >
                    <div className="tabs-panel">
                      <ul className="list-unstyled mb-0">
                        <li className="py-3 pb-1">
                          <div className="d-flex align-items-center">
                            <Image
                              src={img33}
                              className="img-fluid avatar-50 me-3 rounded-circle"
                              alt="profile-image"
                            />
                            <div>
                              <h5>Arman Rokni</h5>
                              <small className="text-ellipsis short-1">
                                Active 30m
                              </small>
                            </div>
                          </div>
                        </li>
                        <li className="py-3 pb-1">
                          <div className="d-flex align-items-center">
                            <Image
                              src={img29}
                              className="img-fluid avatar-50 me-3 rounded-circle"
                              alt="profile-image"
                            />
                            <div>
                              <h5>MD Alidoost</h5>
                              <small className="text-ellipsis short-1">
                                Active 30m
                              </small>
                            </div>
                          </div>
                        </li>
                        <li className="py-3 pb-1">
                          <div className="d-flex align-items-center">
                            <Image
                              src={img28}
                              className="img-fluid avatar-50 me-3 rounded-circle"
                              alt="profile-image"
                            />
                            <div>
                              <h5>Afshin Rotni </h5>
                              <small className="text-ellipsis short-1">
                                Active 30m
                              </small>
                            </div>
                          </div>
                        </li>
                        <li className="py-3 pb-1">
                          <div className="d-flex align-items-center">
                            <Image
                              src={img30}
                              className="img-fluid avatar-50 me-3 rounded-circle"
                              alt="profile-image"
                            />
                            <div>
                              <h5>Salman Shaha </h5>
                              <small className="text-ellipsis short-1">
                                Active 30m
                              </small>
                            </div>
                          </div>
                        </li>
                        <li className="py-3 pb-1">
                          <div className="d-flex align-items-center">
                            <Image
                              src={img31}
                              className="img-fluid avatar-50 me-3 rounded-circle"
                              alt="profile-image"
                            />
                            <div>
                              <h5>Vida Lakhani </h5>
                              <small className="text-ellipsis short-1">
                                Active 30m
                              </small>
                            </div>
                          </div>
                        </li>
                        <li className="py-3 pb-0">
                          <div className="d-flex align-items-center">
                            <Image
                              src={img32}
                              className="img-fluid avatar-50 me-3 rounded-circle"
                              alt="profile-image"
                            />
                            <div>
                              <h5>Goutham</h5>
                              <small className="text-ellipsis short-1">
                                Active 30m
                              </small>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="second"
                    className="fade"
                    id="pills-cancelledorders"
                    role="tabpanel"
                  >
                    <div className="tabs-panel">
                      <ul className="list-unstyled mb-0">
                        <li className="py-3 pb-1">
                          <div className="d-flex align-items-center">
                            <Image
                              src={img33}
                              className="img-fluid avatar-50 me-3 rounded-circle"
                              alt="profile-image"
                            />
                            <div>
                              <h5>Arman Rokni</h5>
                              <small className="text-ellipsis short-1">
                                Arman Rokni
                              </small>
                            </div>
                          </div>
                        </li>
                        <li className="py-3 pb-1">
                          <div className="d-flex align-items-center">
                            <Image
                              src={img29}
                              className="img-fluid avatar-50 me-3 rounded-circle"
                              alt="profile-image"
                            />
                            <div>
                              <h5>MD Alidoost</h5>
                              <small className="text-ellipsis short-1">
                                Active 30m
                              </small>
                            </div>
                          </div>
                        </li>
                        <li className="py-3 pb-1">
                          <div className="d-flex align-items-center">
                            <Image
                              src={img28}
                              className="img-fluid avatar-50 me-3 rounded-circle"
                              alt="profile-image"
                            />
                            <div>
                              <h5>Afshin Rotni </h5>
                              <small className="text-ellipsis short-1">
                                Active 30m
                              </small>
                            </div>
                          </div>
                        </li>
                        <li className="py-3 pb-1">
                          <div className="d-flex align-items-center">
                            <Image
                              src={img30}
                              className="img-fluid avatar-50 me-3 rounded-circle"
                              alt="profile-image"
                            />
                            <div>
                              <h5>Salman Shaha </h5>
                              <small className="text-ellipsis short-1">
                                Active 30m
                              </small>
                            </div>
                          </div>
                        </li>
                        <li className="py-3 pb-1">
                          <div className="d-flex align-items-center">
                            <Image
                              src={img31}
                              className="img-fluid avatar-50 me-3 rounded-circle"
                              alt="profile-image"
                            />
                            <div>
                              <h5>Vida Lakhani </h5>
                              <small className="text-ellipsis short-1">
                                Active 30m
                              </small>
                            </div>
                          </div>
                        </li>
                        <li className="py-3 pb-0">
                          <div className="d-flex align-items-center">
                            <Image
                              src={img32}
                              className="img-fluid avatar-50 me-3 rounded-circle"
                              alt="profile-image"
                            />
                            <div>
                              <h5>Goutham</h5>
                              <small className="text-ellipsis short-1">
                                Active 30m
                              </small>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="third"
                    className="fade"
                    id="pills-mytrades"
                    role="tabpanel"
                  >
                    <div className="tabs-panel">
                      <ul className="list-unstyled mb-0">
                        <li className="py-3 pb-1">
                          <div className="d-flex align-items-center">
                            <Image
                              src={img33}
                              className="img-fluid avatar-50 me-3 rounded-circle"
                              alt="profile-image"
                            />
                            <div>
                              <h5>Arman Rokni</h5>
                              <small className="text-ellipsis short-1">
                                Active 30m
                              </small>
                            </div>
                          </div>
                        </li>
                        <li className="py-3 pb-1">
                          <div className="d-flex align-items-center">
                            <Image
                              src={img29}
                              className="img-fluid avatar-50 me-3 rounded-circle"
                              alt="profile-image"
                            />
                            <div>
                              <h5>MD Alidoost</h5>
                              <small className="text-ellipsis short-1">
                                Active 30m
                              </small>
                            </div>
                          </div>
                        </li>
                        <li className="py-3 pb-1">
                          <div className="d-flex align-items-center">
                            <Image
                              src={img28}
                              className="img-fluid avatar-50 me-3 rounded-circle"
                              alt="profile-image"
                            />
                            <div>
                              <h5>Afshin Rotni </h5>
                              <small className="text-ellipsis short-1">
                                Active 30m
                              </small>
                            </div>
                          </div>
                        </li>
                        <li className="py-3 pb-1">
                          <div className="d-flex align-items-center">
                            <Image
                              src={img30}
                              className="img-fluid avatar-50 me-3 rounded-circle"
                              alt="profile-image"
                            />
                            <div>
                              <h6>Salman Shaha </h6>
                              <small className="text-ellipsis short-1">
                                Active 30m
                              </small>
                            </div>
                          </div>
                        </li>
                        <li className="py-3 pb-1">
                          <div className="d-flex align-items-center">
                            <Image
                              src={img31}
                              className="img-fluid avatar-50 me-3 rounded-circle"
                              alt="profile-image"
                            />
                            <div>
                              <h5>Vida Lakhani </h5>
                              <small className="text-ellipsis short-1">
                                Active 30m
                              </small>
                            </div>
                          </div>
                        </li>
                        <li className="py-3 pb-0">
                          <div className="d-flex align-items-center">
                            <Image
                              src={img32}
                              className="img-fluid avatar-50 me-3 rounded-circle"
                              alt="profile-image"
                            />
                            <div>
                              <h5>Goutham</h5>
                              <small className="text-ellipsis short-1">
                                Active 30m
                              </small>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex align-items-center justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Suggested</h4>
              </div>
              <Link to="#" className="text-body">
                See all
              </Link>
            </Card.Header>
            <Card.Body>
              <div className="iq-social-user-details">
                <div className="d-flex justify-content-center gap-3">
                  <Image
                    src={img2}
                    className="img-fluid avatar-48 rounded-circle"
                    alt="profile-image"
                  />
                  <div className="d-flex align-items-center  justify-content-between  flex-grow-1">
                    <div>
                      <h5>Vida Lakhani</h5>
                      <small className="text-ellipsis short-1">
                        Liked Your Photo
                      </small>
                    </div>
                    <div>
                      <Button variant="primary btn-icon btn-sm  rounded-pill">
                        <span className="btn-inner">
                          <svg
                            width="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.4"
                              d="M21.101 9.58786H19.8979V8.41162C19.8979 7.90945 19.4952 7.5 18.999 7.5C18.5038 7.5 18.1 7.90945 18.1 8.41162V9.58786H16.899C16.4027 9.58786 16 9.99731 16 10.4995C16 11.0016 16.4027 11.4111 16.899 11.4111H18.1V12.5884C18.1 13.0906 18.5038 13.5 18.999 13.5C19.4952 13.5 19.8979 13.0906 19.8979 12.5884V11.4111H21.101C21.5962 11.4111 22 11.0016 22 10.4995C22 9.99731 21.5962 9.58786 21.101 9.58786Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M9.5 15.0156C5.45422 15.0156 2 15.6625 2 18.2467C2 20.83 5.4332 21.5001 9.5 21.5001C13.5448 21.5001 17 20.8533 17 18.269C17 15.6848 13.5668 15.0156 9.5 15.0156Z"
                              fill="currentColor"
                            ></path>
                            <path
                              opacity="0.4"
                              d="M9.50023 12.5542C12.2548 12.5542 14.4629 10.3177 14.4629 7.52761C14.4629 4.73754 12.2548 2.5 9.50023 2.5C6.74566 2.5 4.5376 4.73754 4.5376 7.52761C4.5376 10.3177 6.74566 12.5542 9.50023 12.5542Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="my-3">
                  <div className="d-flex justify-content-center">
                    <div className="iq-newsfeed-img">
                      <Image
                        src={img4}
                        className="img-fluid avatar-48  rounded-circle"
                        alt="profile-image-1"
                      />
                    </div>
                    <div className="d-flex align-items-center  ms-2 justify-content-between  flex-grow-1">
                      <div>
                        <h5>Arman Rokni</h5>
                        <small className="text-ellipsis short-1">
                          Started Following You
                        </small>
                      </div>
                      <div>
                        <Button variant="primary btn-icon btn-sm  rounded-pill">
                          <span className="btn-inner">
                            <svg
                              width="32"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.4"
                                d="M21.101 9.58786H19.8979V8.41162C19.8979 7.90945 19.4952 7.5 18.999 7.5C18.5038 7.5 18.1 7.90945 18.1 8.41162V9.58786H16.899C16.4027 9.58786 16 9.99731 16 10.4995C16 11.0016 16.4027 11.4111 16.899 11.4111H18.1V12.5884C18.1 13.0906 18.5038 13.5 18.999 13.5C19.4952 13.5 19.8979 13.0906 19.8979 12.5884V11.4111H21.101C21.5962 11.4111 22 11.0016 22 10.4995C22 9.99731 21.5962 9.58786 21.101 9.58786Z"
                                fill="currentColor"
                              ></path>
                              <path
                                d="M9.5 15.0156C5.45422 15.0156 2 15.6625 2 18.2467C2 20.83 5.4332 21.5001 9.5 21.5001C13.5448 21.5001 17 20.8533 17 18.269C17 15.6848 13.5668 15.0156 9.5 15.0156Z"
                                fill="currentColor"
                              ></path>
                              <path
                                opacity="0.4"
                                d="M9.50023 12.5542C12.2548 12.5542 14.4629 10.3177 14.4629 7.52761C14.4629 4.73754 12.2548 2.5 9.50023 2.5C6.74566 2.5 4.5376 4.73754 4.5376 7.52761C4.5376 10.3177 6.74566 12.5542 9.50023 12.5542Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex justify-content-center">
                    <div className="iq-newsfeed-img">
                      <Image
                        src={img6}
                        className="img-fluid avatar-48  rounded-circle"
                        alt="profile-image-1"
                      />
                    </div>
                    <div className="d-flex align-items-center  ms-2 justify-content-between  flex-grow-1">
                      <div>
                        <h5>Salman Shaha</h5>
                        <small className="text-ellipsis short-1">
                          Liked Your Photo
                        </small>
                      </div>
                      <div>
                        <Button variant="primary btn-icon btn-sm  rounded-pill">
                          <span className="btn-inner">
                            <svg
                              width="32"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.4"
                                d="M21.101 9.58786H19.8979V8.41162C19.8979 7.90945 19.4952 7.5 18.999 7.5C18.5038 7.5 18.1 7.90945 18.1 8.41162V9.58786H16.899C16.4027 9.58786 16 9.99731 16 10.4995C16 11.0016 16.4027 11.4111 16.899 11.4111H18.1V12.5884C18.1 13.0906 18.5038 13.5 18.999 13.5C19.4952 13.5 19.8979 13.0906 19.8979 12.5884V11.4111H21.101C21.5962 11.4111 22 11.0016 22 10.4995C22 9.99731 21.5962 9.58786 21.101 9.58786Z"
                                fill="currentColor"
                              ></path>
                              <path
                                d="M9.5 15.0156C5.45422 15.0156 2 15.6625 2 18.2467C2 20.83 5.4332 21.5001 9.5 21.5001C13.5448 21.5001 17 20.8533 17 18.269C17 15.6848 13.5668 15.0156 9.5 15.0156Z"
                                fill="currentColor"
                              ></path>
                              <path
                                opacity="0.4"
                                d="M9.50023 12.5542C12.2548 12.5542 14.4629 10.3177 14.4629 7.52761C14.4629 4.73754 12.2548 2.5 9.50023 2.5C6.74566 2.5 4.5376 4.73754 4.5376 7.52761C4.5376 10.3177 6.74566 12.5542 9.50023 12.5542Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-3">
                  <div className="d-flex justify-content-center">
                    <div className="iq-newsfeed-img">
                      <Image
                        src={img8}
                        className="img-fluid avatar-48  rounded-circle"
                        alt="profile-image-1"
                      />
                    </div>
                    <div className="d-flex align-items-center  ms-2 justify-content-between  flex-grow-1">
                      <div>
                        <h5>Afshin Rotni</h5>
                        <small className="text-ellipsis short-1">
                          Started Following You
                        </small>
                      </div>
                      <div>
                        <Button variant="primary btn-icon btn-sm  rounded-pill">
                          <span className="btn-inner">
                            <svg
                              width="32"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.4"
                                d="M21.101 9.58786H19.8979V8.41162C19.8979 7.90945 19.4952 7.5 18.999 7.5C18.5038 7.5 18.1 7.90945 18.1 8.41162V9.58786H16.899C16.4027 9.58786 16 9.99731 16 10.4995C16 11.0016 16.4027 11.4111 16.899 11.4111H18.1V12.5884C18.1 13.0906 18.5038 13.5 18.999 13.5C19.4952 13.5 19.8979 13.0906 19.8979 12.5884V11.4111H21.101C21.5962 11.4111 22 11.0016 22 10.4995C22 9.99731 21.5962 9.58786 21.101 9.58786Z"
                                fill="currentColor"
                              ></path>
                              <path
                                d="M9.5 15.0156C5.45422 15.0156 2 15.6625 2 18.2467C2 20.83 5.4332 21.5001 9.5 21.5001C13.5448 21.5001 17 20.8533 17 18.269C17 15.6848 13.5668 15.0156 9.5 15.0156Z"
                                fill="currentColor"
                              ></path>
                              <path
                                opacity="0.4"
                                d="M9.50023 12.5542C12.2548 12.5542 14.4629 10.3177 14.4629 7.52761C14.4629 4.73754 12.2548 2.5 9.50023 2.5C6.74566 2.5 4.5376 4.73754 4.5376 7.52761C4.5376 10.3177 6.74566 12.5542 9.50023 12.5542Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-center">
                    <div className="iq-newsfeed-img">
                      <Image
                        src={img9}
                        className="img-fluid avatar-48  rounded-circle"
                        alt="profile-image-1"
                      />
                    </div>
                    <div className="d-flex align-items-center  ms-2 justify-content-between  flex-grow-1">
                      <div>
                        <h5>MD Ali</h5>
                        <small className="text-ellipsis short-1">
                          Liked Your Photo
                        </small>
                      </div>
                      <div>
                        <Button variant="primary btn-icon btn-sm  rounded-pill">
                          <span className="btn-inner">
                            <svg
                              width="32"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.4"
                                d="M21.101 9.58786H19.8979V8.41162C19.8979 7.90945 19.4952 7.5 18.999 7.5C18.5038 7.5 18.1 7.90945 18.1 8.41162V9.58786H16.899C16.4027 9.58786 16 9.99731 16 10.4995C16 11.0016 16.4027 11.4111 16.899 11.4111H18.1V12.5884C18.1 13.0906 18.5038 13.5 18.999 13.5C19.4952 13.5 19.8979 13.0906 19.8979 12.5884V11.4111H21.101C21.5962 11.4111 22 11.0016 22 10.4995C22 9.99731 21.5962 9.58786 21.101 9.58786Z"
                                fill="currentColor"
                              ></path>
                              <path
                                d="M9.5 15.0156C5.45422 15.0156 2 15.6625 2 18.2467C2 20.83 5.4332 21.5001 9.5 21.5001C13.5448 21.5001 17 20.8533 17 18.269C17 15.6848 13.5668 15.0156 9.5 15.0156Z"
                                fill="currentColor"
                              ></path>
                              <path
                                opacity="0.4"
                                d="M9.50023 12.5542C12.2548 12.5542 14.4629 10.3177 14.4629 7.52761C14.4629 4.73754 12.2548 2.5 9.50023 2.5C6.74566 2.5 4.5376 4.73754 4.5376 7.52761C4.5376 10.3177 6.74566 12.5542 9.50023 12.5542Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});
Newsfeed.displayName = "Newsfeed";
export default Newsfeed;
