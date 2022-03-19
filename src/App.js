import "./App.css";
import React from "react";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Projects from "./Components/Projects";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="page-header"></div>
        <NavBar />
        <About />
        <Projects />
      </div>
    );
  }
}

export default App;
