import {memo,Fragment} from 'react'

//react-bootstrap
import { Image,OverlayTrigger,Tooltip} from 'react-bootstrap'

//Router
import {Link} from 'react-router-dom'

//Component
import Card from '../../../../components/bootstrap/card'

const Blogcard = memo((props) => {
    return (
        <Fragment>
            <Card className={props.classname}>
                <Card.Header className="card-thumbnail">
                    <Image src={props.blogImage} alt="02" className="img-fluid w-100 rounded object-cover " loading="lazy" />
                </Card.Header>
                <Card.Body className="card-thumbnail">
                    <div>
                        <small className="text-primary">
                        {props.blogDate}
                        </small>
                        <Link to="/pro/blog/blog-details" className="iq-title">
                            <OverlayTrigger overlay={<Tooltip>{props.blogcontent}</Tooltip>}>
                                <h4 className="mt-2 mb-3 text-ellipsis short-2">{props.blogcontent}</h4>
                            </OverlayTrigger>
                        </Link>
                        <div className="d-flex gap-3">
                            <Link to="/pro/blog/blog-details" className="iq-blog-adventure">Travel</Link><span > | </span>
                            <Link to="/pro/blog/blog-details" className="iq-blog-adventure text-primary">Jenny Wilson</Link>
                        </div>
                        <p className="my-4 text-ellipsis short-2">{props.blogcontent1}</p>
                        <div>
                            <Link to="/pro/blog/blog-details"  className="btn btn-primary" >Read More</Link>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
})

Blogcard.displayName="Blogcard"
export default Blogcard