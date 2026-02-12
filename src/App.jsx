import { useState } from "react";
import questions from "./data";
import Question from "./Question";

const App = () => {
  const [qst, setQst] = useState(questions);
  const [activeId, setActiveId] = useState(null);
  console.log(qst);

  const showOneQuestion = (id) => {
    const newActiveId = id == activeId ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <main>
      <section className="container">
        <h1>Questions</h1>
        {qst.map((obj) => {
          return (
            <Question
              key={obj.id}
              {...obj}
              activeId={activeId}
              showOneQuestion={showOneQuestion}
            />
          );
        })}
      </section>
    </main>
  );
};
export default App;
