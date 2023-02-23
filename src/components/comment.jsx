import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Select } from "./select";

export const Comment = (props) => {
  const [comments, setComments] = useState([]);

  const onTextChange = (index, e) => {
    const newComments = [...comments];
    newComments[index] = e.target.value;
    setComments(newComments);
    props.onCommentChange(newComments);
  };

  return (
    <div className="comment-class">
      {props.countList &&
        props.countList.map((item, index) => (
          <div className="form-comment" key={index}>
            <Select />
            <TextareaAutosize
              className="question-class"
              minRows={5}
              cols={100}
              value={comments[index] || ""}
              onChange={(e) => onTextChange(index, e)}
            />
          </div>
        ))}
    </div>
  );
};
