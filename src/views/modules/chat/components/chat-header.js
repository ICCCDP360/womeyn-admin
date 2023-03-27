// import { useState, memo, Fragment } from 'react'
// //React-bootstrap
// import { Dropdown, Button, Image } from 'react-bootstrap'
// //Components
// import Card from '../../../../components/bootstrap/card'
// import Modalgroup from './modal-group'

// const Chatheader = memo((props) => {
//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     const minisidebar = () => {
//         document.getElementsByTagName('ASIDE')[0].classList.toggle('sidebar-mini')
//     }
//     return (
//         <Fragment>
//             <Card.Header className="border-bottom d-flex justify-content-between align-items-center rounded-0 p-3">
//                 <div className="d-flex align-items-center gap-3">
//                     <div className="d-block d-xl-none">
//                         <Button className="btn-sm btn-primary rounded-pill btn-icon" data-toggle="sidebar" data-active="true" onClick={minisidebar}>
//                             <span className="btn-inner">
//                                 <svg width="20px" viewBox="0 0 24 24">
//                                     <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
//                                 </svg>
//                             </span>
//                         </Button>
//                     </div>
//                     <div className="position-relative">
//                         <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&usqp=CAU"} alt="users" className="img-fluid avatar-50 rounded-pill" loading="lazy" />
//                         <div className={`${true ? 'bg-success' : 'bg-danger'} iq-profile-badge `}></div>
//                     </div>
//                     <div className="d-flex flex-column">
//                         <h5 className="mb-0">Womeyn - Support</h5>
//                         <small className="text-capitalize">{props.status}</small>
//                     </div>
//                 </div>
//             </Card.Header>
//             <Modalgroup show={show} handleclose={handleClose} />
//         </Fragment>
//     )
// })

// Chatheader.displayName = "Chatheader"
// export default Chatheader



import { useState, memo, Fragment } from "react";
//React-bootstrap
import { Dropdown, Button, Image } from "react-bootstrap";
//Components
import Card from "../../../../components/bootstrap/card";
import Modalgroup from "./modal-group";

const Chatheader = memo((props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const minisidebar = () => {
    document.getElementsByTagName("ASIDE")[0].classList.toggle("sidebar-mini");
  };
  return (
    <Fragment>
      <div style={{ backgroundColor: "#E95A5A", borderRadius: "5px" }}>
        <Card.Header className="border-bottom d-flex justify-content-between align-items-center rounded-0 p-3">
          <div className="d-flex align-items-center gap-3">
            <div className="d-block d-xl-none">
              <Button
                className="btn-sm btn-primary rounded-pill btn-icon"
                data-toggle="sidebar"
                data-active="true"
                onClick={minisidebar}
              >
                <span className="btn-inner">
                  <svg width="20px" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                    ></path>
                  </svg>
                </span>
              </Button>
            </div>
            <div className="position-relative">
              <Image
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&usqp=CAU"
                }
                alt="users"
                className="img-fluid avatar-50 rounded-pill"
                loading="lazy"
              />
            </div>
            <div className="d-flex flex-column">
              <h5 className="mb-0 text-white">Womeyn - Support</h5>
              <div className="d-flex">
                <div
                  className={`${true ? "bg-success" : "bg-danger"
                    } iq-profile-badge `}
                ></div>
                <p
                  className="text-white"
                  style={{ marginBottom: "0px", marginLeft: "5px" }}
                >
                  {props.status}Active
                </p>
              </div>
            </div>
          </div>
          <div>
          </div>
        </Card.Header>
      </div>
      <Modalgroup show={show} handleclose={handleClose} />
    </Fragment>
  );
});

Chatheader.displayName = "Chatheader";
export default Chatheader;
