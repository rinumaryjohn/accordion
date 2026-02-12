import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [toggle, setToggle] = useState(false);
  const toggleQuestion = () => {
    setToggle((currentValue) => {
      return !currentValue;
    });
  };
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={toggleQuestion}>
          {toggle ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {toggle && <p>{info}</p>}
    </article>
  );
};

export default Question;
