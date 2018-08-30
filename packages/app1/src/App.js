import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Title } from "comp1";
import add from "lib1";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>
            1 + 1 = {add(1, 1)}
            <Title title="Hello monorepo" />
          </p>
        </header>
      </div>
    );
  }
}

export default App;
