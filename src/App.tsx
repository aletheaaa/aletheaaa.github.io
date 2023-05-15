import React, { Component } from 'react';
import './App.css';
import Introduction from './components/Introduction'
import Projects from './components/Projects'
import NavBar from './components/NavBar'
import Landing from './components/Landing'


class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap" style={{ height: "300vh" }}>
            <NavBar></NavBar>
            <Landing></Landing>
            <Introduction></Introduction>
            <Projects></Projects>
      	</div>
      </div>
    );
  }
}

export default App;
