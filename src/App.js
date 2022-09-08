import "./App.css";
import ClassComponent from "./components/ClassComponents";
import FuntionalComponents from "./components/FunctionalComponents";
import { useState } from "react";

function App() {

  const company = "TCS";

  const [name, setName] = useState("Zubair");

  return (<div className="App">
    <h1>Class Component</h1>
    <ClassComponent />
    <br />
    <h1>Functional Components</h1>
    <FuntionalComponents name={name} age={20} company={company} setName={setName} />
  </div>
  );
};

export default App;