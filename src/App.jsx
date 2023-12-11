import { useState } from "react";
import LearnCode from "./LearnCode/LearnCode";
import { data } from "./LearnCode/data";

function App() {
  const [info, setInfo] = useState(data);
  return (
    <>
      <h1 className="text-center">Learn to Code</h1>
      {info.map((list) => {
        return <LearnCode key={list.id} {...list} />;
      })}
    </>
  );
}

export default App;
