import { useState } from "react";
import "./App.css";
import logo from "./assets/react.svg";

function App() {
  const [message, setMessage] = useState();
  // useEffect(() => {
  //   fetch("/api/")
  //     .then(res => res.json())
  //     .then(res => setMessage(res.message))
  //     .catch(console.error);
  // }, [setMessage]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message || "Loading..."}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload to see stuff
        </p>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <button className="btn">Hello daisyUI</button>
      </header>
    </div>
  );
}

export default App;
