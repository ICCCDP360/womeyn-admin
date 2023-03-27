import React,{memo,Fragment} from 'react'

//React-bootstrap
import {Image,Button} from 'react-bootstrap'

//Router
import {Link} from 'react-router-dom'

//Components
import Card from '../../../../components/bootstrap/card'

const Friendlists = memo((props) => {
    return (
        <Fragment>
            <Card className="card-block card-stretch card-height">
                <Card.Body className="profile-page p-0">
                    <div className="profile-header-image">
                        <div className="position-relative">
                            <Image src={props.friendimg} alt="profile-bg" className="rounded img-fluid w-100" loading="lazy" />
                        </div>
                        <div className="profile-info p-4">
                            <div className="user-detail">
                                <div className="d-flex flex-wrap justify-content-between align-items-start">
                                    <div className="profile-detail d-flex gap-4">
                                        <div className="profile-img">
                                            <Image src={props.img} alt="profile-img" className="avatar-130 img-fluid rounded-pill border" loading="lazy" />
                                        </div>
                                        <div className="user-data-block">
                                            <h4>
                                                <Link to="#">{props.friendname}</Link>
                                            </h4>
                                            <h6>{props.friendtitle}</h6>
                                            <p>{props.friendlist}</p>
                                        </div>
                                    </div>
                                    <Button>Following</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
})

Friendlists.displayName="Friendlists"
export default Friendlists