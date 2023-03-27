import { Fragment, memo, useEffect, useState } from "react";
import { Button, Col, Modal, Nav, Row, Tab, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import Card from "../../../components/bootstrap/card";
import * as SettingSelector from "../../../store/setting/selectors";

//Router-dom
import { Link } from "react-router-dom";
// import Allorderdetails from "./allorderdetails/Allorderdetails";
import AllTransactions from "./allTransactions/allTransactions";
import UnpaidTransactions from "./cancelledTransactions/unpaidTransactions";
import PaidTransactions from "./completedTransactions/paidTransactions";

const OrderDetails = memo((props) => {
  useSelector(SettingSelector.theme_color);
  const [show, setShow] = useState(false);
  return (
    <Fragment>
      <div className="d-flex flex-row justify-content-between mt-3 mb-5 ms-2">
        <h3>Transactions</h3>
      </div>
      <div>
        <Card>
          <Card.Body className="m-0 p-0">
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
                      <span className="iq-mail-section">All Transactions</span>
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
                      <span className="iq-mail-section">Paid</span>
                    </Nav.Link>
                    <Nav.Link
                      eventKey="5"
                      id="nav-endc"
                      data-bs-target="#tab-endc"
                      aria-controls="pills-endc"
                      data-bs-toggle="tab"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      <span className="iq-mail-section">Unpaid</span>
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
                    <AllTransactions />
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="2"
                    id="nav-sellers"
                    role="tab"
                    aria-labelledby="nav-sellers-tab"
                  >
                    <PaidTransactions />
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="5"
                    id="nav-endc"
                    role="tab"
                    aria-labelledby="nav-endc-tab"
                  >
                    <UnpaidTransactions />
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Fragment>
  );
});

export default OrderDetails;
