//import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';

function App() {
  return (
    <div className="App">
    <EventBind />
    {/*
    <Message />
    <ClassClick />
    <FunctionClick />
    <Greet name="Charlie" heroName="Albert">
        <button>Action</button>
      </Greet>
      <Greet name="Nderitu" heroName="Charles"/>
      <Welcome name="Jessica" heroName="Pearson"/>
      <Welcome name="Harvey Specter"/>
    */}
      {/*<Hello /> */}
    </div>
  );
}
 

export default App;
