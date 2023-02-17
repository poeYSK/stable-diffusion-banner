import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import questionData from "../../data/QuestionData";
import { Question } from "../../components/question";
import { Label } from "../../components/label";

const FirstPage = (props) => {
  const navigate = useNavigate();
  const [text, setText] = useState({
    first_text: "",
    second_text: "",
    third_text: "",
  });

  const { first_text, second_text, third_text } = text;

  const onTextChange = (e) => {
    const { name, value } = e.target;
    setText({
      ...text,
      [name]: value,
    });
  };

  const onClickSubmit = () => {
    navigate("/second");
    console.log(text);
  };

  return (
    <div id="container-First">
      <div id="logo">
        <h1>A.I.Banner</h1>
      </div>
      <div id="form-question">
        <Label q={questionData[0]} /> <br />
        <Question
          q={questionData[0]}
          name="first_text"
          value={first_text}
          onTextChange={onTextChange}
        />{" "}
        <br />
        <Label q={questionData[1]} /> <br />
        <Question
          q={questionData[1]}
          name="second_text"
          value={second_text}
          onTextChange={onTextChange}
        />{" "}
        <br />
        <Label q={questionData[2]} /> <br />
        <Question
          q={questionData[2]}
          name="third_text"
          value={third_text}
          onTextChange={onTextChange}
        />{" "}
        <br />
      </div>
      <form>
        <div id="submit">
          <button id="submitButton" type="sumbit" onClick={onClickSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FirstPage;
