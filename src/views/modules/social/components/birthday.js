import React,{memo,Fragment} from 'react'

//React-bootstrap
import {Image,Button} from 'react-bootstrap'

//Router
import {Link} from 'react-router-dom'

//Component
import Card from '../../../../components/bootstrap/card'

const Profilebirthday = memo((props) => {
    return (
        <Fragment>
            <Card>
                <Card.Body>
                    <div className="d-block d-md-flex align-items-center justify-content-between text-center text-md-start">
                        <div className="d-block d-md-flex align-items-center my-3 my-md-0 gap-3">
                            <Link to="#">
                                <Image src={props.birthdayimg} className="img-fluid avatar-130" alt="profile-img" loading="lazy" />
                            </Link>
                            <div className="friend-info  mt-md-0 mt-3">
                                <h5 className="mb-0">{props.birthdaytitle}</h5>
                                <p className="mb-0">{props.birthdaydate}</p>
                            </div>
                        </div>
                        <Button>Create Card</Button>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
})

Profilebirthday.displayName="Profilebirthday"
export default Profilebirthday