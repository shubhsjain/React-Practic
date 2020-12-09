//import logo from './logo.svg';
//import './App.css';
/**{import {ClassComp, ClassComp1} from './components/ClassComp';
import FC from './components/FunctionalComp';
import Click from './components/Click'
import Hello from './components/Hello'}
import FunctionProps from './components/FunctionProps';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import ParentComp from './components/ParentComp'
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table'
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInpur from './components/FRParentInpur';
import PortalDemo from './components/PortalDemo';
import ErrorBoundry from './components/ErrorBoundry';
import Hero from './components/Hero';
import CounterSEF from './components/CounterSEFs'
import HoverCounter from './components/HoverCounter';
import ClickCounter from './ClickCounter';
import User from './components/User';
*/

import React from 'react';
import ClickCounterTwo from './components/ClickCounterTwo';
import Bounter from './components/Bounter';
import HowerCounterTwo from './components/HowerCounterTwo';

function App() {
  return (
   <div className="App ">
     <Bounter render = {(count, incrementCount) =><ClickCounterTwo count={count} incrementCount={incrementCount} /> } />
     <Bounter render =  {(count, incrementCount) =><HowerCounterTwo count={count} incrementCount={incrementCount} /> } />


   {/**   <ClickCounterTwo/>
      <HowerCounterTwo/>
      <User render ={ (isLoggedIn) => isLoggedIn ? 'shubhs' : 'Guest'}/>  
    * 
    * <ClickCounter/>
     <HoverCounter/> 
     <Counter/>
       *  <ErrorBoundry>
     <Hero heroName='batman'></Hero></ErrorBoundry> <ErrorBoundry>
     <Hero heroName='Superman'></Hero></ErrorBoundry> <ErrorBoundry>
     <Hero heroName ='Joker'></Hero>
     </ErrorBoundry>   

   <PortalDemo/>
   <FRParentInpur/>
   <FocusInput/>
   <RefsDemo/>
   <Form/>
   <LifeCycleA/>
   <FragmentDemo/>
   <Table/>
   <FC/>     
   <Stylesheet />
   <ClassComp/>
   <ClassComp1/>
   <Click/>
   <Hello/>                
   <Message/>
   <ParentComp/>
   <UserGreeting/>
   <NameList/>

   
   <Greet name= "Clark" heroName="Superman"><button>Allow</button></Greet>
   <Greet name= "Diana" heroName="Wonderwoman"><p>This is Children props </p></Greet>

   <FunctionProps name= "Bruce" heroName="Batman"><p>This is Children props </p></FunctionProps>
   <FunctionProps name= "Diana" heroName="Wonderwoman"><p>This is Children props </p></FunctionProps>
   <FunctionProps name= "Clark" heroName="Superman"><button>Allow</button></FunctionProps> 

   <Greet name= "Bruce" heroName="Batman"><p>This is Children props </p></Greet>

   <Welcome name= "Bruce" heroName="Batman"><p>This is Children props </p></Welcome>
 */}    
 </div>
  );
}

export default App;


