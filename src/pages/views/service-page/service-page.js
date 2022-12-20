import { useState, memo, Fragment } from "react";

// React-boostrap
import { Button, Row } from "react-bootstrap";

// Sweetalert
import Swal from "sweetalert2";

//Components
import ProductCard from "../../components/product-card";
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
import { Link } from "react-router-dom";

const ServicePage = memo(() => {
  const [productList, setProductList] = useState([
    {
      image: img4,
      name: "Headphones",
      rating: "4.5",
      price: "$56.00",
      offer: "15% Off",
      like: "412",
    },
    {
      image: img6,
      name: "Jacket",
      rating: "3.5",
      price: "$80.00",
      offer: "10% Off",
      like: "865",
    },
    {
      image: img5,
      name: "Leather Bag",
      rating: "4.2",
      price: "$10.00",
      offer: "50% Off",
      like: "384",
    },
    {
      image: img8,
      name: "Sweatshirt",
      rating: "4.5",
      price: "$56.00",
      offer: "15% Off",
      like: "412",
    },
    {
      image: img1,
      name: "Hand Bag",
      rating: "3.5",
      price: "$80.00",
      offer: "10% Off",
      like: "865",
    },
    {
      image: img3,
      name: "Pencil Heels",
      rating: "4.2",
      price: "$10.00",
      offer: "50% Off",
      like: "384",
    },
    {
      image: img2,
      name: "Casual Shoe",
      rating: "4.5",
      price: "$56.00",
      offer: "15% Off",
      like: "412",
    },
    {
      image: img9,
      name: "Blue Shrug",
      rating: "3.5",
      price: "$80.00 ",
      offer: "10% Off",
      like: "865",
    },
    {
      image: img7,
      name: "Fancy Bag",
      rating: "3.5",
      price: "$10.00",
      offer: "50% Off",
      like: "384",
    },
  ]);
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
        <h4 className="mb-0">Service</h4>
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
              onRemove={() => handleRemove(index)}
              images={item.image}
              itemsName={item.name}
              ratings={item.rating}
              productPrice={item.price}
              productOffer={item.offer}
              productLiked={item.like}
            />
          );
        })}
      </Row>
    </Fragment>
  );
});

ServicePage.displayName = "ServicePage";
export default ServicePage;
