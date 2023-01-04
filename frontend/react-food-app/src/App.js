import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";

function App() {
  /* return React.createElement(
    "div",
    { className: "customClass", id: "123" },
    "This is our first component"
  ); */
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
