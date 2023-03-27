import {memo,Fragment} from 'react'

//React-bootstrap
import {Button, Image,OverlayTrigger,Tooltip} from 'react-bootstrap'

//Component
import Card from '../../../../components/bootstrap/card'

//Router
import {Link} from 'react-router-dom'

const Upcomingblog = memo((props) => {
    return (
        <Fragment>
            <Card className="mb-0">
                <Card.Body className="card-thumbnail">
                    <div className="d-flex align-items-start iq-upcoming-blogs">
                        <Image src={props.blogImage} alt="02" className="img-fluid object-cover rounded me-0 me-md-3 mb-3 mb-md-0"/>
                        <div className="d-flex flex-column justify-content-center">
                            <small className="text-primary">{props.blogDate}</small>
                            <Link to="/pro/blog/blog-details">
                                <OverlayTrigger overlay={<Tooltip>{props.blogheader}</Tooltip>}>
                                    <h4 className="my-3 para-ellipsis-1">{props.blogheader}</h4>
                                </OverlayTrigger>
                            </Link>
                            <div className="d-flex mb-4 gap-2">
                                <OverlayTrigger overlay={<Tooltip>{props.blogsData1}</Tooltip>}>
                                    <Link to="/pro/blog/blog-details" className="iq-blog-adventure text-ellipsis short-1">{props.blogsData1}</Link>
                                </OverlayTrigger>
                                <span> | </span>
                                <OverlayTrigger overlay={<Tooltip>{props.blogsData2}</Tooltip>}>
                                    <Link to="/pro/blog/blog-details"  className="iq-blog-adventure text-ellipsis short-1 text-primary">{props.blogsData2}</Link>
                                </OverlayTrigger>
                            </div>
                            <div>
                                <Button>Notify Me</Button>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
})

Upcomingblog.displayName="Upcomingblog"
export default Upcomingblog