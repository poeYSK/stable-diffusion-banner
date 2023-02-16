import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import "./index.css";
import questionData from "./QuestionData";

const FirstPage = () => {
  const onHandleSubmit = () => {};

  return (
    <div id="container-First">
      <div id="form-question">
        <label>{questionData[0].question}</label>
        <br />
        <TextareaAutosize
          id="first-question"
          className="question-class"
          minRows={5}
          cols={100}
        />
        <br />
        <label>{questionData[1].question}</label>
        <br />
        <TextareaAutosize
          id="second-question"
          className="question-class"
          minRows={5}
          cols={100}
        />
        <br />
        <label>{questionData[2].question}</label>
        <br />
        <TextareaAutosize
          id="third-question"
          className="question-class"
          minRows={5}
          cols={100}
        />
      </div>
      <form onSubmit={onHandleSubmit}>
        <div id="submit">
          <button id="submitButton" type="sumbit">
            Submit
          </button>
        </div>
      </form>
    </div>
    // id: container-First
  );
};

export default FirstPage;
