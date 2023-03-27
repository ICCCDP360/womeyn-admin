import React,{memo,Fragment} from 'react'

// React-bootstrap
import {Row, Col} from 'react-bootstrap'

//Component
import Notificationcard from "../components/notification"

//Img
import img1 from '../../../../assets/modules/social/images/avatar/01.png'
import img2 from '../../../../assets/modules/social/images/avatar/02.png'
import img3 from '../../../../assets/modules/social/images/avatar/03.png'
import img4 from '../../../../assets/modules/social/images/avatar/04.png'
import img5 from '../../../../assets/modules/social/images/avatar/05.png'
import img6 from '../../../../assets/modules/social/images/avatar/06.png'
import img7 from '../../../../assets/modules/social/images/avatar/07.png'
import img8 from '../../../../assets/modules/social/images/avatar/08.png'
import img9 from '../../../../assets/modules/social/images/avatar/09.png'
import img10 from '../../../../assets/modules/social/images/avatar/10.png'
import img11 from '../../../../assets/modules/social/images/avatar/11.png'
import img12 from '../../../../assets/modules/social/images/avatar/12.png'
import img13 from '../../../../assets/modules/social/images/avatar/13.png'
import img14 from '../../../../assets/modules/social/images/avatar/14.png'
import img16 from '../../../../assets/modules/social/images/avatar/16.png'

const Notification = memo(() => {
  return (
    <Fragment>
          <Row>
            <Col sm="12">
               <h3 className="card-title my-3">Notification</h3>
            </Col>
            <Col sm="12">
                <Notificationcard   notificationimg={img1} notificationtitle="Paige Turner Posted in UI/UX Community"               notificationsvg="1"  notificationcolor="primary"    notificationdefault="30  ago" />
                <Notificationcard   notificationimg={img2} notificationtitle="Anne Fibbiyon Like Your Post"                         notificationsvg="2"  notificationcolor="danger"     notificationdefault="15 ago"    />
                <Notificationcard   notificationimg={img3} notificationtitle="Barry Cuda add Story"                                 notificationsvg="1"  notificationcolor="primary"    notificationdefault="40  ago"    />
                <Notificationcard   notificationimg={img4} notificationtitle="Cliff Hanger posted a comment on your status update"  notificationsvg="3"  notificationcolor="success"    notificationdefault="42 ago"    />
                <Notificationcard   notificationimg={img16} notificationtitle="Rick O'Shea posted a comment on your photo"           notificationsvg="3"  notificationcolor="success"    notificationdefault="50  ago"    />
                <Notificationcard   notificationimg={img5} notificationtitle="Brock Lee Sent a Friend Request"                      notificationsvg="4"  notificationcolor="warning"    notificationdefault="1 hour ago"    />
                <Notificationcard   notificationimg={img6} notificationtitle="Ira Membrit shared your status update"                notificationsvg="6"  notificationcolor="info"       notificationdefault="1 hour ago"    />
                <Notificationcard   notificationimg={img11} notificationtitle="Paul Molive and 3 ther have Birthday Today"           notificationsvg="5"  notificationcolor="danger"     notificationdefault="3 hour ago"    />
                <Notificationcard   notificationimg={img7} notificationtitle="Petey Cruiser Sent a Friend request"                  notificationsvg="4"  notificationcolor="warning"    notificationdefault="1 day ago"    />
                <Notificationcard   notificationimg={img8} notificationtitle="Bob Frapples and 45 other Like Your Pst on timeline"  notificationsvg="2"  notificationcolor="danger"     notificationdefault="1 week ago"    />
                <Notificationcard   notificationimg={img12} notificationtitle="Maya Didas share Your Post"                           notificationsvg="6"  notificationcolor="info"       notificationdefault="1 month ago"    />
                <Notificationcard   notificationimg={img9} notificationtitle="Sal Monella Add Photo with You"                       notificationsvg="1"  notificationcolor="primary"    notificationdefault="1 month ago"    />
                <Notificationcard   notificationimg={img10} notificationtitle="Barb Dwyer commented on your new profile status"      notificationsvg="3"  notificationcolor="success"    notificationdefault="2 month ago"    />
                <Notificationcard   notificationimg={img13} notificationtitle="Terry Aki commented on your new profile status"       notificationsvg="3"  notificationcolor="success"    notificationdefault="2 month ago"    />
                <Notificationcard   notificationimg={img14} notificationtitle="Paige Turner Posted in Development Community"         notificationsvg="1"  notificationcolor="primary"    notificationdefault="3 month ago"    />
            </Col>
         </Row>
    </Fragment>
  )
}
)
Notification.displayName="Notification"
export default Notification