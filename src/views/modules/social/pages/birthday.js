import React,{memo,Fragment} from 'react'

// React-bootstrap
import {Row, Col} from 'react-bootstrap'

//Component
import Card from '../../../../components/bootstrap/card'
import Profilebirthday from '../components/birthday'

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
import img15 from '../../../../assets/modules/social/images/avatar/15.png'
import img16 from '../../../../assets/modules/social/images/avatar/16.png'
import img17 from '../../../../assets/modules/social/images/avatar/17.png'
import img18 from '../../../../assets/modules/social/images/avatar/18.png'

const Birthday = memo(() => {
  return (
    <Fragment>
        <Row>
            <Col sm="12">
                <Card>
                    <Card.Header className="d-flex justify-content-between rounded border-bottom-0 pb-4">
                        <div className="header-title">
                            <h4 className="card-title">Today Birthday</h4>
                        </div>
                    </Card.Header>
                </Card>
                <Row>
                    <Col lg="6" md="12">
                        <Profilebirthday birthdayimg={img1} birthdaytitle="Petey Cruiser" birthdaydate="Today"></Profilebirthday>
                    </Col>
                    <Col lg="6" md="12">
                        <Profilebirthday birthdayimg={img2} birthdaytitle="Petey Cruiser" birthdaydate="Today"></Profilebirthday>
                    </Col>
                </Row>
                <Card>
                    <Card.Header className="d-flex justify-content-between rounded border-bottom-0 pb-4">
                        <div className="header-title">
                            <h4 className="card-title">Upcoming Birthday</h4>
                        </div>
                    </Card.Header>
                </Card>
                <Row>
                    <Col lg="6" md="12">
                    <Profilebirthday birthdayimg={img3} birthdaytitle="Petey Cruiser" birthdaydate="Tomorrow"></Profilebirthday>
                    </Col>
                    <Col lg="6" md="12">
                    <Profilebirthday birthdayimg={img4} birthdaytitle="Paul Molive" birthdaydate="Tomorrow"></Profilebirthday>
                    </Col>
                </Row>
                <Card>
                    <Card.Header className="d-flex justify-content-between rounded border-bottom-0 pb-4">
                        <div className="header-title">
                            <h4 className="card-title">January Birthday</h4>
                        </div>
                    </Card.Header>
                </Card>
                <Row>
                    <Col lg="6" md="12">
                        <Profilebirthday birthdayimg={img5} birthdaytitle="Paige Turner" birthdaydate="02-jan-2020"></Profilebirthday>
                    </Col>
                    <Col lg="6" md="12">
                        <Profilebirthday birthdayimg={img6} birthdaytitle="Bob Frapples" birthdaydate="15-jan-2020"></Profilebirthday>
                    </Col>
                    <Col lg="6" md="12">
                        <Profilebirthday birthdayimg={img7} birthdaytitle="Barb Ackue" birthdaydate="15-jan-2020"></Profilebirthday>
                    </Col>
                </Row>
                <Card>
                    <Card.Header className="d-flex justify-content-between rounded border-bottom-0 pb-4">
                        <div className="header-title">
                            <h4 className="card-title">February Birthday</h4>
                        </div>
                    </Card.Header>
                </Card>
                <Row>
                    <Col lg="6" md="12">
                        <Profilebirthday birthdayimg={img8} birthdaytitle="Greta Life" birthdaydate="01-feb-2020"></Profilebirthday>
                    </Col>
                </Row>
                <Card>
                    <Card.Header className="d-flex justify-content-between rounded border-bottom-0 pb-4">
                        <div className="header-title">
                            <h4 className="card-title">March Birthday</h4>
                        </div>
                    </Card.Header>
                </Card>
                <Row>
                    <Col lg="6" md="12">
                        <Profilebirthday birthdayimg={img9} birthdaytitle="Ira Membrit" birthdaydate="01-Mar-2020"></Profilebirthday>
                    </Col>
                    <Col lg="6" md="12">
                        <Profilebirthday birthdayimg={img10} birthdaytitle="Pete Sariya" birthdaydate="5-Mar-2020"></Profilebirthday>
                    </Col>
                    <Col lg="6" md="12">
                        <Profilebirthday birthdayimg={img11} birthdaytitle="Monty Carlo" birthdaydate="20-Mar-2020"></Profilebirthday>
                    </Col>
                    <Col lg="6" md="12">
                        <Profilebirthday birthdayimg={img12} birthdaytitle="Ed Itorial" birthdaydate="30-Mar-2020"></Profilebirthday>
                    </Col>
                </Row>
                <Card>
                    <Card.Header className="d-flex justify-content-between rounded border-bottom-0 pb-4">
                        <div className="header-title">
                            <h4 className="card-title">April Birthday</h4>
                        </div>
                    </Card.Header>
                </Card>
                <Row>
                    <Col lg="6" md="12">
                        <Profilebirthday birthdayimg={img13} birthdaytitle="Paul Issy" birthdaydate="06-Apr-2020"></Profilebirthday>
                    </Col>
                    <Col lg="6" md="12">
                        <Profilebirthday birthdayimg={img14} birthdaytitle="Rick Shaw" birthdaydate="12-Apr-2020"></Profilebirthday>
                    </Col>
                    <Col lg="6" md="12">
                        <Profilebirthday birthdayimg={img15} birthdaytitle="Ben Effit" birthdaydate="18-Apr-2020"></Profilebirthday>
                    </Col>
                </Row>
                <Card>
                    <Card.Header className="d-flex justify-content-between rounded border-bottom-0 pb-4">
                        <div className="header-title">
                            <h4 className="card-title">May Birthday</h4>
                        </div>
                    </Card.Header>
                </Card>
                <Row>
                    <Col lg="6" md="12">
                        <Profilebirthday birthdayimg={img16} birthdaytitle="Justin Case" birthdaydate="03-May-2020"></Profilebirthday>
                    </Col>
                    <Col lg="6" md="12">
                        <Profilebirthday birthdayimg={img17} birthdaytitle="Aaron Ottix" birthdaydate="4-May-2020"></Profilebirthday>
                    </Col>
                    <Col lg="6" md="12">
                        <Profilebirthday birthdayimg={img18} birthdaytitle="Pete Sariya" birthdaydate="15-May-2020"></Profilebirthday>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Fragment>
  )
})
Birthday.displayName="Birthday"
export default Birthday