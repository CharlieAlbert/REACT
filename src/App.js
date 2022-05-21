//import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';

function App() {
  return (
    <div className="App">
    {/*
    <Greet name="Charlie" heroName="Albert">
        <button>Action</button>
      </Greet>
      <Greet name="Nderitu" heroName="Charles"/>
      <Welcome name="Jessica Pearson"/>
      <Welcome name="Harvey Specter"/>
    */}
      <Message />
      {/*<Hello /> */}
    </div>
  );
}
 

export default App;
