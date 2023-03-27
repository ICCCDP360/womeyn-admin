import React from "react";

export const CheckBox = (props) => {
  return (
    <div>
      <input
        key={props.id}
        onChange={props.handleCheckChildElement}
        type="checkbox"
        checked={props.isChecked}
        value={props.value}
      />{" "}
      {props.value}
    </div>
  );
};

export default CheckBox;
