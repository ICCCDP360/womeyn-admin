import { result } from "lodash";
import * as moment from "moment";
import { Fragment, memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../../../components/bootstrap/card";
import { getTicketView } from "../../../../services/tickets/ticketsServices";
import ReplyTicket from "./ReplyTicket";

const Ticketsview = memo((props) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [ticketDetails, setTicketDetails] = useState([]);
  const [ticketReplies, setTicketReplies] = useState([]);

  console.log("id", id);

  useEffect(() => {
    if (loading) {
      getTickets();
    }
  }, [loading]);

  const getTickets = () => {
    getTicketView(id)
      .then((res) => {
        console.log("res", res);
        setTicketDetails(res.data.ticketDetails);
        setTicketReplies(res.data.ticketReplies);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!loading) {
    return (
      <Fragment>
        <div className="mb-3 mt-3">
          <h3>
            Ticket - #{id} - {ticketDetails.subject}
          </h3>
        </div>
        {ticketDetails.stateId !== 3 ? (
          <ReplyTicket id={id} getTickets={getTickets}></ReplyTicket>
        ) : null}
        <Card className="view-ticket-fullcard">
          {ticketReplies?.map((item) => {
            return (
              <>
                {item.userRole === "seller" ? (
                  <Card
                    className="col-lg-12 view-ticket-card"
                    // style={{ backgroundColor: "beige" }}
                  >
                    <Card.Body className="m-0 p-0">
                      <div
                        className="d-flex align-items-center"
                        style={{ cursor: "pointer" }}
                      >
                        <img
                          src={
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZLAIXbmewu-VSkq46SwY0Ioz-9NeyBqGU8g&usqp=CAU"
                          }
                          alt="no image"
                          width="45px"
                          height="45px"
                          style={{ borderRadius: "100%" }}
                        />
                        <span
                          className="media-support-infos ms-3 text-black"
                          // style={{ marginTop: 13 }}
                        >
                          <span
                            className="mb-0 col"
                            // style={{
                            //   fontSize: 18,
                            //   fontWeight: "bold",
                            //   color: "#000",
                            // }}
                          >
                            {item?.fistName}
                          </span>
                          <br />
                          <span className="mb-0 col">
                            {moment(item.createdAt, "YYYY-MM-DD").format(
                              "YYYY-MM-DD hh:mm"
                            )}
                          </span>
                        </span>
                      </div>

                      <h6 className="mt-3 mb-1">{item.message}</h6>
                    </Card.Body>
                  </Card>
                ) : item.userRole === "admin" ? (
                  <Card
                    className="col-lg-12 view-ticket-cards"
                    // style={{ backgroundColor: "#e6e7e8" }}
                  >
                    <Card.Body className="m-0 p-0">
                      <div
                        className="d-flex align-items-center"
                        style={{ cursor: "pointer" }}
                      >
                        <img
                          src={
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZLAIXbmewu-VSkq46SwY0Ioz-9NeyBqGU8g&usqp=CAU"
                          }
                          alt="no image"
                          width="45px"
                          height="45px"
                          style={{ borderRadius: "100%" }}
                        />
                        <span
                          className="media-support-infos ms-3 text-black"
                          // style={{ marginTop: 13 }}
                        >
                          <span
                            className="mb-0 col"
                            // style={{
                            //   fontSize: 18,
                            //   fontWeight: "bold",
                            //   color: "#000",
                            // }}
                          >
                            {item?.fistName}
                          </span>
                          <br />
                          <span className="mb-0 col">
                            {moment(item.createdAt, "YYYY-MM-DD").format(
                              "YYYY-MM-DD hh:mm"
                            )}
                          </span>
                        </span>
                      </div>

                      <h6 className="mt-3 mb-1">{item.message}</h6>
                    </Card.Body>
                  </Card>
                ) : null}
              </>
            );
          })}
        </Card>
      </Fragment>
    );
  } else {
    return <Fragment></Fragment>;
  }
});

Ticketsview.displayName = "Ticketsview";
export default Ticketsview;
