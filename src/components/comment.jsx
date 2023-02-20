import TextareaAutosize from "react-textarea-autosize";

export const Comment = (props) => {
  return (
    <div>
      {props.commentList &&
        props.commentList.map((item, i) => (
          <TextareaAutosize className="question-class" minRows={5} cols={100} />
        ))}
    </div>
  );
};
