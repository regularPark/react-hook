import { useState } from "react";
import ReactDOM from "react-dom";

const content = [
  {
    tab: "section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "section 2",
    content: "I'm the content of the Section 2"
  }
];

const App = () => {
  return (
    <div className="App">
      {content.map((section) => (
        <button>{section.tab}</button>
      ))}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
