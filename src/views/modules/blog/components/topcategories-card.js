import {memo,Fragment} from 'react'

//React-bootstrap
import {Image} from 'react-bootstrap'

//Component
import Card from '../../../../components/bootstrap/card'

const TopcategoriesCard = memo((props) => {
    return (
        <Fragment>
            <Card>
                <Card.Body className="card-thumbnail">
                    <Image src={props.img} className="img-fluid object-cover iq-top-categories" alt="Top-Categories"/>
                    <div className="text-center">
                        <h5 className="text-ellipsis short-1">{props.header}</h5>
                        <small>{props.subHeader}</small>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
})

TopcategoriesCard.displayName="TopcategoriesCard"
export default TopcategoriesCard