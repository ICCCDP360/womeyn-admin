import React,{memo,Fragment} from 'react'

//React-bootstrap
import {Image,Button} from 'react-bootstrap'

//React-router
import {Link} from 'react-router-dom'
 
//Components
import Card from '../../../../components/bootstrap/card'

const Groupcard = memo((props) => {
    return (
        <Fragment>
            <Card className="mb-0 group-card">
                <div className="top-bg-image">
                    <Image src={props.img} className="img-fluid w-100 rounded-0 rounded-top" alt="group-bg" loading="lazy" />
                </div>
                <div className="card-body text-center">
                    <div className="group-icon">
                        <Image src={props.groupimg} alt="profile-img" className="rounded-circle img-fluid avatar-120" loading="lazy" />
                    </div>
                    <div className="group-info pt-3 pb-3">
                        <h4><Link to="/pro/social/group-detail">{props.grouptitle}</Link></h4>
                        <p>{props.groupdec}</p>
                    </div>
                    <div className="group-details d-inline-block pb-3">
                        <ul className="d-flex align-items-center justify-content-between list-inline m-0 p-0">
                            <li className="pe-3 ps-3">
                                <p className="mb-0">{props.grouppost}</p>
                                <h6>{props.grouppostnumber}</h6>
                            </li>
                            <li className="pe-3 ps-3">
                                <p className="mb-0">{props.groupmember}</p>
                                <h6>{props.grouprnumber}</h6>
                            </li>
                            <li className="pe-3 ps-3">
                                <p className="mb-0">{props.groupvisit}</p>
                                <h6>{props.groupvisitnumber}</h6>
                            </li>
                        </ul>
                    </div>
                    <div className="group-member mb-3">
                        <div className="iq-media-group">
                            <Link to="#" className="iq-media">
                                <Image className="img-fluid avatar-40 rounded-circle" src={props.groupavatar} alt="img1" loading="lazy" />
                            </Link>
                            <Link to="#" className="iq-media">
                                <Image className="img-fluid avatar-40 rounded-circle" src={props.groupavatar1} alt="img2" loading="lazy" />
                            </Link>
                            <Link to="#" className="iq-media">
                                <Image className="img-fluid avatar-40 rounded-circle" src={props.groupavatar2} alt="img3" loading="lazy" />
                            </Link>
                            <Link to="#" className="iq-media">
                                <Image className="img-fluid avatar-40 rounded-circle" src={props.groupavatar3} alt="img4" loading="lazy" />
                            </Link>
                            <Link to="#" className="iq-media">
                                <Image className="img-fluid avatar-40 rounded-circle" src={props.groupavatar4} alt="img5" loading="lazy" />
                            </Link>
                            <Link to="#" className="iq-media">
                                <Image className="img-fluid avatar-40 rounded-circle" src={props.groupavatar5} alt="img6" loading="lazy" />
                            </Link>
                        </div>
                    </div>
                    <Button type="submit" variant="d-block w-100" >Join</Button>
                </div>
            </Card>
        </Fragment>
    )
})

Groupcard.displayName="Groupcard"
export default Groupcard