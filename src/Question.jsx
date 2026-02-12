import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ id, title, info, activeId, showOneQuestion }) => {
  // const [toggle, setToggle] = useState(false);
  const isActive = id == activeId;
  // const toggleQuestion = () => {
  //   setToggle((currentValue) => {
  //     return !currentValue;
  //   });
  // };
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => showOneQuestion(id)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};

export default Question;
