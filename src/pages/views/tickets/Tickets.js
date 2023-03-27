import Pagination from "rc-pagination";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import Select, { components } from "react-select";
import arrowleft from "../../../assets/loginLogos/leftarrow.png";
import arrowright from "../../../assets/loginLogos/rightarrow.png";
import Loader from "../../../components/Loader";
import {
  getTicketList,
  getTicketListByStateId,
} from "../../../services/tickets/ticketsServices";
import AppointmentsCard from "../../../views/modules/appointment/components/appointments-card";
import "./styles/Tickets.scss";
function Tickets() {
  const history = useNavigate();

  const [tables, setTables] = useState([]);
  const headertexts = [
    {
      headers: "Reqested by",
    },
    {
      headers: "Subject",
    },
    {
      headers: "Ticket ID",
    },
    {
      headers: "Status",
    },
    {
      headers: "Created on",
    },
  ];

  const [servicelistfilter, setServicelistfilter] = useState(0);
  const options = [
    { value: 0, label: "All" },
    { value: 1, label: "New" },
    { value: 2, label: "Open" },
    { value: 3, label: "Closed" },
  ];
  const Handlefilterservicelist = (e) => {
    setServicelistfilter(e.value);
  };
  useEffect(() => {
    if (servicelistfilter === 0) {
      tickets();
    }

    if (servicelistfilter === 1) {
      ticketsByStateId(1);
    }

    if (servicelistfilter === 2) {
      ticketsByStateId(2);
    }

    if (servicelistfilter === 3) {
      ticketsByStateId(3);
    }
  }, [servicelistfilter]);

  const tickets = () => {
    getTicketList()
      .then((res) => {
        console.log("service", res.data);

        const result = res.data.map((e) => e.results);
        const table = result.map((t) => t);

        console.log("table", table[0]);

        setTables(table[0]);
      })
      .catch((err) => console.log(err));
  };

  const ticketsByStateId = (id) => {
    getTicketListByStateId(id)
      .then((res) => {
        console.log("service", res.data);

        const result = res.data.map((e) => e.results);
        const table = result.map((t) => t);

        console.log("table", table[0]);

        setTables(table[0]);
      })
      .catch((err) => console.log(err));
  };

  const PrevNextArrow = (current, type, originalElement) => {
    if (type === "prev") {
      return (
        <button>
          <img src={arrowright} alt="no image" className="arrows" />
        </button>
      );
    }
    if (type === "next") {
      return (
        <button>
          <img src={arrowleft} alt="no image" className="arrows" />
        </button>
      );
    }
    return originalElement;
  };

  if (!tables) {
    return <Loader />;
  }

  return (
    <Fragment>
      <div className="mb-3 mt-3">
        <h3>Tickets</h3>
      </div>
      <Card className="col-lg-12">
        <div className="d-flex justify-content-end gap-3">
          <Col lg={3}>
            <div className="py-0 col-lg-12"></div>
          </Col>
          <Col lg={2}>
            <Select
              placeholder="Status"
              onChange={Handlefilterservicelist}
              options={options}
            ></Select>
          </Col>
        </div>
        <Card.Body className="m-0 p-0">
          <Table hover className="cursor-texts mt-5">
            <thead>
              <tr>
                {headertexts.map((item, index) => {
                  return (
                    <>
                      <th>{item.headers}</th>
                    </>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {tables.map((item, index) => {
                return (
                  <>
                    <tr
                      onClick={() => history(`/womeyn/ticket-view/${item._id}`)}
                    >
                      <td>
                        <div
                          className="d-flex align-items-center"
                          style={{ cursor: "pointer" }}
                        >
                          {item?.profileImageName ? (
                            <img
                              src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.profileImageName}`}
                              alt="no image"
                              width="45px"
                              height="45px"
                              style={{ borderRadius: "15px" }}
                            />
                          ) : (
                            <img
                              src={
                                "https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
                              }
                              alt="no image"
                              width="45px"
                              height="45px"
                              style={{ borderRadius: "15px" }}
                            />
                          )}
                          <span className="media-support-infos ms-3 grey">
                            {item?.isAdminViewed === false ? (
                              <span
                                className="mb-0 col"
                                style={{ color: "black", fontWeight: 600 }}
                              >
                                {item?.fistName} {item?.lastName}
                              </span>
                            ) : (
                              <span className="mb-0 col">
                                {item?.fistName} {item?.lastName}
                              </span>
                            )}
                          </span>
                        </div>
                      </td>
                      <td>
                        {item?.isAdminViewed === false ? (
                          <span
                            className="mb-0 col"
                            style={{ color: "black", fontWeight: 600 }}
                          >
                            {item?.subject}
                          </span>
                        ) : (
                          <span className="mb-0 col">{item?.subject}</span>
                        )}
                      </td>
                      <td>
                        {item?.isAdminViewed === false ? (
                          <span
                            className="mb-0 col"
                            style={{ color: "black", fontWeight: 600 }}
                          >
                            {item?._id}
                          </span>
                        ) : (
                          <span className="mb-0 col">{item?._id}</span>
                        )}
                      </td>

                      {item.stateId === 1 ? (
                        <td>
                          {item?.isAdminViewed === false ? (
                            <span
                              className="mb-0 col"
                              style={{ color: "black", fontWeight: 600 }}
                            >
                              New
                            </span>
                          ) : (
                            <span className="mb-0 col">New</span>
                          )}
                        </td>
                      ) : item.stateId === 2 ? (
                        <td>
                          {item?.isAdminViewed === false ? (
                            <span
                              className="mb-0 col"
                              style={{ color: "black", fontWeight: 600 }}
                            >
                              Open
                            </span>
                          ) : (
                            <span className="mb-0 col">Open</span>
                          )}
                        </td>
                      ) : item.stateId === 3 ? (
                        <td>
                          {item?.isAdminViewed === false ? (
                            <span
                              className="mb-0 col"
                              style={{ color: "black", fontWeight: 600 }}
                            >
                              Closed
                            </span>
                          ) : (
                            <span className="mb-0 col">Closed</span>
                          )}
                        </td>
                      ) : null}

                      <td>
                        {item?.isAdminViewed === false ? (
                          <span
                            className="mb-0 col"
                            style={{ color: "black", fontWeight: 600 }}
                          >
                            {item.createdAt.slice(0, 10)}
                          </span>
                        ) : (
                          <span className="mb-0 col">
                            {item.createdAt.slice(0, 10)}
                          </span>
                        )}
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </Table>

          <Pagination
            className="rc-pagination pagination-data"
            total={1 * 10}
            // onChange={handleChangePagecount}
            current={2}
            itemRender={PrevNextArrow}
            breakLabel="..."
          />
        </Card.Body>
      </Card>
    </Fragment>
  );
}

export default Tickets;
