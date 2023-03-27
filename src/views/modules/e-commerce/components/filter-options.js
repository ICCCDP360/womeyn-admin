import {memo,Fragment} from 'react'

//React-bootstrap
import {Form} from 'react-bootstrap'

const FilterOptions = memo((props) => {
    return(
        <Fragment>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label={props.productName} id={`${props.uniqueName}-${props.id}`} defaultChecked={props.productChecked} />
            </Form.Group>
        </Fragment>
    )
})

FilterOptions.displayName="FilterOptions"
export default FilterOptions
