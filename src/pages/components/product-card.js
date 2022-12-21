import { memo, Fragment } from "react";

//React-bootstrap
import { Col, Button, Image } from "react-bootstrap";

//Router
import { Link } from "react-router-dom";

//Components
import Card from "../../components/bootstrap/card";
import ShareOffcanvas from "../../components/partials/components/shareoffcanvas";

const ProductCard = memo((props) => {
  return (
    <Fragment>
      <Col>
        <Card className="flex-row">
          <Card.Header className="rounded-0 rounded-start bg-soft-secondary p-0">
            <Image
              src={props.images}
              className="img-fluid h-100 p-3"
              alt="wishlist-img"
            />
          </Card.Header>
          <Card.Body className="rounded-end iq-wishlist-card">
            <div className="d-flex justify-content-between mb-2">
              <h5 className="mb-0">{props.itemsName}</h5>
              <div className="d-flex align-items-center">
                {/* <svg
                  width="18"
                  className="me-2"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.1043 0.677006L11.9317 4.32776C12.1108 4.68616 12.4565 4.93467 12.8573 4.99218L16.9453 5.58062C17.9554 5.72644 18.3573 6.95054 17.6263 7.65194L14.6702 10.4924C14.3797 10.7718 14.2474 11.1733 14.3162 11.5676L15.0138 15.5778C15.1856 16.5698 14.1298 17.3267 13.227 16.8574L9.57321 14.9627C9.21502 14.7768 8.78602 14.7768 8.42679 14.9627L4.773 16.8574C3.87023 17.3267 2.81439 16.5698 2.98724 15.5778L3.68385 11.5676C3.75257 11.1733 3.62033 10.7718 3.32982 10.4924L0.37368 7.65194C-0.357285 6.95054 0.0446417 5.72644 1.05466 5.58062L5.14265 4.99218C5.54354 4.93467 5.89028 4.68616 6.06937 4.32776L7.89574 0.677006C8.34765 -0.225669 9.65235 -0.225669 10.1043 0.677006Z"
                    fill="#FFD329"
                  />
                </svg> */}
                <p className="mb-0">({props.productLiked})</p>
                {/* <span className="text-primary">{props.ratings}</span> */}
              </div>
            </div>
            <div className="d-flex justify-content-between mb-4">
              {/* <p className="mb-0">
                {props.productPrice}
                <small className="text-success"> {props.productOffer}</small>
              </p>
              <p className="mb-0">({props.productLiked})</p> */}
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex gap-2 p-2">
                <Link
                  className="btn btn-primary btn-icon btn-sm rounded-pill"
                  to="/e-commerce/order-process"
                  role="button"
                >
                  <span className="btn-inner">
                    <svg
                      width="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
                        fill="currentColor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </Link>
                <Button
                  className="btn btn-primary btn-icon btn-sm rounded-pill delete-btn"
                  type="button"
                  role="button"
                  onClick={props.onRemove}
                >
                  <span className="btn-inner">
                    <svg
                      width="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M19.643 9.48851C19.643 9.5565 19.11 16.2973 18.8056 19.1342C18.615 20.8751 17.4927 21.9311 15.8092 21.9611C14.5157 21.9901 13.2494 22.0001 12.0036 22.0001C10.6809 22.0001 9.38741 21.9901 8.13185 21.9611C6.50477 21.9221 5.38147 20.8451 5.20057 19.1342C4.88741 16.2873 4.36418 9.5565 4.35445 9.48851C4.34473 9.28351 4.41086 9.08852 4.54507 8.93053C4.67734 8.78453 4.86796 8.69653 5.06831 8.69653H18.9388C19.1382 8.69653 19.3191 8.78453 19.4621 8.93053C19.5953 9.08852 19.6624 9.28351 19.643 9.48851Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M21 5.97686C21 5.56588 20.6761 5.24389 20.2871 5.24389H17.3714C16.7781 5.24389 16.2627 4.8219 16.1304 4.22692L15.967 3.49795C15.7385 2.61698 14.9498 2 14.0647 2H9.93624C9.0415 2 8.26054 2.61698 8.02323 3.54595L7.87054 4.22792C7.7373 4.8219 7.22185 5.24389 6.62957 5.24389H3.71385C3.32386 5.24389 3 5.56588 3 5.97686V6.35685C3 6.75783 3.32386 7.08982 3.71385 7.08982H20.2871C20.6761 7.08982 21 6.75783 21 6.35685V5.97686Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </Button>
              </div>
              {/* <ShareOffcanvas share="3" /> */}
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
});

ProductCard.displayName = "ProductCard";
export default ProductCard;
