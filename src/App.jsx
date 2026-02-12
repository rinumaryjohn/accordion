import { useState } from "react";
import questions from "./data";
import Question from "./Question";

const App = () => {
  const [qst, setQst] = useState(questions);
  console.log(qst);

  return (
    <main>
      <section className="container">
        <h1>Questions</h1>
        {qst.map((obj) => {
          return <Question key={obj.id} {...obj} />;
        })}
      </section>
    </main>
  );
};
export default App;
