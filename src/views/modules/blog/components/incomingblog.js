import {memo,Fragment} from 'react'

//React-bootstrap
import {Button, Image,OverlayTrigger,Tooltip} from 'react-bootstrap'

//Componet
import Card from '../../../../components/bootstrap/card'

//Router
import {Link} from 'react-router-dom'

const Incomingblog = memo((props) => {
    return (
        <Fragment>
            <Card className="iq-incoming-blogs">
                <Card.Body className="card-thumbnail">
                    <div className="row align-items-center">
                        <div className="col-md-9">
                            <Image src={props.blogImage} alt="02" className="img-fluid me-0 mb-3 mb-md-0 iq-blog-img"/>
                        </div>
                        <div className="col-md-3 ps-md-2">
                            <div className="d-flex flex-column justify-content-center">
                                <small className="text-primary">{props.blogDate}</small>
                                <Link to="/pro/blog/blog-details" className="iq-title">
                                    <OverlayTrigger overlay={<Tooltip>{props.blogheader}</Tooltip>}>
                                        <h4 className="mt-2 mb-3 text-ellipsis short-2">{props.blogheader}</h4>
                                    </OverlayTrigger>
                                </Link>
                                <div className="d-flex mb-3 gap-2">
                                    <OverlayTrigger overlay={<Tooltip>{props.blogsData1}</Tooltip>}>
                                        <Link to="/pro/blog/blog-details"  className="iq-blog-adventure para-ellipsis-1 short-1">{props.blogsData1}</Link>
                                    </OverlayTrigger>
                                    <span> | </span>
                                    <OverlayTrigger overlay={<Tooltip>{props.blogsData2}</Tooltip>}>
                                        <Link to="/pro/blog/blog-details"  className="iq-blog-adventure para-ellipsis-1 short-1 text-primary">{props.blogsData2}</Link>
                                    </OverlayTrigger>
                                </div>
                                <div>
                                    <Button>Read More</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
})

Incomingblog.displayName="Incomingblog"
export default Incomingblog