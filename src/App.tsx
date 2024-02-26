import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";
import {Content} from "./components/Content/Content";

function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <Content/>
    </div>
  );
}

export default App;
