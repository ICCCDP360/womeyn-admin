import { useState, memo, Fragment } from "react";

// React-boostrap
import { Col, Row, Button, Nav, Tab } from "react-bootstrap";

// Sweetalert
import Swal from "sweetalert2";

//Components
import CategoryCard from "../../components/category-card";
//Img
// import img1 from "../../../assets/modules/e-commerce/images/wishlist/1.png";
// import img2 from "../../../assets/modules/e-commerce/images/wishlist/2.png";
// import img3 from "../../../assets/modules/e-commerce/images/wishlist/3.png";
// import img4 from "../../../assets/modules/e-commerce/images/wishlist/4.png";
// import img5 from "../../../assets/modules/e-commerce/images/wishlist/5.png";
// import img6 from "../../../assets/modules/e-commerce/images/wishlist/6.png";
// import img7 from "../../../assets/modules/e-commerce/images/wishlist/7.png";
// import img8 from "../../../assets/modules/e-commerce/images/wishlist/8.png";
// import img9 from "../../../assets/modules/e-commerce/images/wishlist/9.png";
// import { Link } from "react-router-dom";

//Img
import img1 from "../../../assets/modules/e-commerce/images/01.png";
import img2 from "../../../assets/modules/e-commerce/images/02.png";
import img3 from "../../../assets/modules/e-commerce/images/03.png";
import img4 from "../../../assets/modules/e-commerce/images/04.png";
import img5 from "../../../assets/modules/e-commerce/images/05.png";
import img6 from "../../../assets/modules/e-commerce/images/06.png";
import img7 from "../../../assets/modules/e-commerce/images/08.png";

const ProductPage = memo(() => {
  // const [productList, setProductList] = useState([
  //   {
  //     image: img4,
  //     name: "Headphones",
  //     rating: "4.5",
  //     price: "$56.00",
  //     offer: "15% Off",
  //     like: "412",
  //   },
  //   {
  //     image: img6,
  //     name: "Jacket",
  //     rating: "3.5",
  //     price: "$80.00",
  //     offer: "10% Off",
  //     like: "865",
  //   },
  //   {
  //     image: img5,
  //     name: "Leather Bag",
  //     rating: "4.2",
  //     price: "$10.00",
  //     offer: "50% Off",
  //     like: "384",
  //   },
  //   {
  //     image: img8,
  //     name: "Sweatshirt",
  //     rating: "4.5",
  //     price: "$56.00",
  //     offer: "15% Off",
  //     like: "412",
  //   },
  //   {
  //     image: img1,
  //     name: "Hand Bag",
  //     rating: "3.5",
  //     price: "$80.00",
  //     offer: "10% Off",
  //     like: "865",
  //   },
  //   {
  //     image: img3,
  //     name: "Pencil Heels",
  //     rating: "4.2",
  //     price: "$10.00",
  //     offer: "50% Off",
  //     like: "384",
  //   },
  //   {
  //     image: img2,
  //     name: "Casual Shoe",
  //     rating: "4.5",
  //     price: "$56.00",
  //     offer: "15% Off",
  //     like: "412",
  //   },
  //   {
  //     image: img9,
  //     name: "Blue Shrug",
  //     rating: "3.5",
  //     price: "$80.00 ",
  //     offer: "10% Off",
  //     like: "865",
  //   },
  //   {
  //     image: img7,
  //     name: "Fancy Bag",
  //     rating: "3.5",
  //     price: "$10.00",
  //     offer: "50% Off",
  //     like: "384",
  //   },
  // ]);
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
  return (
    // <Fragment>
    //   <div className="d-flex flex-row justify-content-between">
    //     <h4 className="mb-0">Category</h4>
    //     <Link
    //       className="nav-link "
    //       aria-current="page"
    //       to="/womeyn/product-add"
    //     >
    //       <Button style={{ marginBottom: 10 }}>+ Add a New Category</Button>
    //     </Link>
    //   </div>
    //   <Row className="row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 mt-4 ">
    //     {productList.map((item, index) => {
    //       return (
    //         <CategoryCard
    //           key={index}
    //           onRemove={() => handleRemove(index)}
    //           images={item.image}
    //           itemsName={item.name}
    //           ratings={item.rating}
    //           productPrice={item.price}
    //           productOffer={item.offer}
    //           productLiked={item.like}
    //         />
    //       );
    //     })}
    //   </Row>
    // </Fragment>
    <Fragment>
      <div className=" mb-4">
        <div>
          <h4 className="mb-0">Category</h4>
        </div>
        <div className="iq-categories-list">
          <Tab.Container defaultActiveKey="first">
            <Nav
              as="ul"
              className="iq-nav-category mt-3 mb-3 justify-content-start bg-transparent"
              id="pills-tab"
              role="tablist"
            >
              <Nav.Item as="li" className="me-3" role="presentation">
                <Nav.Link
                  eventKey="first"
                  href="#"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-no-1"
                  role="tab"
                  aria-controls="pills-no-1"
                  aria-selected="true"
                >
                  All
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="me-3" role="presentation">
                <Nav.Link
                  eventKey="second"
                  href="#"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-no-2"
                  role="tab"
                  aria-controls="pills-no-2"
                  aria-selected="false"
                >
                  Popular
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="me-3" role="presentation">
                <Nav.Link
                  eventKey="third"
                  href="#"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-no-3"
                  role="tab"
                  aria-controls="pills-no-3"
                  aria-selected="false"
                >
                  Latest
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="iq-tab-fade-up mt-3" id="pills-tabContent">
              <Tab.Pane
                eventKey="first"
                role="tabpanel"
                aria-labelledby="pills-no-1"
              >
                <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 mt-4">
                  <Col>
                    <CategoryCard
                      productName="Casual Shoes"
                      productImage={img1}
                      productPrice="Qty: 5458"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Biker’s Jacket"
                      productImage={img2}
                      productPrice="Qty: 6542"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Knitted Shrug"
                      productImage={img3}
                      productPrice="Qty: 3265"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Blue Handbag"
                      productImage={img4}
                      productPrice="Qty: 1546"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Black Sweatshirt"
                      productImage={img3}
                      productPrice="Qty: 3265"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Pink Handbag"
                      productImage={img6}
                      productPrice="Qty: 365"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Pink Sweater"
                      productImage={img5}
                      productPrice="Qty: 500"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Brown Hand Bag"
                      productImage={img7}
                      productPrice="Qty: 4623"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Brown Hand Bag"
                      productImage={img7}
                      productPrice="Qty: 4623"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Pink Sweater"
                      productImage={img5}
                      productPrice="Qty: 500"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Casual Shoes"
                      productImage={img1}
                      productPrice="Qty: 5458"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Black Sweatshirt"
                      productImage={img3}
                      productPrice="Qty: 3265"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Biker’s Jacket"
                      productImage={img2}
                      productPrice="Qty: 6542"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Pink Handbag"
                      productImage={img6}
                      productPrice="Qty: 365"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Blue Handbag"
                      productImage={img4}
                      productPrice="Qty: 1546"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Brown Hand Bag"
                      productImage={img7}
                      productPrice="Qty: 4623"
                    />
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane
                eventKey="second"
                role="tabpanel"
                aria-labelledby="pills-no-2"
              >
                <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 mt-4">
                  <Col>
                    <CategoryCard
                      productName="Casual Shoes"
                      productImage={img1}
                      productPrice="Qty: 5458"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Biker’s Jacket"
                      productImage={img2}
                      productPrice="Qty: 6542"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Knitted Shrug"
                      productImage={img3}
                      productPrice="Qty: 3265"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Blue Handbag"
                      productImage={img4}
                      productPrice="Qty: 1546"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Black Sweatshirt"
                      productImage={img3}
                      productPrice="Qty: 3265"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Pink Handbag"
                      productImage={img6}
                      productPrice="Qty: 365"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Pink Sweater"
                      productImage={img5}
                      productPrice="Qty: 500"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Brown Hand Bag"
                      productImage={img7}
                      productPrice="Qty: 4623"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Brown Hand Bag"
                      productImage={img7}
                      productPrice="Qty: 4623"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Pink Sweater"
                      productImage={img5}
                      productPrice="Qty: 500"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Casual Shoes"
                      productImage={img1}
                      productPrice="Qty: 5458"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Black Sweatshirt"
                      productImage={img3}
                      productPrice="Qty: 3265"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Biker’s Jacket"
                      productImage={img2}
                      productPrice="Qty: 6542"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Pink Handbag"
                      productImage={img6}
                      productPrice="Qty: 365"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Blue Handbag"
                      productImage={img4}
                      productPrice="Qty: 1546"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Brown Hand Bag"
                      productImage={img7}
                      productPrice="Qty: 4623"
                    />
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane
                eventKey="third"
                role="tabpanel"
                aria-labelledby="pills-no-3"
              >
                <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 mt-4">
                  <Col>
                    <CategoryCard
                      productName="Casual Shoes"
                      productImage={img1}
                      productPrice="Qty: 5458"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Biker’s Jacket"
                      productImage={img2}
                      productPrice="Qty: 6542"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Knitted Shrug"
                      productImage={img3}
                      productPrice="Qty: 3265"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Blue Handbag"
                      productImage={img4}
                      productPrice="Qty: 1546"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Black Sweatshirt"
                      productImage={img3}
                      productPrice="Qty: 3265"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Pink Handbag"
                      productImage={img6}
                      productPrice="Qty: 365"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Pink Sweater"
                      productImage={img5}
                      productPrice="Qty: 500"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Brown Hand Bag"
                      productImage={img7}
                      productPrice="Qty: 4623"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Brown Hand Bag"
                      productImage={img7}
                      productPrice="Qty: 4623"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Pink Sweater"
                      productImage={img5}
                      productPrice="Qty: 500"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Casual Shoes"
                      productImage={img1}
                      productPrice="Qty: 5458"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Black Sweatshirt"
                      productImage={img3}
                      productPrice="Qty: 3265"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Biker’s Jacket"
                      productImage={img2}
                      productPrice="Qty: 6542"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Pink Handbag"
                      productImage={img6}
                      productPrice="Qty: 365"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Blue Handbag"
                      productImage={img4}
                      productPrice="Qty: 1546"
                    />
                  </Col>
                  <Col>
                    <CategoryCard
                      productName="Brown Hand Bag"
                      productImage={img7}
                      productPrice="Qty: 4623"
                    />
                  </Col>
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>

        {/* <div className="text-center">
          <Button className="btn btn-primary">Load More</Button>
        </div> */}
      </div>
    </Fragment>
  );
});

ProductPage.displayName = "ProductPage";
export default ProductPage;
