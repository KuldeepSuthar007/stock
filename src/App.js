import { useState } from "react";
import DisplaySection from "./components/DisplaySection/DisplaySection";

import Header from "./components/Header/Header";

function App() {
  const [input, setInput] = useState("")

  return (
    <>
      <div className="maincontainer">
        <Header input={input} setInput={setInput} />
        <DisplaySection input={input} />
      </div>
    </>
  );
}

export default App;
