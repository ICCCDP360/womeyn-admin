import { memo, Fragment, useState } from "react";

//React-bootstrap
import { Col, Button, Image } from "react-bootstrap";

//Router
import { Link } from "react-router-dom";

//Components
import Card from "../../components/bootstrap/card";

import "./styles.scss";
import "./tagStyles.scss";

const TagsInput = memo((props) => {
  const [tags, setTags] = useState([]);

  const addTags = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      setTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };

  const removeTags = (index) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
  };

  return (
    <Fragment>
      <div className="tags-input">
        <ul>
          {tags.map((tag, index) => (
            <li key={index}>
              <span>{tag}</span>
              <i className="material-icons" onClick={() => removeTags(index)}>
                close
              </i>
            </li>
          ))}
        </ul>
        <input
          type="text"
          onKeyUp={(event) => addTags(event)}
          placeholder="Press enter to add tags"
        />
      </div>
    </Fragment>
  );
});

TagsInput.displayName = "TagsInput";
export default TagsInput;
