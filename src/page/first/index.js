import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import "./index.css";
import { questionData } from "../../data/QuestionData";
import { Question } from "../../components/question";
import { Label } from "../../components/label";
import { Comment } from "../../components/comment";

const FirstPage = (props) => {
  const navigate = useNavigate();
  const [text, setText] = useState({
    first_text: "",
    second_text: "",
    third_text: "",
  });
  const [countList, setCountList] = useState([0]);

  const { first_text, second_text, third_text } = text;

  const onTextChange = (e) => {
    const { name, value } = e.target;
    setText({
      ...text,
      [name]: value,
    });
    console.log(text);
  };

  const onClickSubmit = () => {
    navigate("/second");
    console.log(text);
  };

  const onClickMakeComment = () => {
    let countArr = [...countList];
    let counter = countArr.slice(-1)[0];
    counter += 1;
    countArr.push(counter);
    setCountList(countArr);
  };

  return (
    <div id="container-First">
      <div id="logo">
        <p style={{ fontSize: 20 }}>
          <b style={{ fontSize: 36, color: "rgb(100,100,255)" }}>A.I.B</b>anner
        </p>
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
      <div id="form-comment">
        <Comment countList={countList} />
        <Button onClick={onClickMakeComment}>
          <PlusCircleOutlined /> 추가
        </Button>
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
