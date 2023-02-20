import TextareaAutosize from "react-textarea-autosize";

export const Comment = (props) => {
  return (
    <div className="comment-class">
      {props.countList &&
        props.countList.map((item, i) => (
          <div id={item}>
            <checkbox />
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
