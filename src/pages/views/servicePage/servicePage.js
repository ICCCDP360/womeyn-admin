import { useState, memo, Fragment, useEffect } from "react";

// React-boostrap
import { Button, Row } from "react-bootstrap";

// Sweetalert
import Swal from "sweetalert2";

//Components
import ProductCard from "../../components/product-card";

// Services
import { getServiceCategory } from "../../../services/category/categoryServices";

import { Link } from "react-router-dom";

const ServicePage = memo(() => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getServiceCategory()
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
        <h4 className="mb-0">Service Categories</h4>
        <Link
          className="nav-link "
          aria-current="page"
          to="/womeyn/service-add"
        >
          <Button style={{ marginBottom: 10 }}>+ Add a New Service</Button>
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
              id={item.id}
            />
          );
        })}
      </Row>
    </Fragment>
  );
});

ServicePage.displayName = "ServicePage";
export default ServicePage;
