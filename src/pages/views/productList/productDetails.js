import { Fragment, memo, useEffect, useState } from "react";
import {
  Button,
  Col,
  Form,
  Image,
  Nav,
  Row,
  Tab,
  Table,
} from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { FreeMode, Mousewheel, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../../../components/bootstrap/card";
import Loader from "../../../components/Loader";
import { ProductDetailsServices } from "../../../services/list/listServices";

const ProductDetails = memo(() => {
  const { id } = useParams();
  const [single, setSingle] = useState();
  const history = useNavigate();

  useEffect(() => {
    ProductDetailsServices(id)
      .then((res) => {
        console.log(res?.data, "kalaiproduct");
        setSingle(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  function Sweetalert() {
    Swal.fire({
      icon: "success",
      title: "Added!",
      text: "Your item has been Added to the cart.",
    });
  }

  if (!single) {
    return <Loader />;
  }

  console.log("single", single);

  return (
    <Fragment>
      <Row>
        <Card>
          <Card.Body>
            <Row>
              <Col lg="7">
                <div className="product-vertical-slider">
                  <div className="slider__flex">
                    <div className="slider__col">
                      <div className="slider__thumbs">
                        <Swiper
                          className="iq-swiper swiper-container gallery-top text-end"
                          direction={"vertical"}
                          onSwiper={setThumbsSwiper}
                          slidesPerView={3}
                          spaceBetween={20}
                          freeMode={true}
                          watchSlidesProgress={true}
                          modules={[FreeMode, Thumbs]}
                          loop={true}
                        >
                          {single?.productImages.map((e) => {
                            return (
                              <>
                                <SwiperSlide>
                                  <div className="slider__image">
                                    <Image
                                      alt="product-15"
                                      src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${e?.name}`}
                                      style={{ objectFit: "cover" }}
                                    />
                                  </div>
                                </SwiperSlide>
                              </>
                            );
                          })}
                        </Swiper>
                      </div>
                    </div>
                    <div className="slider__images">
                      <Swiper
                        className="swiper-container gallery-thumbs"
                        direction={"vertical"}
                        spaceBetween={10}
                        thumbs={{
                          swiper:
                            thumbsSwiper && !thumbsSwiper.destroyed
                              ? thumbsSwiper
                              : null,
                        }}
                        mousewheel={true}
                        modules={[FreeMode, Thumbs, Mousewheel]}
                        loop={true}
                      >
                        {single?.productImages.map((e) => {
                          return (
                            <>
                              <SwiperSlide>
                                <div className="slider__image">
                                  <Image
                                    alt="product-15"
                                    src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${e?.name}`}
                                    style={{ objectFit: "cover" }}
                                  />
                                </div>
                              </SwiperSlide>
                            </>
                          );
                        })}
                      </Swiper>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg="5">
                <div className="border-bottoms">
                  <div className="d-flex flex-column justify-items-start mb-3">
                    <div className="d-flex justify-content-between mb-2">
                      <h1 className="mb-0 fs-1">{single?.productName}</h1>
                      <div className="d-flex justify-content-end "></div>
                    </div>
                    <div className=" d-flex align-items-center w-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z"
                          fill="#FFD329"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z"
                          fill="#FFD329"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z"
                          fill="#FFD329"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z"
                          fill="#FFD329"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z"
                          fill="#FFD329"
                        ></path>
                      </svg>
                      <h6 className="ms-2 mb-0">5.0</h6>
                    </div>
                  </div>
                  <div className="d-flex my-4">
                    <h4 className="mb-0"> Price:</h4>
                    <h4 className="text-primary mb-0 ms-2">
                      ${single?.salePrice}
                    </h4>
                  </div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Tab.Container defaultActiveKey="first">
              <Nav className="tab-bottom-bordered">
                <div className="mb-0 nav nav-tabs" id="nav-tab1" role="tablist">
                  <Nav.Link
                    eventKey="first"
                    id="nav-description-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-description"
                    type="button"
                    role="tab"
                    aria-controls="nav-description"
                    aria-selected="true"
                  >
                    Description
                  </Nav.Link>
                  <Nav.Link
                    id="nav-info-tab"
                    eventKey="second"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-info"
                    type="button"
                    role="tab"
                    aria-controls="nav-info"
                    aria-selected="false"
                  >
                    Info
                  </Nav.Link>
                  <Nav.Link
                    id="nav-review-tab"
                    eventKey="thired"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-review"
                    type="button"
                    role="tab"
                    aria-controls="nav-review"
                    aria-selected="false"
                  >
                    Reviews(2)
                  </Nav.Link>
                </div>
              </Nav>
              <Tab.Content className="mt-4 iq-tab-fade-up" id="nav-tabContent">
                <Tab.Pane
                  eventKey="first"
                  id="nav-description"
                  role="tabpanel"
                  aria-labelledby="nav-description-tab"
                >
                  <div className="d-flex flex-column">
                    <p>{single?.productDescription}</p>
                  </div>
                </Tab.Pane>
                <Tab.Pane
                  eventKey="second"
                  id="nav-info"
                  role="tabpanel"
                  aria-labelledby="nav-info-tab"
                >
                  <Table bordered className="mb-0">
                    <tbody>
                      <tr>
                        <th>Brand Name</th>
                        <td>{single?.brandName}</td>
                      </tr>
                      <tr>
                        <th>Modal Name</th>
                        <td>{single?.modelName}</td>
                      </tr>
                      <tr>
                        <th>Style Name</th>
                        <td>{single?.styleName}</td>
                      </tr>
                      <tr>
                        <th>Manufacture's Name</th>
                        <td>{single?.manufacturerName}</td>
                      </tr>
                      <tr>
                        <th>Quantity</th>
                        <td>{single?.quantityLeft}</td>
                      </tr>
                      <tr>
                        <th>Actual Price</th>
                        <td>{single?.actualPrice}</td>
                      </tr>
                      <tr>
                        <th>Offer Percentage</th>
                        <td>{single?.offerPercentag} %</td>
                      </tr>
                      <tr>
                        <th>Selling Price</th>
                        <td>{single?.salePrice}</td>
                      </tr>
                      <tr>
                        <th>Target Gender</th>
                        <td>
                          {single?.targetGender === "1"
                            ? "Male"
                            : single?.targetGender === "2"
                            ? "Female"
                            : single?.targetGender === "3"
                            ? "All"
                            : null}
                        </td>
                      </tr>
                      <tr>
                        <th>Is Shipping Required</th>
                        <td>
                          {single?.isShippingRequired === 1
                            ? "Myself"
                            : single?.isShippingRequired === 2
                            ? "Womeyn"
                            : null}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Tab.Pane>
                <Tab.Pane
                  eventKey="thired"
                  id="nav-review"
                  role="tabpanel"
                  aria-labelledby="nav-review-tab"
                >
                  <h2 className="mb-0 border-bottom pb-3">Review</h2>
                  <div>
                    <Card className="shadow-none bg-transparent border">
                      <Card.Body>
                        <div className="d-flex flex-sm-nowrap flex-wrap">
                          <div>
                            <Image
                              className="img-fluid object-contain avatar-120 rounded"
                              src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${single?.productThumbImage}`}
                              alt="01"
                              loading="lazy"
                            />
                          </div>
                          <div className="ms-0 ms-sm-3">
                            <div className="d-flex justify-content-between align-items-center my-2 my-lg-0">
                              <h6 className="mb-0">Emma Jones</h6>
                              <Link className="text-dark " to="#">
                                Reply
                              </Link>
                            </div>
                            <small className="text-secondary">
                              March 01st 2021
                            </small>
                            <p className="mt-2 mb-0 text-secondary">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Aliquam ut eu morbi tincidunt erat egestas
                              quisque ultrices ut. Vel elementum blandit et
                              tellus sit tincidunt.
                            </p>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                    <Card className="shadow-none bg-transparent border">
                      <Card.Body>
                        <div className="d-flex flex-sm-nowrap flex-wrap">
                          <div>
                            <Image
                              className="img-fluid object-contain avatar-120 rounded"
                              src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${single?.productThumbImage}`}
                              alt="01"
                              loading="lazy"
                            />
                          </div>
                          <div className="ms-0 ms-sm-3">
                            <div className="d-flex justify-content-between align-items-center my-2 my-lg-0">
                              <h6 className="mb-0">Jackson Jones</h6>
                              <Link className="text-dark " to="#">
                                Reply
                              </Link>
                            </div>
                            <small className="text-secondary">
                              March 20th 2021
                            </small>
                            <p className="mt-3 text-secondary">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Aliquam ut eu morbi tincidunt erat egestas
                              quisque ultrices ut. Vel elementum blandit et
                              tellus sit tincidunt.
                            </p>
                            <div className="d-flex mb-3">
                              <Link className="text-secondary" to="#">
                                Reply To Jackson Jones
                              </Link>
                              <Link className="text-body ms-3" to="#">
                                Cancel Reply
                              </Link>
                            </div>
                            <Col lg="12">
                              <div className="form-group ">
                                <Form.Control
                                  type="text"
                                  placeholder=" Hi there, I love your blog "
                                />
                              </div>
                            </Col>
                            <div className="d-flex">
                              <Button type="submit" className="primary rounded">
                                Get Started
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Card.Body>
        </Card>
        <Col lg="12" md="12">
          <Row className="row-cols-1">
            <div
              className="overflow-hidden slider-circle-btn"
              id="ecommerce-slider"
            >
              <Swiper
                className="p-0 m-0 mb-4 swiper-wrapper list-inline"
                slidesPerView={3}
                spaceBetween={32}
                modules={[Navigation]}
                navigation={{
                  nextEl: "#swiper-button-next1",
                  prevEl: "#swiper-button-prev1",
                }}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  550: { slidesPerView: 2 },
                  991: { slidesPerView: 3 },
                  1400: { slidesPerView: 3 },
                  1500: { slidesPerView: 3 },
                  1920: { slidesPerView: 4 },
                  2040: { slidesPerView: 4 },
                  2440: { slidesPerView: 4 },
                }}
              ></Swiper>
              <div
                id="swiper-button-next1"
                className="swiper-button swiper-button-next"
              ></div>
              <div
                id="swiper-button-prev1"
                className="swiper-button swiper-button-prev"
              ></div>
            </div>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
});
ProductDetails.displayName = "ProductDetails";
export default ProductDetails;
