import { memo, Fragment, useState, useRef, useEffect } from "react";

//react-bootstrap
import { Row, Col, Image, Form, Button } from "react-bootstrap";

// Router
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";

//components
import Card from "../../../components/bootstrap/card";

// import { GetSellerByIdServices } from "../../../services/getSellerById-services/getSellerById-services";
import { getSellerByIdServices } from "../../../services/seller/sellerServices";

const SellerProfile = memo(() => {
  const { id } = useParams();

  const [user, setUser] = useState("");

  useEffect(() => {
    getSellerByIdServices(id)
      .then((res) => {
        // setUsers(res.data.results);
        //
        setUser(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Fragment>
      <div>
        <h2>Seller Details</h2>
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
                    <p>Itachi</p>
                  </div>
                  <div className="col-md-6">
                    <h6>Last Name:</h6>
                    <p>Uchiha</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <h6>Contact Number:</h6>
                    <p>9632587410</p>
                  </div>
                  <div className="col-md-6">
                    <h6>Email ID:</h6>
                    <p>itachi@gmail.com</p>
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
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </p>
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
    </Fragment>
  );
});

SellerProfile.displayName = "SellerProfile";
export default SellerProfile;
