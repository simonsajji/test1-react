import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header.js"
import ImageCtn from "./ImageCtn.js"
import Description from "./Description.js"
import Footer from "./Footer.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ImageCtn />
        <Description />
        <Footer />

      </div>
    );
  }
}

export default App;
