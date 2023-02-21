import TextareaAutosize from "react-textarea-autosize";
import { Select } from "./select";
export const Comment = (props) => {
  return (
    <div className="comment-class">
      {props.countList &&
        props.countList.map((item) => (
          <div className="form-comment">
            <Select />
            <TextareaAutosize
              className="question-class"
              minRows={5}
              cols={100}
            />
          </div>
        ))}
    </div>
  );
};
