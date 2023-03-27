import {memo,Fragment} from 'react'

//React-bootstrap
import {Row, Image} from 'react-bootstrap'

//Router
import {Link} from 'react-router-dom';

//Components
import Card from '../../../../components/bootstrap/card'

const OfferCard = memo((props) =>{
    return (
        <Fragment>
            <Card className={`product-grid-item bg-soft-secondary mb-0 ${props.className}`}>
                <Card.Body>
                    <Row className="offer-card">
                        <div className="col-6 d-flex flex-column justify-content-center">
                            <h4 className="pb-2">{props.header}</h4>
                            <h6 className="pb-3">{props.subHeader}</h6>
                            <Link to="#">{props.link}</Link>
                        </div>
                        <div className="col-6 ">
                            <Image src={props.img} alt="product-details" className="img-fluid"/>
                        </div>
                    </Row>
                </Card.Body>
            </Card>
        </Fragment>
    )
})
OfferCard.displayName="OfferCard"
export default OfferCard