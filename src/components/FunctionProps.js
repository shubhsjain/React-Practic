import React from 'react'

function FunctionProps(props) {
    return(
        <div>
        <h2>this is functional Props</h2>
    <h3>welcome {props.name} a.k.a {props.heroName}</h3>{props.children}
        
       </div>
    )
}
export default FunctionProps