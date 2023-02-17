import TextareaAutosize from "react-textarea-autosize";
export const Question = (props) => {
  return (
    <TextareaAutosize
      id={props.q.id}
      className="question-class"
      minRows={5}
      cols={100}
    />
  );
};
