import { memo, Fragment } from "react";

//React-bootstrap
import { Image } from "react-bootstrap";

//Components
import Card from "../../components/bootstrap/card";

//Router
import { Link } from "react-router-dom";

const CategoryCard = memo((props) => {
  return (
    <Fragment>
      <Card className="1 iq-product-custom-card">
        <div className="iq-product-hover-img position-relative">
          <Link to="/e-commerce/product-details">
            <Image
              src={props.productImage}
              alt="product-details"
              className="img-fluid iq-product-img"
            />
          </Link>
        </div>
        <Card.Body>
          <div className="d-flex flex-column">
            <Link
              to="/e-commerce/product-details"
              className="h5 mb-0 iq-product-detail text-center"
            >
              {props.productName}
            </Link>
            {/* <span className="text-muted">{props.productPrice}</span> */}
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  );
});

CategoryCard.displayName = "CategoryCard";
export default CategoryCard;
