import { useEffect, useState, memo, Fragment } from "react";

// React-boostrap
import { Col, Row, Button, Nav, Tab } from "react-bootstrap";

// Sweetalert
import Swal from "sweetalert2";

// Services
import { getProductCategory } from "../../../services/category/categoryServices";

//Components
import ProductCard from "../../components/product-card";

import { Link } from "react-router-dom";

const ProductPage = memo(() => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProductCategory()
      .then((res) => {
        console.log("res", res?.data.results);
        setProductList(res?.data?.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleRemove = (index) => {
    Swal.fire({
      icon: "error",
      title: "Are you sure?",
      text: "You want to delete this item",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setProductList(() =>
          productList.filter((item, productIndex) => index !== productIndex)
        );
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <Fragment>
      <div className="d-flex flex-row justify-content-between">
        <h4 className="mb-0">Product Categories</h4>
        <Link
          className="nav-link "
          aria-current="page"
          to="/womeyn/product-add"
        >
          <Button style={{ marginBottom: 10 }}>+ Add a New Product</Button>
        </Link>
      </div>
      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 mt-4 ">
        {productList.map((item, index) => {
          return (
            <ProductCard
              key={index}
              // onRemove={() => handleRemove(index)}
              images={item.imageName}
              itemsName={item.name}
              // productLiked={item.like}
            />
          );
        })}
      </Row>
    </Fragment>
  );
});

ProductPage.displayName = "ProductPage";
export default ProductPage;
