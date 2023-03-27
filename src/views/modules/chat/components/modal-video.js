import {useState,memo,Fragment} from 'react'

//Bootstrap
import {Button,Modal} from 'react-bootstrap'

//Component
import Card from '../../../../components/bootstrap/card'

const Modalvideo = memo((props) => {
    const[status,setStatus] = useState('enabled')
    const[status1,setStatus1] = useState('enabled')
  return (
    <Fragment>
         <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Audio and Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Card>
                    <Card.Body className=" border shadow-none rounded d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">Audio</h6>
                        <div className="d-flex gap-3">
                            <Button size="sm" variant={`outline-primary ${status === 'enabled' ? 'active' : ''} `} onClick={() => {setStatus('enabled')}}>Enable</Button>
                            <Button size="sm" variant={`outline-primary ${status === 'disable' ? 'active' : ''} `}  onClick={() => {setStatus('disable')}}>Disable</Button>
                        </div>  
                    </Card.Body>
                </Card>
                <Card className=" mb-0">
                    <Card.Body className=" border shadow-none rounded d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">Video</h6>
                        <div className="d-flex gap-3">
                            <Button size="sm"  variant={`outline-primary ${status1 === 'enabled' ? 'active' : ''} `} onClick={() => {setStatus1('enabled')}}>Enable</Button>
                            <Button size="sm" variant={`outline-primary ${status1 === 'disable' ? 'active' : ''} `}  onClick={() => {setStatus1('disable')}}>Disable</Button>
                        </div>  
                    </Card.Body>
                </Card> 
                </Modal.Body>
            </Modal>
    </Fragment>
  )
})

export default Modalvideo