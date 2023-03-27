import { Fragment, memo } from "react";

//React-bootstrap
import { Button, Col, Image } from "react-bootstrap";

//Router
import { Link } from "react-router-dom";

//Components
import Card from "../../components/bootstrap/card";

import "./styles.scss";

const ProductCard = memo((props) => {
  return (
    <Fragment>
      <Col>
        <Card className="flex-row">
          <Card.Header className="rounded-0 rounded-start bg-soft-secondary p-0">
            <Link
              to={{
                pathname: `/womeyn/category/${props.id}/${props.itemsName}`,
              }}
            >
              <Image
                src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${props.images}`}
                className="image-style p-3"
                alt="wishlist-img"
              />
            </Link>
          </Card.Header>
          <Card.Body className="rounded-end iq-wishlist-card">
            <div className="d-flex justify-content-between mb-2">
              <Link to={`/womeyn/category/${props.id}/${props.itemsName}`}>
                <h5 className="mb-0 title">{props.itemsName}</h5>
              </Link>
            </div>
            <div className="d-flex align-self-end mt-5">
              <div className="d-flex gap-2">
                <Link
                  className="btn btn-primary btn-icon btn-sm rounded-pill"
                  role="button"
                >
                  <span className="btn-inner">
                    <span className="icon-edit"></span>
                  </span>
                </Link>
                <Button
                  className="btn btn-primary btn-icon btn-sm rounded-pill delete-btn"
                  type="button"
                  role="button"
                  onClick={props.onRemove}
                >
                  <span className="btn-inner">
                    <span
                      className="icon-delete"
                      onClick={props.onRemove}
                    ></span>
                  </span>
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
});

ProductCard.displayName = "ProductCard";
export default ProductCard;
