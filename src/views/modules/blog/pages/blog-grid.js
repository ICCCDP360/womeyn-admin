import {memo,Fragment} from 'react'

// React-bootstrap
import {Dropdown, Row, Col, Button} from 'react-bootstrap'

//Component
import Blogcard from '../components/blogcard'
import CustomToggle from '../../../../components/dropdowns'

// Img
import img1 from '../../../../assets/modules/blog/images/blog-categories/01.png'
import img2 from '../../../../assets/modules/blog/images/blog-categories/06.png'
import img3 from '../../../../assets/modules/blog/images/blog-categories/03.png'
import img4 from '../../../../assets/modules/blog/images/blog-categories/04.png'
import img5 from '../../../../assets/modules/blog/images/blog-categories/05.png'
import img6 from '../../../../assets/modules/blog/images/blog-categories/06.png'
import img7 from '../../../../assets/modules/blog/images/blog-categories/07.png'
import img8 from '../../../../assets/modules/blog/images/blog-categories/08.png'
import img9 from '../../../../assets/modules/blog/images/blog-categories/09.png'

const Bloggrid = memo(() => {
  return (
    <Fragment>
        <div className="d-flex flex-wrap justify-content-between mb-4">
            <h2 className="mb-0">Standard Blogs</h2>
            <Dropdown className="d-flex align-items-center">
                Sorting By :
                    <Dropdown.Toggle as={CustomToggle} variant="text-secondary dropdown-toggle" >Name
                    </Dropdown.Toggle>
                    <Dropdown.Menu aria-labelledby="dropdownMenuButton1">
                        <li><Dropdown.Item href="#">Action</Dropdown.Item></li>
                        <li><Dropdown.Item href="#">Another action</Dropdown.Item></li>
                        <li><Dropdown.Item href="#">Something else here</Dropdown.Item></li>
                    </Dropdown.Menu>
            </Dropdown>
        </div>
        <Row  className="row-cols-1 row-cols-md-2 row-cols-xl-3">
            <Col>
                <Blogcard blogImage={img1} blogDate="01 Dec 2021" blogcontent="We take photos as a return ticket to the moment otherwise gone." blogcontent1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dolor at feugiat in tempor maecenas placerat..." ></Blogcard>
            </Col>
            <Col>
                <Blogcard blogImage={img2} blogDate="02 Dec 2021" blogcontent="The Ultimate Travel Guide: What To Do, See & Eat." blogcontent1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla turpis purus vitae tortor, nisl, aliquam. Sodaleset..." ></Blogcard>
            </Col>
            <Col>
                <Blogcard blogImage={img3} blogDate="02 Dec 2021" blogcontent="The Cheapest Destinations of All Time, A list of Beauty and Budget." blogcontent1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dolor at feugiat in tempor maecenas placerat..."></Blogcard>
            </Col>
            <Col>
                <Blogcard blogImage={img4} blogDate="11 Dec 2021" blogcontent="I do indeed write on the road. My laptop goes with me everywhere." blogcontent1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla turpis purus vitae tortor, nisl, aliquam. Sodaleset..."></Blogcard>
            </Col>
            <Col>
                <Blogcard blogImage={img5} blogDate="11 Dec 2021" blogcontent="Paranomal and Ghost Experience: The man behind the musical" blogcontent1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dolor at feugiat in tempor maecenas placerat..." ></Blogcard>
            </Col>
            <Col>
                <Blogcard blogImage={img6} blogDate="26 Nov 2021" blogcontent="When your plants are growing like the bosses they are." blogcontent1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dolor at feugiat in tempor maecenas placerat..." ></Blogcard>
            </Col>
            <Col>
                <Blogcard blogImage={img7} blogDate="03 Aug 2021" blogcontent="WIT AND DELIGHT: The Advice From A Twenty Something" blogcontent1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dolor at feugiat in tempor maecenas placerat..."  ></Blogcard>
            </Col>
            <Col>
                <Blogcard blogImage={img8} blogDate="02 Dec 2021" blogcontent="Travelers like to know which public transportation options are best." blogcontent1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dolor at feugiat in tempor maecenas placerat..." ></Blogcard>
            </Col>
            <Col>
                <Blogcard blogImage={img9} blogDate="02 Dec 2021" blogcontent="A year from now you may wish you had started today." blogcontent1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dolor at feugiat in tempor maecenas placerat..."  ></Blogcard>
            </Col>
        </Row>
        <div className="text-center">
            <Button type="button" className="btn btn-primary card">Load More</Button>
        </div>
    </Fragment>
  )
})

Bloggrid.displayName="Bloggrid"
export default Bloggrid