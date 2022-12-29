import { useEffect, useState, memo, Fragment } from "react";

// React-boostrap
import { Col, Row, Button, Nav, Tab } from "react-bootstrap";

// Sweetalert
import Swal from "sweetalert2";

// Services
import { getProductCategory } from "../../../services/category/categoryServices";

//Components
import ProductCard from "../../components/product-card";
import WishlistCard from "../../components/wishlistCard";

import { Link, useNavigate } from "react-router-dom";

// import img1 from "../../../../assets/modules/e-commerce/images/wishlist/1.png";

//Img
import img1 from "../../../assets/modules/e-commerce/images/wishlist/1.png";
import img2 from "../../../assets/modules/e-commerce/images/wishlist/2.png";
import img3 from "../../../assets/modules/e-commerce/images/wishlist/3.png";
import img4 from "../../../assets/modules/e-commerce/images/wishlist/4.png";
import img5 from "../../../assets/modules/e-commerce/images/wishlist/5.png";
import img6 from "../../../assets/modules/e-commerce/images/wishlist/6.png";
import img7 from "../../../assets/modules/e-commerce/images/wishlist/7.png";
import img8 from "../../../assets/modules/e-commerce/images/wishlist/8.png";
import img9 from "../../../assets/modules/e-commerce/images/wishlist/9.png";

const ProductPage = memo(() => {
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProductCategory()
      .then((res) => {
        console.log("res", res?.data.results);
        setProductList(res?.data?.results);
      })
      .catch((err) => console.log(err));
  }, []);

  // const handleRemove = (index) => {
  //   Swal.fire({
  //     icon: "error",
  //     title: "Are you sure?",
  //     text: "You want to delete this item",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       setProductList(() =>
  //         productList.filter((item, productIndex) => index !== productIndex)
  //       );
  //       Swal.fire("Deleted!", "Your file has been deleted.", "success");
  //     }
  //   });
  // };

  // }

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
      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 mt-4 ">
        {productList.map((item, index) => {
          return (
            <ProductCard
              key={index}
              images={item.imageName}
              itemsName={item.name}
              // onClick={() => navigate("/womeyn/product-category")}
              id={item.id}
            />
          );
        })}
      </Row>
    </Fragment>
  );
});

ProductPage.displayName = "ProductPage";
export default ProductPage;
