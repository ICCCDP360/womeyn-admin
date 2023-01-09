import { useState, useEffect, memo, Fragment } from "react";
import { Table, Nav, Tab, Button } from "react-bootstrap";
import Card from "../../../components/bootstrap/card";
import { useSelector } from "react-redux";
import * as SettingSelector from "../../../store/setting/selectors";
import { Link, useNavigate } from "react-router-dom";
import { getSellerServices } from "../../../services/seller/sellerServices";
import { Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";
//img
import img1 from "../../../assets/images/earth_souls.png";
import img2 from "../../../assets/images/earth_souls.png";
import img3 from "../../../assets/images/earth_souls.png";
import img4 from "../../../assets/images/earth_souls.png";
import img5 from "../../../assets/images/earth_souls.png";
import img6 from "../../../assets/images/earth_souls.png";
import img7 from "../../../assets/images/earth_souls.png";
import img8 from "../../../assets/images/earth_souls.png";
import img9 from "../../../assets/images/earth_souls.png";
import Loader from "../../../components/Loader";
import { sellerApprovalServices } from "../../../services/seller/sellerServices";

let description =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

const options = [
  { value: "Services/Products", label: "Services/Products" },
  { value: "Products", label: "Products" },
  { value: "Services", label: "Services" },
];

const SellerApproval = memo((props) => {
  useSelector(SettingSelector.theme_color);
  const navigate = useNavigate();
  const add = (
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
  );

  const edit = (
    <svg
      width="32"
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
  );

  const remove = (
    <svg
      width="32"
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
  );
  const [show, setShow] = useState(false);

  const [userId, setUserId] = useState("");

  const [selectedOption, setSelectedOption] = useState("Services/Products");

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption.value);
    console.log("selectedOption", selectedOption.value);
  };

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setUserId(id);
    setShow(true);
  };

  const [sellers, setSellers] = useState([]);
  const [sellerLimit, setSellerLimit] = useState(10);
  const [loading, setLoading] = useState(false);
  const actionReject = () => {
    setLoading(true);

    const data = {
      stateId: "4",
    };
    sellerApprovalServices(userId, data)
      .then((res) => {
        setLoading(false);

        handleClose();
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };
  const actionApprove = (item) => {
    const data = {
      stateId: "1",
    };
    sellerApprovalServices(item?.id, data)
      .then((res) => {
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getSellerServices()
      .then((res) => {
        setSellers(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const loadMoreSellers = () => {
    setSellerLimit(sellerLimit + 10);
  };

  const handleSelect = () => {
    navigate(`/womeyn/seller-profile`);
  };

  const table = [
    {
      img: img1,
      name: "Earthy Souls",
      email: "@shefali.malik@earthysouls",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      contact: "musk.e@mail.com",
      countryname: "USA",
      actionadd: add,
      actionedit: edit,
      actionremove: remove,
    },
    {
      img: img2,
      name: "Earthy Souls",
      email: "@shefali.malik@earthysouls",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      contact: "mclark@mail.com",
      countryname: "SPN",
      actionadd: add,
      actionedit: edit,
      actionremove: remove,
    },
    {
      img: img3,
      name: "Earthy Souls",
      email: "@shefali.malik@earthysouls",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      contact: "mist.e@mail.com",
      countryname: "UAE",
      actionadd: add,
      actionedit: edit,
      actionremove: remove,
    },
    {
      img: img4,
      name: "Earthy Souls",
      email: "@shefali.malik@earthysouls",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      contact: "c.mark@mail.com",
      countryname: " JPN",
      actionadd: add,
      actionedit: edit,
      actionremove: remove,
    },
    {
      img: img5,
      name: "Earthy Souls",
      email: "@shefali.malik@earthysouls",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      contact: "dennis.e@mail.com",
      countryname: "IND",
      actionadd: add,
      actionedit: edit,
      actionremove: remove,
    },
    {
      img: img6,
      name: "Earthy Souls",
      email: "@shefali.malik@earthysouls",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      contact: "musk.e@mail.com",
      countryname: "GRC",
      actionadd: add,
      actionedit: edit,
      actionremove: remove,
    },
    {
      img: img7,
      name: "Earthy Souls",
      email: "@shefali.malik@earthysouls",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      contact: "musk.e@mail.com",
      countryname: "GRC",
      actionadd: add,
      actionedit: edit,
      actionremove: remove,
    },
    {
      img: img8,
      name: "Earthy Souls",
      email: "@shefali.malik@earthysouls",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      contact: "mason.j@mail.com",
      countryname: "ITL",
      actionadd: add,
      actionedit: edit,
      actionremove: remove,
    },
    {
      img: img9,
      name: "Earthy Souls",
      email: "@shefali.malik@earthysouls",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      contact: "park.e@mail.com",
      countryname: "GER",
      actionadd: add,
      actionedit: edit,
      actionremove: remove,
    },
  ];

  if (!sellers) {
    return <Loader />;
  }

  return (
    <Fragment>
      <div className="d-flex flex-row justify-content-between">
        <h3>Approvals</h3>
        <div>
          <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
          />
        </div>
      </div>
      <div>
        <Card>
          <Card.Body>
            <div>
              <Tab.Container defaultActiveKey="1">
                <Nav className="tab-bottom-bordered">
                  <div
                    className="mb-0 nav nav-tabs"
                    id="nav-tab1"
                    role="tablist"
                  >
                    <Nav.Link
                      eventKey="1"
                      id="nav-admin"
                      data-bs-target="#tab-admin"
                      aria-controls="pills-admin"
                      data-bs-toggle="tab"
                      type="button"
                      role="tab"
                      aria-selected="true"
                    >
                      <span className="iq-mail-section">New Registrations</span>
                    </Nav.Link>
                    <Nav.Link
                      eventKey="2"
                      id="nav-sellers"
                      data-bs-target="#tab-sellers"
                      aria-controls="pills-sellers"
                      data-bs-toggle="tab"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      <span className="iq-mail-section">Content Update</span>
                    </Nav.Link>
                  </div>
                </Nav>

                {selectedOption === "Services/Products" ? (
                  <Tab.Content
                    className="mt-4 iq-tab-fade-up"
                    id="nav-tabContent"
                  >
                    <Tab.Pane
                      eventKey="1"
                      id="nav-admin"
                      role="tab"
                      aria-labelledby="nav-admin-tab"
                    >
                      <div className="d-flex flex-column">
                        <Row>
                          <Col sm="12">
                            <Table responsive striped>
                              <thead>
                                <tr>
                                  <th>Seller</th>
                                  <th>Description</th>
                                  <th>Services/Products</th>
                                  <th>Status</th>
                                  <th className="text-center">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {sellers
                                  .slice(0, sellerLimit)
                                  .map((item, index) => {
                                    return (
                                      <>
                                        <tr key={index}>
                                          <td>
                                            <div className="d-flex align-items-center">
                                              <Link
                                                to={`/womeyn/seller-profile/${item.id}`}
                                              >
                                                {item?.profileImageName ? (
                                                  <img
                                                    className="rounded me-3"
                                                    style={{
                                                      width: 64,
                                                      height: 64,
                                                    }}
                                                    src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item.profileImageName}`}
                                                    alt=""
                                                    loading="lazy"
                                                  />
                                                ) : (
                                                  <img
                                                    className="rounded me-3"
                                                    style={{
                                                      width: 64,
                                                      height: 64,
                                                    }}
                                                    src="https://sialifehospital.com/wp-content/uploads/2021/04/testimonial-1.png"
                                                    alt=""
                                                    loading="lazy"
                                                  />
                                                )}
                                              </Link>
                                              <Link
                                                className="media-support-info"
                                                to={`/womeyn/seller-profile/${item.id}`}
                                              >
                                                <h5 className="iq-sub-label text-uppercase">
                                                  {item.firstName}
                                                </h5>
                                                <p className="mb-0">
                                                  {item.email}
                                                </p>
                                              </Link>
                                            </div>
                                          </td>
                                          <td className="text-dark no-wrap">{`${description.slice(
                                            0,
                                            100
                                          )}...`}</td>
                                          <td className="text-dark no-wrap flex-container">
                                            <div>
                                              <Button
                                                type="button"
                                                variant="soft-secondary"
                                              >
                                                Clothing
                                              </Button>{" "}
                                              <Button
                                                type="button"
                                                variant="soft-secondary"
                                              >
                                                Personal Care
                                              </Button>{" "}
                                              <Button
                                                type="button"
                                                variant="soft-secondary"
                                              >
                                                Beauty
                                              </Button>{" "}
                                              <Button
                                                type="button"
                                                variant="soft-secondary"
                                              >
                                                Lifestyle
                                              </Button>{" "}
                                              <Button variant="icon btn-warning warning">
                                                +4
                                              </Button>
                                            </div>
                                          </td>

                                          <td>
                                            {item.stateId === 1 ? (
                                              <div className="d-flex gap-2 justify-content-start">
                                                <div className="status-box bg-success"></div>
                                                <p className="p-bold green-text">
                                                  Approved
                                                </p>
                                              </div>
                                            ) : item.stateId === 2 ? (
                                              <div className="d-flex gap-2 justify-content-start">
                                                <div className="status-box bg-info"></div>
                                                <p className="p-bold blue-text">
                                                  Pending
                                                </p>
                                              </div>
                                            ) : item.stateId === 3 ? (
                                              <div className="d-flex gap-2 justify-content-start">
                                                <div className="status-box "></div>
                                                <p className="p-bold yellow-text">
                                                  Pending Approval
                                                </p>
                                              </div>
                                            ) : item.stateId === 4 ? (
                                              <div className="d-flex gap-2 justify-content-start">
                                                <div className="status-box bg-danger"></div>
                                                <p className="p-bold red-text">
                                                  Rejected
                                                </p>
                                              </div>
                                            ) : null}
                                          </td>
                                          <td>
                                            {item.stateId === 1 ? (
                                              <>
                                                <div
                                                  className="d-flex gap-3 justify-content-start"
                                                  style={{
                                                    marginBottom: 12,
                                                    cursor: "pointer",
                                                  }}
                                                >
                                                  <svg
                                                    width="32"
                                                    height="32"
                                                    viewBox="0 0 32 32"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    onClick={() =>
                                                      handleShow(item)
                                                    }
                                                  >
                                                    <rect
                                                      width="32"
                                                      height="32"
                                                      rx="16"
                                                      fill="#E95A5A"
                                                    />
                                                    <path
                                                      d="M19.665 12.335C19.5731 12.2424 19.4639 12.169 19.3435 12.1188C19.2231 12.0686 19.094 12.0428 18.9636 12.0428C18.8332 12.0428 18.7041 12.0686 18.5837 12.1188C18.4633 12.169 18.354 12.2424 18.2622 12.335L16 14.6071L13.7378 12.335C13.5518 12.149 13.2995 12.0445 13.0364 12.0445C12.7733 12.0445 12.5211 12.149 12.335 12.335C12.149 12.5211 12.0445 12.7733 12.0445 13.0364C12.0445 13.2995 12.149 13.5518 12.335 13.7378L14.6071 16L12.335 18.2622C12.2424 18.354 12.169 18.4633 12.1188 18.5837C12.0686 18.7041 12.0428 18.8332 12.0428 18.9636C12.0428 19.094 12.0686 19.2231 12.1188 19.3435C12.169 19.4639 12.2424 19.5731 12.335 19.665C12.4269 19.7576 12.5361 19.831 12.6565 19.8812C12.7769 19.9313 12.906 19.9572 13.0364 19.9572C13.1668 19.9572 13.2959 19.9313 13.4163 19.8812C13.5367 19.831 13.646 19.7576 13.7378 19.665L16 17.3929L18.2622 19.665C18.354 19.7576 18.4633 19.831 18.5837 19.8812C18.7041 19.9313 18.8332 19.9572 18.9636 19.9572C19.094 19.9572 19.2231 19.9313 19.3435 19.8812C19.4639 19.831 19.5731 19.7576 19.665 19.665C19.7576 19.5731 19.831 19.4639 19.8812 19.3435C19.9313 19.2231 19.9572 19.094 19.9572 18.9636C19.9572 18.8332 19.9313 18.7041 19.8812 18.5837C19.831 18.4633 19.7576 18.354 19.665 18.2622L17.3929 16L19.665 13.7378C19.7576 13.646 19.831 13.5367 19.8812 13.4163C19.9313 13.2959 19.9572 13.1668 19.9572 13.0364C19.9572 12.906 19.9313 12.7769 19.8812 12.6565C19.831 12.5361 19.7576 12.4269 19.665 12.335ZM22.9842 9.01582C22.0729 8.07231 20.9829 7.31974 19.7776 6.80201C18.5724 6.28428 17.2761 6.01177 15.9644 6.00037C14.6528 5.98897 13.352 6.23892 12.1379 6.73563C10.9239 7.23233 9.82091 7.96585 8.89338 8.89338C7.96585 9.82091 7.23233 10.9239 6.73563 12.1379C6.23892 13.352 5.98897 14.6528 6.00037 15.9644C6.01177 17.2761 6.28428 18.5724 6.80201 19.7776C7.31974 20.9829 8.07231 22.0729 9.01582 22.9842C9.92709 23.9277 11.0171 24.6803 12.2224 25.198C13.4276 25.7157 14.7239 25.9882 16.0356 25.9996C17.3472 26.011 18.648 25.7611 19.8621 25.2644C21.0761 24.7677 22.1791 24.0342 23.1066 23.1066C24.0342 22.1791 24.7677 21.0761 25.2644 19.8621C25.7611 18.648 26.011 17.3472 25.9996 16.0356C25.9882 14.7239 25.7157 13.4276 25.198 12.2224C24.6803 11.0171 23.9277 9.92709 22.9842 9.01582ZM21.5913 21.5913C20.2992 22.8848 18.5986 23.6903 16.7792 23.8706C14.9598 24.0509 13.1342 23.5947 11.6134 22.5799C10.0926 21.5651 8.97074 20.0544 8.43889 18.3052C7.90704 16.5559 7.99813 14.6764 8.69666 12.9868C9.39518 11.2972 10.6579 9.90208 12.2697 9.0391C13.8815 8.17612 15.7427 7.89868 17.5361 8.25406C19.3296 8.60943 20.9443 9.57564 22.1052 10.988C23.2661 12.4005 23.9014 14.1717 23.9029 16C23.9064 17.0385 23.7039 18.0674 23.3071 19.0272C22.9104 19.9869 22.3272 20.8584 21.5913 21.5913Z"
                                                      fill="white"
                                                    />
                                                  </svg>
                                                </div>
                                              </>
                                            ) : item.stateId ===
                                              2 ? null : item.stateId === 3 ? (
                                              <div
                                                className="d-flex gap-2 justify-content-start"
                                                style={{
                                                  marginBottom: 12,
                                                  cursor: "pointer",
                                                }}
                                              >
                                                <svg
                                                  width="32"
                                                  height="32"
                                                  viewBox="0 0 32 32"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  onClick={() =>
                                                    actionApprove(item)
                                                  }
                                                >
                                                  <rect
                                                    width="32"
                                                    height="32"
                                                    rx="16"
                                                    fill="#198754"
                                                  />
                                                  <path
                                                    d="M18.72 12.79L14.43 17.09L12.78 15.44C12.6904 15.3353 12.58 15.2503 12.456 15.1903C12.3319 15.1303 12.1968 15.0965 12.0591 15.0912C11.9213 15.0859 11.784 15.1091 11.6557 15.1594C11.5274 15.2096 11.4108 15.2859 11.3134 15.3833C11.2159 15.4808 11.1396 15.5974 11.0894 15.7257C11.0391 15.854 11.0159 15.9913 11.0212 16.1291C11.0265 16.2668 11.0603 16.4019 11.1203 16.526C11.1803 16.65 11.2653 16.7604 11.37 16.85L13.72 19.21C13.8134 19.3027 13.9243 19.376 14.0461 19.4258C14.1679 19.4755 14.2984 19.5008 14.43 19.5C14.6923 19.4989 14.9437 19.3947 15.13 19.21L20.13 14.21C20.2237 14.117 20.2981 14.0064 20.3489 13.8846C20.3997 13.7627 20.4258 13.632 20.4258 13.5C20.4258 13.368 20.3997 13.2373 20.3489 13.1154C20.2981 12.9936 20.2237 12.883 20.13 12.79C19.9426 12.6037 19.6892 12.4992 19.425 12.4992C19.1608 12.4992 18.9074 12.6037 18.72 12.79ZM16 6C14.0222 6 12.0888 6.58649 10.4443 7.6853C8.79981 8.78412 7.51809 10.3459 6.76121 12.1732C6.00433 14.0004 5.8063 16.0111 6.19215 17.9509C6.578 19.8907 7.53041 21.6725 8.92894 23.0711C10.3275 24.4696 12.1093 25.422 14.0491 25.8079C15.9889 26.1937 17.9996 25.9957 19.8268 25.2388C21.6541 24.4819 23.2159 23.2002 24.3147 21.5557C25.4135 19.9112 26 17.9778 26 16C26 14.6868 25.7413 13.3864 25.2388 12.1732C24.7363 10.9599 23.9997 9.85752 23.0711 8.92893C22.1425 8.00035 21.0401 7.26375 19.8268 6.7612C18.6136 6.25866 17.3132 6 16 6ZM16 24C14.4178 24 12.871 23.5308 11.5554 22.6518C10.2398 21.7727 9.21447 20.5233 8.60897 19.0615C8.00347 17.5997 7.84504 15.9911 8.15372 14.4393C8.4624 12.8874 9.22433 11.462 10.3432 10.3431C11.462 9.22433 12.8874 8.4624 14.4393 8.15372C15.9911 7.84504 17.5997 8.00346 19.0615 8.60896C20.5233 9.21447 21.7727 10.2398 22.6518 11.5554C23.5308 12.871 24 14.4177 24 16C24 18.1217 23.1572 20.1566 21.6569 21.6569C20.1566 23.1571 18.1217 24 16 24Z"
                                                    fill="white"
                                                  />
                                                </svg>

                                                <svg
                                                  width="32"
                                                  height="32"
                                                  viewBox="0 0 32 32"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  onClick={() =>
                                                    handleShow(item)
                                                  }
                                                  // onClick={handleShow}
                                                >
                                                  <rect
                                                    width="32"
                                                    height="32"
                                                    rx="16"
                                                    fill="#E95A5A"
                                                  />
                                                  <path
                                                    d="M19.665 12.335C19.5731 12.2424 19.4639 12.169 19.3435 12.1188C19.2231 12.0686 19.094 12.0428 18.9636 12.0428C18.8332 12.0428 18.7041 12.0686 18.5837 12.1188C18.4633 12.169 18.354 12.2424 18.2622 12.335L16 14.6071L13.7378 12.335C13.5518 12.149 13.2995 12.0445 13.0364 12.0445C12.7733 12.0445 12.5211 12.149 12.335 12.335C12.149 12.5211 12.0445 12.7733 12.0445 13.0364C12.0445 13.2995 12.149 13.5518 12.335 13.7378L14.6071 16L12.335 18.2622C12.2424 18.354 12.169 18.4633 12.1188 18.5837C12.0686 18.7041 12.0428 18.8332 12.0428 18.9636C12.0428 19.094 12.0686 19.2231 12.1188 19.3435C12.169 19.4639 12.2424 19.5731 12.335 19.665C12.4269 19.7576 12.5361 19.831 12.6565 19.8812C12.7769 19.9313 12.906 19.9572 13.0364 19.9572C13.1668 19.9572 13.2959 19.9313 13.4163 19.8812C13.5367 19.831 13.646 19.7576 13.7378 19.665L16 17.3929L18.2622 19.665C18.354 19.7576 18.4633 19.831 18.5837 19.8812C18.7041 19.9313 18.8332 19.9572 18.9636 19.9572C19.094 19.9572 19.2231 19.9313 19.3435 19.8812C19.4639 19.831 19.5731 19.7576 19.665 19.665C19.7576 19.5731 19.831 19.4639 19.8812 19.3435C19.9313 19.2231 19.9572 19.094 19.9572 18.9636C19.9572 18.8332 19.9313 18.7041 19.8812 18.5837C19.831 18.4633 19.7576 18.354 19.665 18.2622L17.3929 16L19.665 13.7378C19.7576 13.646 19.831 13.5367 19.8812 13.4163C19.9313 13.2959 19.9572 13.1668 19.9572 13.0364C19.9572 12.906 19.9313 12.7769 19.8812 12.6565C19.831 12.5361 19.7576 12.4269 19.665 12.335ZM22.9842 9.01582C22.0729 8.07231 20.9829 7.31974 19.7776 6.80201C18.5724 6.28428 17.2761 6.01177 15.9644 6.00037C14.6528 5.98897 13.352 6.23892 12.1379 6.73563C10.9239 7.23233 9.82091 7.96585 8.89338 8.89338C7.96585 9.82091 7.23233 10.9239 6.73563 12.1379C6.23892 13.352 5.98897 14.6528 6.00037 15.9644C6.01177 17.2761 6.28428 18.5724 6.80201 19.7776C7.31974 20.9829 8.07231 22.0729 9.01582 22.9842C9.92709 23.9277 11.0171 24.6803 12.2224 25.198C13.4276 25.7157 14.7239 25.9882 16.0356 25.9996C17.3472 26.011 18.648 25.7611 19.8621 25.2644C21.0761 24.7677 22.1791 24.0342 23.1066 23.1066C24.0342 22.1791 24.7677 21.0761 25.2644 19.8621C25.7611 18.648 26.011 17.3472 25.9996 16.0356C25.9882 14.7239 25.7157 13.4276 25.198 12.2224C24.6803 11.0171 23.9277 9.92709 22.9842 9.01582ZM21.5913 21.5913C20.2992 22.8848 18.5986 23.6903 16.7792 23.8706C14.9598 24.0509 13.1342 23.5947 11.6134 22.5799C10.0926 21.5651 8.97074 20.0544 8.43889 18.3052C7.90704 16.5559 7.99813 14.6764 8.69666 12.9868C9.39518 11.2972 10.6579 9.90208 12.2697 9.0391C13.8815 8.17612 15.7427 7.89868 17.5361 8.25406C19.3296 8.60943 20.9443 9.57564 22.1052 10.988C23.2661 12.4005 23.9014 14.1717 23.9029 16C23.9064 17.0385 23.7039 18.0674 23.3071 19.0272C22.9104 19.9869 22.3272 20.8584 21.5913 21.5913Z"
                                                    fill="white"
                                                  />
                                                </svg>
                                              </div>
                                            ) : item.stateId === 4 ? (
                                              <div
                                                className="d-flex gap-3 justify-content-start"
                                                style={{
                                                  marginBottom: 12,
                                                  cursor: "pointer",
                                                }}
                                              >
                                                <svg
                                                  width="32"
                                                  height="32"
                                                  viewBox="0 0 32 32"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  onClick={() =>
                                                    actionApprove(item)
                                                  }
                                                >
                                                  <rect
                                                    width="32"
                                                    height="32"
                                                    rx="16"
                                                    fill="#198754"
                                                  />
                                                  <path
                                                    d="M18.72 12.79L14.43 17.09L12.78 15.44C12.6904 15.3353 12.58 15.2503 12.456 15.1903C12.3319 15.1303 12.1968 15.0965 12.0591 15.0912C11.9213 15.0859 11.784 15.1091 11.6557 15.1594C11.5274 15.2096 11.4108 15.2859 11.3134 15.3833C11.2159 15.4808 11.1396 15.5974 11.0894 15.7257C11.0391 15.854 11.0159 15.9913 11.0212 16.1291C11.0265 16.2668 11.0603 16.4019 11.1203 16.526C11.1803 16.65 11.2653 16.7604 11.37 16.85L13.72 19.21C13.8134 19.3027 13.9243 19.376 14.0461 19.4258C14.1679 19.4755 14.2984 19.5008 14.43 19.5C14.6923 19.4989 14.9437 19.3947 15.13 19.21L20.13 14.21C20.2237 14.117 20.2981 14.0064 20.3489 13.8846C20.3997 13.7627 20.4258 13.632 20.4258 13.5C20.4258 13.368 20.3997 13.2373 20.3489 13.1154C20.2981 12.9936 20.2237 12.883 20.13 12.79C19.9426 12.6037 19.6892 12.4992 19.425 12.4992C19.1608 12.4992 18.9074 12.6037 18.72 12.79ZM16 6C14.0222 6 12.0888 6.58649 10.4443 7.6853C8.79981 8.78412 7.51809 10.3459 6.76121 12.1732C6.00433 14.0004 5.8063 16.0111 6.19215 17.9509C6.578 19.8907 7.53041 21.6725 8.92894 23.0711C10.3275 24.4696 12.1093 25.422 14.0491 25.8079C15.9889 26.1937 17.9996 25.9957 19.8268 25.2388C21.6541 24.4819 23.2159 23.2002 24.3147 21.5557C25.4135 19.9112 26 17.9778 26 16C26 14.6868 25.7413 13.3864 25.2388 12.1732C24.7363 10.9599 23.9997 9.85752 23.0711 8.92893C22.1425 8.00035 21.0401 7.26375 19.8268 6.7612C18.6136 6.25866 17.3132 6 16 6ZM16 24C14.4178 24 12.871 23.5308 11.5554 22.6518C10.2398 21.7727 9.21447 20.5233 8.60897 19.0615C8.00347 17.5997 7.84504 15.9911 8.15372 14.4393C8.4624 12.8874 9.22433 11.462 10.3432 10.3431C11.462 9.22433 12.8874 8.4624 14.4393 8.15372C15.9911 7.84504 17.5997 8.00346 19.0615 8.60896C20.5233 9.21447 21.7727 10.2398 22.6518 11.5554C23.5308 12.871 24 14.4177 24 16C24 18.1217 23.1572 20.1566 21.6569 21.6569C20.1566 23.1571 18.1217 24 16 24Z"
                                                    fill="white"
                                                  />
                                                </svg>
                                              </div>
                                            ) : null}
                                          </td>
                                        </tr>
                                      </>
                                    );
                                  })}
                              </tbody>
                            </Table>
                            <Modal
                              show={show}
                              onHide={handleClose}
                              backdrop="static"
                              keyboard={false}
                              centered
                            >
                              <Modal.Header closeButton>
                                <Modal.Title style={{ color: "red" }}>
                                  Alert..!
                                </Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                Do you really want to reject the seller?
                              </Modal.Body>
                              <Modal.Footer>
                                <Button
                                  variant="secondary"
                                  onClick={handleClose}
                                >
                                  Cancel
                                </Button>
                                <Button
                                  variant="primary"
                                  onClick={actionReject}
                                >
                                  {loading ? (
                                    <span
                                      class="spinner-border spinner-border-sm"
                                      role="status"
                                      aria-hidden="true"
                                    ></span>
                                  ) : (
                                    "Confirm"
                                  )}
                                </Button>
                              </Modal.Footer>
                            </Modal>

                            {sellerLimit[sellerLimit.length - 1] ===
                            sellers[sellers.length - 1] ? (
                              <div className="loadMore-div">
                                <Button
                                  className="mt-5 loadMore-button"
                                  onClick={loadMoreSellers}
                                >
                                  Load More
                                </Button>
                              </div>
                            ) : null}
                          </Col>
                        </Row>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane
                      eventKey="2"
                      id="nav-sellers"
                      role="tab"
                      aria-labelledby="nav-sellers-tab"
                    >
                      <div></div>
                    </Tab.Pane>
                  </Tab.Content>
                ) : selectedOption === "Products" ? (
                  <Tab.Content
                    className="mt-4 iq-tab-fade-up"
                    id="nav-tabContent"
                  >
                    <Tab.Pane
                      eventKey="1"
                      id="nav-admin"
                      role="tab"
                      aria-labelledby="nav-admin-tab"
                    >
                      <div className="d-flex flex-column">
                        <Row>
                          <Col sm="12">
                            <Table responsive striped>
                              <thead>
                                <tr>
                                  <th>Seller</th>
                                  <th>Description</th>
                                  <th>Products</th>
                                  <th>Status</th>
                                  <th className="text-center">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {sellers
                                  .slice(0, sellerLimit)
                                  .map((item, index) => {
                                    return (
                                      <>
                                        <tr key={index}>
                                          <td>
                                            <div className="d-flex align-items-center">
                                              <Link
                                                to={`/womeyn/seller-profile/${item.id}`}
                                              >
                                                {item?.profileImageName ? (
                                                  <img
                                                    className="rounded me-3"
                                                    style={{
                                                      width: 64,
                                                      height: 64,
                                                    }}
                                                    src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item.profileImageName}`}
                                                    alt=""
                                                    loading="lazy"
                                                  />
                                                ) : (
                                                  <img
                                                    className="rounded me-3"
                                                    style={{
                                                      width: 64,
                                                      height: 64,
                                                    }}
                                                    src="https://sialifehospital.com/wp-content/uploads/2021/04/testimonial-1.png"
                                                    alt=""
                                                    loading="lazy"
                                                  />
                                                )}
                                              </Link>
                                              <Link
                                                className="media-support-info"
                                                to={`/womeyn/seller-profile/${item.id}`}
                                              >
                                                <h5 className="iq-sub-label text-uppercase">
                                                  {item.firstName}
                                                </h5>
                                                <p className="mb-0">
                                                  {item.email}
                                                </p>
                                              </Link>
                                            </div>
                                          </td>
                                          <td className="text-dark no-wrap">{`${description.slice(
                                            0,
                                            100
                                          )}...`}</td>
                                          <td className="text-dark no-wrap flex-container">
                                            <div>
                                              <Button
                                                type="button"
                                                variant="soft-secondary"
                                              >
                                                Clothing
                                              </Button>{" "}
                                              <Button
                                                type="button"
                                                variant="soft-secondary"
                                              >
                                                Personal Care
                                              </Button>{" "}
                                              <Button
                                                type="button"
                                                variant="soft-secondary"
                                              >
                                                Beauty
                                              </Button>{" "}
                                              <Button
                                                type="button"
                                                variant="soft-secondary"
                                              >
                                                Lifestyle
                                              </Button>{" "}
                                              <Button variant="icon btn-warning warning">
                                                +4
                                              </Button>
                                            </div>
                                          </td>

                                          <td>
                                            {item.stateId === 1 ? (
                                              <div className="d-flex gap-2 justify-content-start">
                                                <div className="status-box bg-success"></div>
                                                <p className="p-bold green-text">
                                                  Approved
                                                </p>
                                              </div>
                                            ) : item.stateId === 2 ? (
                                              <div className="d-flex gap-2 justify-content-start">
                                                <div className="status-box bg-info"></div>
                                                <p className="p-bold blue-text">
                                                  Pending
                                                </p>
                                              </div>
                                            ) : item.stateId === 3 ? (
                                              <div className="d-flex gap-2 justify-content-start">
                                                <div className="status-box "></div>
                                                <p className="p-bold yellow-text">
                                                  Pending Approval
                                                </p>
                                              </div>
                                            ) : item.stateId === 4 ? (
                                              <div className="d-flex gap-2 justify-content-start">
                                                <div className="status-box bg-danger"></div>
                                                <p className="p-bold red-text">
                                                  Rejected
                                                </p>
                                              </div>
                                            ) : null}
                                          </td>
                                          <td>
                                            {item.stateId === 1 ? (
                                              <>
                                                <div
                                                  className="d-flex gap-3 justify-content-start"
                                                  style={{
                                                    marginBottom: 12,
                                                    cursor: "pointer",
                                                  }}
                                                >
                                                  <svg
                                                    width="32"
                                                    height="32"
                                                    viewBox="0 0 32 32"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    onClick={() =>
                                                      handleShow(item)
                                                    }
                                                  >
                                                    <rect
                                                      width="32"
                                                      height="32"
                                                      rx="16"
                                                      fill="#E95A5A"
                                                    />
                                                    <path
                                                      d="M19.665 12.335C19.5731 12.2424 19.4639 12.169 19.3435 12.1188C19.2231 12.0686 19.094 12.0428 18.9636 12.0428C18.8332 12.0428 18.7041 12.0686 18.5837 12.1188C18.4633 12.169 18.354 12.2424 18.2622 12.335L16 14.6071L13.7378 12.335C13.5518 12.149 13.2995 12.0445 13.0364 12.0445C12.7733 12.0445 12.5211 12.149 12.335 12.335C12.149 12.5211 12.0445 12.7733 12.0445 13.0364C12.0445 13.2995 12.149 13.5518 12.335 13.7378L14.6071 16L12.335 18.2622C12.2424 18.354 12.169 18.4633 12.1188 18.5837C12.0686 18.7041 12.0428 18.8332 12.0428 18.9636C12.0428 19.094 12.0686 19.2231 12.1188 19.3435C12.169 19.4639 12.2424 19.5731 12.335 19.665C12.4269 19.7576 12.5361 19.831 12.6565 19.8812C12.7769 19.9313 12.906 19.9572 13.0364 19.9572C13.1668 19.9572 13.2959 19.9313 13.4163 19.8812C13.5367 19.831 13.646 19.7576 13.7378 19.665L16 17.3929L18.2622 19.665C18.354 19.7576 18.4633 19.831 18.5837 19.8812C18.7041 19.9313 18.8332 19.9572 18.9636 19.9572C19.094 19.9572 19.2231 19.9313 19.3435 19.8812C19.4639 19.831 19.5731 19.7576 19.665 19.665C19.7576 19.5731 19.831 19.4639 19.8812 19.3435C19.9313 19.2231 19.9572 19.094 19.9572 18.9636C19.9572 18.8332 19.9313 18.7041 19.8812 18.5837C19.831 18.4633 19.7576 18.354 19.665 18.2622L17.3929 16L19.665 13.7378C19.7576 13.646 19.831 13.5367 19.8812 13.4163C19.9313 13.2959 19.9572 13.1668 19.9572 13.0364C19.9572 12.906 19.9313 12.7769 19.8812 12.6565C19.831 12.5361 19.7576 12.4269 19.665 12.335ZM22.9842 9.01582C22.0729 8.07231 20.9829 7.31974 19.7776 6.80201C18.5724 6.28428 17.2761 6.01177 15.9644 6.00037C14.6528 5.98897 13.352 6.23892 12.1379 6.73563C10.9239 7.23233 9.82091 7.96585 8.89338 8.89338C7.96585 9.82091 7.23233 10.9239 6.73563 12.1379C6.23892 13.352 5.98897 14.6528 6.00037 15.9644C6.01177 17.2761 6.28428 18.5724 6.80201 19.7776C7.31974 20.9829 8.07231 22.0729 9.01582 22.9842C9.92709 23.9277 11.0171 24.6803 12.2224 25.198C13.4276 25.7157 14.7239 25.9882 16.0356 25.9996C17.3472 26.011 18.648 25.7611 19.8621 25.2644C21.0761 24.7677 22.1791 24.0342 23.1066 23.1066C24.0342 22.1791 24.7677 21.0761 25.2644 19.8621C25.7611 18.648 26.011 17.3472 25.9996 16.0356C25.9882 14.7239 25.7157 13.4276 25.198 12.2224C24.6803 11.0171 23.9277 9.92709 22.9842 9.01582ZM21.5913 21.5913C20.2992 22.8848 18.5986 23.6903 16.7792 23.8706C14.9598 24.0509 13.1342 23.5947 11.6134 22.5799C10.0926 21.5651 8.97074 20.0544 8.43889 18.3052C7.90704 16.5559 7.99813 14.6764 8.69666 12.9868C9.39518 11.2972 10.6579 9.90208 12.2697 9.0391C13.8815 8.17612 15.7427 7.89868 17.5361 8.25406C19.3296 8.60943 20.9443 9.57564 22.1052 10.988C23.2661 12.4005 23.9014 14.1717 23.9029 16C23.9064 17.0385 23.7039 18.0674 23.3071 19.0272C22.9104 19.9869 22.3272 20.8584 21.5913 21.5913Z"
                                                      fill="white"
                                                    />
                                                  </svg>
                                                </div>
                                              </>
                                            ) : item.stateId ===
                                              2 ? null : item.stateId === 3 ? (
                                              <div
                                                className="d-flex gap-2 justify-content-start"
                                                style={{
                                                  marginBottom: 12,
                                                  cursor: "pointer",
                                                }}
                                              >
                                                <svg
                                                  width="32"
                                                  height="32"
                                                  viewBox="0 0 32 32"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  onClick={() =>
                                                    actionApprove(item)
                                                  }
                                                >
                                                  <rect
                                                    width="32"
                                                    height="32"
                                                    rx="16"
                                                    fill="#198754"
                                                  />
                                                  <path
                                                    d="M18.72 12.79L14.43 17.09L12.78 15.44C12.6904 15.3353 12.58 15.2503 12.456 15.1903C12.3319 15.1303 12.1968 15.0965 12.0591 15.0912C11.9213 15.0859 11.784 15.1091 11.6557 15.1594C11.5274 15.2096 11.4108 15.2859 11.3134 15.3833C11.2159 15.4808 11.1396 15.5974 11.0894 15.7257C11.0391 15.854 11.0159 15.9913 11.0212 16.1291C11.0265 16.2668 11.0603 16.4019 11.1203 16.526C11.1803 16.65 11.2653 16.7604 11.37 16.85L13.72 19.21C13.8134 19.3027 13.9243 19.376 14.0461 19.4258C14.1679 19.4755 14.2984 19.5008 14.43 19.5C14.6923 19.4989 14.9437 19.3947 15.13 19.21L20.13 14.21C20.2237 14.117 20.2981 14.0064 20.3489 13.8846C20.3997 13.7627 20.4258 13.632 20.4258 13.5C20.4258 13.368 20.3997 13.2373 20.3489 13.1154C20.2981 12.9936 20.2237 12.883 20.13 12.79C19.9426 12.6037 19.6892 12.4992 19.425 12.4992C19.1608 12.4992 18.9074 12.6037 18.72 12.79ZM16 6C14.0222 6 12.0888 6.58649 10.4443 7.6853C8.79981 8.78412 7.51809 10.3459 6.76121 12.1732C6.00433 14.0004 5.8063 16.0111 6.19215 17.9509C6.578 19.8907 7.53041 21.6725 8.92894 23.0711C10.3275 24.4696 12.1093 25.422 14.0491 25.8079C15.9889 26.1937 17.9996 25.9957 19.8268 25.2388C21.6541 24.4819 23.2159 23.2002 24.3147 21.5557C25.4135 19.9112 26 17.9778 26 16C26 14.6868 25.7413 13.3864 25.2388 12.1732C24.7363 10.9599 23.9997 9.85752 23.0711 8.92893C22.1425 8.00035 21.0401 7.26375 19.8268 6.7612C18.6136 6.25866 17.3132 6 16 6ZM16 24C14.4178 24 12.871 23.5308 11.5554 22.6518C10.2398 21.7727 9.21447 20.5233 8.60897 19.0615C8.00347 17.5997 7.84504 15.9911 8.15372 14.4393C8.4624 12.8874 9.22433 11.462 10.3432 10.3431C11.462 9.22433 12.8874 8.4624 14.4393 8.15372C15.9911 7.84504 17.5997 8.00346 19.0615 8.60896C20.5233 9.21447 21.7727 10.2398 22.6518 11.5554C23.5308 12.871 24 14.4177 24 16C24 18.1217 23.1572 20.1566 21.6569 21.6569C20.1566 23.1571 18.1217 24 16 24Z"
                                                    fill="white"
                                                  />
                                                </svg>

                                                <svg
                                                  width="32"
                                                  height="32"
                                                  viewBox="0 0 32 32"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  onClick={() =>
                                                    handleShow(item)
                                                  }
                                                  // onClick={handleShow}
                                                >
                                                  <rect
                                                    width="32"
                                                    height="32"
                                                    rx="16"
                                                    fill="#E95A5A"
                                                  />
                                                  <path
                                                    d="M19.665 12.335C19.5731 12.2424 19.4639 12.169 19.3435 12.1188C19.2231 12.0686 19.094 12.0428 18.9636 12.0428C18.8332 12.0428 18.7041 12.0686 18.5837 12.1188C18.4633 12.169 18.354 12.2424 18.2622 12.335L16 14.6071L13.7378 12.335C13.5518 12.149 13.2995 12.0445 13.0364 12.0445C12.7733 12.0445 12.5211 12.149 12.335 12.335C12.149 12.5211 12.0445 12.7733 12.0445 13.0364C12.0445 13.2995 12.149 13.5518 12.335 13.7378L14.6071 16L12.335 18.2622C12.2424 18.354 12.169 18.4633 12.1188 18.5837C12.0686 18.7041 12.0428 18.8332 12.0428 18.9636C12.0428 19.094 12.0686 19.2231 12.1188 19.3435C12.169 19.4639 12.2424 19.5731 12.335 19.665C12.4269 19.7576 12.5361 19.831 12.6565 19.8812C12.7769 19.9313 12.906 19.9572 13.0364 19.9572C13.1668 19.9572 13.2959 19.9313 13.4163 19.8812C13.5367 19.831 13.646 19.7576 13.7378 19.665L16 17.3929L18.2622 19.665C18.354 19.7576 18.4633 19.831 18.5837 19.8812C18.7041 19.9313 18.8332 19.9572 18.9636 19.9572C19.094 19.9572 19.2231 19.9313 19.3435 19.8812C19.4639 19.831 19.5731 19.7576 19.665 19.665C19.7576 19.5731 19.831 19.4639 19.8812 19.3435C19.9313 19.2231 19.9572 19.094 19.9572 18.9636C19.9572 18.8332 19.9313 18.7041 19.8812 18.5837C19.831 18.4633 19.7576 18.354 19.665 18.2622L17.3929 16L19.665 13.7378C19.7576 13.646 19.831 13.5367 19.8812 13.4163C19.9313 13.2959 19.9572 13.1668 19.9572 13.0364C19.9572 12.906 19.9313 12.7769 19.8812 12.6565C19.831 12.5361 19.7576 12.4269 19.665 12.335ZM22.9842 9.01582C22.0729 8.07231 20.9829 7.31974 19.7776 6.80201C18.5724 6.28428 17.2761 6.01177 15.9644 6.00037C14.6528 5.98897 13.352 6.23892 12.1379 6.73563C10.9239 7.23233 9.82091 7.96585 8.89338 8.89338C7.96585 9.82091 7.23233 10.9239 6.73563 12.1379C6.23892 13.352 5.98897 14.6528 6.00037 15.9644C6.01177 17.2761 6.28428 18.5724 6.80201 19.7776C7.31974 20.9829 8.07231 22.0729 9.01582 22.9842C9.92709 23.9277 11.0171 24.6803 12.2224 25.198C13.4276 25.7157 14.7239 25.9882 16.0356 25.9996C17.3472 26.011 18.648 25.7611 19.8621 25.2644C21.0761 24.7677 22.1791 24.0342 23.1066 23.1066C24.0342 22.1791 24.7677 21.0761 25.2644 19.8621C25.7611 18.648 26.011 17.3472 25.9996 16.0356C25.9882 14.7239 25.7157 13.4276 25.198 12.2224C24.6803 11.0171 23.9277 9.92709 22.9842 9.01582ZM21.5913 21.5913C20.2992 22.8848 18.5986 23.6903 16.7792 23.8706C14.9598 24.0509 13.1342 23.5947 11.6134 22.5799C10.0926 21.5651 8.97074 20.0544 8.43889 18.3052C7.90704 16.5559 7.99813 14.6764 8.69666 12.9868C9.39518 11.2972 10.6579 9.90208 12.2697 9.0391C13.8815 8.17612 15.7427 7.89868 17.5361 8.25406C19.3296 8.60943 20.9443 9.57564 22.1052 10.988C23.2661 12.4005 23.9014 14.1717 23.9029 16C23.9064 17.0385 23.7039 18.0674 23.3071 19.0272C22.9104 19.9869 22.3272 20.8584 21.5913 21.5913Z"
                                                    fill="white"
                                                  />
                                                </svg>
                                              </div>
                                            ) : item.stateId === 4 ? (
                                              <div
                                                className="d-flex gap-3 justify-content-start"
                                                style={{
                                                  marginBottom: 12,
                                                  cursor: "pointer",
                                                }}
                                              >
                                                <svg
                                                  width="32"
                                                  height="32"
                                                  viewBox="0 0 32 32"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  onClick={() =>
                                                    actionApprove(item)
                                                  }
                                                >
                                                  <rect
                                                    width="32"
                                                    height="32"
                                                    rx="16"
                                                    fill="#198754"
                                                  />
                                                  <path
                                                    d="M18.72 12.79L14.43 17.09L12.78 15.44C12.6904 15.3353 12.58 15.2503 12.456 15.1903C12.3319 15.1303 12.1968 15.0965 12.0591 15.0912C11.9213 15.0859 11.784 15.1091 11.6557 15.1594C11.5274 15.2096 11.4108 15.2859 11.3134 15.3833C11.2159 15.4808 11.1396 15.5974 11.0894 15.7257C11.0391 15.854 11.0159 15.9913 11.0212 16.1291C11.0265 16.2668 11.0603 16.4019 11.1203 16.526C11.1803 16.65 11.2653 16.7604 11.37 16.85L13.72 19.21C13.8134 19.3027 13.9243 19.376 14.0461 19.4258C14.1679 19.4755 14.2984 19.5008 14.43 19.5C14.6923 19.4989 14.9437 19.3947 15.13 19.21L20.13 14.21C20.2237 14.117 20.2981 14.0064 20.3489 13.8846C20.3997 13.7627 20.4258 13.632 20.4258 13.5C20.4258 13.368 20.3997 13.2373 20.3489 13.1154C20.2981 12.9936 20.2237 12.883 20.13 12.79C19.9426 12.6037 19.6892 12.4992 19.425 12.4992C19.1608 12.4992 18.9074 12.6037 18.72 12.79ZM16 6C14.0222 6 12.0888 6.58649 10.4443 7.6853C8.79981 8.78412 7.51809 10.3459 6.76121 12.1732C6.00433 14.0004 5.8063 16.0111 6.19215 17.9509C6.578 19.8907 7.53041 21.6725 8.92894 23.0711C10.3275 24.4696 12.1093 25.422 14.0491 25.8079C15.9889 26.1937 17.9996 25.9957 19.8268 25.2388C21.6541 24.4819 23.2159 23.2002 24.3147 21.5557C25.4135 19.9112 26 17.9778 26 16C26 14.6868 25.7413 13.3864 25.2388 12.1732C24.7363 10.9599 23.9997 9.85752 23.0711 8.92893C22.1425 8.00035 21.0401 7.26375 19.8268 6.7612C18.6136 6.25866 17.3132 6 16 6ZM16 24C14.4178 24 12.871 23.5308 11.5554 22.6518C10.2398 21.7727 9.21447 20.5233 8.60897 19.0615C8.00347 17.5997 7.84504 15.9911 8.15372 14.4393C8.4624 12.8874 9.22433 11.462 10.3432 10.3431C11.462 9.22433 12.8874 8.4624 14.4393 8.15372C15.9911 7.84504 17.5997 8.00346 19.0615 8.60896C20.5233 9.21447 21.7727 10.2398 22.6518 11.5554C23.5308 12.871 24 14.4177 24 16C24 18.1217 23.1572 20.1566 21.6569 21.6569C20.1566 23.1571 18.1217 24 16 24Z"
                                                    fill="white"
                                                  />
                                                </svg>
                                              </div>
                                            ) : null}
                                          </td>
                                        </tr>
                                      </>
                                    );
                                  })}
                              </tbody>
                            </Table>
                            <Modal
                              show={show}
                              onHide={handleClose}
                              backdrop="static"
                              keyboard={false}
                              centered
                            >
                              <Modal.Header closeButton>
                                <Modal.Title style={{ color: "red" }}>
                                  Alert..!
                                </Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                Do you really want to reject the seller?
                              </Modal.Body>
                              <Modal.Footer>
                                <Button
                                  variant="secondary"
                                  onClick={handleClose}
                                >
                                  Cancel
                                </Button>
                                <Button
                                  variant="primary"
                                  onClick={actionReject}
                                >
                                  {loading ? (
                                    <span
                                      class="spinner-border spinner-border-sm"
                                      role="status"
                                      aria-hidden="true"
                                    ></span>
                                  ) : (
                                    "Confirm"
                                  )}
                                </Button>
                              </Modal.Footer>
                            </Modal>

                            {sellerLimit[sellerLimit.length - 1] ===
                            sellers[sellers.length - 1] ? (
                              <div className="loadMore-div">
                                <Button
                                  className="mt-5 loadMore-button"
                                  onClick={loadMoreSellers}
                                >
                                  Load More
                                </Button>
                              </div>
                            ) : null}
                          </Col>
                        </Row>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane
                      eventKey="2"
                      id="nav-sellers"
                      role="tab"
                      aria-labelledby="nav-sellers-tab"
                    >
                      <div></div>
                    </Tab.Pane>
                  </Tab.Content>
                ) : selectedOption === "Services" ? (
                  <Tab.Content
                    className="mt-4 iq-tab-fade-up"
                    id="nav-tabContent"
                  >
                    <Tab.Pane
                      eventKey="1"
                      id="nav-admin"
                      role="tab"
                      aria-labelledby="nav-admin-tab"
                    >
                      <div className="d-flex flex-column">
                        <Row>
                          <Col sm="12">
                            <Table responsive striped>
                              <thead>
                                <tr>
                                  <th>Seller</th>
                                  <th>Description</th>
                                  <th>Services</th>
                                  <th>Status</th>
                                  <th className="text-center">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {sellers
                                  .slice(0, sellerLimit)
                                  .map((item, index) => {
                                    return (
                                      <>
                                        <tr key={index}>
                                          <td>
                                            <div className="d-flex align-items-center">
                                              <Link
                                                to={`/womeyn/seller-profile/${item.id}`}
                                              >
                                                {item?.profileImageName ? (
                                                  <img
                                                    className="rounded me-3"
                                                    style={{
                                                      width: 64,
                                                      height: 64,
                                                    }}
                                                    src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item.profileImageName}`}
                                                    alt=""
                                                    loading="lazy"
                                                  />
                                                ) : (
                                                  <img
                                                    className="rounded me-3"
                                                    style={{
                                                      width: 64,
                                                      height: 64,
                                                    }}
                                                    src="https://sialifehospital.com/wp-content/uploads/2021/04/testimonial-1.png"
                                                    alt=""
                                                    loading="lazy"
                                                  />
                                                )}
                                              </Link>
                                              <Link
                                                className="media-support-info"
                                                to={`/womeyn/seller-profile/${item.id}`}
                                              >
                                                <h5 className="iq-sub-label text-uppercase">
                                                  {item.firstName}
                                                </h5>
                                                <p className="mb-0">
                                                  {item.email}
                                                </p>
                                              </Link>
                                            </div>
                                          </td>
                                          <td className="text-dark no-wrap">{`${description.slice(
                                            0,
                                            100
                                          )}...`}</td>
                                          <td className="text-dark no-wrap flex-container">
                                            <div>
                                              <Button
                                                type="button"
                                                variant="soft-secondary"
                                              >
                                                Clothing
                                              </Button>{" "}
                                              <Button
                                                type="button"
                                                variant="soft-secondary"
                                              >
                                                Personal Care
                                              </Button>{" "}
                                              <Button
                                                type="button"
                                                variant="soft-secondary"
                                              >
                                                Beauty
                                              </Button>{" "}
                                              <Button
                                                type="button"
                                                variant="soft-secondary"
                                              >
                                                Lifestyle
                                              </Button>{" "}
                                              <Button variant="icon btn-warning warning">
                                                +4
                                              </Button>
                                            </div>
                                          </td>

                                          <td>
                                            {item.stateId === 1 ? (
                                              <div className="d-flex gap-2 justify-content-start">
                                                <div className="status-box bg-success"></div>
                                                <p className="p-bold green-text">
                                                  Approved
                                                </p>
                                              </div>
                                            ) : item.stateId === 2 ? (
                                              <div className="d-flex gap-2 justify-content-start">
                                                <div className="status-box bg-info"></div>
                                                <p className="p-bold blue-text">
                                                  Pending
                                                </p>
                                              </div>
                                            ) : item.stateId === 3 ? (
                                              <div className="d-flex gap-2 justify-content-start">
                                                <div className="status-box "></div>
                                                <p className="p-bold yellow-text">
                                                  Pending Approval
                                                </p>
                                              </div>
                                            ) : item.stateId === 4 ? (
                                              <div className="d-flex gap-2 justify-content-start">
                                                <div className="status-box bg-danger"></div>
                                                <p className="p-bold red-text">
                                                  Rejected
                                                </p>
                                              </div>
                                            ) : null}
                                          </td>
                                          <td>
                                            {item.stateId === 1 ? (
                                              <>
                                                <div
                                                  className="d-flex gap-3 justify-content-start"
                                                  style={{
                                                    marginBottom: 12,
                                                    cursor: "pointer",
                                                  }}
                                                >
                                                  <svg
                                                    width="32"
                                                    height="32"
                                                    viewBox="0 0 32 32"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    onClick={() =>
                                                      handleShow(item)
                                                    }
                                                  >
                                                    <rect
                                                      width="32"
                                                      height="32"
                                                      rx="16"
                                                      fill="#E95A5A"
                                                    />
                                                    <path
                                                      d="M19.665 12.335C19.5731 12.2424 19.4639 12.169 19.3435 12.1188C19.2231 12.0686 19.094 12.0428 18.9636 12.0428C18.8332 12.0428 18.7041 12.0686 18.5837 12.1188C18.4633 12.169 18.354 12.2424 18.2622 12.335L16 14.6071L13.7378 12.335C13.5518 12.149 13.2995 12.0445 13.0364 12.0445C12.7733 12.0445 12.5211 12.149 12.335 12.335C12.149 12.5211 12.0445 12.7733 12.0445 13.0364C12.0445 13.2995 12.149 13.5518 12.335 13.7378L14.6071 16L12.335 18.2622C12.2424 18.354 12.169 18.4633 12.1188 18.5837C12.0686 18.7041 12.0428 18.8332 12.0428 18.9636C12.0428 19.094 12.0686 19.2231 12.1188 19.3435C12.169 19.4639 12.2424 19.5731 12.335 19.665C12.4269 19.7576 12.5361 19.831 12.6565 19.8812C12.7769 19.9313 12.906 19.9572 13.0364 19.9572C13.1668 19.9572 13.2959 19.9313 13.4163 19.8812C13.5367 19.831 13.646 19.7576 13.7378 19.665L16 17.3929L18.2622 19.665C18.354 19.7576 18.4633 19.831 18.5837 19.8812C18.7041 19.9313 18.8332 19.9572 18.9636 19.9572C19.094 19.9572 19.2231 19.9313 19.3435 19.8812C19.4639 19.831 19.5731 19.7576 19.665 19.665C19.7576 19.5731 19.831 19.4639 19.8812 19.3435C19.9313 19.2231 19.9572 19.094 19.9572 18.9636C19.9572 18.8332 19.9313 18.7041 19.8812 18.5837C19.831 18.4633 19.7576 18.354 19.665 18.2622L17.3929 16L19.665 13.7378C19.7576 13.646 19.831 13.5367 19.8812 13.4163C19.9313 13.2959 19.9572 13.1668 19.9572 13.0364C19.9572 12.906 19.9313 12.7769 19.8812 12.6565C19.831 12.5361 19.7576 12.4269 19.665 12.335ZM22.9842 9.01582C22.0729 8.07231 20.9829 7.31974 19.7776 6.80201C18.5724 6.28428 17.2761 6.01177 15.9644 6.00037C14.6528 5.98897 13.352 6.23892 12.1379 6.73563C10.9239 7.23233 9.82091 7.96585 8.89338 8.89338C7.96585 9.82091 7.23233 10.9239 6.73563 12.1379C6.23892 13.352 5.98897 14.6528 6.00037 15.9644C6.01177 17.2761 6.28428 18.5724 6.80201 19.7776C7.31974 20.9829 8.07231 22.0729 9.01582 22.9842C9.92709 23.9277 11.0171 24.6803 12.2224 25.198C13.4276 25.7157 14.7239 25.9882 16.0356 25.9996C17.3472 26.011 18.648 25.7611 19.8621 25.2644C21.0761 24.7677 22.1791 24.0342 23.1066 23.1066C24.0342 22.1791 24.7677 21.0761 25.2644 19.8621C25.7611 18.648 26.011 17.3472 25.9996 16.0356C25.9882 14.7239 25.7157 13.4276 25.198 12.2224C24.6803 11.0171 23.9277 9.92709 22.9842 9.01582ZM21.5913 21.5913C20.2992 22.8848 18.5986 23.6903 16.7792 23.8706C14.9598 24.0509 13.1342 23.5947 11.6134 22.5799C10.0926 21.5651 8.97074 20.0544 8.43889 18.3052C7.90704 16.5559 7.99813 14.6764 8.69666 12.9868C9.39518 11.2972 10.6579 9.90208 12.2697 9.0391C13.8815 8.17612 15.7427 7.89868 17.5361 8.25406C19.3296 8.60943 20.9443 9.57564 22.1052 10.988C23.2661 12.4005 23.9014 14.1717 23.9029 16C23.9064 17.0385 23.7039 18.0674 23.3071 19.0272C22.9104 19.9869 22.3272 20.8584 21.5913 21.5913Z"
                                                      fill="white"
                                                    />
                                                  </svg>
                                                </div>
                                              </>
                                            ) : item.stateId ===
                                              2 ? null : item.stateId === 3 ? (
                                              <div
                                                className="d-flex gap-2 justify-content-start"
                                                style={{
                                                  marginBottom: 12,
                                                  cursor: "pointer",
                                                }}
                                              >
                                                <svg
                                                  width="32"
                                                  height="32"
                                                  viewBox="0 0 32 32"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  onClick={() =>
                                                    actionApprove(item)
                                                  }
                                                >
                                                  <rect
                                                    width="32"
                                                    height="32"
                                                    rx="16"
                                                    fill="#198754"
                                                  />
                                                  <path
                                                    d="M18.72 12.79L14.43 17.09L12.78 15.44C12.6904 15.3353 12.58 15.2503 12.456 15.1903C12.3319 15.1303 12.1968 15.0965 12.0591 15.0912C11.9213 15.0859 11.784 15.1091 11.6557 15.1594C11.5274 15.2096 11.4108 15.2859 11.3134 15.3833C11.2159 15.4808 11.1396 15.5974 11.0894 15.7257C11.0391 15.854 11.0159 15.9913 11.0212 16.1291C11.0265 16.2668 11.0603 16.4019 11.1203 16.526C11.1803 16.65 11.2653 16.7604 11.37 16.85L13.72 19.21C13.8134 19.3027 13.9243 19.376 14.0461 19.4258C14.1679 19.4755 14.2984 19.5008 14.43 19.5C14.6923 19.4989 14.9437 19.3947 15.13 19.21L20.13 14.21C20.2237 14.117 20.2981 14.0064 20.3489 13.8846C20.3997 13.7627 20.4258 13.632 20.4258 13.5C20.4258 13.368 20.3997 13.2373 20.3489 13.1154C20.2981 12.9936 20.2237 12.883 20.13 12.79C19.9426 12.6037 19.6892 12.4992 19.425 12.4992C19.1608 12.4992 18.9074 12.6037 18.72 12.79ZM16 6C14.0222 6 12.0888 6.58649 10.4443 7.6853C8.79981 8.78412 7.51809 10.3459 6.76121 12.1732C6.00433 14.0004 5.8063 16.0111 6.19215 17.9509C6.578 19.8907 7.53041 21.6725 8.92894 23.0711C10.3275 24.4696 12.1093 25.422 14.0491 25.8079C15.9889 26.1937 17.9996 25.9957 19.8268 25.2388C21.6541 24.4819 23.2159 23.2002 24.3147 21.5557C25.4135 19.9112 26 17.9778 26 16C26 14.6868 25.7413 13.3864 25.2388 12.1732C24.7363 10.9599 23.9997 9.85752 23.0711 8.92893C22.1425 8.00035 21.0401 7.26375 19.8268 6.7612C18.6136 6.25866 17.3132 6 16 6ZM16 24C14.4178 24 12.871 23.5308 11.5554 22.6518C10.2398 21.7727 9.21447 20.5233 8.60897 19.0615C8.00347 17.5997 7.84504 15.9911 8.15372 14.4393C8.4624 12.8874 9.22433 11.462 10.3432 10.3431C11.462 9.22433 12.8874 8.4624 14.4393 8.15372C15.9911 7.84504 17.5997 8.00346 19.0615 8.60896C20.5233 9.21447 21.7727 10.2398 22.6518 11.5554C23.5308 12.871 24 14.4177 24 16C24 18.1217 23.1572 20.1566 21.6569 21.6569C20.1566 23.1571 18.1217 24 16 24Z"
                                                    fill="white"
                                                  />
                                                </svg>

                                                <svg
                                                  width="32"
                                                  height="32"
                                                  viewBox="0 0 32 32"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  onClick={() =>
                                                    handleShow(item)
                                                  }
                                                  // onClick={handleShow}
                                                >
                                                  <rect
                                                    width="32"
                                                    height="32"
                                                    rx="16"
                                                    fill="#E95A5A"
                                                  />
                                                  <path
                                                    d="M19.665 12.335C19.5731 12.2424 19.4639 12.169 19.3435 12.1188C19.2231 12.0686 19.094 12.0428 18.9636 12.0428C18.8332 12.0428 18.7041 12.0686 18.5837 12.1188C18.4633 12.169 18.354 12.2424 18.2622 12.335L16 14.6071L13.7378 12.335C13.5518 12.149 13.2995 12.0445 13.0364 12.0445C12.7733 12.0445 12.5211 12.149 12.335 12.335C12.149 12.5211 12.0445 12.7733 12.0445 13.0364C12.0445 13.2995 12.149 13.5518 12.335 13.7378L14.6071 16L12.335 18.2622C12.2424 18.354 12.169 18.4633 12.1188 18.5837C12.0686 18.7041 12.0428 18.8332 12.0428 18.9636C12.0428 19.094 12.0686 19.2231 12.1188 19.3435C12.169 19.4639 12.2424 19.5731 12.335 19.665C12.4269 19.7576 12.5361 19.831 12.6565 19.8812C12.7769 19.9313 12.906 19.9572 13.0364 19.9572C13.1668 19.9572 13.2959 19.9313 13.4163 19.8812C13.5367 19.831 13.646 19.7576 13.7378 19.665L16 17.3929L18.2622 19.665C18.354 19.7576 18.4633 19.831 18.5837 19.8812C18.7041 19.9313 18.8332 19.9572 18.9636 19.9572C19.094 19.9572 19.2231 19.9313 19.3435 19.8812C19.4639 19.831 19.5731 19.7576 19.665 19.665C19.7576 19.5731 19.831 19.4639 19.8812 19.3435C19.9313 19.2231 19.9572 19.094 19.9572 18.9636C19.9572 18.8332 19.9313 18.7041 19.8812 18.5837C19.831 18.4633 19.7576 18.354 19.665 18.2622L17.3929 16L19.665 13.7378C19.7576 13.646 19.831 13.5367 19.8812 13.4163C19.9313 13.2959 19.9572 13.1668 19.9572 13.0364C19.9572 12.906 19.9313 12.7769 19.8812 12.6565C19.831 12.5361 19.7576 12.4269 19.665 12.335ZM22.9842 9.01582C22.0729 8.07231 20.9829 7.31974 19.7776 6.80201C18.5724 6.28428 17.2761 6.01177 15.9644 6.00037C14.6528 5.98897 13.352 6.23892 12.1379 6.73563C10.9239 7.23233 9.82091 7.96585 8.89338 8.89338C7.96585 9.82091 7.23233 10.9239 6.73563 12.1379C6.23892 13.352 5.98897 14.6528 6.00037 15.9644C6.01177 17.2761 6.28428 18.5724 6.80201 19.7776C7.31974 20.9829 8.07231 22.0729 9.01582 22.9842C9.92709 23.9277 11.0171 24.6803 12.2224 25.198C13.4276 25.7157 14.7239 25.9882 16.0356 25.9996C17.3472 26.011 18.648 25.7611 19.8621 25.2644C21.0761 24.7677 22.1791 24.0342 23.1066 23.1066C24.0342 22.1791 24.7677 21.0761 25.2644 19.8621C25.7611 18.648 26.011 17.3472 25.9996 16.0356C25.9882 14.7239 25.7157 13.4276 25.198 12.2224C24.6803 11.0171 23.9277 9.92709 22.9842 9.01582ZM21.5913 21.5913C20.2992 22.8848 18.5986 23.6903 16.7792 23.8706C14.9598 24.0509 13.1342 23.5947 11.6134 22.5799C10.0926 21.5651 8.97074 20.0544 8.43889 18.3052C7.90704 16.5559 7.99813 14.6764 8.69666 12.9868C9.39518 11.2972 10.6579 9.90208 12.2697 9.0391C13.8815 8.17612 15.7427 7.89868 17.5361 8.25406C19.3296 8.60943 20.9443 9.57564 22.1052 10.988C23.2661 12.4005 23.9014 14.1717 23.9029 16C23.9064 17.0385 23.7039 18.0674 23.3071 19.0272C22.9104 19.9869 22.3272 20.8584 21.5913 21.5913Z"
                                                    fill="white"
                                                  />
                                                </svg>
                                              </div>
                                            ) : item.stateId === 4 ? (
                                              <div
                                                className="d-flex gap-3 justify-content-start"
                                                style={{
                                                  marginBottom: 12,
                                                  cursor: "pointer",
                                                }}
                                              >
                                                <svg
                                                  width="32"
                                                  height="32"
                                                  viewBox="0 0 32 32"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  onClick={() =>
                                                    actionApprove(item)
                                                  }
                                                >
                                                  <rect
                                                    width="32"
                                                    height="32"
                                                    rx="16"
                                                    fill="#198754"
                                                  />
                                                  <path
                                                    d="M18.72 12.79L14.43 17.09L12.78 15.44C12.6904 15.3353 12.58 15.2503 12.456 15.1903C12.3319 15.1303 12.1968 15.0965 12.0591 15.0912C11.9213 15.0859 11.784 15.1091 11.6557 15.1594C11.5274 15.2096 11.4108 15.2859 11.3134 15.3833C11.2159 15.4808 11.1396 15.5974 11.0894 15.7257C11.0391 15.854 11.0159 15.9913 11.0212 16.1291C11.0265 16.2668 11.0603 16.4019 11.1203 16.526C11.1803 16.65 11.2653 16.7604 11.37 16.85L13.72 19.21C13.8134 19.3027 13.9243 19.376 14.0461 19.4258C14.1679 19.4755 14.2984 19.5008 14.43 19.5C14.6923 19.4989 14.9437 19.3947 15.13 19.21L20.13 14.21C20.2237 14.117 20.2981 14.0064 20.3489 13.8846C20.3997 13.7627 20.4258 13.632 20.4258 13.5C20.4258 13.368 20.3997 13.2373 20.3489 13.1154C20.2981 12.9936 20.2237 12.883 20.13 12.79C19.9426 12.6037 19.6892 12.4992 19.425 12.4992C19.1608 12.4992 18.9074 12.6037 18.72 12.79ZM16 6C14.0222 6 12.0888 6.58649 10.4443 7.6853C8.79981 8.78412 7.51809 10.3459 6.76121 12.1732C6.00433 14.0004 5.8063 16.0111 6.19215 17.9509C6.578 19.8907 7.53041 21.6725 8.92894 23.0711C10.3275 24.4696 12.1093 25.422 14.0491 25.8079C15.9889 26.1937 17.9996 25.9957 19.8268 25.2388C21.6541 24.4819 23.2159 23.2002 24.3147 21.5557C25.4135 19.9112 26 17.9778 26 16C26 14.6868 25.7413 13.3864 25.2388 12.1732C24.7363 10.9599 23.9997 9.85752 23.0711 8.92893C22.1425 8.00035 21.0401 7.26375 19.8268 6.7612C18.6136 6.25866 17.3132 6 16 6ZM16 24C14.4178 24 12.871 23.5308 11.5554 22.6518C10.2398 21.7727 9.21447 20.5233 8.60897 19.0615C8.00347 17.5997 7.84504 15.9911 8.15372 14.4393C8.4624 12.8874 9.22433 11.462 10.3432 10.3431C11.462 9.22433 12.8874 8.4624 14.4393 8.15372C15.9911 7.84504 17.5997 8.00346 19.0615 8.60896C20.5233 9.21447 21.7727 10.2398 22.6518 11.5554C23.5308 12.871 24 14.4177 24 16C24 18.1217 23.1572 20.1566 21.6569 21.6569C20.1566 23.1571 18.1217 24 16 24Z"
                                                    fill="white"
                                                  />
                                                </svg>
                                              </div>
                                            ) : null}
                                          </td>
                                        </tr>
                                      </>
                                    );
                                  })}
                              </tbody>
                            </Table>
                            <Modal
                              show={show}
                              onHide={handleClose}
                              backdrop="static"
                              keyboard={false}
                              centered
                            >
                              <Modal.Header closeButton>
                                <Modal.Title style={{ color: "red" }}>
                                  Alert..!
                                </Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                Do you really want to reject the seller?
                              </Modal.Body>
                              <Modal.Footer>
                                <Button
                                  variant="secondary"
                                  onClick={handleClose}
                                >
                                  Cancel
                                </Button>
                                <Button
                                  variant="primary"
                                  onClick={actionReject}
                                >
                                  {loading ? (
                                    <span
                                      class="spinner-border spinner-border-sm"
                                      role="status"
                                      aria-hidden="true"
                                    ></span>
                                  ) : (
                                    "Confirm"
                                  )}
                                </Button>
                              </Modal.Footer>
                            </Modal>

                            {sellerLimit[sellerLimit.length - 1] ===
                            sellers[sellers.length - 1] ? (
                              <div className="loadMore-div">
                                <Button
                                  className="mt-5 loadMore-button"
                                  onClick={loadMoreSellers}
                                >
                                  Load More
                                </Button>
                              </div>
                            ) : null}
                          </Col>
                        </Row>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane
                      eventKey="2"
                      id="nav-sellers"
                      role="tab"
                      aria-labelledby="nav-sellers-tab"
                    >
                      <div></div>
                    </Tab.Pane>
                  </Tab.Content>
                ) : null}

                {/* <Tab.Content
                  className="mt-4 iq-tab-fade-up"
                  id="nav-tabContent"
                >
                  <Tab.Pane
                    eventKey="1"
                    id="nav-admin"
                    role="tab"
                    aria-labelledby="nav-admin-tab"
                  >
                    <div className="d-flex flex-column">
                      <Row>
                        <Col sm="12">
                          <Table responsive striped>
                            <thead>
                              <tr>
                                <th>Seller</th>
                                <th>Description</th>
                                <th>Services/Products</th>
                                <th>Status</th>
                                <th className="text-center">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {sellers
                                .slice(0, sellerLimit)
                                .map((item, index) => {
                                  return (
                                    <>
                                      <tr key={index}>
                                        <td>
                                          <div className="d-flex align-items-center">
                                            <Link
                                              to={`/womeyn/seller-profile/${item.id}`}
                                            >
                                              {item?.profileImageName ? (
                                                <img
                                                  className="rounded me-3"
                                                  style={{
                                                    width: 64,
                                                    height: 64,
                                                  }}
                                                  src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item.profileImageName}`}
                                                  alt=""
                                                  loading="lazy"
                                                />
                                              ) : (
                                                <img
                                                  className="rounded me-3"
                                                  style={{
                                                    width: 64,
                                                    height: 64,
                                                  }}
                                                  src="https://sialifehospital.com/wp-content/uploads/2021/04/testimonial-1.png"
                                                  alt=""
                                                  loading="lazy"
                                                />
                                              )}
                                            </Link>
                                            <Link
                                              className="media-support-info"
                                              to={`/womeyn/seller-profile/${item.id}`}
                                            >
                                              <h5 className="iq-sub-label text-uppercase">
                                                {item.firstName}
                                              </h5>
                                              <p className="mb-0">
                                                {item.email}
                                              </p>
                                            </Link>
                                          </div>
                                        </td>
                                        <td className="text-dark no-wrap">{`${description.slice(
                                          0,
                                          100
                                        )}...`}</td>
                                        <td className="text-dark no-wrap flex-container">
                                          <div>
                                            <Button
                                              type="button"
                                              variant="soft-secondary"
                                            >
                                              Clothing
                                            </Button>{" "}
                                            <Button
                                              type="button"
                                              variant="soft-secondary"
                                            >
                                              Personal Care
                                            </Button>{" "}
                                            <Button
                                              type="button"
                                              variant="soft-secondary"
                                            >
                                              Beauty
                                            </Button>{" "}
                                            <Button
                                              type="button"
                                              variant="soft-secondary"
                                            >
                                              Lifestyle
                                            </Button>{" "}
                                            <Button variant="icon btn-warning warning">
                                              +4
                                            </Button>
                                          </div>
                                        </td>

                                        <td>
                                          {item.stateId === 1 ? (
                                            <div className="d-flex gap-2 justify-content-start">
                                              <div className="status-box bg-success"></div>
                                              <p className="p-bold green-text">
                                                Approved
                                              </p>
                                            </div>
                                          ) : item.stateId === 2 ? (
                                            <div className="d-flex gap-2 justify-content-start">
                                              <div className="status-box bg-info"></div>
                                              <p className="p-bold blue-text">
                                                Pending
                                              </p>
                                            </div>
                                          ) : item.stateId === 3 ? (
                                            <div className="d-flex gap-2 justify-content-start">
                                              <div className="status-box "></div>
                                              <p className="p-bold yellow-text">
                                                Pending Approval
                                              </p>
                                            </div>
                                          ) : item.stateId === 4 ? (
                                            <div className="d-flex gap-2 justify-content-start">
                                              <div className="status-box bg-danger"></div>
                                              <p className="p-bold red-text">
                                                Rejected
                                              </p>
                                            </div>
                                          ) : null}
                                        </td>
                                        <td>
                                          {item.stateId === 1 ? (
                                            <>
                                              <div
                                                className="d-flex gap-3 justify-content-start"
                                                style={{
                                                  marginBottom: 12,
                                                  cursor: "pointer",
                                                }}
                                              >
                                                <svg
                                                  width="32"
                                                  height="32"
                                                  viewBox="0 0 32 32"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  onClick={() =>
                                                    handleShow(item)
                                                  }
                                                >
                                                  <rect
                                                    width="32"
                                                    height="32"
                                                    rx="16"
                                                    fill="#E95A5A"
                                                  />
                                                  <path
                                                    d="M19.665 12.335C19.5731 12.2424 19.4639 12.169 19.3435 12.1188C19.2231 12.0686 19.094 12.0428 18.9636 12.0428C18.8332 12.0428 18.7041 12.0686 18.5837 12.1188C18.4633 12.169 18.354 12.2424 18.2622 12.335L16 14.6071L13.7378 12.335C13.5518 12.149 13.2995 12.0445 13.0364 12.0445C12.7733 12.0445 12.5211 12.149 12.335 12.335C12.149 12.5211 12.0445 12.7733 12.0445 13.0364C12.0445 13.2995 12.149 13.5518 12.335 13.7378L14.6071 16L12.335 18.2622C12.2424 18.354 12.169 18.4633 12.1188 18.5837C12.0686 18.7041 12.0428 18.8332 12.0428 18.9636C12.0428 19.094 12.0686 19.2231 12.1188 19.3435C12.169 19.4639 12.2424 19.5731 12.335 19.665C12.4269 19.7576 12.5361 19.831 12.6565 19.8812C12.7769 19.9313 12.906 19.9572 13.0364 19.9572C13.1668 19.9572 13.2959 19.9313 13.4163 19.8812C13.5367 19.831 13.646 19.7576 13.7378 19.665L16 17.3929L18.2622 19.665C18.354 19.7576 18.4633 19.831 18.5837 19.8812C18.7041 19.9313 18.8332 19.9572 18.9636 19.9572C19.094 19.9572 19.2231 19.9313 19.3435 19.8812C19.4639 19.831 19.5731 19.7576 19.665 19.665C19.7576 19.5731 19.831 19.4639 19.8812 19.3435C19.9313 19.2231 19.9572 19.094 19.9572 18.9636C19.9572 18.8332 19.9313 18.7041 19.8812 18.5837C19.831 18.4633 19.7576 18.354 19.665 18.2622L17.3929 16L19.665 13.7378C19.7576 13.646 19.831 13.5367 19.8812 13.4163C19.9313 13.2959 19.9572 13.1668 19.9572 13.0364C19.9572 12.906 19.9313 12.7769 19.8812 12.6565C19.831 12.5361 19.7576 12.4269 19.665 12.335ZM22.9842 9.01582C22.0729 8.07231 20.9829 7.31974 19.7776 6.80201C18.5724 6.28428 17.2761 6.01177 15.9644 6.00037C14.6528 5.98897 13.352 6.23892 12.1379 6.73563C10.9239 7.23233 9.82091 7.96585 8.89338 8.89338C7.96585 9.82091 7.23233 10.9239 6.73563 12.1379C6.23892 13.352 5.98897 14.6528 6.00037 15.9644C6.01177 17.2761 6.28428 18.5724 6.80201 19.7776C7.31974 20.9829 8.07231 22.0729 9.01582 22.9842C9.92709 23.9277 11.0171 24.6803 12.2224 25.198C13.4276 25.7157 14.7239 25.9882 16.0356 25.9996C17.3472 26.011 18.648 25.7611 19.8621 25.2644C21.0761 24.7677 22.1791 24.0342 23.1066 23.1066C24.0342 22.1791 24.7677 21.0761 25.2644 19.8621C25.7611 18.648 26.011 17.3472 25.9996 16.0356C25.9882 14.7239 25.7157 13.4276 25.198 12.2224C24.6803 11.0171 23.9277 9.92709 22.9842 9.01582ZM21.5913 21.5913C20.2992 22.8848 18.5986 23.6903 16.7792 23.8706C14.9598 24.0509 13.1342 23.5947 11.6134 22.5799C10.0926 21.5651 8.97074 20.0544 8.43889 18.3052C7.90704 16.5559 7.99813 14.6764 8.69666 12.9868C9.39518 11.2972 10.6579 9.90208 12.2697 9.0391C13.8815 8.17612 15.7427 7.89868 17.5361 8.25406C19.3296 8.60943 20.9443 9.57564 22.1052 10.988C23.2661 12.4005 23.9014 14.1717 23.9029 16C23.9064 17.0385 23.7039 18.0674 23.3071 19.0272C22.9104 19.9869 22.3272 20.8584 21.5913 21.5913Z"
                                                    fill="white"
                                                  />
                                                </svg>
                                              </div>
                                            </>
                                          ) : item.stateId ===
                                            2 ? null : item.stateId === 3 ? (
                                            <div
                                              className="d-flex gap-2 justify-content-start"
                                              style={{
                                                marginBottom: 12,
                                                cursor: "pointer",
                                              }}
                                            >
                                              <svg
                                                width="32"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                onClick={() =>
                                                  actionApprove(item)
                                                }
                                              >
                                                <rect
                                                  width="32"
                                                  height="32"
                                                  rx="16"
                                                  fill="#198754"
                                                />
                                                <path
                                                  d="M18.72 12.79L14.43 17.09L12.78 15.44C12.6904 15.3353 12.58 15.2503 12.456 15.1903C12.3319 15.1303 12.1968 15.0965 12.0591 15.0912C11.9213 15.0859 11.784 15.1091 11.6557 15.1594C11.5274 15.2096 11.4108 15.2859 11.3134 15.3833C11.2159 15.4808 11.1396 15.5974 11.0894 15.7257C11.0391 15.854 11.0159 15.9913 11.0212 16.1291C11.0265 16.2668 11.0603 16.4019 11.1203 16.526C11.1803 16.65 11.2653 16.7604 11.37 16.85L13.72 19.21C13.8134 19.3027 13.9243 19.376 14.0461 19.4258C14.1679 19.4755 14.2984 19.5008 14.43 19.5C14.6923 19.4989 14.9437 19.3947 15.13 19.21L20.13 14.21C20.2237 14.117 20.2981 14.0064 20.3489 13.8846C20.3997 13.7627 20.4258 13.632 20.4258 13.5C20.4258 13.368 20.3997 13.2373 20.3489 13.1154C20.2981 12.9936 20.2237 12.883 20.13 12.79C19.9426 12.6037 19.6892 12.4992 19.425 12.4992C19.1608 12.4992 18.9074 12.6037 18.72 12.79ZM16 6C14.0222 6 12.0888 6.58649 10.4443 7.6853C8.79981 8.78412 7.51809 10.3459 6.76121 12.1732C6.00433 14.0004 5.8063 16.0111 6.19215 17.9509C6.578 19.8907 7.53041 21.6725 8.92894 23.0711C10.3275 24.4696 12.1093 25.422 14.0491 25.8079C15.9889 26.1937 17.9996 25.9957 19.8268 25.2388C21.6541 24.4819 23.2159 23.2002 24.3147 21.5557C25.4135 19.9112 26 17.9778 26 16C26 14.6868 25.7413 13.3864 25.2388 12.1732C24.7363 10.9599 23.9997 9.85752 23.0711 8.92893C22.1425 8.00035 21.0401 7.26375 19.8268 6.7612C18.6136 6.25866 17.3132 6 16 6ZM16 24C14.4178 24 12.871 23.5308 11.5554 22.6518C10.2398 21.7727 9.21447 20.5233 8.60897 19.0615C8.00347 17.5997 7.84504 15.9911 8.15372 14.4393C8.4624 12.8874 9.22433 11.462 10.3432 10.3431C11.462 9.22433 12.8874 8.4624 14.4393 8.15372C15.9911 7.84504 17.5997 8.00346 19.0615 8.60896C20.5233 9.21447 21.7727 10.2398 22.6518 11.5554C23.5308 12.871 24 14.4177 24 16C24 18.1217 23.1572 20.1566 21.6569 21.6569C20.1566 23.1571 18.1217 24 16 24Z"
                                                  fill="white"
                                                />
                                              </svg>

                                              <svg
                                                width="32"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                onClick={() => handleShow(item)}
                                                // onClick={handleShow}
                                              >
                                                <rect
                                                  width="32"
                                                  height="32"
                                                  rx="16"
                                                  fill="#E95A5A"
                                                />
                                                <path
                                                  d="M19.665 12.335C19.5731 12.2424 19.4639 12.169 19.3435 12.1188C19.2231 12.0686 19.094 12.0428 18.9636 12.0428C18.8332 12.0428 18.7041 12.0686 18.5837 12.1188C18.4633 12.169 18.354 12.2424 18.2622 12.335L16 14.6071L13.7378 12.335C13.5518 12.149 13.2995 12.0445 13.0364 12.0445C12.7733 12.0445 12.5211 12.149 12.335 12.335C12.149 12.5211 12.0445 12.7733 12.0445 13.0364C12.0445 13.2995 12.149 13.5518 12.335 13.7378L14.6071 16L12.335 18.2622C12.2424 18.354 12.169 18.4633 12.1188 18.5837C12.0686 18.7041 12.0428 18.8332 12.0428 18.9636C12.0428 19.094 12.0686 19.2231 12.1188 19.3435C12.169 19.4639 12.2424 19.5731 12.335 19.665C12.4269 19.7576 12.5361 19.831 12.6565 19.8812C12.7769 19.9313 12.906 19.9572 13.0364 19.9572C13.1668 19.9572 13.2959 19.9313 13.4163 19.8812C13.5367 19.831 13.646 19.7576 13.7378 19.665L16 17.3929L18.2622 19.665C18.354 19.7576 18.4633 19.831 18.5837 19.8812C18.7041 19.9313 18.8332 19.9572 18.9636 19.9572C19.094 19.9572 19.2231 19.9313 19.3435 19.8812C19.4639 19.831 19.5731 19.7576 19.665 19.665C19.7576 19.5731 19.831 19.4639 19.8812 19.3435C19.9313 19.2231 19.9572 19.094 19.9572 18.9636C19.9572 18.8332 19.9313 18.7041 19.8812 18.5837C19.831 18.4633 19.7576 18.354 19.665 18.2622L17.3929 16L19.665 13.7378C19.7576 13.646 19.831 13.5367 19.8812 13.4163C19.9313 13.2959 19.9572 13.1668 19.9572 13.0364C19.9572 12.906 19.9313 12.7769 19.8812 12.6565C19.831 12.5361 19.7576 12.4269 19.665 12.335ZM22.9842 9.01582C22.0729 8.07231 20.9829 7.31974 19.7776 6.80201C18.5724 6.28428 17.2761 6.01177 15.9644 6.00037C14.6528 5.98897 13.352 6.23892 12.1379 6.73563C10.9239 7.23233 9.82091 7.96585 8.89338 8.89338C7.96585 9.82091 7.23233 10.9239 6.73563 12.1379C6.23892 13.352 5.98897 14.6528 6.00037 15.9644C6.01177 17.2761 6.28428 18.5724 6.80201 19.7776C7.31974 20.9829 8.07231 22.0729 9.01582 22.9842C9.92709 23.9277 11.0171 24.6803 12.2224 25.198C13.4276 25.7157 14.7239 25.9882 16.0356 25.9996C17.3472 26.011 18.648 25.7611 19.8621 25.2644C21.0761 24.7677 22.1791 24.0342 23.1066 23.1066C24.0342 22.1791 24.7677 21.0761 25.2644 19.8621C25.7611 18.648 26.011 17.3472 25.9996 16.0356C25.9882 14.7239 25.7157 13.4276 25.198 12.2224C24.6803 11.0171 23.9277 9.92709 22.9842 9.01582ZM21.5913 21.5913C20.2992 22.8848 18.5986 23.6903 16.7792 23.8706C14.9598 24.0509 13.1342 23.5947 11.6134 22.5799C10.0926 21.5651 8.97074 20.0544 8.43889 18.3052C7.90704 16.5559 7.99813 14.6764 8.69666 12.9868C9.39518 11.2972 10.6579 9.90208 12.2697 9.0391C13.8815 8.17612 15.7427 7.89868 17.5361 8.25406C19.3296 8.60943 20.9443 9.57564 22.1052 10.988C23.2661 12.4005 23.9014 14.1717 23.9029 16C23.9064 17.0385 23.7039 18.0674 23.3071 19.0272C22.9104 19.9869 22.3272 20.8584 21.5913 21.5913Z"
                                                  fill="white"
                                                />
                                              </svg>
                                            </div>
                                          ) : item.stateId === 4 ? (
                                            <div
                                              className="d-flex gap-3 justify-content-start"
                                              style={{
                                                marginBottom: 12,
                                                cursor: "pointer",
                                              }}
                                            >
                                              <svg
                                                width="32"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                onClick={() =>
                                                  actionApprove(item)
                                                }
                                              >
                                                <rect
                                                  width="32"
                                                  height="32"
                                                  rx="16"
                                                  fill="#198754"
                                                />
                                                <path
                                                  d="M18.72 12.79L14.43 17.09L12.78 15.44C12.6904 15.3353 12.58 15.2503 12.456 15.1903C12.3319 15.1303 12.1968 15.0965 12.0591 15.0912C11.9213 15.0859 11.784 15.1091 11.6557 15.1594C11.5274 15.2096 11.4108 15.2859 11.3134 15.3833C11.2159 15.4808 11.1396 15.5974 11.0894 15.7257C11.0391 15.854 11.0159 15.9913 11.0212 16.1291C11.0265 16.2668 11.0603 16.4019 11.1203 16.526C11.1803 16.65 11.2653 16.7604 11.37 16.85L13.72 19.21C13.8134 19.3027 13.9243 19.376 14.0461 19.4258C14.1679 19.4755 14.2984 19.5008 14.43 19.5C14.6923 19.4989 14.9437 19.3947 15.13 19.21L20.13 14.21C20.2237 14.117 20.2981 14.0064 20.3489 13.8846C20.3997 13.7627 20.4258 13.632 20.4258 13.5C20.4258 13.368 20.3997 13.2373 20.3489 13.1154C20.2981 12.9936 20.2237 12.883 20.13 12.79C19.9426 12.6037 19.6892 12.4992 19.425 12.4992C19.1608 12.4992 18.9074 12.6037 18.72 12.79ZM16 6C14.0222 6 12.0888 6.58649 10.4443 7.6853C8.79981 8.78412 7.51809 10.3459 6.76121 12.1732C6.00433 14.0004 5.8063 16.0111 6.19215 17.9509C6.578 19.8907 7.53041 21.6725 8.92894 23.0711C10.3275 24.4696 12.1093 25.422 14.0491 25.8079C15.9889 26.1937 17.9996 25.9957 19.8268 25.2388C21.6541 24.4819 23.2159 23.2002 24.3147 21.5557C25.4135 19.9112 26 17.9778 26 16C26 14.6868 25.7413 13.3864 25.2388 12.1732C24.7363 10.9599 23.9997 9.85752 23.0711 8.92893C22.1425 8.00035 21.0401 7.26375 19.8268 6.7612C18.6136 6.25866 17.3132 6 16 6ZM16 24C14.4178 24 12.871 23.5308 11.5554 22.6518C10.2398 21.7727 9.21447 20.5233 8.60897 19.0615C8.00347 17.5997 7.84504 15.9911 8.15372 14.4393C8.4624 12.8874 9.22433 11.462 10.3432 10.3431C11.462 9.22433 12.8874 8.4624 14.4393 8.15372C15.9911 7.84504 17.5997 8.00346 19.0615 8.60896C20.5233 9.21447 21.7727 10.2398 22.6518 11.5554C23.5308 12.871 24 14.4177 24 16C24 18.1217 23.1572 20.1566 21.6569 21.6569C20.1566 23.1571 18.1217 24 16 24Z"
                                                  fill="white"
                                                />
                                              </svg>
                                            </div>
                                          ) : null}
                                        </td>
                                      </tr>
                                    </>
                                  );
                                })}
                            </tbody>
                          </Table>
                          <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                            centered
                          >
                            <Modal.Header closeButton>
                              <Modal.Title style={{ color: "red" }}>
                                Alert..!
                              </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              Do you really want to reject the seller?
                            </Modal.Body>
                            <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>
                                Cancel
                              </Button>
                              <Button variant="primary" onClick={actionReject}>
                                {loading ? (
                                  <span
                                    class="spinner-border spinner-border-sm"
                                    role="status"
                                    aria-hidden="true"
                                  ></span>
                                ) : (
                                  "Confirm"
                                )}
                              </Button>
                            </Modal.Footer>
                          </Modal>

                          {sellerLimit[sellerLimit.length - 1] ===
                          sellers[sellers.length - 1] ? (
                            <div className="loadMore-div">
                              <Button
                                className="mt-5 loadMore-button"
                                onClick={loadMoreSellers}
                              >
                                Load More
                              </Button>
                            </div>
                          ) : null}
                        </Col>
                      </Row>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="2"
                    id="nav-sellers"
                    role="tab"
                    aria-labelledby="nav-sellers-tab"
                  >
                    <div></div>
                  </Tab.Pane>
                </Tab.Content> */}
              </Tab.Container>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Fragment>
  );
});

export default SellerApproval;
