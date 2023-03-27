import {memo,Fragment} from 'react'

//Componet
import Card from '../../../../components/bootstrap/card'


const AnalyticsCard = memo((props) => {
    return (
        <Fragment>
            <Card>
                <Card.Body>
                    <div className="text-center">
                        <h3 className="text-primary">{props.count}</h3>
                        <p className="mb-0">{props.content}</p>
                        <small>
                            <span className={props.textColor}>{props.number} </span><span>{props.content1}</span>
                        </small>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
})

AnalyticsCard.displayName="AnalyticsCard"
export default AnalyticsCard