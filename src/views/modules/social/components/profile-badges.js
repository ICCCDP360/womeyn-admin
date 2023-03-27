import React,{memo,Fragment} from 'react'

//React-bootstrap
import {Image} from 'react-bootstrap'

//Component
import Card from '../../../../components/bootstrap/card'

const Profilebadge = memo((props) => {
    return (
        <Fragment>
            <Card className="profile-badges mb-0">
                <Card.Body>
                    <div className="iq-badges text-left">
                        <div className="badges-icon">
                            <Image className="avatar-80 rounded" src={props.profileimg} alt="" loading="lazy" />
                        </div>
                        <h5 className="mb-2">{props.profilebadgestitle}</h5>
                        <p>{props.profilebadgesdec}</p>
                        <span className="text-uppercase">{props.profilebadgessub}</span>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
})

Profilebadge.displayName="Profilebadge"
export default Profilebadge