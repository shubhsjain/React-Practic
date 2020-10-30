//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import {ClassComp, ClassComp1} from './components/ClassComp';
import FC from './components/FunctionalComp';
import Click from './components/Click'

function App() {
  return (
   <div>
     <h1>welcome
   </h1>
   <FC/>
   <ClassComp/>
   <ClassComp1/>
   <Click/>
   </div>
  );
}

export default App;
