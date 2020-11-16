import React from 'react'

 //            REGULAR FUNCTION


//function Greet () {
//  return <h1>Hello Shubham</h1>
// }
// export default Greet

//              USING CONSTANT

//const Greet = () => <h1>Hello Shubhs</h1>

//export default Greet

//              MULTI USE (USING PROPS)

const Greet = props => {
  console.log("props")
  return (
  <div>
    
    <h1> Hello {props.name} a.k.a {props.heroName}</h1>
    {props.children}
    </div>
    )
}
export default Greet