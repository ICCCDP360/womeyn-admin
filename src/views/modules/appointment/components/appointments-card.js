import { memo, Fragment } from 'react'

//Componets
import Card from '../../../../components/bootstrap/card'

const AppointmentsCard = memo((props) => {
    return (
        <Fragment>
            <Card>
                <Card.Body className="m-0 p-0">
                    <div className="d-flex align-items-center gap-3 ">
                        <div className={`bg-soft-${props.color} p-2 rounded`}>
                            {props.svg}
                        </div>
                        <div>
                            <h4 className="counter">{props.counter}</h4>
                            <span className="text-dark">{props.content}</span>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
})

AppointmentsCard.displayName = "AppointmentsCard"
export default AppointmentsCard