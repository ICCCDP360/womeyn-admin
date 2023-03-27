import React,{useState} from 'react'

// plugin
import ReactSlider from "react-slider";

const RangeSlider = () => {
    const [value, setValue] = useState([0, 100])
  return (
    <>
        <div className="form-group mt-3 product-range">
            <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                defaultValue={value}
                onChange={currentPriceState => {
                    setValue([...currentPriceState]);
                    }}
            />
        </div>
        <div className="d-flex justify-content-between">
            <small id="lower-value">${Math.round(value[0] * 20)}</small>
            <small id="upper-value">${Math.round(value[1] * 20)}</small>
        </div>
    </>
  )
}

export default RangeSlider