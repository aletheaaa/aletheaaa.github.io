import React, { Component } from "react";
import "./App.css";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";

function App() {
  return (
    <div id="colorlib-page">
      <div id="container-wrap">
        <NavBar></NavBar>
        <Introduction></Introduction>
        <Projects></Projects>
      </div>
    </div>
  );
}

export default App;
