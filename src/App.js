//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import {ClassComp, ClassComp1} from './components/ClassComp';
import FC from './components/FunctionalComp';
import Click from './components/Click'
import Counter from './components/Counter'
import ParentComp from './components/ParentComp'
import LifeCycleA from './components/LifeCycleA';
import Greet from './components/Greet'
import Hello from './components/Hello'


function App() {
  return (
   <div>
     <h1>welcome
   </h1>
   <FC/>
   <ClassComp/>
   <ClassComp1/>
   <Click/>
   <Counter/>
   <ParentComp/>
   <LifeCycleA/>
   <Greet/>
   <Hello/>
   </div>
  );
}

export default App;
