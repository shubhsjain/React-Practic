//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import NameList from './components/NameList';

/**{import {ClassComp, ClassComp1} from './components/ClassComp';
import FC from './components/FunctionalComp';
import Click from './components/Click'
import Counter from './components/Counter'
import LifeCycleA from './components/LifeCycleA';
import Hello from './components/Hello'}
import FunctionProps from './components/FunctionProps';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import ParentComp from './components/ParentComp'
import UserGreeting from './components/UserGreeting';
*/
function App() {
  return (
   <div>

   {/**    
   <FC/>
   <ClassComp/>
   <ClassComp1/>
   <Click/>
   <Counter/>
   <LifeCycleA/>
   <Hello/>                
   <Message/>
   <ParentComp/>
   <UserGreeting/>

   
   <Greet name= "Clark" heroName="Superman"><button>Allow</button></Greet>
   <Greet name= "Diana" heroName="Wonderwoman"><p>This is Children props </p></Greet>

   <FunctionProps name= "Bruce" heroName="Batman"><p>This is Children props </p></FunctionProps>
   <FunctionProps name= "Diana" heroName="Wonderwoman"><p>This is Children props </p></FunctionProps>
   <FunctionProps name= "Clark" heroName="Superman"><button>Allow</button></FunctionProps> 

   <Greet name= "Bruce" heroName="Batman"><p>This is Children props </p></Greet>

   <Welcome name= "Bruce" heroName="Batman"><p>This is Children props </p></Welcome>
 */}    
  <NameList/>
 </div>
  );
}

export default App;


