import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";
import {Content} from "./components/Content/Content";
import {StateType} from "./redux/store";

type AppPropsType = {
  state: StateType
}

function App({state}: AppPropsType) {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <Content state={state}/>
    </div>
  );
}

export default App;