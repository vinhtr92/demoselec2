import React from "react";
import ReactDOM from "react-dom";
import Select from "./Select";
import Select2 from "./Select2";

import "./styles.css";

const data = [
  {
    id: 1,
    name: "Photoshop",
    selected: false
  },
  {
    id: 2,
    name: "Css",
    selected: false
  },
  {
    id: 3,
    name: "Html",
    selected: false
  },
  {
    id: 4,
    name: "React",
    selected: false
  },
  {
    id: 5,
    name: "Wordpress",
    selected: false
  }
];

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Select
        data={data}
        onChangeOptions={(newOptions, itemSelected, arrayNameSelected) => {
          console.log(arrayNameSelected);
        }}
      />
      <Select2
        data={["Photoshop", "Wordpress", "React", "Html", "React native"]}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
