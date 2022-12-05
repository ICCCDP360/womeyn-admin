import axios from "axios";
import { memo, Fragment, useEffect, useState } from "react";
import { Button, Nav, Tab } from "react-bootstrap";
import Card from "../../../components/bootstrap/card";
import { useSelector } from "react-redux";
import * as SettingSelector from "../../../store/setting/selectors";
import { Row, Col } from "react-bootstrap";
import UserCard from "../../components/user-card";
import SellerCard from "../../components/seller-card";
import { userServices } from "../../../services/user-services/user-services";
import { sellerServices } from "../../../services/seller-services/seller-services";
import Loader from "../../../components/Loader";
import { useNavigate } from "react-router-dom";

//Router-dom
import { Link } from "react-router-dom";
import UserList from "../user-list/user-list";

const UserManagement = memo((props) => {
  useSelector(SettingSelector.theme_color);

  const history = useNavigate();
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

  console.log("token", localStorage.getItem("access_token"));

  const [users, setUsers] = useState([]);

  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    userServices()
      .then((res) => {
        console.log("user", res.data.results);
        // setUsers(res.data.results);
        console.log("user", res?.data?.results);
        setUsers(res?.data?.results.reverse());
      })
      .catch((err) => console.log(err));
    sellerServices()
      .then((res) => {
        console.log("sellers", res.data.results);
        setSellers(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  // userServices()
  //   .then((res) => {
  //     console.log("user", res.data.results);
  //     setUsers(res.data.results);
  //     console.log(res?.data?.results);
  //     setUsers(res?.data?.results);
  //   })
  //   .catch((err) => console.log(err));
  // sellerServices()
  //   .then((res) => {
  //     console.log("sellers", res.data.results);
  //     setSellers(res.data.results);
  //   })
  //   .catch((err) => console.log(err));

  // const apiCall = () => {
  //   userServices()
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  //   // var config = {
  //   //   headers: {
  //   //     "Content-Type": "application/json",
  //   //     "Accept": "application/json",
  //   //     "Authorization": `Bearer ${token}`,
  //   //   },
  //   // };
  //   // console.log(config)
  //   // axios
  //   //   .get("https://eapi.tamilspark.com/v1/admin/users", config)
  //   //   .then(function (response) {
  //   //     console.log(JSON.stringify(response.data));
  //   //   })
  //   //   .catch(function (error) {
  //   //     console.log(error);
  //   //   });
  // };

  if (!users && !sellers) {
    return <Loader />;
  }

  return (
    <Fragment>
      <div className="d-flex flex-row justify-content-between">
        <h3>User Management</h3>
        <Link className="nav-link " aria-current="page" to="/womeyn/user-add">
          <Button style={{ marginBottom: 10 }}>+ Add User</Button>
        </Link>
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
                      <span className="iq-mail-section">Admin Users</span>
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
                      <span className="iq-mail-section">Sellers</span>
                    </Nav.Link>
                    <Nav.Link
                      eventKey="3"
                      id="nav-endc"
                      data-bs-target="#tab-endc"
                      aria-controls="pills-endc"
                      data-bs-toggle="tab"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      <span className="iq-mail-section">End Customers</span>
                    </Nav.Link>
                  </div>
                </Nav>
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
                    {/* <p>{users}</p> */}
                    {/* <p>{sellers}</p> */}
                    <div className="d-flex flex-column">
                      <Row>
                        <Col sm="12">
                          {users.map((user, index) => {
                            return (
                              <>
                                <UserCard
                                  key={index}
                                  notificationimg={"img1"}
                                  notificationtitle={user.firstName}
                                  notificationsvg="1"
                                  notificationcolor="primary"
                                  notificationdefault="Permissions:"
                                  contact={user.email}
                                  id={user.id}
                                />
                              </>
                            );
                          })}
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
                    <div className="d-flex flex-column">
                      <Row>
                        <Col sm="12">
                          {!sellers ? (
                            <Loader />
                          ) : (
                            <div>
                              {sellers.map((seller, index) => {
                                return (
                                  <SellerCard
                                    key={index}
                                    notificationimg={"img1"}
                                    notificationtitle={seller.firstName}
                                    notificationsvg="1"
                                    notificationcolor="primary"
                                    notificationdefault="Permissions:"
                                    contact={seller.email}
                                  />
                                );
                              })}
                            </div>
                          )}
                        </Col>
                      </Row>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="3"
                    id="nav-endc"
                    role="tab"
                    aria-labelledby="nav-endc-tab"
                  >
                    <div className="d-flex flex-column">
                      <Row>
                        <Col sm="12">
                          <UserList />
                        </Col>
                      </Row>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Card.Body>
          {/* <Card.Body className="p-0">
            <Row>
              <Col sm="12">
                {users.map((user) => {
                  return (
                    <UserCard
                      notificationimg={"img1"}
                      notificationtitle={user.firstName}
                      notificationsvg="1"
                      notificationcolor="primary"
                      notificationdefault="Permissions:"
                      contact={user.email}
                    />
                  );
                })} */}
          {/* <UserCard
                  notificationimg={"img2"}
                  notificationtitle="Saksham Kapoor"
                  notificationsvg="2"
                  notificationcolor="danger"
                  notificationdefault="Permissions:"
                />
                <UserCard
                  notificationimg={"img3"}
                  notificationtitle="Azhar Jamal"
                  notificationsvg="1"
                  notificationcolor="primary"
                  notificationdefault="Permissions:"
                />
                <UserCard
                  notificationimg={"img4"}
                  notificationtitle="Ammar Naseem"
                  notificationsvg="3"
                  notificationcolor="success"
                  notificationdefault="Permissions:"
                />
                <UserCard
                  notificationimg={"img16"}
                  notificationtitle="Utkarsh Shukla"
                  notificationsvg="3"
                  notificationcolor="success"
                  notificationdefault="Permissions:"
                /> */}
          {/* </Col>
            </Row>
          </Card.Body> */}
        </Card>
      </div>
    </Fragment>
  );
});

export default UserManagement;

// return (
//   <Fragment>
//     <div className="d-flex flex-column">
//       <h3>User Management</h3>
//     </div>
//     <div className="overflow-hidden">
//       <Card>
//         <Card.Body className="p-0">
//           <div className="mail-data tab-bottom-bordered d-flex justify-content-between align-items-center flex-wrap">
//             <Tab.Container defaultActiveKey="1">
//               <Nav as="ul" className="mb-0 pe-0 nav-tabs" role="tablist">
//                 <Nav.Item as="li">
//                   <Nav.Link
//                     eventKey="1"
//                     id="nav-description"
//                     data-bs-target="#tab-admin"
//                     aria-controls="pills-admin"
//                     data-bs-toggle="tab"
//                     href="#"
//                     role="tab"
//                     aria-selected="true"
//                   >
//                     <span className="iq-mail-section">Admin Users</span>
//                   </Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item as="li">
//                   <Nav.Link
//                     eventKey="2"
//                     data-bs-target="#tab-sellers"
//                     aria-controls="pills-sellers"
//                     data-bs-toggle="tab"
//                     href="#"
//                     role="tab"
//                     aria-selected="false"
//                   >
//                     <span className="iq-mail-section">Sellers</span>
//                   </Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item as="li">
//                   <Nav.Link
//                     eventKey="3"
//                     data-bs-target="#tab-endc"
//                     aria-controls="pills-endc"
//                     data-bs-toggle="tab"
//                     href="#"
//                     role="tab"
//                     aria-selected="false"
//                   >
//                     <span className="iq-mail-section">End Customers</span>
//                   </Nav.Link>
//                 </Nav.Item>
//               </Nav>
//               <Tab.Content
//                 className="mt-4 iq-tab-fade-up"
//                 id="nav-tabContent"
//               >
//                 <Tab.Pane
//                   eventKey="1"
//                   id="nav-description"
//                   role="tab"
//                   aria-labelledby="nav-description-tab"
//                 >
//                   <div>
//                     <Row>
//                       <Col sm="12">
//                         {users.map((user) => {
//                           return (
//                             <UserCard
//                               notificationimg={"img1"}
//                               notificationtitle={user.firstName}
//                               notificationsvg="1"
//                               notificationcolor="primary"
//                               notificationdefault="Permissions:"
//                               contact={user.email}
//                             />
//                           );
//                         })}
//                       </Col>
//                     </Row>
//                   </div>
//                 </Tab.Pane>
//               </Tab.Content>
//             </Tab.Container>
//           </div>
//         </Card.Body>
//         {/* <Card.Body className="p-0">
//           <Row>
//             <Col sm="12">
//               {users.map((user) => {
//                 return (
//                   <UserCard
//                     notificationimg={"img1"}
//                     notificationtitle={user.firstName}
//                     notificationsvg="1"
//                     notificationcolor="primary"
//                     notificationdefault="Permissions:"
//                     contact={user.email}
//                   />
//                 );
//               })} */}
//         {/* <UserCard
//                 notificationimg={"img2"}
//                 notificationtitle="Saksham Kapoor"
//                 notificationsvg="2"
//                 notificationcolor="danger"
//                 notificationdefault="Permissions:"
//               />
//               <UserCard
//                 notificationimg={"img3"}
//                 notificationtitle="Azhar Jamal"
//                 notificationsvg="1"
//                 notificationcolor="primary"
//                 notificationdefault="Permissions:"
//               />
//               <UserCard
//                 notificationimg={"img4"}
//                 notificationtitle="Ammar Naseem"
//                 notificationsvg="3"
//                 notificationcolor="success"
//                 notificationdefault="Permissions:"
//               />
//               <UserCard
//                 notificationimg={"img16"}
//                 notificationtitle="Utkarsh Shukla"
//                 notificationsvg="3"
//                 notificationcolor="success"
//                 notificationdefault="Permissions:"
//               /> */}
//         {/* </Col>
//           </Row>
//         </Card.Body> */}
//       </Card>
//     </div>
//   </Fragment>
// );
// });
