import {memo,Fragment} from 'react'

// React-bootstrap
import { Dropdown} from 'react-bootstrap'

//Router
import {Link} from 'react-router-dom'

//Component
import Blogcard from '../components/blogcard'
import CustomToggle from '../../../../components/dropdowns'

//Masonry
import Masonry from 'react-masonry-css'

//Img
import img1 from '../../../../assets/modules/blog/images/blog-grid/15.png'
import img2 from '../../../../assets/modules/blog/images/blog-grid/16.png'
import img3 from '../../../../assets/modules/blog/images/blog-grid/17.png'
import img4 from '../../../../assets/modules/blog/images/blog-grid/18.png'
import img5 from '../../../../assets/modules/blog/images/blog-grid/19.png'
import img6 from '../../../../assets/modules/blog/images/blog-categories/02.png'


const Blogtrending = memo(() => {
    return (
        <Fragment>
            <div className="mb-5">
                <div className="d-flex justify-content-between mb-4">
                    <h4 className="mb-0">Trending Blogs</h4>
                    <Dropdown className="d-flex align-items-center">
                    Sorting By :
                        <Dropdown.Toggle as={CustomToggle} variant="text-secondary dropdown-toggle" >
                        Name
                        </Dropdown.Toggle>
                        <Dropdown.Menu aria-labelledby="dropdownMenuButton1">
                            <li><Dropdown.Item href="#">Action</Dropdown.Item></li>
                            <li><Dropdown.Item href="#">Another action</Dropdown.Item></li>
                            <li><Dropdown.Item href="#">Something else here</Dropdown.Item></li>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <Masonry
               breakpointCols={3}
               className="my-masonry-grid"
               columnClassName="my-masonry-grid_column"
            >
                <Blogcard blogImage={img6} blogDate="02 Dec 2021" blogcontent="The Ultimate Travel Guide: What To Do, See & Eat." blogcontent1="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                <Blogcard blogImage={img1} blogDate="02 Dec 2021" blogcontent="The Cheapest Destinations of All Time, A list of Beauty and Budget." blogcontent1="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                <Blogcard blogImage={img4} blogDate="02 Dec 2021" blogcontent="The Foreign and Domestic Culinary Adventures: An Art" blogcontent1="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                <Blogcard blogImage={img3} blogDate="11 Dec 2021" blogcontent="Paranomal and Ghost Experience: The man behind the musical" blogcontent1="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                <Blogcard blogImage={img5} blogDate="03 Aug 2021" blogcontent="WIT AND DELIGHT: The Advice From A Twenty Something" blogcontent1="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                <Blogcard blogImage={img2} blogDate="02 Dec 2021" blogcontent="The Expierience: Travel Tales From India and Abroad." blogcontent1="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
            </Masonry>
            <div className="text-center">
                <Link to="/blog/blog-details" className="btn btn-primary mb-3">Load More</Link>
            </div>
        </Fragment>
    )
})

Blogtrending.displayName="Blogtrending"
export default Blogtrending