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
   <Hello/>
   <Greet name= "Bruce" heroName="Batman"><p>This is Children props </p></Greet>
   <Greet name= "Clark" heroName="Superman"><button>Allow</button></Greet>
   <Greet name= "Diana" heroName="Wonderwoman"><p>This is Children props </p></Greet>
   </div>
  );
}

export default App;
