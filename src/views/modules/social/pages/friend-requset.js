import React,{memo,Fragment} from 'react'

//React-bootstrap
import {Row, Col} from 'react-bootstrap'

//Router
import {Link} from 'react-router-dom'

//Component
import Friendrequests from '../components/friend-request'
import Card from '../../../../components/bootstrap/card'

//Img
import friend1 from '../../../../assets/modules/social/images/avatar/01.png'
import friend2 from '../../../../assets/modules/social/images/avatar/02.png'
import friend3 from '../../../../assets/modules/social/images/avatar/03.png'
import friend4 from '../../../../assets/modules/social/images/avatar/04.png'
import friend5 from '../../../../assets/modules/social/images/avatar/05.png'
import friend6 from '../../../../assets/modules/social/images/avatar/06.png'
import friend7 from '../../../../assets/modules/social/images/avatar/07.png'
import friend8 from '../../../../assets/modules/social/images/avatar/08.png'
import friend9 from '../../../../assets/modules/social/images/avatar/09.png'
import friend10 from '../../../../assets/modules/social/images/avatar/10.png'

const Friendrequset = memo(() => {
  return (
    <Fragment>
        <Row>
            <Col sm="12">
                <Card>
                    <Card.Header className=" p-4 border-bottom">
                        <div className="header-title">
                            <h4 className="card-title">Friend Request</h4>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <ul className="request-list list-inline m-0 p-0">
                            <Friendrequests requset={friend1} friendrequest="true" className="border-bottom" title="Jaques Amole" dec="40  friends" ></Friendrequests>
                            <Friendrequests requset={friend2} friendrequest="true" className="border-bottom" title="Lucy Tania" dec="12  friends" ></Friendrequests>
                            <Friendrequests requset={friend3} friendrequest="true" className="border-bottom" title="Val Adictorian" dec="0  friends" ></Friendrequests>
                            <Friendrequests requset={friend4} friendrequest="true" className="border-bottom" title="Manny Petty" dec="3  friends" ></Friendrequests>
                            <Friendrequests requset={friend5} friendrequest="true" className="border-bottom" title="Marsha Mello" dec="15  friends" ></Friendrequests>
                            <Friendrequests requset={friend6} friendrequest="true" className="border-bottom" title="Caire Innet" dec="8  friends" ></Friendrequests>
                            <Friendrequests requset={friend7} friendrequest="true" className="border-bottom" title="Gio Metric" dec="10  friends" ></Friendrequests>
                            <Friendrequests requset={friend8} friendrequest="true" className="border-bottom" title="Chris P. Cream" dec="18  friends" ></Friendrequests>
                            <Friendrequests requset={friend9} friendrequest="true" className="border-bottom" title="Paul Misunda" dec="6  friends" ></Friendrequests>
                            <Friendrequests requset={friend10} friendrequest="true" className="border-bottom"  title="Reanne Carnation" dec="12  friends" ></Friendrequests>
                            <li className="d-block text-center mb-0 pb-0">
                                <Link to="#" className="me-3 btn">View More Request</Link>
                            </li>
                        </ul>
                    </Card.Body>
                </Card>
                <Card className="friend-request-card">
                    <Card.Header className="d-flex justify-content-between">
                        <div className="header-title">
                            <h4 className="card-title">People You May Know</h4>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <ul className="request-list m-0 p-0">
                            <Friendrequests requset={friend1} className="border-bottom" newfriendrequest="true" title="Jaques Amole" dec="40  friends" ></Friendrequests>
                            <Friendrequests requset={friend2} className="border-bottom" newfriendrequest="true" title="Lucy Tania" dec="12  friends" ></Friendrequests>
                            <Friendrequests requset={friend3} className="border-bottom" newfriendrequest="true" title="Val Adictorian" dec="0  friends" ></Friendrequests>
                            <Friendrequests requset={friend4} className="border-bottom" newfriendrequest="true" title="Manny Petty" dec="3  friends" ></Friendrequests>
                            <Friendrequests requset={friend5} className="border-bottom" newfriendrequest="true" title="Marsha Mello" dec="15  friends" ></Friendrequests>
                            <Friendrequests requset={friend6} className="border-bottom" newfriendrequest="true" title="Caire Innet" dec="8  friends" ></Friendrequests>
                            <Friendrequests requset={friend7} className="border-bottom" newfriendrequest="true" title="Gio Metric" dec="10  friends" ></Friendrequests>
                            <Friendrequests requset={friend8} className="border-bottom" newfriendrequest="true" title="Chris P. Cream" dec="18  friends" ></Friendrequests>
                            <Friendrequests requset={friend9} className="border-bottom" newfriendrequest="true" title="Paul Misunda" dec="6  friends" ></Friendrequests>
                            <Friendrequests requset={friend10}   newfriendrequest="true" title="Reanne Carnation" dec="12  friends" ></Friendrequests>
                        </ul>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Fragment>
  )
}
)
Friendrequset.displayName="Friendrequset"
export default Friendrequset