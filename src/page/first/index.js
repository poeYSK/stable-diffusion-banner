import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import questionData from "../../data/QuestionData";
import { Question } from "../../components/question";
import { Label } from "../../components/label";

const FirstPage = (props) => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const onTextChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  const onClickSubmit = () => {
    navigate("/second");
  };

  return (
    <div id="container-First">
      <div id="logo">
        <h1>A.I.Banner</h1>
      </div>
      <div id="form-question">
        <Label q={questionData[0]} /> <br />
        <Question q={questionData[0]} /> <br />
        <Label q={questionData[1]} /> <br />
        <Question q={questionData[1]} /> <br />
        <Label q={questionData[2]} /> <br />
        <Question q={questionData[2]} /> <br />
      </div>
      <form>
        <div id="submit">
          <button id="submitButton" type="sumbit" onClick={onClickSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
    // id: container-First
  );
};

export default FirstPage;
