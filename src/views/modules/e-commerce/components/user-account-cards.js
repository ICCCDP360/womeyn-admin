import {memo,Fragment} from 'react'

//Component
import Card from '../../../../components/bootstrap/card'

//Router
import {Link} from 'react-router-dom'

const UserAccountCards = memo((props) =>{
    return (
        <Fragment>
            <div className="col-12">
                <Card className={props.cardCass}>
                    {props.addressMode &&
                        <Card.Header className="bg-soft-secondary user-details-bg-color px-3 py-2">
                            <h6 className="text-muted mb-0">{props.addressMode}</h6>
                        </Card.Header>
                    }
                    <Card.Body>
                        <div className="d-flex justify-content-between flex-wrap">
                            <div className="d-flex flex-column ">
                                <h6 className="mb-2 d-flex align-items-center gap-2">{props.userName}
                                    {props.addressType &&
                                        <span className="badge bg-primary">{props.addressType}</span>
                                    }
                                </h6>
                                <p className="mb-2">{props.userAddress}</p>
                                <h6>Contact: <span className="text-muted">{props.userContact}</span> </h6>
                            </div>
                            <div className="small mt-2 mt-xl-0 mt-lg-0 mt-md-0">
                                <Link to="#">Edit</Link>
                                <span>|</span>
                                <Link to="#">Remove</Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </Fragment>
    )
})

UserAccountCards.displayName="UserAccountCards"
export default UserAccountCards