import React,{memo,Fragment} from 'react'

// React-bootstrap
import {Row, Col}  from 'react-bootstrap'

//Component
import Friendlists from '../components/friend-list'

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
import img1 from '../../../../assets/modules/social/images/friend-list/01.png'
import img2 from '../../../../assets/modules/social/images/friend-list/02.png'
import img3 from '../../../../assets/modules/social/images/friend-list/03.png'
import img4 from '../../../../assets/modules/social/images/friend-list/04.png'
import img5 from '../../../../assets/modules/social/images/friend-list/05.png'
import img6 from '../../../../assets/modules/social/images/friend-list/06.png'
import img7 from '../../../../assets/modules/social/images/friend-list/07.png'
import img8 from '../../../../assets/modules/social/images/friend-list/08.png'

const Friendlist = memo(() => {
  return (
    <Fragment>
        <Row>
            <Col md="6">
                <Friendlists friendimg={img1} img={friend1} friendname="Anna Sthesia" friendtitle="@designer" friendlist="Lorem Ipsum is simply dummy text of the"></Friendlists>
            </Col>
            <Col md="6">
                <Friendlists friendimg={img2} img={friend2} friendname="Paul Molive" friendtitle="@developer" friendlist="Lorem Ipsum is simply dummy text of the"></Friendlists>
            </Col><Col md="6">
                <Friendlists friendimg={img3} img={friend3} friendname="Anna Mull" friendtitle="@designer" friendlist="Lorem Ipsum is simply dummy text of the"></Friendlists>
            </Col><Col md="6">
                <Friendlists friendimg={img4} img={friend4} friendname="Paige Turner" friendtitle="@tester" friendlist="Lorem Ipsum is simply dummy text of the"></Friendlists>
            </Col><Col md="6">
                <Friendlists friendimg={img5} img={friend5} friendname="Bob Frapples" friendtitle="@developer" friendlist="Lorem Ipsum is simply dummy text of the"></Friendlists>
            </Col><Col md="6">
                <Friendlists friendimg={img6} img={friend6} friendname="Barb Ackue" friendtitle="@grapficsr" friendlist="Lorem Ipsum is simply dummy text of the"></Friendlists>
            </Col><Col md="6">
                <Friendlists friendimg={img7} img={friend7} friendname="Greta Life" friendtitle="@fashion" friendlist="Lorem Ipsum is simply dummy text of the"></Friendlists>
            </Col><Col md="6">
                <Friendlists friendimg={img8} img={friend8} friendname="Ira Membrit" friendtitle="@designer" friendlist="Lorem Ipsum is simply dummy text of the"></Friendlists>
            </Col><Col md="6">
                <Friendlists friendimg={img1} img={friend9} friendname="Pete Sariya" friendtitle="@designer" friendlist="Lorem Ipsum is simply dummy text of the"></Friendlists>
            </Col><Col md="6">
                <Friendlists friendimg={img2} img={friend10} friendname="Monty Carlo" friendtitle="@designer" friendlist="Lorem Ipsum is simply dummy text of the"></Friendlists>
            </Col><Col md="6">
                <Friendlists friendimg={img1} img={friend1} friendname="Ed Itorial" friendtitle="@testen" friendlist="Lorem Ipsum is simply dummy text of the"></Friendlists>
            </Col><Col md="6">
                <Friendlists friendimg={img3} img={friend2} friendname="Paul Issy" friendtitle="@r&d" friendlist="Lorem Ipsum is simply dummy text of the"></Friendlists>
            </Col><Col md="6">
                <Friendlists friendimg={img4} img={friend3} friendname="Rick Shaw" friendtitle="@coder" friendlist="Lorem Ipsum is simply dummy text of the"></Friendlists>
            </Col><Col md="6">
                <Friendlists friendimg={img5} img={friend4} friendname="Ben Effit" friendtitle="@designer" friendlist="Lorem Ipsum is simply dummy text of the"></Friendlists>
            </Col><Col md="6">
                <Friendlists friendimg={img6} img={friend5} friendname="Justin Case" friendtitle="@designer" friendlist="Lorem Ipsum is simply dummy text of the"></Friendlists>
            </Col><Col md="6">
                <Friendlists friendimg={img7} img={friend6} friendname="Aaron Ottix" friendtitle="@designer" friendlist="Lorem Ipsum is simply dummy text of the"></Friendlists>
            </Col>
        </Row>
        
    </Fragment>
  )
}
)
Friendlist.displayName="Friendlist"
export default Friendlist