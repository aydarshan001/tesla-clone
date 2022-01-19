import React from "react";
import Home from "./Home";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home>
        {" "}
        <h1>hello</h1>
      </Home>
    </div>
  );
}

export default App;
