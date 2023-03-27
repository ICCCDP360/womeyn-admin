import React,{memo,Fragment} from 'react'

//React-bootstrap
import {Image,Button} from 'react-bootstrap'

//Component
import Card from '../../../../components/bootstrap/card'

const StatisticsCards = memo((props) => {
    return (
        <Fragment>
            <Card className="bg-body shadow-none mb-xl-0  ">
                <Card.Body>
                    <div className="d-flex align-items-center gap-3">
                        <Button variant="sm bg-white rounded-circle p-2" >
                            <Image src={props.img} alt="01" className="img-fluid avatar-30 object-contain"/>
                        </Button>
                        <div>
                            <small>{props.header}</small>
                            <h4 className="mb-0">{props.subHeader}</h4>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
})

StatisticsCards.displayName="StatisticsCards"
export default StatisticsCards