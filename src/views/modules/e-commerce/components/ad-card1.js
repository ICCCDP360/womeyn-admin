import {memo,Fragment} from 'react'

//Components
import Card from '../../../../components/bootstrap/card'

//Count-up
import CountUp from "react-countup"

const AdCard1 = memo((props) =>{
    return (
        <Fragment>
            <Card className="cards">
                <Card.Body className="text-center">
                    <div className="m-auto d-inline-block p-4 bg-soft-primary rounded-pill">{props.svg}</div>
                    <h4 className="mt-4 mb-2 counter">{props.dollar}
                        <CountUp
                            start={props.start}
                            end={props.end}
                            duration={props.duration}
                            separator={props.separator}
                        />{props.persent}
                    </h4>
                    <p className="mb-0">{props.TotalEarning}</p>
                </Card.Body>
            </Card>
        </Fragment>
    )
})

AdCard1.displayName="AdCard1"
export default AdCard1