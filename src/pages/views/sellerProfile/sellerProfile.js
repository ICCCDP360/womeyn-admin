import { memo, Fragment, useState, useRef, useEffect } from "react";

//react-bootstrap
import { Row, Col, Image, Form, Button } from "react-bootstrap";

// Router
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";

//components
import Card from "../../../components/bootstrap/card";

// import { GetSellerByIdServices } from "../../../services/getSellerById-services/getSellerById-services";
import {
  getSellerByIdServices,
  sellerApprovalServices,
} from "../../../services/seller/sellerServices";

//images
import Nodata from "../../../assets/noData.jpg";
import Modal from "react-bootstrap/Modal";

const SellerProfile = memo(() => {
  const { id } = useParams();

  const [users, setUsers] = useState([]);
  const [sellerProfile, setSellerProfile] = useState(false);

  useEffect(() => {
    setLoading(true);
    getSellerByIdServices(id)
      .then((res) => {
        setLoading(false);
        // console.log("res: ", res?.data.length);
        if (res?.data.length === 0) {
          setSellerProfile(false);
        } else {
          setSellerProfile(true);
        }
        setUsers(res?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const [userId, setUserId] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setUserId(id);
    setShow(true);
  };

  // console.log("userId: " + userId);
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
  const actionApprove = (id) => {
    setLoading(true);
    const data = {
      stateId: "1",
    };
    sellerApprovalServices(id, data)
      .then((res) => {
        setLoading(false);
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };

  console.log("Users", typeof users.length);

  return (
    <Fragment>
      {loading ? (
        <div>
          <h2>loading.....</h2>
        </div>
      ) : (
        <div>
          {users.length === 1 ? (
            <>
              {users.map((user, index) => {
                return (
                  <div key={index}>
                    <div className="d-flex flex-row justify-content-between mb-3">
                      <h2>Seller Details</h2>
                      {user.stateId === 1 ? (
                        <div className="d-flex gap-2">
                          <Button onClick={() => handleShow(user?.userId)}>
                            Reject
                          </Button>
                        </div>
                      ) : user.stateId === 2 ? null : user.stateId === 3 ? (
                        <div className="d-flex gap-2">
                          <div className="d-flex gap-2">
                            <Button onClick={() => handleShow(user?.userId)}>
                              Reject
                            </Button>
                            <Button onClick={() => actionApprove(user?.userId)}>
                              {loading ? (
                                <span
                                  class="spinner-border spinner-border-sm"
                                  role="status"
                                  aria-hidden="true"
                                ></span>
                              ) : (
                                "Approve"
                              )}
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="d-flex gap-2">
                          <Button onClick={() => actionApprove(user?.userId)}>
                            {loading ? (
                              <span
                                class="spinner-border spinner-border-sm"
                                role="status"
                                aria-hidden="true"
                              ></span>
                            ) : (
                              "Approve"
                            )}
                          </Button>
                        </div>
                      )}
                    </div>
                    <Row>
                      <Col>
                        <Card style={{ padding: "0px" }}>
                          <Card.Header className="d-flex justify-content-between">
                            <div className="header-title">
                              <h4 className="card-title">Personal Details</h4>
                            </div>
                          </Card.Header>
                          <Card.Body>
                            <div className="new-user-info">
                              <div className="row">
                                <div className="col-md-6">
                                  <h6>First Name:</h6>
                                  <p>{user.firstName}</p>
                                </div>
                                <div className="col-md-6">
                                  <h6>Last Name:</h6>
                                  <p>{user.lastName}</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <h6>Contact Number:</h6>
                                  <p>{user.contactNumber}</p>
                                </div>
                                <div className="col-md-6">
                                  <h6>Email ID:</h6>
                                  <p>{user.email}</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <h6>House no. / Unit no:</h6>
                                  <p> {user?.houseNo}</p>
                                </div>
                                <div className="col-md-6">
                                  <h6>City / Town / Suburb:</h6>
                                  <p>{user?.cityName}</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <h6>Street Address:</h6>
                                  <p>{user?.streetAddress}</p>
                                </div>
                                <div className="col-md-6">
                                  <h6>Province / State:</h6>
                                  <p>{user?.stateName}</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <h6>Country:</h6>
                                  <p>{user?.countryId}</p>
                                </div>
                                <div className="col-md-6">
                                  <h6>Postcode / ZIP Code:</h6>
                                  <p>{user?.postelCode}</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm-12">
                                  <h6>Profile Description:</h6>
                                  <p>{user?.profileDescription}</p>
                                </div>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Card style={{ padding: "0px" }}>
                          <Card.Header className="d-flex justify-content-between">
                            <div className="header-title">
                              <h4 className="card-title">Business Details</h4>
                            </div>
                          </Card.Header>
                          <Card.Body>
                            <div className="new-user-info">
                              <div className="row">
                                <div className="col-md-6">
                                  <h6>Name of your business:</h6>
                                  <p>{user?.businessName}</p>
                                </div>
                                <div className="col-md-6">
                                  <h6>Website:</h6>
                                  <p>{user?.websiteAddress}</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <h6>Service Type:</h6>
                                  <p>{user?.categoryTypeId}</p>
                                </div>
                                <div className="col-md-6">
                                  <h6>Contact Number:</h6>
                                  <p>{user?.businessContactNumber}</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <h6>Business Email ID:</h6>
                                  <p> {user?.businessEmailId}</p>
                                </div>
                                <div className="col-md-6">
                                  <h6>Business State / Country:</h6>
                                  <p>{user?.businessState}</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <h6>ABN Number:</h6>
                                  <p>{user?.abnNumber}</p>
                                </div>
                                <div className="col-md-6">
                                  <h6>Business Address:</h6>
                                  <p>{user?.businessAddress}</p>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-sm-12">
                                  <h6>Product Description:</h6>
                                  <p>{user?.productDescription}</p>
                                </div>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Card style={{ padding: "0px" }}>
                          <Card.Header className="d-flex justify-content-between">
                            <div className="header-title">
                              <h4 className="card-title">Taxation Details</h4>
                            </div>
                          </Card.Header>
                          <Card.Body>
                            <div className="new-user-info">
                              <div className="row">
                                <div className="col-md-6">
                                  <h6>Legal Business Name:</h6>
                                  <p>{user?.legalBusinessName}</p>
                                </div>
                                <div className="col-md-6">
                                  <h6>Organisaton Type:</h6>
                                  <p>{user?.organizationTypeId}</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <h6>GST Number:</h6>
                                  <p>{user?.gstNumber}</p>
                                </div>
                                <div className="col-md-6">
                                  <h6>TFN Number:</h6>
                                  <p>{user?.tfnNumber}</p>
                                </div>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Card style={{ padding: "0px" }}>
                          <Card.Header className="d-flex justify-content-between">
                            <div className="header-title">
                              <h4 className="card-title">Banking Details</h4>
                            </div>
                          </Card.Header>
                          <Card.Body>
                            <div className="new-user-info">
                              <div className="row">
                                <div className="col-md-6">
                                  <h6>Account Holder Name:</h6>
                                  <p>{user?.accountHolderName}</p>
                                </div>
                                <div className="col-md-6">
                                  <h6>Bank Name:</h6>
                                  <p>{user?.bankName}</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <h6>BSB Number:</h6>
                                  <p>{user?.bsbNumber}</p>
                                </div>
                                <div className="col-md-6">
                                  <h6>Account Number:</h6>
                                  <p>{user?.accountNumber}</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <h6>SWIFT Code:</h6>
                                  <p>{user?.swiftCode}</p>
                                </div>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Card style={{ padding: "0px" }}>
                          <Card.Header className="d-flex justify-content-between">
                            <div className="header-title">
                              <h4 className="card-title">Social Details</h4>
                            </div>
                          </Card.Header>
                          <Card.Body>
                            <div className="new-user-info">
                              <div className="row">
                                <div className="col-md-6">
                                  <h6>Facebook:</h6>
                                  {/* <p>{user?.accountHolderName}</p> */}
                                </div>
                                <div className="col-md-6">
                                  <h6>Twitter:</h6>
                                  {/* <p>{user?.bankName}</p> */}
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <h6>Linkedin:</h6>
                                  {/* <p>{user?.bsbNumber}</p> */}
                                </div>
                                <div className="col-md-6">
                                  <h6>Instagram:</h6>
                                  {/* <p>{user?.accountNumber}</p> */}
                                </div>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
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
                  </div>
                );
              })}
            </>
          ) : (
            <div className="mt-5">
              {/* <h2 className="text-muted">Nothing To Show</h2> */}
              <img
                className="rounded me-3"
                style={{
                  width: "100%",
                  // height: "50%",
                }}
                src={Nodata}
                alt="No data"
                loading="lazy"
              />
            </div>
          )}
        </div>
      )}
    </Fragment>
  );
});

SellerProfile.displayName = "SellerProfile";
export default SellerProfile;
