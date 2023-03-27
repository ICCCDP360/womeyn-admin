import {memo,Fragment} from 'react'

// React-bootstrap
import {Tab, Nav, Row, Col} from 'react-bootstrap'

//Component
import Categoriescard from '../components/categoriescard'

//Img
import img from '../../../../assets/modules/blog/images/blog-list/02.png'
import img1 from '../../../../assets/modules/blog/images/blog-list/04.png'
import img2 from '../../../../assets/modules/blog/images/blog-list/05.png'
import img3 from '../../../../assets/modules/blog/images/blog-list/10.png'
import img4 from '../../../../assets/modules/blog/images/blog-list/11.png'
import img5 from '../../../../assets/modules/blog/images/blog-list/12.png'
import img6 from '../../../../assets/modules/blog/images/blog-list/13.png'
import img7 from '../../../../assets/modules/blog/images/blog-list/14.png'
import img8 from '../../../../assets/modules/blog/images/blog-list/15.png'
import img9 from '../../../../assets/modules/blog/images/blog-list/16.png'
import img10 from '../../../../assets/modules/blog/images/blog-list/17.png'
import img11 from '../../../../assets/modules/blog/images/blog-list/18.png'
import img12 from '../../../../assets/modules/blog/images/blog-list/19.png'

const Blogcategory = memo(() => {
    return (
        <Fragment>
            <div>
                <h4 className="mb-0">Category</h4>
            </div>
            <Tab.Container defaultActiveKey="first">
                <Nav as="ul" className="iq-nav-category mt-3 mb-3 justify-content-start bg-transparent" role="tablist">
                    <Nav.Item as="li">
                        <Nav.Link data-toggle="pill" data-bs-target="#all" href="#"  eventKey="first" role="tab" aria-selected="true">All</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link  data-toggle="pill" eventKey="second" href="#" data-bs-target="#popular" role="tab" aria-selected="false">Popular</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link  data-toggle="pill" eventKey="third" href="#" data-bs-target="#last" role="tab" aria-selected="false">Lastest</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content className="mt-3">
                    <Tab.Pane id="all" eventKey="first" role="tabpanel" className="fade" data-current-page="1" data-attibute="all" data-options="infinite_scroll">
                        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 mt-4">
                            <Col>
                                <Categoriescard categoryimage={img} categoryname="Food" postcount="5458"></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img1} categoryname="Workspace" postcount="6542"></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img2} categoryname="Card" postcount="6542"></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img1} categoryname="Workspace" postcount="6542"></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img2} categoryname="Card" postcount="6542"></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img2} categoryname="Card" postcount="6542"></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img1} categoryname="Workspace" postcount="6542"></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img} categoryname="Food" postcount="5458"></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img2} categoryname="Card" postcount="6542"></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img} categoryname="Food" postcount="5458"></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard   Categoriescard categoryimage={img} categoryname="Food" postcount="5458"></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img2} categoryname="Card" postcount="6542"></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img1} categoryname="Workspace" postcount="6542"></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img} categoryname="Food" postcount="5458"></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img1} categoryname="Workspace" postcount="6542"></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img2} categoryname="Card" postcount="6542"></Categoriescard>
                            </Col>
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane id="popular" eventKey="second" className="fade" role="tabpanel" data-current-page="2" data-attibute="popular" data-options="infinite_scroll">
                        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 mt-4">
                            <Col>
                                <Categoriescard categoryimage={img3} categoryname="Animals" postcount="5458"></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img4} categoryname="Entertainment" postcount="6542 "></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img5} categoryname="Health" postcount="3265 "></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img6} categoryname="Music" postcount="1546 "></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img4} categoryname="Entertainment" postcount="3265  "></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img6} categoryname="Music" postcount="365 "></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img3} categoryname="Animals" postcount="500 "></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img5} categoryname="Health" postcount="4623  "></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img3} categoryname="Animals" postcount="4623 "></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img7} categoryname="Business" postcount="500  "></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img4} categoryname="Entertainment" postcount="5458"></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img6} categoryname="Music" postcount="3265"></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img3} categoryname="Animals" postcount="6542"></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img5} categoryname="Health" postcount="365"></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img7} categoryname="Business" postcount="1546"></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img5} categoryname="Health" postcount="4623"></Categoriescard>
                            </Col>
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane id="last" eventKey="third" className="fade" role="tabpanel" data-current-page="3" data-attibute="popular" data-options="infinite_scroll">
                        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 mt-4">
                            <Col>
                                <Categoriescard categoryimage={img8} categoryname="Sports" postcount="5458"></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img9} categoryname="News" postcount="6542"></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img10} categoryname="Cars" postcount="6542"></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img11} categoryname="Movies" postcount="1546"></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img12} categoryname="Fashion" postcount="3265"></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img7} categoryname="Business" postcount="365"></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img9} categoryname="News" postcount="500"></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img12} categoryname="Movies" postcount="4623"></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img10} categoryname="Cars" postcount="4623 "></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img10} categoryname="Fashion" postcount="3265"></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img9} categoryname="News" postcount="5458 "></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img8} categoryname="Sports" postcount="3265 "></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img6} categoryname="Music" postcount="6542 "></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img12} categoryname="Movies" postcount="365 "></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img10} categoryname="Fashion" postcount="1546 "></Categoriescard>
                            </Col>
                            <Col>
                                <Categoriescard categoryimage={img9} categoryname="News" postcount="4623"></Categoriescard>
                            </Col>
                        </Row>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </Fragment>
    )
})

Blogcategory.displayName="Blogcategory"
export default Blogcategory
