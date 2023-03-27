import {memo,Fragment} from 'react'

//Components
import RatingStar from "../../../../components/rating-star"

const FilterRating = memo((props) => {
    return(
        <Fragment>
            <div className="form-check d-flex align-items-center mb-0">
                <input type="checkbox" className="form-check-input" id={props.id} defaultChecked={props.productChecked}/>
                <label className="ms-2 d-flex align-items-center w-100" htmlFor={`Check-${props.id}`}> 
                    <RatingStar count1={props.count1}count={props.count} />
                    <span className="ms-2">& Up</span>
                </label>
            </div>
        </Fragment>
    )
})

FilterRating.displayName="FilterRating"
export default FilterRating