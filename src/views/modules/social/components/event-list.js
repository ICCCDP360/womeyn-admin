import React,{memo,Fragment} from 'react'

//React-bootstrap
import {Image} from 'react-bootstrap'

//Router
import {Link} from 'react-router-dom'

//Component
import Card from '../../../../components/bootstrap/card'

const Eventlists = memo((props) => {
    return (
        <Fragment>
            <Card className="rounded">
                <div className="event-images">
                <Link to="#">
                    <Image src={props.img} className="img-fluid" alt="Responsive image" loading="lazy" />
                </Link>
                </div>
                <Card.Body>
                    <div className="d-flex gap-3">
                        <div className="date-of-event">
                            <span>{props.month}</span>
                            <h5>{props.date}</h5>
                        </div>
                        <div className="events-detail">
                            <h5><Link to="#">{props.title}</Link></h5>
                            <p>{props.dec}</p>
                            <div className="event-member">
                                <div className="iq-media-group">
                                    <Link to="#" className="iq-media">
                                        <Image className="img-fluid avatar-40 rounded-circle" src={props.cardimg}alt="img1" loading="lazy" />
                                    </Link>
                                    <Link to="#" className="iq-media">
                                        <Image className="img-fluid avatar-40 rounded-circle" src={props.cardimg2} alt="img2" loading="lazy" />
                                    </Link>
                                    <Link to="#" className="iq-media">
                                        <Image className="img-fluid avatar-40 rounded-circle" src={props.cardimg3} alt="img3" loading="lazy" />
                                    </Link>
                                    <Link to="#" className="iq-media">
                                        <Image className="img-fluid avatar-40 rounded-circle" src={props.cardimg4} alt="img4" loading="lazy" />
                                    </Link>
                                    <Link to="#" className="iq-media">
                                        <Image className="img-fluid avatar-40 rounded-circle" src={props.cardimg5} alt="img5" loading="lazy" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
})

Eventlists.displayName="Eventlists"
export default Eventlists