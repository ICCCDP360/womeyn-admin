import React, { memo, Fragment } from "react";

//Router-dom
import { Link } from "react-router-dom";

//Componet
import Card from "../../components/bootstrap/card";

const SellerCard = memo((props) => {
  return (
    <Fragment>
      <Card>
        <Card.Body>
          <ul className="notification-list m-0 p-0">
            <li className="d-flex align-items-center justify-content-between gap-3">
              <div className="w-100">
                <div className="d-flex justify-content-between">
                  <div className="user-card-content">
                    <h6>{props.notificationtitle}</h6>
                    <div className="permission flex-container">
                      <p>{props.notificationdefault}</p>
                      <span>Seller approval</span>
                      <span>Ticket management</span>
                      <span>Account Admin</span>
                    </div>
                    <div className="contact flex-container">
                      <p>Contact: </p>

                      <span>{props.contact}</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <Link
                      className="nav-link "
                      aria-current="page"
                      to="/womeyn/seller-approval/edit"
                    >
                      {" "}
                      <span className="item-name action-link">Edit</span>
                    </Link>
                    <Link
                      className="nav-link"
                      aria-current="page"
                      to="/womeyn/user-management"
                    >
                      {" "}
                      <span className="item-name action-link">Delete</span>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </Card.Body>
      </Card>
    </Fragment>
  );
});

SellerCard.displayName = "SellerCard";
export default SellerCard;
