import { Fragment, memo, useEffect, useState } from "react";

// React-bootstrap
import { Button, Col, Image, Row, Table } from "react-bootstrap";

//Components
import Card from "../../../components/bootstrap/card";

//Img

import logo from "../../../assets/aus.png";

import Loader from "../../../components/Loader";
import { customer } from "../../../services/customer/customer";

const Userlist = memo(() => {
  const [userData, setUserdata] = useState([]);
  const [userLimit, setUserLimit] = useState(10);
  const bgColor = "warning";

  const statusColor = "success";

  useEffect(() => {
    customer().then((res) => {
      // console.log(res.data, "customer");
      setUserdata(res.data.results);
    });
  }, []);

  const loadMoreUsers = () => {
    setUserLimit(userLimit + 10);
  };
  if (!userData) {
    return <Loader />;
  }

  return (
    <Fragment>
      <Row>
        <Col lg="12">
          <Card style={{ padding: 0 }}>
            <Card.Body className="card-body-one">
              <div className="simple-table table-responsive">
                <Table className="mb-0" id="datatable" data-toggle="data-table">
                  <thead>
                    <tr className="bg-white">
                      <th scope="col">Profiles</th>
                      <th scope="col">Contact</th>
                      <th scope="col">Email ID</th>
                      <th scope="col">Country</th>
                      <th className="text-center" scope="col">
                        Purchases
                      </th>
                      <th scope="col">Status</th>
                      {/* <th scope="col">Action</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {userData.slice(0, userLimit).map((item, index) => {
                      return (
                        <tr key={index} style={{ paddingLeft: 0 }}>
                          <td>
                            <div className="d-flex align-items-center">
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
                              <div className="media-support-info">
                                {/* <h6 className="mb-0">{item.name}</h6> */}
                                {/* <p className="mb-0">{item.desc}</p> */}
                              </div>
                            </div>
                          </td>
                          <td className="text-dark">
                            {item.contactNumber ? item.contactNumber : null}
                          </td>
                          <td className="text-dark">{item.email}</td>
                          <td className="text-dark w-25">
                            <div className="w-50">
                              <img src={logo} className="w-25" />
                            </div>
                          </td>
                          <td className="text-dark text-center">
                            {item.availableServicesCount}
                          </td>
                          <td>
                            <span className={` p-2 text-${statusColor}`}>
                              {item?.stateId == 1 ? "Active" : "inActive"}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
                <div className="loadMore-div">
                  <Button
                    className="mt-5 loadMore-button"
                    onClick={loadMoreUsers}
                  >
                    Load More
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

Userlist.displayName = "Userlist";
export default Userlist;
