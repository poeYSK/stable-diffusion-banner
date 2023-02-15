import React from "react";
import "./index.css";
import questionData from "./QuestionData";

const FirstPage = () => {
  return (
    <div id="container-First">
      <div id="form-question">
        <div>
          {questionData.map((q) => {
            return (
              <>
                <span>{q.question}</span>
                <div>
                  <textarea id={q.id} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
