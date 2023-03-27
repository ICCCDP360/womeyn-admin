import {memo,Fragment} from 'react'

//React-bootstrap
import {Button, Image,OverlayTrigger,Tooltip} from 'react-bootstrap'

//Componets
import Card from '../../../../components/bootstrap/card'

//Router
import {Link} from 'react-router-dom'

const Topbloglist = memo((props) => {
    return (
        <Fragment>
            <Card>
                <Card.Body className="card-thumbnail">flex.disPlay
                    <div className="d-flex align-items-center iq-incoming-blogs gap-3">
                        <Image src={props.blogImage} alt="02" className="img-fluid object-contain rounded"/>
                        <div className="d-flex flex-column justify-content-center">
                            <small  className="text-primary">
                                {props.blogDate}
                            </small>
                            <OverlayTrigger overlay={<Tooltip>{props.blogheader}</Tooltip>}>
                                <h4 className="my-3 para-ellipsis-2">{props.blogheader}</h4>
                            </OverlayTrigger>
                            <div className="d-flex gap-2">
                            <OverlayTrigger overlay={<Tooltip>{props.blogsmall1}</Tooltip>}>
                                <Link to="/pro/blog/blog-details"  className="text-body para-ellipsis-1 fs-6">{props.blogsmall1}</Link>
                            </OverlayTrigger>
                            <span> | </span>
                            <OverlayTrigger overlay={<Tooltip>{props.blogsmall2}</Tooltip>}>
                                <Link to="/pro/blog/blog-details"  className="text-mute para-ellipsis-1 fs-6">{props.blogsmall2}</Link>
                            </OverlayTrigger>
                            </div>
                            <p className="my-4 text-ellipsis short-1">{props.blogcontent}</p>
                            <div>
                                <Button>Read More</Button>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
})

Topbloglist.displayName="Topbloglist"
export default Topbloglist